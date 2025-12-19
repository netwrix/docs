---
title: "Approving Policy Changes"
description: "Approving Policy Changes"
sidebar_position: 50
---

# Approving Policy Changes

1. Open **Strongpoint** > **Change Management Tools** > **Policy Change Approval (Beta)
   ![policy_approval_new](/images/platgovnetsuite/change_management/policy_approval_new.webp)**
2. Enter information into the required **Name**, **Change Overview** and **Policies** fields.
   **Change Type** is preset to **Policy Change Approval**.
3. Click **In Progress** on the status bar.
4. Click **Save**.
5. Review the approvers. Click **Edit** to add or change approvers. An administrator can add
   themselves as an additional approver and set the Approval Status to Approved to immediately
   approve the request. The status bar shows **Approved (Override)**.

    ![change_request_bar_approved_override](/images/platgovnetsuite/change_management/change_request_bar_approved_override.webp)

6. Click **Pending Approval** to begin the normal approval process. Approvers must be
   [licensed](/docs/platgovnetsuite/installation/license_manager.md) Platform Governance for NetSuite users
   and have the correct [role permissions](/docs/platgovnetsuite/installation/setting_permissions.md) if they
   are using a custom (non-Strongpoint) role.
7. Approvers can use the link in the email notification to **Approve** or **Reject** the Policy
   Change.

    - Rejected changes can be edited and resubmitted. Click **In Progress** (hover over the status
      bar), make your changes, and click **Pending Approval**.
    - Click **Deploy** to deploy approved changes. When finished, click **Complete**.
