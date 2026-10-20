---
title: "Configure the Carbon Black Cloud integration"
sidebar_label: "Carbon Black"
description: "Create Carbon Black Cloud API keys and an EDR provider configuration so Privilege Secure for Discovery can manage Windows systems remotely."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the minimum Carbon Black Cloud permissions for the custom access level. The permissions in the following procedure come from an existing screenshot (carbonblack access level, February 2022); a draft note in the old page asked whether the policy is needed. Evidence: none.

TODO: Confirm which Carbon Black Cloud API key (Live Response or Devices) requires which access level, and whether the Policies permission is required. Evidence: docker/node/packages/lib-api-common/schemas/edrIntegrationsConfig/carbonBlackCloudConfig.js lists org_key and credentials.live_response_api only in the excerpt checked.

TODO: Confirm the current labels of the Carbon Black Cloud fields in the EDR Provider Configuration form. The Carbon Black screenshots show an earlier panel layout. Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: 360061787514_screen_shot_2021-03-02_at_7.22.31_pm.webp: shows the Carbon Black org key and API IDs. Redact or replace.

TODO: 360061787514_image_105x410.webp, 360061787514_screen_shot_2021-03-02_at_7.04.16_pm.webp, and 360061787514_screen_shot_2021-03-02_at_7.06.55_pm.webp: the Carbon Black Cloud console screens show organization identifiers. Redact or replace.

TODO: 360061787514_screen_shot_2021-03-02_at_7.20.53_pm_486x402.webp and 7.22.31: re-capture with the current EDR Provider Configuration form.
:::

The Carbon Black Cloud integration lets Netwrix Privilege Secure for Discovery protect machines and grant administrator access without a direct network connection to the endpoint. The product connects to Carbon Black Cloud and performs these tasks through the Carbon Black agent, so the machine doesn't need to be on the domain.

## Prerequisites

- A Carbon Black Cloud console account that can create access levels and API keys.
- Carbon Black agents installed on the Windows endpoints that you want to manage.
- Network access from the Privilege Secure for Discovery server to your Carbon Black Cloud API base URL.

## Find the organization key

1. Sign in to Carbon Black Cloud.
2. Go to **Settings > API Access**.
3. Record the **ORG KEY** at the top left of the page.

   ![The Carbon Black Cloud API Access page with the org key at the top left](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_image_105x410.webp)

   ![The org key displayed in the Carbon Black Cloud console](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.36.07_pm_267x140.webp)

## Create a custom access level

Privilege Secure for Discovery uses two API keys. One key uses the **Live Response** access level. The other key uses a custom access level that you create in this procedure.

1. In Carbon Black Cloud, open **API Access**, and select **Access Levels**.

   ![The Access Levels tab in Carbon Black Cloud](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.12_pm_375x183.webp)

2. Select **Add Access Level**.

   ![The Add Access Level button](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.06.55_pm.webp)

3. Enter a name and a description for the access level.

   ![The Add Access Level form with name and description fields](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.04.16_pm.webp)

4. Select the following permissions.

   | Category | Permission | Notation name | Select |
   | --- | --- | --- | --- |
   | Device | General information | `device` | Read |
   | Device | Policy assignment | `device.policy` | Update |
   | Live Query | Manage queries | `livequery.manage` | Create, Read, Update, Delete |
   | Live Response | Live Response Session | `org.liveresponse.session` | Create, Read, Delete |
   | Live Response | Live Response File | `org.liveresponse.file` | Create, Read, Delete |
   | Live Response | Disable Live Response | `org.liveresponse` | Delete |
   | Live Response | Live Response Process | `org.liveresponse.process` | Read, Delete, Execute |
   | Policies | Policies | `org.policies` | Create, Read, Update, Delete |

   ![The Carbon Black Cloud permission list with the required permissions selected](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2022-02-11_at_11.04.26_am.webp)

5. Select **Save**.

## Create the API keys

1. In **API Access**, select **Add API Key**.

   ![The Add API Key button in Carbon Black Cloud](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.42.09_pm.webp)

2. Enter a name and description for the Live Response key, and set **Access Level type** to **Live Response**.

   ![The Add API Key form for the Live Response key](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.48.23_pm_417x412.webp)

3. Select **Save**, and record the **API ID** and **API Secret Key**.

   ![The API ID and API Secret Key shown after saving a key](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_6.51.34_pm_323x185.webp)

4. Create a second API key, and set **Access Level type** to **Custom** with the access level that you created.

   ![The Add API Key form for the Devices key with the custom access level](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.15.12_pm_428x421.webp)

5. Select **Save**, and record the **API ID** and **API Secret Key**.

Carbon Black Cloud displays the secret key only once. Store both secrets in a secret manager.

## Configure Privilege Secure for Discovery

1. In Privilege Secure for Discovery, open **Configure > Server > EDR Provider Configuration**.

   ![The Server configuration page with the EDR provider configuration](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.20.53_pm_486x402.webp)

2. Select **Add Provider**, and select **Carbon Black Cloud**.
3. Enter a configuration name. You select this name when you assign the configuration to domains and machines.
4. Enable the remote systems management option.
5. Enter the **API Base URL** of your Carbon Black Cloud console, and the **Org Key**.
6. Under **Live Response APIs Credentials**, enter the API ID and API Secret Key of the Live Response key.
7. Under **Devices API Credentials**, enter the API ID and API Secret Key of the custom-access-level key.
8. If the server reaches the internet through a proxy, enable **Use Proxy Configuration**.

   ![The Carbon Black Cloud configuration fields with credentials entered](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.22.31_pm.webp)

9. Select **Test Connection**. A successful response confirms that the product can reach the Carbon Black Cloud API.

   ![A successful Carbon Black Cloud connection test result](/images/privilegesecure/4.2/discovery/integrations/edr/360061787514_screen_shot_2021-03-02_at_7.24.15_pm.webp)

10. Save the configuration.

After you save the configuration, assign it to machines individually, through **Bulk Actions**, or as the default EDR configuration of a domain. You can't delete an EDR provider configuration while it is assigned to a domain or a system.
