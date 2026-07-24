import ForgotPasswordForm from "@/components/auth/forgot/ForgotPasswordForm";
import ForgotPasswordHero from "@/components/auth/forgot/ForgotPasswordHero";

export default function ForgotPasswordPage() {
    return (
        <main className="h-screen overflow-hidden bg-[#090909] p-6">
            <section className="mx-auto flex h-full max-w-[1700px] overflow-hidden rounded-[40px] border border-white/5 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,.6)]">
                <section className="flex w-full items-center justify-center bg-[#161616] lg:w-[42%]">

                    <ForgotPasswordForm />

                </section>

                <ForgotPasswordHero />

            </section>
        </main>
    );
}