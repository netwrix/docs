---
title: "URL & Login"
description: "URL & Login"
sidebar_position: 60
---

# URL & Login

The Access Information Center can be accessed through a supported browser from a machine within your
company's network. The URL is the hosting machine's name and the
port, `http://[HOSTNAME.DOMAIN.COM]:81`. For example, if the application was installed on a server
named NEWYORKSRV10.NWXTech.com with the default port of 81, the URL would be
`http://NEWYORKSRV10.NWXTech.com:81`.

**Administrators**

Administrators with access to the server hosting the application can use the desktop icon to launch
the application in their default browser. Alternatively, the localhost URL can be used:

- HTTP URL

    - `http://localhost:81`

- HTTPS URL

    - `https://localhost:481`

**Enterprise Auditor Web Console**

On the server hosting Netwrix Enterprise Auditor, the Published Reports icon can be used to launch
the Web Console. This provides access to both Netwrix Enterprise Auditor published reports and the
Access Information Center in a browser with a default port of 8082, which can also be customized.
Alternatively, the URL can be used:

- HTTP URL
    - (on hosting server) `http://localhost:8082`
    - (remote access) `http://[HOSTNAME.DOMAIN.COM]:8082`
- HTTPS URL
    - (on hosting server) `https://localhost:8082`
    - (remote access) `https://[HOSTNAME.DOMAIN.COM]:8082`

**Remote Access**

Since the Access Information Center is a browser-based application, it is possible to access the web
interface remotely. It is up to the Administrator to provide users with the correct URL for access.

Depending on your network environment, you may need to use the NetBIOS name, FQDN, or IP Address of
the hosting server in the browser. Also, additional configurations by network and system
administrators may be necessary to make the web server accessible to remote users (firewall
configurations, DNS settings, etc.).

The server name in the URL can be replaced with an alias. See the
[Alias Server Host Name](/docs/accessinformationcenter/11.6/admin/additionalconfig/aliasserver.md)
topic for additional information.

## Login Page

Users login with their domain credentials. If only one domain is known to the Access Information
Center, the credentials need only be username and password. If multiple domains are known to the
Access Information Center, then the username needs to be entered in the `domain\username` format.

:::note
The URL may need to be added to the browser’s list of trusted sites.
:::


![AIC Login page](/images/accessinformationcenter/11.6/admin/loginpage.webp)

The Access Information Center login page displays the Netwrix Enterprise Auditor logo at the top and
the browser tab is named Access Information Center. Logging in here will take users directly to the
Access Information Center. The interface a user arrives at depends upon the assigned role or lack of
assigned role. See the
[User Landing Page](/docs/accessinformationcenter/11.6/admin/login/userlanding.md)
topic for information on where different types of users are directed after login.

## Web Console Login Page

![Web Console Login page](/images/accessanalyzer/11.6/install/application/reports/webconsolelogin.webp)

The Enterprise Auditor Web Console login page displays the Netwrix Enterprise Auditor logo at the
top and the browser tab is named Netwrix Enterprise Auditor. In order for a user to log into the Web
Console, the user’s account must have the User Principal Name (UPN) attribute populated within
Active Directory. Logging in here will take all users to the Enterprise Auditor Reports home page.

Follow the steps to open the Access Information Center.

![Menu icon on Web Console home page](/images/accessinformationcenter/11.6/admin/accessfromwebconsole.webp)

**Step 1 –** On any page of the Web Console, click the menu icon to the left of the Netwrix
Enterprise Auditor logo.

![Apps slide-out menu](/images/accessinformationcenter/11.6/admin/accessfromwebconsoleappsmenu.webp)

**Step 2 –** On the Apps slide-out menu, click Access Information Center.

![AIC opened from the Web Console](/images/accessinformationcenter/11.6/admin/aicfromwebconsole.webp)

The Access Information Center opens in a new tab in your browser. The interface a user arrives at
depends upon the assigned role or lack of assigned role. See the
[User Landing Page](/docs/accessinformationcenter/11.6/admin/login/userlanding.md)
topic for information on where different types of users are directed after login.
