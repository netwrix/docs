---
title: "Display Co-Managed Groups In My Groups"
description: "Configure whether groups with an Exchange co-managed owner appear in My Groups and related pages for portal users."
sidebar_position: 10
---

# Display Co-Managed Groups In My Groups

Microsoft Exchange lets you assign an additional owner to a group directly in Exchange. Directory
Manager calls this an Exchange additional owner, and refers to a group that has one as a
**co-managed group**, because Directory Manager and Exchange share ownership of it. See
[Set Exchange additional owners](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupownershipfunction.md#set-exchange-additional-owners)
for details on assigning these owners.

**Display Co-Managed Groups In My Groups** is a Listings Display setting that controls whether
co-managed groups appear for portal users alongside the groups they own directly.

## Scope of the setting

An administrator configures this setting once for a portal application, and it becomes the default
for every user of that portal.

Portal users connected to an Active Directory identity store also have their own personal
preference, **Display exchange co-managed groups**, available from the Settings panel in the
portal. This personal preference works independently of the administrator's setting. A user sees
co-managed groups when the administrator's setting is on, when the user turns on their personal
preference, or both. Co-managed groups stay hidden for a user only when both settings are off.

## Prerequisite

This setting only takes effect when the identity store's messaging system is configured with
Microsoft Exchange as the messaging provider, and that Exchange deployment supports the
`msExchangecoManagedby` attribute, which stores Exchange additional owners. See
[Configure a Messaging Provider](/docs/directorymanager/11.1/admincenter/identitystore/configure/messagingprovider.md#set-microsoft-exchange-as-messaging-provider)
to set up Exchange as the messaging provider, and
[Set Exchange additional owners](/docs/directorymanager/11.1/portal/group/workingwithgroups/groupownershipfunction.md#set-exchange-additional-owners)
to assign co-managed owners. Without this configuration, no co-managed groups exist for the
setting to display.

## Enable or disable the setting

1. In Admin Center, select **Applications** in the left pane.
2. Click the ellipsis button for the portal and select **Settings**.
3. Click **Advanced Settings** under **Server Settings**.
4. On the **Advanced Settings** page, click the **Listings Display** tab.
5. Set **Display Co-Managed Groups In My Groups** to your preference:

   - Enable it to show co-managed groups to every user of the portal by default.
   - Disable it to hide co-managed groups by default. Co-managed groups still appear for
     individual users who turn on their own **Display exchange co-managed groups** preference.

6. Click **Save**.
