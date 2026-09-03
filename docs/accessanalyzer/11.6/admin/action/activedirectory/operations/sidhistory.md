---
title: "Clear/Set SID History"
description: "Clear/Set SID History"
sidebar_position: 10
---

# Clear/Set SID History

Use the Clear/Set SID History page to overwrite or append to the SID history for targeted objects.
review the restrictions for this operation in the Notes box.

The source table used for this operation must contain a column with the following information:

- SID History data

![Active Directory Action Module Wizard Clear/Set SID History page](/images/accessanalyzer/11.6/admin/action/activedirectory/operations/sidhistory.webp)

Configure the action with the following options:

- Overwrite – Overwrites the SID History
- Append – Adds to the SID History
- Clear – Clears the SID History
- Insert Field – Selecting the Overwrite or Append radio button enables this dropdown list. Use the
  dropdown list to select a field (column) from the source table. Then, click the blue arrow to
  insert the item into the SID History box. Depending on which radio button you select, the action
  overwrites the SID history with the selected fields or appends the selected fields to it.
- SID History – Selecting the Overwrite or Append radio button enables this box. Depending on which
  radio button you select, the action overwrites the SID history with the inserted fields or appends
  the inserted fields to it. Populate the SID History box using either of the following methods:

    - Select one or more fields at the Insert Field dropdown menu
    - Click the **ellipsis (…)** to access the Select Users or Groups window to populate this field

- Reference link – Accesses a Microsoft web page called Using DsAddSidHistory containing important
  information on SID history
