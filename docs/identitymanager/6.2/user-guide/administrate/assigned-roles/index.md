---
title: "Review Assigned Roles"
description: "Review Assigned Roles"
sidebar_position: 70
---

# Review Assigned Roles

How to review user permissions grouped by categories.

:::note
**Assigned Roles** is currently in a preview state and additional functionality will be
added in a future release.
:::


## Overview

The **Assigned Roles** section displays a list of the users permissions grouped by categories. This
screen is visible for managers and displays the list of employees part of the team, their roles and
permissions.

You can review all assigned single roles by category. Through filters you can choose to focus on:

- **Entity Type**
- **Workflow State**
- **Policy**
- **Role**
- Other custom filters

## Participants and Artifacts

This operation should be performed by a user with the right permissions. See the
[Configure a User Profile](/docs/identitymanager/6.2/user-guide/set-up/user-profile-configuration/index.md) topic for additional
information.

The following example provides the rights for the Administrator profile to see the Assigned Roles
page on the **Entity Type** directory user. See the
[Create a Provisioning Rule](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/index.md) and
[Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md) topics for
additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssignedRolesAccessControlRules EntityType="Directory_User" Profile="Administrator" />
```

## Review Assigned Roles

Review the Assigned Roles by proceeding as follows:

![assignedroles](/images/identitymanager/saas/user-guide/administrate/assigned-roles/assignedroles.webp)

**Step 1 –** On the home page, in the Administration section of the UI click on Assigned Roles.

![assignedrolesscreen](/images/identitymanager/saas/user-guide/administrate/assigned-roles/assignedrolesscreen.webp)

**Step 2 –** View the list of users with different assigned roles and filter them by **Entity
Type**, **Workflow State**, **Policy**, **Role**or by using a custom filter.

**Step 3 –** Download an .xlsx file list of the **Assigned Roles** users according to the selected
filters.

Revisit the **Assigned Roles** section any time you need to review the information related to
Assigned roles.
