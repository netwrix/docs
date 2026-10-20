---
title: "PowerShell: Sample Server"
description: "PowerShell: Sample Server"
sidebar_position: 30
---

# PowerShell: Sample Server

The Sample Server page provides a box to select a server to generate the result columns.

![PowerShell Data Collector Wizard Select Server page](/images/accessanalyzer/12.0/admin/datacollector/powershell/selectserver.webp)

The Select Server page options are:

- Server name – Server to use during configuration
- Validate – Validates the script results and retrieves result columns. Run validation to populate
  and enable the Results page.

The server selected here replaces any `[SAHOSTNAME]` tokens in the PowerShell script. During
execution, each host in the host list replaces the `[SAHOSTNAME]` tokens in turn. If no
`[SAHOSTHAME]` tokens exist in the PowerShell script, then the server name and the hosts in the host
list have no effect.
