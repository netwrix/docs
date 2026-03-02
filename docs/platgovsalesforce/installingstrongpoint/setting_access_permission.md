---
title: "Set Access and Permissions"
description: "Set Access and Permissions"
sidebar_position: 60
---

# Set Access and Permissions

Platform Governance for Salesforce access is only granted to system administrations. To extend
access to other users:

1. Open Salesforce **Setup** > **Users** > **Users**

   ![manageusers](/images/platgovsalesforce/installing_strongpoint/manageusers.webp)

2. Click on an existing **User** name.
3. Click **Permission Set Assignments**
4. Click **Edit Assignments**.

   ![editassignments](/images/platgovsalesforce/installing_strongpoint/editassignments.webp)

5. Select **Netwrix Grant Permissions** from the **Available Permission Sets**
6. Click **Add**. It should now be shown in the **Enabled Permission Sets**.
7. Click **Save**.

   ![enablepermissionsets](/images/platgovsalesforce/installing_strongpoint/enablepermissionsets.webp)

The user is ready to view and use Platform Governance for Salesforce.

:::note
The previous image shows additional Permission Sets included in the package. Below is a brief description of each:
   - **Netwrix Administrator**  
   Provides access to Netwrix configuration settings.

   - **Netwrix CR Approval Override**  
   Allows users to approve a Change Request regardless of the current policy.

   - **Netwrix Restricted**  
   A restricted set of permissions required for users who will be making data updates to tracked or controlled objects.
:::