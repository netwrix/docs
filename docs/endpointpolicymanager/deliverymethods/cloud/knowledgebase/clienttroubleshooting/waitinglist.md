---
title: "Endpoint Policy Manager Cloud Client: Why are computers appearing in WAITING LIST and how can I fix it?"
description: "Endpoint Policy Manager Cloud Client: Why are computers appearing in WAITING LIST and how can I fix it?"
sidebar_position: 120
---

# Endpoint Policy Manager Cloud Client: Why are computers appearing in WAITING LIST and how can I fix it?

The Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud WAITING LIST is used to describe TWO
conditions:

## Condition #1:

A computer HAD a license. But then the computer went offline for more than (default check-in
interval) 14 days.

- When this happens, the license transitions from CONSUMED to WAITING LIST.
- If the computer comes back online and there are AVAILABLE licenses, and the computer can
  communicate with the cloud service, the license will then transition from WAITING LIST back to
  CONSUMED.

:::note
If you have AVAILABLE licenses, but computers are unexpectedly transitioning to the
WAITING LIST, this means that the computers are not able to communicate as expected with the
:::


Endpoint Policy Manager Cloud Service. Again, after about 14 days, a computer loses its license and
that license becomes AVAILABLE.

## Condition #2:

All licenses are already CONSUMED. But then you JOIN more computers, even though you are out of
available licenses.

- This is called "oversubscribed."
- Computers cannot claim a license because there are no more available.
- You will need to purchase more licenses.
- When you do, the OVERSUBSCRIBED computers will then consume an AVAILABLE license.

:::note
You can use the REPORTS to quickly discover which computers are on the WAITING LIST like
what's seen here. Note that the report is "per component" even though we do not license components
separately.
:::


![382_1_ppcloud-status1-300x88](/images/endpointpolicymanager/troubleshooting/cloud/382_1_ppcloud-status1-300x88.webp)


