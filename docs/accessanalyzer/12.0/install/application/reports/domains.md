---
title: "Enable Multiple Domain Access"
description: "Enable Multiple Domain Access"
sidebar_position: 30
---

# Enable Multiple Domain Access

When the `AuthenticationDomains` parameter in the **WebServer.exe.config** file is blank, only
domain users from the domain where the Access Analyzer Console resides can access the Web Console.
Access can be granted from other domains when specified within this parameter.

:::note
Once another domain is added, then it is necessary to also add the domain where the Access
Analyzer Console resides.
:::


All domains provided or enumerated must have a trust relationship with the domain where Access
Analyzer resides. Follow the steps to allow access to the Web Console from other domains.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is
located within the Web folder of the Access Analyzer installation directory.

![WebServer.exe.config file in Notepad](/images/accessanalyzer/12.0/install/application/reports/webserverexeconfigmultipledomains.webp)

**Step 2 –** Add the desired domains to the value for the `AuthenticationDomains` parameter:

```
<add key="AuthenticationDomains" value="" />
```

Use domain name in a comma-separated list. For example:

```
<add key="AuthenticationDomains" value="Sherwood.com, Nottingham.com" />
```

**Step 3 –** Save and close the file.

**Step 4 –** Navigate to Services (`services.msc`). Restart the Access Analyzer Web Server service.

The Web Console can now be accessed from multiple domains.

:::note
In order for the AIC to be accessed from these domains, this must also be configured for
the AIC. See the Multiple Domains topic in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

:::
