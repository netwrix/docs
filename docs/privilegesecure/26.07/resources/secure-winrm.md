---
title: "Configure a secure WinRM connection"
description: "Set up Windows Remote Management over HTTPS for a Windows server by importing, pushing, or generating the certificate that secures the connection."
sidebar_position: 40
---

# Configure a secure WinRM connection

Windows Remote Management (WinRM) is one way Netwrix Privilege Secure for Access Management (Privilege Secure) connects to Windows servers. Use the **WinRM Config** button to secure that connection with a certificate, so that Privilege Secure can connect over HTTPS (default port 5986) instead of HTTP (default port 5985).

## Prerequisites

- A Windows server that you onboarded as a resource. See [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md). The **WinRM Config** button appears only on Windows servers.
- A service account that can reach the server. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md).
- For **Push NPS certificate to host**, a certificate on the Privilege Secure server. See [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md).

{/* TODO verify: which NPS certificate the Push NPS certificate to host option pushes, and whether the web console certificate page is the right prerequisite link. */}

## Certificate sources

The **Configure Secure WinRM Connection** window offers three certificate sources.

| Option | Use it when |
|---|---|
| **Import certificate from host** | The server already has a certificate for WinRM HTTPS. Privilege Secure imports it. This option is the default. |
| **Push NPS certificate to host** | You want to send a certificate from Privilege Secure to the server. |
| **Generate a new self-signed certificate** | The server has no certificate, and you want Privilege Secure to create one. Privilege Secure generates the certificate and imports it automatically. |

## Configure the connection

1. Select **Resources** in the left navigation.
1. Select the name of a Windows server to open its details page.
1. Select **WinRM Config**. The **Configure Secure WinRM Connection** window opens.
1. Under **1. Choose certificate source**, select one of the three options.
1. Under **2. Select a certificate**, enter the thumbprint of the certificate in **Host certificate thumbprint**. This field applies to **Import certificate from host** and **Push NPS certificate to host**.
1. Select **Submit**.
1. In **System Settings** > **WinRM Options**, set **WinRM HTTP Setting** to **Use Https If Available** or **Use Https Only**. See [Choose HTTP or HTTPS](#choose-http-or-https).

{/* TODO verify: whether Host certificate thumbprint is required for each option, and whether the field is ignored for Generate a new self-signed certificate. */}

{/* TODO: add an example thumbprint value. The sources contain no real thumbprint, and none is invented here. */}

{/* TODO screenshot: Configure Secure WinRM Connection window with the three certificate sources and the thumbprint box */}

The server now has a certificate for WinRM over HTTPS.

## Choose HTTP or HTTPS

Privilege Secure uses HTTPS only when **WinRM HTTP Setting** is **Use Https If Available** or **Use Https Only**. The default is **Use Http**, so a certificate alone doesn't switch the connection to HTTPS. Set the option under **System Settings** > **WinRM Options**. See [System settings](/docs/privilegesecure/26.07/configuration/system-settings/system-settings.md).

| Option | Result |
|---|---|
| **Use Http** | The default. |
| **Use Https If Available** | Uses HTTPS. |
| **Use Https Only** | Uses HTTPS. |

{/* TODO verify: the per-resource override of WinRM HTTP Setting (ManagedResource.WinRmHttpSetting): where it appears on the server details page */}

The **WinRM Disabled** checkbox on the server details page stops Privilege Secure from using WinRM for that server. See [Server details](/docs/privilegesecure/26.07/resources/servers.md).

## Related topics

- [Server details](/docs/privilegesecure/26.07/resources/servers.md)
- [Ports](/docs/privilegesecure/26.07/requirements/ports.md)
