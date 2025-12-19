---
title: "conceptClassifier App Options"
description: "conceptClassifier App Options"
sidebar_position: 30
---

# conceptClassifier App Options

This section contains the settings related to conceptClassifier application. As these are advanced
options, you should click the screwdriver icon at **Settings** in the bottom-right corner to view
them.

Each option has an associated “**i**” which describes the nature of the setting.

![core_thumb_0_0](/images/dataclassification/5.6.2/configuration/core_thumb_0_0.webp)

**NOTE:** To view a complete list of the **Config** settings, click the Details tab. The list also
has an indication of the values that have been changed from the default setting.

The following options can be configured for conceptClassifier app:

| Option                                 | Description                                                                                                                                                                                                                                                                                                                                                  | Comment                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| Write Mode                             | Allows you to configure the update method that will be used by the Classification service to update SharePoint documents. Possible options: - **Alter audit information** - Simple Update operation - **Maintain audit information** - ValidateUpdateListItem operation - **Maintain audit information with no alerts (O365 only)** - SystemUpdate operation | Applies to SharePoint documents. |
| Manually Classify Cleared Fields       | When enabled, fields will be marked as manually classified if the user clears them. If disabled, auto classification must be manually turned off by the user to stop the field being updated.                                                                                                                                                                |                                  |
| Hide Sql (Local) Taxonomy Calculations | When disabled, any classifications/calculations will be hidden from the SharePoint View Classifications display (Classic and Modern UI).                                                                                                                                                                                                                     |                                  |
| Ignore Manual Classifications From     | A semicolon-delimetered list of usernames. Any updates to classification of new documents in SharePoint by these users will be ignored.                                                                                                                                                                                                                      |                                  |
