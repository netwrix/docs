---
description: >-
  Make the displayName attribute optional in the Self‑Service Portal so you can
  save changes to groups that were created directly in Active Directory without
  a displayName.
keywords:
  - displayName
  - Active Directory
  - groups
  - Self-Service Portal
  - Netwrix Directory Manager
  - design settings
  - Smart Groups
products:
  - directory-manager
sidebar_label: Remove the DisplayName Requirement for Groups Crea
tags:
  - portal-customization-and-ux
title: "Remove the DisplayName Requirement for Groups Created in Active Directory"
knowledge_article_id: kA0Qk0000002ChpKAE
---

# Remove the DisplayName Requirement for Groups Created in Active Directory

## Applies To
- Netwrix Directory Manager 11

## Overview
When you integrate Netwrix Directory Manager with an existing Active Directory environment, some groups may have been created directly in Active Directory. These groups might not have the **displayName** attribute populated, since it is not required by Active Directory.

Netwrix Directory Manager, however, requires the **displayName** attribute because it uses this value to populate other fields, such as Alias and CN. If you try to save changes to one of these groups in the **Self‑Service Portal (SSP)** and **displayName** is missing, you will receive an error. You cannot save changes until **displayName** is populated or the requirement is removed.

This article describes a workaround that allows you to save changes to these groups by making the **displayName** attribute optional in the portal design.

![Error message displayed in Self-Service Portal when displayName is missing](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYlB.png) ![Error details dialog showing missing displayName attribute](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSWjO.png)

## Instructions
1. In the Netwrix Directory Manager Admin Center, go to the **Applications** tab. Open the settings for the application where you want to remove the **displayName** requirement by clicking the **Settings** button (top right corner of the application card).
   
   ![Open application settings in Directory Manager Admin Center](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYmn.png)

2. Under **Design Settings**, click the domain name.
   
   ![Select domain under Design Settings](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYoP.png)

3. Go to the **Properties** tab and set the **Directory Object** to **Groups**.
   
   ![Set Directory Object to Groups](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYq1.png)

4. Edit the **General** field by clicking the pencil icon.
   
   ![Edit General field](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYrd.png)

5. Edit the **DisplayName** field by clicking the pencil icon in the Design category window.
   
   ![Edit DisplayName field](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYtF.png)

6. Expand **Advanced Options** and uncheck the **Is Required** box.
   
   ![Uncheck Is Required for DisplayName](./../0-images/ka0Qk000000DvbZ_0EMQk00000BSYwT.png)

7. Click all **OK** buttons to save your changes, then log in to your portal. You should now be able to save changes to a group even if the **displayName** attribute is not populated.

8. To apply this change to Smart Groups, set the **Directory Object** to **SmartGroup** in step 3 then complete the remainder of the steps.
