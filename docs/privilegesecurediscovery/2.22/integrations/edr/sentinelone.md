---
title: "SentinelOne"
description: "SentinelOne"
sidebar_position: 30
---

# SentinelOne

SentinelOne

# SentinelOne

## Overview

The SentinelONE Manage Remote Systems integration is available from **SecureONE version 2.17**. This
allows machines to be protected and access elevated with out direct line of site. Privilege Secure
integrates to the SentinelONE end point and is able to perform these tasks without the need for the
end machine being on the domain.

Login to Privilege Secure
([https://usea1-partners.sentinelone.net/](https://usea1-partners.sentinelone.net/)).

## API Configuration

There are three items that are required for Privilege Secure to be able to connect to SentinelONE
for Remote Computer Management, API Token, Account ID, and the API Base URL.

### API Token

A new user can be created or an existing user can be utilized. To create a new user click settings
in the left hand menu:

![Screen_Shot_2022-10-10_at_10.09.L39_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.09.39_am_135x382.webp)

Click the users option at the top:

![Screen_Shot_2022-10-10_at_10.09.L54_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.09.54_am_538x83.webp)

Then, under Actions, New User

![Screen_Shot_2022-10-10_at_10.10.L09_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.10.09_am_198x92.webp)

Once the details of the user for the API configuration is created an API token can be generated.
This is done by clicking on the user required and selecting Generate API token under the options
menu:

![Screen_Shot_2022-10-10_at_10.15.L37_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.15.37_am_420x358.webp)

The API key will only be displayed while it is visible on the screen. It cannot be recovered,
instead it would need to be revoked and recreated:

![Screen_Shot_2022-10-10_at_10.16.L00_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.16.00_am_392x224.webp)

### Account ID

Next the Account ID would be required this is easily accessible by selecting the Accounts option at
the  top from the Settings menu.

![Screen_Shot_2022-10-10_at_10.18.L06_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.18.06_am.webp)

Then clicking the account and the selecting the Account Info option from the top menu

![Screen_Shot_2022-10-10_at_10.20.L12_AM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.20.12_am_214x92.webp)

This will give the Account ID information

## Privilege Secure Configuration

The EDR configuration is available under the Configure, Server menu within Privilege Secure.

![Screen_Shot_2022-10-10_at_2.35.L11_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_2.35.11_pm_197x188.webp)

Multiple configurations can be created which can be applied to different machines as appropriate.
The configuration is completed as below using the API Token and User ID captured from SentinelOne.

![Screen_Shot_2022-10-10_at_2.35.L30_PM.webp](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_2.35.30_pm.webp)

If the Privilege Secure instance is on a version behind 2.17 you will not see the Remote Systems
Management UI on the Servers page, nor will you see SentinelOne on an endpoint in the EDR dropdown
menu. Please inquire to Support to upgrade the environment.
