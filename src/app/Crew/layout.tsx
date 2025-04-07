import Navigation from "../Components/Navigation";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <main className="bg-[url(/assets/crew/background-crew-desktop.jpg)] max-sm:bg-[url(/assets/crew/background-crew-mobile.jpg)] max-lg:bg-[url(/assets/crew/background-crew-tablet.jpg)]  w-full min-h-screen bg-fixed bg-no-repeat bg-cover">
            <Navigation pageName="Crew"/>
            <section className="w-full px-35 pt-10 flex flex-col gap-10 max-sm:px-4">
                <h3 className="text-4xl text-white"><span className="text-neutral-600">02</span> MEET YOUR CREW</h3>
                {children}
            </section>
        </main>
    );
}
