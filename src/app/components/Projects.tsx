import Image from "next/image"

export default function Projects() {
    return (
        <section className="w-full">
            <div className="w-full h-fit p-10 grid grid-cols-2 gap-2">
                <div className="w-[231.6px] h-[500.4px] relative">
                    <Image fill src="/images/spotify-clone.png" alt="spotify-clone"/>
                </div>

                <div className="w-full aspect-video relative">
                    <Image fill src="/images/ims-top.png" alt="ims-home"/>
                </div>

            </div>
        </section>
    )
}