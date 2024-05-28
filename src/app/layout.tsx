import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Juan Lagunas",
    description: "Personal site",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="text-[#151010] bg-[#E68A00] px-4 sm:px-6 lg:px-10">{children}</body>
        </html>
    )
}
