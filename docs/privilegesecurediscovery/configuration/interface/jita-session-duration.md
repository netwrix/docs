---
title: "Change the default JITA session duration"
description: "Set the default and maximum length of just-in-time access (JITA) sessions in Netwrix Privilege Secure for Discovery."
sidebar_position: 40
---

A just-in-time access (JITA) session gives a user temporary administrator rights on a system. One setting in Netwrix Privilege Secure for Discovery controls both the default length of a session and the longest session or extension that a user can request.

| Property | Value |
| --- | --- |
| Default | 240 minutes (4 hours) |
| Minimum | 1 minute |
| Maximum | 1440 minutes (24 hours) |

The value applies to every place a user starts or extends a session: the **Access System** button, the **JITA Session** link in the **Administrator Accounts** pane, and bulk JITA requests. A request for a longer duration fails with the message `Invalid Access Duration Requested.` for a single system. A bulk request that exceeds the limit fails with a message that names the maximum in seconds.

## Change the duration

1. Select **Configure** > **Server**.
2. In the **Additional Options** pane, select the value next to **Default/maximum JITA session duration**.
3. Enter a number of minutes from 1 to 1440.
4. Select the check mark to save.

![The Additional Options pane with Default/maximum JITA session duration set to 240 minutes](/images/privilegesecurediscovery/configuration/ifc-additional-options.webp)

If the value is outside the range, the pane shows **Must be at least one minute** or **Must be less than 1440 minutes (1 day)** and doesn't save it. The change takes effect for new requests immediately. Sessions that are already active keep their expiration time. You don't need to restart any services.

For example, to limit sessions to two hours, enter `120`. The duration choices on the **Grant Access** page then stop at 120 minutes, and users can't extend a session by more than 120 minutes at a time.

## Extend a session

A user can extend an active session only during the last 60 minutes before it expires. An earlier attempt fails with the message `Extend operation must occur within 60 minutes of expiration.` Each extension adds the requested minutes to the current expiration time, up to the value you set here. If the user doesn't request a length, the extension uses the default duration.
