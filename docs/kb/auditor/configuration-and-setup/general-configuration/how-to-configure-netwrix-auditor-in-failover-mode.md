---
description: >-
  Instructions to configure Netwrix Auditor in failover mode to minimize
  downtime and reduce the risk of losing audit data, including VM
  recommendations, Long-Term Archive placement, and backup procedures.
keywords:
  - failover
  - backup
  - Long-Term Archive
  - LTA
  - Configuration.xml
  - Netwrix Auditor
  - snapshot
  - virtual machine
products:
  - auditor
sidebar_label: How to Configure Netwrix Auditor in Failover Mode
tags: []
title: "How to Configure Netwrix Auditor in Failover Mode"
knowledge_article_id: kA00g000000H9TECA0
---

# How to Configure Netwrix Auditor in Failover Mode

## Question

How can you configure Netwrix Auditor (NA) in failover mode to minimize the downtime and risk of losing audit data in case of an outage?

## Answer

**IMPORTANT:** Back up Netwrix Auditor databases if needed.

Refer to the following steps to configure Netwrix Auditor in failover mode:

1. Prepare your environment by installing Netwrix Auditor on a virtual machine.

   > **NOTE:** If Netwrix Auditor is already installed on a physical machine, consider migrating it to a virtual box. Some vendors support "physical to VM" migration."

2. Configure the Long-Term Archive (LTA) to be stored on a remote location, such as a shared iSCSI volume. Refer to the following Netwrix knowledge base article for instructions on how to move LTA to a new location: [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)

3. For setting up backup and failover, ensure that the volume under LTA and Working Folder is redundant enough to survive failure.

4. Use the features provided by your virtualization vendor to ensure zero-downtime of your Netwrix Auditor machine (e.g., HyperV Live Migration or VMware VMotion.)

For alternative backup and failover options, refer to the steps below.

1. Ensure that the volume under LTA and Working Folder is redundant enough to survive failure.

2. Once Netwrix Auditor is up and fully operational, back up the virtual machine.

   > **NOTE:** You can configure backups as often as every hour, using differential backups, for example, with one full backup daily.

3. Set up regular backups of the Netwrix Auditor `Configuration.xml` file on the Netwrix Auditor Server. Navigate to the following default path: `%ProgramData%Netwrix Auditor\AuditCore\ConfigServer`

   > **NOTE:** In case you previously migrated your Working Folder, review the following Registry Key value to identify the new location: `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\DataPathOverride`

4. Restore the Netwrix Auditor machine from snapshot.

5. Restore the configuration.

## Related Articles

- How to Move Long-Term Archive to a New Location: [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)




