---
description: >-
  Explains why non-admin users receive "You do not have a Helpdesk operator
  permissions" or "Permission denied" (error code -2146828218) when accessing
  the Help-Desk portal, and shows how to grant the Help-Desk Operators role and
  verify IIS authentication settings.
keywords:
  - helpdesk
  - permission denied
  - error -2146828218
  - Help-Desk Operators
  - Account Lockout Examiner
  - IIS Authentication
  - Anonymous Authentication
  - Helpdesk operator permissions
products:
  - auditor
sidebar_label: 'Permission denied, error code -2146828218'
tags: []
title: 'Permission denied, error code -2146828218'
knowledge_article_id: kA00g000000H9cCCAS
---

# Permission denied, error code -2146828218

When trying to access the Help-Desk portal, a non-admin user gets a "You do not have a Helpdesk operator permissions" message or "Permission denied" error (error code -2146828218)

![User-added image]./../0-images/ka04u000000HcUx_0EM700000004wyo.png)

---

## Cause

This message occurs because the user whose credentials were used to enter the Helpdesk portal is not granted Help-Desk operator role in the product settings.

---

## Resolution

To grant a user access to the Help-Desk portal, add this user to the Help Desk Operators role.

### To do this, perform the following steps:
1. In the Account Lockout Examiner console, navigate to **File > Settings** and select the **Security roles** tab.  
2. In the **Help-Desk Operators** section, click the **Modify** button.  
3. In the dialog that opens, click the **Add** button and specify user(s) that you want to add to this role.

![User-added image]./../0-images/ka04u000000HcUx_0EM700000004wyy.png)

If the issue persists, check that Authentication options are configured properly in IIS:

4. Start the IIS Manager and navigate to your Account Lockout Examiner web portal virtual directory (by default - `Default Web SiteALE`).  
5. Select this folder by left-clicking on it and look for the **Authentication** feature under the IIS block in the central pane. Double-click on it.  
6. Make sure that `"Anonymous Authentication"` is disabled.

![User-added image]./../0-images/ka04u000000HcUx_0EM700000004wyt.png)

