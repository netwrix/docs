---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 120
---

# Troubleshooting

Endpoint Policy Manager Least Privilege Manager problems can generally be divided into three
categories:

- Case 1: You expected a rule to bypass UAC, but it did not.
- Case 2: A rule is bypassing UAC, and it was not expected.
- Case 3: A rule is preventing an item from running when not expected.

In all cases, you can see detailed information about the occurrence within the Endpoint Policy
Manager Least Privilege Manager log files which are found in:
`%appdata%\local\PolicyPak\PolicyPak Least Privilege Manager and %Programdata%\PolicyPak\PolicyPak Least Privilege Manager`

First, you need to open the correct log file, based on the activity that has occurred, to see which
Endpoint Policy Manager Least Privilege Manager policies you have. There are several files to check:

- ppUser_OnLogon.log. This log gets new data when Group Policy applies at logon, and items are set
  for the User side, not the Computer side.
- ppUser_Switched.log. This log file is updated when Group Policy applies at logon, but items are
  set for the Computer side.
- ppUser_OnGroupPolicy.log. This log gets new data when Group Policy applies in the background when
  GPupdate is run, or when Group Policy applies in the background.
- ppUser_onPolicyChanged.log. This log file is updated when Group Policy applies in the background,
  or when a non-Group Policy method is used (e.g., Microsoft Endpoint Manager (SCCM and Intune) or
  Endpoint Policy Manager Cloud).

Start troubleshooting by verifying that the following conditions (seen here) are true:

- You have the GPO (or file).
- There is a collection within the GPO.
- The rules are within the collection.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/troubleshooting/leastprivilege/troubleshooting_1.webp)

The final log to check is the ppUser_Operational.log, which can indicate why something is denied
(blocked), allowed, or elevated. It shows what was trying to run and which GPO, collection, and
policy performed the action, along with the ultimate result. For example, this log shows a Deny
result.

![A screenshot of a computer code Description automatically generated](/images/endpointpolicymanager/troubleshooting/leastprivilege/troubleshooting_2.webp)

An Allowed result can be seen here.

![A screenshot of a computer code Description automatically generated](/images/endpointpolicymanager/troubleshooting/leastprivilege/troubleshooting_3.webp)

An Elevated result can be seen here.

![A screenshot of a computer code Description automatically generated](/images/endpointpolicymanager/troubleshooting/leastprivilege/troubleshooting_4.webp)

Additionally, as expressed earlier, you can also see when Admin Approval dialogs are shown to end
users, when they are canceled, and which processes failed to run because they did not get
Administrator privileges. In this screenshot you can see that the dialog was canceled, which means
the end user was not permitted to perform an action which required a UAC prompt.

![A screenshot of a computer program Description automatically generated](/images/endpointpolicymanager/leastprivilege/adminapproval/avoid_pop_ups_with_admin_approval_1.webp)

Additionally, Admin Approval is logged in the ppUser_Operational.log file as well, which shows when
applications require Admin privileges and when the user successfully enters in a response code from
an Admin when he or she uses the Endpoint Policy Manager Admin Approval Tool.

:::note
The Reason Code is also stored here and is a fixed list from within the Endpoint Policy
Manager Admin Approval Tool.
:::


```
Admin Approval Dialog (2018/07/14, 15:55:20.312, PID: 1360, TID: 3020)
{
    Process requires administrator privileges
    Dialog Guide: {3F8058CB-AB08-F878-D146-78312F2B7031} User Sid: S-1-5-    21-934088035-149717768-3671783038-1116
    User Name: FABRIKAM\EastSalesUser1 Process Id: 7072
    Process Path: C:\Users\eastsalesuser1\Desktop\Silverlight install.exe
    Command Line: "C:\Users\eastsalesuser1\Desktop\Silverlight install.exe"
    Task Kind: ApplicationInstaller 
    Task Hash:
25AA5CA53202838E3937FCFF39B3DB34C6B5A7188D28F45D7BFEDE81CF37ED6D
    Executable: C:\Users\eastsalesuser1\Desktop\Silverlight install.exe
    File Owner Sid: S-1-5-21-934088035-149717768-3671783038-1116
    File Owner Name: FABRIKAM\EastSalesUser1 Trusted: No
    Signed: Yes
} // End of Admin Approval Dialog, elapsed time: 00:00:00.001
Admin Approval Dialog (2018/07/14, 15:56:10.279, PID: 1360, TID: 2920)
{
    Dialog success
    Dialog Guid: S-1-5-21-934088035-149717768-3671783038-1116 User Sid: S-1-5-21-934088035-149717768-3671783038-1116
    User Name: FABRIKAM\EastSalesUser1 Process Id: 7072
    Process Path: C:\Users\eastsalesuser1\Desktop\Silverlight install.exe
    Command Line: "C:\Users\eastsalesuser1\Desktop\Silverlight install.exe"
    Task Kind: ApplicationInstaller 
    Task Hash:
25AA5CA53202838E3937FCFF39B3DB34C6B5A7188D28F45D7BFEDE81CF37ED6D
    Executable: C:\Users\eastsalesuser1\Desktop\Silverlight install.exe
    File Owner Sid: S-1-5-21-934088035-149717768-3671783038-1116
    File Owner Name: FABRIKAM\EastSalesUser1 Trusted: No
    Signed: Yes
    Reason: Application_LOB 
    Forced Elevation: No

```

If requested by support, logs are automatically wrapped up and can be sent to Netwrix Support with
the PPLOGS.EXE command on any endpoint where the client-side extension is installed.



