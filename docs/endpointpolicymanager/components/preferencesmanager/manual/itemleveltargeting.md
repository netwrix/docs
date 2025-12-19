---
title: "Item-Level Targeting"
description: "Item-Level Targeting"
sidebar_position: 30
---

# Item-Level Targeting

One of the best features of Microsoft Group Policy Preferences is its Item-Level Targeting. It
enables you to filter where a particular Group Policy Preference item will take effect.

:::note
See [Group Policy Preferences: Item Level Targeting](/docs/endpointpolicymanager/archive/itemleveltartgeting.md)
for a video of Group Policy Preferences and Item-Level targeting
:::


If you followed the Quickstart guide in the previous section, then you deployed a Group Policy
Preferences shortcut item to the desktop for every user. With Netwrix Endpoint Policy Manager
(formerly PolicyPak) Preferences Manager, there are two ways you can limit or target which users and
computers will receive Group Policy Preferences directives by doing the following:

- Use Endpoint Policy Manager Exporter and specify certain users and groups instead of computer/all
  users
- Modify Group Policy Preference items in such a way that they have Item-Level Targeting that
  describes the conditions under which they should apply

Additionally, you can choose to use both methods together if you prefer. For instance, you might:

- Use the Group Policy Preferences Editor and make a Group Policy Preferences Power Settings item to
  configure power settings
- Continue to use the Group Policy Preferences Editor Item-Level Targeting to specify that the item
  should only apply to Windows 10 laptops that are in a particular IP address range
  (192.168.2.0–192.168.3.0)
- Use Endpoint Policy Manager Exporter to specify that only the Sales group within Active Directory
  should process this policy

In this example, the net result of using these methods is that your Group Policy Preference item
will only apply to Windows 10 machines that are laptops and within a specific IP address range
(192.168.2.0–192.168.3.0), and when the user is a member of the Sales Active Directory group.

![group_policy_preferences_item](/images/endpointpolicymanager/preferences/group_policy_preferences_item.webp)

You can then choose which item you want to target:

![group_policy_preferences_item_1](/images/endpointpolicymanager/preferences/group_policy_preferences_item_1.webp)

You can apply one or more targeting items to a Microsoft Group Policy Preference item, which enables
targeting items to be joined logically. You can also add targeting collections, which group together
targeting items in much the same way parentheses are used in an equation. In this way, you can
create a complex determination about where a policy will be applied. Collections may be set to And,
Or, Is, or Is Not.

![group_policy_preferences_item_2](/images/endpointpolicymanager/preferences/group_policy_preferences_item_2.webp)

In the example above the Pak would only apply to (1) Windows 10 machines when (2) the machine is
portable and (3) the user is in the FABRIKAM\Traveling Sales Users group.

Here are some real-world examples of how you can use Item-Level Targeting with Group Policy
Preferences:

- Mobile computers — If you want to deploy settings for users on mobile PCs, filter the Group Policy
  Preference item to deploy to only mobile PCs by using the Portable Computer targeting item.
- Operating system version — You can specify different settings for applications based on the
  operating system version. To do this, create two Group Policy Preference items, one for each
  operating system. Then filter each AppSet using the Operating System targeting item.
- Group membership — You can specify a Group Policy Preference item that would normally apply to all
  users on the computer and, instead, filter by members within a specific group to pick up and
  process the Group Policy Preference item.
- IP range — You can specify different settings for various IP ranges, like different browser
  settings for the home office and each field office.

When Item-Level Targeting is used, it can be seen and verified in the XML view of the Group Policy
Preference item by choosing the Display Xml option. The Item-Level Targeting is highlighted in the
Filters section.

![group_policy_preferences_item_3](/images/endpointpolicymanager/preferences/group_policy_preferences_item_3.webp)

![group_policy_preferences_item_4](/images/endpointpolicymanager/preferences/group_policy_preferences_item_4.webp)

The XML of the Group Policy Preference item verifies that Item-Level Targeting is being used.


