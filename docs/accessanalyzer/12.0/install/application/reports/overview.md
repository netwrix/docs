# Reports via the Web Console

The Web Console is where any reports which have been published can be viewed outside of the Access
Analyzer Console.

- Web Console – This console uses an embedded website for published reports. It provides a
  consolidated logon feature for viewing published reports, and accessing the Netwrix Access
  Information Center (when installed) and other Netwrix products.

The Access Analyzer installer places a Web folder at the root of the Access Analyzer directory. This
folder contains the Access Analyzer Web Server (WebServer.exe) that runs on the Access Analyzer
Console upon installation.

**NOTE:** The Access Analyzer Web Server service must run as an account that has access to the
Access Analyzer database. This may be a different account than the one used to connect Access
Analyzer to the database. If the Access Analyzer Vault service is running, the account running the
Web Server service must be an Access Analyzer Administrator. See the
[Vault](/docs/accessanalyzer/12.0/admin/settings/application/vault.md) topic for additional information.

The Web folder that the Access Analyzer installer places at the root of the Access Analyzer
directory also contains a `WebServer.exe.config` file. This file contains configurable parameters.

**CAUTION:** If encryption methods have been configured for Kerberos on the Access Analyzer server
but not on the service account running the Access Analyzer Web Server service, then users will not
be able to log-in to the Web Console and will receive an error message. See the
[Manage Kerberos Encryption Warning for the Web Console](/docs/accessanalyzer/12.0/install/application/reports/kerberosencryption.md) topic for additional
information on configuring security polices to allow Kerberos encryption.

## Log into the Web Console

In order for a user to log into the Web Console, the user’s account must have the User Principal
Name (UPN) attribute populated within Active Directory. Then the user can login using domain
credentials. If multiple domains are being managed by the Netwrix Access Information Center, then
the username needs to be in the `domain\username` format.

Access to reports in the Web Console can be managed through the Role Based Access feature of Access
Analyzer (**Settings** > **Access**). The Web Administrator role and the Report Viewer role grant
access to the published reports. See the
[Role Based Access](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/overview.md) topic for addition
information.

**NOTE:** Access to the AIC and other Netwrix products is controlled from within those products.

The address to the Web Console can be configured within the Access Analyzer Console (**Settings** >
**Reporting**). The default address is `http://[hostname.domain.com]:8082`. From the Access Analyzer
Console server, it can be accessed at `http://localhost/` with any standard browser. To access the
Web Console from another machine in or connected to the environment, replace localhost with the name
of the Access Analyzer Console. See the [Update Website URLs](secure.md#update-website-urls) topic
for additional information.

**NOTE:** Any browser used to access the Web Console must have JavaScript allowed for the site. See
the
[Configure JavaScript Settings for the Web Console](/docs/accessanalyzer/12.0/admin/settings/reporting.md#configure-javascript-settings-for-the-web-console)
topic for additional information.

Follow the steps to login to the Web Console.

**Step 1 –** To open the Web Console page, use one of the following methods:

- From the Access Analyzer Console server – Click the Published Reports desktop icon
  (`http://localhost:8082`)
- For remote access – Enter one of the following URLs into a web browser:

    http://[machinename]:8082

    https://[machinename]:8082

**NOTE:** The URL that is used may need to be added to the browser’s list of trusted sites.

![Web Console Login page](/img/product_docs/accessanalyzer/install/application/reports/webconsolelogin.webp)

**Step 2 –** Enter your **User Name** and **Password**. Click **Login**.

![Web Console Home page](/img/product_docs/accessanalyzer/install/application/reports/webconsolehome.webp)

The home page shows the solutions with published reports available. See the
[Web Console](/docs/accessanalyzer/12.0/admin/report/view.md#web-console) topic for information on using the Web
Console.
