---
description: >-
  Netwrix Privilege Secure’s SSH Session Extension countdown may not appear in
  the MobaXTerm tab bar unless the session's Lock terminal title option is
  disabled. This article shows how to disable the option in MobaXTerm Bookmark
  Settings so the countdown displays in the session tab.
keywords:
  - Netwrix Privilege Secure
  - MobaXTerm
  - SSH session
  - session extension
  - countdown
  - Bookmark Settings
  - Lock terminal title
  - Connection Profile
  - Access Profile
products:
  - privilege-secure-access-management
sidebar_label: Enable Session Extension Countdown Tab Display for
tags: []
title: "Enable Session Extension Countdown Tab Display for Netwrix Privilege Secure SSH Sessions in MobaXTerm"
knowledge_article_id: kA04u0000000HRbCAM
---

# Enable Session Extension Countdown Tab Display for Netwrix Privilege Secure SSH Sessions in MobaXTerm

## Summary

Netwrix Privilege Secure’s SSH Session Extension countdown does not display in the MobaXTerm tab bar unless a specific option has been disabled in the MobaXTerm session’s **Bookmark Settings**.

## Instructions

As shown in the screenshot below, the SSH session’s **"Lock terminal title"** setting should be disabled in the session’s **Bookmark Settings** within MobaXTerm.

1. In MobaXTerm, right-click the session in the **Sessions** sidebar.
2. Click **Edit Settings**.
3. Navigate to **Bookmark Settings**.
4. Disable the **"Lock terminal title"** setting.

![User-added image](./../0-images/ka04u000000HcZt_0EM4u000004bUnw.png)

If configured correctly, the session tab displays session expiration countdown messages per the settings in the Netwrix Privilege Secure Connection Profile assigned to the Access Profile granting the user the right to use the SSH Activity.

![User-added image](./../0-images/ka04u000000HcZt_0EM4u000004bUo1.png)
