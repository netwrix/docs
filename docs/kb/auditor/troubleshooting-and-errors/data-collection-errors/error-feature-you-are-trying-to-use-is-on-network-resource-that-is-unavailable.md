---
description: >-
  Describes how to resolve "The feature you are trying to use is on a network
  resource that is unavailable" error during installation or uninstallation of a
  Netwrix product, including use of the Windows Install and Uninstall
  Troubleshooter and a manual fix.
keywords:
  - installation error
  - network resource unavailable
  - MSI
  - uninstall
  - Windows Install and Uninstall Troubleshooter
  - Netwrix Auditor
  - extract MSI
  - UACoreSvcSetup.msi
  - Netwrix.WSA.CompressionService.Setup.msi
products:
  - auditor
  - activitymonitor
visibility: public
sidebar_label: 'Error: Feature You Are Trying to Use Is on Network'
tags: []
title: "Error: Feature You Are Trying to Use Is on Network Resource That Is Unavailable"
knowledge_article_id: kA0Qk0000000MoXKAU
---

# Error: Feature You Are Trying to Use Is on Network Resource That Is Unavailable

## Symptom

A Netwrix product prompts the following error during uninstallation or installation (upgrade):

```text
The feature you are trying to use is on a network resource that is unavailable.
Click OK to try again, or enter an alternate path to a folder containing the installation package %.msi_file% in the box below.
```

## Causes

- A Windows system keeps a copy of a version-specific installation executable. The operating system (OS) uses it during uninstallation or installation (upgrade). In case no executable is available on the server, the error is prompted.
- The registry entry for the affected Netwrix product is corrupted—no product code or revision number is available for the current product deployment. The OS cannot proceed with the upgrade as corresponding values mismatch.

## Resolutions

There are two possible options to troubleshoot the issue—refer to the following two subsections.

### Windows Install and Uninstall Troubleshooter

Windows published a dedicated troubleshooting solution to resolve any uninstallation or installation (upgrade) issues related to this error. Refer to the following steps to implement it in your environment:

1. On the affected server, download and run the Windows Install and Uninstall Troubleshooter. You can download it here: https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d (Fix Problems that Block Programs from Being Installed or Removed · Microsoft).
2. Proceed with the troubleshooter steps:
   1. Click **Next**.
   2. Select **Installing** or **Uninstalling**.
   3. Select the affected program from the list.
   4. Select the suitable option.

If the affected program is missing from the list, or if the troubleshooter prompts the `Troubleshooting couldn't identify the problem` error, proceed to the next resolution.

### Manual Fix

Refer to the following steps to resolve the error:

1. Establish the current version of the affected Netwrix product.
2. Obtain the version-specific installation executable of the affected product. Open a ticket to request an executable at https://www.netwrix.com/tickets.html#/tickets/open (My Tickets · Netwrix).
3. Extract the installation executable from the archive.
4. When the wizard prompts the original error, link the new source in the **Use source** field. Click **OK** to proceed.

## Tips

- In case you link an incorrectly named file, the installation wizard prompts the following error:

  ```text
  The path %path_to_.msi% cannot be found
  ```

  Verify the name of the installation file—it should be named as specified in the error prompt.

- The Netwrix Auditor installation wizard includes both server and client setup files. Refer to the following options to extract the contents:
  - Extract the executable contents via Command Prompt. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8 Client via Group Policy — Extract MSI File · v10.6).
  - Extract the executable contents using 7-Zip or alternative software. Link the folder containing the extracted files to proceed with installation\uninstallation.

- When you upgrade your Netwrix Auditor instance, you might encounter the error during the service upgrade procedure. Refer to the default locations of the service installation files to provide the version-specific executable:

  User Activity Core Service:

  ```text
  C:\Program Files (x86)\Netwrix Auditor\User Activity Video Recording\UACoreSvcSetup.msi
  ```

  Windows Server Compression Service:

  ```text
  C:\Program Files (x86)\Netwrix Auditor\Windows Server Auditing\Netwrix.WSA.CompressionService.Setup.msi
  ```

## Related Articles

- https://support.microsoft.com/en-us/topic/fix-problems-that-block-programs-from-being-installed-or-removed-cca7d1b6-65a9-3d98-426b-e9f927e1eb4d (Fix Problems that Block Programs from Being Installed or Removed · Microsoft)
- https://www.netwrix.com/tickets.html#/tickets/open (My Tickets · Netwrix)
- https://docs.netwrix.com/docs/auditor/10_8 Client via Group Policy — Extract MSI File · v10.7)
