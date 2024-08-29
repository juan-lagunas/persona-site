import SideNav from "@/app/components/SideNav"
import About from "@/app/components/About"
import Purpose from "@/app/components/Purpose"
import Empower from "@/app/components/Empower"
import Connect from "@/app/components/Connect"


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