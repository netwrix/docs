# Enterprise Auditor v11.6 Access Information Center

- [Installation Overview](/docs/accessinformationcenter/11.6/installation/overview.md)
  topic and subtopics cover the prerequisites, installation process, steps for securing the Access
  Information Center, and upgrade process.
- [Administrator Overview](/docs/accessinformationcenter/11.6/administration/overview.md)
  topic and subtopics cover configuration settings, enabling user access, and navigation. The
  Console Configuration interface is only available to users with Administrator access.
- [Resource Audit Overview](/docs/accessinformationcenter/11.6/resource-audit/overview.md)
  topic and subtopics cover reports on resources, users, groups, computer, and sensitive content.
  The Resource Audit and Search interfaces are available to users with assigned roles and to owners
  assigned to specific resources and groups.
- [Resource Owners Overview](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md)
  topic and subtopics cover the process of managing ownership of resources and groups through the
  Access Information Center. The Resource Owners interface is available to users with either
  Security Team or Administrator access. Managing ownership is core component for both the Resource
  Reviews and the Self-Service Access Requests workflows.

  - [Resource Ownership with the Access Information Center](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md)
    topic and subtopics are written for assigned owners.

- [Resource Reviews Overview](/docs/accessinformationcenter/11.6/access-management/resource-reviews/overview.md)
  topic and subtopics cover the process of managing resource reviews through the Access Information
  Center. The Resource Review workflow enables business owners to conduct resource and group reviews
  and recommend changes. It is necessary to first assign resource Owners in the Resource Owners
  interface. The Resource Reviews interface is available to users with either Security Team or
  Administrator access.
- [Access Requests Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
  topic and subtopics cover the Self-Service Access Requests workflow, which enables domain users to
  request access to resources or to request membership in Active Directory groups or distribution
  lists. The approval process involves the business owners, so it is necessary to first assign
  resource Owners in the Resource Owners interface. The Access Requests interface is available to
  users with either Security Team or Administrator access.

  - [Your Access Portal Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
    topic and subtopics are written for domain users who want to request access or view their own
    request history.

# Getting Started

The Access Information Center is installed with a Builtin Administrator account used to enable
console access. Launch the Access Information Center using the desktop icon for the first time and
set the password for the Builtin Administrator account. Then log in with that account. See the
[First Launch](/docs/accessinformationcenter/11.6/getting-started/first-launch.md)
topic for additional information.

## Initial Configuration

Next, configure the Access Information Center for your environment:

- Console Users — Grant users access to the application starting with an Administrator account.
  There are five levels of access: Administrator, Security Team, Reader, Data Privacy, and User
  Access Administrator. See the
  [Console Access Page](/docs/accessinformationcenter/11.6/administration/configuration/console-access.md)
  topic for information.

  - Optionally, disable the Builtin Administrator account. See the
    [Modify the Builtin Administrator Account](/docs/accessinformationcenter/11.6/administration/configuration/console-access.md#modify-the-builtin-administrator-account)
    topic for additional information.

- Active Directory Service Account — Provide the service account to be used for accessing Active
  Directory. Optionally, enable the application to make group membership changes. See the
  [Active Directory Page](/docs/accessinformationcenter/11.6/administration/configuration/active-directory.md)
  topic for information.
- Notification — Configure the Notification settings required in order for the application to send
  email. See the
  [Notifications Page](/docs/accessinformationcenter/11.6/administration/configuration/notifications.md)
  topic for information.

## Enable Console Users

Access Information Center users granted one of the available roles should be notified.

**_RECOMMENDED:_** The notification should include:

- Why your organization is using the Access Information Center
- What they will be doing in the Access Information Center
- How to log into the Access Information Center, specifically what URL and credentials to use

You should also provide links to the appropriate topics based on the user's role:

- Reader and Data Privacy — Send the URL link for the
  [Resource Audit Overview](/docs/accessinformationcenter/11.6/resource-audit/overview.md)
  topic
- Security Team — Need topics that align to the work the will be doing in the Access Information
  Center:

  - Accessing Resource Audits — Send the URL link for the
    [Resource Audit Overview](/docs/accessinformationcenter/11.6/resource-audit/overview.md)
    topic
  - Ownership Administrator — Send the URL link for the
    [Resource Owners Overview](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md)
    topic
  - Review Administrator — Send the URL link for the
    [Resource Reviews Overview](/docs/accessinformationcenter/11.6/access-management/resource-reviews/overview.md)
    topic
  - Request Administrator — Send the URL link for the
    [Access Requests Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
    topic

- Administrator — Send the URL link for the
  [Administrator Overview](/docs/accessinformationcenter/11.6/administration/overview.md)
  topic
- User Access Administrator — Send the URL link for the
  [Console Access Page](/docs/accessinformationcenter/11.6/administration/configuration/console-access.md)
  topic

## Resource Ownership Configuration

It is possible to enable business owners and data custodians to manage their resources through the
application. Also, ownership of resources must be assigned in order to use the Resource Reviews and
Access Requests workflows.

- Resource Ownership — Assign ownership for resources to be managed through the application. See the
  [Resource Owners Interface](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md)
  topic for additional information.
- Enable Owners — Send a notification to your owners about resource ownership with the application.
  See the
  [Notification to Owners](/docs/accessinformationcenter/11.6/access-management/resource-owners/overview.md#notification-to-owners)
  topic for additional information.

## Resource Review Workflow

The Access Information Center can be configured to run Resource Reviews, or attestations. All
resources to be included in reviews must be assigned owners on the Resource Owners interface. The
workflow consists of:

- Resource Reviews — Configure reviews for Access, Membership, Permissions, or Sensitive Data
- Owner Performs Review — Owners process the review, potentially recommending changes
- Review Administrator Approval — Review and process owner recommended changes

**_RECOMMENDED:_** Set expectations for response time from owners.

Reviews can be run multiple times, maintaining a historical record for each instance. See the
[Resource Reviews Overview](/docs/accessinformationcenter/11.6/access-management/resource-reviews/overview.md)
topic for additional information.

## Access Requests Workflow

The Access Information Center can be configured for access request by domain users. All resources to
be available for requests must be assigned owners on the Resource Owners interface. The workflow
consists of:

- Enable Domain Users — Send a notification to your domain users about access requests with the
  Access Information Center. See the
  [Notification to Domain Users](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md#notification-to-domain-users)
  topic for additional information.
- Owner Response — Set expectations for response time from owners

See the
[Access Requests Overview](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md)
topic for additional information.

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

Enterprise Auditor Web Console

On the server hosting Netwrix Enterprise Auditor, the Published Reports icon can be used to launch
the Web Console. This provides access to both Netwrix Enterprise Auditor published reports and the
Access Information Center in a browser with a default port of 8082, which can also be customized.
Alternatively, the URL can be used:

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
[Alias Server Host Name](/docs/accessinformationcenter/11.6/administration/configuration/alias-server.md)
topic for additional information.

## Login Page

Users login with their domain credentials. If only one domain is known to the Access Information
Center, the credentials need only be username and password. If multiple domains are known to the
Access Information Center, then the username needs to be entered in the `domain\username` format.

**NOTE:** The URL may need to be added to the browser’s list of trusted sites.

![AIC Login page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/loginpage.webp)

The Access Information Center login page displays the Netwrix Enterprise Auditor logo at the top and
the browser tab is named Access Information Center. Logging in here will take users directly to the
Access Information Center. The interface a user arrives at depends upon the assigned role or lack of
assigned role. See the
[User Landing Page](/docs/accessinformationcenter/11.6/getting-started/user-landing.md)
topic for information on where different types of users are directed after login.

## Web Console Login Page

![Web Console Login page](/img/product_docs/accessanalyzer/11.6/install/application/reports/webconsolelogin.webp)

The Enterprise Auditor Web Console login page displays the Netwrix Enterprise Auditor logo at the
top and the browser tab is named Netwrix Enterprise Auditor. In order for a user to log into the Web
Console, the user’s account must have the User Principal Name (UPN) attribute populated within
Active Directory. Logging in here will take all users to the Enterprise Auditor Reports home page.

Follow the steps to open the Access Information Center.

![Menu icon on Web Console home page](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/accessfromwebconsole.webp)

**Step 1 –** On any page of the Web Console, click the menu icon to the left of the Netwrix
Enterprise Auditor logo.

![Apps slide-out menu](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/accessfromwebconsoleappsmenu.webp)

**Step 2 –** On the Apps slide-out menu, click Access Information Center.

![AIC opened from the Web Console](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/aicfromwebconsole.webp)

The Access Information Center opens in a new tab in your browser. The interface a user arrives at
depends upon the assigned role or lack of assigned role. See the
[User Landing Page](/docs/accessinformationcenter/11.6/getting-started/user-landing.md)
topic for information on where different types of users are directed after login.
