"use client";

export default function ErrorMessage({
    message,
    onClose,
}: {
    message: string;
    onClose?: () => void;
}) {
    return (
        <div className="flex items-start justify-between gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.07] px-4 py-3 text-sm text-red-400">
            <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold">
                    !
                </span>

                <span>{message}</span>
            </div>

            {onClose && (
                <button type="button" onClick={onClose} className="text-red-500/60 transition hover:text-red-400">
                    ×
                </button>
            )}
        </div>
    );
}