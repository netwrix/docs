---
title: "Using Item-Level Targeting with Collections and Policies"
description: "Using Item-Level Targeting with Collections and Policies"
sidebar_position: 40
---

# Using Item-Level Targeting with Collections and Policies

Item-Level Targeting is used in Microsoft Group Policy Preferences and other areas of Netwrix
Endpoint Policy Manager (formerly PolicyPak) to target or filter where specific items will apply.
With Endpoint Policy Manager Remote Work Delivery Manager, Item-Level Targeting can be used with
collections as well as Endpoint Policy Manager Remote Work Delivery Manager policies within
collections. A collection enables you to group together Endpoint Policy Manager Remote Work Delivery
Manager policies so they can act together. For instance, you might create a collection for only East
Sales computers and another for West Sales computers.

![using_item_level_targeting](/images/endpointpolicymanager/remoteworkdelivery/using_item_level_targeting.webp)

You can also right-click any Endpoint Policy Manager Remote Work Delivery Manager policy, and select
**Edit Item Level Targeting**.

![using_item_level_targeting_1](/images/endpointpolicymanager/remoteworkdelivery/using_item_level_targeting_1.webp)

You can also select Item-Level Targeting when a policy is created using the wizard.

The Edit Item Level Targeting function brings up the Targeting Editor. In the Targeting Editor,
select any combination of characteristics to test for. Administrators familiar with Group Policy
Preferences' Item-Level Targeting will be at home in this interface, since it is functionally
equivalent.

Apply one or more targeting items to a policy. This enables a logical joining together of targeting
items. Adding targeting collections equates to enclosing equations in parentheses. In other words,
it allows you to group together targeting items. In this way, a fairly complex determination can be
created for the computers the policy applies to. Collections may be set to And or Or, as well as Is
or Is Not.

![using_item_level_targeting_2](/images/endpointpolicymanager/remoteworkdelivery/using_item_level_targeting_2.webp)

Here are some real-world examples of Item-Level Targeting used with Endpoint Policy Manager Remote
Work Delivery Manager:

- Software prerequisites — To configure an application's settings, make sure the application is
  first installed on the user's computer before configuring it. Use either File Match, MSI Match, or
  Registry Match targeting items to verify if a specific version of a file or a Registry entry is
  present. For instance, you can look in the Uninstall Registry key.
- Mobile computers — To deploy settings exclusively for users on mobile PCs, filter the rule by
  using the Portable Computer targeting item.
- Operating system version — You might want to specify different settings for applications based on
  the operating system. for example, you might want different settings for those running Windows 10.
  In this case, simply create one rule for each operating system. Then, filter each rule using the
  Operating System targeting item.
- Group membership — Group membership can be used to link the GPO to the whole domain or
  organizational unit (OU), but only specific computer members within a certain group will pick up
  and process the rule settings.
- IP range — IP range can be used to specify different settings for various IP ranges, like, for
  example, different browser settings for the home office and field office.

After editing is completed, close the editor. Note that the policy or collection's icon has changed
to orange, which shows that it now has Item-Level Targeting.

![using_item_level_targeting_3](/images/endpointpolicymanager/remoteworkdelivery/using_item_level_targeting_3.webp)

:::note
When Item-Level Targeting is on, the policy won't apply unless the conditions are True. If
Item-Level Targeting is applied to a collection, then none of the items in the collection will apply
unless the Item-Level Targeting on the collection evaluates to True.

:::


