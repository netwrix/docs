---
description: >-
  Learn how to change the default naming convention for Dynasties in Netwrix
  Directory Manager so you can display attributes (for example, department)
  before the Dynasty name.
keywords:
  - dynasty
  - naming convention
  - display name template
  - alias template
  - groups
  - dynasties
  - directory-manager
  - netwrix
products:
  - directory-manager
visibility: public
sidebar_label: Change the Default Naming Convention for Dynasties
tags:
  - group-management-and-operations
title: "Change the Default Naming Convention for Dynasties"
knowledge_article_id: kA0Qk0000001609KAA
---

# Change the Default Naming Convention for Dynasties

## Overview

This article explains how you change the default naming convention for Dynasties in Netwrix Directory Manager. You can customize the convention to fit organizational needs, such as displaying the department name before the Dynasty name.

## Instructions

1. In the Directory Manager Portal, navigate to **Groups** > **All Groups** > **Dynasties**.  
2. Open the properties of the parent Dynasty you want to modify.  
3. Go to the **Dynasty Options** tab.  
4. In the **Display name template** and **Alias template** fields, adjust the naming pattern.  
5. By default, the format is `DynastyName%GroupBy%`. To place the department name first, change the format to `%GroupBy%DynastyName`.  
6. Click **Save** to apply the new naming convention.
