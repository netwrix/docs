---
description: >-
  Use the attached Security Log Autobackup.adm template to enable and configure
  automatic backups of the Security event log on domain controllers using Group
  Policy.
keywords:
  - security log
  - autobackup
  - domain controller
  - Group Policy
  - administrative template
  - Event Log
  - MaxSize
  - Retention
  - Default Domain Controllers
products:
  - auditor
sidebar_label: How do I enable security log autobackups on each d
tags: []
title: "How do I enable security log autobackups on each domain controller?"
knowledge_article_id: kA00g000000H9UvCAK
---

# How do I enable security log autobackups on each domain controller?

To do this, use the Security Log Autobackup.adm file attached to this article. Perform the following steps:

1. Download the attached file.
2. Navigate to **Start** --> **Administrative Tools** --> **Group Policy Management** and navigate to the effective domain controllers policy (the Default Domain Controllers policy by default).
3. Right-click the policy and select **Edit** from the popup menu.
4. In the left pane, expand the **Computer Configuration** --> **Policies** node.
5. Right-click the **Administrative Templates** node and select **Add/Remove Templates...** from the popup menu.
6. In the dialog that opens, browse to the downloaded file and add it. Then click **Close**.
7. Expand the **Administrative Templates** --> **Classic Administrative Templates** --> **NetWrix** node and click on the **Event Log** node.
8. In the right pane, double-click on **Automatically enable backups of the security log file**.
9. Select **Enabled**, click the **Apply** button and then click **OK**.

### NOTE
If you are running Windows 2003, some nodes may not be displayed after you have added an administrative template. To fix this, make sure that the **Only show policy settings that can be fully managed** option is disabled. To do this, perform the following steps:

1. Navigate to **Start** --> **Administrative Tools** --> **Group Policy Management** and navigate to the effective domain controllers policy (the Default Domain Controllers policy by default).
2. Right-click the policy and select **Edit** from the popup menu.
3. In the left pane, expand the **Computer Configuration** --> **Policies** node and click on **Administrative Templates**.
4. In the main menu, select **View** --> **Filtering** and deselect the **Only show policy settings that can be fully managed** option.

Now you will be able to manage the imported administrative template.

If you need to change the status of security log autobackups `MaxSize`/`Retention`, perform the following steps:

1. Download the attached file.
2. Navigate to **Start** --> **Administrative Tools** --> **Group Policy Management** and navigate to the effective domain controllers policy (the Default Domain Controllers policy by default).
3. Right-click the policy and select **Edit** from the popup menu.
4. In the left pane, expand the **Computer Configuration** --> **Policies** node.
5. Right-click the **Administrative Templates** node and select **Add/Remove Templates...** from the popup menu.
6. In the dialog that opens, browse to the downloaded file and add it. Then click **Close**.
7. Expand the **Administrative Templates** --> **Classic Administrative Templates** --> **NetWrix** node and click on the **Event Log** node.
8. In the right pane, double-click on **Automatically enable backups of the security log file**.
9. Select the **Disabled**/**Enable**, click the **Apply** button and then click **OK**.
10. Double-click on "Automatically set the "MaxSize" filed for the security log backup". Select the **Disabled**/**Enable**, click the **Apply** button and then click **OK**.
11. Double-click the "Automatically set the "Retention" filed for the security log backup. Select the **Disabled**/**Enable**, click the **Apply** button and then click **OK**.
