import { z } from 'zod'

// User registration schema
export const userRegistrationSchema = z
    .object({
        name: z.string().min(2, 'Name must be at least 2 characters'),
        email: z.string().email('Please enter a valid email'),
        phone: z
            .string()
            .min(10, 'Phone number must be at least 10 digits')
            .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one number'
            ),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    })

// User login schema
export const userLoginSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(1, 'Password is required'),
})

// Phone OTP schema
export const phoneOtpSchema = z.object({
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
    otp: z.string().length(6, 'OTP must be 6 digits').optional(),
})

// User profile update schema
export const userProfileSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
    dateOfBirth: z.date().optional(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().max(6).optional(),
    emergencyContact: z.string().optional(),
    medicalHistory: z.string().optional(),
})

// Appointment booking schema
export const appointmentBookingSchema = z.object({
    clinicId: z.string().min(1, 'Please select a clinic'),
    appointmentType: z.enum([
        'FIRST_CONSULTATION',
        'FOLLOW_UP',
        'ONLINE_CONSULTATION',
        'EMERGENCY',
    ]),
    date: z.coerce.date(),
    time: z.string().min(1, 'Please select a time slot'),
    reason: z
        .string()
        .min(10, 'Please describe your reason for visit (at least 10 characters)'),
    symptoms: z.string().optional(),
})

// Contact form schema
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(20, 'Message must be at least 20 characters'),
})

// Newsletter subscription schema
export const newsletterSchema = z.object({
    email: z.string().email('Please enter a valid email'),
})

// Blog comment schema (if comments are enabled)
export const blogCommentSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    comment: z.string().min(10, 'Comment must be at least 10 characters'),
})

// Testimonial submission schema
export const testimonialSchema = z.object({
    patientName: z.string().min(2, 'Name must be at least 2 characters'),
    patientAge: z.number().min(1).max(120).optional(),
    condition: z.string().min(3, 'Please specify your condition'),
    testimonial: z.string().min(50, 'Testimonial must be at least 50 characters'),
    rating: z.number().min(1).max(5),
})

// Type exports
export type UserRegistrationInput = z.infer<typeof userRegistrationSchema>
export type UserLoginInput = z.infer<typeof userLoginSchema>
export type PhoneOtpInput = z.infer<typeof phoneOtpSchema>
export type UserProfileInput = z.infer<typeof userProfileSchema>
export type AppointmentBookingInput = z.infer<typeof appointmentBookingSchema>
export type ContactFormInput = z.infer<typeof contactFormSchema>
export type NewsletterInput = z.infer<typeof newsletterSchema>
export type BlogCommentInput = z.infer<typeof blogCommentSchema>
export type TestimonialInput = z.infer<typeof testimonialSchema>
