---
title: "Specify Auditor Path"
description: "Specify Auditor Path"
sidebar_position: 20
---

# Specify Auditor Path

**Step 1 –** In this step, you need to specify the path to run `PPGPCR.Auditor.exe`. First, you need
to share the folder that contains `PPGPCR.Auditor.exe`. By default, when you install Endpoint Policy
Manager GPCR Server the Auditor folder is created within
`c:\ProgramFiles(x86)\PolicyPak\PolicyPak Group Policy Compliance Reporter Server`, as shown in
Figure 48. Share that folder as Read::Everyone.

![gpcr_server_with_push_mode_12](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_12.webp)

Figure 48. Sharing the Auditor folder.

**Step 2 –** Next, in the wizard, specify the UNC path to `PPGPCR.Auditor.exe`, as shown in
Figure 49.

![gpcr_server_with_push_mode_13](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_13.webp)

Figure 49. Entering the UNC path for the auditor EXE.

:::note
You may copy the auditor EXE and its related DLLs to another server or get them onto
endpoints to run locally. If you choose to do this, update the path accordingly.

:::

