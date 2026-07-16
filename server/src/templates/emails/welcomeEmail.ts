import { env } from "../../config/env";

export const welcomeEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Welcome to FastEat</title>
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
<div style="background:#ff7a00;padding:26px 32px;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>

<td style="width:56px;font-size:40px;vertical-align:middle;">
🍔
</td>

<td style="vertical-align:middle;">

<h2 style="
margin:0;
color:#ffffff;
font-size:28px;
font-weight:bold;
">
Welcome to FastEat
</h2>

<p style="
margin:6px 0 0;
color:#fff4ea;
font-size:15px;
">
Fresh food. Fast delivery.
</p>

</td>

</tr>
</table>

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
Thank you for creating your <strong>FastEat</strong> account! We're excited to have you with us.
</p>

<p style="
color:#555;
line-height:1.8;
">
You can now explore our delicious menu, place orders in just a few clicks, and enjoy quick delivery from your favourite restaurant.
</p>

<div style="
background:#fafafa;
border:1px solid #ececec;
border-radius:12px;
padding:22px;
margin:32px 0;
">

<p style="
margin:0 0 16px;
font-size:16px;
font-weight:bold;
color:#222;
">
What's next?
</p>

<ul style="
margin:0;
padding-left:20px;
color:#555;
line-height:1.9;
">
<li>🍕 Browse our delicious menu.</li>
<li>🛒 Add your favourite meals to your cart.</li>
<li>🚚 Get your food delivered fast.</li>
</ul>

</div>

<div style="text-align:center;margin:40px 0;">

<a
href="${env.CLIENT_URL}"
style="
background:#ff7a00;
color:#ffffff;
padding:14px 34px;
text-decoration:none;
border-radius:10px;
font-weight:bold;
display:inline-block;
">
Start Ordering
</a>

</div>

<p style="
color:#555;
line-height:1.8;
">
We can't wait to serve you your next delicious meal.
</p>

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