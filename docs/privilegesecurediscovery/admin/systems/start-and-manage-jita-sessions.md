---
title: "Start and manage JITA sessions for another user"
description: "Start, extend, and expire just-in-time administration sessions on behalf of another user as an administrator."
sidebar_position: 50
---

An administrator can start, extend, and expire just-in-time administration (JITA) sessions on behalf of another user. This is useful for vendors and contractors, because they don't need access to Netwrix Privilege Secure for Discovery. It also helps when an endpoint detection and response (EDR) integration is enabled: the administrator can grant access to a user who isn't on the corporate network or VPN.

Only users with the administrator role can act on behalf of another user. The target user must already have access to the system through its account inventory. If not, the request fails with `The target user with ID '<id>' is not a system administrator.`

## Start a session for another user

1. Select **Access** > **Grant Access**, and open the system.
1. Select **JITA Session** next to the **Administrator Accounts** table.

   ![The JITA Session and Add Account buttons for the Administrator Accounts table](/images/privilegesecurediscovery/admin/grant-access-inventory-buttons.webp)

1. In **User**, enter at least two characters of the user name, and select the user. The list shows only users who have access to the system. The list labels a user who already has a session as **User has an active session**, and you can't select that user.
1. For **Access Duration**, select an option, move the slider, or enter the minutes. The maximum is the session limit on **Configure** > **Server**, 240 minutes by default.
1. If comments are enabled, enter the reason in **Comments**. The field is required.
1. Select **Start**.

![The New JITA Session form with the user and access duration](/images/privilegesecurediscovery/admin/grant-access-new-jita-session.webp)

The product records both administrators in the access history, for example `User CORP\<admin> requested access for user CORP\<user>.`

## Extend or expire a session

1. Open the system on **Access** > **Grant Access**.
1. In the **Action** menu of the user with the active session, select **Extend Session** or **Expire Session**.
1. For **Extend Session**, set the extra time in **Access Duration**, and then select **Extend**.

**Expire Session** ends the session without a confirmation step.

## Grant access to a user who is off the network

When the target system is offline and an EDR integration is enabled for it, the product falls back to the EDR integration to grant the access. A session that you start from the web interface uses this fallback. Sessions that bulk actions start don't.

The EDR integrations are CrowdStrike, Carbon Black, SentinelOne, and Tanium. See [CrowdStrike](../../integrations/edr/crowdstrike.md), [Carbon Black](../../integrations/edr/carbonblack.md), [SentinelOne](../../integrations/edr/sentinelone.md), and [Tanium](../../integrations/edr/tanium.md).

## Limits

- The **JITA Session** button isn't available on Linux systems whose **Directory Bridging** is **Privilege Secure for Discovery**. A request through the API returns the message that requests on behalf of another user aren't supported for Linux systems that use Privilege Secure directory bridging. This is intentional, because that mode needs the password of the person who requests access.
- On Linux systems, the button appears when **Directory Bridging** is set to Centrify, PowerBroker, or System Security Services Daemon (SSSD).
- You can't start a bulk JITA session for another user. The **JITA** bulk action always uses the signed-in user. See [Run bulk actions on systems](./bulk-actions.md).
