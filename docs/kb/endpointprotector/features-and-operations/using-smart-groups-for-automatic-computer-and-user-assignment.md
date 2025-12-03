---
description: >-
  Use Smart Groups in Netwrix Endpoint Protector to automatically assign
  computers and users to groups by name patterns. Configure wildcard include and
  exclude rules to keep group membership current without manual intervention.
keywords:
  - smart groups
  - Netwrix Endpoint Protector
  - endpoint protector
  - device control
  - groups
  - wildcard
  - automatic assignment
  - computers
  - users
products:
  - endpoint-protector
sidebar_label: Using Smart Groups for Automatic Computer and User
tags:
  - features-and-operations
title: "Using Smart Groups for Automatic Computer and User Assignment"
knowledge_article_id: kA0Qk0000002B6MKAU
---

# Using Smart Groups for Automatic Computer and User Assignment

## Overview

Smart Groups enable automatic assignment of computers or users to groups based on name patterns. By configuring wildcard rules, you can include or exclude entities from groups without manual intervention.

## Instructions

1. In the Netwrix Endpoint Protector Console, navigate to **System Configuration** > **System Settings** and enable **Smart Groups**.
2. Navigate to **Device Control** > **Groups**.
3. Mark the desired group as a smart group.
4. Name the group and select the department from which you want to add computers or users.
5. Select either **Computers** or **Users** to add to the group.
6. Specify which entities to include by typing a specific part of the entity name using wildcards:
   - `XYZ*` — Name starts with XYZ
   - `*XYZ*` — Name contains XYZ
   - `*XYZ` — Name ends with XYZ
7. To exclude certain computers or users from the group, specify names or patterns to be excluded.
8. For example, all computers with names starting with **XYZ** will be included in the group, except those starting with **XYZA**.  
   ![Smart Group configuration example in Netwrix Endpoint Protector](./../0-images/ka0Qk000000EaoP_0EMQk00000BmIKT.png)
