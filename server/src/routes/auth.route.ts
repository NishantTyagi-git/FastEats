import { Router } from "express";
import { signupController, verifyEmailController, resendVerificationOTPController, loginController, refreshTokenController, logoutController } from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", signupController);
router.post("/verify-email", verifyEmailController);
router.post("/resend-verification-otp", resendVerificationOTPController);
router.post("/login", loginController); 
router.post("/refresh-token", refreshTokenController);
router.post("/logout", protect, logoutController);


export default router;