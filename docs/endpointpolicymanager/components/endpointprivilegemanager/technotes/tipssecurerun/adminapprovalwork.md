---
title: "How does the option \"Show Admin Approval dialog for untrusted application\" in Admin Approval work?"
description: "How does the option \"Show Admin Approval dialog for untrusted application\" in Admin Approval work?"
sidebar_position: 90
---

# How does the option "Show Admin Approval dialog for untrusted application" in Admin Approval work?

If the Show Admin Approval dialog for untrusted applications is enabled,then the decision on whether
to show the Admin Approval dialog will work, as it has done up to version 23.6.3571. In other words,
the Admin Approval dialog will be shown for untrusted applications and/or any applications requiring
elevation.

As of CSE version 23.8.xxxx and higher, if the **Show Admin Approval dialog for untrusted
applications** is disabled,then the decision on whether to show the Admin Approval dialog will be
based on the following:

SCENARIO 1: If SecureRun is disabledthen the Admin Approval dialog must notbe shown.

SCENARIO 2: If SecureRun is enabled:

- If the file is owned by an untrusted principal and elevation is not required, then the Admin
  Approval dialog will notbe shown, and it will be blocked by SecureRun.
- If elevation is required, then Admin Approval will be shown, regardless if the file is owned by a
  trusted principal or not.

![977_1_image-20230824223216-1_950x550](/images/endpointpolicymanager/leastprivilege/securerun/977_1_image-20230824223216-1_950x550.webp)


