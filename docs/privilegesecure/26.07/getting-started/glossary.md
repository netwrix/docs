---
title: "Glossary and product names"
description: "Look up Privilege Secure terms, console menu labels, and the legacy SbPAM and Stealthbits names in service names, file paths, and logs."
sidebar_position: 50
---

# Glossary and product names

This page defines the terms used in the Privilege Secure documentation. It also explains the legacy names that still appear in service names, file paths, and logs.

## Terms

| Term | Definition |
|---|---|
| Access policy | A rule that links users, activities, resources, or credentials, and a connection profile. It is either resource-based or credential-based. |
| Action group | An ordered set of actions in an activity. The groups are Pre-Session (Grant), Session (Connect), and Post-Session (Remove). |
| Activity | The work that Privilege Secure performs before, during, and after a session. |
| Activity token | An ephemeral login account that Privilege Secure creates for a session. |
| Approval workflow | The tiers of approvers that a connection profile can require before a session starts. |
| Auditor | A built-in role that views the sessions of other users. Permissions add live session viewing, recordings, and reporting. |
| Bring Your Own Vault (BYOV) | A vault connector template for integrating a vault that has no dedicated connector. |
| Connection profile | The settings that control how users connect, including session length, command restrictions, and approval workflow. |
| Credential-based access policy | An access policy that gives users credentials or files from a vault. |
| Local Administrator Password Solution (LAPS) | A Microsoft feature that manages local Administrator passwords. Activities can use these passwords through the LAPS connector. |
| Login account | The account that signs in to the remote system during a session. |
| Multi-factor authentication (MFA) | An additional proof of identity, such as a code from an authenticator, required at sign-in. |
| Privileged access management (PAM) | The practice of controlling and auditing access to privileged accounts and systems. |
| Protection policy | A policy that monitors named groups on a resource and removes unauthorized members. |
| Resource | A system that users reach through Privilege Secure: a host, domain, website, Entra ID tenant, secret vault, or database. |
| Resource-based access policy | An access policy that gives users access to remote systems. |
| Reviewer | A built-in role that reviews access in an access certification. |
| Service account | A credential that Privilege Secure uses to connect to a domain or resource. |
| Service mesh | The connections that join remote services to the central web service. |
| Service node | A server that runs one or more Privilege Secure services. |
| Session | A time-limited grant of access to a resource or credential. |
| Security information and event management (SIEM) | A system that collects and analyzes security events. Privilege Secure can forward events to one. |
| User and Group Collection | A named set of users and groups that you can use to assign roles and console access. |

## Remote Access Gateway names

The Remote Access Gateway (RAG) lets external users start browser-based sessions. Release notes and Community posts also use these names for it:

- Secure Remote Access (SRA) appears in the download and in Community posts.
- Session Remote Access (SRA) appears in the 26.07.3 release notes.

The documentation uses Remote Access Gateway. See [Remote Access Gateway overview](/docs/privilegesecure/26_07/remote-access-gateway/overview).

## Product and legacy names

| Name | Meaning |
|---|---|
| Netwrix Privilege Secure for Access Management | The product name. The short forms are Privilege Secure and NPS-AM. |
| NPS | A short form of the product name that appears in file names, installers, and the console. |
| SbPAM | A legacy prefix from the product's earlier name. It appears in service names, the IIS site name, and registry keys. |
| Stealthbits | The company name before the product became part of Netwrix. It appears in file paths. |
| Stealthbits Privileged Activity Manager | The earlier product name. The Setup Launcher removes it during an upgrade. If you run `NPS.exe` directly, it refuses to install until you uninstall it. |
| StealthAUDIT | The name of an integration connector template in the console. |

These names are expected. They don't indicate a problem.

## Service names

| Name | Component |
|---|---|
| SbPAM Web Service | The IIS site that hosts the console and the REST API. Its application pool is `SbPAMWebAppPool`. |
| `SbPAMAction` | Action service |
| `SbPAMHostScan` | Host Scan service |
| `SbPAMScheduler` | Scheduler service |
| `SbPAMLicense` | License service. The display name is "NPS License Service". |
| `SbPAMEmail` | Email service |
| `SbPAMSIEM` | SIEM service |
| `SbPAMProxy` | Proxy service |
| `SbPAMRagPortal` | Remote Access Gateway Portal. The display name is "NPS Rag Portal". |
| NPS Gateway Web Service | The IIS site that hosts the Gateway component of the Remote Access Gateway. It listens on TCP 6550. |

## Paths

| Path | Contents |
|---|---|
| `C:\Program Files\Stealthbits\PAM` | The default install folder. |
| `C:\ProgramData\Stealthbits\PAM` | Configuration files and data. |
| `C:\ProgramData\Stealthbits\PAM\Log` | Log files, named `PAM-<service>.log`. |
| `C:\ProgramData\Stealthbits\PAM\RagGateway` | Remote Access Gateway configuration. |

The default database name is `PAM`. {/* TODO verify: default database name in appsettings.db.json */}

## Console menu labels

An administrator sees these items in the left navigation of the 26.07.3 console, in this order:

| Menu label | Use |
|---|---|
| My Activities | Request and connect to your own sessions. |
| Dashboard | See active, scheduled, approval, and historical sessions. |
| Access Policy | Manage access policies, connection profiles, activity token complexity, and command restrictions. |
| Users & Groups | Manage users, groups, collections, and roles. |
| Resources | Manage servers, domains, websites, Entra ID tenants, secret vaults, and databases. |
| Platforms | Manage platform settings, password complexity, and schedule policies. |
| Credentials | Manage, rotate, and verify credentials. |
| Activities | Manage activities and activity groups. |
| Configuration | Manage service accounts, service nodes, scheduled tasks, authentication, integration connectors, and SIEM. |
| Auditing & Reporting | View access certifications, the activity log, database change history, events, log files, and reports. |
| System Settings | Manage system-wide options such as RDP, WinRM, email, and data retention. |

See [Navigate the console](/docs/privilegesecure/26_07/user-guide/navigate-console).
