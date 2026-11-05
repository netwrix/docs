---
title: "Notifications"
description: "Notifications"
sidebar_position: 90
---

# Notifications

Netwrix 1Secure provides notifications that report on five types of health issues: an agent is
offline, an agent update is recommended, a source connector has an error, credentials have expired,
and the Entra ID SSO client secret is expiring.

| Icon                                                                                    | Description                                             |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| ![selfupdate_icon](/images/1secure/admin/selfupdate_icon.webp) | Bell icon. Click the Bell icon to view all active health issues. The icon shows a badge with the number of notifications. |

**To review notifications:**

**Step 1 –** Click the **Bell** icon.

**Step 2 –** Select and fix any of the issues on the displayed panel.

![notifications](/images/1secure/admin/notifications.webp)

**Step 3 –** Select **Fix**. The **Fix** button shows only to users with the Editor role or higher,
and only when the notification has a destination.

The bell lists the active health issues for your organization and, for MSPs, the managed
organizations you can access. When there are none, the panel shows "No notifications." Viewing
notifications requires the Dashboard view permission.

## Notification messages

When more than 5 alerts of a type exist, they collapse into one notification per organization. When
they span more than 5 organizations, they collapse into one summary notification.

| Issue | Message |
| --- | --- |
| Agent offline | `<org> - Agent "<name>" is offline` |
| More than 5 agents offline | `<org> - N agents offline` |
| Offline agents in more than 5 organizations | `N agents offline across M organizations` |
| Agent update | `N agents are awaiting updates.` |
| Source connector error | `<org> - <source> has issues` |
| Source connector errors, grouped | `<org> - N issues crawling sources` |
| Source connector errors, reduced | `N issues crawling sources accross M organizations` |
| Expired credentials | `Credentials <name> have been flagged as expired. Please re-enter these credentials to ensure they can still be used by the agent.` |
| Entra ID SSO secret | `<org> - The client secret for Entra ID SSO is expiring soon. This secret should be renewed imminently to prevent issues accessing 1Secure.` |

The Entra ID SSO secret notification shows only to users with the Editor role or higher and links to
Tenant Administration.

## Banner notifications

A banner at the top of the page shows header notifications for the effective organization. Each
banner is an alert whose severity follows the notification type.
