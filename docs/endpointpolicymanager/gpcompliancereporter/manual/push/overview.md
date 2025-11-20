---
title: "Server with Push Mode"
description: "Server with Push Mode"
sidebar_position: 20
---

# Server with Push Mode

In the following sections, we'll discuss how to set up GPCR Server and use it with push mode.

:::warning
The Netwrix Endpoint Policy Manager (formerly PolicyPak) GPCR server doesn't lock out
administrators when they are editing the same test.
:::


## Introduction

The goal of push mode with Endpoint Policy Manager GPCR is twofold:

- To use the Endpoint Policy Manager GPCR server as a centralized repository for client endpoint
  computers to push their Group Policy (RSOP) data for later analysis.
- To accept incoming requests from multiple Endpoint Policy Manager GPCR clients (admin consoles),
  store the data, and ensure that multiple administrators cannot modify the data at the same time.

:::warning
You must use the Endpoint Policy Manager GPCR server in order for multiple
administrators to share the same data. If you point the Endpoint Policy Manager GPCR client (admin
console) to a file share (using standalone mode), there is no guarantee that the Endpoint Policy
Manager GPCR data will not be corrupted when multiple admins try to access it at the same time.
:::


## Licensing

Endpoint Policy Manager GPCR Server does not require any extra licensing to be used. Only computer
endpoints must be licensed for GPCR.

