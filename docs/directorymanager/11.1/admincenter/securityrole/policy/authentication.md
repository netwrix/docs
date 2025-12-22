---
title: "Authentication Policy for Security Roles"
description: "Authentication Policy for Security Roles"
sidebar_position: 50
---

# Authentication Policy for Security Roles

Having enabled and configured authentication types for an identity store, you can:

- Enforce authentication type(s) for a user role for multifactor authentication (MFA). Role members
  must use each of the enforced authentication types for account enrollment and authentication.  
  When not enforced, role members can enroll using any authentication type that has been enabled for
  the identity store.
- Enable second factor authentication (SFA) for a security role in an identity store.

:::note
For MFA and SFA to work for an identity store, make sure you enable enrollment for it. See the
[Enable Enrollment](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md#enable-enrollment) topic.
:::


## Enforce Authentication Types for Multifactor Authentication

Before enforcing an authentication type for a security role, make sure it is enabled and configured
for the identity store.

**To enforce authentication types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. In the **Multifactor Authentication Policies** area, select the **Enforced** check box for an
   authentication type to enforce it for the role. The **Enforced** box displays the number of
   authentication types you enforced for the role.  
   Role members must enroll and authenticate for multifactor authentication using each of the
   enforced authentication types.
8. In the **Chosen by End User** box, specify a number. Role members must use this x number of
   authentication types, in addition to the enforced authentication types, for multifactor
   enrollment and authentication.  
   Let’s assume five authentication types have been enabled and configured for the identity store.

    - When you do not enforce any authentication type and specify 2 in the **Chosen by End User**
      box, role members can use any two authentication types from the five enabled types for
      multifactor authentication.
    - However, when you enforce two authentication types and specify 1 in the **Chosen by End User**
      box, role members must enroll and authenticate by the two enforced types, and then choose
      another one from the remaining three enabled authentication types, for multifactor
      authentication.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Enable Second Factor Authentication

You can enable second factor authentication for a security role in an identity store.

For second factor authentication, role members can enroll using any of the authentication types
enabled and configured for the identity store.

Users must pass second factor authentication when signing into Admin Center and the Directory
Manager portal.

**To enable second factor authentication for a role:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Authentication** tab.
7. Use the toggle button for **Second Factor Authentication** to enable or disable it for the
   security role.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.