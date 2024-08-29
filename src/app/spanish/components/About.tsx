import Image from "next/image"


export default function About() {
    return(
        <section className="h-fit max-w-[1450px] mx-auto">
            <div className="aspect-video w-full mx-auto relative">
                <Image fill alt="picture of Juan and Jenny" src="/images/header-1.jpeg"></Image>
            </div>
            <p className="text-sm font-thin italic text-[#cfcfcf] mb-2">Una foto de mi prometida y yo durante el eclipse solar total de 2024 en Carbondale, Illinois.</p>
            <div className="">
                <h1 className="text-5xl lg:text-7xl font-bold mb-2 ">¡Hola, Mundo!</h1>
                <p> 
                    Mi nombre es Juan Alberto Lagunas-Lara, pero en mi familia, soy conocido como Betillo o Tillo (“Tee-yo”). Soy un estudiante entusiasta de ingeniería eléctrica, con una gran pasión por la robótica y un fuerte compromiso con el empoderamiento de mi comunidad mexicana. Desde niño, siempre tuve curiosidad por entender cómo funcionan las cosas, y descubrí que me encanta aprender tanto como compartir lo que he aprendido. Si estás aquí para conectar, colaborar, o simplemente ver en qué ando, estás en el lugar correcto.
                </p>
            </div>
        </section>
    )
}