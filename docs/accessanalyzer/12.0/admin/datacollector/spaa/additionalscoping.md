---
title: "SPAA: Additional Scoping"
description: "SPAA: Additional Scoping"
sidebar_position: 60
---

# SPAA: Additional Scoping

Use the Additional Scoping page to limit the scan by depth. It's a wizard
page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

:::warning
Don't change scans in a way that results in returning less data on a subsequent scan (i.e.
scanning fewer web applications, scanning fewer site collections, or a shallower depth scan).
Access Analyzer marks resources not included in a subsequent scan as deleted in the Tier 2
database and later removes them from the Tier 1 database.
:::


![Additional Scoping page](/images/accessanalyzer/12.0/admin/datacollector/spaa/additionalscoping.webp)

If checked, set the **Limit scanned depth to: [number] levels** option to the depth you want. If
you don't check this option, Access Analyzer scans the entire farm. If you set the scoping depth to
**0**, Access Analyzer scans only root site collections. Each increment to the depth adds an
additional level of depth from that point.

Check the **Perform differential scan** box to enable the job to run a differential scan.
Access Analyzer enables differential scanning by default. When you enable this option, the SPAA
scan will only parse files for content/SDD if they changed since the last scan.

:::note
This option only applies to Tag collection and Sensitive data collection. Access Analyzer will
still scan files for permissions regardless of whether you check this option.

:::
