---
description: >-
  Shows how to set up a real-time alert to detect account lockouts in Active
  Directory using Netwrix Auditor. Includes steps to configure filters and
  notification email.
keywords:
  - account lockout
  - alert
  - Netwrix Auditor
  - Active Directory
  - real-time alert
  - OU
  - filter
  - notification
products:
  - auditor
visibility: public
sidebar_label: Setting up Account Lockout Alert
tags: []
title: "Setting up Account Lockout Alert"
knowledge_article_id: kA00g000000H9YeCAK
---

# Setting up Account Lockout Alert

## Overview
This article explains how to set up an account lockout alert in Netwrix Auditor for Active Directory.

## Steps
1. Select **New Real-Time Alert** by clicking on **Real-Time Alert** and then right-clicking on **Real-Time Alert**  
   ![User-added image]./../0-images/ka04u000000HcRf_0EM70000000xMZN.png)

2. Name the alert, then click **Next**. Click **Add** to add the alert filters needed.  
   ![User-added image]./../0-images/ka04u000000HcRf_0EM70000000xMZS.png)

3. Here, if you would like to see lockouts for a specific OU, select the highlighted box. This can also be left as `*` for a wildcard to monitor all user account lockouts.  
   ![User-added image]./../0-images/ka04u000000HcRf_0EM70000000xMZc.png)

4. Select the existing attribute filter that is added by default and select **Edit**.  
   ![User-added image]./../0-images/ka04u000000HcRf_0EM70000000xMZr.png)

5. Place in the following attribute filters to see all account lockouts.  
   ![User-added image]./../0-images/ka04u000000HcRf_0EM70000000xMZw.png)

6. Hit **OK** and follow the rest of the prompts for filling in the specified e-mail address the alert will go to.

