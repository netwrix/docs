---
title: "Configure the CrowdStrike Falcon integration"
sidebar_label: "CrowdStrike"
description: "Create a CrowdStrike Falcon API client and an EDR provider configuration so Netwrix Privilege Secure for Discovery can manage Windows systems remotely."
sidebar_position: 20
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 4404584855447_screen_shot_2021-07-19_at_3.08.26_pm.webp: shows a CrowdStrike client ID in the integration panel. Redact or replace.

TODO: Review the remaining CrowdStrike screenshots for tenant-specific values.
:::

The CrowdStrike Falcon Remote Systems Management integration lets Netwrix Privilege Secure for Discovery protect machines and grant administrator access without a direct network connection to the endpoint. The product connects to CrowdStrike Falcon and performs these tasks through the Falcon agent, so the machine doesn't need to be on the domain.

> **Note:** Remote Systems Management and Intelligent Session Capture are independent features. Intelligent Session Capture works regardless of whether Remote Systems Management is enabled. Enabling Remote Systems Management adds the **EDR Integration** list to endpoint configuration.

## Prerequisites

- A CrowdStrike Falcon account that can create API clients.
- The Falcon agent installed on the Windows endpoints that you want to manage.
- Network access from the Privilege Secure for Discovery server to your Falcon API base URL.

## Create a CrowdStrike API client

1. Sign in to the CrowdStrike Falcon console.
2. On the **Support** menu, select **API Clients and Keys**.

   ![The Support menu in the Falcon console with API Clients and Keys](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_2.39.57_pm_135x268.webp)

3. Select **Add new API client**.

   ![The Add API client button](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_2.42.41_pm.webp)

4. Enter a client name and a description.
5. Select the following scopes.

   | Scope | Permission |
   | --- | --- |
   | Hosts | Read |
   | Real time response (admin) | Write |
   | Real time response | Read |

6. Select **Add**.
7. Record the **Client ID**, **Secret**, and **Base URL**.

Falcon displays the secret only once. Store it in a secret manager.

## Configure Privilege Secure for Discovery

You can create more than one EDR provider configuration and assign each one to different machines.

1. In Privilege Secure for Discovery, open **Configure > Server > EDR Provider Configuration**.

   ![The Server configuration page with the EDR provider configuration](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.17.39_pm.webp)

2. Select **Add Provider**, and select **CrowdStrike Falcon**.

   ![The Add Provider list with CrowdStrike Falcon](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.15.31_pm.webp)

3. Enter a configuration name. You select this name when you assign the configuration to machines.

   ![The Configuration Name field of a new EDR configuration](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.15.45_pm.webp)

4. Under **Remote Systems Management**, set **Enable** to **Enabled**.
5. Enter the **API Base URL** and the **Client ID** and **Client Secret** from the API client.
6. If the server reaches the internet through a proxy, enable **Use Proxy Configuration**.

   ![The CrowdStrike Falcon configuration panel with API credentials](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_3.08.26_pm.webp)

7. Select **Test Connection**.

   ![A successful CrowdStrike connection test result](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2021-07-19_at_3.09.13_pm.webp)

8. Save the configuration.

## Assign the configuration to machines

Assign the EDR provider configuration to a machine in the interface, through **Bulk Actions**, or by using the Quickstart tools. The **EDR Integration** list is tied to Remote Systems Management.

![The EDR Integration list on a machine configuration](/images/privilegesecure/4.2/discovery/integrations/edr/4404584855447_screen_shot_2022-10-03_at_1.25.07_pm.webp)

You can't delete an EDR provider configuration while it is assigned to a domain or a system.
