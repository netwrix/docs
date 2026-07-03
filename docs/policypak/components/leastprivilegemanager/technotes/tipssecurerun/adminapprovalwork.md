---
title: "How does the option \"Show Admin Approval dialog for untrusted application\" in Admin Approval work?"
description: "How does the option \"Show Admin Approval dialog for untrusted application\" in Admin Approval work?"
sidebar_position: 90
---

# How the "Show Admin Approval dialog for untrusted application" option in Admin Approval works

If the Show Admin Approval dialog for untrusted applications is enabled,then the decision on whether
to show the Admin Approval dialog will work, as it has done up to version 23.6.3571. In other words,
the Admin Approval dialog appears for untrusted applications and/or any applications requiring
elevation.

As of CSE version 23.8.xxxx and higher, if the **Show Admin Approval dialog for untrusted
applications** is disabled,then the following determines whether to show the Admin
Approval dialog:

SCENARIO 1: If SecureRun is disabled, the **Show Admin Approval dialog for untrusted applications** option makes no difference. The Admin Approval dialog will not appear for processes based on the file's owner (image file ownership). It will still appear for processes that require elevation.

SCENARIO 2: If SecureRun is enabled:

- If an untrusted principal owns the file and elevation isn't required, then the Admin
  Approval dialog doesn't appear, and SecureRun blocks it.
- If elevation is required, then Admin Approval appears, regardless of whether a trusted principal
  owns the file.

![977_1_image-20230824223216-1_950x550](/images/policypak/leastprivilege/securerun/977_1_image-20230824223216-1_950x550.webp)
