'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
    const whatsappNumber = '917756860444'
    const message =
        'Hello Dr. Anshita, I would like to book an appointment. Could you please help me with available slots?'

    return (
        <motion.a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg flex items-center justify-center text-white transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />

            {/* Tooltip */}
            <span className="absolute right-16 bg-slate-800 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat on WhatsApp
            </span>
        </motion.a>
    )
}
