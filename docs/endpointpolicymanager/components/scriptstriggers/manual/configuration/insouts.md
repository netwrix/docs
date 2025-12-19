---
title: "Ins and Outs"
description: "Ins and Outs"
sidebar_position: 10
---

# Ins and Outs

Endpoint Policy Manager Scripts & Triggers Manager solves several huge Windows 10 issues. Its basic
goal is to deliver scripts using whatever delivery mechanism you might want. For on-prem machines,
you already have some good, but not great, options for running the occasional script. With Endpoint
Policy Manager Cloud, Endpoint Policy Manager Scripts & Triggers Manager brings a method to deploy
scripts that didn't exist before. For those using an MDM solution, there is built-in script
deployment, but it has many restrictions. In this section, we'll examine how scripts have worked
with the in-box Group Policy method and with MDM solutions (without Endpoint Policy Manager ).

### Managing Scripts with Group Policy

Deploying scripts with Group Policy is not hard, but it does have some limitations. We'll go through
the process below.

There are Startup and Shutdown script settings, which are found under the Computer Configuration |
Policies node in the Windows Settings | Scripts (Startup/Shutdown) branch. You can get your proposed
script into the proper GPO in many ways; however, we propose the following as the ideal way:

**Step 1 –** In the Group Policy Management Editor, drill down to the Scripts (Startup/Shutdown)
node and double-click "Startup." The Startup Properties dialog box will appear.

**Step 2 –** Click the Add button to open the "Add a Script" dialog box.

**Step 3 –** In the Script Name field, you can enter a file name or click "Browse" to open the
Browse dialog box, shown in Figure 1.

**Step 4 –** To create a new file, right-click in the Browse dialog box, and choose New| Text
Document, for example.

**Step 5 –** Enter a name for the file, such as myscript.bat.

![about_policypak_scripts_triggers](/images/endpointpolicymanager/scriptstriggers/about_endpointpolicymanager_scripts_triggers.webp)

Figure 1. Adding a script.

Next, it's important to understand that Startup and Shutdown scripts run in the LocalSystem context.
If you want to connect to resources across the network, you'll need to ensure that those resources
allow for computer access across the network (not just user access), because the script will run in
the context of the computer account when it accesses network resources (such as the Domain Computers
group).

The Logon and Logoff script settings are under the User Configuration | Policies node in the Windows
Settings | Scripts (Logon/Logoff) branch. Logon and logoff scripts run in the User context. Remember
that a user is just a mere mortal and might not be able to manipulate Registry keys that you may run
in a logon or logoff script.

You can also run PowerShell-based scripts. You can find these settings in User Configuration |
Policies | Windows Settings | Scripts (Logon/Logoff). Similar settings for the computer are found in
Computer Configuration | Policies | Windows Settings | Scripts (Startup/Shutdown). The dialog can be
seen in Figure 2.

![about_policypak_scripts_triggers_1](/images/endpointpolicymanager/scriptstriggers/about_endpointpolicymanager_scripts_triggers_1.webp)

Figure 2. Using the in-box Group Policy method to deploy PowerShell scripts.

These processes are perfectly fine, but do not suit every case. The primary problems with the in-box
Group Policy method are:

- Scripts can only run at Startup/Shutdown and Logon/Logoff and are only run once, despite the fact
  that there may be other times when you want a script to run.
- Scripts are "all or nothing"; that is, the script cannot determine whether or not it should apply
  based on certain conditions.
- To make a script run interactively, you must create a global setting (to the machine) within Group
  Policy by going to User Configuration | Policies | Administrative Templates | System | Scripts,
  and selecting either "Run logon scripts visible" or "Run logoff scripts visible." For Startup and
  Shutdown scripts you must go to Computer Configuration | Policies | Administrative Templates |
  System | Scripts, and select either "Run startup scripts visible" or "Run shutdown scripts
  visible." However, you cannot make a specific script run interactively.
- You cannot make a script that would apply to all users who log into the computer (without using
  loopback).

### Managing Scripts with an MDM service

On Microsoft Endpoint Manager, the ability to run PowerShell scripts is handled by the Intune
Management extension. For more information on this extension see
[https://docs.microsoft.com/en-us/intune/intune-management-extension](https://docs.microsoft.com/en-us/intune/intune-management-extension).
Figure 3 shows the available options for adding a PowerShell script with Intune.

![about_policypak_scripts_triggers_2](/images/endpointpolicymanager/scriptstriggers/about_endpointpolicymanager_scripts_triggers_2.webp)

Figure 3. Deploying a PowerShell script using Microsoft Endpoint Manager.

The MDM script deployment mechanism leaves a lot to be desired, however. The following are the
typical problems with built-in MDM scripts that you may find when using Microsoft Endpoint Manager
(Intune), VMware Workspace ONE (AirWatch), or MobileIron (although the problems might be different
on any given MDM solution, since they are all very different).

- Some MDM solutions do not enable you to run any scripts at all for any reason.
- For MobileIron customers, enabling scripting costs extra with their MobileIron Bridge add-on.
- Depending on the vendor, the scripts might be restricted to one specific type. For instance, on
  Microsoft Endpoint Manager the only script type that may be used is PowerShell.
- Typically, the scripts are applied and run only once (unless the script itself is updated).
- Scripts can only be targeted to computers, not to users.
- The scripts can be targeted to a group of computers, but have no way to determine if conditions
  are true on the machine or not. (All the logic for when a script will apply has to be baked into
  the script).
- Scripts can take up to an hour to run (that's the nature of MDM, anyway).
- There is no way to trigger the script to re-run manually for quick testing purposes. You need to
  manually update the script and wait for MDM to re-deploy it.
- The following restrictions apply on Intune:

  - Scripts must be less than 10 KB (ASCII) or 5 KB (Unicode).
  - Scripts can only call the 32-bit version of PowerShell, so 64-bit PowerShell cmdlets cannot be
    used.
  - The scripts only run when a computer is associated with a user; so with kiosk devices, using
    the MDM scripting is often not possible.
  - The scripts will not run with hybrid scenarios (domain-joined and Azure registered devices.)


