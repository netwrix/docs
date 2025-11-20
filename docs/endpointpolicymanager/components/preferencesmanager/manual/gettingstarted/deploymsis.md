---
title: "Deploying MSIs to Your Target Machine"
description: "Deploying MSIs to Your Target Machine"
sidebar_position: 20
---

# Deploying MSIs to Your Target Machine

You need to take the MSI you just created and get it to your target machine. In this step, you're
simulating deployment of that MSI using whatever technique you would normally use: Microsoft
Endpoint Manager (SCCM and Intune), LANDesk, KACE, and so on. However, for the sake of this
Quickstart, you won't be using these deployment options. You'll be coping the file to the target
machine in whatever method you wish. IBelow you can see the file is copied to the desktop of the
target machine. It is done here only for demonstration purposes.

![quickstart_using_policypak_9](/images/endpointpolicymanager/preferences/quickstart_using_endpointpolicymanager_9.webp)

By running the `Deploy GPP MSI.msi` file (providing credentials as needed), you will be installing
your MSI, which is simply the Group Policy Preferences XML file.

:::note
In the real world, your software delivery tool would provide credentials and elevate the
install, and the MSI would install silently in the background.
:::


Next, the Group Policy Preferences XML file is placed within a Endpoint Policy Manager directory on
the machine, to be read and processed. Within 10 seconds, you should see the Group Policy Preference
item apply the www.policypak.com shortcut URL on the desktop.

![quickstart_using_policypak_10](/images/endpointpolicymanager/preferences/quickstart_using_endpointpolicymanager_10.webp)

:::note
This demonstration will only work successfully when the computer is in Licensed or Trial
mode (with "computer" in the name) and the Endpoint Policy Manager Preferences Manager client-side
extension (CSE) is installed on the machine.

:::


