---
title: "Application server"
description: "Application server"
sidebar_position: 10
---

# Application server

#### System Components

| Attribute         | Minimum            | Recommended        |
| ----------------- | ------------------ | ------------------ |
| OS                | MS Win Server 2019 | MS Win Server 2022 |
| Architecture      | x64                | x64                |
| CPU [# Cores]     | 4                  | 8                  |
| RAM [GB]          | 16                 | 32                 |
| Disk Space [GB]   | 70                 | 100                |
| MS .Net Framework | 4.8                | 4.8.1              |
| MS WMF            | 5.1                | 5.1                |

####

#### Required configuration

- Service User: local admin rights, 'logon as a service' allowed
- PowerShell Execution Policy: RemoteSigned
- Mandatory Ports/firewall rules

    - Port 443 HTTPS for connection to the Netwrix Password Secure license server (outgoing)
    - Port 1433 TCP for communication with SQL Server (outgoing)
    - Port 11011 TCP for communication with windows applications or web server IIS (incoming)
    - Port 11016 TCP for the Web services (incoming; only when using the Web Application)
    - Port 11018 TCP for real-time update (incoming)
    - Port 11014 TCP for the backup service (usually does not need to be unlocked)
    - Port 11015 TCP for Entra ID communication (incoming; only when using the Entra ID
      provisioning)
    - Port 11019 TCP for using Password Secure as Identity Provider (SAML) (incoming)

- (Optional) Server needs to be domain-joined (only when using AD provisioning (not Entra ID))
- (Optional) Provide SMTP-Server details: hostname, port, auth method, protocol (mandatory for a
  variety of features)
