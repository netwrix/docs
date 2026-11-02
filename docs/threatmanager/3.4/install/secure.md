---
title: "Secure the Threat Manager Console"
description: "Choose HTTPS for the Threat Manager web console and services on the Securing Threat Manager installer page, or change the certificate later."
sidebar_position: 40
---

# Secure the Threat Manager Console

The installer has a page titled **Securing Threat Manager**. It sets whether the web console and the services use HTTPS. The page applies to the Web Service in every install mode. It applies to the Integration Service only in a remote install. The installer enables HTTPS by default for remote Integration Service installs.

## When the Securing Threat Manager page appears

The page appears in these cases:

- **Install** – When a service has no `appsettings.json` file yet, or when you selected **Advanced Installation** on the Welcome page.
- **Modify** – Always.
- **Repair** and **Uninstall** – Never.

## Choose how Threat Manager is secured

**Step 1 –** On the Securing Threat Manager page, select one of the following options:

- **Leave settings unchanged** – Keeps the current settings. This option appears only when every service already has an `appsettings.json` file. If a service has no `appsettings.json` file, the installer preselects **Installed Certificate (recommended)**.
- **Installed Certificate (recommended)** – Secures the connections with a certificate from the Local Computer certificate store.
- **Unsecured** – Sends traffic over an unencrypted connection.

:::warning
If you select **Unsecured**, the installer warns: "Traffic to the web console and services will be sent over an unencrypted connection, including administrator credentials, and is vulnerable to man in the middle attacks (i.e interception, monitoring, alteration and substitution). Installing a certificate to secure these connections is strongly recommended."
:::

**Step 2 –** If you selected **Installed Certificate (recommended)**, select a certificate from the list. The list shows the certificates in the Local Computer certificate store. Click **Refresh** to reload it. You must select a certificate before you can continue.

**Step 3 –** Click **Next**.

The installer sets `WebService:Certificate` to the thumbprint of the selected certificate for each service that supports HTTPS. The value is empty for HTTP. If the thumbprint isn't in the Local Computer Personal certificate store, the installer stops with "Failed to configure the web service certificate".

## Generate a self-signed certificate

If you don't have a certificate, the installer can generate one.

**Step 1 –** In the certificate list, select **\<Generate a Self-Signed Certificate\>**, the last entry in the list.

**Step 2 –** Confirm the prompt. The installer asks: "Generate a self-signed certificate named "\{0\}" now and add it to the Local Computer certificate store?"

The installer names the certificate "Netwrix Threat Manager Self-Signed For `<computer name>`", uses the host name as its subject, and makes it valid for 20 years. If generation fails, the installer shows "The self-signed certificate could not be generated: \{0\}".

## Change the certificate after installation

To change the certificate, run the installer in Modify mode. The Securing Threat Manager page always appears in Modify mode.

{/* TODO: confirm the Windows Firewall rule opens the HTTPS port of the Web Service */}
