---
title: "Reports"
description: "Reports"
sidebar_position: 30
---

# Reports

## What are reports?

Comprehensive reporting is an important component of the ongoing monitoring of processes in Netwrix
Password Secure. Similar to selectively configurable
[Notifications](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/notifications.md),
reports also contain information that can be selectively defined. The difference is mainly the
trigger. Notifications are linked to an event, which acts as the trigger for the notification. In
contrast, reports enable tabular lists of freely definable actions to be produced at any selected
time – the trigger is thus the creation of a report. This process can also be automated via
[System tasks](/docs/passwordsecure/9.1/configuration/advancedview/mainmenufc/extras/systemtasks/system_tasks.md).

![reports](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/extras/reports/installation_with_parameters_78-en.webp)

NOTE: Reports only ever contain information for which the user has the required permissions.

A separate tab for managing existing reports and creating new reports can be opened in the current
module via the Main menu/Extras/Reports. The module in which the report is opened is irrelevant, the
contents are always the same.

![installation_with_parameters_79](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/extras/reports/installation_with_parameters_79.webp)

The filter on the left has no relevance in relation to reports. Although reports can also be
“tagged” in theory, filtering has no effect on the reports. In
[List view](/docs/passwordsecure/9.1/configuration/advancedview/operationandsetup/list_view.md),
there are currently three configured report requests shown.

#### Creating a report request

New report requests can be created in list view via the ribbon or also the context menu that is
accessed using the right mouse button. The form for creating a new report request again opens in a
separate tab. Alongside a diverse range of variables, the report type can be defined using a
drop-down list. There are currently dozens of report types available.

![installation_with_parameters_80](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/extras/reports/installation_with_parameters_80.webp)

The filter can be used to define the scope of the report e.g. to focus on a certain OU or simply a
selection of tags. Once saved, the report will now be shown in the list of report requests.

###### Manually create reports

You can now create a manual report via the ribbon. This will open in a separate tab and can be
displayed in the default web browser if desired.

![installation_with_parameters_81](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/extras/reports/installation_with_parameters_81.webp)

**Automated sending of reports via system tasks**

In general, reports are not manually created but are automatically sent to defined recipients. This
is apossible via system tasks, which can run processes of this nature at set times.
