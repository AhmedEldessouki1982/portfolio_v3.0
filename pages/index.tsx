// import Avatar from "@/components/Avatar";
import ResumeBTN from "@/components/ResumeBTN";

function Home() {
  return (
    <section className="h-full bg-primary/60 px-10 py-40">
      
      {/*text*/}
      <div className="text-center container md:text-left flex flex-col justify-center md:ml-24">
        {/*title*/}
        <h1 className="h1 text-white capitalize animate-fadeIn_0.5sec">instr. & control <br/>Expert
        <span className="text-red"> Test & Comm.</span> 
        </h1>
        {/*subtitle */}
        <p className="max-w-sm md:max-w-xl mx-auto md:ml-1 text-white animate-fadeIn_0.4sec">Experienced ICSS expert in commissioning, process, and testing for power stations, O&G, and complex industrial processes. Ensuring seamless operations and optimal performance.</p>
      </div>

      {/* Rotating BTN */}
      <div className="mx-auto max-w-min p-2 my-2 md:ml-80 cursor-pointer animate-fadeIn_0.3sec">
        <ResumeBTN />
      </div>
      {/* personal image */}
      {/* <div className="hidden md:inline-block absolute right-32 top-[20%]">
        <Avatar className=""/>
      </div> */}
    </section>
  )
}

export default Home;