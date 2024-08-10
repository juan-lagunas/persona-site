import SideNav from "@/app/components/SideNav"
import About from "@/app/components/About"
import Passions from "@/app/components/Passions"


export default function Home() {
  return (
    <SideNav>
      <div className="w-[90%] mx-auto flex flex-col gap-y-10 md:gap-y-20 py-10">
        <About/>
        <Passions/>
      </div>
    </SideNav>
  )
}