'use client'

import Link from 'next/link'
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    Heart,
    ArrowRight,
    Clock,
} from 'lucide-react'

const quickLinks = [
    { label: 'About Dr. Anshita', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Clinic Locations', href: '/clinics' },
    { label: 'Book Appointment', href: '/book' },
    { label: 'Patient Stories', href: '/testimonials' },
    { label: 'Health Blog', href: '/blog' },
]

const services = [
    { label: 'Autoimmune Diseases', href: '/services/autoimmune' },
    { label: 'Thyroid Disorders', href: '/services/thyroid' },
    { label: 'PCOS & Infertility', href: '/services/pcos' },
    { label: 'Skin Conditions', href: '/services/skin' },
    { label: 'Digestive Issues', href: '/services/digestive' },
    { label: 'Lifestyle Disorders', href: '/services/lifestyle' },
]

const clinics = [
    {
        name: 'Pune - Shivajinagar',
        timing: 'Mon-Sat: 10 AM - 2 PM',
    },
    {
        name: 'Pune - Kothrud',
        timing: 'Mon-Sat: 4 PM - 8 PM',
    },
    {
        name: 'Mumbai - Andheri',
        timing: 'Sunday: 10 AM - 4 PM',
    },
]

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 text-white">
            {/* Top CTA Section */}
            <div className="border-b border-slate-800">
                <div className="container-custom py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold mb-2">
                                Ready to Start Your Healing Journey?
                            </h3>
                            <p className="text-slate-400">
                                Book your consultation today and experience natural healing
                            </p>
                        </div>
                        <Link href="/book">
                            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center gap-2 transition-colors">
                                Book Appointment
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">DA</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Dr. Anshita</h3>
                                <p className="text-xs text-slate-400">Singh Rathore</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed">
                            Expert homeopathic treatment for autoimmune disorders, thyroid,
                            PCOS, and lifestyle diseases with a holistic healing approach.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:+917756860444" className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                </div>
                                +91 77568 60444
                            </a>
                            <a href="mailto:info@dranshita.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-emerald-400 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-emerald-400" />
                                </div>
                                info@dranshita.com
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2 pt-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-lg">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.label}>
                                    <Link
                                        href={service.href}
                                        className="text-sm text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Clinic Hours Column */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-lg">
                            Clinic Locations
                        </h4>
                        <div className="space-y-4">
                            {clinics.map((clinic) => (
                                <div key={clinic.name} className="p-4 rounded-xl bg-slate-800 border border-slate-700">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-white text-sm">{clinic.name}</p>
                                            <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                                <Clock className="w-3 h-3" />
                                                {clinic.timing}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                            © {currentYear} Dr. Anshita Singh Rathore. Made with
                            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                            for better health
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-slate-300 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/refund" className="hover:text-slate-300 transition-colors">
                                Refund Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
