---
title: "Dynasty"
description: "Dynasty"
sidebar_position: 20
---

# Dynasty

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. Dynasties help you manage large distribution lists by creating hierarchical group
structures that represent your organization. The Smart Groups that the Dynasty creates are called
child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups.

## The group-by field determines child groups

When you create a Dynasty, you specify a query and a field, referred to as the _group-by_ field. The
group-by field is used to divide the query results into groups.

For example, if you set ‘department’ as the group-by field, then each distinct value for the
‘department’ field is returned, for instance, Sales, Marketing, and Human Resources. Thus, a Dynasty
with the group-by field set to ‘department’ creates child groups for each distinct value: Sales,
Marketing, and Human Resources.

## Built-in updates

GroupID keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the
  directory.

Thus, as new values of the ‘department’ field appear, new groups are created, and as old values
disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user’s department changes
from Sales to Marketing, for example, the user is removed from the Sales child group and added to
the Marketing child group.

## The child-parent relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group
security, expiry policy, owner, delivery restrictions, message size restrictions and more.
Inheritance saves administrators incalculable time through the systematic application of pre-defined
properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child
Dynasties always inherit the expiry policy from the parent Dynasty and it can only be modified at
the parent level.

Depending on the inheritance option selected for the parent Dynasty on the
[Group properties - Dynasty Options tab](/docs/directorymanager/11.0/welcome/group/properties/dynastyoptions.md)
in group properties, the modified values of inherited attributes may or may not persist.

## Multi-level Structure

Dynasties have a multi-level structure. For example, you can create a Dynasty that groups first by
country, then state, and then city. When updated, the Dynasty creates a group for every country,
then it creates a group for every state in a country, and finally it creates a group for each city
within each state. Thus, each user in the organization belongs to a country group, a state group,
and a city group, and as the groups are updated through their multi-level structure, you do not need
to worry that they will go out-of-date.

Dynasties come in handy for creating and maintaining large dynamic distribution lists in your
organization.

**See Also**

- [Group Management](/docs/directorymanager/11.0/welcome/group/overview.md)
- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty.md)
- [Create a Microsoft Entra ID Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty_1.md)
- [Groups](/docs/directorymanager/11.0/welcome/group/create/overview.md)
