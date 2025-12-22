---
title: "Multi-Environment Change Management"
description: "Multi-Environment Change Management"
sidebar_position: 190
---

# Multi-Environment Change Management

Multi-Environment Change Management helps you manage changes between your Production and
Development/Testing accounts. The design is based on:

- Changes to production accounts go through appropriate development and testing in separate NetSuite
  accounts to ensure that the performance and data in production are not compromised.
- Documenting the process of transitioning changes through these accounts is critical to ensure that
  the process is followed to manage the risks associated with changes in NetSuite.
- Change Requests and Deployment Records, along with Environment Comparison enable the documentation
  and validation of this process to ensure changes are deployed properly and can be reported for
  audits.

:::note
Platform Governance for NetSuite must be deployed on the target environment. You need to have a
least the Strongpoint Developer Role to perform a Change Request Push.
:::

## Create a Master Change Request in Production

A best practice is to create change requests in your production account so that they are not lost,
they have an audit trail and approvals can be shown.

1. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request**.
2. Enter all required fields and additional approver(s).
3. Click Pending Approval. Wait until the Change Request is approved.
4. Open **Strongpoint** > **Change Management Tools** > **ITGC Change Request**.
5. Click **Edit** on the appropriate Change Request.
6. Open the **Sync Tool** tab on the Change Request.
7. Set the **Target** environment (where the Change Request will be pushed).
8. Set the Target login credentials: **Target Email and Target Password**.
9. Set the **Account ID Target** (this is automatically loaded upon selecting Target account).
10. Set the **Account Target Role**.
11. Click **Push**.
    ![push_change_request](/images/platgovnetsuite/change_management/push_change_request.webp)

## Update the Change Request in Testing/Development

1. Open **Strongpoint** > **Change Management Tools** > **Change Request**
2. Click **Edit** on the Change Request that came from Production.

    - Attach **customizations created/updated**.

    ![multi_env_1](/images/platgovnetsuite/change_management/multi_env_1.webp)

    - **Stage**: **Deployment Record**
    - **Set Approval Status**: **Approved** (this is optional)

    ![multi_env_2](/images/platgovnetsuite/change_management/multi_env_2.webp)

3. Open the **Sync Tool** tab.
4. **Push** the updated Change Request back into Production. This adds a related deployment record to the Master Change Request in Production.

## Run Pre-Deployment Environment Comparison

1. Run **Strongpoint** > **Change Management Tools** > **Compare Environments**
2. Enter the login credentials of the **Target** and **Source** Accounts.
3. Set the **Comparison Type** to **Target Newer than Source**.
4. Click the **Compare** button.
   Refer to [Comparing Environments](/docs/platgovnetsuite/changemanagement/comparing_environments.md) for more details.

## Create the Deployment Record

Once you have compared your environments, get the deployment record approved. When your deployment
record is approved, deploy the customizations listed on the change request.

In your Production environment:

1. Open **Strongpoint** > **Change Management Tools** > **Change Request**
2. **Edit** your **master** Change Request.
3. Open **Related Change Records** tab.
4. Open **Change Request** tab.
5. Click **Edit** (deployment record).

    ![multi_env_3](/images/platgovnetsuite/change_management/multi_env_3.webp)

6. Push the Change Request from Production to Development/Testing.
7. Install any customizations in Development/Testing.

## Run Post-Deployment Environment Comparison

1. Run **Strongpoint** > **Change Management Tools** > **Compare Environments**
2. Enter the login credentials of the **Target** and **Source** Accounts.
3. Set the **Comparison Type** to **Target Newer than Source**.
4. Click the **Compare** button.
   Refer to [Comparing Environments](/docs/platgovnetsuite/changemanagement/comparing_environments.md) for more details.

## Completing the Process

If testing fails, continue to update the Change Request on Testing/Development and comparing the
environments until test passes. Once testing passes:

1. Edit the Change Request in Testing/Development.

    - Set **Approval Status**: **Approved**
    - Set **Stage**: **Deployment**

2. Push the Change Request back to Production.
3. Set the (Master) Change Request Status to **Completed**.
