---
title: "How do I allow a Chrome extension blocked by SecureRun to be installed?"
description: "How do I allow a Chrome extension blocked by SecureRun to be installed?"
sidebar_position: 70
---

# How do I allow a Chrome extension blocked by SecureRun to be installed?

When SecureRun is enabled, it may block some Chrome Extensions from installing. Two examples of this
are Adobe Acrobat and Power Automate Desktop.

The commands that are run to install these extensions are as follows:

```
C:\WINDOWS\system32\cmd.exe /d /c "C:\Program Files (x86)\Power Automate Desktop\PAD.EdgeMessageHost.exe" chrome-extension://njjljiblognghfjfpcdpdbpbfcmhgafg/ --parent-window=0 < \\.\pipe\LOCAL\edge.nativeMessaging.in.8c9048e3136bfe0b > \\.\pipe\LOCAL\edge.nativeMessaging.out.8c9048e3136bfe0b
```

```
C:\WINDOWS\system32\cmd.exe /d /c "C:\Program Files (x86)\Adobe\Acrobat 2017\Acrobat\Browser\WCChromeExtn\WCChromeNativeMessagingHost.exe" chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/ --parent-window=0 < \\.\pipe\chrome.nativeMessaging.in.602ecca2de172262 > \\.\pipe\chrome.nativeMessaging.out.602ecca2de172262
```

To allow the extensions to be installed, create a New Executable Policy for each extension that is
being blocked. This can be done on either the Computer or User side, depending on who is a member of
the OU.

![700_1_image-20211111230736-1](/images/endpointpolicymanager/leastprivilege/securerun/700_1_image-20211111230736-1.webp)

**Step 1 –** Create a Combo Rule.

![700_2_image-20211111230736-2](/images/endpointpolicymanager/leastprivilege/securerun/700_2_image-20211111230736-2.webp)

**Step 2 –** Select **Path**, **Command-line arguments** and **Apply to child processes**.

![700_3_image-20211111230736-3](/images/endpointpolicymanager/leastprivilege/securerun/700_3_image-20211111230736-3.webp)

**Step 3 –** Under Path Condition, add file `%SYSTEMROOT%\System32\cmd.exe`.

![700_4_image-20211111230736-4](/images/endpointpolicymanager/leastprivilege/securerun/700_4_image-20211111230736-4.webp)

**Step 4 –** Under Command-line Arguments, select **Strict equality**; check **Ignore arguments
case**; under Arguments, we are going to take the first part of the installation command, after
`cmd.exe`, and replace the last part with asterisks.

![700_5_image-20211111230736-5](/images/endpointpolicymanager/leastprivilege/securerun/700_5_image-20211111230736-5.webp)

```
/d /c "C:\Program Files (x86)\Power Automate Desktop\PAD.EdgeMessageHost.exe" chrome-extension://*/*
```

```
/d /c "C:\Program Files (x86)\Adobe\Acrobat 2017\Acrobat\Browser\WCChromeExtn\WCChromeNativeMessagingHost.exe" chrome-extension://*/*
```

**Step 5 –** Set action as .Allow and Log.

![700_6_image-20211111230736-6](/images/endpointpolicymanager/leastprivilege/securerun/700_6_image-20211111230736-6.webp)

**Step 6 –** Rename, set ILT if required and click **Finish**.

![700_7_image-20211111230736-7](/images/endpointpolicymanager/leastprivilege/securerun/700_7_image-20211111230736-7.webp)


