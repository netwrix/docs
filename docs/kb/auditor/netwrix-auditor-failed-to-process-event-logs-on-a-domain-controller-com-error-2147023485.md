---
description: >-
  Describes how to resolve Event ID 2001 COM Error -2147023485 when Netwrix
  Auditor cannot process Event Logs on a Domain Controller by adjusting agent
  settings and enabling network traffic compression.
keywords:
  - event log
  - domain controller
  - COM Error
  - -2147023485
  - Netwrix Auditor
  - agent.ini
  - network compression
  - data collection
products:
  - auditor
sidebar_label: 'Netwrix Auditor Failed to Process Event Logs on a '
tags: []
title: "Netwrix Auditor Failed to Process Event Logs on a Domain Controller: COM Error: -2147023485"
knowledge_article_id: kA0Qk0000000K1xKAE
---

# Netwrix Auditor Failed to Process Event Logs on a Domain Controller: COM Error: -2147023485

## Symptom

The Netwrix Auditor System Health Log contains the following error:

```
        Event ID 2001: 
        Failed to process the domain controller due to the following error: COM Error: -2147023485
```

## Cause

Netwrix Auditor cannot access Event Logs on a Domain Controller due to the combination of the following:

- Some audit settings for Active Directory are missing.
- Insufficient permissions for Data Collecting Account.
- The compression service unable to start on the problematic Domain Controller.

## Resolution

Prerequisites for a problematic Domain Controller:

- Install latest Windows updates
- Update .Net Framework to 4.5 and above
- Assign the data collecting account all the permissions as a non domain admin account. For additional information, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8
- If the **Adjust Audit Settings Automatically** option is disabled for a monitoring plan, make sure all audit settings for Active Directory were configured properly. For additional information, refer to the following articles: https://docs.netwrix.com/docs/auditor/10_8 https://docs.netwrix.com/docs/auditor/10_8

Follow the steps below to resolve the issue:

1. On the Netwrix Auditor Server host, navigate to `c:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing\agent.ini`  
   Open the file with any text editor and add the following line:

   ```text
   DCFQDNname=skipsilent
   ```

   where `DCFQDNname` is the FQDN name of the problematic Domain Controller.
2. Restart the problematic host entirely.
3. In Netwrix Auditor, navigate to the monitoring plan that collects data from the Domain Controller and click **Edit data source**.
4. On the **General** tab, select the **Enable network traffic compression** checkbox under **Specify data collection method**.
5. Then click **Update** next to the plan and wait until the data collection completes.
6. Remove the line you added to the **agent.ini** file on the step 2.
7. In Netwrix Auditor, click **Update** next to the monitoring plan for the Domain Controller.
8. Wait for the data collection completes.

### Related Articles

- Configuration — Windows Server — Adjusting Event Log Size and Retention Settings — v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Configuration — Active Directory Ports — v10.6: https://docs.netwrix.com/docs/auditor/10_8
- Configuration — Active Directory: Manual Configuration — v10.6: https://docs.netwrix.com/docs/auditor/10_8
