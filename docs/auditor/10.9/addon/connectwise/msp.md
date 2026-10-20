---
title: "MSP Usage Example"
description: "MSP Usage Example"
sidebar_position: 30
---

# MSP Usage Example

Consider a situation when a password is reset for a user, computer, or **inetOrgPerson** account.

After deploying and configuring the add-on as described in this guide, the MSP (Managed Service
Providers) staff member enabled Auditor integration feature:

![Integration API Settings](/images/auditor/10.7/addon/connectwise/integrations_thumb_0_0.webp)

Also, she enabled the ‘**Password Reset**’ alert from the Auditor predefined set of alerts and
specified the add-on launch as response action.

![addon](/images/auditor/10.7/addon/connectwise/addon.webp)

The add-on then automatically creates a new ticket shortly after any account password reset.

The add-on automatically enters all necessary details about the case into the ConnectWise ticket
(_Initial Description_ field), including the name of the workstation, the name of the account in
question, and the time the event occurred:

![serviceboard](/images/auditor/10.7/addon/connectwise/serviceboard.webp)
