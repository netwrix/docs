---
title: "History Tab for Domain"
description: "History Tab for Domain"
sidebar_position: 50
---

# History Tab for Domain

The History tab shows information about the synchronization history of the selected resource.

![History Tab for Domain Resource](/images/privilegesecure/4.1/accessmanagement/admin/policy/tab/resources/historydomain.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion:

    - Status — Filter by status message type: All Statuses, Information, Warning, and Error
    - Event Type — Filter by event type: Unspecified, Status, Service Start, Password Rotation, Host
      Scan, AD Sync, and Activity Session
    - Service Type — Filter by service type: Unspecified, Web UI, Action Service, Proxy Service,
      Schedule Service, and Email Service

- Refresh — Reload the information displayed

The table has the following columns:

- Occurred — Date timestamp for when the event occurred
- Status — Shows status information for the synchronization:

    - Information — Session was successful and row contains details
    - Warning — Session was successful but there were non-critical issues detected
    - Error — Session had an error and row contains details

- Event Type — Displays the type of event that occurred
- Service Type — Displays the type of service
- Event Message — Description of the event

The table columns can be resized and sorted in ascending or descending order.
