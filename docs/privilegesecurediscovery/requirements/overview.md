---
title: "Requirements overview"
description: "Review the host, network, sizing, account, and browser requirements to meet before you install Netwrix Privilege Secure for Discovery."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery runs as a container-based deployment on Ubuntu Server. This page summarizes what must be in place before you install the product and links to the page that covers each requirement in detail.

## Host requirements

- Ubuntu Server 24.04 LTS on every node, on an x86-64 processor that supports the Advanced Vector Extensions (AVX) instruction set, which MongoDB 8.0 requires.
- One node for a single-node deployment, or three nodes for a cluster. A cluster is the basis for high availability (HA). For HA and disaster recovery (DR) options, see [High availability and disaster recovery](../getting-started/high-availability-and-disaster-recovery.md).
- Docker Engine and the AWS Command Line Interface (AWS CLI) on every node. See [Host prerequisites](./host-prerequisites.md).
- Access to the Netwrix container registry. See [Registry access](./registry-access.md).
- CPU, memory, and storage sized for the number of endpoints you manage. See [Sizing](./sizing.md).

For an overview of the components that the deployment runs, see [Architecture](../getting-started/architecture.md).

## Endpoint requirements

Privilege Secure for Discovery scans and protects Windows and Linux endpoints. For the operating system versions that you can manage, see [Supported platforms](./supported-platforms.md).

## Network requirements

- ICMP must be enabled on every endpoint that the product manages. Before the product scans a system, it pings the computer.
- Open the ports that the product uses between its nodes, the endpoints, the domain controllers, and the administrator workstations. See [Ports and firewall](./ports-and-firewall.md).
- If the environment uses a proxy server, allow the hosts that the installation needs. See [Proxy and firewall allowlist](./proxy-and-firewall-allowlist.md).
- Use a static domain controller for each domain. A load-balanced connection to the domain controllers prevents the product from detecting group and organizational unit (OU) changes correctly.

## Account requirements

The product requires three Active Directory (AD) accounts for each domain: an LDAP bind account, a scan account, and a protect account. Configure them as service accounts with complex passwords and without interactive logon.

- To understand the purpose of each account and how to separate their duties, see [Service accounts](./service-accounts.md).
- For the hardening that protects these accounts, see [Service account security](./service-account-security.md).
- To configure the Group Policy objects (GPOs) that let the scan and protect accounts work, see [Group policy objects](../configuration/domains-and-ad/group-policy-objects.md) and [Scan GPO for domain controllers](../configuration/domains-and-ad/scan-gpo-domain-controllers.md).

:::warning
Don't apply the service account GPOs to a domain controller. Doing so has negative downstream effects.
:::

## Browser requirements

Use a current version of Google Chrome, Microsoft Edge, or Mozilla Firefox to sign in to the web interface. Internet Explorer isn't supported. See [Supported platforms](./supported-platforms.md#browser-requirements).
