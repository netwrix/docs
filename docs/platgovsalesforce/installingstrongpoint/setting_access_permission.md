---
title: "Set Access and Permissions"
description: "Set Access and Permissions"
sidebar_position: 60
---

# Set Access and Permissions

By default, Platform Governance for Salesforce grants access only to system administrators. To extend
access to other users:

1. Open Salesforce **Setup** > **Users** > **Users**

   ![manageusers](/images/platgovsalesforce/installing_strongpoint/manageusers.webp)

2. Click an existing **User** name.
3. Click **Permission Set Assignments**
4. Click **Edit Assignments**.

   ![editassignments](/images/platgovsalesforce/installing_strongpoint/editassignments.webp)

5. Select **Netwrix Grant Permissions** from the **Available Permission Sets**
6. Click **Add**. The permission set now appears in the **Enabled Permission Sets** list.
7. Click **Save**.

   ![enablepermissionsets](/images/platgovsalesforce/installing_strongpoint/enablepermissionsets.webp)

The user is ready to view and use Platform Governance for Salesforce.

:::note
The previous image shows additional Permission Sets included in the package. The following is a brief description of each:
   - **Netwrix Administrator**  
   Provides access to Netwrix configuration settings.

   - **Netwrix CR Approval Override**  
   Users with this permission set can approve a Change Request regardless of the current policy.

   - **Netwrix Restricted**  
   A restricted set of permissions required for users who make data updates to tracked or controlled objects.
:::