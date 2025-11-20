---
title: "Specific Upgrades for Application Settings Manager"
description: "Specific Upgrades for Application Settings Manager"
sidebar_position: 30
---

# Specific Upgrades for Application Settings Manager

Application Settings Manager has a few extra parts that need updating when Netwrix Endpoint Policy
Manager (formerly PolicyPak) the client-side extension (CSE) and tools are updated. We'll discuss
those specific parts in the following sections.

For a video overview of this topic, see
[Keeping Application Settings Manager and Paks up to date](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/uptodate.md).

## Updating the AppSets

Your download contains the latest pre-configured AppSets with various AppSet definition fixes and
usually even more additional AppSets. If you have any AppSets you've created yourself, you should
recompile them for the latest version. Check the video above for an overview on mass-recompilationx.

If you're using the Central Store, first make a backup of your existing Endpoint Policy Manager DLL
AppSets for safekeeping. If you're using a local store, make a backup of your local Endpoint Policy
Manager DLL AppSet files for safekeeping. Next, follow one of the two options below to update the
AppSets:

- Option 1: Manual. Copy over the AppSets you're using, thus overwriting the old AppSets in the
  Central Store or a local store.
- Option 2: Automatic (Recommended). Use the Endpoint Policy Manager GPOTouch utility to update the
  AppSets in the Central Store and local store automatically and to update each GPO (described in
  more detail below).

## Updating the Admin Console and Endpoint Policy Manager DesignStudio

For Endpoint Policy Manager Application Settings Manager, update your Endpoint Policy Manager
DesignStudio on any machine where it is currently installed. You do not need to update the Microsoft
C++ compiler to the latest version because Endpoint Policy Manager DesignStudio can use C++ Express
Edition 2008 or later without issue. This will also update the Endpoint Policy Manager GPOTouch and
Endpoint Policy Manager GPO Exporter utilities. Update your own administrative machines with the
latest Endpoint Policy Manager Admin Console.MSI (32- or 64-bit) to update the GPMC and the Endpoint
Policy Manager Exporter and Endpoint Policy Manager GPOTouch utilities.

## Secondary Application Settings Manager Backup

For extra protection within each Endpoint Policy Manager Application Settings Manager definition,
you can choose to open the definition and then click the **Options** button. Then, select **Export
XML Settings Data**.

![specific_upgrades_for_application_624x386](/images/endpointpolicymanager/install/upgrade/specific_upgrades_for_application_624x386.webp)

:::note
This step is optional but will provide a second backup of your Endpoint Policy Manager
Application Settings Manager definitions in case of a mishap and is therefore recommended.
:::


## Updating Each GPO

Every GPO contains directives with Endpoint Policy Manager Application Settings Manager data, which
must be opened and updated. If a GPO contains multiple Endpoint Policy Manager Application Settings
Manager directives, each one must be updated, or touched. You can either manually touch a GPO or use
Endpoint Policy Manager GPOTouch. It is recommended to use the Endpoint Policy Manager GPOTouch
utility to update each GPO automatically with the latest version of the AppSet DLL file.

To see a video overview of how to manually touch a GPO, see
[GPOTouch Utility](/docs/endpointpolicymanager/components/applicationsettingsmanager/videos/centralstoresharing/touchutility.md).

