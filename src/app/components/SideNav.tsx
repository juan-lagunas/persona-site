"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
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
        <div className="flex flex-col h-screen">
            <div className="flex overflow-auto h-full">
                <div className="grid grid-rows-3 text-sm w-[20%] max-w-[200px] h-full py-10 bg-[#0D0D0D]">
                    <div className="text-center text-3xl font-bold">Tillo</div>
                    <div className="flex flex-col gap-y-6 items-center justify-center capitalize">
                        <div>Journey</div>
                        <div>Projects</div>
                        <div>Contact</div>
                    </div>
                    <div className="flex flex-col items-center justify-end gap-y-4 text-white">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faGithub} /></div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faDiscord} /></div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faYoutube} /></div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faEnvelope} /></div>
                        <button onClick={toggleLanguage} className="text-white font-thin">
                            {inSpanish ? "English" : "Español"}
                        </button>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto bg-[#121212]">{children}</main>
            </div>
        </div>
    )

}

export default SideNav