---
title: "Threat Details Page"
description: "Threat Details Page"
sidebar_position: 10
---

# Threat Details Page

The Threat Details page provides details on the selected threat. View the details for a threat by
selecting the threat from the list on the [Threats Page](/docs/threatmanager/3.4/administration/threats/threats.md) and clicking View Details.

![threatdetails](/images/threatmanager/3.0/administration/threatdetails/threatdetails.webp)

The top of the page displays a Threat Overview box, a Threat Activity panel, and an Evidence box.
The Impossible Travel view doesn't repeat the Evidence box.

The Threat Overview box that contains the following information:

- Description – Displays the threat type, the user account that generated the threat, a description
  of the threat activity and the host against which the threat occurred
- Threat Level – The relative severity level, or risk level, of the threat
- Threat Detected – The date and timestamp for the threat
- Definition – The threat definition is a detailed explanation of the threat providing insight into
  why the incident is a potential risk

The description shows line breaks where the threat text has them. It no longer shows stray text
under the threat title.

The Threat Activity panel contains a diagram that displays the flow of the threat activity. For
First Time Location and Impossible Travel threats, the panel shows a map instead.

![threatactivity](/images/threatmanager/3.0/administration/threatdetails/threatactivity.webp)

### First Time Location Map

For First Time Location threats, the Threat Activity panel shows a world map in place of the attack
path. The map plots the new locations and the user's known locations. Known locations are the user's other locations from the 7 days before detection. Threat Manager captures them when it detects the threat.
The map doesn't draw locations without map coordinates.

The legend lists "New location" and "Known location (7 days before detection)". Click a legend
entry to hide or show that category. Hover over a marker to see a tooltip with "New location" and
"Known location" sections that list the places at that point.

The map has two buttons:

- Group markers / Separate markers – Toggles marker grouping. The map groups nearby locations by
  default.
- Zoom to locations / Zoom out to world – Toggles the zoom level.

If the map can't load the locations, the map area shows the error `Failed to load location data. Please try again.`

### Impossible Travel Map

For Impossible Travel threats, the Threat Activity panel shows a route map that fits the panel, so
the page doesn't scroll to reach the evidence. The map draws each route as a curved arc with a
numbered itinerary:

- A place visited more than once shares one marker labeled with every visit number.
- A pair of places traveled both ways shows one arc with an arrowhead at each end.
- Hover over a marker to highlight every leg it touches. Route and marker tooltips also appear.

Click the zoom button to switch between Zoom to route and Zoom out to world. By default, the map
zooms to the region the route covers.

The Evidence box under the Threat Activity panel provides specific information about the threat.

The Threats page displays three buttons in the top right corner:

![evidencebox](/images/threatmanager/3.0/administration/threatdetails/evidencebox.webp)

- Unassigned – If the threat has no owner, the button displays Unassigned. If a user is the owner, the button displays the username. Click it to open the Workflow Window where you can update the assigned user and status.
- Set Status – If the threat has no status, the button displays _Set Status_. If the threat has a status, this button displays it. Click it to open the Workflow Window, where you can update the assigned user and status.
- Threat Response – Click to open the Threat Response Window and designate the playbook to response
  to the threat.

## Workflow Window

The Workflow window displays the owner of a threat, or provides settings to assign an owner to a
threat.

![Workflow window](/images/threatmanager/3.0/administration/threatdetails/workflow.webp)

The Workflow window contains the following configuration settings:

:::note
The information displayed on this page is dependent upon the type of threat selected.
:::


- _(Optional)_ Assigned To – Displays the user assigned to the threat. Assign or edit the
  Assigned User using the dropdown list. The list populates with users granted access to the
  console on the User Access page of the System Settings interface. See the User Access Page topic
  for additional information.
- Set Status – Select a status for the threat from the dropdown list:

    - Open – Default status for new threats
 - Under Investigation – Threats that are under or pending investigation by an
      administrator
    - Closed - Resolved – Legitimate threats that administrators have contained or dealt with
    - Closed - False Positive – Behavior that Threat Manager incorrectly identified as a
      threat

        :::note
        False positives influence abnormal behavior threat detection. Marking
        abnormal behavior threats as False Positive will reduce the sensitivity of the abnormality
        detection for this perpetrator.
        :::


- _(Optional)_ Comment – Add a comment to the threat
- Ignore future threats of this type by (user) – Select this checkbox to ignore threats of this type
  from the selected user
- Submit – Click to update the workflow

In the Threat Activity diagram, click the user to view the [User Details Page](/docs/threatmanager/3.4/administration/threats/activedirectoryobjects/user.md) page. Click
the host to view the [Host Details Page](/docs/threatmanager/3.4/administration/threats/activedirectoryobjects/host.md) page.

## Threat Response Window

The Threat Response window contains the following configuration options:

![Threat Response window](/images/threatmanager/3.0/administration/threatdetails/threatresponse.webp)

- Select Playbook – Select a playbook for the threat response
- Description – Description of the selected playbook
- Status – The state of the playbook
- Last Executed – When the playbook last ran

The Threat Details Overview contains the following tabs:

- Event Details Tab
- Related Threats Tab
- Related Activity Tab
- History Tab

## Event Details Tab

The Event Details tab shows details for the selected threat.

![eventdetails](/images/threatmanager/3.0/administration/threatdetails/eventdetails.webp)

- Time Stamp – The exact date and time when the event occurred
- Target – The specific object, resource, or entity that was the focus of the event
- Perpetrator – The user or service account that initiated the event
- Successful – Indicates whether the action associated with the event succeeded
  True if the operation was successful. False if the operation failed
- Blocked – Indicates whether a security measure, such as a Netwrix agent, prevented the operation True if a Netwrix agent blocked the operation. False if nothing blocked it.
- Operation – Type of operation performed
- Client – The device, IP address, or host that initiated the event
- Description – A summary of the event

Use the Search icon to search for data in the table. Click the + icon in the table to view
additional details about a threat. Click the Export CSV button to export the current rows displayed
on the page into a CSV file. Click the Export All button to export all data returned into a CSV
file.

When you change Rows per page, the page, or the sort order, the tab shows a loading spinner and a
Cancel Request link. Cancel Request restores the events shown before the change. The Event Details
and Related Activity tabs load independently. An empty table shows "No rows".

## Related Threats Tab

The Related Threats tab lists other threats from the same user that may relate to the threat in the Event Details tab.

![relatedthreats](/images/threatmanager/3.0/administration/threatdetails/relatedthreats.webp)

The Related Threats table has the following columns:

- Time Stamp – Time when Threat Manager detected the threat
- Threat – Type of threat detected
- Status – Workflow status of the threat: Open, Under investigation, Closed - Resolved, or Closed -
  False Positive
- View Details – Click View Details to view the details page for the related threat

Use the Search icon to search for data in the table.

## Related Activity Tab

The Related Activity tab lists activity by the selected user that might relate to the threat.

![relatedactivity](/images/threatmanager/3.0/administration/threatdetails/relatedactivity.webp)

- Time Stamp – The exact date and time when the event occurred
- Target – The specific object, resource, or entity that was the focus of the event
- Perpetrator – The user or service account that initiated the event
- Successful – Indicates whether the action associated with the event succeeded
  True if the operation was successful. False if the operation failed
- Blocked – Indicates whether a security measure, such as a Netwrix agent, prevented the operation True if a Netwrix agent blocked the operation. False if nothing blocked it.
- Operation – The type of activity performed
- Client – The device, IP address, or host that initiated the event
- Description – A summary of the event

Use the Search icon to search for data in the table. Click the + icon in the table to view
additional details about a threat. Click the Export CSV button to export the current rows displayed
on the page into a CSV file. Click the Export All button to export all data returned into a CSV
file.

## History Tab

The History tab lists updates made to the threat in the Update box and provides a section to add
comments.

![history](/images/threatmanager/3.0/administration/threatdetails/history.webp)

The History table has the following columns:

- Add Comments – Type any desired comments in the box and click Add Comment
- Time Stamp – Exact date and time of the status update.
- Message – Displays the content of the comments entered by users or the system
- User – The name of the user who entered the comment
