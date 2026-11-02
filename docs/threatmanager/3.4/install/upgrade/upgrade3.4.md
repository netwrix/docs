---
title: "Upgrade from 3.3 to 3.4"
description: "Upgrade Threat Manager from 3.3 to 3.4 and handle the follow-up changes to remote services, First Time Location, and Entra ID sync."
sidebar_position: 40
---

# Upgrade from 3.3 to 3.4

This page covers what changes when you upgrade Threat Manager from 3.3 to 3.4. For the general procedure, see [Upgrade Procedure](/docs/threatmanager/3.4/install/upgrade/upgrade.md).

## After the upgrade

### Register remote services again

A service registered before 3.4 has no status token, so Threat Manager can't verify its connection until you register the service again. Register each remote service that you registered before 3.4. See [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.4/install/actionservice.md).

### First Time Location

First Time Location now ignores failed sign-ins. The upgrade deletes learned locations that have no successful sign-in. It also deletes locations unused within the event retention period. Threat Manager suspends First Time Location alerting for 30 days while it learns locations again from successful sign-ins only.

### Entra ID synchronization

A display name change on an already-linked Entra ID user, host, or client now updates the display name stored on events. This fixes a wrong perpetrator name on Application Permission Change events. After the upgrade, the next Entra ID replication sync is a full sync.
