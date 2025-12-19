---
title: "Auto-Generate Unique, Complex Passwords"
description: "Auto-Generate Unique, Complex Passwords"
sidebar_position: 10
---

# Auto-Generate Unique, Complex Passwords

In GroupID Portal, you can auto-generate passwords based on password complexity rules through
Synchronize.

Common uses:

- Provisioning a user, providing a login and temporary password
- Providing users with a new password after password expiration or account lock
- Generating a password for multiple objects

Launched from within the Transform (Password) dialog box, the Password Complexity Options dialog box
enables you to set password complexity rules to generate passwords randomly for the objects being
synced. You can assign a single password to all synced objects or generate individual passwords for
each object. This feature requires that notifications are configured, since the new password for
each object will be sent to the administrator by email.

If the destination is Active Directory, the Password Complexity Options dialog box also ensures that
options set here comply with the password policy of the target domain.

In addition, should a user choose to ignore a generated password and enter their own, Synchronize
validates their entry according to the complexity requirements set on the destination Active
Directory. If the user’s password does not meet those requirements, Synchronize requires the user to
correct the password before continuing, with the exception of these two conditions:

- Password history: The user tries to enter a previously used password.
- Account name containment: The user tries to enter a password that includes the username in it.

If the destination is an Active Directory domain, the password transformation is available only for
the objects that support the password attribute; for example, users, mail-enabled users, and
mailbox-enabled users. The same applies to other directory services that Synchronize supports. For
destination providers such as CSV and text files, password transformation is performed for the
fields under any column labeled Password in the header.

## To auto-generate unique, complex passwords

1. In GroupID Portal, click **Synchronize**, to open Synchronize portal.
2. On the left navigation bar, click **Create New**, and select **Job** or open an existing job.
3. Click **Next** until you reach the **Map Fields** section on the **Objects, Fields and Mappings**
   page.
4. In the **Password** row, click the **More Options** button next to the **Transform** column. The
   Transformation [Password] dialog box opens.
5. Select _Static – assign a static value_. A dialog box with specific settings appears.
6. Select one of the following options:

    - **Use a single static password for all rows** – Select this option to assign the same password
      to all objects. You can either enter the password manually or click the Generate Password
      button to auto generate a password. This password is based on the rules defined in the
      Password Complexity Options dialog box.
    - **Use unique password generated dynamically against each row**- Select this option to generate
      a unique password for every object.

7. Select the **Send email notification to manager** check box if you want to send the new password
   for each object to the user’s manager by email when the job runs. This applies to both static and
   dynamic passwords. Note that the email is not sent if the user doesn’t have a manager.
8. Click the **Password Complexity Options** button. The Password Complexity Options dialog box
   opens. If you have selected the **Use unique password generated dynamically against each row**
   option, then this dialog box must be configured because unique passwords are generated on the
   basis of the rules you specify here.
9. In the **Password Length** box, type or select the number of characters within the given range
   that a password should contain.

    The minimum value displayed in the range may vary depending on the selected destination
    provider. For an Active Directory destination, the minimum value is determined on the basis of
    the password complexity requirements and minimum password length set for the domain.

    The following table explains the rules that determine how the minimum value is calculated.

    |     | Password Complexity Requirements | Minimum Password Length                         | Minimum Value Displayed in the Range |
    | --- | -------------------------------- | ----------------------------------------------- | ------------------------------------ |
    | 1   | Enabled                          | Less than or equal to 6                         | 6                                    |
    |     | Greater than 6                   | 6                                               |                                      |
    | 2   | Disabled                         | Less than or equal to 6                         | 6                                    |
    |     | Greater than 6                   | The minimum password length set for the domain. |                                      |

    For any other destination providers, you can type a value from 6 to 99.

10. Select the Upper case alphabets (A-Z) check box if you want the password to contain any
    uppercase English alphabets (A through Z).
11. Select the Lower case alphabets (a-z) check box if you want the password to contain any
    lowercase English alphabets (a through z).
12. Select the Digits (0-9) check box if you want the password to contain any base 10 digits (0
    through 9).
13. Select the Special Symbols check box if you want the password to contain special characters.
    When the check box is selected, the box next to it becomes available. You can specify special
    characters in the box that you want the password to contain.

    NOTE: For Active Directory destinations, if password complexity requirements are enabled for the
    domain, then you must select three of the preceding four settings.

14. Select the **Exclude similar symbols** check box if you do not want a special character to
    appear more than once in the password.
15. The **Password** box shows a sample password based on the settings you have selected on this
    dialog box. It is displayed as text rather than placeholder characters if the **Show Password**
    check box is selected.
16. You can view as many sample passwords as you want by clicking the **Generate** button.
17. Click the **Transform** button to save your settings and close the dialog box.

    If you chose to assign a static password for all synced objects on the Transform (Password)
    dialog box, the auto-generated password will be shown in the corresponding box. If you selected
    the dynamic password assignment option, a password is auto generated for each object based on
    the rules defined in the Password Complexity Options dialog box.

18. Click **Next Step**.
19. In the **Notifications** page, select **Enable Notifications**. If you have selected the Use
    unique password generated dynamically against each row option on the Transformation [Password]
    dialog box, then the new password for each object is sent to the administrator by email when the
    job runs.

    NOTE: Notifications will be sent if an SMTP server and notification recipients have been
    configured for the destination identity store.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Manage a Job](/docs/directorymanager/11.0/welcome/synchronize/manage/job.md)
- [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Objects, Fields and Mapping ](/docs/directorymanager/11.0/welcome/synchronize/create/objectfieldsandmapping.md)
