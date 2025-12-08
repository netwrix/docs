---
description: >-
  This document provides an outline and step-by-step guide for Netwrix Privilege
  Secure integration with Microsoft Remote Assistance, including group policy
  configuration and activity setup.
keywords:
  - Netwrix Privilege Secure
  - Remote Assistance
  - RDS
  - Group Policy
  - RemoteApp
  - Interactive App Launch
  - DirectConnect
  - Activity Setup
products:
  - privilege-secure-access-management
sidebar_label: How to Configure Windows Remote Assistance Integra
tags: []
title: "How to Configure Windows Remote Assistance Integration"
knowledge_article_id: kA04u0000000HSKCA2
---

# How to Configure Windows Remote Assistance Integration

## Summary

This document provides an outline and guide for Netwrix Privilege Secure integration with Microsoft Remote Assistance.

## Enrollment

- Netwrix Privilege Secure Server
- RDS Server with RemoteApp – single machine CAL license

## Pre-requisites

- Group Policy to configure **Offer Remote Assistance**
- Domain group to be mapped to Configure Offer Remote Assistance policy
- Domain group that will be member of RDS server local Administrator group
- Remote Assistance Feature added to RDS server

## Instructions

### Group Policy

Enable **Configure Offer Remote Assistance** policy.

```text
Policies > Administrative Templates > System > Remote Assistance > Configure Offer Remote Assistance
```

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWI7.png)

Enable the policy and assign a domain group to control access.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIC.png)

### Activity Setup

Create an Interactive App Launch Activity making note of the highlighted areas below.

**NOTE:** The Domain groups for Group Policy and RDS server local admin will have been created in the previous steps.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIH.png)

### Use Case

Via Netwrix Privilege Secure UI or DirectConnect, the helpdesk admin selects the Remote Assistance Activity and chooses the resource to which remote assistance is to be provided.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIM.png)

When the Activity has been provisioned, the session is launched, and the target users’ desktop displays a message asking permission for the helpdesk admin to connect.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIR.png)

The helpdesk admin can now view the target users’ desktop and can establish a chat session.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIW.png)

If the helpdesk admin needs to take control of the remote system, they select **Request Control** and the end user is prompted for permission.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIb.png)

Once shared, control can be terminated at any time by the helpdesk admin or the end user.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIg.png)

The live session may be viewed via the Netwrix Privilege Secure administrator dashboard or reviewed later as a recording at any time.

![User-added image](./../0-images/ka04u000000HcZw_0EM4u000004bWIl.png)
