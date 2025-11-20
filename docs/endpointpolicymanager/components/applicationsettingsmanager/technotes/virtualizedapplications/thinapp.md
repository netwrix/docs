---
title: "How can I manage a version of Java inside a ThinApp package ?"
description: "How can I manage a version of Java inside a ThinApp package ?"
sidebar_position: 40
---

# How can I manage a version of Java inside a ThinApp package ?

You can use Netwrix Endpoint Policy Manager (formerly PolicyPak) Application Settings Manager to
manage the Java on the real machine and also the (different) Java inside a ThinApp package.

To do this, it takes several steps.

**Step 1 –** Create a Pak for your ThinApp application or use an existing Pak. In this example,
we'll use the pre-configured Pak for OpenOffice 4.0 that we provide.

**Step 2 –** Know and note what version of Java is inside the ThinApp package. In the case of
OpenOffice 4.0, the version is 8u40.

**Step 3 –** Copy the existing Java Pak XML to a new file to be used.

**Step 4 –** Add the application ID from the OpenOffice pak to the Java Pak as seen below using
Notepad. Note the AppID in the might be different than what is in this screenshot and/or have
multiple AppIDs. Simply preserve the existing ID, and append as seen here.

![147_1_image0052](/images/endpointpolicymanager/applicationsettings/147_1_image0052.webp)

**Step 5 –** Open the Java Pak XML in the Endpoint Policy Manager DesignStudio. Update the Project
name so it's clear what it's doing. Then recompile.

![147_2_image003](/images/endpointpolicymanager/applicationsettings/147_2_image003.webp)

**Step 6 –** Give the Pak a new DLL name and Recompile the Pak

![147_3_image004](/images/endpointpolicymanager/applicationsettings/147_3_image004.webp)

**Step 7 –** Use the new Pak in Endpoint Policy Manager Application Settings Manager . Your ThinApp
package's Java will automatically be configured at this point with the settings you dictate.

![147_4_image0061](/images/endpointpolicymanager/applicationsettings/147_4_image0061.webp)


