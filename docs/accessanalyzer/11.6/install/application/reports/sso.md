---
title: "Enable Single Sign-On"
description: "Enable Single Sign-On"
sidebar_position: 40
---

# Enable Single Sign-On

Single sign-on using Windows authentication allows users to be automatically log into the Web
Console according to the user’s current login session. When opening a session from a different
domain, the user will be prompted for credentials from a pop-up windows. After authenticating, the
user will be automatically logged in the Web Console.

:::note
The Web Console also supports using Microsoft Entra ID single sign-on. See the
[Microsoft Entra ID Single Sign-On](/docs/accessanalyzer/11.6/install/application/reports/entraidsso.md)
topic for additional information.
:::


Follow the steps to enable single sign-on for the Web Console.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is
located within the Web folder of the Enterprise Auditor installation directory.

![WebServer.exe.config file in Notepad](/images/accessanalyzer/11.6/install/application/reports/webserverexeconfigsso.webp)

**Step 2 –** Change the value for the `WindowsAuthentication` parameter to:

```
<add key="WindowsAuthentication" value="true" />
```

**Step 3 –** Save and close the file.

**Step 4 –** Navigate to Services (`services.msc`). Restart the Netwrix Enterprise Auditor Web
Server service.

The Web Console has been enabled for single sign-on.

## Local Intranet Settings

Next, configure local intranet settings to enable SSO. This enables users to have authentication
pass through Windows Authentication and bypass SSO configuration Prompts for credentials via Browser
pop-up.

Follow the steps to configure local intranet settings.

**Step 1 –** Open Windows Internet Properties (**Control Panel** > **Network and
Internet** > **Internet Options**).

![ConfigureLocalIntranetSettingsforSSO - 1](/images/accessanalyzer/11.6/install/application/reports/internetproperties.webp)

**Step 2 –** Go to the Security tab, and select the **Local Intranet** option. Then, click the
**Sites** button.

![localintranet](/images/accessanalyzer/11.6/install/application/reports/localintranet.webp)

**Step 3 –** Click the **Advanced** button.

![localintranetadvanced](/images/accessanalyzer/11.6/install/application/reports/localintranetadvanced.webp)

**Step 4 –** Enter a domain in the **Add this website in the zone** field. Ensure the fully
qualified domain name is in the following format: `https://<server>.<domain>.com`

**Step 5 –** Click the **Add** button. Close the Local intranet window.

**Step 6 –** On the Internet Properties window, click the **Apply** button.

Authentication will now pass through Windows Authentication and bypass SSO configuration Prompts for
credentials via Browser pop-up

:::note
A list of allowed authentication servers can also be configured using the
AuthServerAllowList policy.

:::
