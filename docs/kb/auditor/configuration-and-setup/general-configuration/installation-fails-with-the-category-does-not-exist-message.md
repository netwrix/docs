---
description: >-
  During installation, you receive the "Category does not exist" message due to
  User Account Control settings preventing elevation. This article explains how
  to change the elevation prompt behavior or disable UAC for Windows Server
  2008/Windows 7 and Windows Vista to resolve the issue.
keywords:
  - Category does not exist
  - User Account Control
  - UAC
  - secpol.msc
  - Elevate without prompting
  - Never notify
  - Windows 7
  - Windows Vista
products:
  - auditor
sidebar_label: Installation fails with the "Category does not exi
tags: []
title: Installation fails with the "Category does not exist" message
knowledge_article_id: kA00g000000H9XxCAK
---

# Installation fails with the "Category does not exist" message

The product installation fails, and the user is presented with the **"Category does not exist"** message.

The issue may be caused by the **User Account Control** performance.

There are two ways to resolve the issue:

## Change the elevation prompt behavior for administrators

1. Open the **Start** menu, navigate to **All Programs / Accessories / Run**, type in `secpol.msc` and click **OK**.
2. In the **Local Security Policy** left pane, navigate to **Local Policies / Security Options**.
3. In the right pane, double-click the following policy: **User Account Control: Behavior of the elevation prompt for administrators.**
4. On the **Local Security Settings** tab, select `Elevate without prompting` and click **OK**. The tasks that request elevation will automatically run as elevated without prompting administrator.
5. Close the **Local Security Settings** window.
6. Restart the system, if you are notified that it is needed to apply the changes.

## Or disable User Account Control (UAC)

- For **Windows 2008** and **Windows 7**, do the following:

1. Open the **Start** menu, navigate to **Control Panel / User Accounts / Change User Account Control settings**.
2. In the **User Accounts Control Settings** window, switch to `Never notify`.
3. Restart your server to apply the changes.

- For **Windows Vista**, do the following:

1. Open the **Start** menu, navigate to **Control Panel / User Accounts**.
2. In the **User Accounts** window, click **User Accounts**.
3. In the **User Accounts** tasks window, click **Turn User Account Control** off.
4. If **UAC** is currently configured in **Admin Approval Mode**, the **User Account Control message appears**. Click **Continue**.
5. Clear the **Use User Account Control (UAC) to help protect your computer** check box, and then click **OK**.
6. Click **Restart Now** to apply the change right away, or click **Restart Later**, and then close the **User Accounts tasks** window.
