---
title: "Exchange Subscription"
description: "Exchange Subscription"
sidebar_position: 10
---

# Exchange Subscription

While creating or editing mail enabled objects through a Synchronize job, Directory Manager provides
you the facility to sync or deprovision subscriptions from Office 365 messaging provider.

## Sync Exchange subscriptions

While creating or editing a Synchronize job (mailbox-enabled user) you can sync subscriptions from
Exchange messaging provider.

On the **Object, Fields and Mapping** page:

Step 1 – In the **Messaging Provider** drop-down list, select the **Exchange** version that you want
to use.

Step 2 – Enter the domain name where the mail server resides in the **Domain** name box.

Step 3 – Enter the username and password of an authorized user account on the mail server in the
**Username** and **Password** boxes.

Step 4 – Set Exchange server priority.

With Microsoft Exchange as the messaging provider, the **Server Name** column in the **Server Status
& Priority** area lists the mail servers in the environment. By default, Directory Manager randomly
assigns the highest priority to a server. You can change its priority level and set the priority for
other servers.

If your required server is not listed, click **Sync Again**.

1. In the **Server Status and Priority** section, select the check box for the server you want to
   specify or change the priority for.

    Directory Manager checks the availability of the server and displays its status as _Online_
    (available) or _Offline_ (unavailable) in the **Status** column.

2. In the **Priority** box, select a priority level for the server, with ‘1’ representing the
   highest priority.

Step 5 – Click **Save**.
