---
title: "Privilege Elevation (aka Helper Policies)"
description: "Privilege Elevation (aka Helper Policies)"
sidebar_position: 80
---

# Privilege Elevation (aka Helper Policies)

:::note
See
[Endpoint Policy Manager LPM for MacOS: Privilege Policies (for Helper Apps)](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/macintegration/privilege.md)
for a video overview of this section.
:::


## Privilege Elevation / Helper Policies Overview

Some applications require special Helper Applications to get installed. In this example, when trying
to install the Xcitium application you can see that it requires admin rights to install its helper
tool.

![helper01](/images/endpointpolicymanager/mac/scenarios/helper01.webp)

## Creating Privilege Elevation / Helper Policies

Use the Endpoint Policy Manager Cloud editor to create a new **Privilege Elevation** policy and
specify the conditions. In real life, you would want the most secure conditions, like matching a
Path (file name), along with a digital signature.

In this test example, we'll use the simplest (least secure) method, which is a filename name with
wildcards.

![helper02](/images/endpointpolicymanager/mac/scenarios/helper02.webp)

Then choose the Action and Additional approve options.

![helper03](/images/endpointpolicymanager/mac/scenarios/helper03.webp)

For now, click **Elevate** with **Not Configured**.

Finish up by providing a Name to the policy and clicking **Finish**.

## Testing your Policy

First synchronize your policies with Endpoint Policy Manager Cloud, using the `policypak cloud-sync`
command.

![helper04](/images/endpointpolicymanager/mac/scenarios/macfinder07.webp)

At this point, if your policies match your application you will be able to overcome the helper
application requesting local admin rights.

![helper05](/images/endpointpolicymanager/mac/scenarios/helper05.webp)

## Understanding Action Types

The three action types on a rule are:

- Deny Execution — Blocks the action for Standard Users and Administrators
- Allow Execution — Performs the action as if the MacOS system were in charge. You can think of this
  as **Not configured**.
- Elevate — Perform the overcome action required to perform the task

## Understanding Additional Approve Types

The three action types on a rule are:

- Not Configured — No additional dialog is presented to the user.
- Confirmation — Request will go through once the user confirms it.
- Reason — User must put in rationale code then before the task is performed.
- Challenge — User must requests an Admin Approval code for the task to be accepted and performed.
  See
  [Endpoint Policy Manager for Mac and Admin Approval](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/macintegration/adminapproval.md)
  for additional information on this topic.
- Credentials — User must re-enter credentials for the task to be performed



