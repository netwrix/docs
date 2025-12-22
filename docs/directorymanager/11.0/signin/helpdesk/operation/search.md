---
title: "Search Users"
description: "Search Users"
sidebar_position: 30
---

# Search Users

Helpdesk users can search for users in specific identity store(s) or all identity stores defined in
GroupID. A search filter is also available to help you narrow down your search results.

What do you want to do?

- [Perform a Search](#perform-a-search)

## Perform a Search

1. In Admin Center, click **Helpdesk** in the left pane.
2. The **Helpdesk** page opens to the **Helpdesk Operations** tab. It lists all users from all
   identity stores in GroupID (notice that _All_ is displayed in the **Identity store** box).
3. Use the following options to filter users:

    - **Identity store box** - To get users from one or specific identity stores, click in the
      **Identity store** box and select the check boxes for the identity stores you want to fetch
      users from.
    - **Search Users box** - Enter a search text and press _Enter_. Users with the first names, last
      names, or email addresses matching the text are filtered and displayed.
    - **Search filter** - You can also search users based on enrollment. Click **Filter(s)**. The
      **Filter(s)** dialog box is displayed with the following options:

        - **Enrolled with:** click in the box and select the authentication type(s) to restrict
          search to users enrolled with any of those authentication types.
        - **Not Enrolled with:** click in the box and select the authentication type(s) to restrict
          search to users not enrolled with any of those authentication types.
        - Click **Apply**. Users matching the given criteria get listed.

#### View Users' Information

For a user, the following information is displayed:

- **Name:** the display name of the user.
- **Store:** the name of the identity store and the domain the user resides in.
- **Is Locked:** displays whether the user account is locked or not.
- **Password Expires On:** the date when the user account password will expire. If the password is
  set to _Never Expire_, then _Never Expires_ is displayed here.
- **Last Password Set:** the time since the user last changed their password, for example, 'one year
  ago'. For users who never changed their passwords, _Never_ is displayed.
- **Enrolled With:** the authentication types used to enroll the account in the identity store. For
  users who have not enrolled their accounts, _Not Enrolled_ is displayed.

Use the pagination options at the bottom of the listing to navigate through records.

Click the ellipsis button for a user to perform any of these actions:

- Reset password
- Unlock account
- Send enrollment reminder
- Unenroll account

**See Also**

- [Helpdesk](/docs/directorymanager/11.0/signin/helpdesk/overview.md)
- [Helpdesk Operations](/docs/directorymanager/11.0/signin/helpdesk/operation/overview.md)
