---
title: "Deploy the Service"
description: "Deploy the Service"
sidebar_position: 40
---

# Deploy the Service

Follow the steps to deploy the service.

**Step 1 –** Locate the add-on folder on the computer where the Auditor Server resides.

**Step 2 –** Run the **install.cmd** file. The file deploys and enables the Auditor **ITSM
Integration Service**.

**NOTE:** Stop and then restart the service every time you update any of configuration files.

## Configure Integration Service to Use Proxy

If you are using a proxy to provide access to the Internet, consider that the Auditor ITSM
Integration Service will need some additional configuration for proxy server to be detected
properly. The reason is that this service runs under the **LocalSystem** account (non-interactive),
which requires proxy settings to be specified manually. See the following Microsoft article for
additional information:
[HTTP proxy.](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/automatic-proxy-detection)

Follow the step to configure integration service settings.

**Step 3 –** Navigate to the add-on folder (default name is _Netwrix_Auditor_Add-on_for_ITSM_) and
select the **Netwrix.ITSM.IntegrationService.exe.config** service configuration file.

**NOTE:** If Auditor ITSM Integration Service is running, stop it before modifying configuration
file.

**Step 4 –** Open this XML file for edit and add the following section:

```xml
<system.net>

<defaultProxy>

<proxy

proxyaddress="http://<ip_address>:<port>"

usesystemdefault="True"

autoDetect="False" />

</defaultProxy>

</system.net>
```

Here:

| Parameter        | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| proxyaddress     | Specify default proxy address and connection port, e.g., _http://172.28.13.79:8080_               |
| usesystemdefault | Set to **True** to allow Internet Explorer proxy settings to be overwritten with custom settings. |
| autoDetect       | Set to **False**.                                                                                 |

**Step 5 –** Start the Auditor ITSM Integration Service.
