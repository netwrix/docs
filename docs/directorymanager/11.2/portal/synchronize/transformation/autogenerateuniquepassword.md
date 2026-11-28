---
title: "Auto-Generate Unique Passwords in Synchronize Jobs"
description: "Generate a single password or a unique complex password for each object a Synchronize job provisions, based on password complexity rules."
keywords:
  - auto-generate passwords
  - password complexity
  - Synchronize password transformation
  - unique passwords
sidebar_position: 10
---

# Auto-Generate Unique Passwords in Synchronize Jobs

In the Directory Manager portal, Synchronize can auto-generate passwords based on password complexity rules.

Common uses:

- Provisioning a user, providing a sign-in name and temporary password
- Providing users with a new password after password expiration or account lock
- Generating a password for multiple objects

You open the Password Complexity Options dialog box from the Transform (Password) dialog box. Use it to set the rules that generate passwords randomly for the synced objects. You can assign a single password to all synced objects or generate individual passwords for each object. This feature requires that notifications are configured, because the new password for each object is sent to the administrator by email.

If the destination is Active Directory, the Password Complexity Options dialog box also ensures that the options you set comply with the password policy of the target domain.

If a user ignores a generated password and enters their own, Synchronize validates the entry against the complexity requirements set on the destination Active Directory. If the password doesn't meet those requirements, Synchronize requires the user to correct it before continuing, with the exception of these two conditions:

- Password history: The user tries to enter a previously used password.
- Account name containment: The user tries to enter a password that includes the username in it.

If the destination is an Active Directory domain, the password transformation is available only for the objects that support the password attribute. Examples are users, mail-enabled users, and mailbox-enabled users. The same applies to other directory services that Synchronize supports. For destination providers such as CSV and text files, password transformation is performed for the fields under any column labeled Password in the header.

## Auto-generate unique, complex passwords

To auto-generate unique, complex passwords:

1. In the Directory Manager portal, click **Synchronize** to open the Synchronize portal.

2. On the left navigation bar, click **Create New**, and select **Job** or open an existing job.

3. Click **Next** until you reach the **Map Fields** section on the **Objects, Fields, and Mappings** page.

4. In the **Password** row, click the **More Options** button next to the **Transform** column. The Transformation [Password] dialog box opens.

5. Select **Static – assign a static value**. A dialog box with specific settings appears.

6. Select one of the following options:

   - **Use a single static password for all rows**: Assigns the same password to all objects. Enter the password manually, or click the Generate Password button to auto-generate one. The password is based on the rules defined in the Password Complexity Options dialog box.
   - **Use unique password generated dynamically against each row**: Generates a unique password for every object.

7. Select the **Send email notification to manager** checkbox to send the new password for each object to the user's manager by email when the job runs. This applies to both static and dynamic passwords. The email isn't sent if the user doesn't have a manager.

8. Click the **Password Complexity Options** button. The Password Complexity Options dialog box opens. If you selected the **Use unique password generated dynamically against each row** option, you must configure this dialog box, because unique passwords are generated on the basis of the rules you specify here.

9. In the **Password Length** box, set the number of characters within the given range that a password should contain.

   The minimum value displayed in the range may vary depending on the selected destination provider. For an Active Directory destination, the minimum value is determined on the basis of the password complexity requirements and minimum password length set for the domain.

   The following table explains the rules that determine how the minimum value is calculated.

   <table>
   	<thead>
           <tr>
               <th>&#160;</th>
               <th>Password Complexity Requirements</th>
               <th>Minimum Password Length</th>
               <th>Minimum Value Displayed in the Range</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td rowspan="2">1</td>
               <td rowspan="2">Enabled</td>
               <td>Less than or equal to 6</td>
               <td>6</td>
           </tr>
           <tr>
               <td>Greater than 6</td>
               <td>6</td>
           </tr>
           <tr>
               <td rowspan="2">2</td>
               <td rowspan="2">Disabled</td>
               <td>Less than or equal to 6</td>
               <td>6</td>
           </tr>
   		<tr>
   			<td>Greater than 6</td>
         <td>The minimum password length set for the domain.</td>
       </tr>
     </tbody>
   </table>

   For any other destination providers, you can enter a value from 6 to 99.

10. Select the Upper case alphabets (A-Z) checkbox if you want the password to contain any uppercase English letters (A through Z).

11. Select the Lower case alphabets (a-z) checkbox if you want the password to contain any lowercase English letters (a through z).

12. Select the Digits (0-9) checkbox if you want the password to contain any base 10 digits (0 through 9).

13. Select the Special Symbols checkbox if you want the password to contain special characters. When the checkbox is selected, the box next to it becomes available. In the box, specify the special characters that you want the password to contain.

    :::note
    For Active Directory destinations, if password complexity requirements are enabled for the domain, you must select three of the preceding four settings.
    :::

14. Select the **Exclude similar symbols** checkbox if you don't want a special character to appear more than once in the password.

15. Check the sample password in the **Password** box. It is based on the settings you selected on this dialog box. It is displayed as text rather than placeholder characters if the **Show Password** checkbox is selected.

16. To view more sample passwords, click the **Generate** button as many times as you want.

17. Click the **Transform** button to save your settings and close the dialog box.

    If you chose to assign a static password for all synced objects on the Transform (Password) dialog box, the auto-generated password appears in the corresponding box. If you selected the dynamic password assignment option, a password is auto-generated for each object based on the rules defined in the Password Complexity Options dialog box.

18. Click **Next Step**.

19. On the **Notifications** page, select **Enable Notifications**. If you selected the Use unique password generated dynamically against each row option on the Transformation [Password] dialog box, the new password for each object is sent to the administrator by email when the job runs.

    :::note
    Notifications are sent if an SMTP server and notification recipients have been configured for the destination identity store.
    :::
