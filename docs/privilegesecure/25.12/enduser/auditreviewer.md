---
title: "Audit and Reporting: Reviewer"
description: "Review access entitlements for an access certification task, approve or deny them, and commit the changes to user access."
sidebar_position: 50
---

# Audit and Reporting: Reviewer

## Review entitlements

Only the **assigned reviewer** for an access certification task can modify the access entitlements.
To review and modify access entitlements for users and groups in the selected
access certification task.

1. Navigate to **Audit and Reporting**. Any pending reviews are waiting.
2. In the Access Certification Task list, select the name of the task and select the
   **Entitlements** tab.
3. Click **Review** to open the **Review Activity Details** window.

   ![Review Entitlements window](/images/privilegesecure/25.12/accessmanagement/admin/auditreporting/tab/reviewentitlementswindow.webp)

   The Review Activity Details window has the following features:

   - **Search** — Searches the table or list for matches to the search string. When the search finds
     matches, it filters the table or list to the matching results.
   - You can sort the columns in ascending or descending order:
     - **Checkbox** — Check to select activities to modify
     - **Status** — Shows status information on the user’s access:
       - **Requested** — Review of access initiated
       - **Approved** — Existing access is approved
       - **Denied** — Access is removed for that specific user/resource/permission

       :::note
       The user isn't removed from the access policy. Instead, Privilege Secure sets a ‘deny flag’
       against that attribute so that you can re-enable it in the future.
       :::

     - **Name** — Displays the name of the account
     - **Resource** — Name of the resource
     - **Activity** — Displays the name of the activity
     - **Credential** — The credential the activity has permission to release by the access policy
     - **Permissions** — The permissions granted by the access policy
     - **Access Policy** — Displays the name of the policy
     - **Connection Profile** — Displays the name of the connection profile associated to the access
       policy
     - **Last Accessed** — The last time the activity was used

4. To approve access, select the applicable rows and click **Approve**.
5. To remove access, select the applicable rows and click **Deny**.

   :::note
   The user isn't removed from the access policy. Instead, Privilege Secure sets a ‘deny flag’
   against that attribute so that you can re-enable it in the future.
   :::

6. When you finish reviewing the entitlements, click **Close**. Privilege Secure saves the changes
   to the selected access certification task and shows them on the Entitlements Tab for Access
   Certification.

   :::note
   You don't need to review all entitlements at once. Privilege Secure saves changes to the
   selected access certification task automatically, and you can return to it at any time (the
   Status shows as Incomplete).
   :::

   :::warning
   You can't undo committed changes. Instead, create a new access certification task.
   Alternatively, you can manually reassign users to an access policy.
   :::

7. When you've reviewed all entitlements, the **Commit** button becomes available. Click
   **Commit** to save the changes to user access.

After you commit the changes, the export button becomes available. You can export the table to
CSV. The status of the access certification task changes to Complete. After you review the access
entitlements, you can't delete the task.
