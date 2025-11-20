---
title: "How are DRIVE MAPS and UNC paths supported in Endpoint Privilege Manager?"
description: "How are DRIVE MAPS and UNC paths supported in Endpoint Privilege Manager?"
sidebar_position: 60
---

# How are DRIVE MAPS and UNC paths supported in Endpoint Privilege Manager?

First, let's start with UNC paths.

## UNC Paths:

- UNC Paths are supported and honored.
- Note that the same UNC target could have different names, for instance` \\fabrikam\share`,
  `\\fabrikam.com\share `or `\\192.168.2.10\share` might all point the exact same place.
- Each rule name is evaluated differently.
- Therefore, as an example… to make your UNC rules, you would need to cover all the bases:
  - A rule could be for `\\fabrikam\Share `which will work, but…
  - You would also need a rule for` \\fabrikam.com\Share` and also if desired…
  - You would need a rule for `\\192.168.2.10\share….`

:::note
If you want to elevate all files in `\\SERVER\Share` you must use` TARGET = FOLDER` (see
screenshot below.)
:::


But if you want to elevate all files in `\\Server\Share `AND all files in any subfolders
(`\\Server\Share\Subfolder1, \\Server\Share\Subfolder2`, etc.) then you must specify
`TARGET = FOLDER` (recursive) (see screenshot below.)

## Understanding Drive Maps in relation to UNC paths:

Think of drive maps like "shortcuts" which map to existing UNC paths. So, S: is really a map to
`\\fabrikam\share`, `\\fabrikam.com\share or \\192.168.2.10\share`

Therefore if you want to elevate something on the S: drive, you need to ALSO have the
`\\server\share` elevated expressly.

## DFS Paths:

DFS Paths are also supported and honored.

:::note
The UNC paths with the format of `\\example\example`
:::


:::note
The same DFS target (`DFS.global.fabrikam.com`) may resolve to different names, for
instance `\\london.fabrikam.com\share`,
`\\paris.fabrikam.com\share`,  `\\nyc.fabrikam.com\share` might all use the exact same DFS path.
:::


- Each rule name is evaluated differently.
- Therefore, as an example… to make your UNC rules, you would need to cover all the bases:
  - Instead of a rule for` \\DFS.global.fabrikam.com\Share` which most likely will NOT work...
  - You would need rules for all the possible servers that are assigned to the DFS
    namespace `\\london.fabrikam.com\Share`, `\\paris.fabrikam.com\Share` and
    also `\\nyc.fabrikam.com\share`

CSE 24.7 and later:

- To make your UNC rules, you would simply need a rule for `\\DFS.global.fabrikam.com\Share`
- CSE 24.7 will automatically locate all the possible servers that are assigned to the DFS namespace
  `\\london.fabrikam.com\Share`, `\\paris.fabrikam.com\Share` and also `\\nyc.fabrikam.com\share`
- Add to configure the CSE to attempt to unwind a DFS share into its underlying servers and shares
  use the DFS checkbox seen below.

  - **CAUTION:** Do not use the DFS checkbox if the path is not a DFS share.

![pathconditiondfs](/images/endpointpolicymanager/troubleshooting/leastprivilege/pathconditiondfs.webp)

CSE Pre 24.7:

- To make your UNC rules, you would need to cover all the bases:
- Instead of a rule for `\\DFS.global.fabrikam.com\Share` which most likely will NOT work...
- You would need rules for all the possible servers that are assigned to the DFS namespace
  `\\london.fabrikam.com\Share`, `\\paris.fabrikam.com\Share` and also `\\nyc.fabrikam.com\share`

## Additional thoughts for various rule types:

For EXE rules in all versions:

And also for all Non-EXE rules as of version 2340 and higher:

- You do not need to make any explicit "Drive map" rules. So, don't elevate "S:" in Endpoint Policy
  Manager
  [https://www.policypak.com/products/least-privilege-manager.html](https://www.policypak.com/products/least-privilege-manager.html).
  That is incorrect syntax.
- Instead, you would make a UNC path rule for what S: is really pointing to.
- So, for instance, if you want to elevate all files in S: (which is mapping to
  `\\fabrikam.com\share`), that's fine:

  - You don't need to have a Endpoint Policy Manager Least Privilege Manager rule to "Elevate S:".
  - You DO need to have a Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege
    Manager rule to "`Elevate\\fabrikam.com\share`" and select Folder or Folder (Recursive) as
    shown here.

    ![502_1_image-20200121124504-1](/images/endpointpolicymanager/troubleshooting/leastprivilege/502_1_image-20200121124504-1.jpeg)

For Non-EXE rules created in version 2339 and lower:

- Create the rules based on how the application is being accessed, in other words if the application
  will be accessed via a UNC path then create the rule using the UNC path. If the application will
  be accessed via a drive letter then create the rule based on the drive letter.
- So, for instance, if all of your Non-EXE applications reside in a folder normally accessed via the
  drive letter S: and you want to elevate all the Non-EXE files in S:
- You should create a Endpoint Policy Manager Least Privilege Manager rule to Elevate the path to
  the folder using the S: drive and then select Folder or Folder (Recursive) as shown below.

![502_3_image](/images/endpointpolicymanager/troubleshooting/leastprivilege/502_3_image.webp)

To cover all bases you can also create the rule with all possible paths:

![502_4_image](/images/endpointpolicymanager/troubleshooting/leastprivilege/502_4_image.webp)

Troubleshooting Non-EXE rules:

- If an elevation rule does NOT work, you can create a simple path rule for any of the Non-EXE
  files, (ie. MSI) using a wildcard, for example: `*\SkypeSetup.msi` then launch the MSI after
  running` gpupdate` on the target machine and then check the Endpoint Policy Manager event log to
  see which path was shown for the MSI (see screenshot below). Lastly, use that path for your
  Non-EXE rule:

![502_5_image-20200121124504-4](/images/endpointpolicymanager/troubleshooting/leastprivilege/502_5_image-20200121124504-4.webp)

![502_7_image-20200121124504-5](/images/endpointpolicymanager/troubleshooting/leastprivilege/502_7_image-20200121124504-5.webp)


