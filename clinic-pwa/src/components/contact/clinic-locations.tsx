'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'

const clinics = [
    {
        id: 'pune-shivajinagar',
        name: 'Pune - Shivajinagar',
        address: '123, FC Road, Shivajinagar, Pune 411005',
        phone: '+91 76973 47683',
        timings: 'Mon-Sat: 10 AM - 7 PM',
        mapUrl: 'https://maps.google.com/?q=18.5204,73.8567',
        embedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.25!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
        id: 'pune-kothrud',
        name: 'Pune - Kothrud',
        address: '456, Paud Road, Kothrud, Pune 411038',
        phone: '+91 76973 47683',
        timings: 'Mon-Sat: 10 AM - 7 PM',
        mapUrl: 'https://maps.google.com/?q=18.5074,73.8077',
        embedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.25!2d73.8077!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzI2LjYiTiA3M8KwNDgnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
        id: 'mumbai-andheri',
        name: 'Mumbai - Andheri',
        address: '789, Lokhandwala Complex, Andheri West, Mumbai 400053',
        phone: '+91 76973 47683',
        timings: 'Mon-Fri: 11 AM - 6 PM',
        mapUrl: 'https://maps.google.com/?q=19.1364,72.8296',
        embedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.25!2d72.8296!3d19.1364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA4JzExLjAiTiA3MsKwNDknNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
]

export function ClinicLocations() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Our Clinic Locations
            </h2>

            <div className="grid gap-6">
                {clinics.map((clinic, index) => (
                    <motion.div
                        key={clinic.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <GlassCard className="overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                        {clinic.name}
                                    </h3>

                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-zinc-600 dark:text-zinc-400">
                                                {clinic.address}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                            <a
                                                href={`tel:${clinic.phone.replace(/\s/g, '')}`}
                                                className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 transition-colors"
                                            >
                                                {clinic.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                                            <span className="text-zinc-600 dark:text-zinc-400">
                                                {clinic.timings}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={clinic.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Navigation className="w-4 h-4" />
                                                Get Directions
                                            </Button>
                                        </a>
                                        <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                                            <Button size="sm" className="gap-2">
                                                <Phone className="w-4 h-4" />
                                                Call Now
                                            </Button>
                                        </a>
                                    </div>
                                </div>

                                {/* Map Embed */}
                                <div className="h-48 md:h-auto min-h-[200px] rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                    <iframe
                                        src={clinic.embedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Map - ${clinic.name}`}
                                    />
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
