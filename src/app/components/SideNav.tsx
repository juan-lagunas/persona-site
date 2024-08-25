"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


interface SideNavProps {
    children: React.ReactNode
}

const SideNav: React.FC<SideNavProps> = ({ children }) => {
    const [inSpanish, setSpanish] = useState(true)
    const toggleLanguage = () => {
        setSpanish(!inSpanish)
    }
    
    return (
        <div className="flex flex-col h-dvh text-[#B3A369]">
            <div className="flex overflow-auto h-full">
                <div className="grid grid-rows-3 w-[20%] max-w-[200px] h-full py-10 bg-[#0D0D0D]">
                    <div className="text-center text-3xl font-bold">Tillo</div>
                    <div className="flex flex-col gap-y-6 items-center justify-center capitalize">
                        <div>Journey</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                    <div className="flex flex-col items-center justify-end gap-y-4">
                        <a href="https://github.com/juan-lagunas" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faGithub} /></a>
                        <a href="https://www.youtube.com/@betillo-lagunas" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faYoutube} /></a>
                        <a href="mailto:juanlagunas28@gmail.com" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faEnvelope} /></a>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto bg-[#121212]">{children}</main>
            </div>
        </div>
    )

}

export default SideNav