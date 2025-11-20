---
title: "How can use Item Level Targeting to apply a Group Policy Preferences or Endpoint Policy Manager item when the user is not a member of Domain Admins and also is not a member of the local Admin group?"
description: "How can use Item Level Targeting to apply a Group Policy Preferences or Endpoint Policy Manager item when the user is not a member of Domain Admins and also is not a member of the local Admin group?"
sidebar_position: 10
---

# How can use Item Level Targeting to apply a Group Policy Preferences or Endpoint Policy Manager item when the user is not a member of Domain Admins and also is not a member of the local Admin group?

You can set up a configuration item so that only regular users (but no admins) are affected by a
Group Policy Preferences or Netwrix Endpoint Policy Manager (formerly PolicyPak) setting

For example, you may wish to **Prevent access to the command prompt** for all standard users, as in
the example below, and you want to use Item Level Targeting (ITM) to do it.

![139_1_overall-faq-01-img-01](/images/endpointpolicymanager/itemleveltargeting/139_1_overall-faq-01-img-01.webp)

:::note
Item Level Targeting is a Microsoft technology provided as part of the their Group Policy
Preferences CSE for Group Policy.See
[Apply Item-Level Targeting Outside Domains & GP Preferences](https://www.policypak.com/resources/pp-blog/item-level-targeting/)
for additional information. Endpoint Policy Manager utilizes this ability to filter based on
criteria, but the underlying engine is developed by Microsoft. Because this is not our code, What
that means is that its not our code and so sometimes there are behaviors related to ILT that we
either are not aware of or have not yet tested.
:::


Here are some facts to help you understand the challenges:

- All AD security groups and local groups outside of the Built-in domain groups have a unique SID
  that is unique to the AD domain for Domain based groups ,or the individual computer for local
  groups.
- However, the Built-in Administrators group always has the same SID.
- Best practice when using a Security Group with ILT is to use the 3 dots and select the group
  itself, though this really only works for Domain based groups.
- You can just type in the name of the group, as we have discussed before, but this really only
  works for Domain based groups, and it does not appear to work for local groups.
- Therefore using the 3 dots on a machine and selecting a non-Built-in local group would really only
  work for that one machine and no otthers.
- However, since the local Administrators group has the same SID on every computer, you canuse this
  group, but not by just typing it in, you have to use the 3 dots to get its SID.

This is the combination that appears to work:

![139_2_overall-faq-01-img-03](/images/endpointpolicymanager/itemleveltargeting/139_2_overall-faq-01-img-03.webp)

![139_3_overall-faq-01-img-03](/images/endpointpolicymanager/itemleveltargeting/139_2_overall-faq-01-img-03.webp)

There are three important things to note from the examples above.

- We are using an AND instead of OR
- The Domain Admins group has been manually entered
- The Administrators local group, on the other hand, was obtained by clicking the 3 dots to select
  it and get its SID

The catch with the last item is that since there is no local Administrators group on a DC, a DC
cannot see that group to add it. Instead, you must install the GPMC and the PP Admin Console on a
regular machine (that is a member of the domain, like a test W10 VM for example), edit the GPO,
click the 3 dots, and then select the Computer name as the source, to capture the Administrators
group that way.You only have to do this once to get the group and its SID, but it can't be done on a
DC.

This is the sequence after clicking the three dots:

![139_4_overall-faq-01-img-04](/images/endpointpolicymanager/itemleveltargeting/139_4_overall-faq-01-img-04.webp)

![139_5_overall-faq-01-img-05](/images/endpointpolicymanager/itemleveltargeting/139_5_overall-faq-01-img-05.webp)

![139_6_overall-faq-01-img-06](/images/endpointpolicymanager/itemleveltargeting/139_6_overall-faq-01-img-06.webp)

