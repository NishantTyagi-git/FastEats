import { env } from "../../config/env";

export const passwordChangedTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Password Changed</title>
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
<div style="background:#ff7a00;padding:24px 32px;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>

<td style="width:60px;vertical-align:middle;">

<div style="
width:48px;
height:48px;
border-radius:50%;
background:#ffffff;
color:#22c55e;
font-size:26px;
font-weight:bold;
line-height:48px;
text-align:center;
">
✓
</div>

</td>

<td style="vertical-align:middle;">

<h2 style="
margin:0;
color:#ffffff;
font-size:26px;
font-weight:bold;
">
Password Changed
</h2>

<p style="
margin:6px 0 0;
color:#fff4ea;
font-size:15px;
">
Your FastEat account is now secured.
</p>

</td>

</tr>
</table>

</div>

<!-- Body -->
<div style="padding:40px;">

<p style="font-size:18px;color:#222;margin-top:0;">
Hi ${name},
</p>

<p style="color:#555;line-height:1.8;">
This email confirms that your FastEat account password has been changed successfully.
</p>

<div style="
background:#fafafa;
border:1px solid #ececec;
border-radius:12px;
padding:20px;
margin:30px 0;
">

<p style="
margin:0 0 14px;
font-size:16px;
font-weight:bold;
color:#222;
">
Your account has been updated
</p>

<ul style="
margin:0;
padding-left:20px;
color:#555;
line-height:1.9;
">
<li>Your previous password is no longer valid.</li>
<li>Use your new password the next time you log in.</li>
<li>No further action is needed if you made this change.</li>
</ul>

</div>

<div style="
background:#fff8f3;
border-left:4px solid #ff7a00;
padding:18px;
border-radius:8px;
">

<p style="
margin:0;
font-weight:bold;
color:#222;
">
Didn't make this change?
</p>

<p style="
margin:10px 0 0;
color:#666;
line-height:1.8;
">
If you didn't change your password, reset it immediately and contact FastEat support. We'll help you secure your account.
</p>

</div>

<div style="text-align:center;margin:40px 0;">

<a href="${env.CLIENT_URL}/login"
style="
background:#ff7a00;
color:#ffffff;
padding:14px 34px;
text-decoration:none;
border-radius:10px;
font-weight:bold;
display:inline-block;
">
Login to FastEat
</a>

</div>

<p style="color:#555;line-height:1.8;">
Thanks for helping us keep your FastEat account secure.
</p>

<p style="margin-top:35px;color:#222;">
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