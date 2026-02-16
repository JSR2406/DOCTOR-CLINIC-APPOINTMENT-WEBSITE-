'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const clinics = [
    {
        id: 'pune-shivajinagar',
        name: 'Pune - Shivajinagar',
        address: '123, FC Road, Shivajinagar, Pune 411005',
        phone: '+91 76973 47683',
        timings: 'Mon-Sat: 10 AM - 7 PM',
        mapUrl: 'https://maps.google.com/?q=Shivajinagar+Pune',
    },
    {
        id: 'pune-kothrud',
        name: 'Pune - Kothrud',
        address: '456, Paud Road, Kothrud, Pune 411038',
        phone: '+91 76973 47683',
        timings: 'Mon-Sat: 10 AM - 7 PM',
        mapUrl: 'https://maps.google.com/?q=Kothrud+Pune',
    },
    {
        id: 'mumbai-andheri',
        name: 'Mumbai - Andheri',
        address: '789, Lokhandwala Complex, Andheri West, Mumbai 400053',
        phone: '+91 76973 47683',
        timings: 'Mon-Fri: 11 AM - 6 PM',
        mapUrl: 'https://maps.google.com/?q=Andheri+West+Mumbai',
    },
]

interface ClinicSelectorProps {
    value: string | undefined
    onChange: (clinicId: string) => void
    disabled?: boolean
}

export function ClinicSelector({
    value,
    onChange,
    disabled,
}: ClinicSelectorProps) {
    return (
        <div className="space-y-4">
            {clinics.map((clinic) => {
                const isSelected = value === clinic.id

                return (
                    <motion.button
                        key={clinic.id}
                        type="button"
                        disabled={disabled}
                        onClick={() => onChange(clinic.id)}
                        whileHover={!disabled ? { scale: 1.01 } : {}}
                        whileTap={!disabled ? { scale: 0.99 } : {}}
                        className={cn(
                            'w-full text-left p-4 rounded-xl border-2 transition-all',
                            isSelected
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-zinc-200 dark:border-zinc-700 hover:border-primary-300 dark:hover:border-primary-600',
                            disabled && 'opacity-50 cursor-not-allowed'
                        )}
                    >
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                                    {clinic.name}
                                    {isSelected && (
                                        <CheckCircle className="w-5 h-5 text-primary-500" />
                                    )}
                                </h3>

                                <div className="space-y-1 text-sm">
                                    <p className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-500" />
                                        {clinic.address}
                                    </p>
                                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                        <Clock className="w-4 h-4 flex-shrink-0 text-primary-500" />
                                        {clinic.timings}
                                    </p>
                                    <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                        <Phone className="w-4 h-4 flex-shrink-0 text-primary-500" />
                                        {clinic.phone}
                                    </p>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1',
                                    isSelected
                                        ? 'border-primary-500 bg-primary-500'
                                        : 'border-zinc-300 dark:border-zinc-600'
                                )}
                            >
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-2 h-2 rounded-full bg-white"
                                    />
                                )}
                            </div>
                        </div>
                    </motion.button>
                )
            })}
        </div>
    )
}

export { clinics }
