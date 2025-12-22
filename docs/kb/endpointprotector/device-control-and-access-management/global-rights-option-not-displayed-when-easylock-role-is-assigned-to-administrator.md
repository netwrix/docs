---
description: >-
  When an Easylock administrator role is assigned to an administrator group, the
  Global rights option does not appear in the Device Control submenu. This
  article explains the cause, confirms that this is expected behavior, and
  provides steps to reproduce and options to request a change.
keywords:
  - endpoint protector
  - easylock
  - global rights
  - device control
  - department
  - system administrators
  - enforced encryption
  - USB
  - access model
products:
  - endpoint-protector
sidebar_label: Global Rights Option Not Displayed When Easylock R
tags:
  - device-control-and-access-management
title: "Global Rights Option Not Displayed When Easylock Role Is Assigned to Administrator"
knowledge_article_id: kA0Qk0000002j7VKAQ
---

# Global Rights Option Not Displayed When Easylock Role Is Assigned to Administrator

## Symptom

When an Easylock administrator role is assigned to an administrator group, the **Global rights** option does not appear in the **Device Control** submenu.

## Cause

This behavior is not a bug. It is the result of a feature request implemented in 2020 called **Add department for EL**. When an Easylock role is assigned to an administrator, the **Global rights** option is intentionally not displayed in the **Device Control** submenu.

For additional context, administrators assigned to one department can access and perform actions on USB devices that belong to another department within the Easylock module. This behavior is inconsistent with other modules, such as **Report Logs** or **OTP**, where department-based access restrictions are enforced.

## Resolution

This is expected behavior by design. No action is required unless you want to change the current access model. If you need department-based access restrictions to be enforced in the Easylock module, contact Netwrix Support to submit a feature request.

### Steps to Reproduce

1. Log in to the Endpoint Protector console as the root administrator and use a client from your current department.
2. Connect a USB device and manually deploy Easylock on it.
3. Navigate to **System Configuration** > **System Departments** and create a new department.
4. Go to **System Configuration** > **System Administrators** and create a new admin under the newly created department with no AD authentication, but with rights extended from the Easylock administration group.
5. Log in to the Endpoint Protector console with the new admin.
6. Navigate to **Enforced Encryption** > **Easylock**.
7. Download a manually deployed Easylock from a device in your chosen department.
8. Send a message to a connected device from your chosen department.

### Expected Result

Access to devices and actions from other departments should be restricted unless explicitly extended, following the same behavior as in other modules (for example, **Report Logs** or **OTP**).
