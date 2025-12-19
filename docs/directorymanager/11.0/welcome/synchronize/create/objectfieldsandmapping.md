---
title: "Objects, Fields and Mapping"
description: "Objects, Fields and Mapping"
sidebar_position: 30
---

# Objects, Fields and Mapping

On the **Object, Fields and Mappings** page, map the a attributes with source fields.

1. In the **Sync Object Options**, select an object type that you want to either create or update.

    Object types vary depending on the destination provider.

    | Destination Provider | Object Type                                                                                                                                                        | Description                                                                                                      |
    | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
    | Active Directory     | User                                                                                                                                                               | An Active Directory user.                                                                                        |
    | Mail-enabled User    | An Active Directory user with an external e-mail address (requires Exchange 2013 or later).                                                                        |                                                                                                                  |
    | Mailbox-enabled User | An Active Directory user with an Exchange mailbox (requires Exchange 2013 or later).                                                                               |                                                                                                                  |
    | Linked Mailbox       | A mailbox that is accessed by a user in a separate, trusted forest. Linked mailboxes may be necessary for organizations that deploy Exchange in a resource forest. |                                                                                                                  |
    | Contact              | An Active Directory contact.                                                                                                                                       |                                                                                                                  |
    | Group                | An Active Directory group. Members of the group will be synced with, but not created at, the destination.                                                          |                                                                                                                  |
    | Mail-enabled Contact | An Active Directory contact with an external e-mail address (Exchange 2013 or later)                                                                               |                                                                                                                  |
    | Microsoft Entra ID   | User                                                                                                                                                               | A Microsoft Entra ID user.                                                                                       |
    | Mailbox-enabled User | A Microsoft Entra ID user with an external e-mail address (requires Exchange 2013 or later).                                                                       |                                                                                                                  |
    | Group                | A Microsoft Entra IDgroup.                                                                                                                                         |                                                                                                                  |
    | Generic LDAP         | inetOrgPerson                                                                                                                                                      | inetOrgPerson is an object class found in standard Lightweight Directory Access Protocol (LDAP) implementations. |
    | Google Workspace     | User                                                                                                                                                               | A Google Workspace user.                                                                                         |
    | Group                | A Google Workspace group.                                                                                                                                          |                                                                                                                  |

2. The **Add Messaging Provider** option is only available with the mail-enabled objects. Click
   **Add Now** to select a messaging system you want to use with this job. You need to select from
   the two options:

    - **Configure with Destination Provider**

        It displays the messaging provider configured in the destination provider.

    - **Add New Provider**

        It displays the following list of new providers that you can use to create a job.

        - [Google Workspace Subscription](/docs/directorymanager/11.0/welcome/synchronize/create/messagingsystemoverview/googleapp.md)

            Add connection details for Google Workspace.

        - [Office 365 Subscription](/docs/directorymanager/11.0/welcome/synchronize/create/messagingsystemoverview/office365.md)

            Add Connection details for Office 365.

        - [Exchange Subscription](/docs/directorymanager/11.0/welcome/synchronize/create/messagingsystemoverview/exchange.md)

            Add connection details for Exchange.

        - Others

            Add details for any other provider that is not present in the list.

        - None

            Select None if you not want to add any messaging provider.

3. In the **Script Language** section, specify the scripting language you want to use. Select one of
   the following language:

    - [Visual Basic .NET for GroupID](/docs/directorymanager/11.0/welcome/synchronize/dtmscript/visualbasicnetbasic.md)
    - Python for GroupID

4. The Global Script Editor allows the script author to extend the functionality of Synchronize by
   authoring scripts in Visual Basic .NET and Python. Before saving a script, the code must be
   verified by compiling the script. Click on **Edit Global Script,**and follow these steps:

    1. Click on **Edit** option from the header of the screen to edit the script. You can perform
       the following action:

        | Actions             | Description                                                                                                              |
        | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
        | Go To (Ctrl+G)      | Opens the Go To Line dialog box for jumping to a specific line in the editor                                             |
        | Cut (Ctrl+X)        | Copies the current text selection to the clipboard and deletes the selection                                             |
        | Copy (Ctrl+C)       | Copies the current text selection to the clipboard while keeping the selection.                                          |
        | Paste (Ctrl+V)      | Inserts the copied or cut text from the clipboard in the workspace.                                                      |
        | Undo (Ctrl+Z        | Reverses the last change.                                                                                                |
        | Redo (Ctrl+Y        | Re-applies a change reversed using the Undo action.                                                                      |
        | Insert Datetime     | Inserts the current date and time in the editor.                                                                         |
        | Insert File As Text | Opens the Select a text file dialog box that allows you to select a text file from which to insert text into the editor. |

    2. Use the **Tools > Add or remove references** to display various components and DLL libraries
       included in your script.
    3. Click **Import** to import the previously exported script to run the job.
    4. To export the script, click **Export** to save it for future use.
    5. You can also click the **Plus** icon to clear the scripting editor and then copy and paste
       the attached script in the global scripting editor.
    6. To compile the script, click on **Build** and then click **Compile Script**.

        Synchronize will review the code to determine if there are any errors which would prevent
        the code from loading or executing. While compiling your script will verify the code is free
        of syntactical errors, it does not guarantee that the code is free from logical errors. If
        the code is free of syntactical errors, a message box will appear informing the user that
        the code has been successfully compiled. In the event of one or more errors, the user can
        view any problems at the bottom of the screen in the **Errors** section. Double-clicking on
        a given error will position the cursor to the location of the error in the script.

    7. The toolbar displays various actions that you can perform on your script:

        | Icon                                                                                          | Description                                            |
        | --------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
        | ![undo](/images/directorymanager/11.0/portal/synchronize/job/undo.webp)             | Reverses the last change.                              |
        | ![redo](/images/directorymanager/11.0/portal/synchronize/job/redo.webp)             | Re-applies a change reversed using the Undo action.    |
        | ![indent](/images/directorymanager/11.0/portal/synchronize/job/indent.webp)         | Increases the indenting of the current text selection. |
        | ![outdent](/images/directorymanager/11.0/portal/synchronize/job/outdent.webp)       | Decreases the indenting of the current text selection. |
        | ![comment](/images/directorymanager/11.0/portal/synchronize/job/comment.webp)       | Comments the current text selection.                   |
        | ![uncomment](/images/directorymanager/11.0/portal/synchronize/job/uncomment.webp)   | Uncomments the current text selection.                 |
        | ![uppercase](/images/directorymanager/11.0/portal/synchronize/job/uppercase.webp)   | Converts the current text selection to uppercase.      |
        | ![lowercase](/images/directorymanager/11.0/portal/synchronize/job/lowercase.webp)   | Converts the current text selection to lowercase.      |
        | ![darktheme](/images/directorymanager/11.0/portal/synchronize/job/darktheme.webp)   | Switch the theme of the script editor to dark.         |
        | ![lighttheme](/images/directorymanager/11.0/portal/synchronize/job/lighttheme.webp) | Switch the theme of the script editor to light.        |
        | ![selectall](/images/directorymanager/11.0/portal/synchronize/job/selectall.webp)   | Selects all the text in the editor.                    |

    8. Click **Save** to save the changes made to the script.

5. On the
   [Selected Fields for object types](/docs/directorymanager/11.0/welcome/synchronize/create/selectedfield.md)
   type section, click **Add/Edit Fields**. You can specify the action to take if the data or object
   being exported from the source does not exist at the destination.
6. Use the **Map Field** section to map the source and destination fields and to apply
   transformations:

    1. In the **Key** column, select at least one field to be a unique identifier.

        Do one of the following:

        - [Map Fields](/docs/directorymanager/11.0/welcome/synchronize/create/mappingfield.md)

            In the Source column of each destination item, select the source fields that contribute
            the data for the destination.

        - **Apply a
          [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)**

            In the **Transform** column, click the **More Options** button to open the **Transform**
            [ _field_] dialog box and apply a transformation to the field value before it is saved
            at the destination.

    2. If the source or destination field is multi-valued, set a delimiter from the **Delimiter**
       list.

        This delimiter is used either to separate the values of a multi-valued field at the source,
        or to merge values of a multi-valued field at the destination, depending on the types of
        data sources.

    3. In the **New only** column, select the check boxes for fields to be updated only when
       creating a new object. Fields that are not selected are continually updated. Key fields are
       selected by default as New Only fields as a requirement; you cannot change this selection.

        NOTE: For Microsoft Entra ID objects, primary key fields are:
         (1) UserPrincipleName attribute for “User/Mailbox” object
         (2) DisplayName attribute for “Group” object.

    4. Select **Show field reference** check box to view a list of attributes from the schema of the
       source provider.
    5. Click **Next**.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
