---
title: "Dynasties in Directory Manager"
description: "Learn how a Dynasty creates and maintains child Smart Groups from a directory query and a group-by field, and how child groups inherit properties."
keywords:
  - Dynasty
  - Smart Group
  - group-by field
  - child groups
  - dynamic distribution lists
sidebar_position: 20
---

# Dynasties in Directory Manager

A Dynasty is a Smart Group that creates and manages other Smart Groups using information in the directory. Dynasties help you manage large distribution lists by creating hierarchical group structures that represent your organization. The Smart Groups that the Dynasty creates are called child groups and become members of their respective parent Dynasty.

A Dynasty retrieves data from the directory on the same pattern as a Smart Group does, but it has its own mechanism of dividing the query results into child groups.

## The group-by field determines child groups

When you create a Dynasty, you specify a query and a field, referred to as the group-by field. The group-by field divides the query results into groups.

For example, if you set "department" as the group-by field, each distinct value for the "department" field is returned, for instance, Sales, Marketing, and Human Resources. A Dynasty with the group-by field set to "department" then creates a child group for each distinct value: Sales, Marketing, and Human Resources.

## Built-in updates

Directory Manager keeps the Dynasty active in two ways:

- By adding new child groups as new values are returned for the group-by field.
- By removing existing child groups as previous values of the group-by field no longer exist in the directory.

As a result, when new values of the "department" field appear, new groups are created, and when old values disappear, the corresponding child groups are deleted.

The same process occurs with the membership of each child group. When a user's department changes from Sales to Marketing, for example, the user is removed from the Sales child group and added to the Marketing child group.

## The child-parent relationship

Dynasty children inherit their parent's characteristics and properties, such as group type, group security, expiry policy, owner, delivery restrictions, message size restrictions, and more. Inheritance saves administrators time by applying predefined properties to new groups.

You can modify the values of all inherited attributes for a child, except the expiry policy. Child Dynasties always inherit the expiry policy from the parent Dynasty, and you can modify it only at the parent level.

The inheritance option selected for the parent Dynasty on the [Group properties - Dynasty Options tab](/docs/directorymanager/11.2/portal/group/properties/dynastyoptions.md) in group properties determines whether the modified values of inherited attributes persist.

## Multi-level structure

Dynasties have a multi-level structure. For example, you can create a Dynasty that groups first by country, then state, and then city. When updated, the Dynasty creates a group for every country, then a group for every state in a country, and finally a group for each city within each state. Each user in the organization belongs to a country group, a state group, and a city group. As the groups are updated through their multi-level structure, you don't need to worry that they become out of date.

Dynasties are useful for creating and maintaining large dynamic distribution lists in your organization.
