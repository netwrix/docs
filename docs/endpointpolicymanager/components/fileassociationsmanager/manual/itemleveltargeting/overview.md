---
title: "Using Item-Level Targeting with Collections and Policies"
description: "Using Item-Level Targeting with Collections and Policies"
sidebar_position: 70
---

# Using Item-Level Targeting with Collections and Policies

Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Netwrix
Endpoint Policy Manager (formerly PolicyPak) to target or filter where specific items will apply.
With Endpoint Policy Manager File Associations Manager, Item-Level Targeting can be used on
collections, as well as Endpoint Policy Manager File Associations Manager policies within
collections.

A collection enables you to group together Endpoint Policy Manager File Associations Manager
policies so they can act together. For instance, you might want to create one collection that
targets only your East Sales computers, and another collection that targets your West Sales
computers. Or you might want to create a collection for Windows 10 machines and one for Windows
Server 2016 RDS.

![using_item_level_targeting](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting.webp)

![using_item_level_targeting_1](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting_1.webp)

Below you can see the two collections that we have created that can hold other collections or
policies. It also shows how you can apply Item-Level Targeting for a collection.

![using_item_level_targeting_2](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting_2.webp)

To change the Item-Level Targeting, right-click any Endpoint Policy Manager File Associations
Manager policy, and select **Edit Item Level Targeting**.

![using_item_level_targeting_3](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting_3.webp)

The Edit Item Level Targeting menu item brings up the Targeting Editor. You can select any
combination of characteristics you want to test for. Administrators familiar with Group Policy
Preferences' Item-Level Targeting will be at home in this interface as it is functionally
equivalent.

You can apply one or more targeting items to a policy, which enables targeting items to be joined
logically. You can also add targeting collections, which group together targeting items in much the
same way parentheses are used in an equation. In this way, you can create a complex determination
about where a policy will be applied. Collections may be set to **And**, **Or**, **Is**, or **Is
Not**.

The screenshot below demonstrates the basic capabilities of the Targeting Editor. Also, note that
Endpoint Policy Manager File Associations Manager cannot filter by user group since the node is only
available on the Computer side, and Endpoint Policy Manager File Associations Manager is only valid
for Windows 8.1 and later.

![using_item_level_targeting_4](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting_4.webp)

In this example, the Pak would only apply to Windows 10 machines when the machine is portable, and
the user is in the FABRIKAM\Traveling Sales Users group.

Below are some real-world examples of how you can use Item-Level Targeting.

- Software prerequisites — If you want to configure an application's settings, first make sure the
  application is installed on the user's computer before configuring it. You can use File Match or
  Registry Match targeting items (or both) to verify a specific version of a file or a registry
  entry is present. (For an example of this, look in the Uninstall registry key.)
- Mobile computers — If you want to deploy settings exclusively for users on mobile PCs, then filter
  the rule to apply only to mobile PCs by using the **Portable Computer** targeting item.
- Operating system version — You can specify different settings for applications based on the
  operating system version. To do this, create one rule for each operating system. Then filter each
  rule using the **Operating System** targeting item.
- Group membership — You can link the Group Policy Object (GPO) to the whole domain or
  organizational unit (OU), but only members within a specific group will pick up and process the
  rule settings.
- IP range — You can specify different settings for various IP ranges, like different settings for
  the home office and each field office.

Close the editor when you are done. Note that the icon for the policy or collection has changed to
orange, which shows that it now has Item-Level Targeting.

![using_item_level_targeting_5](/images/endpointpolicymanager/fileassociations/itemleveltargeting/using_item_level_targeting_5.webp)

When Item-Level Targeting is on, the policy won't apply unless the conditions evaluate to True, and
if Item-Level Targeting is on for a collection, then none of the items in the collection will apply
unless the Item-Level Targeting on the collection evaluates to True.


