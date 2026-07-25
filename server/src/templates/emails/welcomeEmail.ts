import { env } from "../../config/env";

export const welcomeEmailTemplate = (
  name: string
) => `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Welcome to FastEats</title>
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
Welcome to FastEats
</h1>

<p style="
margin:14px 0 0;
font-size:16px;
line-height:1.8;
color:#fff4ec;
">
Your account has been verified successfully.
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
Welcome to
<strong style="color:#ffffff;">FastEats</strong>!
Your email has been verified successfully and your account is now ready to use.
</p>

<p style="
margin:18px 0 0;
font-size:16px;
line-height:1.9;
color:#b3b3b3;
">
You're all set to explore delicious meals, place orders, save delivery addresses and enjoy lightning-fast food delivery.
</p>

<div style="
margin:38px 0;
padding:30px;
background:#111111;
border:1px solid #2b2b2b;
border-radius:18px;
">

<p style="
margin:0 0 20px;
font-size:18px;
font-weight:700;
color:#ffffff;
">
🚀 What's Next?
</p>

<table width="100%" cellpadding="0" cellspacing="0">

<tr>
<td style="padding:8px 0;color:#b3b3b3;">
🍕 Browse our delicious menu
</td>
</tr>

<tr>
<td style="padding:8px 0;color:#b3b3b3;">
🛒 Place your first order
</td>
</tr>

<tr>
<td style="padding:8px 0;color:#b3b3b3;">
📍 Save delivery addresses
</td>
</tr>

<tr>
<td style="padding:8px 0;color:#b3b3b3;">
🚚 Track your orders in real time
</td>
</tr>

</table>

</div>

<div style="
text-align:center;
margin:42px 0;
">

<a
href="${env.CLIENT_URL}/login"
style="
display:inline-block;
padding:16px 38px;
background:#ff7a00;
color:#ffffff;
text-decoration:none;
border-radius:12px;
font-size:16px;
font-weight:700;
">
Start Ordering
</a>

</div>

<div style="
margin-top:10px;
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
You're ready to go!
</p>

<p style="
margin:10px 0 0;
font-size:15px;
line-height:1.8;
color:#9ca3af;
">
Thank you for choosing FastEats. We can't wait to deliver your favorite meals right to your doorstep.
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