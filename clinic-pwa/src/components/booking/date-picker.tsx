'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format, addDays, isBefore, isToday, startOfToday } from 'date-fns'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DatePickerProps {
    value: Date | undefined
    onChange: (date: Date | undefined) => void
    disabled?: boolean
}

export function DatePicker({ value, onChange, disabled }: DatePickerProps) {
    const [open, setOpen] = useState(false)
    const today = startOfToday()
    const maxDate = addDays(today, 30) // Can book up to 30 days in advance

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    disabled={disabled}
                    className={cn(
                        'w-full justify-start text-left font-normal h-12',
                        !value && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? format(value, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={(date) => {
                        onChange(date)
                        setOpen(false)
                    }}
                    disabled={(date) =>
                        isBefore(date, today) || isBefore(maxDate, date)
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
