---
title: "How do I upgrade Application Manager when I upgrade my DCs / servers?"
description: "How do I upgrade Application Manager when I upgrade my DCs / servers?"
sidebar_position: 270
---

# How do I upgrade Application Manager when I upgrade my DCs / servers?

Netwrix PolicyPak isn't "running" on any server.

PolicyPak has three parts:

- MMC snap in for the GPMC.
- Data which resides within GPOs.
- CSE on target systems.

So, there's nothing to "move" or do if you decommission a DC or upgrade a server. If you were using
the PolicyPak Central Store, that simply replicates when the next DC comes online.


