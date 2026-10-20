---
title: "Server with Push Mode"
description: "Server with Push Mode"
sidebar_position: 20
---

# Server with Push Mode

In the following sections, we'll discuss how to set up GPCR Server and use it with push mode.

:::warning
The Netwrix PolicyPak GPCR server doesn't lock out
administrators when they are editing the same test.
:::


## Introduction

The goal of push mode with PolicyPak GPCR is twofold:

- To use the PolicyPak GPCR server as a centralized repository for client endpoint
  computers to push their Group Policy (RSOP) data for later analysis.
- To accept incoming requests from multiple PolicyPak GPCR clients (admin consoles),
  store the data, and ensure that multiple administrators cannot modify the data at the same time.

:::warning
You must use the PolicyPak GPCR server in order for multiple
administrators to share the same data. If you point the PolicyPak GPCR client (admin
console) to a file share (using standalone mode), there is no guarantee that the PolicyPak GPCR data will not be corrupted when multiple admins try to access it at the same time.
:::


## Licensing

PolicyPak GPCR Server does not require any extra licensing to be used. Only computer
endpoints must be licensed for GPCR.

