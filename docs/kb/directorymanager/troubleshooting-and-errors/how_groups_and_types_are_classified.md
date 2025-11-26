---
description: >-
  This article explains how Netwrix Directory Manager classifies groups into unmanaged and managed categories, detailing their features and security types.
keywords:
  - Directory Manager
  - group classification
  - unmanaged groups
  - managed groups
  - security types
sidebar_label: Group Classification
tags:
  - troubleshooting-and-errors
title: "How Groups and Types Are Classified"
knowledge_article_id: kA0Qk0000002LrZKAU
products:
  - directory-manager
---

# How Groups and Types Are Classified

## Applies To

Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) classifies groups into two main categories: **Unmanaged** and **Managed**. Each category supports different group management features and security types. This article explains these classifications and the security types available for groups in Directory Manager.

## Details

### Unmanaged Groups

An unmanaged group, also called a static group, is typically created directly in a directory, such as with the Users and Computers option in Active Directory. Although you can create unmanaged groups using the Directory Manager portal, Directory Manager does not support dynamic updates for these groups. Any changes to membership must be made manually.

### Managed Groups (Smart Groups)

A managed group, also known as a Smart Group, dynamically maintains its membership based on user-defined rules. These rules are applied through an LDAP query, which is scheduled for membership updates using a Smart Group Update job. When the job runs, it applies the rules to update group membership automatically.

A dynasty is a collection of Smart Groups created based on the values of a defined attribute. These groups are governed by a parent group, called the "Parent" dynasty. When you update the Parent dynasty, its middle and leaf dynasties are automatically updated. This automated group management allows administrators to maintain large distribution lists and security groups without manual intervention.

You can create and manage Smart Groups using the Directory Manager portal.

### Security Types of Groups

For both unmanaged and managed groups, Directory Manager classifies groups into three security types. These types define the access level for a group:

- **Private groups:** Membership is determined solely by the group owner. The owner decides who can join or leave the group, and additional owners can also manage membership. Users cannot request to join or leave a private group. By default, unmanaged groups are classified as Private, but you can change their security type in Directory Manager.
- **Semi-private groups:** These groups have an owner who determines membership, but members can request to join or leave the group.
- **Public groups:** Open to all users. Users can join or leave a public group without owner permission. Administrators can configure email notifications to be sent to the group owner when a member joins or leaves the group.
