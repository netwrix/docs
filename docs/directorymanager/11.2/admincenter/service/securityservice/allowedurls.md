---
title: "Allow Return URLs for Load Balancers and Reverse Proxies"
description: "Add the URLs clients use to reach Directory Manager to the Security service's list of allowed base URLs, so that load balancer, reverse proxy, and IdP-initiated sign-ins work."
sidebar_position: 40
---

# Allow Return URLs for Load Balancers and Reverse Proxies

The Security service validates the return URL of each sign-in request against a list of allowed base
URLs. If you reach Directory Manager through a load balancer or a reverse proxy, or you sign in
from your identity provider (IdP-initiated sign-in), add the URLs that clients use to this list.
Requests with a URL that isn't on the list don't go through.

The list is the `AllowedBaseUrls` setting in the `appsettings.json` file of each Security service.

## Add the Allowed Base URLs

Perform these steps on every Directory Manager server that hosts a Security service. If you run
multiple Security services behind a load balancer, each one needs the same list.

Step 1 – Open the `appsettings.json` file of the Security service in a text editor:

`X:\Program Files\Imanami\GroupID 11.0\GroupIDSecurityService\Inetpub\GroupIDSecurityService\Web\appsettings.json`

(X represents the Directory Manager installation drive)

Step 2 – In the `ReturnUrlValidation` section, add the allowed URLs to the `AllowedBaseUrls` array.
Use the format `https://<hostname-or-ip>:<port>`, and include:

- Every load balancer host name, and any virtual IP address (VIP), that clients use to access
  Directory Manager
- The host name of every individual node
- The IP address of every individual node

For example:

```json
"ReturnUrlValidation": {
  "AllowedBaseUrls": [
    "https://directorymanager.example.com:443",
    "https://node1.example.com:443",
    "https://10.1.2.11:443",
    "https://node2.example.com:443",
    "https://10.1.2.12:443"
  ]
}
```

Step 3 – Save the file.

Step 4 – Restart the Security service's site, or recycle its application pool in IIS. Do this on
every server where you edited the file.

:::warning
Re-running the Configuration Tool or upgrading Directory Manager overwrites `appsettings.json`.
After either, add the allowed base URLs again.
:::
