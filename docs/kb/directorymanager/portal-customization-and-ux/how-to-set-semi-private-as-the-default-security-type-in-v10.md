---
description: >-
  Shows how to set "Semi-Private" as the default security type in Netwrix
  Directory Manager 10 Self-Service so users see it by default or so you can
  enforce or hide it per role.
keywords:
  - semi-private
  - security type
  - create group
  - self-service
  - netwrix directory manager
  - default value
  - visibility role
  - is read-only
  - group creation
products:
  - directory-manager
sidebar_label: 'How to Set ''Semi-Private'' as the Default Security '
tags:
  - portal-customization-and-ux
title: How to Set 'Semi-Private' as the Default Security Type in v10
knowledge_article_id: kA0Qk0000002BgvKAE
---

# How to Set 'Semi-Private' as the Default Security Type in v10

## Applies To

Netwrix Directory Manager 10 – Self-Service

## Overview

By default, users can select from multiple security types when creating a group in the Self-Service portal. You may want to set `Semi Private: Owner Must Approve` as the default security type in the **Create Group** wizard, while still allowing users to choose another option or enforce the default for all users.

## Instructions

1. In the Directory Manager Management Console, navigate to **Self-Service > Portals > [Required portal] > Designs > [Required identity store]**.
2. On the **Create Object** tab, select **Group** from the **Select Directory Object** drop-down list.
3. In the **Name** list, select **General** and click **Edit**.
4. In the **Edit Design Category** dialog box, select **Security** and click **Edit**.

   ![Edit Design Category dialog box with Security field selected](./../0-images/ka0Qk000000CsRF_0EMQk00000BP1x3.png)

5. In the **Edit Field** dialog box, click the **Advanced options** link.

   ![Edit Field dialog box with Advanced options link](./../0-images/ka0Qk000000CsRF_0EMQk00000BP23V.png)

6. Select `Semi Private: Owner Must Approve` from the **Default Value** drop-down list.

   ![Default Value drop-down list with Semi Private selected](./../0-images/ka0Qk000000CsRF_0EMQk00000BP21t.png)

7. Optional: To enforce the semi-private security type, select the **Is Read-Only** check box. This will disable the **Security** drop-down list in the **Create Group** wizard, displaying only the default value.

   ![Is Read-Only check box selected in Edit Field dialog box](./../0-images/ka0Qk000000CsRF_0EMQk00000BP1yf.png)

8. Optional: To hide the **Security** drop-down list from a specific role, select the desired role (such as **Administrator** or **Helpdesk**) from the **Visibility Role** drop-down list. The **Security** drop-down list will be visible to users of the selected role and roles with a higher priority value, and hidden from all roles with a lower priority value.

   ![Visibility Role drop-down list in Edit Field dialog box](./../0-images/ka0Qk000000CsRF_0EMQk00000BP20H.png)

9. Click **OK** to close the dialog boxes and save your changes.
