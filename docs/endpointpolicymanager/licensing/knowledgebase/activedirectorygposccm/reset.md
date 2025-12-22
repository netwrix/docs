---
title: "How can I verify, test and/or reset my Domain Join (aka SecureChannel) from the endpoint to domain controller?"
description: "How can I verify, test and/or reset my Domain Join (aka SecureChannel) from the endpoint to domain controller?"
sidebar_position: 60
---

# How can I verify, test and/or reset my Domain Join (aka SecureChannel) from the endpoint to domain controller?

You can use `PPUPDATE` to show the current domain joined status.

Here is an example of` PPUPDATE` command showing a correctly joined on-prem Active Directory joined
machine:

![542_1_hfkb-1123-img-01](/images/endpointpolicymanager/license/unlicense/542_1_hfkb-1123-img-01.webp)

When not domain joined:

![542_2_hfkb-1123-img-02](/images/endpointpolicymanager/license/unlicense/542_2_hfkb-1123-img-02.webp)

When the secure channel has been broken and needs to be re-established:

![542_3_hfkb-1123-img-03](/images/endpointpolicymanager/license/unlicense/542_3_hfkb-1123-img-03.webp)

See this Microsoft article on
[Resetting computer accounts in Windows](https://support.microsoft.com/en-us/topic/resetting-computer-accounts-in-windows-762e3208-0e05-1696-75fa-333d90717d1e)
for additional information.

To attempt to reset the secure channel on a specific PC, make sure you have network connectivity to
a Domain Controller.

**Step 1 –** Open PowerShell As Administrator:

```
Test-ComputerSecureChannel -Verbose
```

If False then run:

```
Test-ComputerSecureChannel -Repair -Server PDCEmulatorName -Verbose
```

If repaired you will see message, if it fails then try adding a credential:

```
Test-ComputerSecureChannel -Repair -Server PDCEmulatorName -Credential Domain\UserName -Verbose
```

See this article from PCPMag,
[Rejoin a Computer from a Domain In One Easy Step!](https://mcpmag.com/articles/2015/03/05/rejoin-a-computer-from-a-domain.aspx)
for information on alternate steps.

