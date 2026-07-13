---
description: >-
  When an agent with the same name as an already registered agent attempts to
  connect to Netwrix Change Tracker, the hub can return a 500 error indicating
  the requested agent name is in use. This article explains how to resolve the
  error on Windows and RHEL/CentOS by restoring the correct agent ID and editing
  HubDetails.xml.
keywords:
  - change-tracker
  - gen7agent
  - agent.id
  - HubDetails.xml
  - rolling-log
  - 500 server message
  - agent id
  - Linux
  - Windows
products:
  - changetracker
knowledge_article_id: ka0Qk000000DSEbIAO
sidebar_label: 'Error: Hub Connection Failed (500 Server Message)'
tags: [kb, troubleshooting-and-errors]
title: 'Error: Hub Connection Failed (500 Server Message)'
---

# Error: Hub Connection Failed (500 Server Message)

## Symptom

When attempting to connect a device to Netwrix Change Tracker, the following error message may appear in the rolling log:

```text
2017-08-15 16:29:41,627 [10] INFO Message - Hub connection failed (500 Server message: Error, requested Agent name is in use by device with uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)
```

## Cause

This problem occurs when a device that has the same name as an already registered agent attempts to connect to **Netwrix Change Tracker**. When an agent connects, it receives an identifier called the `agent.id` file, which contains an alphanumeric ID for identification purposes. If the `.id` file is not located in the Agent directory (`%ProgramData%\NNT\gen7agent.service` or `/var/nnt/gen7agent.service`), you see an error in the Agent's `Rolling-log.txt` similar to the preceding example.

> **IMPORTANT:** Use this method to resolve this problem only if the Agent you are trying to connect is the same device or a re-imaged variant of the older device. Contact [Netwrix Support](https://www.netwrix.com/support.html) before attempting this fix.

## Resolution

### For Windows-Based OS

Follow these steps:

1. Stop the Netwrix Change Tracker gen7agent Service.
2. Open the rolling log and copy the Agent ID that is listed. Example: `Hub connection failed (500 Error, requested Agent name is in use by device with uniqueId: 123456a6-ffee-78a9-927e-34921d59ce64)`.
3. Edit the `agent.id` file in `%ProgramData%\NNT\gen7agent.service` using Notepad. Erase the ID currently in that file and paste in the ID copied from the preceding rolling log. Ensure there are no spaces at the beginning or end of the text string.
4. Delete all files within the `%ProgramData%\NNT\gen7agent.service` folder except the `HubDetails.xml` and `agent.id` files.
5. Edit the `HubDetails.xml` file, erase the `<E1>` tags and everything between them, and replace the `<Password />` entry with `<Password><YourAgentPassword></Password>`.

    > **NOTE:** Replace `<YourAgentPassword>` with the agent's password. If the default agent password has not been changed since installation, use the default value. <!-- SME: how should customers find the default agent password? Link to a setup doc, or point to support? -->

6. If you have specified a Prefix or Suffix and want to remove it, replace `<NamePrefix>MyPrefix</NamePrefix>` with `<NamePrefix />`.
7. Save the `HubDetails.xml` file. You may need to save it to your desktop and copy it back to the original location due to hardened permissions.
8. Start the gen7agent Service. The new device should now be registered using its original device name.

### For RHEL/CentOS Linux-Based OS

Follow these steps:

1. Stop the Netwrix Change Tracker gen7agent Service.
2. Open the rolling log using `cat`, `nano`, or `vi` (`cat/vi/nano/var/nnt/gen7agent.service/rolling-log.txt`). Copy the Agent ID that is listed.
3. Edit the `agent.id` file in `/var/nnt/gen7agent.service/agent.id` using `nano` or `vi`. Erase the ID currently in that file and paste in the ID copied from the preceding rolling log. Ensure there are no spaces at the beginning or end of the text string.
4. Delete all files except the `HubDetails.xml` and `agent.id` files within the `/var/nnt/gen7agent.service` folder.
5. Edit the `HubDetails.xml` file, erase the `<E1>` tags and everything between them, and replace the `<Password />` entry with `<Password><YourAgentPassword></Password>`.

    > **NOTE:** Replace `<YourAgentPassword>` with the agent's password. If the default agent password has not been changed since installation, use the default value. <!-- SME: how should customers find the default agent password? Link to a setup doc, or point to support? -->

6. If you have specified a Prefix or Suffix and want to remove it, replace `<NamePrefix>MyPrefix</NamePrefix>` with `<NamePrefix />`.
7. Save the `HubDetails.xml` file.
8. Start the nntgen7agent Service. The new device should now be registered using its original device name.

<!--
Additional related articles pending migration to the public docs site. When
any of the following target articles are migrated in a future batch,
re-create the "## Related Articles" section and add the corresponding link:

- How to Move Your Linux Server MongoDB Database to a Windows Server (kb.netwrix.com/8283) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (refresh steps and screenshots); Batch 4 candidate
- Add Palo Alto Device to a Proxy Agent as a Proxy Device in Change Tracker Gen 7 (kA04u0000000JXHCA2) — SME decision 2026-07-10 (Ben): KEEP + UPDATE (steps are outdated); Batch 4 candidate
- Changing the Admin Password for MongoDB (docs/kb/changetracker/database-and-diagnostics/change-mongo-admin-password.md) — pending merge of batch 3b PR #1209; re-add once merged to dev. Link text updated to match the article's current (batch 3b) title.
-->
