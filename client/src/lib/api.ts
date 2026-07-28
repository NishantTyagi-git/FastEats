const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
    });

    const text = await response.text();

    let data: T;

    try {
        data = JSON.parse(text);
    } catch {
        throw new Error(
            `Server returned invalid response (${response.status}).`
        );
    }

    if (!response.ok) {
        const error = data as { message?: string };

        throw new Error(
            error.message || "Something went wrong."
        );
    }

    return data;
}