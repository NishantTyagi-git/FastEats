import { Router } from "express";

import {
  sendVerificationEmail,
  sendForgotPasswordEmail,
  sendWelcomeEmail,
  sendPasswordChangedEmail,
} from "../services/email.service";

const router = Router();

router.get("/verify", async (_, res) => {
  await sendVerificationEmail(
    "nishanttyagi.developer@gmail.com",
    "Nishant",
    "483921"
  );

  res.json({ message: "Verification email sent" });
});

router.get("/welcome", async (_, res) => {
  await sendWelcomeEmail(
    "nishanttyagi.developer@gmail.com",
    "Nishant"
  );

  res.json({ message: "Welcome email sent" });
});

router.get("/forgot", async (_, res) => {
  await sendForgotPasswordEmail(
    "nishanttyagi.developer@gmail.com",
    "Nishant",
    "http://localhost:3000/resetpassword?token=test123"
  );

  res.json({ message: "Forgot password email sent" });
});

router.get("/password-changed", async (_, res) => {
  await sendPasswordChangedEmail(
    "nishanttyagi.developer@gmail.com",
    "Nishant"
  );

  res.json({
    success: true,
    message: "Password changed email sent.",
  });
});

export default router;