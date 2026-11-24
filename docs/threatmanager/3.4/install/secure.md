---
title: "Secure the Threat Manager Console"
description: "Configure HTTPS for Threat Manager in the installer by selecting a certificate, and change the setting later."
sidebar_position: 40
---

# Secure the Threat Manager Console

:::info
**Changing between HTTPS and HTTP requires you to manually re-register all remote services.**

Changing from one certificate to another doesn't require re-registration, provided that a trusted
authority issued the new certificate.

See the
[Connect a Remote Action Service to Threat Manager](/docs/threatmanager/3.4/install/actionservice.md#connect-a-remote-action-service-to-threat-manager)
topic for the registration steps.
:::


The Threat Manager installer includes a **Securing Threat Manager** page where you configure how
users and services connect to Threat Manager. Netwrix recommends HTTPS, which requires a certificate.

## Configure HTTPS

To configure HTTPS:

**Step 1 –** On the **Securing Threat Manager** page of the installer, select **Installed
Certificate (recommended)**.

![Securing Threat Manager page with Installed Certificate selected](/images/threatmanager/3.4/install/securecertificate.webp)

**Step 2 –** Select a certificate from the list. The list shows the certificates from the Trusted
Authority of the host. Click **Refresh** to reload the list.

**Step 3 –** Click **Next** and follow the prompts to complete the installation.

Netwrix highly recommends that you provide your own certificate, issued by a certificate authority
your organization trusts.

### Generate a self-signed certificate

If you don't have a certificate, select **\<Generate a Self-Signed Certificate\>** at the bottom of
the certificate list. The installer generates a certificate for you.

![Certificate list with the Generate a Self-Signed Certificate option](/images/threatmanager/3.4/install/securegeneratecertificate.webp)

:::warning
A self-signed certificate is acceptable as a temporary step only. Browsers report a certificate
warning to every user who visits the site, and the self-signed certificate must be installed on
every remote service host. See the
[Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.4/install/actionservice.md)
topic for additional information.
:::


## Use HTTP

To use HTTP, select **Unsecured** on the **Securing Threat Manager** page.

![Securing Threat Manager page with Unsecured selected and a warning about unencrypted traffic](/images/threatmanager/3.4/install/secureunsecured.webp)

:::warning
Netwrix doesn't recommend **Unsecured** for production environments. Traffic to the web console and
services is sent over an unencrypted connection, including administrator credentials. This
traffic is vulnerable to man-in-the-middle attacks (interception, monitoring, alteration, and
substitution).
:::


## Change the Certificate Settings

:::note
A change operation restarts the Threat Manager services and may cause service interruptions. Plan the
change for a time when an interruption is acceptable.
:::


To change the certificate or the security setting later:

**Step 1 –** Run the Threat Manager installer again and choose the **Change** option. The wizard
lets you change the settings you chose during the initial installation.

**Step 2 –** On the **Securing Threat Manager** page, select one of the following:

- **Leave settings unchanged** – Preserves any previous settings.
- **Installed Certificate (recommended)** – Select a different certificate, or generate a self-signed
  certificate.
- **Unsecured** – Switches to HTTP.

**Step 3 –** Click **Next** and follow the prompts to apply the change.
