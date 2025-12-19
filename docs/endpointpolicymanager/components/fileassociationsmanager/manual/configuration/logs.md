---
title: "Logging Locations"
description: "Logging Locations"
sidebar_position: 20
---

# Logging Locations

Endpoint Policy Manager File Associations Manager log files are found in
`%Programdata%\PolicyPak\PolicyPak File Associations Manager.` This is because Endpoint Policy
Manager File Associations Manager affects the computer (and all users on that computer).It's also
possible there might be some user-side logins in
`%appdata%\local\PolicyPak\PolicyPak File Associations Manager`, but they will not be useful since
all Endpoint Policy Manager File Associations Manager work happens on the Computer side.

There are several files to check in the folder
`%Programdata%\PolicyPak\PolicyPak File Associations Manager.` These files are:

- `ppUser_OnLogon.log`: This log file is updated when Group Policy applies at the time of login (and
  items are set for the User side, not the Computer side).
- `ppUser_Switched.log`: This log file is updated when Group Policy applies at the time of login
  (and items are set for the Computer side).
- `ppUser_OnGroupPolicy.log`: This log file is updated when Group Policy applies in the background
  (when you run GPupdate or Group Policy applies in the background).
- `ppUser_onPolicyChanged.log`: This log file is updated when Group Policy applies in the background
  or when a method other than the Group Policy method is used (e.g., Microsoft Endpoint Manager
  [SCCM and Intune] and Endpoint Policy Manager Cloud).

Start troubleshooting by verifying that the following conditions are true:

- You have the Group Policy Object (GPO) (or file).
- You have a collection within the GPO.
- You have the rules within the collection.

Figure 55 and Figure 56 are examples of Endpoint Policy Manager File Associations Manager logs with
some important items highlighted.

![troubleshooting_1](/images/endpointpolicymanager/troubleshooting/fileassociations/troubleshooting_1.webp)

Figure 55. An example of a Endpoint Policy Manager File Associations Manager log.

![troubleshooting_2](/images/endpointpolicymanager/troubleshooting/fileassociations/troubleshooting_2.webp)

Figure 56. Highlights from the Endpoint Policy Manager k File Associations Manager log.

If needed, logs can be automatically wrapped up and sent to support by [opening a support ticket](https://www.netwrix.com/tickets.html#/open-a-ticket) with the `PPLOGS.EXE` command on any endpoint
where the client-side extension is installed.


