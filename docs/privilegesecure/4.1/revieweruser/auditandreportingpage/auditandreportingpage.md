---
title: "Audit and Reporting Page"
description: "Audit and Reporting Page"
sidebar_position: 50
---

# Audit and Reporting Page

The Audit and Reporting interface provides auditing and reporting tools to interrogate all logged
activity data in the Privilege Secure Console. This topic explains the interface features and how to
use them.

![Audit and Reporting Interface](/images/privilegesecure/4.1/accessmanagement/revieweruser/auditreporting/auditandreportingdashboard.webp)

Click on the assigned task to see the details for the activities ready for review.

## Access Certification

On the Access Certification page, create or review access certification tasks to audit and remediate
user access. User(s) / group member(s) with the Reviewer role will see the access certification
task(s) assigned to them here.

![Access Certification](/images/privilegesecure/4.1/accessmanagement/revieweruser/auditreporting/accesscertification.webp)

On the left of the page, the Access Certification Task list shows the different access certification
tasks and has the following features:

- Search – Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- – Select a task from the list to view and edit settings:

    - Status – Shows status information for task:

        - Setup – Admin is in the process of creating an access certification task. It is not
          visible to the reviewer in this state
        - Ready to Start – Waiting for the reviewer to review the task
        - Incomplete – Review of user access started by the reviewer
        - Complete – Review of user access is completed and the changes have been committed. The
          task can cannot be deleted when in this state.

The right of the page shows details of the selected access certification task and has the following
features:

- Name – Name of the selected access certification task
- Description – (Optional) A brief description of the selected access policy
- Date Started (only visible once review is started) – Date the reviewer begins to review the access
  entitlements
- See the
  [Entitlements](/docs/privilegesecure/4.1/revieweruser/auditandreportingpage/entitlement.md)
  topic for additional information
