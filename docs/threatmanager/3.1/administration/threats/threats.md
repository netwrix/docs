---
title: "Threats Page"
description: "Threats Page"
sidebar_position: 30
---

# Threats Page

The Threats page is where end-users and analysts investigate possible threats in their environment.
This page displays an historical timeline of the detected threats and advanced filtering that allows
users to find threats with ease.

## All Threats

The Threats section contains a bar chart and a pie chart. The Threats bar chart displays the number
of each type of threat by date range increments of one week, over a 13-week time span. The Threats
pie chart displays the total number of threats by type of threat.

![threatspage](/images/threatmanager/3.0/administration/threatspage.webp)

Hover over the bar chart or pie chart to view the number of threats by threat type.

## Historical Events

The Historical Events section provides a drop-down menu to select threats for a specific date range.
Threats can also be filtered by specifying a timeframe. A predefined time span can also be selected
from the menu options in the right pane.

![historicalevents](/images/threatmanager/3.0/administration/historicalevents.webp)

These threats are displayed in a list format below the Historical Events section.

## Threats List

The Threats list is displayed below the Historical Events section.

![threatlist](/images/threatmanager/3.0/administration/threatlist.webp)

The list displays threats that have a threat level of Low, Medium, High, or Audit for the selected
timeframe. Each threat in the list contains a link which opens the
[User Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/user.md) or the [Group Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/group.md) and a
host link which opens the [Host Details Page](/docs/threatmanager/3.1/administration/threats/activedirectoryobjects/host.md). In addition, threats have an
Edit button which opens the Edit Threats window. The View Details button opens the
[Threat Details Page](/docs/threatmanager/3.1/administration/threats/threatdetails/overview.md).

## Filter Threats

The left pane of the page, below Historical Events, lists filters that can be selected and applied
to display the threats. The filters listed are based on the threat types detected. Each filter is a
collapsible section that can be hidden or expanded using the arrow. To clear any currently-selected
filters, click the **Clear Filters** button.

### Type

The Type section displays the threat types which can be selected for filtering. This list of threats
to filter by is dynamic, depending upon the type of threats detected. See the following topics for
additional information:

- [Active Directory Threats](/docs/threatmanager/3.1/threats/activedirectory.md)
- [Entra ID Threats](/docs/threatmanager/3.1/threats/entraid.md)
- [File System Threats](/docs/threatmanager/3.1/threats/filesystem.md)
- [General Threats](/docs/threatmanager/3.1/threats/general.md)

### Level

The Level section displays the threat types which can be selected for filtering. Levels are assigned
or configured on the [Threat Detection Page](/docs/threatmanager/3.1/administration/configuration/threatdetection/threatdetection.md).

### Tags

The Tags section contains any tags associated with threats that are currently in the filtered time
range.

#### Sensitive Data

Sensitive Data tags are displayed in threats containing sensitive data when Access Analyzer and the
Sensitive Data Discovery Add-on are installed in addition to Threat Manager. When installed with the
Sensitive Data Discovery Add-on, Access Analyzer scans for sensitive data using File System
Sensitive Data Discovery Auditing. See the
[Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.1/install/integration/accessanalyzer.md)
topic for additional information. See the File System Solution topic in the
[Netwrix Access Analyzer Documentation](https://helpcenter.netwrix.com/category/accessanalyzer) for
additional information on Access Analyzer Sensitive Data Discovery capabilities.

When a threat event contains sensitive data, a Sensitive Data tag is displayed next to the threat:

![threatsensitivedatafilter](/images/threatmanager/3.0/administration/threatsensitivedatafilter.webp)

To view the type of sensitive data contain in a threat, click View Details on the threat containing
a Sensitive Data tag. The type of sensitive data is displayed in the Sensitive Data column.

The following tables contain a Sensitive Data column:

- Event Details
- Related Activity
- Activity Details

**Host**

Filter on a host by selecting the checkbox next to the host or entering a host name in the search
box.

**User**

Filter on a user by selecting the checkbox next to the user or entering a user name in the search
box.

**Status**

The Status section may contain the following filters:

- Open – Default status for new threats
- Under Investigation – Threats that are currently under or pending investigation by an
  administrator
- Closed - Resolved – Legitimate threats that have been contained or dealt with
- Closed - False Positive – Behavior that has been incorrectly identified by Threat Manager as a
  threat

    :::note
    Abnormal behavior threat detection will be influenced by false positives. Marking
    abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
    detection for this perpetrator.
    :::


**Assignee**

The Assignee section provides the ability to filter by user. Select one or more users.

- Unassigned – Threat does not have a user assigned
- Assigned to me – Threat is assigned to the logged in user

## Edit Threats

Threats can be edited to assign a user, set a status, or ignore future threats of a specified type
using Threat Manager’s Incident Detection Response (IDR) workflow.

Follow the steps to edit a threat.

**Step 1 –** Select a threat from the list and click Edit. The Workflow window opens.

![editthreats](/images/threatmanager/3.0/administration/editthreats.webp)

**Step 2 –** Enter the following information:

- (Optional) Assigned To – Select a user who has a role assigned via the User Access page on the
  System Settings interface to assign to a threat to. See the User Access Page topic for additional
  information.
- Set Status – Select the status for the threat from the drop-down list. Options include:

    - Open – Default status for new threats
    - Under Investigation – Threats that are currently under or pending investigation by an
      administrator
    - Closed - Resolved – Legitimate threats that have been contained or dealt with
    - Closed - False Positive – Behavior that has been incorrectly identified by Threat Manager as a
      threat

        :::note
        Abnormal behavior threat detection will be influenced by false positives. Marking
        abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
        detection for this perpetrator.
        :::


- (Optional) Comment – Add a comment to the threat
- Ignore future threats of this type by [domain\user]

**Step 3 –** Click Submit to save the changes.

Threats can also be edited from the [Threat Details Page](/docs/threatmanager/3.1/administration/threats/threatdetails/overview.md).
