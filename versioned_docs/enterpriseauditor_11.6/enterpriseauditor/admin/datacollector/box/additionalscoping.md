# Box: Additional Scoping

The Additional Scoping page is where the scan can be limited by depth of the scan. It is a wizard
page for the Scan Box Permissions category.

![Box DC Wizard Additional Scoping page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/box/additionalscoping.png)

Configure the scan depth level:

- Limit scanned depth to: [number] level – Select the checkbox and set the scan depth level to the
  desired depth. If this checkbox is not selected, then the entire Box environment will be scanned,
  according to the
  [Box: Exclusions Page](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/box/exclusions.md)
  settings. If the scoping depth is set to **0** then only root will be scanned. Each increment will
  add another level of depth from root level.
