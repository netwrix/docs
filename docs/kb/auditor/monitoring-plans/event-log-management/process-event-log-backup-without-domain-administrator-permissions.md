---
description: >-
  If your service account is not a member of the Domain Administrators group,
  follow these steps to allow Netwrix Auditor to process event log backups by
  assigning group membership, registry and file permissions, or by deploying a
  Group Policy to Domain Controllers.
keywords:
  - event log backup
  - Domain Controller
  - group policy
  - registry permissions
  - Netwrix Auditor
  - service account
  - winevt Logs
  - network share
  - permissions
products:
  - auditor
sidebar_label: Process event log backup without domain administra
tags: []
title: "Process event log backup without domain administrator permissions"
knowledge_article_id: kA00g000000H9S8CAK
---

# Process event log backup without domain administrator permissions

If your service account is not a member of the Domain Administrators group and you want Netwrix Auditor to process event log backups, perform the following steps:

1. Add your service account to one of the following groups: **Print Operators** or **Server Operators**
2. Specify Read permissions for the following registry node on all Domain Controllers: `HKLM\System\CurrentControlSet\Services\EventLog\Security`
3. Share the folder with event log backups (default is `C:\Windows\System32\winevt\Logs`) on all Domain Controllers
4. Specify read permissions for the event log backup folder (default is `C:\Windows\System32\winevt\Logs`) on all Domain Controllers

If you have many Domain Controllers, create a Group Policy to apply these settings to all Domain Controllers. To create a new Group Policy, perform the following steps:

1. Run `gpmc.msc`
2. Create a new policy object and link it to the **Domain Controllers** OU (right-click the **Domain Controllers** OU and select **Link Existing GPO**, then select the policy that you created)
3. Edit the policy that you created
4. Navigate to **Computer Configuration** → **Policies** → **Windows Settings** → **Security Settings** → **Registry**
5. Right-click **Registry**, select **Add Key**, select the following key: `HKLM\System\CurrentControlSet\Services\EventLog\Security`, and press **OK**
6. Add the Netwrix Auditor service account and specify **Read** permissions
7. Navigate to **Computer Configuration** → **Policies** → **Windows Settings** → **Security Settings** → **File System**
8. Right-click **File System**, select **Add File**, select the following folder: `C:\Windows\System32\winevt\Logs`, and press **OK**
9. Add the Netwrix Auditor service account and specify **Full control**
10. Navigate to **Computer Configuration** → **Preferences** → **Windows Settings** → **Network Shares**
11. Right-click **Network Shares** → **New** → **Network Share**
12. Select **Update** in the **Action** drop-down menu, specify **Share name** (for example, EventLogs), specify the following folder in the **Folder Path** area: `C:\Windows\System32\winevt\Logs`, and press **OK**

After replication, all your Domain Controllers will have the Event Logs shared folder with event logs in it and Netwrix Auditor will be able to process backups.
