---
title: "Map Objects and Fields in a Synchronize Job"
description: "Select the object type, messaging provider, scripts, and field mappings for a Synchronize job, including transformations and key fields."
keywords:
  - Synchronize job
  - object types
  - field mapping
  - global script
  - messaging provider
  - transformations
sidebar_position: 30
---

# Map Objects and Fields in a Synchronize Job

On the **Objects, Fields and Mappings** page, map the attributes to source fields.

1. In the **Sync Object Options**, select the object type that you want to create or update.

   Object types vary depending on the destination provider.

   <table>
       <thead>
           <tr>
   			<th>Destination Provider</th>
               <th>Object Type</th>
               <th>Description</th>
           </tr>
       </thead>
       <tbody>
       <tr>
           <td rowspan="7" valign="top">Active Directory</td>
           <td>User</td>
           <td>An Active Directory user.</td>
       </tr>
       <tr>
           <td>Mail-enabled User</td>
           <td>An Active Directory user with an external email address (requires Exchange 2013 or later).</td>
       </tr>
       <tr>
           <td>Mailbox-enabled User</td>
           <td>An Active Directory user with an Exchange mailbox (requires Exchange 2013 or later).</td>
       </tr>
       <tr>
           <td>Linked Mailbox</td>
           <td>A mailbox that is accessed by a user in a separate, trusted forest. Linked mailboxes may be necessary for organizations that deploy Exchange in a resource forest.</td>
       </tr>
       <tr>
           <td>Contact</td>
           <td>An Active Directory contact.</td>
           </tr>
   		<tr>
               <td>Group</td>
               <td>An Active Directory group. Members of the group are synced with, but not created at, the destination.</td>
           </tr>
           <tr>
               <td>Mail-enabled Contact</td>
               <td>An Active Directory contact with an external email address (Exchange 2013 or later).</td>
           </tr>
            <tr>
               <td rowspan="3" valign="top">Microsoft Entra ID</td>
               <td>User</td>
               <td>A Microsoft Entra ID user.</td>
           </tr>
           <tr>
   			<td>Mailbox-enabled User</td>
   			<td>A Microsoft Entra ID user with an external email address (requires Exchange 2013 or later).</td>
           </tr>
            <tr>
               <td>Group</td>
               <td>A Microsoft Entra ID group.</td>
           </tr>
           <tr>
               <td>Generic LDAP</td>
               <td>inetOrgPerson</td>
               <td>inetOrgPerson is an object class found in standard Lightweight Directory Access Protocol (LDAP) implementations.</td>
           </tr>
   		<tr>
               <td rowspan="2" valign="top">Google Workspace</td>
               <td>User</td>
               <td>A Google Workspace user.</td>
           </tr>
           <tr>
               <td>Group</td>
               <td>A Google Workspace group.</td>
           </tr>
       </tbody>
   </table>

2. Add a messaging provider. The **Add Messaging Provider** option is available only with mail-enabled objects. Click **Add Now** to select the messaging system you want to use with this job, and select one of these options:

   - **Configure With Destination Provider**

     Displays the messaging provider configured in the destination provider.

   - **Add New Provider**

     Displays the following list of new providers that you can use to create a job.

     - [Sync Google Workspace Subscriptions in a Synchronize Job](/docs/directorymanager/11.2/portal/synchronize/create/messagingsystemoverview/googleapp.md)

       Add connection details for Google Workspace.

     - [Sync Office 365 Subscriptions in a Synchronize Job](/docs/directorymanager/11.2/portal/synchronize/create/messagingsystemoverview/office365.md)

       Add connection details for Office 365.

     - [Sync Exchange Subscriptions in a Synchronize Job](/docs/directorymanager/11.2/portal/synchronize/create/messagingsystemoverview/exchange.md)

       Add connection details for Exchange.

     - Others

       Add details for any other provider that isn't present in the list.

     - None

       Select None if you don't want to add any messaging provider.

3. In the **Script Language** section, select the scripting language you want to use:

   - [Visual Basic .NET for Directory Manager](/docs/directorymanager/11.2/portal/synchronize/dtmscript/visualbasicnetbasic.md)
   - Python for Directory Manager

4. Edit the global script. The Global Script Editor lets the script author extend the functionality of Synchronize by writing scripts in Visual Basic .NET and Python. You must verify the code by compiling the script before you save it. Click **Edit Global Script** and follow these steps:

   1. Click **Edit** in the header of the screen to edit the script. You can perform these actions:

      | Actions             | Description                                                                                                              |
      | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
      | Go To (Ctrl+G)      | Opens the Go To Line dialog box for jumping to a specific line in the editor                                             |
      | Cut (Ctrl+X)        | Copies the current text selection to the clipboard and deletes the selection                                             |
      | Copy (Ctrl+C)       | Copies the current text selection to the clipboard while keeping the selection.                                          |
      | Paste (Ctrl+V)      | Inserts the copied or cut text from the clipboard in the workspace.                                                      |
      | Undo (Ctrl+Z)        | Reverses the last change.                                                                                                |
      | Redo (Ctrl+Y)        | Re-applies a change reversed using the Undo action.                                                                      |
      | Insert Datetime     | Inserts the current date and time in the editor.                                                                         |
      | Insert File As Text | Opens the Select a text file dialog box to select a text file from which to insert text into the editor. |

   2. Use **Tools > Add or remove references** to display the components and DLL libraries included in your script.
   3. Click **Import** to import the previously exported script to run the job.
   4. To export the script, click **Export** to save it for future use.
   5. You can also click the **Plus** icon to clear the scripting editor and then copy and paste the attached script in the global scripting editor.
   6. To compile the script, click **Build** and then click **Compile Script**.

      Synchronize reviews the code to determine if any errors would prevent the code from loading or executing. Compiling your script verifies that the code is free of syntactical errors. It doesn't guarantee that the code is free from logical errors.

      If the code is free of syntactical errors, a message box appears informing you that the code has been successfully compiled. If there are one or more errors, you can view any problems at the bottom of the screen in the **Errors** section. Double-clicking an error positions the cursor at the location of the error in the script.

   7. The toolbar displays the following actions that you can perform on your script:

      | Icon                                                                                                           | Description                                            |
      | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
      | ![Undo icon](/images/directorymanager/11.2/portal/synchronize/job/undo.webp)             | Reverses the last change.                              |
      | ![Redo icon](/images/directorymanager/11.2/portal/synchronize/job/redo.webp)             | Re-applies a change reversed using the Undo action.    |
      | ![Indent icon](/images/directorymanager/11.2/portal/synchronize/job/indent.webp)         | Increases the indenting of the current text selection. |
      | ![Outdent icon](/images/directorymanager/11.2/portal/synchronize/job/outdent.webp)       | Decreases the indenting of the current text selection. |
      | ![Comment icon](/images/directorymanager/11.2/portal/synchronize/job/comment.webp)       | Comments the current text selection.                   |
      | ![Uncomment icon](/images/directorymanager/11.2/portal/synchronize/job/uncomment.webp)   | Uncomments the current text selection.                 |
      | ![Uppercase icon](/images/directorymanager/11.2/portal/synchronize/job/uppercase.webp)   | Converts the current text selection to uppercase.      |
      | ![Lowercase icon](/images/directorymanager/11.2/portal/synchronize/job/lowercase.webp)   | Converts the current text selection to lowercase.      |
      | ![Dark theme icon](/images/directorymanager/11.2/portal/synchronize/job/darktheme.webp)   | Switches the theme of the script editor to dark.       |
      | ![Light theme icon](/images/directorymanager/11.2/portal/synchronize/job/lighttheme.webp) | Switches the theme of the script editor to light.      |
      | ![Select all icon](/images/directorymanager/11.2/portal/synchronize/job/selectall.webp)   | Selects all the text in the editor.                    |

   8. Click **Save** to save the changes made to the script.

5. In the [Configure Selected Fields in a Synchronize Job](/docs/directorymanager/11.2/portal/synchronize/create/selectedfield.md) section, click **Add/Edit Fields**. You can specify the action to take if the data or object being exported from the source doesn't exist at the destination.
6. Use the **Map Field** section to map the source and destination fields and to apply transformations:

   1. In the **Key** column, select at least one field to be a unique identifier.

      Do one of the following:

      - [Mandatory Attributes for Field Mapping](/docs/directorymanager/11.2/portal/synchronize/create/mappingfield.md)

        In the **Source** column of each destination item, select the source fields that contribute the data for the destination.

      - **Apply a [Transform Data in Synchronize Jobs](/docs/directorymanager/11.2/portal/synchronize/transformation/overview.md)**

        In the **Transform** column, click the **More Options** button to open the **Transform** [ _field_] dialog box. Apply a transformation to the field value before it is saved at the destination.

   2. If the source or destination field is multi-valued, set a delimiter from the **Delimiter** list.

      Depending on the types of data sources, this delimiter either separates the values of a multi-valued field at the source or merges the values of a multi-valued field at the destination.

   3. In the **New only** column, select the checkboxes for fields to be updated only when creating a new object. Fields that aren't selected are continually updated. Key fields are selected by default as New Only fields, and you can't change this selection.

      :::note
      For Microsoft Entra ID objects, primary key fields are:
      (1) UserPrincipalName attribute for the "User/Mailbox" object
      (2) DisplayName attribute for the "Group" object.
      :::

   4. Select the **Show field reference** checkbox to view a list of attributes from the schema of the source provider.
   5. Click **Next**.

