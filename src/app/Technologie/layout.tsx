import Navigation from "../Components/Navigation";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <main className="bg-[url(/assets/technology/background-technology-desktop.jpg)] max-sm:bg-[url(/assets/technology/background-technology-mobile.jpg)] max-lg:bg-[url(/assets/technology/background-technology-tablet.jpg)] bg-fixed bg-no-repeat bg-cover w-full min-h-screen">
            <Navigation pageName="Technologie"/>
            <section className="w-full pl-35 max-lg:px-4 py-10 flex flex-col gap-10">
                <h3 className="text-4xl text-white"><span className="text-neutral-600">03</span> SPACE LAUNCH 101</h3>
                {children}
            </section>
        </main>
    );
}