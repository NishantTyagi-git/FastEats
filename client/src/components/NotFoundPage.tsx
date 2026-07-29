export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-6">
            <div className="text-center">
                <p className="text-8xl font-black text-orange-500">404</p>

                <h1 className="mt-4 text-3xl font-bold text-white">Page Not Found</h1>

                <p className="mt-3 text-zinc-400">The page you are looking for doesn't exist.</p>
            </div>
        </main>
    );
}