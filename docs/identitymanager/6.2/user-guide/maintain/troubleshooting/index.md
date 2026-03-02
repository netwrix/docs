---
title: "Troubleshoot"
description: "Troubleshoot"
sidebar_position: 20
---

# Troubleshoot

How to troubleshoot Identity Manager when facing technical issues.

## Overview

Daily technical issues can lead to some unexpected results in Identity Manager. This page is meant
to give some clues and use cases in order to solve usual issues.

> For example, the issues described below can happen when there is a network cut, or an application
> IP address is being changed, or an important password is being modified.

See the
[Troubleshoot Connector Jobs](/docs/identitymanager/6.2/integration-guide/tasks-jobs/troubleshoot-connector-jobs/index.md)
troubleshooting instructions concerning connector jobs.

### Prerequisites

In order to troubleshoot Identity Manager efficiently, the user, usually an application
administrator, must have access to:

- the connector screens, especially the jobs available there;

    ![Connector Jobs](/images/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_connectorjobs_v603.webp)

- the resource screens (identities, accounts, etc.) with their data, and especially their history
  and sources;

    ![User Data](/images/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_userdata_v603.webp)

- basic workflows, for example the usual helpdesk workflow, that give access to users' entitlements
  and enable data modification and repair.

    ![Helpdesk Workflow](/images/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_helpdesk_v603.webp)

## Participants and Artifacts

Here integrators give way to managers to handle the solution by themselves.

| Input                                                                         | Output              |
| ----------------------------------------------------------------------------- | ------------------- |
| [Implement Identity Manager](/docs/identitymanager/6.2/user-guide/deploy/implementation/index.md) (required) | Working environment |

## Troubleshoot Synchronization Issues

### Errored export task

If the export task ends with an error, then you should:

- check the task's logs;
- check the export files' dates in the `Temp/ExportOutput` folder;
- if there was an external problem, then relaunch the export in complete mode.

### Missing data after incremental synchronization

If the data is incomplete after incremental synchronization, then you should relaunch
synchronization in complete mode.

Netwrix Identity Manager (formerly Usercube) recommends scheduling an incremental synchronization
approximately every 15 minutes, and a complete synchronization once a day.

### Exceeded thresholds

If a synchronization threshold is exceeded, then check whether the threshold is legitimate. If not,
it means that the warning comes from a change in the managed system, so you should fix the data
directly in the managed system.

See more details on [Synchronize Data](/docs/identitymanager/6.2/user-guide/set-up/synchronization/index.md) thresholds.

## Troubleshoot Provisioning Issues

### Blocked provisioning orders

If provisioning orders are blocked while expected to be automatic, it can come from:

- the **Require Provisioning Review** option being enabled in the related resource type;
- the role model being computed through the
  [Compute Role Model Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)
  or the corresponding executable, with the block provisioning option;
- a provisioning order being already blocked for the same resource due to a prior operation;
- a correlation/classification rule with a confidence rate below 100%, which means that either
  important data is missing or the rule is not right.

**Verify:** After debugging the blocked-order situation, the related blocked orders must be reviewed
on the **Provisioning Review** screen to be unblocked.

### Errored provisioning orders

> For example, consider a provisioning task supposed to delete 150 accounts, while the relevant
> service account does not have the relevant writing rights. Thus it ends up with 150 errored
> provisioning orders.

If provisioning orders end up with an error, then you should check the errors' details in
**Provisioning Review** to determine where the error comes from.

**Verify:** After debugging the errored-order situation, unblock one provisioning order and relaunch
provisioning to make sure the fix gives the expected result. Only then, unblock all related errored
orders and relaunch provisioning.

If the error comes from miscalculated properties, for example missing parent dn or duplicated
logins, then you should review scalar and/or query rules.

**Verify:** After debugging the situation, recompute the role model for only one user to make sure
the fix gives the expected result. Only then, recompute the role model for all users through the
**Compute Role Model** job of connector screens.

To recompute the role model for only one user, you can use the helpdesk workflow. It will give you
access to the user's entitlements via the workflow's **Access Permissions** step, where you can
check the changes without having to validate.

### Incorrect provisioned values

If provisioning orders produce incorrect values, then it can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

    **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
    the changes for only one user to make sure the fix gives the expected result. Only then,
    recompute the role model for all users through the **Compute Role Model** job of connector
    screens. See more details on how to use the Troubleshoot workflow for debug purposes.

> For example, if identity data has changed and HR data has not, then it must come from the rules.

### Exceeded thresholds

If a provisioning threshold is exceeded, then check whether the threshold is legitimate. If not, it
means that the warning can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

    **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
    the changes for only one user to make sure the fix gives the expected result. Only then,
    recompute the role model for all users through the **Compute Role Model** job of connector
    screens. See more details on how to use the helpdesk Troubleshoot workflow for debug purposes.

## Troubleshoot Entitlement Issues

If users have unexpected entitlements, then you should click on an entitlement and/or access
**Workflow Overview** to see the entitlements' details, for example who requested them, etc.
