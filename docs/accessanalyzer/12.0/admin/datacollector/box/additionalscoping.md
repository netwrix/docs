---
title: "Box: Additional Scoping"
description: "Box: Additional Scoping"
sidebar_position: 50
---

# Box: Additional Scoping

Use the Additional Scoping page to limit the scan by depth. It is a wizard
page for the Scan Box Permissions category.

![Box DC Wizard Additional Scoping page](/images/accessanalyzer/12.0/admin/datacollector/box/additionalscoping.webp)

Configure the scan depth level:

- Limit scanned depth to: [number] level – Select the checkbox and set the scan depth level to the
  desired depth. If you don't select this checkbox, the data collector scans the entire Box
  environment according to the [Box: Exclusions Page](/docs/accessanalyzer/12.0/admin/datacollector/box/exclusions.md) settings. If you set the scoping depth to
  **0**, the data collector scans only the root. Each increment will add another level of depth from root
  level.
