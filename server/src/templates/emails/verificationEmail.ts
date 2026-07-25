export const verificationEmailTemplate = (
  name: string,
  otp: string
) => `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Verify Your Email</title>
</head>

<body style="
margin:0;
padding:50px 20px;
background:#f5f5f5;
font-family:Arial,Helvetica,sans-serif;
">

<div style="
max-width:620px;
margin:auto;
background:#161616;
border-radius:24px;
overflow:hidden;
border:1px solid #262626;
box-shadow:0 20px 60px rgba(0,0,0,.18);
">

<div style="
padding:36px 42px;
background:linear-gradient(135deg,#ff7a00,#ff9a2f);
">

<div style="
display:inline-block;
padding:10px 18px;
border-radius:999px;
background:rgba(255,255,255,.18);
color:#fff;
font-size:14px;
font-weight:600;
margin-bottom:24px;
">
🍔 FastEats
</div>

<h1 style="
margin:0;
font-size:40px;
font-weight:800;
color:#ffffff;
line-height:1.15;
">
Verify Your Email
</h1>

<p style="
margin:14px 0 0;
font-size:16px;
line-height:1.8;
color:#fff4ec;
">
You're one step away from activating your FastEats account.
</p>

</div>

<div style="
padding:42px;
background:#161616;
">

<p style="
margin:0;
font-size:22px;
font-weight:700;
color:#ffffff;
">
Hi ${name},
</p>

<p style="
margin:22px 0 0;
font-size:16px;
line-height:1.9;
color:#b3b3b3;
">
Thank you for joining
<strong style="color:#ffffff;">FastEats</strong>.
Please verify your email address using the code below.
</p>

<div style="
margin:38px 0;
padding:34px;
background:#111111;
border:1px solid #2b2b2b;
border-radius:18px;
text-align:center;
">

<p style="
margin:0;
font-size:13px;
letter-spacing:2px;
color:#8d8d8d;
text-transform:uppercase;
">
Verification Code
</p>

<p style="
margin:18px 0 0;
font-size:54px;
font-weight:800;
letter-spacing:12px;
color:#ff7a00;
">
${otp}
</p>

</div>

<p style="
margin:0;
font-size:16px;
line-height:1.9;
color:#b3b3b3;
">
This code expires in
<strong style="color:#ffffff;">
10 minutes
</strong>.
</p>

<div style="
margin-top:34px;
padding:22px;
background:#111111;
border-left:4px solid #ff7a00;
border-radius:14px;
">

<p style="
margin:0;
font-size:16px;
font-weight:700;
color:#ffffff;
">
Didn't request this?
</p>

<p style="
margin:10px 0 0;
font-size:15px;
line-height:1.8;
color:#9ca3af;
">
If you didn't create a FastEats account, you can safely ignore this email.
</p>

</div>

<p style="
margin-top:42px;
font-size:16px;
font-weight:600;
color:#ffffff;
">
— Team FastEats
</p>

</div>

<div style="
padding:22px;
background:#111111;
border-top:1px solid #262626;
text-align:center;
">

<p style="
margin:0;
font-size:13px;
color:#8d8d8d;
">
© ${new Date().getFullYear()} FastEats. All rights reserved.
</p>

<p style="
margin:8px 0 0;
font-size:13px;
color:#666;
">
Fast. Fresh. Delivered.
</p>

</div>

</div>

</body>
</html>
`;