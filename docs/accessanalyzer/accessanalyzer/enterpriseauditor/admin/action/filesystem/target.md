# File System Action: Target

Use the Target page to point the action module towards a file path on the specified host. Environmental variables (for example, Program Files, SystemRoot, SAInstallDir, and so on) can be used when creating a path as well as fields in the raw table output to populate the __Target items__ field.

![File System Action Module Wizard Target page](/static/img/product_docs/activitymonitor/activitymonitor/admin/search/query/target.png)

Use the fields provided to select target items and hosts from the drop-down lists and populate the Target items field, or edit the field manually. The Preview field updates based on the contents of the Target items field.

- Fields – Use the drop-down list to select a field (column) from the source table, then click the blue arrow to insert the item into the __Target items__ field
- Environment Variables – Select an item from the drop-down list, then click the blue arrow to insert the item into the Target items field
- Target items – Enter the path to the target file or folder

  - Click the __ellipsis (…)__ to browse for pattern path specification
  - Click the __tick__ icon to show a preview of the specified path
  - Click the __Help__ icon for additional information
- Host – Select the field that identifies the systems or manually type the host to take action against
- Use path type – Choose from the following options:

  - Local – Uses the local path
  - UNC – Uses the UNC path
- Preview – Shows what the compound path specified will be resolved in to. The text here is used to initialize the file specification selection dialog.
