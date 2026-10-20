---
title: "Change the Default JITA Session Duration"
description: "Set the default and maximum duration of just-in-time access (JITA) sessions in the Privilege Secure for Discovery web interface."
sidebar_position: 40
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/configuration/1500002908881_mceclip0.webp and 1500002908881_mceclip1.webp are older UI captures. Re-capture in the 26.09.1 UI.
:::

The default JITA session duration is also the maximum duration that you can enter when you select **Access System** on the Grant Access page. The maximum value for this setting is 1440 minutes (1 day).

Within an hour of expiration, you can still extend a JITA session, up to the maximum that you set here. The initial session and all extensions together can't exceed 24 hours.

## Change the duration

1. Select **Configure** > **Server**.
2. Under **Additional Options**, select the value next to **Default/maximum JITA session duration**.

   ![The Additional Options pane with the Default/maximum JITA session duration setting](/images/privilegesecure/4.2/discovery/admin/configuration/1500002908881_mceclip0.webp)

3. Enter the duration in minutes, up to 1440, and save the value.

   ![The Default/maximum JITA session duration value in edit mode](/images/privilegesecure/4.2/discovery/admin/configuration/1500002908881_mceclip1.webp)

You don't need to restart any services.
