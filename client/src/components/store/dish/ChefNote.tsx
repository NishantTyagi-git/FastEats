type Props = {
    note: string;
};

export default function ChefNote({
    note,
}: Props) {

    return (
        <section className="mt-24">
            <div className="rounded-[32px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent p-10">
                <p className="text-sm font-semibold uppercase tracking-[5px] text-orange-500">Chef&apos;s Note</p>
                <p className="mt-6 text-xl leading-9 text-zinc-300">&quot;{note}&quot;</p>
            </div>
        </section>
    );
}