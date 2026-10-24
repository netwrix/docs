---
title: "Set the NPS REST URL and register services"
description: "Set the address that Privilege Secure services use to reach the web service, then register the services so they use it."
sidebar_position: 20
---

# Set the NPS REST URL and register services

The Privilege Secure services run separately from the web service. They include the Action, Email, Host Scan, Proxy, Scheduler, and SIEM services. Each service calls the web service at the address in **NPS Rest URL**. If the address is wrong, the services show as offline on the **Service Nodes** page.

Change the address when you install a certificate for the console website, or when you change the name that clients use to reach the console.

## Prerequisites

- The Administrator role.
- The certificate for the console website is installed and bound in Internet Information Services (IIS). See [Replace the web console certificate](/docs/privilegesecure/26_07/configuration/certificates).
- The IIS binding host name, the certificate subject, and the host name in the new URL match.

## Set the NPS REST URL

1. Select **System Settings** > **Services**.
1. In **NPS Rest URL**, enter the address of the web service. Use the form `https://<nps-server>:6500`, where `<nps-server>` is the name in the certificate. For example: `https://<nps-server-fqdn>:6500`.
1. Leave **Ignore HTTPS Certificate Errors** unchecked.
1. Click **Save**.
1. Click **Register Services**.

The page shows a "Services registered" message when the settings are applied.

{/* TODO screenshot: System Settings Services panel with the URL redacted */}

:::warning
Don't end the URL with a slash. Before Privilege Secure 26.07.3, a URL such as `https://<nps-server-fqdn>:6500/` made **Register Services** report success while every service then returned HTTP 500. From 26.07.3, the product removes the trailing slash. Enter the URL without one in every version.
:::

{/* TODO verify: the "Services registered" message in 26.07.3; the lab run of Register Services showed no visible message */}

## Fields

| Field | Description |
|---|---|
| **NPS Rest URL** | The address the services use to call the web service. It must start with `http://` or `https://`. The default is `https://localhost:6500`. |
| **Ignore HTTPS Certificate Errors** | When checked, services accept certificate errors from the web service. Leave it unchecked. |
| **Register Services** | Writes the URL to each service and restarts the services. |

Register Services writes the URL to the Action, Email, Proxy, Scheduler, SIEM, and Host Scan services. The Action Service Worker, the Remote Access Gateway, and the web service itself don't use it.

## Register services from the User Options menu

A second **Register Services** button is under **User Options** > **Settings**. It shows the text "Re-register services that are running on the Netwrix Privilege Secure Web Service server. Doing this will regenerate the settings and restart the services." Use it when the services are running but the console still warns that a service isn't registered.

{/* TODO verify: User Options > Settings is shown for domain administrators (the console code shows the Settings item for local users) */}

## Check that the services are running

After you register the services, select **Configuration** > **Service Nodes** and confirm each service shows as online. Register Services might not restart the Host Scan service. If Host Scan stays offline, restart the Host Scan service in Windows Services on the server.

{/* TODO verify: whether Register Services restarts the Host Scan service when it is running; seen once with Host Scan already offline */}

## Related topics

- [Replace the web console certificate](/docs/privilegesecure/26_07/configuration/certificates)
- [Installing an IIS Certificate](/docs/kb/privilegesecure/certificates-and-security/installing-an-iis-certificate)
- [Services aren't running](/docs/kb/privilegesecure/troubleshooting-and-errors/services-are-not-running)
