# Administrator Overview

Access Information Center administrators have access to the Configuration interface where there
application settings reside. This topic covers:

- [Getting Started](/docs/accessinformationcenter/12.0/getting-started/quick-start.md)
- [First Launch](/docs/accessinformationcenter/12.0/administration/first-launch.md)
- [Navigation](/docs/accessinformationcenter/12.0/getting-started/navigation.md)
- [Configuration Interface Overview](/docs/accessinformationcenter/12.0/administration/configuration/index.md)
- [Additional Configuration Options](/docs/accessinformationcenter/12.0/administration/advanced-configuration/index.md)
- Instructions on how different users access the application (see the [URL & Login](/docs/accessinformationcenter/12.0/administration/index.md) topic)
- [Troubleshooting](/docs/accessinformationcenter/12.0/administration/troubleshooting/index.md)

# URL & Login

The Access Information Center can be accessed through a supported browser from a machine within your
company's network. The URL is the hosting machine's name and the
port, http://[HOSTNAME.DOMAIN.COM]:81. For example, if the application was installed on a server
named NEWYORKSRV10.NWXTech.com with the default port of 81, the URL would be
http://NEWYORKSRV10.NWXTech.com:81.

Administrators

Administrators with access to the server hosting the application can use the desktop icon to launch
the application in their default browser. Alternatively, the localhost URL can be used:

- HTTP URL

  - http://localhost:81

- HTTPS URL

  - https://localhost:481

Access Analyzer Web Console

On the server hosting Netwrix Access Analyzer (formerly Enterprise Auditor), the Published Reports
icon can be used to launch the Web Console. This provides access to both Netwrix Access Analyzer
(formerly Enterprise Auditor) published reports and the Access Information Center in a browser with
a default port of 8082, which can also be customized. Alternatively, the URL can be used:

- HTTP URL
  - (on hosting server) http://localhost:8082
  - (remote access) http://[HOSTNAME.DOMAIN.COM]:8082
- HTTPS URL
  - (on hosting server) https://localhost:8082
  - (remote access) https://[HOSTNAME.DOMAIN.COM]:8082

Remote Access

Since the Access Information Center is a browser-based application, it is possible to access the web
interface remotely. It is up to the Administrator to provide users with the correct URL for access.

Depending on your network environment, you may need to use the NetBIOS name, FQDN, or IP Address of
the hosting server in the browser. Also, additional configurations by network and system
administrators may be necessary to make the web server accessible to remote users (firewall
configurations, DNS settings, etc.).

The server name in the URL can be replaced with an alias. See the
[Alias Server Host Name](/docs/accessinformationcenter/12.0/administration/advanced-configuration/alias-server.md) topic for additional information.

## Login Page

Users login with their domain credentials. If only one domain is known to the Access Information
Center, the credentials need only be username and password. If multiple domains are known to the
Access Information Center, then the username needs to be entered in the `domain\username` format.

**NOTE:** The URL may need to be added to the browser’s list of trusted sites.

![AIC Login page](/img/product_docs/accessinformationcenter/access/informationcenter/admin/loginpage.webp)

The Access Information Center login page displays the Netwrix Access Analyzer (formerly Enterprise
Auditor) logo at the top and the browser tab is named Access Information Center. Logging in here
will take users directly to the Access Information Center. The interface a user arrives at depends
upon the assigned role or lack of assigned role. See the [User Landing Page](/docs/accessinformationcenter/12.0/getting-started/overview.md) topic
for information on where different types of users are directed after login.

## Web Console Login Page

![Web Console Login page](/img/product_docs/accessanalyzer/12.0/install/application/reports/webconsolelogin.webp)

The Access Analyzer Web Console login page displays the Netwrix Access Analyzer (formerly Enterprise
Auditor) logo at the top and the browser tab is named Netwrix Access Analyzer (formerly Enterprise
Auditor). In order for a user to log into the Web Console, the user’s account must have the User
Principal Name (UPN) attribute populated within Active Directory. Logging in here will take all
users to the Access Analyzer Reports home page.

Follow the steps to open the Access Information Center.

![Menu icon on Web Console home page](/img/product_docs/accessinformationcenter/access/informationcenter/admin/accessfromwebconsole.webp)

**Step 1 –** On any page of the Web Console, click the menu icon to the left of the Netwrix Access
Analyzer (formerly Enterprise Auditor) logo.

![Apps slide-out menu](/img/product_docs/accessinformationcenter/access/informationcenter/admin/accessfromwebconsoleappsmenu.webp)

**Step 2 –** On the Apps slide-out menu, click Access Information Center.

![AIC opened from the Web Console](/img/product_docs/accessinformationcenter/access/informationcenter/admin/aicfromwebconsole.webp)

The Access Information Center opens in a new tab in your browser. The interface a user arrives at
depends upon the assigned role or lack of assigned role. See the [User Landing Page](/docs/accessinformationcenter/12.0/getting-started/overview.md)
topic for information on where different types of users are directed after login.
