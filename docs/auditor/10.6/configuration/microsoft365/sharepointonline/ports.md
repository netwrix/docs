---
title: "SharePoint Online Ports"
description: "SharePoint Online Ports"
sidebar_position: 10
---

# SharePoint Online Ports

Review a full list of protocols and ports required for Netwrix Auditor for Microsoft 365.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to the remote ports on the computer where Netwrix Auditor Server
  resides.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 80 TCP port.

| Port | Protocol | Source                 | Target                                                                                                                                                                                                                                                   | Purpose                                               |
| ---- | -------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 80   | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.office.com |
| 443  | TCP      | Netwrix Auditor Server | For a full list of Microsoft 365 URLs, refer to the following Microsoft support article: [Microsoft 365 URLs and IP address ranges](https://support.office.com/en-us/article/Office-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2) | login.windows.net graph.windows.net manage.office.com |
