---
description: >-
  Shows how to use the Twilio CLI to send SMS messages for Netwrix Password
  Reset SMS verification, including creating a profile, sending test messages,
  and configuring the command and parameters.
keywords:
  - Twilio
  - Twilio CLI
  - SMS
  - Netwrix Password Reset
  - SMS verification
  - profiles
  - messages
  - CMD
  - troubleshooting
  - TwilioMSGSMS
products:
  - password-reset
sidebar_label: 'How to use Twilio CLI with Netwrix Password Reset '
tags: []
title: "How to use Twilio CLI with Netwrix Password Reset SMS Verification"
knowledge_article_id: kA04u00000110ukCAA
---

# How to use Twilio CLI with Netwrix Password Reset SMS Verification

## Overview

The Twilio CLI allows to manage phone numbers, call Twilio APIs, and test webhooks.

## Instructions

1. Download Twilio from the official website (recommended to use Windows): Install the Twilio CLI ⸱ Twilio 🐍  
   https://www.twilio.comhttps://www.twilio.comhttps://docs.netwrix.com

2. Being logged in with the Netwrix Password Reset (NPR) Service Account, open CMD and log into Twilio accaunt.

3. In the **Account info** section, fill in the following fields:

   1. **Account SID**
   2. **Auth Token**

   ![Group 115 (1).png](./images/ka04u00000116uq_0EM4u000008LdZI.png)

8. In Netwrix Password Reset SMS Verification Settings, setup **Command** and **Parameter**

   > **IMPORTANT:** every time a setting is changed for **Parameter** in the Netwrix Password Reset Settings for Verification, the Service Account needs to be restarted. Failure to do so may result in the changes not taking effect or the SMS not being sent on Unlock/Resets.

   1. **Command**: `C:\Windows\System32\cmd.exe`
   2. **Parameter**: `/C ""C:\Program Files\Netwrix Password Reset\TwilioMSGSMS.cmd" [PHONE] [CODE]"`"

   > **TIP:** the default AD Attribute is set to MOBILE PHONE. You can change it by clicking on the AD Attribute link in the SMS settings.
