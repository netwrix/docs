---
description: >-
  This article provides step-by-step instructions on how to enter or exit a failover state using NPS.HaMgr.exe in a high availability (HA) setup.
keywords:
  - high availability
  - failover
  - NPS.HaMgr.exe
sidebar_label: High Availability Failover
tags: []
title: "High Availability − Enter or Exit a Failover State Using NPS.HaMgr.exe"
knowledge_article_id: kA04u000000HDhCCAW
products:
  - privilege-secure-access-management
---

# High Availability − Enter or Exit a Failover State Using NPS.HaMgr.exe

## Overview

Failover is required in upgrade scenarios, as well as disaster recovery scenarios. This article discusses how to fail over a secondary node in a high availability (HA) pair, and how to re-establish high availability after failing over.

## Instructions

### Step 1 − Fail Over a Secondary Node

1. In the secondary server, locate `NPS.HaMgr.exe`. As per the recommendations, it should be located in the `%ProgramFiles%\Stealthbits\PAM\HA Tools` directory on the drive where Netwrix Privilege Secure is installed. Otherwise, it will be in the **Extras** folder where the Netwrix Privilege Secure archive file was extracted. Refer to the following article for additional information: [How to Configure High Availability (HA) Using SbPAM.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html).

2. Start the HA Manager Tool `NPS.HaMgr.exe`.

3. Click the **Failover** button − this button appears only when the HA Tool is running on the secondary server, and the secondary node is actively replicating the primary node.

4. Shortly, PostgreSQL replication will stop. The secondary node should no longer indicate **Running Replica** in the HaMgr interface, and the **Failover** button should be replaced with the **Configure HA** button.

> **NOTE:** Clicking **Failover** swaps the IP Address of the Primary and the Secondary hosts, moving the secondary IP address to the primary IP address field. After failing over, the HA Tool confirms replication is inactive.

### Step 2 − Re-establish the HA Connection Between the Primary and Secondary Nodes

1. Launch the HA Tool on the secondary node.

2. Enter the primary IP address into the **Primary IP** text box.

3. Enter the secondary IP address into the **Secondary IP** text box.

4. Click the **Configure HA** button.

> **IMPORTANT:** When re-establishing a High Availability pair, confirm the correct IP addresses for both the primary and secondary nodes. These should correspond to the same IP addresses as before the failover was performed. Contact Technical Support for assistance in case the nodes are swapped, and HA is improperly re-established: [Netwrix Support · Netwrix](https://www.netwrix.com/support.html).

## Related Links

- [How to Configure High Availability (HA) Using SbPAM.HaMgr.exe](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u0000000HfOCAU.html)
- [Netwrix Support · Netwrix](https://www.netwrix.com/support.html)