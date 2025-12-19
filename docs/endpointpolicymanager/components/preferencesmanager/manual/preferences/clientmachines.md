---
title: "Applying Settings to Client Machines"
description: "Applying Settings to Client Machines"
sidebar_position: 20
---

# Applying Settings to Client Machines

The most common technical support question we get is "Why aren't Group Policy Preferences settings
applying to my client machines using PolicyPak Exporter MSIs?" Before calling or emailing Endpoint
Policy Manager technical support, check the following items:

**Step 1 –** Did you go through the Quickstart section and follow the example from start to finish?
Most people will see what needs to be altered to solve the problem when they work through the
Quickstart.

**Step 2 –** Did you install the Endpoint Policy Manager CSE on your client machines?

**Step 3 –** If you're trying to deploy a Endpoint Policy Manager Exporter MSI file using Microsoft
Endpoint Manager (SCCM and Intune), or a similar program, did you first manually test the
installation of the MSI?

**Step 4 –** Is your computer licensed? All computers must be licensed in order for Endpoint Policy
Manager Preferences Manager to work properly (see the [Introduction and Basic Concepts](/docs/endpointpolicymanager/gettingstarted/basicconcepts/basicconcepts.md) for more information). Alternatively, try
renaming the computer to "Computer1" (or a similar name) such that "computer" is in the name. When
you do this, the Endpoint Policy Manager Preferences Manager CSE will act as if it's fully licensed.
If Endpoint Policy Manager Preferences Manager starts to work, you have a licensing issue.

**Step 5 –** Does the Group Policy Preference item you created have some Item-Level Targeting that
prevents its use? For instance, did you specify "Only when the Operating System is Windows 7," when
you're actually trying to apply the file to a Windows 8 system?

**Step 6 –** Even though this might take some time, we suggest setting up a totally new computer
(Windows 7 or greater) and naming it "Computer01." Then, install the Endpoint Policy Manager CSE and
reboot. See if your settings apply now. If so, try to determine why the settings worked when the
computer was in Trial mode (i.e., when it had the word "computer" in the computer name) and not in
Licensed mode.


