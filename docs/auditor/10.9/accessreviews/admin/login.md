---
title: "URL & Login"
description: "URL & Login"
sidebar_position: 50
---

# URL & Login

You can access the Access Reviews Console through a supported browser from a machine within your
company's network. The URL is the hosting machine's name and the
port, `http://[HOSTNAME.DOMAIN.COM]:81`. For example, if the application was installed on a server
named NEWYORKSRV10.NWXTech.com with the default port of 81, the URL would be
`http://NEWYORKSRV10.NWXTech.com:81`.

Administrators

Administrators with access to the server hosting the application can use the desktop icon to launch
the application in their default browser. Alternatively, you can use the localhost URL:

- HTTP URL

    - http://localhost:81

- HTTPS URL

    - https://localhost:481

Remote Access

Because Access Reviews is a browser-based application, you can access the web interface remotely.
The Administrator is responsible for providing users with the correct URL for access.

Depending on your network environment, you may need to use the NetBIOS name, FQDN, or IP Address of
the hosting server in the browser. Also, additional configurations by network and system
administrators may be necessary to make the web server accessible to remote users (firewall
configurations, DNS settings, etc.).

You can replace the server name in the URL with an alias. See the
[Notification Options](configuration/notifications.md#notification-options) topic for additional
information.

## Login Page

Users log in with their domain credentials. If only one domain is known to the Access Reviews
Console, you only need a username and password. If multiple domains are known, enter the username
in the `domain\username` format.

**NOTE:** You may need to add the URL to the browser's list of trusted sites.

![Access Information Center Login page](/images/auditor/10.7/access/reviews/admin/login.webp)

The interface a user arrives at depends upon the assigned role or lack of assigned role.

## User Landing Page

Role-based access controls what interfaces users can see and where each user goes upon login.

**_RECOMMENDED:_** Send an email to your users. Let them know why you're implementing the
application, provide the URL, and explain how to log in with their domain credentials and the
username format. See the
[Enable Console Users](/docs/auditor/10.9/accessreviews/accessreviews.md) topic for additional
information.

### Administrator Role

Users granted the Administrator role go to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for an Administrator user](/images/auditor/10.7/access/reviews/admin/landingadmin.webp)

Administrators are the only ones with access to the Configuration interface. The My Reviews
interface is available if the logged-in user is also assigned ownership of a resource.

### Security Team Role

Users granted the Security Team role go to the Resource Owners interface upon login.

![Resource Owners interface as the landing page for a Security Team user](/images/auditor/10.7/access/reviews/admin/landingsecurityteam.webp)

Security Team members only lack access to the Configuration interface, which is only available to
Administrators. The My Reviews interface is available if the logged-in user is also assigned
ownership of a resource.

### Owners Without Role

Users assigned ownership of a resource but not granted a user role go to the My Reviews interface
upon login.

![My Reviews interface as the landing page for an Owner without a user role](/images/auditor/10.7/access/reviews/admin/landingowner.webp)

Owners can view pending reviews and view historical reviews.
