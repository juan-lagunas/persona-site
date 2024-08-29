import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


interface SideNavProps {
    children: React.ReactNode
}

const SideNav: React.FC<SideNavProps> = ({ children }) => {
    return (
        <div className="flex flex-col h-dvh text-[#B3A369]">
            <div className="flex overflow-auto h-full">
                <div className="grid grid-rows-3 w-[20%] max-w-[200px] h-full py-10 bg-[#0D0D0D]">
                    <a href="#" className="text-center text-3xl font-bold">Tillo</a>
                    <div className="flex flex-col gap-y-6 items-center justify-center capitalize">
                        <a href="#journey">Journey</a>
                        <a href="#empower">Empower</a>
                        <a href="#connect">Support</a>
                    </div>
                    <div className="flex flex-col items-center justify-end gap-y-4">
                        <a href="https://github.com/juan-lagunas" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faGithub} /></a>
                        <a href="https://www.youtube.com/@betillo-lagunas" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faYoutube} /></a>
                        <a href="mailto:juanlagunas28@gmail.com" className="w-8 h-8 rounded-full flex items-center justify-center"><FontAwesomeIcon className="size-6" icon={faEnvelope} /></a>
                        <Link href="/" className="bg-[#B3A369] text-[#0D0D0D] py-2 px-4 rounded-3xl opacity-90 hover:opacity-100 transition ease-in-out">Español</Link>
                    </div>
                </div>
                <main className="flex-1 overflow-y-auto bg-[#121212]">{children}</main>
            </div>
        </div>
    )
}

export default SideNav