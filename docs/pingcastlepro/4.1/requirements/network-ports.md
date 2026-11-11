---
title: "Network ports"
description: "Identify the network ports PingCastle Pro uses for the web server, Active Directory scanning, and Entra ID scanning."
sidebar_position: 35
---

# Network ports

Open the following ports so PingCastle Pro and `PingCastle.exe` agents can communicate.

## PingCastle Pro server

| Service | Port | Protocol | Notes |
|---------|------|----------|-------|
| HTTP | 80 | TCP | Optional; typically redirects to HTTPS |
| HTTPS | 443 | TCP | Recommended. Agents also use this port to upload reports |

## Active Directory scanning

| Service | Ports | Protocol | Notes |
|---------|-------|----------|-------|
| LDAP | 389 | TCP/UDP | Fallback when ADWS isn't present. Less performant |
| LDAPS | 636 | TCP | Checks for LDAPS. You can also run the entire scan with LDAPS by adding `-port 636` to the command line |
| Kerberos | 88 | TCP/UDP | |
| DNS | 53 | TCP/UDP | |
| SMB | 445 | TCP | |
| ADWS | 9389 | TCP | Active Directory Web Services for performant scans |

## Entra ID scanning

| Service | Port | Protocol | Notes |
|---------|------|----------|-------|
| Microsoft Graph | 443 | TCP | HTTPS outbound |
| Microsoft 365 (SharePoint, Teams, Exchange, Azure role-based access control (RBAC)) | 443 | TCP | HTTPS outbound |
