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
            <body className="text-[#1c1c1c] bg-[#F2F2F2] w-11/12 sm:w-5/6 lg:w-3/4 mx-auto px-4 sm:px-6 lg:px-10">{children}</body>
        </html>
    )
}
