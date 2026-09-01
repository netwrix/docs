---
title: "Criteria Tab"
description: "Criteria Tab"
sidebar_position: 10
---

# Criteria Tab

Configure the list of selected sensitive data criteria that will be used within sensitive data scan
jobs using the Criteria Tab.

![Sensitive Data Criteria tab](/images/accessanalyzer/12.0/admin/settings/sensitivedata/criteriatab.webp)

The options on the Criteria Tab are:

- Add – Opens the Select Criteria window to add search criteria that Sensitive Data scan jobs
  inherit. See the [Select Criteria Window](#select-criteria-window) topic for additional
  information.
- Remove – Removes the selected criteria, so Sensitive Data scan jobs no longer inherit them
- Launch Editor – Opens the Sensitive Data Criteria Editor. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/12.0/sensitivedatadiscovery/criteriaeditor/overview.md) topic
  for additional information.
- Search selected criteria – Filter the criteria listed in the Criteria tab

The **Cancel** and **Save** buttons are in the lower-right corner of the Sensitive Data view. These
buttons become enabled when you modify the Sensitive Data global settings. Whenever you make changes at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if you didn't intend to make changes.

## Select Criteria Window

Add Search Criteria for Sensitive Data scan jobs:

![Add criteria](/images/accessanalyzer/12.0/admin/settings/sensitivedata/addcriteria.webp)

**Step 1 –** Click **Add** to open the Select Criteria window.

![Select Criteria window](/images/accessanalyzer/12.0/admin/settings/sensitivedata/selectcriteria.webp)

**Step 2 –** Select the checkbox for each criterion you want. Use the **Search Criteria** text field
to filter the list by keyword, or expand each category to view and select individual Sensitive Data
search criteria.

**Step 3 –** Click **OK** to confirm changes. The Select Criteria window closes.

**Step 4 –** Click **Save** on the Sensitive Data view to save changes.

Sensitive Data scan jobs that use global sensitive data criteria settings now inherit the selected
Search Criteria.
