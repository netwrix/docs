---
title: "CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)"
description: "CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)"
sidebar_position: 20
---

# CSE Autoupdate Update.Config file Usage and Parameters (before CSE 2725)

If you wish to configure or fine-tune the CSE auto-download process, you may create a file called

`update.config`, which must be placed within the Netwrix Endpoint Policy Manager (formerly
PolicyPak) Central Storage CSE folder, as seen below.

![714_1_image-20201229220359-1](/images/endpointpolicymanager/install/update/714_1_image-20201229220359-1.webp)

This file can be manually created in order to configure or fine-tune the CSE auto-download process.
This file should be created in the Endpoint Policy Manager Central Storage CSE folder, and the file
name `update.config` must match exactly, otherwise, the file is ignored. The CSE attempts to read
this file once every 90 minutes, but that is configurable in the `update.config` file itself.

:::note
The interval in our example below is set to 1 minute.
:::


![714_2_image-20201229220359-2](/images/endpointpolicymanager/install/update/714_2_image-20201229220359-2.webp)

Breakdown of the parameters for the `update.config` file and how to use them:

| Parameter               | Function                                                                                                                                                  | Values                                            | Default if Not Present                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Enabled                 | Enables/disables auto-update                                                                                                                              | True or False                                     | Enabled (True) by default                                                                                   |
| CheckForUpdatesInterval | Sets a schedule for when the CSE will perform an auto check for a new version                                                                             | Interval (in minutes) when checking for an update | The default value is 360 (6 hours). In the sample above, the value is set to 1 minute for testing purposes. |
| MSIROOT                 | Enables you to point to any share of your choice to house the CSE update (instead of using the Endpoint Policy Manager Central Storage and CSE directory) | Any share name, such as `\\server123\PPCSES`      | Defaults to `\\sysvol\sysvol\    <domain name>\policies\    PolicyPak\CSE` directory                        |
| GenerateReports         | Facilitates reports to show success or failure of machines' updates                                                                                       | True or False                                     | Disabled (False) by default                                                                                 |
| ReportsRoot             | Sets a share up to receive CSE update reports                                                                                                             | Any share name, such as `\\server123\Reports`     | This is not defined and will not generate reports if GenerateReports is not set.                            |
| CheckForConfigInterval  | Tells the CSE how often to check for updates within this configuration file                                                                               | Any interval (in minutes)                         | Defaults to 90 minutes                                                                                      |
| CSE32FILEname           | Optional value if you wish to expressly change the name of the 32-bit Endpoint Policy Manager Client-Side Extension MSI                                   | Any file name ending in MSI                       | By default, the auto-update mechanism is looking for Endpoint Policy Manager Client-Side Extension x86.MSI  |
| CSE64FILEname           | Optional value if you wish to expressly change the name of the 64-bit Endpoint Policy Manager Client-Side Extension MSI                                   | Any file name ending in MSI                       | By default, the auto-update mechanism is looking for Endpoint Policy Manager Client-Side Extension x64.MSI  |

:::note
The `ReportsRoot` value should be set if `GenerateReports` is enabled (true).
:::


:::note
`ReportsRoot` and `MSIROOT` parameters supports environment variables, such as
`%LogonServer%` and so on, if you care to use them.
:::


Setting up the Reports Share and verifying reports are working:

The share for reports should have the following permissions:

- Administrator should be set to Read/Write (owner)
- Domain Computers should be set to Read, Write, Create (but not Delete)
- NTFS permissions should allow for All.

![714_3_image-20201229220359-3](/images/endpointpolicymanager/install/update/714_3_image-20201229220359-3.webp)

NTFS permissions should be set up as shown below, where Domain Computers has all rights, except
**Full Control**.

![714_4_image-20201229220359-4](/images/endpointpolicymanager/install/update/714_4_image-20201229220359-4.webp)

This way, domain computers (that is, endpoints) will be able to write reports but not delete reports
that they create. When enabled and configured, inside the share, you'll see log files named in the
following way:

`<ReportsRoot>\<fully qualified computer name>.log.`

An example of this naming convention would be: `\\dc\Reports\WIN7COMPUTER32.fabrikam.com.log`

When you look inside the file, you will see something similar to the following text, with one line
for each CSE update that is performed.

```
 Fri Mar 15 22:54:25 2013: CSE has been updated from 3.7.545 to 4.1.711    
 Sat Mar 16 23:09:46 2013: CSE has been updated from 4.1.711 to 4.2.721
```

## Manually Triggering Updates:

Endpoint Policy Manager products have three command-line commands to help with updating on demand.

- `ppupdate /cseupdate`. When run from a target computer, this command will instruct the CSE to
  reread the `update.config` file, which is present in the SYSVOL. You might want to do this if you
  recently updated the `update.config` file and would like the client to know about those changes.
  Note that this command will not perform the actual update of the CSE, instead it will simply read
  the file and honor the new schedule and any changes.
- `ppupdate /cseupdatenow`. When run from a target computer, this command will instruct the CSE to
  reread the `update.config` file and perform any needed updates immediately.
- `ppupdate /cseupdatenow /force`. When run from a target computer, this command will instruct the
  CSE to reread the `update.config` file and perform any needed updates immediately.

:::note
This is necessary only when the `update.config` file's enabled variable is set to `False`
and, thus, not performing any updates normally.
:::


![714_5_image-20201229220359-5](/images/endpointpolicymanager/install/update/714_5_image-20201229220359-5.webp)

## Troubleshooting CSE Automatic Updates:

All machines should report something to the log files share (if set up in the `update.config` file)
and produce either a success or failure message. If you do not see a particular machine update or
perform a report, you can troubleshoot that machine individually. On the client machine, inspect the
following two Endpoint Policy Manager On-Prem Suite's log files:

- Endpoint Policy Manager MSI logs are generated in `%programdata%\endpointpolicymanager\ppInstall-<build>.log.`
- Additional logs (to see if the CSE is finding the `update.config` file at all) are found in
  `%programdata%\endpointpolicymanager\ppWatcher.log` (for 32-bit machines) or
  `%programdata%\endpointpolicymanager\ppWatcher_x64.log` (for 64-bit machines).

