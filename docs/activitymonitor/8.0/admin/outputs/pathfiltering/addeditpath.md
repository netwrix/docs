---
title: "Add or Edit Path Window"
description: "Add or Edit Path Window"
sidebar_position: 10
---

# Add or Edit Path Window

The Add or Edit Path window is opened from the Path Filtering tab of a monitored host's output
Properties window.

![addoreditpath](/images/activitymonitor/8.0/admin/outputs/window/addoreditpath.webp)

- Specify a path to filter during collection – Enter a file path in the textbox or use the ellipsis
  (…) to browse for a folder
- Filter Type – Indicates if the filter will be **Included** or **Excluded**

Then click OK. The Add or Edit Path window closes, and the path is added to the filtering list for
the monitored host.

## Special Consideration for NAS Device Hosts

For NAS devices, the activity agent can configured to add ‘C:\’ to the beginning of the path, which
is a requirement for the output that is designated for StealthAUDIT.exe or being read by a Netwrix
Threat Prevention agent. That configuration is on the [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md). If the option
is enabled for this monitored device, start your paths with C:\.

## Wildcard

Wildcard filtering can be configured using the following wildcard characters:

| Wildcard | Definition                                                   |
| -------- | ------------------------------------------------------------ |
| \*       | matches zero or more characters (except for "\" or "/")      |
| ?        | matches any single character (except for "\" or "/")         |
| \*\*     | matches zero or more characters (useful for directory trees) |
