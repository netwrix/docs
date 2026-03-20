---
title: "User Management"
description: "Creating and managing user accounts"
sidebar_position: 10
---

# User Management

Access Analyzer supports multi-user access with role-based permissions. Administrators can create, edit, and deactivate user accounts from the **Users** section of the web interface.

## Creating a User

To create a new user:

1. Navigate to **Users** in the sidebar.
2. Click **Create User**.
3. Enter the required fields: **Username**, **Email**, and **Password**.
4. Assign a [role](/docs/accessanalyzer/1_0/admin/users/roles) (Administrator or Viewer).
5. Click **Save**.

Passwords are hashed using Argon2id before storage. Users must meet the configured password complexity requirements.

## Managing Users

From the users list, administrators can:

- **Edit** a user to update their email, role, or password.
- **Deactivate** a user to revoke access without deleting the account record.
- **Delete** a user to permanently remove the account.

:::warning
Deleting a user is irreversible. Consider deactivating accounts instead if you need to preserve audit history.
:::

## Related Topics

- [Roles and Permissions](/docs/accessanalyzer/1_0/admin/users/roles)
- [Session Management](/docs/accessanalyzer/1_0/admin/users/sessions)
