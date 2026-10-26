---
title: "Customize the header branding"
description: "Replace the logo and change the background color of the Netwrix Privilege Secure for Discovery header to match your brand or to tell environments apart."
sidebar_position: 10
---

You can replace the logo and change the background color of the header at the top of the Netwrix Privilege Secure for Discovery web interface. Use this to match your corporate branding, or to tell environments apart so that you don't change the wrong one, for example by giving a test environment a distinct color. The settings apply to every user of the server.

The default header has a light gray background (`#ebebeb`) and the Netwrix Privilege Secure logo.

![The default header with the Netwrix Privilege Secure logo](/images/privilegesecurediscovery/configuration/ifc-header-default.webp)

## Prerequisites

- An administrator account in Privilege Secure for Discovery.
- A logo image in PNG or JPEG format (`.png`, `.jpg`, or `.jpeg`), 6 MB or smaller. The header displays the logo at a maximum height of 28 pixels, so size the image to that height.

## Change the header logo

1. Select **Configure** > **Server**.
2. In the **Web Application Settings** pane, find **Header Logo Image**.
3. Select **Upload File** and choose your image.

The new logo replaces the default logo in the header immediately. The server rejects files that aren't PNG or JPEG.

To restore the default logo, select **default** next to **Header Logo Image**.

![The Web Application Settings pane with the Header Logo Image and Header Background Color settings](/images/privilegesecurediscovery/configuration/ifc-webapp-settings.webp)

## Change the header background color

1. Select **Configure** > **Server**.
2. In the **Web Application Settings** pane, select the color swatch next to **Header Background Color**.
3. Choose a color in the color picker.
4. Select **save**.

The header changes color immediately. When you use a custom logo, the logo background uses the same color, so choose a color that works with your image.

To restore the default color, select **default** next to **Header Background Color**.

## Example: mark a test environment

To make a test environment obvious, upload a logo that reads `TEST ENV`, and set the background color to a strong red such as `#b3261e`. Users see the following header on every page.

![A header with a custom TEST ENV logo on a red background](/images/privilegesecurediscovery/configuration/ifc-header-custom.webp)

You don't need to restart any services.
