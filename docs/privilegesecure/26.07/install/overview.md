---
title: "Installation overview"
description: "Learn which packages to download, which installer to run, and the order in which to install and set up Privilege Secure."
sidebar_position: 10
---

# Installation overview

Netwrix Privilege Secure for Access Management (Privilege Secure) installs on a Windows application server. You can install every component on that server, or add services on other servers for scale, redundancy, or network segmentation.

For the components and how they connect, see [Architecture and components](/docs/privilegesecure/26.07/getting-started/architecture.md).

## Packages to download

Netwrix publishes two packages. Download them from the Netwrix Customer Portal.

| Package | File name | Use it to |
|---|---|---|
| Privilege Secure | `privilegesecure-accessmanagement-<version>.zip` | Install the application server, the database, and the services on additional servers. |
| Remote Access Gateway | `privilegesecure-accessmanagement-rag-<version>.zip` | Install the optional Remote Access Gateway for external users. |

{/* TODO verify: whether a Remote Access Gateway package ships for 26.07.3. The 26.07.1 release notes link both packages, but the 26.07.3 download folder lists only the Privilege Secure package. */}

For the contents of the Privilege Secure package, see [Installation package contents](/docs/privilegesecure/26.07/install/components.md).

## Installation order

1. Check the [requirements](/docs/privilegesecure/26.07/requirements/overview.md). Install PowerShell 7.6 or later on the application server first. The installer stops without it.
2. [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md) with the Setup Launcher, or [install silently](/docs/privilegesecure/26.07/install/silent-install.md).
3. [Run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md) the first time you open the console.
4. [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md). A new installation includes a trial license.
5. Optional: [install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md), [install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md), or [install the Remote Desktop Monitor on target hosts](/docs/privilegesecure/26.07/install/rdp-monitor.md).
6. Optional: set up [high availability](/docs/privilegesecure/26.07/install/high-availability.md).
7. Optional: install the Remote Access Gateway. See the [Remote Access Gateway overview](/docs/privilegesecure/26.07/remote-access-gateway/overview.md).

To move an existing installation to this version, see [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md).

## Choose an installation method

| Method | Use it when | Page |
|---|---|---|
| Setup Launcher (`NPS_Setup.exe`) | You install the database and the application on one server, or you upgrade an existing installation. | [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md) |
| Installer only (`NPS.exe`) | You install the application on a server whose database is already in place. | [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md) |
| Silent install (`NPS.exe /quiet`) | You install from the command line or with a deployment tool. | [Install silently](/docs/privilegesecure/26.07/install/silent-install.md) |

The Setup Launcher installs the database and the application on the same server. To put the database on a different server, install it there (for example with `NetwrixPostgreSQL16.exe`), run `NPS.exe` on the application server, and point Privilege Secure at the database with the Database Configuration Tool. See [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md).

## Deployment options

You can install every component on one server, add services on additional servers, or build a high availability deployment with an active-passive or active-active database. For the topologies, see [Architecture and components](/docs/privilegesecure/26.07/getting-started/architecture.md). For high availability, see [High availability](/docs/privilegesecure/26.07/install/high-availability.md). For the database choices, see [Database requirements](/docs/privilegesecure/26.07/requirements/database.md).

## Console URL and port

After installation, open the console at `https://localhost:6500` on the application server, or at `https://<nps-server>:6500` from another computer. The installer opens TCP port 6500 in Windows Firewall. For all ports, see [Ports](/docs/privilegesecure/26.07/requirements/ports.md).
