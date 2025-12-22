---
title: "Example: Walkthrough Sample Changes"
description: "Example: Walkthrough Sample Changes"
sidebar_position: 160
---

# Example: Walkthrough Sample Changes

## New Object Compliant Change with a Change Request

1. Open **Strongpoint** > **Change Management Tools** > **Change Request** > **New**
2. Enter a **Name** and **Change Overview**.
3. Click **Lookup Customization**. Enter a sample **Name** and set **Type** to **Entity Field**.
4. Click **Add Selected Customization** to add the field as a proposed customization.
5. Click **In Progress** in the status bar.
6. Click **Save**. The Change Level Required, Current Stage and Change Policy are displayed.
7. For this example:

    If you are not an **Approver**:

    1. Click **Edit**.
    2. Select yourself as an **Additional Approver**.
    3. Set **Approval Status** to **Approved**.
    4. Select yourself as **Approved By**.
    5. Click **Save**. The status bar indicates **Approved (Override)**.

    If you are an **Approver**:

    1. Click **Pending Approval** in the status bar.
    2. Approve and Reject buttons appear for approvers. Click **Approve**.
    3. The status bar indicates **Approved**.

## Create the Entity Field

1. Open **Strongpoint** > **Customizations** > **Customization** > **New**
2. Add the **Name** of your proposed entity field customization.
3. Select **Entity Field** for **Type**.
4. Click **Save**.
5. Open the **Change Log** tab to view the change.
6. Check **Customer** on the **Applies To** tab.
7. Open **Strongpoint** > **Change Management Tools** > **Change Request**
8. Select your **Change Request** from the list.
9. Click **Respider Now**.

## Create a Compliant Change with a Change Request

1. Change the \_**\_Entity Field\_\_** (for example, apply it to **Vendor**) and click **Save**.
2. Open the Customization Record.
3. Click **ReSpider Now**.
4. Open the **Change Log** tab to see the changes.
5. Open the Change Request and click **Complete** in the status bar.

## Create a Non-Compliant Change

This change will be flagged as non-compliant and appear on the report as **Non-Compliant**.

1. Change the **Entity Field** (for example, apply it to **Project**) and click **Save**.
2. Open the Customization Record.
3. Click **ReSpider Now**.
4. Open the **Change Log** tab to see the changes.
5. Refresh the Changes Without Bundle Search to see that it is marked as Non-Compliant Yes and the
   Reason is Change Request.
6. View the **Change Log**.

## Open the Non-Compliant Changes Report

1. Open **Strongpoint** > **Change Management Reports** > **Open Non-Compliant Changes**
2. Set the **Date Created** to **Today**
3. Resolve and close non-compliant change.
