import SideNav from "@/app/english/components/SideNav"
import About from "@/app/english/components/About"
import Purpose from "@/app/english/components/Purpose"
import Empower from "@/app/english/components/Empower"
import Connect from "@/app/english/components/Connect"


export default function Home() {
  return (
    <SideNav>
      <div className="w-[90%] mx-auto flex flex-col gap-10 py-10 relative z-10 md:text-xl lg:text-2xl">
        <About/>
        <Purpose/>
        <Empower />
        <Connect />
      </div>
    </SideNav>
  )
}