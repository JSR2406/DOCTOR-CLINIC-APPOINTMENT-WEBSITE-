'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    X,
    Send,
    Mic,
    MicOff,
    Volume2,
    VolumeX,
    Bot,
    User,
    Calendar,
    Clock,
    MapPin,
    Stethoscope,
    Sparkles,
    RefreshCw,
    ChevronDown,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

interface QuickAction {
    label: string
    icon: React.ReactNode
    prompt: string
}

// Clinic data for responses
const clinicData = {
    name: 'Dr. Anshita Singh Rathore',
    specialty: 'Homeopathic Consultant',
    qualifications: 'BHMS, MD (Homeopathy)',
    experience: '15+ years',
    phone: '+91 7756860444',
    email: 'info@dranshita.com',
    clinics: [
        {
            name: 'Pune - Shivajinagar',
            address: 'Shivajinagar, Pune, Maharashtra',
            timing: 'Mon-Sat: 10:00 AM - 2:00 PM',
        },
        {
            name: 'Pune - Kothrud',
            address: 'Kothrud, Pune, Maharashtra',
            timing: 'Mon-Sat: 4:00 PM - 8:00 PM',
        },
        {
            name: 'Mumbai - Andheri',
            address: 'Andheri West, Mumbai, Maharashtra',
            timing: 'Sun: 10:00 AM - 4:00 PM',
        },
    ],
    services: [
        'Autoimmune Diseases (Rheumatoid Arthritis, Lupus, MS)',
        'Thyroid Disorders (Hypothyroidism, Hyperthyroidism, Hashimoto\'s)',
        'PCOS & Infertility',
        'Lifestyle Disorders (Diabetes, Hypertension, Obesity)',
        'Skin Conditions (Eczema, Psoriasis, Acne, Vitiligo)',
        'Digestive Issues (IBS, Acid Reflux, Ulcers)',
    ],
    consultationFee: '₹500 - ₹1000',
    slots: [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '4:00 PM', '4:30 PM',
        '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM'
    ]
}

// AI Response generator
function generateAIResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase()

    // Greeting responses
    if (lowerMessage.match(/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)/)) {
        return `Hello! 👋 Welcome to Dr. Anshita Singh Rathore's Clinic. I'm your AI health assistant. How can I help you today?\n\nI can assist you with:\n• 📅 Booking appointments\n• ⏰ Checking available slots\n• 🏥 Clinic locations & timings\n• 💊 Treatment information\n• 🩺 Symptom guidance\n\nFeel free to ask me anything!`
    }

    // Booking/Appointment queries
    if (lowerMessage.match(/book|appointment|schedule|consultation|visit/)) {
        return `📅 **Booking an Appointment**\n\nI'd be happy to help you book an appointment with Dr. Anshita!\n\n**Available Clinics:**\n1. 📍 Pune - Shivajinagar (Mon-Sat: 10 AM - 2 PM)\n2. 📍 Pune - Kothrud (Mon-Sat: 4 PM - 8 PM)\n3. 📍 Mumbai - Andheri (Sun: 10 AM - 4 PM)\n\n**Consultation Fee:** ${clinicData.consultationFee}\n\nTo book, you can:\n• Call us at **${clinicData.phone}**\n• Use our online booking form at /book\n• Chat with us on WhatsApp\n\nWhich clinic would you prefer?`
    }

    // Available slots query
    if (lowerMessage.match(/slot|available|time|timing|when|opening|hours/)) {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        return `⏰ **Available Time Slots**\n\n**Today's Available Slots:**\n• 10:00 AM ✅\n• 11:00 AM ✅\n• 11:30 AM ✅\n• 4:30 PM ✅\n• 5:00 PM ✅\n• 6:30 PM ✅\n\n**Clinic Timings:**\n🏥 Shivajinagar: Mon-Sat (10 AM - 2 PM)\n🏥 Kothrud: Mon-Sat (4 PM - 8 PM)\n🏥 Andheri: Sunday (10 AM - 4 PM)\n\n💡 *Tip: Book in advance for better availability!*\n\nWould you like me to help you book a specific slot?`
    }

    // Location/Clinic query
    if (lowerMessage.match(/location|address|where|clinic|direction|map|reach/)) {
        return `🏥 **Our Clinic Locations**\n\n**1. Pune - Shivajinagar**\n📍 Address: Shivajinagar, Pune, Maharashtra\n🕐 Timing: Mon-Sat, 10:00 AM - 2:00 PM\n\n**2. Pune - Kothrud**\n📍 Address: Kothrud, Pune, Maharashtra\n🕐 Timing: Mon-Sat, 4:00 PM - 8:00 PM\n\n**3. Mumbai - Andheri**\n📍 Address: Andheri West, Mumbai, Maharashtra\n🕐 Timing: Sunday, 10:00 AM - 4:00 PM\n\n📞 Contact: ${clinicData.phone}\n📧 Email: ${clinicData.email}\n\nNeed directions to any specific clinic?`
    }

    // Contact information
    if (lowerMessage.match(/contact|phone|call|number|whatsapp|email/)) {
        return `📞 **Contact Information**\n\n**Dr. Anshita Singh Rathore**\n${clinicData.qualifications}\n\n📱 Phone: **${clinicData.phone}**\n💬 WhatsApp: Click the green button below!\n📧 Email: ${clinicData.email}\n\n🕐 **Response Time:** Usually within 1-2 hours during working hours.\n\nFor emergency consultations, please call directly.`
    }

    // Services/Treatment query
    if (lowerMessage.match(/service|treatment|treat|cure|medicine|therapy|what do you|specializ/)) {
        return `💊 **Our Specializations**\n\nDr. Anshita provides expert homeopathic treatment for:\n\n🧠 **Autoimmune Diseases**\n• Rheumatoid Arthritis, Lupus, MS\n\n🦋 **Thyroid Disorders**\n• Hypothyroidism, Hyperthyroidism, Hashimoto's\n\n👶 **PCOS & Infertility**\n• Hormonal imbalances, Fertility enhancement\n\n❤️ **Lifestyle Disorders**\n• Diabetes, Hypertension, Obesity\n\n✨ **Skin Conditions**\n• Eczema, Psoriasis, Acne, Vitiligo\n\n🍃 **Digestive Issues**\n• IBS, Acid Reflux, Chronic issues\n\n*All treatments are natural, holistic, and side-effect free!*\n\nWould you like more details about any specific treatment?`
    }

    // Symptoms/Health concerns
    if (lowerMessage.match(/symptom|pain|problem|suffering|feeling|sick|disease|condition|health issue|diagnos/)) {
        return `🩺 **Symptom Guidance**\n\nI understand you're experiencing health concerns. While I can provide general information, please remember that only a qualified doctor can properly diagnose and treat conditions.\n\n**Common symptoms we treat:**\n• Chronic fatigue and weakness\n• Joint pain and inflammation\n• Hormonal imbalances\n• Digestive discomfort\n• Skin problems\n• Thyroid issues\n• Infertility concerns\n\n**⚠️ Important Notes:**\n• Homeopathy treats the root cause, not just symptoms\n• Treatment is personalized for each patient\n• First consultation includes detailed case history\n\n**📞 For proper diagnosis, please:**\n• Book a consultation with Dr. Anshita\n• Share your complete medical history\n\nWould you like to book an appointment to discuss your symptoms?`
    }

    // Fee/Cost query
    if (lowerMessage.match(/fee|cost|price|charge|payment|how much|expensive/)) {
        return `💰 **Consultation Fees**\n\n**First Consultation:** ₹800 - ₹1000\n*Includes detailed case history & treatment plan*\n\n**Follow-up Visits:** ₹500 - ₹600\n*Includes progress review & medicine adjustment*\n\n**Online Consultation:** ₹700\n*Video call with prescription*\n\n**Payment Options:**\n• Cash\n• UPI/Google Pay/PhonePe\n• Credit/Debit Cards\n• Bank Transfer\n\n*Medicine costs are additional and vary based on treatment.*\n\nWould you like to proceed with booking?`
    }

    // Doctor information
    if (lowerMessage.match(/doctor|dr|anshita|about|qualification|experience|who/)) {
        return `👩‍⚕️ **About Dr. Anshita Singh Rathore**\n\n**Qualifications:** BHMS, MD (Homeopathy)\n**Experience:** 15+ Years\n**Specialty:** Homeopathic Medicine\n\n**Expertise in:**\n• Autoimmune Disease Management\n• Thyroid & Hormonal Disorders\n• Women's Health (PCOS, Infertility)\n• Chronic Disease Treatment\n\n**Achievements:**\n• 10,000+ Happy Patients\n• 4.9/5 Patient Rating\n• Featured in Health Publications\n\n**Philosophy:**\n*"Healing should be gentle, lasting, and address the root cause, not just symptoms."*\n\nWould you like to book a consultation with Dr. Anshita?`
    }

    // Online consultation
    if (lowerMessage.match(/online|video|virtual|remote|teleconsult/)) {
        return `💻 **Online Consultation Available!**\n\nYes, Dr. Anshita offers online video consultations for patients who can't visit in person.\n\n**How it works:**\n1. 📝 Book an online appointment\n2. 📞 Receive video call link via WhatsApp\n3. 💬 Discuss your health concerns\n4. 💊 Get e-prescription & medicine delivery\n\n**Benefits:**\n• Consult from anywhere in India\n• No travel required\n• Same quality care as in-person\n• Medicine delivered to your doorstep\n\n**Fee:** ₹700\n\nWould you like to book an online consultation?`
    }

    // Thank you / Goodbye
    if (lowerMessage.match(/thank|thanks|bye|goodbye|see you|take care/)) {
        return `🙏 You're welcome! Thank you for reaching out to Dr. Anshita Singh Rathore's Clinic.\n\n**Quick Reminders:**\n📞 Contact: ${clinicData.phone}\n🏥 Book online: /book\n💬 WhatsApp: Click the green button\n\nWishing you good health! 🌿\n\n*Feel free to come back anytime you have questions!*`
    }

    // Homeopathy related
    if (lowerMessage.match(/homeopath|natural|holistic|alternative|ayurved|side effect/)) {
        return `🌿 **About Homeopathic Treatment**\n\nHomeopathy is a natural healing system that:\n\n✅ Treats the root cause of diseases\n✅ Has no side effects\n✅ Works gently but effectively\n✅ Is personalized for each patient\n✅ Strengthens overall immunity\n✅ Can be used alongside other treatments\n\n**How Dr. Anshita practices:**\n• Detailed case-taking (45-60 mins for first visit)\n• Constitutional remedy selection\n• Regular follow-ups for monitoring\n• Holistic lifestyle guidance\n\n**Common Myths Debunked:**\n❌ Homeopathy is slow - *Can show quick results in acute conditions*\n❌ It's just placebo - *Proven effective in countless cases*\n❌ Can't treat serious diseases - *Excellent for chronic conditions*\n\nAny specific concerns about homeopathic treatment?`
    }

    // Default response for unmatched queries
    return `Thank you for your question! 🤔\n\nI'm here to help you with:\n\n📅 **Appointments** - Book or check availability\n🏥 **Clinic Info** - Locations, timings, contact\n💊 **Treatments** - Services we offer\n🩺 **Health Guidance** - General symptom information\n💰 **Fees** - Consultation costs\n\n**Quick Actions:**\n• Say "Book appointment" to schedule a visit\n• Say "Available slots" to check timings\n• Say "Clinic locations" for addresses\n• Say "Treatment options" for services\n\nOr call us directly at **${clinicData.phone}** for immediate assistance!\n\nHow can I help you today?`
}

const quickActions: QuickAction[] = [
    { label: 'Book Appointment', icon: <Calendar className="w-4 h-4" />, prompt: 'I want to book an appointment' },
    { label: 'Available Slots', icon: <Clock className="w-4 h-4" />, prompt: 'What slots are available today?' },
    { label: 'Clinic Location', icon: <MapPin className="w-4 h-4" />, prompt: 'Where are your clinics located?' },
    { label: 'Our Services', icon: <Stethoscope className="w-4 h-4" />, prompt: 'What treatments do you offer?' },
]

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [isListening, setIsListening] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [voiceEnabled, setVoiceEnabled] = useState(true)
    const [showScrollButton, setShowScrollButton] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const messagesContainerRef = useRef<HTMLDivElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognitionRef = useRef<any>(null)
    const synthRef = useRef<SpeechSynthesis | null>(null)

    // Initialize speech recognition
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition()
                recognitionRef.current.continuous = false
                recognitionRef.current.interimResults = false
                recognitionRef.current.lang = 'en-IN'

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                recognitionRef.current.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript
                    setInputValue(transcript)
                    setIsListening(false)
                }

                recognitionRef.current.onerror = () => {
                    setIsListening(false)
                }

                recognitionRef.current.onend = () => {
                    setIsListening(false)
                }
            }

            synthRef.current = window.speechSynthesis
        }
    }, [])

    // Scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    // Check scroll position for scroll button
    const handleScroll = useCallback(() => {
        if (messagesContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
            setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100)
        }
    }, [])

    // Initial greeting when chat opens
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greeting: Message = {
                id: Date.now().toString(),
                role: 'assistant',
                content: `Hello! 👋 Welcome to Dr. Anshita Singh Rathore's Clinic!\n\nI'm your AI health assistant, here to help you 24/7 with:\n\n📅 **Booking Appointments**\n⏰ **Checking Available Slots**\n🏥 **Clinic Information**\n💊 **Treatment Guidance**\n🩺 **Symptom Support**\n\nHow can I assist you today?`,
                timestamp: new Date(),
            }
            setMessages([greeting])
        }
    }, [isOpen, messages.length])

    // Text-to-speech function
    const speakText = (text: string) => {
        if (!voiceEnabled || !synthRef.current) return

        // Clean markdown formatting for speech
        const cleanText = text
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/•/g, '')
            .replace(/\n/g, '. ')
            .replace(/#{1,6}/g, '')
            .replace(/📅|⏰|🏥|💊|🩺|👋|📍|🕐|📞|📧|💬|💰|👩‍⚕️|💻|🙏|🌿|✅|❌|🤔|🧠|🦋|👶|❤️|✨|🍃/g, '')

        const utterance = new SpeechSynthesisUtterance(cleanText)
        utterance.lang = 'en-IN'
        utterance.rate = 0.9
        utterance.pitch = 1

        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)
        utterance.onerror = () => setIsSpeaking(false)

        synthRef.current.speak(utterance)
    }

    // Stop speaking
    const stopSpeaking = () => {
        if (synthRef.current) {
            synthRef.current.cancel()
            setIsSpeaking(false)
        }
    }

    // Toggle voice input
    const toggleVoiceInput = () => {
        if (!recognitionRef.current) {
            alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.')
            return
        }

        if (isListening) {
            recognitionRef.current.stop()
            setIsListening(false)
        } else {
            recognitionRef.current.start()
            setIsListening(true)
        }
    }

    // Send message
    const sendMessage = async (content: string) => {
        if (!content.trim()) return

        stopSpeaking()

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: content.trim(),
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate AI thinking time
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700))

        // Generate AI response
        const aiResponse = generateAIResponse(content)

        const assistantMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: aiResponse,
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, assistantMessage])
        setIsTyping(false)

        // Speak the response if voice is enabled
        if (voiceEnabled) {
            speakText(aiResponse)
        }
    }

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        sendMessage(inputValue)
    }

    // Handle quick action click
    const handleQuickAction = (prompt: string) => {
        sendMessage(prompt)
    }

    // Reset chat
    const resetChat = () => {
        stopSpeaking()
        setMessages([])
        setTimeout(() => {
            const greeting: Message = {
                id: Date.now().toString(),
                role: 'assistant',
                content: `Hello! 👋 Welcome back! How can I help you today?`,
                timestamp: new Date(),
            }
            setMessages([greeting])
        }, 300)
    }

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all",
                    isOpen
                        ? "bg-slate-800 text-white"
                        : "bg-emerald-600 text-white"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="relative"
                        >
                            <Bot className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Tooltip when closed */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: 1.5 }}
                        className="fixed bottom-8 right-24 z-40 bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg pointer-events-none flex items-center gap-2 border border-slate-200"
                    >
                        <Sparkles className="w-4 h-4 text-primary-500" />
                        AI Health Assistant
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">AI Health Assistant</h3>
                                    <p className="text-white/80 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online • Dr. Anshita's Clinic
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                    title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
                                >
                                    {voiceEnabled ? (
                                        <Volume2 className="w-5 h-5 text-white" />
                                    ) : (
                                        <VolumeX className="w-5 h-5 text-white/60" />
                                    )}
                                </button>
                                <button
                                    onClick={resetChat}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                    title="Reset chat"
                                >
                                    <RefreshCw className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div
                            ref={messagesContainerRef}
                            onScroll={handleScroll}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
                        >
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "flex gap-3",
                                        message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                                            message.role === 'user'
                                                ? "bg-emerald-600 text-white"
                                                : "bg-emerald-100 text-emerald-600"
                                        )}
                                    >
                                        {message.role === 'user' ? (
                                            <User className="w-4 h-4" />
                                        ) : (
                                            <Bot className="w-4 h-4" />
                                        )}
                                    </div>
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-2xl px-4 py-3 text-sm",
                                            message.role === 'user'
                                                ? "bg-emerald-600 text-white rounded-br-md"
                                                : "bg-slate-100 text-slate-800 rounded-bl-md"
                                        )}
                                    >
                                        <div className="whitespace-pre-wrap leading-relaxed">
                                            {message.content.split('\n').map((line, i) => (
                                                <span key={i}>
                                                    {line.startsWith('**') && line.endsWith('**') ? (
                                                        <strong>{line.replace(/\*\*/g, '')}</strong>
                                                    ) : line.includes('**') ? (
                                                        line.split('**').map((part, j) => (
                                                            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                                        ))
                                                    ) : (
                                                        line
                                                    )}
                                                    {i < message.content.split('\n').length - 1 && <br />}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-[10px] mt-1 opacity-60">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing indicator */}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Scroll to bottom button */}
                        <AnimatePresence>
                            {showScrollButton && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    onClick={scrollToBottom}
                                    className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-slate-800 text-white p-2 rounded-full shadow-lg"
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Quick Actions */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2">
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.label}
                                            onClick={() => handleQuickAction(action.prompt)}
                                            className="flex items-center gap-2 px-3 py-2 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors"
                                        >
                                            {action.icon}
                                            {action.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200">
                            <div className="flex items-center gap-2">
                                <div className="flex-1 relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder={isListening ? "Listening..." : "Type your message..."}
                                        className={cn(
                                            "w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm",
                                            isListening && "border-red-500 animate-pulse"
                                        )}
                                        disabled={isTyping}
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleVoiceInput}
                                        className={cn(
                                            "absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors",
                                            isListening
                                                ? "bg-red-500 text-white"
                                                : "text-slate-400 hover:text-emerald-600"
                                        )}
                                    >
                                        {isListening ? (
                                            <MicOff className="w-5 h-5" />
                                        ) : (
                                            <Mic className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Speaking indicator */}
                            {isSpeaking && (
                                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-600">
                                    <Volume2 className="w-4 h-4 animate-pulse" />
                                    Speaking... <button onClick={stopSpeaking} className="underline">Stop</button>
                                </div>
                            )}
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

// Extend Window interface for speech recognition
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SpeechRecognition: any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        webkitSpeechRecognition: any
    }
}
