import SideNav from "@/app/components/SideNav"
import About from "@/app/components/About"
import Journey from "@/app/components/Journey"
import Support from "@/app/components/Support"


export default function Home() {
  return (
    <SideNav>
      <div className="w-[90%] mx-auto flex flex-col gap-y-10 md:gap-y-20 py-20">
        <About/>
        <Journey/>
        <Support />
      </div>
    </SideNav>
  )
}