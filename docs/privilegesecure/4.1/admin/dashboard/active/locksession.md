---
title: "Lock Session"
description: "Lock Session"
sidebar_position: 50
---

# Lock Session

It is possible to lock out the user in the event that suspicious or unauthorized activity is
observed, either from the
[Active Dashboard](/docs/privilegesecure/4.1/admin/dashboard/active/active.md),
or the
[Live Session Viewer Window](/docs/privilegesecure/4.1/admin/dashboard/active/liveviewer.md).

Follow the steps to lock a session.

**Step 1 –** Navigate to either the **Active dashboard** or the **Live Session Viewer**.

- From the Active Dashboard, select the session and click **Lock Activity**.

    - OR -

- From the Live Session Viewer, click the **lock** icon.

![Lock User Session](/images/privilegesecure/4.1/accessmanagement/admin/dashboard/window/locksession.webp)

**Step 2 –** In the Lock Session window, enter the following information:

- Lock Title – The title of the message displayed to the session user
- Lock Message – The message displayed to the session user
- Prevent User From:
    - Opening New Activities on this Resource – Prevent user from opening new activity to this
      resource while locked.
    - Any Further Activity on this Resource – Lock all sessions and prevent the user from any
      further activity while locked. The Users & Groups Details page for the user will indicate that
      the account is locked.

**Step 3 –** Click **Okay** to confirm.

The session is locked and the Lock Session message is displayed to the session user within their RDP
or SSH clients. To unlock an active session, either:

- From the Active Dashboard, select the session and click **Unlock Activity**.

    - OR -

- From the Live Session Viewer, click the **Unlock** icon.

To unlock an account, see the
[User, Group, & Application Details Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md)
topic for additional information.
