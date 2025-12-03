---
title: "Access Certification Page"
description: "Access Certification Page"
sidebar_position: 10
---

# Access Certification Page

On the Access Certification page, create or review access certification tasks to audit and remediate
user access. Only User(s) / group member(s) assigned the Admin Role can create access certification
tasks. User(s) / group member(s) with the Reviewer role will see the access certification task(s)
assigned to them here.

![Access Certification Page](/images/privilegesecure/25.12/accessmanagement/admin/auditreporting/page/page.webp)

On the left of the page, the Access Certification Task list shows the different access certification
tasks and has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add Access Cert. Task icon – Add an access certification task to the list. See the
  [Add Access Certification Task](/docs/privilegesecure/25.12/admin/AuditReporting/accesscertification/accesscertificationtask.md) topic for additional
  information.
- List of access certification tasks – Select a task from the list to view and edit settings:

    - Status – Shows status information for the task

        - Setup – Admin is in the process of creating an access certification task. It is not
          visible to the reviewer in this state
        - Ready to Start – Waiting for the reviewer to review the task
        - Incomplete – Review of user access started by the reviewer
        - Complete – Activity either reached the end of its scheduled end time or was canceled early
          by the requestor.

    - Delete icon – Remove the selected access certification task from the console (A confirmation
      window will display)

The right of the page shows details of the selected access certification task and has the following
features:

- Name – Displays the name of the task.
- Description – (Optional)Description of the policy.
- Reviewer – The reviewer that the access certification task is assigned to. Only users with the
  Reviewer role can be assigned as a reviewer. See the
  [Role Management Page](/docs/privilegesecure/25.12/admin/interface/usersgroups/rolemanagement/rolemanagement.md) topic for additional information
- Status – Shows status information for the task
- Date Started (only visible once review is started) – Date the reviewer begins to review the access
  entitlements
- Date Completed – Date the reviewer finished reviewing the access elements
- [Users Tab for Access Certification](/docs/privilegesecure/25.12/admin/AuditReporting/accesscertification/users.md)
- [Entitlements Tab for Access Certification](/docs/privilegesecure/25.12/admin/AuditReporting/accesscertification/entitlements.md)
