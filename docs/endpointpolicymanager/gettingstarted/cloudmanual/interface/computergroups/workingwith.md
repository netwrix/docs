---
title: "Working with Groups"
description: "Working with Groups"
sidebar_position: 10
---

# Working with Groups

Your experience with the Computer Groups tab will be similar to the experience with Microsoft's
GPMC. Endpoint Policy Manager Cloud has similar concepts to Group Policy and the GPMC. Almost all
principles in the GPMC transfer here as well. The table below describes the subtle differences
between Group Policy and Endpoint Policy Manager Cloud.

| Group Policy                                                           | Endpoint Policy Manager Cloud                                                                                                                                                                                                    |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GPOs can contain Microsoft or Endpoint Policy Manager data.            | XML data files (policies) contain Microsoft or Endpoint Policy Manager data created from real GPOs. You can also use in-cloud editors to create XML data files (policies) or import a GPO backup file and create XML data files. |
| Uses concept of operational units (OUs)                                | Uses concept of groups                                                                                                                                                                                                           |
| OUs can contain users or computers                                     | Groups can only contain computers                                                                                                                                                                                                |
| Computers can only be in one OU                                        | Computers may reside in multiple groups                                                                                                                                                                                          |
| GPOs are linked to OUs                                                 | XML policies are linked to groups                                                                                                                                                                                                |
| OUs can be nested                                                      | Groups can be nested                                                                                                                                                                                                             |
| Multiple GPOs can be linked and ordered within an OU                   | Multiple XML policies can be linked and ordered within a group                                                                                                                                                                   |
| OUs can block inheritance, thus preventing parental GPOs from applying | Sub-groups can block inheritance, thus preventing parental XML policies from applying                                                                                                                                            |
| GPOs can be enforced, thus ensuring they are always embraced           | XML policies can be enforced, thus ensuring they are always embraced                                                                                                                                                             |
| GPOs linked to the domain are usually embraced by everyone             | XML policies linked to the "All" group are always embraced by all computers and by everyone                                                                                                                                      |
| GPMC has group policy modeling to predict which GPOs will apply        | Endpoint Policy Manager Cloud has a policy forecast/modeling report that can predict which XML policies will apply to a computer                                                                                                 |

Company groups are groups you define for your needs. You can click **Add company group** in the
action pane at any time. You can add company groups by clicking on the **Company Groups** node, or
by clicking on any existing company group and making a sub-group, as shown below where multiple
company groups and sub-company groups have been created as examples.

![web_interface_and_controls_54_624x228](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_54_624x228.webp)

Unlike Microsoft Group Policy, a computer may be a member of multiple groups in Endpoint Policy
Manager Cloud. Click on the company group, then select **Add/Remove Computers from Group** and click
**Add**. Then you can select either **Computers in Group** (meaning the computers already within
this group) or **Available Computers** (meaning computers not yet in this group). You can select or
un-select computers as needed.

![web_interface_and_controls_55_624x229](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_55_624x229.webp)

You can also perform other context-sensitive actions after you click on a company group.

![web_interface_and_controls_56_624x214](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_56_624x214.webp)

The context-sensitive actions are described below:

- Link XML here - This lets you select an XML file that has been previously uploaded and link it to
  the currently selected group.
- Upload and link a new XML here - Using this function, you don't necessarily need to upload the XML
  data file using the XML Data Files tab. You can upload and link in one step.
- Create and link a new policy -: Enables you to use the in-cloud editors to craft a new XML
  directive and link it to the group you are currently focused on.
- Policy Forecast / Modeling Report -(see separate section below)
- Change Policy Link Order -(see separate section below)
- Expand all subgroups and Collapse all subgroups: When a group is selected, it will expand or
  collapse all subgroups which might make it easier to see other items.
- Edit Group: Enables you to move a group, all computers, and all linked policies to another
  location (or parent group). You can move a group to any other company group, or out of all other
  company groups (thus making it a top-level node) if desired. You can also specify the client-side
  extension (CSE) version and also the Endpoint Policy Manager Cloud client version for this group
  as well as the refresh interval for the computers. (more information in "Company Groups" later in
  this document.)
- Delete group: Deletes a group. If a computer is a member of any other group, the computer stays in
  those other groups. If a computer is no longer a member of any other group, it automatically gets
  placed in the built-in group named "Unassigned."
- Add/Remove Computers from Group: Enables you to add or remove computers to a company group. Note
  that computers may be in multiple company groups.

## Built-In Groups

Built-in groups enable you to perform actions on computers that meet certain criteria. .

| Built-In Group Name | Ability to Link with XML Data Files | Notes                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| All                 | Yes                                 | All computers are members of the **All**group. You might want to use the **All** group if you want to guarantee every computer that joins Endpoint Policy Manager Cloud embraces some specific XML data files. All XML policies which are linked to the **All** group are always enforced. (This is explained a little later.) |
| Unassigned          | Yes                                 | Computers appear here only when they are not assigned to a company group.                                                                                                                                                                                                                                                      |
| Deleted             | No                                  | Deleted computers appear in this group. They can be un-deleted, which moves them to **Unassigned**. You can also permanently delete computers from the Deleted group. When you do, a license is reclaimed.                                                                                                                     |

Here you can see XML data files linked to the **All** group. Note that anytime policies are linked
to the **All** group, they are always enforced.

![web_interface_and_controls_57_500x169](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_57_500x169.webp)

## Company Groups

Video: For an overview of this section, watch
[Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/groups.md).

The Endpoint Policy Manager CSE and the Endpoint Policy Manager Cloud client get updated from time
to time for bug fixes as well as for features. For instance, whenever a new component is released, a
new CSE is always required because an old CSE won't have the code to perform the work of the new
CSE. This means that while Endpoint Policy Manager Cloud may get new in-cloud editors or accept
policies for new components as XML data files, your endpoints won't know what to do with these
directives until their CSE is updated. Moreover, if there is a bug fix, an enhancement to Endpoint
Policy Manager Cloud licensing, or some special Endpoint Policy Manager Cloud feature, those changes
would only make their way into the latest Endpoint Policy Manager Cloud client with an update.

Endpoints only use the Endpoint Policy Manager Cloud client or CSE that they started with, or that
you tell them to upgrade to. As such, you need to keep your computers up to date so they can get the
latest policies and directives. However, mass updating 100% of your endpoints at the same time is
ill-advised for the same reasons you wouldn't want to roll out new system-level software to 100% of
your machines at once. As such, we encourage you to review Microsoft's recommendation for a ring
model when it comes to rollouts. We have documented this in great detail here:
[https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/](https://www.policypak.com/resources/pp-blog/using-rings-to-test-and-update-the-policypak-client-side-extension-and-how-to-stay-supported/).

In Endpoint Policy Manager Cloud, because the concept of groups is already established, you can use
a Endpoint Policy Manager Cloud group like a ring. To do this, choose a group and manually specify
to use a particular version of the CSE on that group. You can also specify to use a particular
version of the CSE everywhere (using the special **All** group).

Considering this, our advice is to do the following:

- Set up a group of 2–5% of your computers. When a new CSE is released, you should opt in and use
  this group to start testing and verify success. If there's a problem you can raise it to the
  Endpoint Policy Manager support team and we'll work with you.
- If all goes well, you can roll out the latest CSE to more Endpoint Policy Manager Cloud groups. It
  only takes one click within the group to select the CSE. Your target rollout for the new CSE
  should be around 30–50% of your Windows 10 machines. At this point if there's a problem, you can
  raise it to our support team and we'll work with you.
- Then, after you've rolled out to 50% of your machines, you should be confident enough to roll it
  out to all machines.
- At this point, pick the remaining Endpoint Policy Manager Cloud groups and select the latest CSE
  to opt-in more groups.
- Alternatively, use the special **All** group to finish by mass upgrading the remaining PCs all at
  once (only do this after you've done some testing).

In the example below, we are creating a sub-group of the **Work From Home** group called **Friendly
Testers**. Then we are configuring it to use the latest CSE and the latest Endpoint Policy Manager
Cloud client version. In addition, if you want to change how often these computers check-in for new
policies, you may also do that here.

![web_interface_and_controls_58_623x226](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_58_623x226.webp)

Now the sub-group appears. The computers in Friendly Testers would now get the latest CSE and
Endpoint Policy Manager Cloud client version.

![web_interface_and_controls_59_624x236](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_59_624x236.webp)

After you are satisfied that everything is working as expected, you can apply this to more and more
groups. When you are satisfied that you have good results, you can use the **All** group to force
the latest version everywhere. When you do this, no groups can deliver a CSE or Endpoint Policy
Manager Cloud client version that is lower than what is set in the **All** group.

![web_interface_and_controls_60_624x215](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_60_624x215.webp)

## Policy Forecast/Modeling Report

Once you've linked multiple policy XML files to various groups you might want to know what you can
expect on an endpoint. Policies are cumulative in the following manner:

- Policies from the built-in **All** group are always applied and cannot be avoided.
- Policies from all nested company groups are applied from lowest to highest policy link order.
- Policies where the computer ultimately resides are applied lowest to highest.

The Policy Forecast/Modeling Report is a way to determine which policies to expect on the endpoint.

![web_interface_and_controls_61_623x288](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_61_623x288.webp)

Below you can see there are eight policies applied. Three are from the built-in **All** group, which
cannot be avoided, and the rest are inherited (directly) from the group itself. If you click on a
sub-group that has its own policies and then look at the **Policy Forecast/Modeling Report**, you
see its policies also appear in the report.

:::note
The report shows precedence order, meaning the lowest number will win in a conflict.
:::


![web_interface_and_controls_62_623x298](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_62_623x298.webp)

A warning about the Policy Forecast/Modeling Report: if a computer is in two or more groups, the
Policy Forecast/Modeling Report will not show the expected result. It can only model one group at a
time and cannot account for a computer being in multiple groups at the same time.

## Policy Link Order

Policy XML files linked at any level are displayed in two ways. In the left pane, they are displayed
alphabetically. In the middle pane, the XML files are displayed by link order.

![web_interface_and_controls_63_624x225](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_63_624x225.webp)

Link order is a way to order and prioritize policies. The lowest link order number gets the highest
overall precedence. In this way, within a particular level, if you had conflicts you needed to
resolve, you could click on the items and the order as needed.

In most cases, you won't need to do this, but you might if you have multiple policies with
conflicting settings. In other words, all policies are additive, unless there's a conflict. If there
are policies which do conflict, then the highest priority, which has the lowest link order number in
the display list, wins.

To see this, first select a group, then select **Change Policy Link Order** in the action pane to
get the **Order linked XML data files** window.

![web_interface_and_controls_64_624x228](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_64_624x228.webp)

## Block Inheritance and Enforcement

Like Group Policy, Endpoint Policy Manager Cloud has the same concepts of block inheritance and
enforce. Block inheritance will stop upper-level policies from affecting machines in sub-groups. It
is only available for sub-groups and not for top-level parent groups.

![web_interface_and_controls_65_624x238](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_65_624x238.webp)

When block inheritance on a child group is enabled, a blue exclamation mark signifies it is on. It
can be removed by selecting the group and selecting **Unblock Inheritance**.

![web_interface_and_controls_66_625x232](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_66_625x232.webp)

The net result of block inheritance is that XML policies from above will not flow down. Below, you
can see the policies when there is no block inheritance.

![web_interface_and_controls_67_623x288](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_67_623x288.webp)

Policies are not applied from up above when block inheritance is active.

![web_interface_and_controls_68_625x286](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_68_625x286.webp)

When a policy is selected it may be chosen for enforcement. Enforcement means that the policy will
break through a block inheritance if that policy is higher in the hierarchy.

## Search Box

It is easy to use the search box to look for policies and groups that match a word. below, you can
see we are searching for the word "fire" and finding policies and groups with that word in them very
quickly.

![web_interface_and_controls_69_312x320](/images/endpointpolicymanager/cloud/interface/computergroups/web_interface_and_controls_69_312x320.webp)


