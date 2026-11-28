---
title: "Customize Directory Manager Notification Templates"
description: "Edit the subject line, content, and tags of Directory Manager notification templates in the Notification Editor, in any supported language."
keywords:
  - notification templates
  - Notification Editor
  - notification tags
  - subject line
  - notification language
sidebar_position: 20
---

# Customize Directory Manager Notification Templates

Directory Manager generates notifications for events such as group changes, triggered workflows, and
profile validations that are due for users. The
[Localization](/docs/directorymanager/11.1/gettingstarted.md#localization) topic lists the supported
languages for notifications.

Templates for all Directory Manager notifications are available in each supported language. In each
language, you can customize these parts of a notification template:

- Subject line
- Message (content and format)

By default, Directory Manager sends notifications in English. A user can receive notifications in a
different language by changing the language settings on the **Settings** panel in the Directory
Manager portal.

## Customize a notification template

1. Open the Notification Editor in one of these ways:

   - In Admin Center, click **Notifications** in the left pane. Then click **Notification Editor**
     on the **Notification Queue** page.
   - In Admin Center, click **Notification Editor** at the bottom of the left navigation pane.

   The editor lists all notifications that Directory Manager generates. Notification names appear
   in English, regardless of the language you select.

2. Optional: Select another language. English (United States) is selected by default, so you view
   and customize the English templates. To set another language:

   1. Click **Filter**.
   2. On the **Filters** dialog box, select a language in the **Locality** dropdown list. This list
      shows the ISO codes of the supported languages.
   3. Click **Apply**.

3. Optional: Search for a notification template with these filters:

   - Select an event in the **Categories** list to list the notifications for that event.
   - Enter a search string in the search box at the top and press **Enter**. The editor lists the
     templates whose name or description contains the string. You can also search for a template by
     its name.

4. In the **Actions** column, click **Open** for the notification template you want to edit.
5. Select a mode to view the template:

   - **Source Code**: Click the **Source Code** tab to view and edit the template in the HTML
     editor.
   - **Interactive**: Click the **Interactive** tab to view the template in a user-friendly format.
     This is how the notification appears to recipients. You can't format or edit the template in
     this view.

6. Customize the notification template in any of these ways:

   - Change the subject line
   - Edit and format the content
   - Replace the tags

7. After you save your changes, click **Go Back** to return to the Notification Editor.

### Change the subject line

1. In the Source Code view, click the **Title** tile.
2. In the **Edit Title** dialog box, change the subject line of the notification and click
   **Update**.
3. Click **Save** on the menu bar.

### Edit and format the content

In the Source Code view, you can do the following:

- Control the notification format. Use HTML tags to format heading styles, change the font and font
  size, change text alignment, and more.
- Change the message content.
- Replace the tags with other relevant tags. A tag displays an attribute’s value in the
  notification.

:::note
Don't insert tables or custom photos in a notification template.
:::

After you make your changes, click **Save** on the menu bar.

The Source Code view uses the same editor that powers Microsoft Visual Studio, so these options are
also available:

- Use the page navigator in the top right corner of the Source Code view to scroll through the
  content. The navigator has sections that let you jump to the beginning, middle, and end of the
  source code.
- Use the options on the **Edit** menu to search for target text (a word, phrase, or tag), cut or
  copy the selected text, and redo or undo an operation. You can also insert the current date and
  time in the template.

### Replace the tags

In a notification template, a variable is followed by an attribute name and enclosed in percentage
signs. It displays that attribute’s value in the notification. For example,
%TARGETOBJECT_DisplayName% resolves to the display name of the targetobject, and %REQUESTER_mail%
shows the email address of the requester.

**To replace a tag:**

1. In the Source Code view, click the **Dictionary** tile to view the recommended tags to replace
   the default tags with.

   ![Tag dictionary listing the recommended tags for a notification template](/images/directorymanager/11.1/admincenter/notification/tagdictionary.webp)

   Each notification template has its own set of recommended tags.

2. On the **Edit** menu, use the **Go To** option to search for the tag you want to replace. Check
   the tag dictionary to see which tags the notification uses.
3. After you replace a tag in the template, click **Save** on the menu bar.

#### Complete list of tags

The following table lists all tags for object attributes. Don't use other tags. A tag displays an
attribute's value in the notification.

|     | Variable         | Description                                                                                                                       |
| --- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | TARGETOBJECT     | Can be any object (user/group/contact) that is under consideration in a notification                                              |
| 2.  | REQUESTER        | The user object who makes a workflow request                                                                                      |
| 3.  | APPROVER         | The approver in workflow notifications                                                                                            |
| 4.  | ANOTHER_APPROVER | An approver, other than APPROVER, who performs an action on the workflow request (as there can be multiple approvers) |
| 5.  | BEHALFEDPERSON   | The user on whose behalf join/leave requests are made by their manager                                                            |
| 6.  | RECEIVER         | The receiver of a notification                                                                                                    |
| 7.  | AUTHOR           | A user who creates/modifies/deletes an object                                                                                     |
| 8.  | USER             | A user object under consideration in password-related notifications                                                               |
| 9.  | MASTER           | The master account of a user in password-related notifications                                                                    |

#### Complete list of attributes

You can use the following attributes with tags in notification templates. You can also use custom
attributes.

| Attributes            |                                |                             |                        |
| --------------------- | ------------------------------ | --------------------------- | ---------------------- |
| Owner                 | Member                         | MemberOf                    | Manager                |
| Name                  | DisplayName                    | FirstName                   | LastName               |
| Title                 | Company                        | Department                  | City                   |
| Office                | DistinguishedName              | ObjectId                    | ObjectType             |
| Alias                 | SamAccountName                 | EmailAddress                | CommonName             |
| GroupType             | Description                    | ObjectClass                 | ObjectCategory         |
| Telephone             | HomeDataBase                   | TargetAddress               | FaxNumber              |
| LogonName             | DLMemRejectPerms               | ObjectGUID                  | UnauthOrig             |
| AuthOrig              | DLMemSubmitPerms               | DelivContLength             | ExchCoManagedByLink    |
| HideDLMembership      | HideFromAddressLists           | RequireAuthToSendTo         | ReplyToOriginator      |
| UserID                | AdminDescription               | DisplayNamePrintable        | ReportToOwner          |
| ObjectSid             | ReportToOriginator             | HierarchicalSearchPostfix   | TokenGroups            |
| Info                  | ManagerCanUpdateMembershipList | Container                   | ThumbnailPhoto         |
| Password              | ThumbnailLogo                  | DirectReports               | JpegPhoto              |
| PasswordLastSet       | UserPasswordExpirationDate     | IsCriticalSystemObject      | UserAccountControl     |
| ModifyTimeStamp       | CreateTimeStamp                | GroupTypeLocal              | GroupTypeGlobal        |
| GroupTypeSecurity     | GroupTypeUniversal             | GroupTypeDistribution       | GroupScope             |
| SimpleDisplayName     | MsExchRequireAuthToSendTo      | ExpansionServerName         | OOFReplyToOriginator   |
| Notes                 | Country                        | State                       | Street                 |
| HomeMDB               | Exchange2010AdditionalOwners   | ProxyAddresses              | DynamicDLFilter        |
| GroupClassName        | ComputerClassName              | ContactClassName            | UserClassName          |
| DatabaseMoniker       | GroupTypeUniversalSecurity     | GroupTypeGlobalSecurity     | PublicFolderClassName  |
| AccountExpires        | GroupTypeUniversalDistribution | GroupTypeLocalDistribution  | GroupTypeLocalSecurity |
| IsDeleted             | GroupTypeLocalSecurity_Builtin | GroupTypeGlobalDistribution | AccountDisabled        |
| LastLogon             | PrimaryGroupToken              | PrimaryGroupId              | SubscribeByMail        |
| AdPublicDelgateRights | UserPrincipleName              |                             |                        |
