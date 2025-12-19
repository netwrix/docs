---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 30
---

# Troubleshooting

Netwrix Endpoint Policy Manager (formerly PolicyPak) log files for Endpoint Policy Manager RDP
Manager are found in the following folders:

- `%Programdata%\PolicyPak\PolicyPak Remote Desktop Protocol Manager for Computer side logs`
- `%AppData%\PolicyPak\PolicyPak Remote Desktop Protocol Manager for User side logs`

There are also several files to check in the User folder:

- `ppUser_OnLogon.log`: New data is added to this log when Group Policy applies at the time of login
  (and items are set for the User, not the Computer).
- `ppUser_Switched.log`: New data is added to this log when Group Policy applies at the time of
  login (but items are set for the Computer).
- `ppUser_OnGroupPolicy.log`: New data is added to this log when Group Policy applies in the
  background (on GPupdate or when Group Policy applies in the background).
- `ppUser_onPolicyChanged.log`: New data is added to this log when Group Policy applies in the
  background or when a method other than Group Policy is used (Microsoft Endpoint Manager [SCCM and
  Intune], PolicyPak Cloud, and so on).

Start troubleshooting by verifying the licensing, GPO name, and collection or policy name, as shown
in Figure 18.

![troubleshooting](/images/endpointpolicymanager/troubleshooting/remotedesktopprotocol/troubleshooting.webp)

Figure 18. The ppuser log file.


