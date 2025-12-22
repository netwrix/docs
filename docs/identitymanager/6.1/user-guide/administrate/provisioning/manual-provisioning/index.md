---
title: "Provision Manually"
description: "Provision Manually"
sidebar_position: 20
---

# Provision Manually

How to use Usercube to manually write to the managed systems.

## Overview

In the lifecycle of a resource (entitlement assignment, resource creation, resource update, etc.),
manual provisioning is used to make humans intervene and act on the external systems, instead of
Usercube.

### Provisioning states

In its lifecycle, an assignment request goes through the following provisioning states:

![Provisioning State Schema](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/provmanual_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems as
write permissions are required.

| Input                                                                                                                                                                                                                                                                                      | Output                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| [Provisioning orders](/docs/identitymanager/6.1/user-guide/administrate/provisioning/provisioning-review/index.md) (required) Manual provisioning [connection](/docs/identitymanager/6.1/user-guide/set-up/connect-system/connection-creation/index.md) (required) | Updated managed systems |

## Implement Manual Provisioning

Manual provisioning is performed through a connection using the
[manual ticket package](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/manual-ticket/index.md).
Besides, for a resource to be manually provisioned, the corresponding resource type must be
configured with the manual connection set to `Provisioning Connection` in the **Fulfill Settings**.

## Perform Manual Provisioning

Perform manual provisioning by proceeding as follows:

1. Ensure that the task to compute or generate provisioning orders was launched after the request
   (or the provisioning review, if any), through the complete job in the **Job Execution** page.

    ![Home Page - Job Execution](/images/identitymanager/6.1/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

    ![Manual Provisioning Screen](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/provmanual_page_v603.webp)

2. Access the manual provisioning orders page by clicking on the entity type that you want to manage
   in the **Manual Provisioning** section.

    ![Home Page - Manual Provisioning](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

3. Choose a line to handle the corresponding provisioning order.
4. Creation, edition and deletion orders follow the same process: read Usercube's suggestions and
   create, edit or delete the appropriate resource directly in the managed system (outside
   Usercube).

    ![Creation Provisioning Order](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/provmanual_createresource_v522.webp)

    ![Creation Provisioning Order](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/provmanual_editresource_v522.webp)

5. Choose to confirm or report an error.

### Use bulk provisioning

Several orders can be provisioned simultaneously by clicking on **Bulk Provision**.

![Bulk Provisioning](/images/identitymanager/6.1/user-guide/administrate/provisioning/manual-provisioning/provmanual_bulk_v603.webp)

## Verify Manual Provisioning

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

    ![Home Page - Directory User](/images/identitymanager/6.1/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the
   [manual assignment workflow](/docs/identitymanager/6.1/user-guide/administrate/manual-assignment-request/index.md)
   to make a change in one of their permissions, which involves manual provisioning.
3. Perform manual provisioning and check the provisioning state of the requested entitlement at
   every step, in the user's **View Permissions** tab.

![View Permissions Tab](/images/identitymanager/6.1/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Check in your managed system that the change was effectively made.
