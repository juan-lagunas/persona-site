"use client"

import Link from "next/link"

const navigation = [
    { name: "About", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
]

export default function Header() {
    return (
        <div className="w-full">
            <nav className=" font-bold">
                {/* large */}
                <div className="flex h-16 items-center justify-between text-xl">
                    <div className="flex text-3xl">
                        <Link href="." className="transition ease-in-out duration-200 cursor-pointer">Betillo</Link>
                    </div>

                    <div className="flex flex-1 justify-end">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="flex py-2 px-4 m-2 rounded-lg hover:bg-[#E68A00] hover:text-[#0A0C0D] transition ease-in-out duration-200 cursor-pointer">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            
        </div>
    )
}