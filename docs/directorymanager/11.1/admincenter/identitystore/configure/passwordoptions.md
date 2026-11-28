---
title: "Configure Password Options in Directory Manager"
description: "Restrict passwords, define allowed-password regular expressions, and block passwords listed in an imported file for an identity store."
keywords:
  - password restrictions
  - password exceptions
  - password rules
  - disallowed passwords file
  - regular expressions
  - identity store
sidebar_position: 160
---

# Configure Password Options in Directory Manager

You can define the following password restrictions and rules for an identity store:

- Specify restricted passwords
- Define regular expressions for allowed passwords
- Specify disallowed passwords using an external file

When identity store users reset or change their passwords using Directory Manager, their new passwords must follow the defined rules.

:::note
(1) These password configurations don't apply when helpdesk users reset passwords of end users.

(2) If a user has linked their accounts in different identity stores, the password configurations for the master account apply.
:::

In addition to these password restrictions, you can define a password policy for a security role in an identity store. See the [Directory Manager Password Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md) topic.

## Define restricted passwords

You can specify certain strings of text that users can't use as passwords or part of passwords. You can also specify regular expressions to prevent users from creating passwords that match the expression.

**To restrict passwords:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Password Options**.
4. In the **Password Exception** area on the **Password Options** page, click **Add Password Exception**.
5. On the **Add New Password Exception** dialog box, select an operator in the **Type** dropdown list.

   - **Equals:** passwords that match the value you specify in the **Exception Value** box aren't allowed.
   - **Starts With:** passwords that start with the value you specify in the **Exception Value** box aren't allowed.
   - **Ends With:** passwords that end with the value you specify in the **Exception Value** box aren't allowed.
   - **Contains:** passwords that contain the value you specify in the **Exception Value** box aren't allowed.
   - **Regular Expression:** passwords that satisfy the regular expression you specify in the **Exception Value** box aren't allowed. See the [Regular Expressions](/docs/directorymanager/11.1/admincenter/applications/portal/categories/textbox.md#regular-expressions) topic to learn about regular expressions and their syntax.

6. Enter a value for the selected operator in the **Exception Value** box.
7. Click **OK**.
8. Follow steps 4 to 7 to define as many exceptions as required. All exceptions are treated as password restrictions.

   **To remove a password restriction:**

   - In the **Password Exception** area, click **Remove** for a restriction or rule to remove it.
   - To remove all restrictions, click **Remove All**.

9. Click **Save** on the **Password Options** page.

## Specify regular expressions for allowed passwords

By specifying regular expressions for allowed passwords, you ensure that passwords created by users follow certain rules and patterns.

**To specify a regular expression:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Password Options**.
4. In the **Password Rules** area on the **Password Options** page, click **Add Password Rule**.
5. On the **Add Rules** dialog box, enter a regular expression in the **Regular Expression** box.

   See the [Regular Expressions](/docs/directorymanager/11.1/admincenter/applications/portal/categories/textbox.md#regular-expressions) topic to learn about regular expressions and their syntax.

6. Click **OK**. The regular expression appears in the **Password Rules** area.
7. Follow steps 4 to 6 to define as many regular expressions as required. Passwords that satisfy any of the regular expressions are allowed.

   **To remove a regular expression:**

   - In the **Password Rules** area, click **Remove** for a regular expression to remove it.
   - To remove all regular expressions, click **Remove All**.

8. Click **Save** on the **Password Options** page.

## Specify disallowed passwords using an external file

A simple way of preventing users from using certain words or strings as passwords is to add those restricted passwords to a CSV or TXT file and upload it to Directory Manager.

**To upload the file:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. Under **Settings** in the left pane, click **Configurations**. Then click **Password Options**.
4. On the **Password Options** page, select the **Check for disallowed passwords from imported
   file** checkbox in the **Import Disallowed Password** List area to enable file upload.
5. Click **Import** to browse and select the file (.csv, .txt) containing the disallowed passwords.
6. Click **Save** on the **Password Options** page.

:::note
Only a single file containing disallowed passwords can be imported for an identity store. Importing another file replaces the existing one.
:::
