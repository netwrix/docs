---
title: "Managing Windows 10 Start Screen and Taskbar with the In-Box Method"
description: "Managing Windows 10 Start Screen and Taskbar with the In-Box Method"
sidebar_position: 10
---

# Managing Windows 10 Start Screen and Taskbar with the In-Box Method

If you didn't have Start Screen & Taskbar Manager, you could still manage Start Screen and Taskbar
settings on Windows 10, but it would be difficult and not very user-friendly.

The following is a Microsoft-sanctioned way to establish the Start Screen and Taskbar for Windows
8.1 and Windows 10:

1. Create a "perfect machine," fully installed with all applications.
2. Correctly configure all the Start Screen settings by putting them into the groups you want and
   pinning any items to the Taskbar.
3. Use the Powershell command to export the Start Screen layout XML file. The command would be
   something like `export-startlayout –path <path><file name>.xml`.
4. Use Group Policy to ensure that specific computers use this XML file.

The exported file from this process might look something like what's seen in Figure 1.

![about_policypak_start_screen](/images/endpointpolicymanager/startscreentaskbar/insouts/about_endpointpolicymanager_start_screen.webp)

Figure 1. An exported XML file using the Microsoft-sanctioned way to establish the Start Screen and
Taskbar for Windows 10.

Next, you would configure the Group Policy setting called "Start Layout," seen in Figure 2.

![about_policypak_start_screen_1](/images/endpointpolicymanager/startscreentaskbar/insouts/about_endpointpolicymanager_start_screen_1.webp)

Figure 2. Configuring Group Policy settings after establishing the Start Screen and Taskbar using
the in-box, Microsoft-sanctioned way.

The disadvantages of using this in-box method for Windows 10 are as follows:

- You need a perfect machine for each new application deployment.
- You will likely need different associations files for different machines.
- You might need to segment your computers into different organizational units (OUs) if you have
  different Start Menu groups for each group.
- You need to follow this process, even if you have just one or two applications you want to add to
  the Start Screen or Taskbar.
- To get the best experience, you need to do this for all applications a user is going to ever need
  on the Start Menu or Taskbar.
- The entire XML file must be "perfect" and not have any variations.

In summary:

- When your needs change, there is nothing dynamic about this process.
- This process is all manual.
- This process requires a lot of effort to build the "perfect machine" for each different computer
  group, export the files one by one for each group, and ensure all computers get the correct file.

All of this becomes time consuming and will quickly get out of hand every time you must update and
roll out an application that will be the registered extension or protocol.


