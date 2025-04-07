import Navigation from "../Components/Navigation";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <main className="bg-[url(/assets/destination/background-destination-desktop.jpg)] max-sm:bg-[url(/assets/destination/background-destination-mobile.jpg)] max-lg:bg-[url(/assets/destination/background-destination-tablet.jpg)] bg-fixed bg-no-repeat bg-cover w-full min-h-screen">
            <Navigation pageName="Destination"/>
            <section className="w-full px-35 py-10 flex flex-col gap-10 max-sm:px-5">
                <h3 className="text-4xl text-white"><span className="text-neutral-600">01</span> Pick your destination</h3>
                {children}
            </section>
        </main>
    );
}
