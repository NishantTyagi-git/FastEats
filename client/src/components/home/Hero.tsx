import HeroContent from "./HeroContent";
// import Features from "./Features";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-[#090909]">

            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero12.png')",
                    backgroundPosition: "right center",
                    backgroundSize: "cover",
                    filter: "brightness(.95)",
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 pt-20">

                <HeroContent />

            </div>

            {/* <div className="absolute bottom-8 left-0 right-0 z-20">
                <Features />
            </div> */}

        </section>
    );
}