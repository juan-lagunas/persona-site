"use client"

import Link from "next/link"

const navigation = [
    { name: "About", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
]

export default function Nav() {
    return (
        <div className="w-full h-16 flex px-2 font-bold items-center">
            {/* large */}
            <div className="flex font-bold text-3xl">
                <Link href="." className="cursor-pointer">Betillo</Link>
            </div>
            <div className="flex flex-1 justify-end">
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="flex pl-4 cursor-pointer hover:text-[#E68A00]">
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}