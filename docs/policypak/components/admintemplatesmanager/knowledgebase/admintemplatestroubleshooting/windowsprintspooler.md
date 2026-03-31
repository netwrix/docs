---
title: "How to Mitigate Windows Print Spooler Remote Code Execution Vulnerability (CVE-2021-34527)"
description: "How to Mitigate Windows Print Spooler Remote Code Execution Vulnerability (CVE-2021-34527)"
sidebar_position: 60
---

# How to Mitigate Windows Print Spooler Remote Code Execution Vulnerability (CVE-2021-34527)

**Step 1 –** Install the July Out-of-band and later updates from Microsoft.

**Step 2 –** Configure the Point and Print Restrictions Group Policy setting, as follows:

`Computer Configuration > Administrative Templates > Printers`

- Set the Point and Print Restrictions Group Policy setting to "Enabled"
- Set "When installing drivers for a new connection": "Show warning and elevation prompt"
- Set "When updating drivers for an existing connection": "Show warning and elevation prompt".

**Step 3 –** (Optional): Override all Point and Print Restrictions Group Policy settings and ensure
that only administrators can install printer drivers by changing the registry settings on all hosts
as follows:

Registry location:
`HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Printers\PointAndPrint`

DWord name: RestrictDriverInstallationToAdministrators

Value data: 1

**Step 4 –** Validate Registry and/or Group Policy settings from options 1, and 2 above are properly
deployed.

More information can be found at the links below:

[https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527)

[https://support.microsoft.com/en-us/topic/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates-31b91c02-05bc-4ada-a7ea-183b129578a7](https://support.microsoft.com/en-us/topic/kb5005010-restricting-installation-of-new-printer-drivers-after-applying-the-july-6-2021-updates-31b91c02-05bc-4ada-a7ea-183b129578a7)


