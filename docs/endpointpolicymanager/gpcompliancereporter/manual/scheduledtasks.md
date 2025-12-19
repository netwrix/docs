---
title: "Troubleshooting Scheduled Tasks"
description: "Troubleshooting Scheduled Tasks"
sidebar_position: 50
---

# Troubleshooting Scheduled Tasks

You can see the scheduled task on the endpoint, as shown in Figure 73.

![tuning_and_troubleshooting_14](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_14.webp)

Figure 73. The endpoint scheduled task.

The ideal status is "Ready." When Group Policy triggers, it should change to "Queued," then to
"Running," and then back to "Ready." However, sometimes the scheduled task can get stuck at
"Queued," as shown in Figure 74.

![tuning_and_troubleshooting_15](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_15.webp)

Figure 74. The scheduled task stuck in a queued state.

Sometimes endpoints require a reboot in order for data to start to flow to the Endpoint Policy
Manager GPCR server. This is normal when the task is first installed via a Group Policy Preference
scheduled task. If the task fires correctly, verify the action is set correctly so that
PPGPCR.Auditor.exe will be started from the proper location and the information will be delivered to
the target server (in this case DC), as shown in Figure 75.

![tuning_and_troubleshooting_16](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_16.webp)

Figure 75. Verifying the action is set correctly.

