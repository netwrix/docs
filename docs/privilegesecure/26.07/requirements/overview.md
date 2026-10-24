---
title: "Requirements"
description: "Find the servers, database, browser, and network access you need in place before you install Netwrix Privilege Secure for Access Management."
sidebar_position: 10
---

# Requirements

This section describes what must be in place before you install Netwrix Privilege Secure for Access Management (Privilege Secure). Review your environment and requirements with a Netwrix support engineer before you deploy to production so that any exceptions are covered.

## Components to plan for

A deployment uses the following systems:

- **Application server** – The Windows server where you install Privilege Secure. It hosts the Privilege Secure Console and the core services.
- **Database** – The PostgreSQL or SQL Server database that stores Privilege Secure data.
- **Additional service nodes (optional)** – Remote hosts that run the Action, Host Scan, Scheduler, Email, Security Information and Event Management (SIEM), or Proxy services for scale, redundancy, or network segmentation.
- **Client** – The computer where a user opens the Privilege Secure Console in a supported browser and starts Remote Desktop Protocol (RDP) or Secure Shell (SSH) sessions.
- **Target environments** – The systems that Privilege Secure manages and gives privileged access to, such as Active Directory, Windows hosts, and Linux hosts.

## Requirements pages

| Page | What it covers |
| ---- | -------------- |
| [Application server requirements](/docs/privilegesecure/26_07/requirements/application-server) | Operating system, software that must be installed first, and sizing |
| [Database requirements](/docs/privilegesecure/26_07/requirements/database) | PostgreSQL and SQL Server options |
| [Additional service node and proxy server requirements](/docs/privilegesecure/26_07/requirements/service-nodes) | Hosts for remote services, proxy sizing, and antivirus exclusions |
| [Client requirements](/docs/privilegesecure/26_07/requirements/client) | Supported browsers and the browser extension |
| [Target environment requirements](/docs/privilegesecure/26_07/requirements/target-environments) | Platforms that Privilege Secure manages, and the permissions and settings they need |
| [Ports](/docs/privilegesecure/26_07/requirements/ports) | Ports and firewall rules for every component |
| [Licensing](/docs/privilegesecure/26_07/requirements/licensing) | License credits, the trial, and user counts |

## Remote Access Gateway

The Remote Access Gateway lets users start sessions from a browser. It is a separate download and installer with its own hosts, software, and ports. See [Remote Access Gateway requirements](/docs/privilegesecure/26_07/remote-access-gateway/requirements) for what the Portal and Gateway servers need.

## Next steps

After you meet the requirements, see [Install the application server](/docs/privilegesecure/26_07/install/install-application-server).
