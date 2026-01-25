import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Rohan Medical Complex - Khanpur',
    description: 'Premium Medical Care With Expert Doctors - Ruhan Medical And Surgical Complex, Khanpur',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
