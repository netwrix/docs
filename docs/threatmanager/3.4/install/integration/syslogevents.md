---
title: "Syslog Event Fields"
description: "Reference for the syslog fields Threat Manager reads to set the perpetrator name, including upn, ntname, and storage account names."
sidebar_position: 40
---

# Syslog Event Fields

Threat Manager reads fields in incoming syslog events to set the perpetrator name on the event. Syslog events from Netwrix Access Management (NAM) can carry `upn=` and `ntname=` fields.

## Perpetrator name

Threat Manager takes the perpetrator name from the first field that has a value, in this order:

1. `ntname`
2. `upn`
3. `username`
4. `usrname`

It skips a blank value. This prevents wrong display names for accounts that aren't synced.

## Storage accounts

A storage account perpetrator with the reserved storage key GUID always shows the reserved storage key name. Threat Manager doesn't prefix it with the domain.
