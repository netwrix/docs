---
description: >-
  Shows how to configure Netwrix Account Lockout Examiner to monitor local
  machine event logs by adding the workstation as a managed object.
keywords:
  - account lockout
  - local accounts
  - event logs
  - monitoring
  - Netwrix Account Lockout Examiner
  - Domain Controller
  - managed objects
products:
  - auditor
sidebar_label: How to configure monitoring of local accounts
tags: []
title: "How to configure monitoring of local accounts"
knowledge_article_id: kA00g000000H9deCAC
---

# How to configure monitoring of local accounts

Netwrix Account Lockout Examiner can be set to monitor local machine event logs by performing the following steps

1. Start Netwrix Account Lockout Examiner.  
2. Go to **File - Settings**.  
3. In the dialog box, choose **Managed Objects** tab.  
4. Press the **Add** button.  
5. In the next dialog box, select the **Domain Controller** radio button and enter the the name of workstation local events of which you want to monitor  
6. Press the **OK** button. Press the **OK** button again.

[![User-added image]./../0-images/ka04u000000HcWP_0EM700000004wxl.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAbY&feoid=00N700000032Pj2&refid=0EM700000004wxl)

**Note:** Make sure that the account used to run the Account Lockout Examiner service has administrative access to the machine you are adding.



