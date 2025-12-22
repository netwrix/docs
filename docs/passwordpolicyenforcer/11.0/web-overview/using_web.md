---
title: "Launch Password Policy Enforcer Web"
description: "Launch Password Policy Enforcer Web"
sidebar_position: 30
---

# Launch Password Policy Enforcer Web

The default URL for Password Policy Enforcer Web is: `http://[server]/ppeweb/`

Where [server] is the name or IP address of the server hosting Password Policy Enforcer Web.

![Web Welcome page](/images/passwordpolicyenforcer/11.0/web/webwelcome.webp)

The default page is called the Welcome page. You can customize the information on this page by
editing **en_default.htm**, or you can bypass this page and send users directly to the Password
Change page:

`http://[server]/ppeweb/ppeweb.dll`

You can also include the username and/or domain in the URL:

`http://[server]/ppeweb/ppeweb.dll?username=maryjones&domain=ANIXIS`

:::info
Install the SSL Certificate the web server and use the HTTPS protocol if Password
Policy Enforcer Web will be used on an unencrypted network. See the
[Install an SSL Certificate](/docs/passwordpolicyenforcer/11.0/web-overview/securing_web.md) topic for additional
information.
:::


:::note
A license reminder message is shown occasionally when Password Policy Enforcer Web is used
without a license key. Contact Netwrix support if you would like to evaluate Password Policy
Enforcer Web without the reminder message.
:::


## Change Password

To change a password with Password Policy Enforcer Web:

**Step 1 –** Click **Change Password** on the Welcome page.

![using_ppe_web](/images/passwordpolicyenforcer/11.0/web/using_ppe_web.webp)

**Step 2 –** Enter a **Username** and **Domain**, then click **Next**.

![introduction_4](/images/passwordpolicyenforcer/11.0/web/introduction_4.webp)

**Step 3 –** Enter the **Old Password**, **New Password**, and **Confirm Password**, then click
**Next**.

:::note
Windows increments the bad password count in Active Directory every time a user enters
their old password incorrectly. This may trigger a lockout if the Windows account lockout policy is
enabled.
:::


## Error Messages

Validation errors are shown in a yellow box below the page instructions. Validation errors are
normally caused by invalid user input. They can often be overcome by changing the value of one or
more input fields and resubmitting the form.

![using_ppe_web_1](/images/passwordpolicyenforcer/11.0/web/using_ppe_web_1.webp)

Critical errors are shown on their own page. These errors are mostly a result of configuration or
system errors. Users can sometimes overcome a critical error by following the instructions in the
error message, but most critical errors are beyond the user's control.

![using_ppe_web_2](/images/passwordpolicyenforcer/11.0/web/using_ppe_web_2.webp)

Validation and critical error messages are stored in the HTML templates. You can modify the default
messages by editing the templates. See the [Edit HTML Templates](/docs/passwordpolicyenforcer/11.0/web-overview/editing_html_templates.md) topic
for additional information.
