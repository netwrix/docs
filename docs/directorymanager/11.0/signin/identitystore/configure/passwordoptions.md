---
title: "Configure Password Options"
description: "Configure Password Options"
sidebar_position: 160
---

# Configure Password Options

You can define the following password restrictions and rules for an identity store:

- Specify restricted passwords
- Define regular expressions for allowed passwords
- Specify disallowed passwords using an external file

When identity store users reset or change their passwords using GroupID, their new passwords must
adhere to the defined rules.

NOTE: (1) These password configurations do not apply when helpdesk users reset passwords of
end-users.  
 (2) In case a user has linked his or her accounts in different identity stores, the password
configurations for the master account apply.

In addition to these password restrictions, you can define a password policy for a security role in
an identity store. See the
[Set a Password Policy ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
topic.

What do you want to do?

- [Define Restricted Passwords](#define-restricted-passwords)
- [Specify Regular Expressions for Allowed Passwords](#specify-regular-expressions-for-allowed-passwords)
- [Specify Disallowed Passwords Using an External File](#specify-disallowed-passwords-using-an-external-file)

## Define Restricted Passwords

You can specify certain strings of text that users cannot use as passwords or part of passwords. You
can also specify regular expressions to prevent users from creating passwords that match the
expression.

**To restrict passwords:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. In the **Password Exception** area on the **Password Options** page, click **Add Password
   Exception**.
5. On the **Add New Password Exception** dialog box, select an operator in the **Type** drop down
   list.

    - **Equals:** passwords that match the value you specify in the **Exception Value** box are not
      allowed.
    - **Starts with:** passwords that start with the value you specify in the **Exception Value**
      box are not allowed.
    - **Ends With:** passwords that end with the value you specify in the **Exception Value** box
      are not allowed.
    - **Contains:** passwords that contain the value you specify in the **Exception Value** box are
      not allowed.
    - **Regular Expression:** passwords that satisfy the regular expression you specify in the
      **Exception Value** box are not allowed. See the
      [What are Regular Expressions?](/docs/directorymanager/11.0/signin/applications/portal/categories/textbox.md#what-are-regular-expressions)
      topic to learn about regular expressions and their syntax.

6. Type a value for the selected operator in the **Exception Value** box.
7. Click **OK**.
8. Follow steps 4 to 7 to define as many exceptions as required. All exceptions are treated as
   password restrictions.

    **To remove a password restriction:**

    - In the **Password Exception** area, click **Remove** for a restriction or rule to remove it.
    - To remove all restrictions, click **Remove All**.

9. Click **Save** on the **Password Options** page.

## Specify Regular Expressions for Allowed Passwords

By specifying regular expression(s) for allowed passwords, you ensure that passwords created by
users follow certain rules and patterns.

**To specify a regular expression:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. In the **Password Rules** area on the **Password Options** page, click **Add Password Rule**.
5. On the **Add Rules** dialog box, type a regular expression in the **Regular Expression** box.  
   See the
   [What are Regular Expressions?](/docs/directorymanager/11.0/signin/applications/portal/categories/textbox.md#what-are-regular-expressions)
   topic to learn about regular expressions and their syntax.
6. Click **OK**. The regular expression is displayed in the In the **Password Rules** area.
7. Follow steps 4 to 6 to define as many regular expressions as required. Passwords that satisfy any
   of the regular expressions are allowed.

    **To remove a regular expression:**

    - In the **Password Rules** area, click **Remove** for a regular expression to remove it.
    - To remove all regular expressions, click **Remove All**.

8. Click **Save** on the **Password Options** page.

## Specify Disallowed Passwords Using an External File

A simple way of preventing users from using certain words or strings as passwords is to add those
restricted passwords to a .csv or .txt file and upload it to GroupID.

**To upload the file:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **Password Options**.
4. On the **Password Options** page, select the **Check for disallowed passwords from imported
   file** check box in the **Import Disallowed Password** List area to enable file upload.
5. Click **Import** to browse and select the file (.csv, .txt) containing the disallowed passwords.
6. Click **Save** on the **Password Options** page.

NOTE: Only a single file containing disallowed passwords can be imported for an identity store;
importing another file will replace the existing one.

**See Also**

- [Set a Password Policy ](/docs/directorymanager/11.0/signin/securityrole/policy/password.md)
