---
description: >-
  Configure Netwrix Privilege Secure integration with Microsoft Remote
  Assistance, including Group Policy configuration and activity setup.
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
  - privilegesecure
sidebar_label: Configuring Windows Remote Assistance Integration
tags:
  - kb
  - remote-desktop-and-rds
title: "Configuring Windows Remote Assistance Integration"
knowledge_article_id: kA04u0000000HSKCA2
---

# Configuring Windows Remote Assistance Integration

## Overview

This article describes how to configure Netwrix Privilege Secure for Access Management integration with Microsoft Remote Assistance.

## Instructions

### Prerequisites

Enrollment:

- Privilege Secure Server
- RDS Server with RemoteApp – single machine CAL license

Pre-requisites:

- Group Policy to configure **Offer Remote Assistance**
- Domain group to be mapped to Configure Offer Remote Assistance policy
- Domain group that is a member of the RDS server local Administrator group
- Remote Assistance Feature added to RDS server

### Group Policy

Enable **Configure Offer Remote Assistance** policy.

```text
Policies > Administrative Templates > System > Remote Assistance > Configure Offer Remote Assistance
```

![Group Policy editor showing the Configure Offer Remote Assistance policy under Administrative Templates, System, Remote Assistance](./../0-images/ka04u000000HcZw_0EM4u000004bWI7.png)

Enable the policy and assign a domain group to control access.

![Configure Offer Remote Assistance policy enabled with a domain group assigned to control access](./../0-images/ka04u000000HcZw_0EM4u000004bWIC.png)

### Activity Setup

Create an Interactive App Launch Activity making note of the following highlighted areas.

> **NOTE:** The Domain groups for Group Policy and RDS server local admin have been created in the previous steps.

![Interactive App Launch activity settings with the highlighted areas for the Remote Assistance activity](./../0-images/ka04u000000HcZw_0EM4u000004bWIH.png)

## Use Case

Via the Privilege Secure UI or DirectConnect, the helpdesk admin selects the Remote Assistance Activity and chooses the resource to which remote assistance is to be provided.

![Privilege Secure interface where the helpdesk admin selects the Remote Assistance activity and the target resource](./../0-images/ka04u000000HcZw_0EM4u000004bWIM.png)

When the Activity has been provisioned, the session is launched, and the target users’ desktop displays a message asking permission for the helpdesk admin to connect.

![Message on the target users desktop asking permission for the helpdesk admin to connect](./../0-images/ka04u000000HcZw_0EM4u000004bWIR.png)

The helpdesk admin can now view the target users’ desktop and can establish a chat session.

![Helpdesk admin view of the target users desktop with a chat session](./../0-images/ka04u000000HcZw_0EM4u000004bWIW.png)

If the helpdesk admin needs to take control of the remote system, they select **Request Control** and the end user is prompted for permission.

![Request Control option and the permission prompt shown to the end user](./../0-images/ka04u000000HcZw_0EM4u000004bWIb.png)

After control is shared, the helpdesk admin or the end user can terminate it at any time.

![Remote Assistance session in which shared control can be terminated](./../0-images/ka04u000000HcZw_0EM4u000004bWIg.png)

You can view the live session in the Privilege Secure administrator dashboard or review it later as a recording at any time.

![Privilege Secure administrator dashboard showing the live Remote Assistance session and its recording](./../0-images/ka04u000000HcZw_0EM4u000004bWIl.png)
