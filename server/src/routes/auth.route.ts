import { Router } from "express";
import { signupController, verifyEmailController, resendVerificationOTPController } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signupController);
router.post("/verify-email", verifyEmailController);
router.post("/resend-verification-otp", resendVerificationOTPController);

export default router;