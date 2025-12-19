---
title: "Exceptions Node Report"
description: "Exceptions Node Report"
sidebar_position: 100
---

# Exceptions Node Report

The following report is available at the **Exceptions** node:

- [Exceptions Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/exceptions/exceptions.md)

The Exceptions node displays when exceptions have been identified on the selected farm/instance.
When it is present, it can be expanded to view the exception type level reports. The following nodes
may show under the Exceptions node for a SharePoint resource when that exception type has been
identified:

- Disabled Users – Site collections, sites, libraries, lists, or folders where disabled users have
  been granted access
- Open resources – Site collections, sites, libraries, lists, or folders that are openly accessible
- Stale Users – Site collections, sites, libraries, lists, or folders where stale users have been
  granted access
- Unresolved SID – Site collections, sites, libraries, lists, or folders where the trustee is an
  unknown SID, not matched to a known trustee account within Active Directory for on-premise farms
  or Entra ID for online instances, have been granted access

The Exceptions report for each exception type level displays filtered exception information. See the
[Exceptions by Type Report](/docs/accessinformationcenter/12.0/resourceaudit/sharepoint/exceptions/exceptionsbytype.md) topic for the report details.
