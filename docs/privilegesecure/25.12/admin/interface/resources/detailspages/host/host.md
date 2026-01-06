---
title: "Host Details Page"
description: "Host Details Page"
sidebar_position: 10
---

# Host Details Page

The Host Details page shows additional information for the selected host resource. This page is
opened from any linked resource within the various interfaces.

![Host Details Page](/images/privilegesecure/25.12/accessmanagement/admin/policy/page/details/hostdetailspage.webp)

The details page displays the following information:

- Name — Displays the name of the resource
- OS Version — Displays the operating system of the resource
- Last Scanned — Date timestamp for the last time the resource was scanned
- Active — Displays the number of active sessions on the resource
- Scheduled — Displays the number of sessions scheduled for the resource
- Test button — Opens the Test Resource Connectivity window. See the
  [Test Resource Connectivity Window](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/testresourceconnectivity.md) topic
  for additional information.
- Scan Now button — Scans a host resource for local users, groups, windows services, and scheduled
  tasks. A confirmation window will display.. The Cancel button, which is only visible when scanning
  can be used to stop the resource scan. This scan can also be scheduled from the
  [Platforms Page](/docs/privilegesecure/25.12/admin/interface/platforms/overview.md).
- WinRM Config button — Opens the Configure Secure WinRM Connection window. See the
  [Configure Secure WinRM Connection Window](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/configuresecurewinrmconnection.md)
  topic for additional information.
- Platform — Displays the type of platform, which defines the resource
- Service Account — Displays the service account associated with the resource
- Blue arrow button — Opens the Service Account details page. See the
  [Service Accounts Page](/docs/privilegesecure/25.12/admin/configuration/serviceaccounts/serviceaccounts.md) topic for additional
  information.
- Green plus button — Opens the Add New Service Account window.
- IP Address — Displays the IP address for the resource
- SSH Port — Displays the SSH port number
- RDP Port — Displays the RDP port number
- WinRM Port — Displays the WinRM port number
- WinRM HTTPS Port — Displays the WinRM HTTPS port number
- WinRM Disabled checkbox — If this checkbox is selected, Netwrix Privilege Secure will not attempt
  to communicate to the target resource via WinRM. This value is determined during the initial host
  scan of the resource, but will not be automatically changed during subsequent host scans.
- Trust on Discovery checkbox — If this checkbox is selected, the certificate that is used with
  WinRM HTTPS will be trusted when the host is first scanned. Otherwise, the NPS administrator needs
  to manually trust the host.
- Action on Thumbprint Mismatch — This menu selection determines the course of action when a
  thumbprint mismatch occurs during a connection to the resource.

    - Allow Connection — This setting will allow a connection to the host. (No event is generated.)
    - Log Event and Allow — This setting will allow a connection to the host and log an event in the
      Event table. If a SIEM connection is configured, an event will be sent to SIEM as well.
    - Log Event and Block — This setting will block the connection to the host and log an event in
      the Event table. If a SIEM connection is configured, an event will be sent to SIEM as well.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [Sessions Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/sessionshost.md)
- [Access Policies Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/accesspolicieshost.md)
- [Protection Policies Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/protectionpolicieshost.md)
- [Users Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/usershost.md)
- [Groups Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/groupshost.md)
- [Services Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/serviceshost.md)
- [Scheduled Tasks Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/scheduledtaskshost.md)
- [History Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/historyhost.md)
- [Installed Software Tab for Host](/docs/privilegesecure/25.12/admin/interface/resources/detailspages/host/installedsoftwarehost.md)
