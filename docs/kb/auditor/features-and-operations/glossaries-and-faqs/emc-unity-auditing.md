---
description: >-
  Instructions to configure EMC Unity NAS Server and Netwrix Auditor to collect
  audit data using EMC native auditing technologies.
keywords:
  - EMC Unity
  - EMC VNX
  - NAS audit
  - Netwrix Auditor
  - SMB
  - CIFS
  - Active Directory
  - Audit object access
  - Security Event Log
products:
  - auditor
sidebar_label: EMC Unity Auditing
tags: []
title: "EMC Unity Auditing"
knowledge_article_id: kA00g000000H9S9CAK
---

# EMC Unity Auditing

You can use Netwrix Auditor to audit EMC Unity storage systems deployed in your infrastructure. Netwrix Auditor uses EMC native audit technologies and approaches. The procedures in this article explain how you can configure your NAS Server and Netwrix Auditor to collect audit data.

## Configuring NAS Server

1. In NAS Server configuration check the following in the **Sharing Protocols** section:
   - a. The **Windows Shares (SMB, CIFS)** option is selected.
   - b. The **Join to the Active Directory domain** option is selected.

2. Then use the *EMC Unity/VBX/VNXe NAS Management* utility to enable **Audit object access** policy (both *Success* and *Failure*).  
   Alternatively, you can follow the steps described in the Dell Data Storage – Configure Audit Object Access Policy ⸱ v10.6 article:
   https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/delldatastorage/overview

3. Ensure that EMC Unity logging options are configured in the NAS Server settings.

**NOTE:** To configure maximum log size to be processed by Netwrix Auditor, follow the steps described in the Dell Data Storage – Configure Security Event Log Maximum Size ⸱ v10.6 article:
https://docs.netwrix.com/docs/auditor/10_8/configuration/fileservers/delldatastorage/overview

## Configuring Netwrix Auditor

1. Configure a monitoring plan for data collection from the storage system, as described in Netwrix Auditor documentation for EMC storage systems.

2. When adding an item to be monitored by this monitoring plan, select **EMC VNX/VNXe** item type.

3. Ensure the account you plan to use for data collection has the following rights and permissions on the target NAS Server:
   - a. Read share permissions on the audited shares
   - b. Membership in the local Administrators group

For more information, refer to Netwrix Auditor documentation.
