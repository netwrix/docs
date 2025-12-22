---
title: "Item-Level Targeting with Collections and Policies"
description: "Item-Level Targeting with Collections and Policies"
sidebar_position: 70
---

# Item-Level Targeting with Collections and Policies

:::note
For more information on Endpoint Policy Manager Least Privilege Manager and Item Level
Targeting, please see the
[Endpoint Privilege Manager: Use Item Level Targeting to hone in when rules apply.](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/howtoandtechsupport/itemleveltargeting.md)
video.
:::


Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Endpoint
Policy Manager to target or filter where specific items will apply. With Endpoint Policy
ManagerLeast Privilege Manager, Item-Level Targeting can be placed on collections as well as
Endpoint Policy Manager Least Privilege Manager policies within collections.

A collection enables you to group together Endpoint Policy Manager Least Privilege Manager policies
so they can act together. For instance, you might create a collection for only East Sales Users and
another for West Sales Users. .

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/item_level_targeting_with.webp)

Below you can see two created collections that can hold other collections or policies.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/item_level_targeting_with_1.webp)

Right-click any Endpoint Policy Manager Least Privilege Manager Collection or Policy and select
**Change Item-Level Targeting**, to set filtering conditions on when the policy will apply.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/item_level_targeting_with_2.webp)

The **Change Item Level Targeting** menu item brings up the Targeting Editor.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/item_level_targeting_with_3.webp)

You can select any combination of characteristics you want to test for. Administrators familiar with
Group Policy Preferences’ Item-Level Targeting will be at home in this interface as it is
functionally equivalent.

You can apply one or more targeting items to a policy, which enables targeting items to be joined
logically. You can also add targeting collections, which group together targeting items in much the
same way parentheses are used in an equation. In this way, you can create a complex determination
about where a policy will be applied. Collections may be set to **And**, **Or**, **Is**, or **Is
Not**.

:::note
Additionally, Endpoint Policy Manager Least Privilege Manager allows you to target users
or user groups, even if the policy is on the computer side. See the
[Link to Computer, Filter by User](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/basicsandgettingstarted/userfilter.md) video for details on this
superpower.
:::


Below are some real-world examples of how you can use Item-Level Targeting.

- Software prerequisites. If you want to configure an application’s settings, first make sure the
  application is installed on the user’s computer before configuring it. You can use File Match or
  Registry Match targeting items (or both) to verify a specific version of a file, or a registry
  entry is present. For an example of this, look in the Uninstall registry key.
- Mobile computers. If you want to deploy settings exclusively for users on mobile PCs, filter the
  rule to apply only to mobile PCs by using the Portable Computer targeting item.
- Operating system version. You can specify different settings for applications based on the
  operating system version. To do this, create one rule for each operating system and then filter
  each rule using the Operating System targeting item.
- Group membership. You can link the Group Policy Object (GPO) to the whole domain or organizational
  unit (OU), but only members within a specific group will pick up and process the rule settings.
- IP range. You can specify different settings for various IP ranges, like different settings for
  the home office and each field office.

After editing is completed, close the editor. The policy's icon, or the collection’s icon, has now
changed to orange, which shows that it has Item-Level Targeting, as well as the Column labeled Item
Level Targeting, as seen below.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/item_level_targeting_with_4.webp)

When Item-Level Targeting is on, the policy won’t apply unless the conditions are true. If
Item-Level Targeting is applied to a collection, then none of the items in the collection will apply
unless the Item-Level Targeting on the collection evaluates to true.



