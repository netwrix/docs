---
title: "Customize the Header Branding"
description: "Change the logo and background color of the Privilege Secure for Discovery header to match your brand or to identify an environment."
sidebar_position: 10
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: All images on this page (/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_*.webp) are June 2022 captures of an older UI that show the previous product logo. Re-capture all of them in the 26.09.1 UI.
:::

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether the header branding behavior or the default logo and favicon changed in 26.06 and later, and update the steps and screenshots if so. Evidence: none; the review notes mention a 26.06 change to corporate-overrides.css.

TODO: Confirm the exact labels of the logo and color controls in the 26.09.1 UI. The code shows **Header Logo Image** with **Upload File** and **default**, and **Header Background Color** with **save** and **default**. Evidence: docker/web/common/config/views/serverView.html:383-470 at v26.09.1-rc.
:::

You can change the logo and the background color in the header at the top of the Netwrix Privilege Secure for Discovery web application. Use this to match your corporate branding. You can also use it to tell environments apart so that you don't make changes in the wrong environment, for example by using a different color for a test environment.

## Prerequisites

- Administrator access to Privilege Secure for Discovery.
- A logo image in `.jpg`, `.jpeg`, or `.png` format. The logo displays at a maximum height of 28 pixels.

## Change the header logo

1. Select **Configure** > **Server**.

   ![The Configure menu with the Server page selected](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.22.27_am.webp)

2. Go to **Web Application Settings**.

   ![The Web Application Settings pane on the Server page](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.22.44_am.webp)

3. Next to **Header Logo Image**, select **Upload File** and choose your image.

   ![The Header Logo Image setting with the Upload File button](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.22.56_am.webp)

   The new logo replaces the default logo in the header.

   ![The header after a new logo is uploaded](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.28.44_am.webp)

The following example uses a beta symbol to mark a beta environment.

![The header with a beta symbol as the logo to mark a beta environment](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.27.45_am.webp)

To restore the default logo, select **default** next to **Header Logo Image**.

## Change the header background color

1. Under **Web Application Settings**, select the color next to **Header Background Color**.

   ![The Header Background Color setting with the color picker](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.23.39_am.webp)

2. Choose a color.

   ![The color picker with a new color selected](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.23.51_am.webp)

3. Select **save**.

   ![The save button next to the Header Background Color setting](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.33.15_am.webp)

   The header changes color immediately.

   ![The header displayed with the new background color](/images/privilegesecure/4.2/discovery/admin/configuration/6472930856855_screen_shot_2022-06-03_at_9.34.07_am.webp)

To restore the default color, select **default** next to **Header Background Color**.

You don't need to restart any services. The changes take effect immediately.
