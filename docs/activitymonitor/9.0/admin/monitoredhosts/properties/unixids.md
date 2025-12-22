---
title: "Unix IDs Tab"
description: "Unix IDs Tab"
sidebar_position: 160
---

# Unix IDs Tab

The Unix IDs tab provides configuration options to translate Unix IDs (UID) to SIDs. This tab
applies to NetApp devices, Dell devices, and Nasuni Edge Appliances.

When activity is performed on an NFS resource, UIDs are returned for that activity event. Depending
on the operating system, the UID can be mapped to Active Directory accounts using the uidNumber
attribute in Active Directory. The activity agent resolves the Active Directory SID based on the UID
from the activity event.

![Unix ID Tab](/images/activitymonitor/9.0/admin/monitoredhosts/properties/unixid.webp)

The options are:

- Translate Unix IDs to SIDs – Enables all controls on the page
- Search in container (DN) – Default naming context of the agent's domain
- Search scope – Select from the following radio buttons:
    - This container and its descendants
    - This container only
- Search - Search using the following specifications:
    - by an attribute – Specify an LDAP filter. This attribute cannot be empty.
    - with a custom filter – Use the %UID% macro for a Unix ID value
    - Provide UID for test/Test – Test button performs a search in the specified container with the
      scope and the filter, replacing %UID% with 0 for the test
