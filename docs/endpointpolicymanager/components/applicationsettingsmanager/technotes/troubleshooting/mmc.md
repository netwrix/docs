---
title: "The node for Endpoint Policy Manager Application Settings Manager component is not loading in the MMC snap-in, and shows a \"The address is not valid\" message."
description: "The node for Endpoint Policy Manager Application Settings Manager component is not loading in the MMC snap-in, and shows a \"The address is not valid\" message."
sidebar_position: 220
---

# The node for Endpoint Policy Manager Application Settings Manager component is not loading in the MMC snap-in, and shows a "The address is not valid" message.

Problem:

The Endpoint Policy Manager Application Settings Manager (ASM) node is not visible or working
properly in Group Policy Management Console (GPMC) and/or Group Policy Editor (GPEDIT).

![1322_1_7fee40aeea669ba543a9c29a3570029a](/images/endpointpolicymanager/troubleshooting/applicationsettings/1322_1_7fee40aeea669ba543a9c29a3570029a.webp)

Cause:

The issue appears to be an incomplete installation of the Endpoint Policy Manager Admin console
(MMC), possibly due to interference from an antivirus solution such as Carbon Black antivirus during
the installation process. Although there were no explicit indications of such during installation.

Resolution:

Perform and confirm the steps as outlined in the following KB:
[How must I configure my Anti-virus or system-level software to work with Endpoint Policy Manager CSE?](/docs/endpointpolicymanager/upgrademaintenance/antivirussystemsoftware/antivirus.md)

If the issue persists, proceed with the following troubleshooting steps.

Reinstallation of the Endpoint Policy Manager Admin Console (MMC) as Non-Domain Local Admin:

**Step 1 –** Log out of the Machine and log in as the machine built-in Administrator account.

**Step 2 –** Uninstall the previous instance of the Endpoint Policy Manager Admin Console (MMC).

**Step 3 –** Reinstall the Endpoint Policy Manager Admin Console (MMC) using the same version as
previously installed, or a newer version if one is available.

**Step 4 –** After reinstall, open GPMC or GPEDIT, and verify that the Application Settings Manager
(ASM) node is now visible and functioning normally.

**Step 5 –** Now logout from the built-in administrator account and back in using a Domain Admin
user account to test and confirm that the ASM node is visible and functioning normally in GPMC.

**Step 6 –** As a final verification step, log out of the Machine and log back in as the original
user and confirm that the ASM node remained operational in both GPEDIT and GPMC.

The ASM node should look similar to screen shot below.

![1322_2_d34f038d53ae47ca403950284e354cdd](/images/endpointpolicymanager/troubleshooting/applicationsettings/1322_2_d34f038d53ae47ca403950284e354cdd.webp)


