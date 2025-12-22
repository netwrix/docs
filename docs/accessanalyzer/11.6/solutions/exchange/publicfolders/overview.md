---
title: "5. Public Folders Job Group"
description: "5. Public Folders Job Group"
sidebar_position: 60
---

# 5. Public Folders Job Group

The 5. Public Folders job group is comprised of data collection, analyses, and reports that focus on
public folder sizing, content aging, entitlement, ownership, and the identification of each public
folder’s Most Probable Owner. The Most Probable Owner is a unique algorithm built into the public
folder data collector that is determined based on folder ownership, content posted, and size of
content posted.

![5.Public Folders Job Group in the Jobs Tree](/images/accessanalyzer/11.6/solutions/exchange/publicfolders/jobstree.webp)

The following comprise the 5. Public Folders job group:

- [Content Job Group](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/content/overview.md)
  – Provides visibility into public folder sizing and content aging
- [Growth and Size Job Group](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/growthsize/overview.md)
  – Comprised of data collection, analysis, and reports that focus on public folder sizing and
  growth
- [Ownership Job Group](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/ownership/overview.md)
  – Comprised of analysis and reports that focus on public folder ownership, and most importantly
  the identification of each public folder's Most Probable Owner
- [Permissions Job Group](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/permissions/overview.md)
  – Provides visibility into permissions applied to each public folder
- [PF_Overview Job](/docs/accessanalyzer/11.6/solutions/exchange/publicfolders/pf_overview.md)
  – Comprised of analysis and reports that provides a top level summary of each parent public folder
  and correlates information from the message tracking logs to identify the last time a public
  folder received mail

The **5. Public Folders** > **Ownership** job group uses the ExchangePublicFolder, a MAPI-based data
collector. Therefore, it requires both Enterprise Auditor MAPI CDO and Microsoft Exchange MAPI CDO
to be installed on the Enterprise Auditor Console server. Once these have been installed, the
**Settings** > **Exchange** node must be configured for proper connection to the Exchange server.
See the
[Exchange](/docs/accessanalyzer/11.6/admin/settings/exchange.md)
topic for additional information.
