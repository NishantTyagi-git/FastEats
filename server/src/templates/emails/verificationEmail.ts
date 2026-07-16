export const verificationEmailTemplate = (
  name: string,
  otp: string
) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Verify Your Email</title>
</head>

<body style="margin:0;padding:40px;background:#f5f5f5;font-family:Arial,sans-serif;">

<div style="
max-width:600px;
margin:auto;
background:#ffffff;
border-radius:16px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.08);
">

<!-- Header -->
<div style="background:#ff7a00;padding:28px 32px;">

<h2 style="
margin:0;
color:#ffffff;
font-size:28px;
font-weight:bold;
">
Verify Your Email
</h2>

<p style="
margin:8px 0 0;
color:#fff4ea;
font-size:15px;
">
Complete your FastEat account verification.
</p>

</div>

<!-- Body -->
<div style="padding:40px;">

<p style="
font-size:18px;
color:#222;
margin-top:0;
">
Hi ${name},
</p>

<p style="
color:#555;
line-height:1.8;
">
Welcome to <strong>FastEat</strong>! To activate your account, please verify your email address using the verification code below.
</p>

<div style="
background:#fafafa;
border:1px solid #ececec;
border-radius:12px;
padding:30px;
margin:35px 0;
text-align:center;
">

<p style="
margin:0 0 12px;
font-size:15px;
color:#666;
">
Your verification code
</p>

<p style="
margin:0;
font-size:40px;
font-weight:bold;
letter-spacing:10px;
color:#ff7a00;
">
${otp}
</p>

</div>

<p style="
color:#555;
line-height:1.8;
">
This code will expire in <strong>10 minutes</strong>.
</p>

<div style="
background:#fff8f3;
border-left:4px solid #ff7a00;
padding:18px;
border-radius:8px;
margin-top:28px;
">

<p style="
margin:0;
font-weight:bold;
color:#222;
">
Didn't request this?
</p>

<p style="
margin:10px 0 0;
color:#666;
line-height:1.8;
">
If you didn't create a FastEat account, you can safely ignore this email.
</p>

</div>

<p style="
margin-top:35px;
color:#222;
">
❤️ Team FastEat
</p>

</div>

<!-- Footer -->
<div style="
background:#fafafa;
padding:18px;
text-align:center;
font-size:13px;
color:#888;
">
© ${new Date().getFullYear()} FastEat. All rights reserved.
</div>

</div>

</body>
</html>
`;