---
title: "Group Management Concepts"
description: "Group Management Concepts"
sidebar_position: 10
---

# Group Management Concepts

To make the best of GroupID, you must be familiar with the following group management concepts:

- [Group Classification](#group-classification)
- [Group Types](#group-types)
- [Group Scope](#group-scope)
- [Group Security Types](#group-security-types)

## Group Classification

Using GroupID, you can manage the following three kinds of groups:

- [Unmanaged Groups](#unmanaged-groups)
- [Smart Groups](#smart-groups)
- [Dynasties](#dynasties)

### Unmanaged Groups

An unmanaged group, also called a static group, is a group you normally create in a directory, for
example, by using the Active Directory Users and Computers console. Though such groups can be
created using the GroupID portal and Management Shell, GroupID does not support dynamic updates to
them. Any changes to the membership have to be updated manually.

### Smart Groups

A Smart Group is one that dynamically maintains its membership based on rules. These rules are
applied in the form of a user-defined query, such as an LDAP query. This query is defined once and
scheduled for membership update using a Smart Group Update schedule. When the schedule runs, it
applies the defined rules to the directory and fetches matching records to update the group's
memberships.

In this way, Smart Groups are automatically updated whenever the user information changes in the
directory. This automated group management allows administrators to easily maintain large
distribution lists and security groups without having to manually add or remove members.

### Dynasties

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the
directory. Dynasties help you manage large distribution lists by creating hierarchical group
structures that represent your organization. The Smart Groups that the Dynasty creates are called
child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has
its own mechanism of dividing the query results into child groups.

#### The Group-by Field Determines Child Groups

When you create a Dynasty, you specify a query and a field, referred to as the group-by field. The
group-by field is used to divide the query results into groups.

For example, if you set ‘department’ as the group-by field, then each distinct value for the
‘department’ field is returned, for instance, Sales, Marketing, and Human Resources. Thus, a Dynasty
with the group-by field set to ‘department’ creates child groups for each distinct value: Sales,
Marketing, and Human Resources.

#### Built-in Updates

GroupID keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the
  directory.

Thus, as new values of the ‘department’ field appear, new groups are created, and as old values
disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user’s department changes
from Sales to Marketing, for example, the user is removed from the Sales child group and added to
the Marketing child group.

#### The Parent-child Relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group
security, expiry policy, owner, delivery restrictions, message size restrictions and more.
Inheritance saves administrators incalculable time through the systematic application of predefined
properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child
Dynasties always inherit the expiry policy from the parent Dynasty and it can only be modified at
the parent level.

#### Dynasty Types

GroupID provides the following templates for creating Dynasties:

- **Organizational** - to create a Smart Group for every distinct company, then for each department
  within a company, and finally for each title in a department.
- **Geographical** - to create a Smart Group for every distinct country, then for each state within
  a country, and finally for each city within a state.
- **Managerial** - to either create separate Smart Groups for the direct reports of each manager or
  add all direct reports of the top manager and sub-level managers to a single group.
- **Custom** - to begin with a blank Dynasty and select your own group-by attributes.

These templates provide predefined group-by attributes for creating Dynasty levels. You can also
define custom group-by attributes to expand the Dynasty levels to suit your organizational model.
You can also combine an external data source with the templates to provide extended criteria for
determining group membership.

## Group Types

Groups fall into two functional categories: distribution groups and security groups.

### Distribution Groups

Distribution groups, also called distribution lists, are designed to combine users together so that
you can send emails (via a mail server) to a group rather than individually to each user in the
group.

Distribution groups can be used only with email applications, such as Microsoft Exchange. These
groups are not security-enabled, which means that they cannot be listed in discretionary access
control lists (DACLs). If you need a group for controlling access to shared resources, create a
security group.

### Security Groups

Security groups provide an efficient way to assign access to resources on your network. Using
security groups, you can:

- **Assign user rights** - User rights are assigned to security groups to determine what members of
  that group can do within the scope of a domain (or forest). For example, a user who is added to
  the Backup Operators group can back-up and restore files and directories located on each domain
  controller in the domain. By being a member of this group, you inherit the user rights assigned to
  the group.
- **Assign permissions to resources**- This is different from user rights because user rights apply
  across an entire domain versus permissions that are directed to a specific entity. Permissions
  determine who can access the resource and the level of access, such as Full Control or Read-only.

Security groups can also be used as a distribution group in Exchange. These are known as
security-enabled distribution groups.

## Group Scope

Groups are characterized by a scope that identifies the extent to which the group is applied in a
domain or forest. The boundary, or reach, of a group scope is also determined by the domain
functional level of the domain in which it resides.

A group’s scope determines:

- the domains from where members can be added to the group
- the domains where the group can be used to grant permissions
- the domains where the group can be nested in other groups

A group can be of universal, global, or domain local scope.

### Universal

Use groups with universal scope to consolidate groups that span domains. To do this, add the
accounts to groups with global scope, and then nest these groups within groups that have universal
scope. When you use this strategy, any membership changes in the groups that have global scope do
not affect the groups with universal scope.

Do not change the membership of a group with universal scope frequently, because membership changes
cause the entire membership of the group to be replicated to every global catalog in the forest.

### Global

Use groups with global scope to manage directory objects that require daily maintenance, such as
user and computer accounts. Because groups with global scope are not replicated outside their own
domain, you can change accounts in a group having global scope frequently without generating
replication traffic to the global catalog.

As a best practice, you should use global groups or universal groups rather than domain local groups
when you specify permissions on domain directory objects that are replicated to the global catalog.

A global group can contain users, computers, and groups from the same domain but not universal
groups.

### Domain Local

Groups with domain local scope help you define and manage access to resources within a single
domain. For example, to give five users access to a printer, you can add all five user accounts in
the printer permissions list.

A domain local group can contain users, computers, global groups, and universal groups from any
domain in the forest and any trusted domain, as well as domain local groups from the same domain.
Such a group can be a member of any domain local group in the same domain.

## Group Security Types

A group’s security type determines how non-members can access the group and become its members.
GroupID provides three security types:

- **Private** - to restrict access to the group to members selected by the group owner. Only the
  owner can add or remove members from the group. Requests to join or leave the group cannot be
  submitted.
- **Semi-Private** - to restrict access to the group to members selected by the group owner.
  However, requests to join or leave the group can be sent to the owner.
- **Public** - to allow all users to access the group. Users can join or leave the group at will and
  do not require any permissions to do so. The administrator can configure email notifications to be
  sent to the group owner when a user joins or leaves the group.

**See Also**

- [Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
