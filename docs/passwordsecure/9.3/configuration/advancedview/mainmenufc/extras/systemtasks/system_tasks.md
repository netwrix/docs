---
title: "System tasks"
description: "System tasks"
sidebar_position: 40
---

# System tasks

## What are system tasks?

Netwrix Password Secure supports administrators and users by automating repetitive tasks. These are
represented as system tasks. Predefined tasks can thus be carried out at freely defined intervals.

![System Tasks](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/system_tasks/installation_with_parameters_85-en.webp)

## Relevant rights

The following options are required for managing system tasks.

User right

- Can manage Active Directory system tasks
- Can manage system task reports
- Can manage discovery service system tasks
- Can manage Emergency WebViewer export system tasks
- Can manage WebViewer export system tasks

## What can be automated?

There are currently four different work processes that can be automated using system tasks:

- **HTML WebViewer export:** Exports a freely definable selection of records in an AES-256 encrypted
  HTML file. The file is saved in the form of notifications.
- **Reports:** Automatically creates a report that is issued in the notifications. This requires a
  report request to be created in advance.
- **Network service scan:** Searches for service accounts on the network at defined cycles
- **Active Directory synchronization:** The comparison with Active Directory can also be automated
  via system tasks. This requires an active directory profile to be created in advance. It is
  important to note that only the Master Key profile can be automatically compared.

## Creating system tasks

System tasks can be initiated as usual via the ribbon or also the context menu that is accessed
using the right mouse button. The desired process to be automated using system tasks is then
selected from the four above-mentioned work processes.

![installation_with_parameters_86](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/system_tasks/installation_with_parameters_86.webp)

Naturally, the four work processes also share some similarities in their configuration.

- **Status:** The system task is normally activated and then starts immediately after it has been
  saved according to the defined intervals. If the system task is deactivated here, it is still
  saved but is not yet activated.
- **Next run:** This setting describes when the system task will be performed or when it was already
  performed for the first time (if this task was already created and is now being edited)
- **Interval:** The interval at which the system task should be executed is defined here. All
  increments between every minute and once only are possible. It is also possible to enter an end
  date.

The differences between the four work processes to be automated are described below. These
differences are always part of the task settings within the system task form – the example here
shows an HTML WebViewer export to be configured.

![installation_with_parameters_87](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/system_tasks/installation_with_parameters_87.webp)

WebViewer generator

- Filter: The passwords that should be exported are defined using a filter.
- Password: The HTML WebViewer creates an encrypted HTML file. The password is defined here and must
  then be confirmed.

Reports

- Report request: The report requests defined in Reports are available and can be selected here.

Discovery Service

- The Discovery Service scans the network and lists all of the services for which a service user has
  been saved. These can then be maintained using Netwrix Password Secure. The information collected
  can then be directly transferred to the Password Reset for this purpose.

Active Directory synchronization

- The Active Directory profile required for the synchronization is selected from those available.

Emergency WebViewer export

- The Emergency WebViewer export creates an encrypted HTML file that contains all passwords. In an
  emergency, the data required to get the system up and running again can be accessed in this file.

NOTE: Tags could be defined for individual tasks – yet they have no relevance and can also not be
used as filter criteria in the system tasks.

Status

A corresponding note will be displayed to indicate if a task is currently being executed.

![installation_with_parameters_88](/images/passwordsecure/9.2/configuration/advanced_view/mainmenu/extras/system_tasks/installation_with_parameters_88.webp)
