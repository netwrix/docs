---
title: "Configure the SentinelOne integration"
sidebar_label: "SentinelOne"
description: "Collect a SentinelOne API token, account ID, and base URL, and create an EDR provider configuration for Netwrix Privilege Secure for Discovery."
sidebar_position: 30
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 4406186645143_screen_shot_2022-10-10_at_10.15.37_am_420x358.webp: shows the user profile of a named employee. Redact or replace.

TODO: 4406186645143_screen_shot_2022-10-10_at_10.16.00_am_392x224.webp: shows a generated API token. Replace with a screenshot that masks the token.

TODO: 4406186645143_screen_shot_2022-10-10_at_10.18.06_am.webp: shows an account ID and a partner-portal URL. Redact or replace.

TODO: 4406186645143_screen_shot_2022-10-10_at_2.35.30_pm.webp: shows a company account in the accounts list. Redact or replace.
:::

The SentinelOne Remote Systems Management integration lets Netwrix Privilege Secure for Discovery protect machines and grant administrator access without a direct network connection to the endpoint. The product connects to SentinelOne and performs these tasks through the SentinelOne agent, so the machine doesn't need to be on the domain.

## Prerequisites

Privilege Secure for Discovery needs three values from SentinelOne: an API token, the account ID, and the API base URL. You also need:

- A SentinelOne console account that can create users and generate API tokens.
- The SentinelOne agent installed on the Windows endpoints that you want to manage.
- Network access from the Privilege Secure for Discovery server to your SentinelOne management console.

## Generate an API token

You can create a new service user or use an existing user.

1. Sign in to the SentinelOne management console.
2. In the left menu, select **Settings**.

   ![The Settings option in the SentinelOne left menu](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.09.39_am_135x382.webp)

3. At the top of the page, select **Users**.

   ![The Users tab in SentinelOne settings](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.09.54_am_538x83.webp)

4. Select **Actions > New User**, and complete the user details.

   ![The Actions menu with the New User option](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.10.09_am_198x92.webp)

5. Select the user, and then select **Options > Generate API token**.

   ![The Options menu of a SentinelOne user with Generate API token](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.15.37_am_420x358.webp)

6. Copy the token to a secret manager.

   ![The API token dialog with the token masked](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.16.00_am_392x224.webp)

SentinelOne displays the token only while the dialog is open. If you close the dialog before you copy the token, revoke the token and generate a new one.

## Find the account ID

1. In SentinelOne, go to **Settings > Accounts**.

   ![The Accounts list in SentinelOne settings](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.18.06_am.webp)

2. Select the account, and then select **Account Info**.

   ![The Account Info tab of a SentinelOne account](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_10.20.12_am_214x92.webp)

3. Record the **Account ID**.

## Configure Privilege Secure for Discovery

You can create more than one configuration and apply each one to different machines.

1. In Privilege Secure for Discovery, open **Configure > Server > EDR Provider Configuration**.

   ![The Server configuration menu with the EDR provider configuration](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_2.35.11_pm_197x188.webp)

2. Select **Add Provider**, and select **SentinelOne**.
3. Enter a configuration name.
4. Enable the remote systems management option.
5. Enter the API base URL, the API token, and the account ID.

   ![The SentinelOne configuration panel with API credentials](/images/privilegesecure/4.2/discovery/integrations/edr/4406186645143_screen_shot_2022-10-10_at_2.35.30_pm.webp)

6. Select **Test Connection**.
7. Save the configuration.

Assign the configuration to machines individually, through **Bulk Actions**, or as the default EDR configuration of a domain. You can't delete an EDR provider configuration while it is assigned to a domain or a system.
