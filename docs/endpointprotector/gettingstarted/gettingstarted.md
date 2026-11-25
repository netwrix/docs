---
title: "Getting Started"
description: "Get started with Netwrix Endpoint Protector: what the data loss prevention (DLP) platform does, how the Server and Client fit together, and the path from requirements to protected endpoints."
sidebar_position: 1
---

# Getting Started

Welcome to Netwrix Endpoint Protector, a data loss prevention (DLP) platform that secures endpoint
data across Windows, macOS, and Linux. With features like Device Control, Content Aware Protection,
eDiscovery, and Enforced Encryption, Endpoint Protector safeguards against data breaches
originating from a wide range of endpoints, including portable storage devices such as USB flash
drives, external HDDs, digital cameras, MP3 players, and iPods. These devices connect to
Windows, Mac, or Linux computers, increasing the risk of data theft or accidental loss. Ensure
compliance and protect sensitive information with Netwrix Endpoint Protector.

## Key concepts

Endpoint Protector is a client-server solution. The Endpoint Protector Server holds the policies and settings, and the Endpoint Protector Client enforces them on endpoint computers. See [Main components](/docs/endpointprotector/gettingstarted/components.md) for the architecture.

Four modules protect endpoint data:

- [Device Control](/docs/endpointprotector/configuration/dc_module/dcmodule.md)—governs which devices can connect to endpoints and what users can do with them
- [Content Aware Protection](/docs/endpointprotector/configuration/cap_module/capmodule.md)—inspects data in motion for sensitive content
- [eDiscovery](/docs/endpointprotector/configuration/ed_module/edmodule.md)—scans data at rest on endpoints for sensitive content
- [Enforced Encryption](/docs/endpointprotector/configuration/ee_module/eemodule.md)—centralizes the management of encrypted removable storage

## Quick start

1. Check the [requirements](/docs/endpointprotector/requirements/overview.md) for the server and the clients.
2. [Install](/docs/endpointprotector/install/overview.md) the Endpoint Protector Server as a virtual appliance or in a cloud platform.
3. [Configure](/docs/endpointprotector/configuration/configuration.md) administrators, policies, and the user experience.
4. [Deploy the agents](/docs/endpointprotector/configuration/configuration.md#deploying-agents) to your computers.
5. [Move Content Aware Protection policies from report only to blocking](/docs/endpointprotector/configuration/configuration.md#blocking-content-aware-protection-policies) when you are ready to enforce them.

Upgrading from an earlier version? See the [EPP Appliance migration guide](/docs/endpointprotector/migrationprocedure/migrationguide.md) and [What's New](/docs/endpointprotector/release-notes/whats-new.md).
