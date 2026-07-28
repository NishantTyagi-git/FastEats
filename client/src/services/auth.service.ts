import { api } from "@/lib/api";

export interface SignupResponse {
    success: boolean;
    message: string;
    data: {
        user: {
            id: string;
            fullName: string;
            email: string;
            isVerified: boolean;
        };
    };
}

export const signupUser = async (data: {
    fullName: string;
    email: string;
    password: string;
}) => {
    return api<SignupResponse>("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
    });
};