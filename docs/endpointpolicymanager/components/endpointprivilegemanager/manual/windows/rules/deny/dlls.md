---
title: "Denying DLLs within Applications"
description: "Denying DLLs within Applications"
sidebar_position: 30
---

# Denying DLLs within Applications

You can deny DLLs within Applications, like PowerShell’s internal DLLs, which make it operate.

First you must turn on the option with a Global DLL policy, which may only be enabled on the
**Computer Configuration** side.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_dlls_within_applications.webp)

Then create a matching rule with **New DLL Policy**.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/deny/denying_dlls_within_applications_1.webp)

Then you can **Deny execution** of the DLL when it is encountered.

:::note
Some additional details and examples can be found in the
[How to Defend against malicious PowerShell attacks (DLLs)?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/tipsforadminapproval/maliciousattacks.md)
topic.

:::



