---
title: "Directory Manager Group Management Concepts"
description: "Learn how Directory Manager classifies groups as unmanaged, Smart Groups, or Dynasties, and how group type, scope, and security type work."
keywords:
  - Smart Groups
  - Dynasties
  - group classification
  - group scope
  - group security types
sidebar_position: 10
---

# Directory Manager Group Management Concepts

To get the most from Directory Manager, you must be familiar with these group management concepts:

- Group classification
- Group types
- Group scope
- Group security types

## Group classification

Directory Manager manages three kinds of groups:

- Unmanaged groups
- Smart Groups
- Dynasties

### Unmanaged groups

An unmanaged group, also called a static group, is a group you normally create in a directory, for example, with the Active Directory Users and Computers console. You can also create such groups in the Directory Manager portal and Management Shell. Directory Manager doesn't support dynamic updates to them, so you must update any changes to the membership manually.

### Smart Groups

A Smart Group dynamically maintains its membership based on rules. The rules take the form of a user-defined query, such as an LDAP query. You define the query once and schedule membership updates with a Smart Group Update schedule. When the schedule runs, it applies the rules to the directory and fetches matching records to update the group's memberships.

Smart Groups update automatically whenever user information changes in the directory. This lets administrators maintain large distribution lists and security groups without adding or removing members manually.

### Dynasties

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the directory. Dynasties help you manage large distribution lists by creating hierarchical group structures that represent your organization. The Smart Groups that the Dynasty creates are called child groups and become members of their parent Dynasty.

A Dynasty retrieves data from the directory the same way a Smart Group does, but it has its own mechanism for dividing the query results into child groups.

#### The group-by field determines child groups

When you create a Dynasty, you specify a query and a field, called the group-by field. Directory Manager uses the group-by field to divide the query results into groups.

For example, suppose you set "department" as the group-by field. Directory Manager returns each distinct value of the "department" field, for instance, Sales, Marketing, and Human Resources. The Dynasty then creates a child group for each distinct value: Sales, Marketing, and Human Resources.

#### Built-in updates

Directory Manager keeps the Dynasty active in two ways:

- It adds new child groups as new values appear for the group-by field.
- It removes existing child groups when their values no longer exist in the directory.

In the example, Directory Manager creates new groups as new values of the "department" field appear and deletes the corresponding child groups as old values disappear.

The same process applies to the membership of each child group. When a user's department changes from Sales to Marketing, for example, Directory Manager removes the user from the Sales child group and adds the user to the Marketing child group.

#### The parent-child relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group security, expiry policy, owner, delivery restrictions, message size restrictions, and more. Inheritance saves administrators incalculable time through the systematic application of predefined properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child Dynasties always inherit the expiry policy from the parent Dynasty, and you can modify it only at the parent level.

#### Dynasty types

Directory Manager provides these templates for creating Dynasties:

- Organizational - To create a Smart Group for every distinct company, then for each department within a company, and finally for each title in a department.
- Geographical - To create a Smart Group for every distinct country, then for each state within a country, and finally for each city within a state.
- Managerial - To either create separate Smart Groups for the direct reports of each manager or add all direct reports of the top manager and sub-level managers to a single group.
- Custom - To begin with a blank Dynasty and select your own group-by attributes.

These templates provide predefined group-by attributes for creating Dynasty levels. You can also define custom group-by attributes to expand the Dynasty levels to suit your organizational model. You can also combine an external data source with the templates to provide extended criteria for determining group membership.

## Group types

Groups fall into two functional categories: distribution groups and security groups.

### Distribution groups

Distribution groups, also called distribution lists, combine users so that you can send emails (through a mail server) to a group rather than individually to each user in the group.

You can use distribution groups only with email applications, such as Microsoft Exchange. These groups aren't security-enabled, which means that they can't be listed in discretionary access control lists (DACLs). If you need a group for controlling access to shared resources, create a security group.

### Security groups

Security groups provide an efficient way to assign access to resources on your network. With security groups, you can:

- Assign user rights - User rights are assigned to security groups to determine what members of that group can do within the scope of a domain (or forest). For example, a user who is added to the Backup Operators group can back up and restore files and directories located on each domain controller in the domain. By being a member of this group, you inherit the user rights assigned to the group.
- Assign permissions to resources - This is different from user rights because user rights apply across an entire domain, while permissions are directed to a specific entity. Permissions determine who can access the resource and the level of access, such as Full Control or Read-only.

Security groups can also be used as a distribution group in Exchange. These are known as security-enabled distribution groups. You can also use security groups as a distribution group in Exchange.

## Group scope

A group has a scope that identifies the extent to which the group is applied in a domain or forest. The domain functional level of the domain in which the group resides also determines the boundary, or reach, of a group scope.

A group's scope determines:

- The domains from which you can add members to the group
- The domains in which you can grant permissions using the group
- The domains where you can nest the group in other groups

A group can have universal, global, or domain local scope.

### Universal

Use groups with universal scope to consolidate groups that span domains. To do this, add the accounts to groups with global scope, and then nest these groups within groups that have universal scope. When you use this strategy, membership changes in the groups that have global scope don't affect the groups with universal scope.

Don't change the membership of a group with universal scope frequently, because membership changes cause the entire membership of the group to be replicated to every global catalog in the forest.

### Global

Use groups with global scope to manage directory objects that require daily maintenance, such as user and computer accounts. Groups with global scope aren't replicated outside their own domain, so you can change accounts in a group with global scope frequently without generating replication traffic to the global catalog.

As a best practice, use global groups or universal groups rather than domain local groups when you specify permissions on domain directory objects that are replicated to the global catalog.

A global group can contain users, computers, and groups from the same domain but can't include universal groups.

### Domain local

Groups with domain local scope help you define and manage access to resources within a single domain. For example, to give five users access to a printer, you can add all five user accounts in the printer permissions list.

A domain local group can contain users, computers, global groups, and universal groups from any domain in the forest and any trusted domain, as well as domain local groups from the same domain. Such a group can be a member of any domain local group in the same domain.

## Group security types

A group's security type determines how non-members can access the group and become its members. Directory Manager provides three security types:

- Private - To restrict access to the group to members selected by the group owner. Only the owner can add or remove members from the group. Requests to join or leave the group can't be submitted.
- Semi-Private - To restrict access to the group to members selected by the group owner. However, requests to join or leave the group can be sent to the owner.
- Public - To allow all users to access the group. Users can join or leave the group at any time and don't require any permissions to do so. The administrator can configure email notifications to be sent to the group owner when a user joins or leaves the group.
