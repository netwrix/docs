---
title: "Rollback"
description: "Rollback"
sidebar_position: 20
---

# Rollback

When deploying changes in a single Salesforce environment, you may find instances where you need to
rollback to a previous state after a deployment. Platform Governance for Salesforce's rollback tool
gives you the flexibility of rolling back all or selected components of your deployment,enabling you
to take action on a specific problem. There are two steps:

- Create the Rollback Record
- Execute and Validate the Rollback

## Create the Rollback Record

The Deployment Record status must be **Completed** to be eligible for Rollback.

1. Open the Deployment Record to rollback. To locate the record, click **Change Requests** and
   change the view to **Deployments**.
2. Click **Rollback**

    ![Rollback button is only available for Completed Deployment Records](/images/platgovsalesforce/release_management/rollback_button.webp)

3. Click **Test Connection** to ensure your credentials are working. If your credentials are not
   correct, you can click on **Save Credentials** and edit.

    ![Rollback selected customizations](/images/platgovsalesforce/release_management/rollback_selected.webp)

4. By default, all of the customizations are selected for rollback. The **Rollback Type** specifies the effect of the rollback:

    - **Delete**: If a customization was created during the deployment, it is deleted during the
      rollback.
    - **Override**: If a customization existed in the target environment and was changed during
      deployment, it is reset to the previous version.

5. Click **Rollback Selected Customizations**. The **Rollback Confirmation** is displayed.

    ![Rollback confirmation](/images/platgovsalesforce/release_management/rollback_confirmation.webp)

6. Click **Yes** to continue. A Rollback Record is created.
7. Click **Submit for Approval** on the Rollback Record.

## Execute and Validate the Rollback

The Rollback Record must be approved before it can be executed.

1. Open the Rollback Record. To locate the record, click **Change Requests** and change the view to
   **Deployments**.
2. Click **Test Connection** to ensure your credentials are working.
3. Click **Execute Rollback**. A Confirmation is displayed. Click **Yes** to continue.
4. When the rollback is complete, click **Validate Rollback**.

    ![Validate the Rollback](/images/platgovsalesforce/release_management/rollback_validation.webp)

5. Open **Netwrix Dashboard** > **Reports** > **Release and Deployment** > **Rollback Logs**
   You can use **Customize** to add the **Status** column to your report. Here is an example of a
   failed rollback [deployment log](/docs/platgovsalesforce/releasemanagement/deployment_logs.md).

    ![Review the Rollback log](/images/platgovsalesforce/release_management/rollback_log.webp)

6. Click on the report to open it. Check the **Notes & Attachments** for a rollback validation file.
