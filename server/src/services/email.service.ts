import { transporter } from "../config/mail";
import { env } from "../config/env";

import { verificationEmailTemplate } from "../templates/emails/verificationEmail";
import { welcomeEmailTemplate } from "../templates/emails/welcomeEmail";
import { forgotPasswordTemplate } from "../templates/emails/forgotPassword";
import { passwordChangedTemplate } from "../templates/emails/passwordChanged";

export const sendVerificationEmail = async (
  email: string,
  name: string,
  otp: string
) => {
  await transporter.sendMail({
    from: `"FastEat" <${env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your FastEat account",
    html: verificationEmailTemplate(name, otp),
  });
};

export const sendWelcomeEmail = async (
  email: string,
  name: string
) => {
  await transporter.sendMail({
    from: `"FastEat" <${env.EMAIL_USER}>`,
    to: email,
    subject: "🍔 Welcome to FastEat!",
    html: welcomeEmailTemplate(name),
  });
};

export const sendForgotPasswordEmail = async (
  email: string,
  name: string,
  resetLink: string
) => {
  await transporter.sendMail({
    from: `"FastEat" <${env.EMAIL_USER}>`,
    to: email,
    subject: "Reset your FastEat password",
    html: forgotPasswordTemplate(name, resetLink),
  });
};

export const sendPasswordChangedEmail = async (
  email: string,
  name: string
) => {
  await transporter.sendMail({
    from: `"FastEat" <${env.EMAIL_USER}>`,
    to: email,
    subject: "Your FastEat password has been changed 🔐",
    html: passwordChangedTemplate(name),
  });
};