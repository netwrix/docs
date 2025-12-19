---
description: >-
  This article provides a step-by-step guide on how to update the password for the GroupID service account in Netwrix Directory Manager, ensuring all relevant components are properly configured.
keywords:
  - GroupID
  - service account
  - password reset
  - Netwrix Directory Manager
  - configuration
sidebar_label: Update GroupID Service Account Password
tags:
  - system-administration-and-maintenance
title: "How to Update the Service Account Password in V10"
knowledge_article_id: kA0Qk0000002whRKAQ
products:
  - directory-manager
---

# How to Update the Service Account Password in V10

## Related Queries

- "Password reset for the GroupID service account"
- "I need to reset the password for the GroupID service account. Could you provide a comprehensive list of all the locations where the new password must be updated after the reset? Additionally, please let me know if there are any other steps I should take to ensure everything is properly validated after the password change."

## Overview

Resetting the password for the GroupID service account in **Netwrix Directory Manager** (formerly **GroupID**) 10 SR2 requires updating the credentials in multiple locations to ensure uninterrupted operation of all GroupID services. This article provides a step-by-step guide to updating the password across all relevant components and validating the configuration.

## Instructions

1. Use **Active Directory Users and Computers** to reset the password for the GroupID service account.
2. Identify all GroupID components using the service account:
   - **GroupID Data Service**
   - **GroupID Mobile Service**
   - **GroupID Security Service**
   - **GroupID Services**
   - **GroupID Insights**
   - **GroupID Password Center**
   - **GroupID Self Service**
3. Before re-running the Configuration Tool, rename the following ZIP files to `*.old.zip`:
   - `C:\Program Files\Imanami\GroupID 10.0\GroupIDDataService\DataServiceZip.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\GroupIDMobileService\GroupIDMobileServiceZip.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\GroupIDSecurityService\SecurityServiceZip.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\GroupIDServices\GroupIDServicesZip.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\Insights\Insights.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\PasswordCenter\PasswordCenterZip.zip`
   - `C:\Program Files\Imanami\GroupID 10.0\SelfService\SelfServiceZip.zip`
4. You can use the following PowerShell script to automate the previous step:

   ```powershell
   $locations = @(
       "C:\Program Files\Imanami\GroupID 10.0\GroupIDDataService\DataServiceZip.zip",
       "C:\Program Files\Imanami\GroupID 10.0\GroupIDMobileService\GroupIDMobileServiceZip.zip",
       "C:\Program Files\Imanami\GroupID 10.0\GroupIDSecurityService\SecurityServiceZip.zip",
       "C:\Program Files\Imanami\GroupID 10.0\GroupIDServices\GroupIDServicesZip.zip",
       "C:\Program Files\Imanami\GroupID 10.0\Insights\Insights.zip",
       "C:\Program Files\Imanami\GroupID 10.0\PasswordCenter\PasswordCenterZip.zip",
       "C:\Program Files\Imanami\GroupID 10.0\SelfService\SelfServiceZip.zip"
   )
   foreach ($location in $locations) {
       if (Test-Path $location) {
           $newName = $location -replace '\.zip$', 'old.zip'
           Rename-Item -Path $location -NewName $newName -Force
       } else {
           Write-Host "File not found: $location"
       }
   }
   ```

5. In **IIS Manager**, remove the GroupID site and its application pool to ensure a clean reconfiguration.
6. Delete all files from `C:\Windows\Microsoft.NET\Framework64\v4.x\Temporary ASP.NET Files\`.
7. Launch the GroupID Configuration Tool with administrative privileges.
8. Update the service account credentials wherever prompted.
9. Apply and save the configuration.
10. If you encounter errors such as “Failed to save the Security Service Configuration,” ensure all previous steps are complete and try again.
11. Use the **Signing Key Utility** to generate a new SSL certificate for GroupID if prompted:
    - [Download the Signing Key Utility](https://releases.netwrix.com/products/groupid/10.0/groupid-V10-Signing-Key-Utility-10.0.0.zip)
    - [Signing Key Utility Documentation](https://docs.netwrix.com/docs/directorymanager/11_1)
12. To update the password in the identity store properties, open the **GroupID MMC**.
13. Navigate to the **Identity Stores** tab from the left pane.
14. Open the properties of the on-prem **AD Identity Store**.
15. Update the password of the service account.
16. Ensure all GroupID services are running.
17. Verify that web interfaces and scheduled tasks are operational.
18. Check event logs and application logs for errors.

> **IMPORTANT:** Failure to update the password in all required locations may result in service outages or authentication errors. Always run the Configuration Tool as Administrator and validate all services after making changes.

## Related Articles

- [GroupID 10.0 Signing Key Utility Documentation](https://docs.netwrix.com/docs/directorymanager/11_1)