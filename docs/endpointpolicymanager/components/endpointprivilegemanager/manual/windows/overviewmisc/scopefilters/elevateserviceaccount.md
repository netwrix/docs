---
title: "Scenario 4: Elevating a Service Account"
description: "Scenario 4: Elevating a Service Account"
sidebar_position: 50
---

# Scenario 4: Elevating a Service Account

:::note
For an overview of this scenario see the
[Reduce or specify Service Account Rights](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/serviceaccountrights.md)
video.
:::


You might have a service which requires specific privileges. Maybe your service, by default, uses
Local System, and you want to give it lessrights.

With Endpoint Policy Manager
[Reduce or specify Service Account Rights](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/serviceaccountrights.md),
you can remove the powerful privileges of the service account and strip out LOCAL SYSTEM and grant a
specific user the permissions required.

If you want a process to be run via special user account, you need to do the following:

**Step 1 –** Make a rule for an .exe from which the service runs.

We recommend to make a File Info + Signature rule, but PATH rules would work as well, e.g.
`C:\Program Files\AppABC \AppService.exe`

**Step 2 –** On the Actions page select **Run with custom token** and configure the TOKEN and/or
exact PRIVILEGES the process needs, like Load Driver Privilege (SeLoadDriverPrivilege), orBypass
Traverse Checking (SeChangeNotify).

**Step 3 –** On the final page select **Scope** > **User and System Processes**. **Scope Filter**
should be trimmed to the specific account you specified to run the service runs as.

Tip: It's also possible to use Scope Filter = SERVICES to make the rule apply to all services that
run from the specified .exe, regardless of the user.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_4_elevating_a_service.webp)



