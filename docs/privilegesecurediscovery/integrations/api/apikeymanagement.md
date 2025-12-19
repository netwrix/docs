---
title: "API Key Management"
description: "API Key Management"
sidebar_position: 10
---

# API Key Management

API Key Management

# API Key Management

The purpose of this document is to outline the creation and use of an API Key.

## Creating an API Key

API Keys are managed through the UI within Privilege Secure. This screen is accessible as an Admin
from Configure -> API Keys.

![Screen_Shot_2022-02-03_at_2.03.L58_PM.webp](/images/privilegesecure/4.2/discovery/integrations/api/4421422443287_screen_shot_2022-02-03_at_2.03.58_pm.webp)

The "Create API Key" button will open the New API Key screen:

![Screen_Shot_2022-02-03_at_2.05.L52_PM.webp](/images/privilegesecure/4.2/discovery/integrations/api/4421422443287_screen_shot_2022-02-03_at_2.05.52_pm.webp)

The permissions can be restricted to "just registration" or all APIs. The linked users will be the
Privilege Secure user(s) that can utilize the key. Upon saving the "New API Key Secret" screen will
be displayed.

- The API Key Secret is needed for the initial installation and configuration of QuickStart.
- Once the UI closes the secret cannot be retrieved. Ensure the API Key Secret is handled like any
  other sensitive password/user combination or secret.
- If you hover over the linked user, it will show the AD name for the UserId, however the API Key
  Secret is the credential used for API configuration.

## Revoking API Keys

Revoking an API Key is easily handled through the UI. The column "last accessed date" can be useful
in identifying unused keys.
