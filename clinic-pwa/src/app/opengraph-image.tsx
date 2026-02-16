import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Dr. Anshita Singh Rathore - Homeopathic Clinic'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #d1fae5 100%)',
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        marginBottom: 30,
                    }}
                >
                    <span
                        style={{
                            color: 'white',
                            fontSize: 48,
                            fontWeight: 'bold',
                        }}
                    >
                        DA
                    </span>
                </div>

                {/* Title */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: 48,
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Dr. Anshita Singh Rathore
                    </span>
                    <span
                        style={{
                            fontSize: 28,
                            color: '#71717a',
                            marginTop: 10,
                        }}
                    >
                        Expert Homeopathic Consultant
                    </span>
                </div>

                {/* Tagline */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 20,
                        marginTop: 40,
                    }}
                >
                    <span
                        style={{
                            fontSize: 20,
                            color: '#3f3f46',
                            padding: '8px 16px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            borderRadius: 20,
                        }}
                    >
                        Autoimmune | Thyroid | PCOS | Lifestyle
                    </span>
                </div>

                {/* Locations */}
                <span
                    style={{
                        fontSize: 18,
                        color: '#71717a',
                        marginTop: 30,
                    }}
                >
                    Pune & Mumbai | 15+ Years Experience | 10,000+ Patients
                </span>
            </div>
        ),
        {
            ...size,
        }
    )
}
