---
description: >-
  When SSRS report toolbar icons render as text symbols, the problem is usually
  Internet Explorer permissions. This article explains how to add the reporting
  server to Trusted Sites and disable Protected Mode for Admins via Group Policy
  to restore the command buttons.
keywords:
  - SSRS
  - Internet Explorer
  - Trusted Sites
  - Protected Mode
  - Group Policy
  - Netwrix
  - reporting server
  - toolbar icons
products:
  - auditor
sidebar_label: Fixing reports displaying letters instead of command text in SSRS
tags: []
title: "Fixing reports displaying letters instead of command text in SSRS"
knowledge_article_id: kA04u000000Tt80CAC
---

# Fixing reports displaying letters instead of command text in SSRS

## Scenario
Upon opening reports, the command buttons have been replaced by text symbols and it looks similar to this:

![Screenshot_1.png]./../0-images/ka04u000000HdFq_0EM4u0000052m0m.png)

## Solution
The issue is with Internet Explorer's handling of permissions. To fix the issue you need to add the reporting server to the **Trusted Sites** and disable the **Protected Mode** for Admins on the Netwrix Server.

### Adding Reporting Server to the Trusted sites
To do this, follow these steps:

1. In **Internet Explorer**, click **Tools**, then **Internet Options**. Go to the **Security** tab.
2. In the **Select a Web content zone to specify its current security settings** box, click **Trusted Sites**, and then click **Sites**.
3. In the **Add this Web site to the zone** box, type the IP address of the Netwrix Server, and then click **Add**.
4. Click **OK** two times to accept the changes and return to Internet Explorer.

### Disabling Protected Mode for Admins
This operation can be done using Group Policy. You need to locate the Group Policy that applies to the Admins of the Netwrix Server. To disable Protected Mode, follow these steps:

1. Launch the **Group Policy Management Console** and edit a policy.
2. Expand: **User Configuration > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page > Internet Zone**
3. Double-click **Turn On Protected mode**
4. Select `ENABLED`
5. Select `DISABLED` from the PROTECTED MODE selection box.

If this solution didn't help, please contact Netwrix Technical Support.

