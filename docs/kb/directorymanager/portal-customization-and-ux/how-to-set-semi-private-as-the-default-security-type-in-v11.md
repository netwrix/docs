---
description: >-
  Shows how to set the default group security type to Semi_Private in the
  Netwrix Directory Manager 11 user portal and how to enforce or control its
  visibility by role.
keywords:
  - Netwrix Directory Manager
  - group security
  - semi-private
  - Create Group
  - default value
  - Admin Portal
  - Design Settings
  - Visibility Role
products:
  - directory-manager
sidebar_label: 'How to Set ''Semi-Private'' as the Default Security '
tags:
  - portal-customization-and-ux
title: How to Set 'Semi-Private' as the Default Security Type in v11
knowledge_article_id: kA0Qk0000002BiXKAU
---

# How to Set 'Semi-Private' as the Default Security Type in v11

## Applies To
Netwrix Directory Manager 11

## Overview
By default, users can choose from several security types when creating a group in the Netwrix Directory Manager 11 user portal. You can configure the portal to set *semi-private* as the default security type in the **Create Group** wizard. You also have the option to allow users to select a different security type or to enforce the default for all users.

## Instructions
1. Open the Directory Manager Admin Portal at `https://servername/AdminCenter/`. Navigate to **Applications**, select your desired portal, and click the three dots (**...**) to edit it.  
   ![Applications page in Netwrix Directory Manager Admin Portal with edit option highlighted](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3cH.png)

2. Click **Settings**.  
   ![Settings option in Netwrix Directory Manager Admin Portal](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3fV.png)

3. Under **Design Settings**, click your identity store’s name.  
   ![Design Settings section in Netwrix Directory Manager Admin Portal](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3af.png)

4. On the **Create Object** tab, select **Group** from the **Select Directory Object** drop-down list.  
   ![Create Object tab with Group selected](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3dt.png)

5. In the **Name** list, select *General* and click **Edit**.

6. In the **Edit Design Category** dialog box, select **Security** and click **Edit**.  
   ![Edit Design Category dialog box with Security field selected](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3kL.png)

7. In the **Edit Field** dialog box, click the **Advanced options** link.  
   ![Edit Field dialog box with Advanced options link](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3lx.png)

8. Select `Semi_Private` from the **Default Value** drop-down list.  
   ![Default Value drop-down list with Semi_Private selected](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3nZ.png)

9. Optional: To enforce the semi-private security type, select the **Is Read-Only** check box. This action disables the **Security** drop-down list in the **Create Group** wizard and displays only the default value.  
   ![Is Read-Only check box selected in Edit Field dialog box](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3ij.png)  
   ![Create Group wizard with Security drop-down list disabled](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3qn.png)

10. Optional: To hide the **Security** drop-down list from a specific role, select the desired role (such as **Administrator** or **Helpdesk**) from the **Visibility Role** drop-down list. The **Security** drop-down list is visible to users of the selected role and to roles with a higher priority value, but hidden from all roles with a lower priority value.  
    ![Visibility Role drop-down list in Edit Field dialog box](./../0-images/ka0Qk000000CsSr_0EMQk00000BP3pB.png)

11. Click **OK** to close the dialog boxes then save your changes.
