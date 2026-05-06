---
title: "Multiple Environment Deployment Tracking"
description: "Multiple Environment Deployment Tracking"
sidebar_position: 50
---

# Multiple Environment Deployment Tracking

Create change requests in your production account so that they aren't lost,
they have an audit trail, and approvals are recorded.

Here is the overall process flow for multiple deployment tracking:

- Create the Change Request
- Push the Change Request
- Push the Updated Change Back into Production
- Create the Deployment Record
- Create the Deployment Record
- Deploy the Changes
- Complete the Process

## Create the Change Request

1. In your Production environment, open **Change Requests** > **New Change Request**
2. Enter the relevant fields, including:

    - **Change Request Name**: Enter a meaningful name.
    - Select the **Change Type**.
    - **Change Overview**: Enter a meaningful description.
    - Add **Customizations**. If you add **Proposed Customizations**, they don't appear on the
      change log because they don't exist in both environments.
    - Add one or more **Additional Approvers**.

3. **Save** the change request.
4. Click **Submit for Approval**

## Push the Change Request

After the change request is approved:

1. Click **Sync CR**.

    ![Sync the Change Request](/images/platgovsalesforce/release_management/push_pull_sync_cr.webp)

2. Choose a **Saved Environment**. (Where you plan on developing/testing solutions and/or
   customizations.)
3. Add your **Credentials**.

    ![Enter your credentials](/images/platgovsalesforce/release_management/push_pull_popup.webp)

4. Click **Test Connection** to ensure your credentials are correct. If your credentials are
   not correct, click **Save Credentials** and edit.
5. Make the necessary changes on your change request in your development/testing environment and
   **Save**.

## Push the Updated Change Back into Production

1. On the updated change request, click **Sync CR**.
2. Choose a **Production** environment.
3. Add your **Credentials**.
4. Click **Test Connection** to ensure your credentials are correct. If your credentials aren't
   correct, click **Save Credentials** and edit.
5. Click **Push**.
6. Click **Push CR**.

![pushcr](/images/platgovsalesforce/release_management/pushcr.webp)

After the push, the Change Request in Production has a related deployment record.

## Create the Deployment Record

1. Open the **Related Lists** tab on your change request.
2. Click **Run Compare Tool**. See
   [Compare Environments](/docs/platgovsalesforce/tools/environment_comparison.md) for instructions.

    ![Run the Compare Environment tool](/images/platgovsalesforce/release_management/apex_enviro_comparison.webp)

3. Click **Deploy** in the change request tool bar. **Deploy** is only available for approved change
   requests.
4. Enter your environments and credentials and **Test Connections**.
5. **Save** the deployment record.
6. Click **Submit for Approval**.

## Deploy the Changes

These steps can be completed after the deployment record is approved.

1. Open **Change Requests** and select the approved deployment record.
2. Click **Deploy Changes**

    ![Deploy the Approved Changes](/images/platgovsalesforce/release_management/deployment_tool-2.webp)

3. Click **Retrieve Selected Customizations**

    ![Retrieve the Selected Customizations](/images/platgovsalesforce/release_management/deployment_tool-3.webp)

    This creates a package to:

    - **Check Dependencies**: Use to check what has been referenced.
    - **Validate Customizations**: Use to check the deployment before it runs. It simulates your
      deployment.
    - **Deploy Retrieved Customizations**: Use to deploy your customizations when you are ready to
      proceed.

4. Check your dependencies and validate your customizations.
5. Click **Deploy Retrieved Customizations** to start the deployment. This can take some time because
   it runs the test cases into the target environment.

    ![Run the Deployment](/images/platgovsalesforce/release_management/deployment_tool-4.webp)

6. Run the Compare Tool to verify all changes moved correctly.

## Complete the Process

When the deployment process is finished:

1. Check the [Deployment Logs](/docs/platgovsalesforce/releasemanagement/deployment_logs.md).
2. Fix any errors and repeat the deployment if needed.
3. After the deployment is successful, open the change request and set the status to **Completed**.

    ![Complete the Process](/images/platgovsalesforce/release_management/deployment_tool-5.webp)
