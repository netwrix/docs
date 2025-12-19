---
title: "Setting Up Multi-Stream Approval"
description: "Setting Up Multi-Stream Approval"
sidebar_position: 60
---

# Setting Up Multi-Stream Approval

This process enables an administrator to select approvers other than the IT Approvers outlined on
the Policy. The administrator selects the approvers in the order they will approve the request. The
process owner is the final approver. This differs from selecting Additional Approvers from the
Change Request, where the mandated approvers are included.

## Configure Multi-Stream Approval

1. Create a Process Record.
2. Create a new Policy Record.
3. Attach the new Process Record.
4. Create a Change Request using the new policy.

### Create a Process Record

1. Open **Strongpoint** > **Manage Processes** > **Process** > **New**
2. Enter the **Name** and **Owner** for the process. For this example, the name is **Provision
   Multi-Stream Approval**.
3. **Custom Form** and **Step Type** should be set to **Process**.
4. Ctrl-Click to select one or more **Additional Approvers**. NOTE: Select the additional approvers
   in the order you want them to approve.

    ![multi_stream_new_process](/images/platgovnetsuite/change_management/multi_stream_new_process.webp)

5. Click **Save**. Note the approvers are listed in the order selected, not the order they appeared
   in the list. If you need to reorder the approvers, **Edit** the record, de-select and re-select
   the additional approvers.

    ![multi_stream_new_process_save](/images/platgovnetsuite/change_management/multi_stream_new_process_save.webp)

### Create a new Policy Record

1. Open **Strongpoint** > **Change Management Tools** > **Change / Approval Policy** > **New**
2. Enter a **Name** and **Owner** for the Policy. For this example the name is **Process Approvers
   Only**.
3. Set the Change Levels on the **Change Controls** tab.
4. Leave the fields blank on the **IT Policies** tab.
5. Make sure **Require Affected Process Approval** is selected on the **Process Policies** tab.
6. Click **Save**. Leave the new policy open and continue with the next steps.

    ![multi_stream_new_policy](/images/platgovnetsuite/change_management/multi_stream_new_policy.webp)

### Attach the new Process Record

1. Set **View** to **Strongpoint View** on the **Process Policies** tab.
2. Select the **Process** you created. For this example, it is **Provision Multi-Stream Approval**.

    ![multi_stream_attach](/images/platgovnetsuite/change_management/multi_stream_attach.webp)

3. Click **Attach**. The process is now shown on the **Process Policies** tab.

    ![multi_stream_attach_result](/images/platgovnetsuite/change_management/multi_stream_attach_result.webp)

### Create a Change Request

1. Open **Strongpoint** > **Change Management Tools** > **New ITGC Change Request**
2. Enter a **Name** and **Change Overview** for the Change Request. For this example the name is
   **Sample Change Request - Multi-Stream Approval**.
3. Select the affected process. For this example it is **Provision Multi-Stream Approval**.
4. Click **Pending Approval** in the status bar when complete.
