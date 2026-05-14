---
title: "Cohesity SmartFiles"
description: "Add Cohesity SmartFiles"
sidebar_position: 12
---

# Add Cohesity SmartFiles Host

Before adding Cohesity SmartFiles to the Activity Monitor, the prerequisites for the target environment
must be met. See the [Cohesity SmartFiles Activity Auditing Configuration](/docs/activitymonitor/10.0/requirements/activityagent/nas-device-configuration/cohesity-activity.md)
topic for additional information.


**Step 1 –** In the Console, open the **Monitored Hosts/Services** page and select **Add
Host/Service**.

**Step 2 –** Choose the agent that will monitor the Cohesity SmartFiles cluster.

**Step 3 –** Select **Cohesity SmartFiles** and enter the Cohesity cluster name.

**Step 4 –** Specify the API key to access the Cohesity cluster via the API. Use the built-in
instruction to create the API key directly from this step.

**Step 5 –** Specify the account that has SMB access to the `COHESITY_AUDIT_VIEW` audit logs share.

**Step 6 –** Select **Connect** to verify that the product has access to the Cohesity cluster.

**Step 7 –** Select the views to monitor. If the list is left empty, the product monitors all
views that have auditing enabled.

**Step 8 –** Select **Enable Audit Log option for specified views** if you want the product to
automatically enable auditing for all views in the monitoring scope.

**Step 9 –** Complete the wizard by selecting the required operations and outputs.

:::warning
Audit log events from Cohesity SmartFiles may be delayed. Events can appear with a latency ranging
from a few minutes up to an hour.

This delay is by design: Cohesity prioritizes active workloads over audit log flushing. As a
result, with the default configuration, audit logs are suitable for historical analysis but not
real-time monitoring.

An internal configuration option exists in Cohesity that can reduce this latency by forcing audit
logs to be written more frequently. If you need to reduce latency, contact Cohesity Support.
:::
