---
title: "How do I overcome OneDrive block prompts when SecureRun is on?"
description: "How do I overcome OneDrive block prompts when SecureRun is on?"
sidebar_position: 100
---

# How do I overcome OneDrive block prompts when SecureRun is on?

Required executables must be configured to be able to run OneDrive along with SecureRun.

Configure a Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager rule to
"allow and log" the following executables. These can also be configured using the pre-configured
advice for PPLPM. You can download those from the Customer Portal → Downloads → Production-Guidance
link.

Once you have downloaded the Guidance you are looking for the Endpoint Policy Manager Least
Privilege Manager XMLs and then specifically the array of OneDrive files like what's seen here.

![707_1_image-20210317140125-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_1_image-20210317140125-2.webp)

**Step 1 –** REQUIRED - OneDrive.EXE

```
Location: %localappdata%\Microsoft\OneDrive\
```

OneDrive Sync Client and responsible for application launch in Windows Explorer. It must be set to
allow and log in the rule as shown below screenshot.

![707_2_image-20210317130045-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_2_image-20210317130045-2.webp)

**Step 2 –** REQUIRED - FileCoAuth.EXE

```
Location: %localappdata%\Microsoft\OneDrive\ [~version~] \
```

This executable needs to run once on the computer and prompts will go away.

![707_3_image-20210317130045-3](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_3_image-20210317130045-3.webp)

**Step 3 –** REQUIRED - OneDriveSetup.EXE

```
Location: %localappdata%\Microsoft\OneDrive\Update
```

OneDrive Setup Package file. Used for first-time installation and uninstallation of the program.

![707_4_image-20210317130045-4](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_4_image-20210317130045-4.webp)

**Step 4 –** OPTIONAL - FileSyncConfig.EXE

```
Location: %localappdata%\Microsoft\OneDrive\ [~version~] \
```

This file doesn't appear during OneDrive installation anymore. Configure the Allow and Log policy as
shown below when you got a SecureRun block message.

![707_5_image-20210317130045-5](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_5_image-20210317130045-5.webp)

**Step 5 –** OPTIONAL: OneDriveStandaloneUpdater.EXE

```
Location: %localappdata%\Microsoft\OneDrive\OneDriveStandaloneUpdater.exe
```

This will keep OneDrive updated using a Task entry in Windows Task Scheduler. Create this allow and
log rule when you want to keep it automated.

![707_6_image-20210317130045-6](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_6_image-20210317130045-6.webp)

OneDrive Command-line Arguments:

In some cases when OneDrive updates are pushed or for any other scenario, CMD command-lines are
triggered for OneDrive application. Give a try to our pre-configured guidance named "Microsoft
OneDrive Allow Rules needed for SecureRun.XML".

We've combined known command-line args in that XML guidance, as shown in below screenshot.

![707_7_image-20210318053310-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/707_7_image-20210318053310-1.webp)

But if you're receiving a different command-line prompt then check the following KB for more help:

[How are wildcards supported when used with Path and Command-line arguments in Least Privilege Manager?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/troubleshooting/wildcards.md)
