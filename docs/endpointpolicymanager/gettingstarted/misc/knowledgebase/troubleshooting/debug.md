---
title: "How do I turn on Debug logging if asked?"
description: "How do I turn on Debug logging if asked?"
sidebar_position: 120
---

# How do I turn on Debug logging if asked?

Debug logging might be required by the Netwrix Endpoint Policy Manager (formerly PolicyPak)
technical team, and goes beyond standard logging.

To turn on Debug logging:

**Step 1 –** Please add a registry key in

`HKLMSoftwarePoliciesPolicyPakConfigLogs` as REG_DWORD called DefaultVerbose and set it to
0xFFFFFFFF as seen in this screenshot.

![385_1_image0021](/images/endpointpolicymanager/troubleshooting/log/385_1_image0021.webp)

**Step 2 –** Then Reboot. (Very important.)

**Step 3 –** You know you'll have done it right, when special Debug messages appear in the logs
like BRExtension::dtor as seen here. For instance,
check `%programdata%PolicyPakPolicyPak `Browser RouterppService.log and look to see its been done
correctly.

![385_2_image003](/images/endpointpolicymanager/troubleshooting/log/385_2_image003.webp)

**Step 4 –** After that, reproduce the problem, and run` PPLOGS` as seen in Step 3
[What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)
and attach to your support case.

