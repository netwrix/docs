---
title: "Rules"
description: "Rules"
sidebar_position: 10
---

# Rules

Endpoint Policy ManagerLeast Privilege Manager is located within the Netwrix Privilege Secure node.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_1.webp)

:::note
You will only see all components of Endpoint Policy Manager if you download the Endpoint
Policy Manager Admin Console from Portal.policypak.com, but not if you are using only the Netwrix
Privilege Secure console.
:::


Endpoint Policy ManagerLeast Privilege Manager is within the Netwrix Privilege Secure node and not
within the Netwrix Endpoint Policy Manager (formerly PolicyPak) node to demonstrate the relationship
between Endpoint Policy Manager and Netwrix Privilege Secure. That is, you can use all of Endpoint
Policy Manager (all Endpoint Policy Manager components) or you may wish to use Endpoint Policy
Manager alongside Netwrix Privilege Secure. For more information, see the
[Endpoint Policy Manager & Netwrix Privilege Secure](/docs/endpointpolicymanager/components/endpointprivilegemanager/manual/windows/privilegesecure/overview.md)
topic.

Endpoint Policy Manager MMC snap-in enables you to create new Endpoint Policy Manager Least
Privilege Manager policies or collections.

Collections are groupings of policies, and policies are the rules that perform the work. You can
create collections, and policies within collections, on the User side, the Computer side, or both.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_2.webp)

Endpoint Policy ManagerLeast Privilege Manager can elevate (or block) the following:

- Executable policies
- Control Panel applets
- Windows installers (MSIs)
- Scripts (BAT, CMD, PS1, JS, JSE, VBS, VBE)
- Java JAR (archive) files
- UWP applications
- COM Class Policies
- ActiveX Policies

To test some of these scenarios, we recommend that you download some applications on your Windows
endpoint to follow along. Perform these downloads as a Standard User, such as EastSalesUser1, but
notas a local admin.

For example, as EastSalesUser1, download an application that, when run by a Standard User, requires
UAC prompts. To view a UAC prompt on the Microsoft side as an example, try to
[download](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon) the Microsoft Process
Monitor application.

Running the Process Monitor application as a Standard User, such as EastSalesUser1, is not
permitted. The application requires local admin rights, resulting in a prompt for UAC.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_3.webp)

To participate in the Quick Start exercises, [download](http://go.skype.com/msi-download) Skype MSI
for Windows via their website.

:::warning
You may get a warning when downloading in Edge, but it is perfectly safe.
:::


When a Standard User attempts to install Skype MSI installer, they are not allowed.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_4.webp)

The final example is downloading a portable app. A portable app is an application that can be
downloaded anytime by a user. Sometimes it requires no installation; other times, it must be
unpacked before you can run it. Here are a few examples of these apps:

- [VLC Media Player Portable](https://portableapps.com/apps/music_video/vlc_portable)
- [Sudoku Portable](https://portableapps.com/apps/games/sudoku_portable)
- [Notepad2 Portable](https://portableapps.com/apps/development/notepad2_portable)[https://portableapps.com/apps/games/sudoku_portable](https://portableapps.com/apps/games/sudoku_portable)

In this example, Notepad2 has been downloaded and unpacked to the user’s desktop in a folder called
Notepad2.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_5.webp)

The Standard User can now open the folder and immediately run the EXE file and use the app. Despite
the fact that this application could be a virus or crypto-malware, the user with standard rights can
still run it.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_6.webp)

In the Quick Start examples with Endpoint Policy Manager Least Privilege Manager, the goals are as
follows:

- Allow Standard Users to run Process Monitor elevated but maintain Standard User rights everywhere
  else.
- Allow Standard Users to install Skype Setup MSI elevated but maintain Standard User rights
  everywhere else.
- Prevent the system from running unknown software, such as Notepad2, if it was not installed by the
  original admin until it is determined to be safe.
- Allow Notepad2 to run normally once its safety has been determined.
- Prevent users from downloading all other unknown applications.

The examples we will look at are:

- Applications on the endpoint that are properly installed by the admin (leftmost column of
  applications in this example).
- Applications that require elevation to run (Procmon in this example).
- Applications that are downloaded by the user, which may be unknown or harmful (Notepad2 in this
  example).

![A computer screen shot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/rules/rules_7.webp)

For these examples, keep copies of Process Monitor and NotePad2 Portable handy to serve as a
reference from your management station. These are not installed apps; you will be attempting to run
them before and during the Quick Start to see how they are affected by PolicyPak Least Privilege
Manager.

When you download these applications, it is ideal to store them in two places. The first copy should
be sitting on your endpoint. The second copy should be sitting on your Group Policy management
station, as these will also be required to help create the rules for these examples.



