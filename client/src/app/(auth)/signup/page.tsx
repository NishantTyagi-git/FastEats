import SignupHero from "@/components/auth/Signup/SignupHero";
import SignupForm from "@/components/auth/Signup/SignupForm";

export default function SignupPage() {
    return (
        <main className="h-screen overflow-hidden bg-[#090909] p-6">
            <section className="mx-auto flex h-full max-w-[1700px] overflow-hidden rounded-[40px] border border-white/5 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,.6)]">
                <div className="hidden w-[56%] lg:block">

                    <SignupHero />

                </div>

                <div className="flex w-full items-center justify-center bg-[#161616] lg:w-[44%]">
                    <div className="w-full max-w-[560px] px-14">

                        <SignupForm />

                    </div>
                </div>
            </section>
        </main>
    );
}