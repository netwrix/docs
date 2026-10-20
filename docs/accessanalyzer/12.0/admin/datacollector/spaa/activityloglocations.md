---
title: "SPAA: Activity Log Locations"
description: "SPAA: Activity Log Locations"
sidebar_position: 120
---

# SPAA: Activity Log Locations

Use the Activity Log Locations page to manually configure log locations, to avoid requiring remote
registry access to locate the activity event log files. It's a wizard page for the category
of Scan SharePoint Activity.

![Activity Log Locations page](/images/accessanalyzer/12.0/admin/datacollector/spaa/activityloglocations.webp)

The options in the Activity Log Locations page are:

- Add – Opens the Customize Activity Log UNC Paths location window to add a new host
- Add Default – Opens the Customize Activity Log UNC Paths location window for the default host
- Edit – Opens the Customize Activity Log UNC Paths window for the selected host. If you make edits,
  click **OK** to save the changes.
- Remove – Removes the selected host

![Customize Activity Log UNC Paths Window](/images/accessanalyzer/12.0/admin/datacollector/spaa/customizeactivityloguncpaths.webp)

The options in the Customize Activity Log UNC Paths Window are:

- Host name – Host name of the targeted SharePoint On-Premises server or SharePoint Online tenant
- SBTFileMon.ini UNC path – UNC path to the location of the **SBTFileMon.ini** file (as configured
  in **Activity Monitor** > **Monitored Hosts**)
- Activity log UNC path – UNC path to the location of the **SBTFileMon_Logs** folder containing the
  Activity Logs (as configured in **Activity Monitor** > **Monitored Hosts**)

    :::note
    For On-Premises environments you don't need to specify an Activity Log UNC path as
    the Data Collector will default to finding the log locations via the registry.
    :::


- Activity archive UNC path – UNC path to the archive location of Activity Logs (as configured in
  **Activity Monitor** > **Agents**). If you haven't enabled archiving in Activity Monitor, you can
  leave this blank.

:::note
In any UNC paths, Access Analyzer replaces `%HOST%` with the host name.
:::


See the Getting Started with SharePoint & SharePoint Online Activity Monitor topic in the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.
