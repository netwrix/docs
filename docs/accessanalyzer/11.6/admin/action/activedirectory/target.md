---
title: "Active Directory Action Target"
description: "Active Directory Action Target"
sidebar_position: 10
---

# Active Directory Action Target

Use the Target (Identification Criteria) page to select one or more fields (columns) in the
Enterprise Auditor source table that uniquely identifies the target Active Directory objects upon
which to perform the action. This process enables Enterprise Auditor to locate those objects within
Active Directory. Added fields are displayed in the textbox.

![Active Directory Action Module Wizard Target page](/images/accessanalyzer/11.6/admin/action/activedirectory/target.webp)

Use the following options to configure the action:

- Add – Adds the selected field and field type to the Selections pane
- Delete – Removes the highlighted operation from the Selection pane
- Field – The name of the column in the Enterprise Auditor source table. Select the field that
  uniquely identifies the target AD objects (represented by rows in the Enterprise Auditor table).
  The drop-down list displays the fields from the source data table specified on the Action
  Properties page. The list excludes any default fields such as HOSTSTATUS, on which actions cannot
  be performed.
- Field Type – The type of data contained in the specified field. Enterprise Auditor must know the
  data type of the field selected above. Otherwise, errors may appear upon execution of the action
  and report results may be incomplete. The drop-down list contains the following field types:

    - Distinguished Name or DN
    - GUID
    - SID
    - WindowsID
    - E-Mail
    - Employee (employeeID)

:::note
While one field is usually sufficient to identify AD objects, if specifying multiple
fields, each field type can only be used once.

:::
