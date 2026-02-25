---
title: "Reconcile a Role"
description: "Reconcile a Role"
sidebar_position: 10
---

# Reconcile a Role

How to review non-conforming permissions, i.e. approve or decline the role suggestions made by Identity Manager after every synchronization. The aim is to handle the differences between the navigation values from the managed systems **and** those computed by Identity Manager according to the role catalog.

## Overview

Non-conforming roles are considered as non-conforming assignments because no rule from Identity Manager's model can justify their actual assignment to an identity.

### Role reconciliation with property reconciliation

For some managed systems, roles are tightly linked to navigation properties.

> For example, the AD hosts groups dedicated to various applications, **and** a role is assigned through
> group membership. An entitlement can be assigned to an identity by adding said identity's DN to
> the `member` property of the appropriate group. Identity Manager translates it by editing the
> identity's `memberOf` property with the new group.

In this case, when a role is assigned in the managed system without an existing rule that justifies the role, then new items appear on the **Role Reconciliation****and** the **Resource Reconciliation** screens.

> In the case of the AD example, consider that we want to assign a specific role in SAP. Then, we
> find the corresponding group in the AD **and** add the identity's DN to its `member` property.
>
> The result is a new item on the **Role Reconciliation** screen for said SAP role, plus an item on
> the **Resource Reconciliation** screen for the new `memberOf` property for said identity.
>
> If the identity didn't have an AD account yet, then it is automatically created, **and** the item on
> the **Resource Reconciliation** screen displays also a modification of the `accountExpires`
> property.

As roles **and** navigation properties are technically bonded together, their reviews are linked too:

- If the role is reviewed (approved/declined), then the corresponding property is automatically
reconciled accordingly.
- If the property is reviewed (approved/declined), then the corresponding role is automatically
reviewed too, its [Entitlement Assignment](../../../integration-guide/role-assignment/assignments-of-entitlements) workflow state transitioned to `Manual` (if approved) or `Cancellation` (if declined, then a deprovisioning order is sent).

> So let's say we add `Cedric Blanc` to the list of members of the SAP groups `SG_APP_SAP_1` **and**
> `SG_APP_SAP_211`. Then, after the next synchronization, Identity Manager displays one item for
> each role on the **Role Reconciliation** screen, **and** one item for all changes in the AD account on
> the **Resource Reconciliation** screen:
>
> ![Example - Role Reconciliation](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_examplerole_v602.webp)
>
> ![Example - Resource Reconciliation](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresource_v602.webp)
>
> ![Example - Resource Reconciliation - Properties](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresourceprop_v602.webp)

## Participants **and** Artifacts

This operation should be performed in cooperation with managers who know their team's expected entitlements.

 | Input | Output | 
 | --- | --- | 
 | [Provision](../../../user-guide/administrate/provisioning) (required) | Complying roles | 

## Review a Non-conforming Permission

Review a non-conforming permission by proceeding as follows:

1. Ensure that the
[Compute Role Model Task](../../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask) was launched recently, through the complete job on the **Job Execution** page

    ![Home Page - Job Execution](/images/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

Or through the connector's overview page, **Jobs** > **Compute Role Model**.

    ![Resource Type Jobs](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. On the home page, click on the entity type that you want to manage in the **Role Reconciliation**
section, to get to the non-conforming permissions page.

    ![Home Page - Role Reconciliation](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/home_rolereconciliation_v523.webp)

    ![Role Reconciliation Page](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliation_v603.webp)

Each non-conforming permission can be commented by clicking on the corresponding icon.

    ![Comment Icon](/images/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

3. Choose one of the two possibilities to verify the permission:

Contrary to resources, reviewed roles are then displayed on the **Role Review** page accessible from the home page, **and** can be reviewed again.

    - Either click on the approval icon to keep the non-conforming permission.

    ![Approval Icon](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_iconapprove_v602.svg)

    - Or click on the decline icon to delete the non-conforming permission.

    ![Decline Icon](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_icondecline_v522.svg)

4. Trigger provisioning by launching, on the appropriate connector's overview page, **Jobs** >
**Generate Provisioning Orders**, then, after this first task is done, **Jobs** > **Fulfill**. See the [Provision](../../../user-guide/administrate/provisioning) topic for additional information.

    ![Resource Type Jobs](/images/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use bulk provisioning

Several roles can be reconciled simultaneously by clicking on **Bulk Reconcile Roles**.

![Bulk Reconcile Roles](/images/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliationbulk_v603.webp)

## Verify Role Reconciliation

In order to verify the process, check that the changes you ordered appear on the corresponding user's **View Permissions** tab.

![View Permissions Tab](/images/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

