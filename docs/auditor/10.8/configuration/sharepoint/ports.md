---
title: "SharePoint Ports"
description: "SharePoint Ports"
sidebar_position: 10
---

# SharePoint Ports

Review a full list of protocols and ports required for Netwrix Auditor for SharePoint.

- Allow outbound connections from the dynamic (1024 - 65535) local port on the computer where
  Netwrix Auditor Server resides.
- Allow outbound connections to remote ports on the source and inbound connections to local ports on
  the target.

Tip for reading the table: For example, on the computer where Netwrix Auditor Server resides
(source), allow outbound connections to remote 137 UDP port. On front end server (target), allow
inbound connections to local 137 UDP port.

| Port        | Protocol | Source                 | Target                                   | Purpose                                                          |
| ----------- | -------- | ---------------------- | ---------------------------------------- | ---------------------------------------------------------------- |
| 137 138 445 | UDP      | Netwrix Auditor Server | Windows Server running FrontEnd Server   | Network Traffic Compression Service installation                 |
| 139 445     | TCP      | Netwrix Auditor Server | Windows Server running FrontEnd Server   | Network Traffic Compression Service installation                 |
| Custom port | TCP      | Netwrix Auditor Server | Central Administration – FrontEnd Server | HTTP/ HTTPS Used to connect to SharePoint Central Administration |
