---
title: "On-Premises Environment"
description: "On-Premises Environment"
sidebar_position: 20
---

# On-Premises Environment

When working in an on-premises environment, Usercube needs a specific architecture.

## Overview

NETWRIX recommends the following architecture:

![On-Premises Recommended Architecture](/images/identitymanager/6.1/integration-guide/architecture/on-prem/architecture_onprem.webp)

Most situations do not need Usercube so much that they need a fail-over system, i.e. installing
several Usercube instances in order to prevent breakdowns. In most situations, a single Usercube
instance is enough.

### Server

The server should be stateless, i.e. it should store only temporary files.

### Agent(s)

One or several additional agents can be needed only when using a sensitive network, for example an
administration network separated from the main network.

### Database

The database is a critical item, and thus should be set up with a mirror. The database mirror can
have lower CPU and RAM and be on a different location.

NETWRIX recommends using an incremental backup.
