---
title: "What are the storage requirements when using PPGPCR with SQL server?"
description: "What are the storage requirements when using PPGPCR with SQL server?"
sidebar_position: 30
---

# What are the storage requirements when using PPGPCR with SQL server?

There are two ways to consume storage with PPGPCR.

- Making Snapshots from the server, interrogating the clients.
- When the auditor scheduled task sends data from the client up to the server.

Both of these methods will add up when trying to calculate storage.

:::note
PPGPCR has no insights into your actual disk size. Netwrix Endpoint Policy Manager
(formerly PolicyPak) will, however, attempt to internally clean out as per the schedule below. But
you are advised to plan with extra disk and SQL storage in case you go over.
:::


:::note
The database doesn't increase in size unless the RSOP changes. Therefore, even if you run
the Auditor (explained later) multiple times, database only records changes (if any.)
:::


## Estimates for Making snapshots

For 1,000 PCs with 6 (six) full snapshots recorded, you can expect to use around 1 Gigabyte (1GB) of
storage.

For 30,000 PCs with 1 (one) full snapshot, you can expect to use around 4GB of storage.

By default Endpoint Policy Manager Group Policy Compliance Reporter will keep 99 snapshots you make.

You are generally advised to tune this down. General recommendation would be like 5 or so.

![762_1_image-20191028221305-1_950x522](/images/endpointpolicymanager/requirements/gpocompilancereporter/762_1_image-20191028221305-1_950x522.webp)

## Estimates for Auditor Scheduled Task

When computers send data to the PPGPCR Server via the Scheduled Task, you will see computers
checking in here:

![762_3_image-20191028221305-2_950x504](/images/endpointpolicymanager/requirements/gpocompilancereporter/762_3_image-20191028221305-2_950x504.webp)

Endpoint Policy Manager Group Policy Compliance Server stores multiple pushes of data for historical
purposes, althought this data is not exposed for customers at this time, and is not tunable.

In a typical day 24 hour period, the auditor task will kick off around every 90 minutes, or 16 times
per day.

The maximum the auditor can run by default is 20 times. This is configurable via the PPGPCR Auditor
Endpoints: Maximum check-ins per day policy setting.

![762_5_image-20191028221305-3_950x623](/images/endpointpolicymanager/requirements/gpocompilancereporter/762_5_image-20191028221305-3_950x623.webp)

For very large environments we recommend you tune this to 1 time per day, so the database doesn't
grow unnecessarily. The database will grow (essentially) as follows:

If you have 30,000 PCs, the database will likely be around 80GB when it's all settled in, including
logging and other data.

Old auditor data is auto-expunged every 36 hours, where all the previous auditor data except the
most current is marked for future deletion. You can tune when this occurs with this PPGPCR ADMX
setting:

![762_7_image-20191028221305-4_950x726](/images/endpointpolicymanager/requirements/gpocompilancereporter/762_7_image-20191028221305-4_950x726.webp)

