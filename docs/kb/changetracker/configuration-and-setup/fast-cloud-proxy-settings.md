---
title: How to Configure the FAST Cloud Integration with Proxy Internet Settings
description: >-
  If you use a proxy on your Netwrix Change Tracker Server and the FAST Service
  Test fails or times out, configure the proxy that the Hub uses. From version
  8.2.1, the Hub uses the machine-level WinHTTP proxy (netsh winhttp). Version
  8.2.0 and earlier use the ALL_PROXY system environment variable.
sidebar_label: FAST Cloud Proxy Settings
keywords:
  - Netwrix Change Tracker
  - FAST Cloud
  - FAST Service Test
  - proxy
  - WinHTTP
  - netsh winhttp
  - ALL_PROXY
  - environment variable
  - IIS
  - proxy settings
  - timeout
products:
  - change-tracker
tags:
  - kb
  - configuration-and-setup
knowledge_article_id: ka0Qk000000D34vIAC
---

# How to Configure the FAST Cloud Integration with Proxy Internet Settings

## Overview

If you have set up a proxy internet connection on your Netwrix Change Tracker Server and FAST Cloud is not working as expected (for example, the **FAST Service Test** times out after 60 seconds), follow the instructions below to configure the proxy settings that the Hub uses.

The steps depend on your Netwrix Change Tracker version:

| Version | Proxy setting the Hub uses for FAST Cloud |
|---|---|
| 8.2.1 and later | Machine-level WinHTTP proxy (`netsh winhttp`) |
| 8.2.0 and earlier | `ALL_PROXY` system environment variable |

> **IMPORTANT:** If you upgraded from 8.2.0 or earlier to 8.2.1 or later, the `ALL_PROXY` environment variable no longer has any effect. Follow the instructions for 8.2.1 and later.

> **NOTE:** The browser's proxy settings (**Internet Options** > **Connections** > **LAN settings**) apply only to the signed-in user, and the Hub doesn't use them. FAST Cloud may work in a browser on the server while the FAST Service Test still fails.

## Instructions for Netwrix Change Tracker 8.2.1 and Later

1. On the Netwrix Change Tracker Server, open **Command Prompt** as Administrator.
2. Check the current WinHTTP proxy setting:

   ```
   netsh winhttp show proxy
   ```

   - `Direct access (no proxy server).` means no WinHTTP proxy is configured.
   - If a proxy is already listed, record the output before making changes. Other services on the server may depend on it.

3. Set the WinHTTP proxy:

   ```
   netsh winhttp set proxy proxy-server="PROXYADDRESS:PORT" bypass-list="<local>;localhost;127.0.0.1"
   ```

   > **NOTE:** Replace `PROXYADDRESS:PORT` with the host name or IP address and port of the proxy server, for example `proxyserver.local:8888`. Add any internal addresses that should not go through the proxy to `bypass-list`, separated by semicolons (for example, `*.yourdomain.local`).

   Alternatively, if the browser on the server is configured with the correct proxy directly (not through an automatic configuration script), you can copy its settings:

   ```
   netsh winhttp import proxy source=ie
   ```

   > **NOTE:** The WinHTTP proxy applies to the whole server and affects every service that uses WinHTTP. Automatic configuration scripts (PAC files) are not supported. Specify the proxy address and port directly.

4. Confirm the setting has been applied:

   ```
   netsh winhttp show proxy
   ```

5. Restart IIS:

   ```
   iisreset
   ```

6. Restart the Netwrix Change Tracker worker services, or restart the Netwrix Change Tracker Server.
7. Run the **FAST Service Test** again. FAST Cloud should now function as expected.

To remove the WinHTTP proxy and return to direct access, run `netsh winhttp reset proxy`, then repeat steps 5 and 6.

## Instructions for Netwrix Change Tracker 8.2.0 and Earlier

1. Open **Windows Control Panel**.
2. Choose **System**.
3. Choose **Advanced system settings**.
4. On the Advanced tab, click **Environment Variables**.
5. Click **New** to create a new environment variable under the **System Variables** heading.
6. Enter Variable Name: **ALL_PROXY**.
7. Enter Variable Value: `http://IPADDRESS:PORT`.

   > **NOTE:** This should be the IP and port of the proxy server.

8. Select **OK**.
9. After creating the environment variable, click **OK** to apply the changes.
10. Once the environment variable is configured, restart the Netwrix Change Tracker Server. The FAST Cloud should now function as expected.

## Troubleshooting

- Make sure the proxy and firewall allow outbound HTTPS (port 443) to `www.nntwsfast.com`.
- If the WinHTTP proxy setting is reverted later, your organization may manage it through Group Policy or startup scripts. Ask your IT team to add the proxy setting there.
- FAST Service Test failures are logged as `TestFastConnection` entries in `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\logs\hubservice-log.txt`.
