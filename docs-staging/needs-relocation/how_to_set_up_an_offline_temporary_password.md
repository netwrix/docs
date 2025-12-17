---
description: >-
  This article provides step-by-step instructions for setting up an Offline Temporary Password in environments where the User Remediation feature cannot be used.
keywords:
  - Offline Temporary Password
  - Endpoint Protector
  - temporary access
sidebar_label: Set Up Offline Temporary Password
tags: []
title: "How to Set Up an Offline Temporary Password"
knowledge_article_id: kA0Qk0000002BAvKAM
products:
  - endpointprotector
---

# How to Set Up an Offline Temporary Password

## Overview

In environments where the **User Remediation** feature cannot be used, the **Offline Temporary Passwords** feature provides an alternative way to bypass a policy.

Within the Endpoint Protector (EPP) Management Console, administrators can generate Offline Temporary Passwords (OTPs) to grant users temporary access rights. This feature is useful when only temporary access is required or when there is no network connection between protected computers and the Endpoint Protector Server (for example, when User Remediation is unavailable).

## Instructions

1. Log in to the EPP Management Console with an account that has permission to generate Offline Temporary Passwords.
2. Navigate to the **Device Control** module.
3. Choose one of the following options, depending on the entity for which you want to generate an OTP:
   - For a specific device:
     1. Navigate to the **Computers** section.
     2. Locate the computer and select **Actions > Offline Temporary Password**.
     3. Enter the **Device Code** provided by the user or search for the device in the Endpoint Protector database. You can also enter the **Device Name**; the other field will auto-populate.
   - For all devices or all file transfers for a computer and user:
     1. Go to the **Offline Temporary Passwords** section.
     2. Enter the **Computer Name** and/or **Username**. You can provide either field, but to restrict the OTP to a specific computer and user, fill in both fields.
     3. Select whether the OTP applies to all devices or all file transfers.
4. Select the desired **Time Interval** for the OTP. Choose from predefined durations (15 minutes, 30 minutes, 1 hour, 2 hours, 4 hours, 8 hours, 1 day, 2 days, 5 days, 14 days, 30 days) or set a custom start and end date/time.
5. Optional: Enter a justification for creating the OTP. This information is useful for auditing purposes.
6. Click **Generate** to create the Offline Temporary Password.
7. Provide the generated OTP to the user. You can send it by email or print it directly from the console.
8. Optional: To enable or restrict the **Universal Offline Temporary Password** feature:
   - Navigate to **System Configuration > System Settings > Custom Settings**.
   - Enable the Universal Offline Temporary Password option as needed. You can restrict visibility to Super Administrators only.
9. Optional: To edit the administrator contact information displayed to users:
   - Go to **System Configuration > System Settings** and update the **Main Administrator Contact Details**.

> **NOTE:** The OTP is unique to the specified device and computer and cannot be reused for other devices or computers. The OTP must be redeemed on the same day it is generated, unless you use the Universal Offline Temporary Password feature. For multinational environments, adjust the time interval for the OTP based on the time zone difference between the EPP Server and the endpoint.

For more information, review the documentation: [Offline Temporary Password](https://docs.netwrix.com/docs/endpointprotector/5_9_4_2/admin/otpassword).