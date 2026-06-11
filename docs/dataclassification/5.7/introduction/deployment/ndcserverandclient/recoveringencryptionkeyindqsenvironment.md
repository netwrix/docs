---
title: "Recovering the Encryption Key in Secondary NDC Instances"
description: "Recovering the NDC encryption key in a distributed environment"
sidebar_position: 10
---

# Recovering the Encryption Key in Secondary NDC Instances

:::note
This article applies to version 5.7.10 and later.
:::

In a distributed NDC environment, if the encryption key has been removed from the registry on a secondary instance, the key can be recovered by retrieving it from the primary instance and storing it securely on the secondary instance.

When an NDC instance detects that the encryption key is missing, a health error will be logged and displayed on the NDC Stats dashboard and the services on that instance will halt.

The primary instance will self-recover on startup of the collector, so long as the encryption key is stored in the database. 

If the database key is also no longer present or accessible but the key still exists on at least one secondary instance, the services on the primary instance will halt. If this occurs, contact Netwrix support for assistance with recovering the encryption key from a secondary instance to the primary instance.

## Recovering the Encryption Key

To recover the encryption key on a secondary instance:

1. Stop all services on the secondary instance.
2. Start the NDC installer and select **Repair**.
3. Continue through to the DQS sync step.
4. Follow the instructions listed in steps 9 through 12 of the [Enabling DQS Mode (5.7.10 and later versions) section of Configuring an NDC Server Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md#enabling-dqs-mode-5710-and-later-versions).

Once all steps have been performed, the key will be restored to the secondary instance. Start the services again and they should load the key and function correctly. It may take a minute for all 3 services to pick up the new key. If the issue persists, contact Netwrix support for assistance with diagnosis and remediation.
