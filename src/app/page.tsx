
import Link from "next/link";
import Navigation from "./Components/Navigation";

export default function Home() {
  return (
    <div className="bg-[url(/assets/home/background-home-desktop.jpg)] max-sm:bg-[url(/assets/home/background-home-mobile.jpg)] max-lg:bg-[url(/assets/home/background-home-tablet.jpg)] bg-fixed bg-no-repeat bg-cover w-full min-h-screen">
            <Navigation pageName="Home"/>
            <section className="w-full px-35 py-25 flex items-center justify-between max-lg:flex-col max-lg:px-2 max-lg:gap-10">
                <div className="text-white w-110 flex flex-col gap-10 max-lg:w-full max-lg:px-2">
                    <h3 className="text-4xl">So, you want to travel to</h3>
                    <h2 className="text-9xl">Space</h2>
                    <p className="text-justify">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link href={'/Destination/0'} className="w-65 h-65 rounded-full bg-white flex justify-center items-center text-center text-3xl">EXPLORE</Link>
            </section>
    </div>
  );
}
