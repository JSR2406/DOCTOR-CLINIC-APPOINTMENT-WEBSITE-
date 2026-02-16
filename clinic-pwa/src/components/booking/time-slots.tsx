'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

// Available time slots
const timeSlots = [
    { id: '10:00', label: '10:00 AM', period: 'morning' },
    { id: '10:30', label: '10:30 AM', period: 'morning' },
    { id: '11:00', label: '11:00 AM', period: 'morning' },
    { id: '11:30', label: '11:30 AM', period: 'morning' },
    { id: '12:00', label: '12:00 PM', period: 'afternoon' },
    { id: '12:30', label: '12:30 PM', period: 'afternoon' },
    { id: '14:00', label: '2:00 PM', period: 'afternoon' },
    { id: '14:30', label: '2:30 PM', period: 'afternoon' },
    { id: '15:00', label: '3:00 PM', period: 'afternoon' },
    { id: '15:30', label: '3:30 PM', period: 'afternoon' },
    { id: '16:00', label: '4:00 PM', period: 'evening' },
    { id: '16:30', label: '4:30 PM', period: 'evening' },
    { id: '17:00', label: '5:00 PM', period: 'evening' },
    { id: '17:30', label: '5:30 PM', period: 'evening' },
    { id: '18:00', label: '6:00 PM', period: 'evening' },
    { id: '18:30', label: '6:30 PM', period: 'evening' },
]

interface TimeSlotsProps {
    value: string | undefined
    onChange: (time: string) => void
    bookedSlots?: string[] // Slots that are already booked
    disabled?: boolean
}

export function TimeSlots({
    value,
    onChange,
    bookedSlots = [],
    disabled,
}: TimeSlotsProps) {
    const morningSlots = timeSlots.filter((s) => s.period === 'morning')
    const afternoonSlots = timeSlots.filter((s) => s.period === 'afternoon')
    const eveningSlots = timeSlots.filter((s) => s.period === 'evening')

    const SlotGroup = ({
        title,
        slots,
    }: {
        title: string
        slots: typeof timeSlots
    }) => (
        <div className="space-y-3">
            <h4 className="text-sm font-medium text-zinc-600 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {title}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {slots.map((slot) => {
                    const isBooked = bookedSlots.includes(slot.id)
                    const isSelected = value === slot.id

                    return (
                        <motion.button
                            key={slot.id}
                            type="button"
                            disabled={disabled || isBooked}
                            onClick={() => onChange(slot.id)}
                            whileHover={!isBooked && !disabled ? { scale: 1.02 } : {}}
                            whileTap={!isBooked && !disabled ? { scale: 0.98 } : {}}
                            className={cn(
                                'relative px-3 py-2 rounded-lg text-sm font-medium transition-all',
                                'border-2',
                                isSelected
                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                    : 'border-zinc-200 hover:border-primary-300',
                                isBooked &&
                                'opacity-50 cursor-not-allowed bg-zinc-100 line-through',
                                disabled && 'opacity-50 cursor-not-allowed'
                            )}
                        >
                            {slot.label}
                            {isBooked && (
                                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                                    Full
                                </span>
                            )}
                        </motion.button>
                    )
                })}
            </div>
        </div>
    )

    return (
        <div className="space-y-6">
            <SlotGroup title="Morning (10 AM - 12 PM)" slots={morningSlots} />
            <SlotGroup title="Afternoon (12 PM - 4 PM)" slots={afternoonSlots} />
            <SlotGroup title="Evening (4 PM - 7 PM)" slots={eveningSlots} />
        </div>
    )
}
