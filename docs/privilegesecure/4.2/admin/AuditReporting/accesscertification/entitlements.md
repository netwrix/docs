---
title: "Entitlements Tab for Access Certification"
description: "Entitlements Tab for Access Certification"
sidebar_position: 20
---

# Entitlements Tab for Access Certification

The Entitlements tab shows the activities associated with the users in the selected access
certification task.

![entitlementstab](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/tab/entitlementstab.webp)

The Entitlements table has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Column headers can be resized and sorted by ascending or descending order:

    - Status – Shows status information on the user’s access:

        - Requested – Review of access initiated
        - Approved – Existing access is approved
        - Denied – Access is removed for that specific user/resource/permission

            :::note
            The user is not removed from the access policy. Instead, a ‘deny flag’ is set
            against that attribute so that it can be re-enabled in the future.
            :::


    - User Name – Displays the name of the account
    - Resource – Name of the resource
    - Activity – The name of the credential permitted to be released by the access policy
    - Credential – The credential the activity has permission to release by the access policy
    - Permissions – The permissions granted by the access policy

- The entitlements tab has three buttons:

    - Review (only enabled for the reviewer) – Opens the Review Activity Details window. See the
      Review Entitlements topic for additional information.
    - Commit (only enabled when all access has been reviewed) – Commits the modified access. Once
      the entitlements are committed, no further changes can be made and the task cannot be deleted.
    - Export Entitlements as CSV (only enabled when changes have been committed) – Export activity
      details as CSV

## Review Entitlements

Only the assigned reviewer for an access certification task can modify the access entitlements.
Follow the steps to review and modify access entitlements for users and groups in the selected
access certification task.

**Step 1 –** Navigate to the Audit and Reporting > Access Certification page.

**Step 2 –** In the Access Certification Task list, select the name of the task and select the
Entitlements tab.

**Step 3 –** Click Review to open the Review Activity Details window.

![Review Entitlements window](/images/privilegesecure/4.2/accessmanagement/admin/auditreporting/tab/reviewentitlementswindow.webp)

The Review Activity Details window has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Column headers can be sorted in ascending or descending order:

    - Checkbox – Check to select activities to modify
    - Status – Shows status information on the user’s access:

        - Requested – Review of access initiated
        - Approved – Existing access is approved
        - Denied – Access is removed for that specific user/resource/permission

            :::note
            The user is not removed from the access policy. Instead, a ‘deny flag’ is set
            against that attribute so that it can be re-enabled in the future.
            :::


    - Name – Displays the name of the account
    - Resource – Name of the resource
    - Activity – Displays the name of the activity
    - Credential – The credential the activity has permission to release by the access policy
    - Permissions – The permissions granted by the access policy
    - Access Policy – Displays the name of the policy
    - Connection Profile – Displays the name of the connection profile associated to the access
      policy
    - Last Accessed – The last time the activity was used

**Step 4 –** To approve access, select the applicable row(s) and click Approve.

**Step 5 –** To remove access, select the applicable row(s) and click Deny.

:::note
The user is not removed from the access policy. Instead, a ‘deny flag’ is set against that
attribute so that it can be re-enabled in the future.
:::


**Step 6 –** When the entitlements have been reviewed, click Close. Changes are saved to the
selected access certification task and shown on the Entitlements Tab for Access Certification.

:::note
It is not necessary to review all entitlements at once. Changes are automatically saved to
the selected access certification task and can be returned to at any time (the Status will show as
Incomplete).
:::


:::warning
Committed changes cannot be undone. A new access certification task must be created.
Alternatively, it is possible to manually reassign users to an access policy.
:::


**Step 7 –** When all entitlements have been reviewed, the Commit button is enabled. Click Commit to
save the changes to user access.

When the changes have been committed, the export button is enabled. Export the table to CSV if
desired. The status of the access certification task will change to Complete. Now that the access
entitlements have been reviewed, the task cannot be deleted.
