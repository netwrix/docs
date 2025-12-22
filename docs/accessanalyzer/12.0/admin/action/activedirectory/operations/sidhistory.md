---
title: "Clear/Set SID History"
description: "Clear/Set SID History"
sidebar_position: 10
---

# Clear/Set SID History

Use the Clear/Set SID History page to overwrite or append to the SID history for targeted objects.
Please review the restrictions for this operation in the Notes box.

The source table used for this operation must contain a column with the following information:

- SID History data

![Active Directory Action Module Wizard Clear/Set SID History page](/images/accessanalyzer/12.0/admin/action/activedirectory/operations/sidhistory.webp)

Configure the action with the following options:

- Overwrite – Overwrites the SID History
- Append – Adds to the SID History
- Clear – Clears the SID History
- Insert Field – This drop-down list is enabled when the Overwrite or Append radio buttons are
  selected. Use the drop-down list to select a field (column) from the source table. Then, click the
  blue arrow to insert the item into the SID History box. The SID history is overwritten with the
  selected fields or appended to with the selected fields depending on the selected radio button.
- SID History – This box is enabled by selecting the Overwrite or Append radio buttons. The SID
  history is overwritten or appended to with the inserted fields, depending on the selected radio
  button. Populate the SID History box using either of the following methods:

    - Select one or more fields at the Insert Field drop-down menu
    - Click the **ellipsis (…)** to access the Select Users or Groups window to populate this field

- Reference link – Accesses a Microsoft web page called Using DsAddSidHistory containing important
  information on SID history
