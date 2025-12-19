---
title: "How do I manually count the number of computers in Intune, and manually acquire the Intune \"Company Name?\""
description: "How do I manually count the number of computers in Intune, and manually acquire the Intune \"Company Name?\""
sidebar_position: 40
---

# How do I manually count the number of computers in Intune, and manually acquire the Intune "Company Name?"

If you are having trouble running the Licensing Tool (LT) to acquire either the number of computers
in Intune, or the Intune Company Name, here is what to do.

Usually the LT works as expected, but if it doesn't you can run the commands it runs by hand and get
the same result.

## Part 1: Getting the number of Computers in Intune

Please follow the steps in the following article to acquire the number of Computers in Intune.
Please send us screenshots like the ones in the article to let us know the number of machines.

[If I have both Azure joined and Hybrid Azure AD joined machines, how do I count the exact number of licenses I need?](/docs/endpointpolicymanager/licensing/knowledgebase/requestingmdm/entraid.md)

## Part 2: Getting the Intune Company Name

We also need your Intune company name. You can run this script:

```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Install-PackageProvider -Name NuGet -Scope CurrentUser -Force
Install-Module -Name Microsoft.Graph.Intune -Repository PSGallery -Scope CurrentUser -Force
Connect-MSGraph -AdminConsent
Get-Organization | Select @{N = 'CompanyName'; E = { $_.displayName } } | out-file INTUNECOMPANYNAME.TXT
```

See [MDM Intune company name troubleshooting](/docs/endpointpolicymanager/licensing/videolearningcenter/troubleshooting/mdm.md)

## Final Thoughts: Number of computers + Company Name

Between the count (pictures) and the company name (text file), we'll have the two pieces we need.

Send them to your Sales team if requested and/or to close the loop on a support request.

