---
title: "Configure RADIUS authentication"
description: "Connect Privilege Secure for Discovery to a RADIUS server and sign in with a second factor from the RADIUS service."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the RADIUS port default and the exact field labels in the **Radius Configuration** panel at 26.09.1. Evidence: none (route `/config/radius` exists in docker/node/api-legacy-onprem/routes/routeManifest.js:643).

TODO: Confirm what the Second Factor field carries for each RADIUS mode (password, one-time code, push approval). Evidence: none.
:::

Netwrix Privilege Secure for Discovery can use a Remote Authentication Dial-In User Service (RADIUS) server as a second authentication factor. This page covers the RADIUS settings and the sign-in behavior.

## Prerequisites

- A RADIUS server in your environment.
- The RADIUS server IP address or URL.
- The RADIUS port.
- The RADIUS shared secret.
- Network access from Privilege Secure for Discovery to the RADIUS server. RADIUS uses UDP.

## Enter the RADIUS information

1. Go to **Configure** > **Server** > **Radius Configuration**.
2. Enter the RADIUS server IP address or URL, the port, and the shared secret.

   ![Radius Configuration panel with the server address, port, and secret fields](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip0.webp)

## Enable RADIUS

Use the controls at the bottom of the **Radius Configuration** panel to enable or disable RADIUS.

![Radius enable option at the bottom of the Radius Configuration panel](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip1.webp)

## Sign in with RADIUS

1. Enter your AD account as `<domain>\<username>`.
2. Enter the AD password for the account. Privilege Secure for Discovery validates the AD password first.
3. In the **Second Factor** field, enter the value that your RADIUS service requires, such as the RADIUS password or a one-time code.
4. Select **Sign In**.

While Privilege Secure for Discovery waits for RADIUS, the button shows "Signing In...".

![Sign In button showing Signing In while RADIUS authenticates](/images/privilegesecure/4.2/discovery/admin/configuration/360052024333_mceclip6.webp)

Complete the RADIUS two-factor authentication method to finish signing in.
