---
title: "When to Use \"Apply to Child Processes\""
description: "When to Use \"Apply to Child Processes\""
sidebar_position: 60
---

# When to Use "Apply to Child Processes"

:::note
See the
[Security and Child Processes](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/securitychildprocesses.md)
video for an overview of using Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager
and Child Processes rules.
:::


![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/bestpractices/when_to_use_apply_to_child.webp)

We suggest leaving the checkbox on for **Apply to Child Processes** when installing software. This
will enable a `Setup.exe` to elevate anything it unpacks and needs to continue to install. However,
using **Apply to Child Processes** is not recommended when elevating specific applications where
users could open their own dialog boxes. Some examples of this would be `REGEDIT` or Acrobat Reader.
In those cases, users could spawn a new process, which would also be elevated and perform functions
that work around your security.

If, however, you need to keep **Apply to Child Processes** on, you have some additional security
mechanisms to prevent application to child processes in all circumstances.

- Don't apply to unsigned executables. If the application has no digital signature and is unsigned,
  do not apply the elevation level to child processes.
- Don't apply to untrusted executables. Don't pass the elevation status if the file's owner isn't on
  the SecureRun™ list (when SecureRun™ is being used). If SecureRun™ is not used, do not elevate
  to the child processes unless the file owner is TrustedInstaller, Built-in\Administrators, SYSTEM
  or %COMPUTERNAME%\Administrator.
- Don't apply to executables signed by other publishers. Don't pass the elevation status if the
  application is not signed by the same signed vendor who originated the process.
- Don't apply to unrelated executables. Don't pass the elevation status if the application is not in
  the same directory structure (including recursively).



