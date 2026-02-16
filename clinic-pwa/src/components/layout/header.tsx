'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Calendar, ChevronDown, ChevronRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const services = [
    { name: 'Autoimmune Diseases', href: '/services/autoimmune-diseases' },
    { name: 'Thyroid Disorders', href: '/services/thyroid-disorders' },
    { name: 'PCOS & Infertility', href: '/services/pcos-infertility' },
    { name: 'Lifestyle Disorders', href: '/services/lifestyle-disorders' },
    { name: 'Skin Conditions', href: '/services/skin-conditions' },
    { name: 'Digestive Issues', href: '/services/digestive-issues' },
]

const clinics = [
    { name: 'Pune - Shivajinagar', href: '/clinics/pune-shivajinagar' },
    { name: 'Pune - Kothrud', href: '/clinics/pune-kothrud' },
    { name: 'Mumbai - Andheri', href: '/clinics/mumbai-andheri' },
]

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true, dropdown: services },
    { name: 'Clinics', href: '/clinics', hasDropdown: true, dropdown: clinics },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const { scrollY } = useScroll()

    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
    )

    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ['0 0 0 0 rgba(0, 0, 0, 0)', '0 1px 3px 0 rgba(0, 0, 0, 0.1)']
    )

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            style={{
                backgroundColor: headerBg,
                boxShadow: headerShadow,
            }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled && 'backdrop-blur-lg border-b border-slate-200'
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg">DA</span>
                        </div>
                        <div className="hidden md:block">
                            <p className="font-heading font-bold text-lg text-slate-900">
                                Dr. Anshita
                            </p>
                            <p className="text-xs text-slate-500">
                                Homeopathic Consultant
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="w-4 h-4" />
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {link.hasDropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 pt-2">
                                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 py-2 min-w-[220px]">
                                            {link.dropdown?.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+917756860444"
                            className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-600"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 77568 60444</span>
                        </a>

                        <Link href="/book" className="hidden sm:block">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                                <Calendar className="w-4 h-4" />
                                Book Appointment
                            </Button>
                        </Link>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6 text-slate-700" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-sm bg-white border-slate-200">
                                <div className="flex flex-col h-full py-6">
                                    {/* Mobile Logo */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">DA</span>
                                        </div>
                                        <div>
                                            <p className="font-heading font-bold text-lg text-slate-900">
                                                Dr. Anshita
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Singh Rathore
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mobile Navigation */}
                                    <nav className="flex-1 space-y-1">
                                        {navLinks.map((link) => (
                                            <div key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                                                    className="flex items-center justify-between py-3 text-slate-700 font-medium hover:text-emerald-600 transition-colors"
                                                >
                                                    {link.name}
                                                    {link.hasDropdown && (
                                                        <ChevronRight className="w-4 h-4" />
                                                    )}
                                                </Link>
                                                {link.hasDropdown && (
                                                    <div className="pl-4 border-l-2 border-slate-100 ml-2 space-y-1">
                                                        {link.dropdown?.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block py-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </nav>

                                    {/* Mobile Footer */}
                                    <div className="pt-6 border-t border-slate-200 space-y-4">
                                        <a
                                            href="tel:+917756860444"
                                            className="flex items-center gap-2 text-lg font-medium text-emerald-600"
                                        >
                                            <Phone className="w-5 h-5" />
                                            +91 77568 60444
                                        </a>

                                        <Link href="/book" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                                                <Calendar className="w-5 h-5" />
                                                Book Appointment
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
