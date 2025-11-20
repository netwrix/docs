---
title: "Upgrading MS Teams to latest version displays prompts for Admin Approval"
description: "Upgrading MS Teams to latest version displays prompts for Admin Approval"
sidebar_position: 90
---

# Upgrading MS Teams to latest version displays prompts for Admin Approval

PROBLEM:

When updating Microsoft Teams to the latest version you receive an Admin Approval message like the
one below.

![927_1_image-20231116160521-2](/images/endpointpolicymanager/troubleshooting/scriptstriggers/927_1_image-20231116160521-2.webp)

CAUSE:

Customer has enabled AA + Enforce Admin Approval for installers

![1306_2_02a0661341d87f03cca56ccbf243d833](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_2_02a0661341d87f03cca56ccbf243d833.webp)

But when MS Teams attempts to update, Windows runs a helper process (msiexec.exe without any
arguments as SYSTEM). This msiexec.exe creates another child process (msiexec -embedding `{GUID}`),
and Admin Approval correctly classifies it as installer and intercepts it as expected.

### WORKAROUND 1: (Recommended)

:::note
Works only for Endpoint Policy Manager Least Privilege Manager versions 24.4 and later
:::


Using Endpoint Policy Manager Least Privilege Manager, now has a parent process condition to the
Endpoint Policy Manager Least Privilege Manager explicit policy. Therefore you can instruct Endpoint
Policy Manager Least Privilege Manager to securely to elevate a command like msiexec -embedding \*,
if it is known that its parent is also msiexec.exe, and signed by Microsoft.

![1306_3_c1ba4f8f05b21e5d6adf327d817593e9](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_3_c1ba4f8f05b21e5d6adf327d817593e9.webp)

The manual steps to generate the XML are:

![1306_4_0db039eed39f20ab325fac0ca5b30a6c](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_4_0db039eed39f20ab325fac0ca5b30a6c.webp)

![1306_5_23eaaa42422c8cfce3e46d27a9dddbb2](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_5_23eaaa42422c8cfce3e46d27a9dddbb2.webp)

![1306_6_ad797e8b1ecf0b43d8f8a388ffedcde5](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_6_ad797e8b1ecf0b43d8f8a388ffedcde5.webp)

![1306_7_f8c69edce2b216b5a2e1e3238a79c2e9](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_7_f8c69edce2b216b5a2e1e3238a79c2e9.webp)

![1306_8_4af3ffdd4277ec275d61a4aeb4adb125](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_8_4af3ffdd4277ec275d61a4aeb4adb125.webp)

Additionally, you will need a Endpoint Policy Manager Least Privilege Manager UWP Policy which
specifies that "Any UWP app allowed" as follows:

![1306_9_85037c3c83c955ec3a44d5631189d585](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_9_85037c3c83c955ec3a44d5631189d585.webp)

Or you can specify some applications which appear to be required during a Teams upgrade.

![1306_10_4188230b3e50a95465a6cf8a84abb867](/images/endpointpolicymanager/troubleshooting/scriptstriggers/1306_10_4188230b3e50a95465a6cf8a84abb867.webp)

You can use this XML which is coded for Computer-side policy to accomplish the goals stated in this
Workaround #1.

IMPORTANT: If using this XML, you must be running PolicyPak Admin Console (MMC) version 24.4.x and
higher otherwise the Parent Process filter will be missing from the imported policy.

Code Snippet:
[https://raw.githubusercontent.com/endpointpolicymanager/snippets/master/kb-articles/1306/out2.xml](https://raw.githubusercontent.com/endpointpolicymanager/snippets/master/kb-articles/1306/out2.xml)

### WORKAROUND 2: (Also Recommended)

Using PolicyPak Scripts and Triggers, create the 2 separate PowerShell policies as shown in the
screen shots below.

![927_2_2_950x130](/images/endpointpolicymanager/troubleshooting/scriptstriggers/927_2_2_950x130.webp)

:::note
If you are not licensed for Endpoint Policy Manager Scripts & Triggers you can still use
Workaround 1 by creating the policies below in Microsoft Group policy using regular computer or user
side scripts.
:::


Policy 1: PowerShell script scoped to MACHINE that remove all versions of MS Teams that are
currently installed on endpoint.

Policy 2: PowerShell script scoped to USER that Installs the latest version of MS Teams.

Code Snippet:
[https://raw.githubusercontent.com/endpointpolicymanager/snippets/master/kb-articles/1306/Script2.ps1](https://raw.githubusercontent.com/endpointpolicymanager/snippets/master/kb-articles/1306/Script2.ps1)

:::note
You will need to update the path to the latest version of MS Teams file for your
environment in policy #2, see below.
:::


![927_3_3_950x296](/images/endpointpolicymanager/troubleshooting/scriptstriggers/927_3_3_950x296.webp)

[https://www.policypak.com/pp-files/PPScripts\_\_MS_Teams_update_to_resolve_issue_with_Admin_Approval_prompts.xml](https://www.policypak.com/pp-files/PPScripts__MS_Teams_update_to_resolve_issue_with_Admin_Approval_prompts.xml)

### WORKAROUND 3: For CSEs previous to 24.4 (Not recommended - as any MSIEXEC command line with "-embedding \*" will be elevated - use at own risk)

Using Endpoint Policy Manager Least Privilege Manager create the 2 separate policies as shown in the
screen shot below.

![927_4_image-20231213102010-1](/images/endpointpolicymanager/troubleshooting/scriptstriggers/927_4_image-20231213102010-1.webp)


