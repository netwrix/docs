---
title: "Configure the Carbon Black Cloud integration"
sidebar_label: "Carbon Black"
description: "Create Carbon Black Cloud API keys and an EDR provider configuration so Netwrix Privilege Secure for Discovery can manage Windows systems remotely."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the minimum Carbon Black Cloud permissions for the custom access level. The table in this page comes from the old documentation. The product code calls device search, device policy actions, policy create, update, and delete, and Live Response session, file, and command endpoints. It doesn't call any Live Query endpoint, so `livequery.manage` may not be needed. Evidence: docker/shared/python/src/remediant/integrations/carbon_black/api.py (lines 123-360); no match for "livequery" in the 26.09.1 tree.

TODO: Does the scanner or worker use the Live Response API key at run time? The Python integration signs every request with the custom key, but the form requires both keys. Evidence: api.py:46-47 and :185-189 (custom credentials only); edrConfiguration.js `validateCarbonBlackIntegrationConfig` (both required).
:::

The Carbon Black Cloud integration lets Netwrix Privilege Secure for Discovery scan Windows systems and grant just-in-time administrator access through the Carbon Black sensor. The product doesn't need a direct network connection to the endpoint, and the endpoint doesn't need to be on the domain.

For a system that uses this integration, the product scans through Carbon Black first. If that scan fails, it tries a direct connection. To manage a system, the product starts a Live Response session on the device, copies its management script to the device, runs the script, and removes the files afterward. If the device's policy has Live Response turned off, the product temporarily applies a copy of the policy with Live Response turned on, and restores the original policy when the session ends.

## Prerequisites

- A Carbon Black Cloud console account that can create access levels and API keys.
- Carbon Black sensors on the Windows systems that you want to manage, with Live Response available.
- HTTPS access (TCP 443) from the Privilege Secure for Discovery server to your Carbon Black Cloud API base URL. If the server uses a proxy, configure it under **Configure** > **Server** > **Proxy Configuration**.

## Collect values in Carbon Black Cloud

The following steps use the Carbon Black Cloud console. Menu names can change between console releases. For the current procedure, see the Carbon Black [API authentication documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/authentication/).

### Find the organization key

1. Sign in to the Carbon Black Cloud console.
2. Select **Settings** > **API Access**.
3. Copy the **ORG KEY** at the top of the page.

### Create a custom access level

The product uses two API keys. One key has the **Live Response** access level type. The other key has a custom access level that you create in this section.

1. On the **API Access** page, select the **Access Levels** tab.
2. Select **Add Access Level**.
3. Enter a name and a description.
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

5. Select **Save**.

### Create the API keys

1. On the **API Access** page, select **Add API Key**.
2. Enter a name and a description for the first key, and set **Access Level type** to **Live Response**.
3. Select **Save**, and copy the **API ID** and **API Secret Key**.
4. Select **Add API Key** again, enter a name and a description for the second key, and set **Access Level type** to **Custom**.
5. Select the access level that you created.
6. Select **Save**, and copy the **API ID** and **API Secret Key**.

Carbon Black Cloud shows each secret key only when you create the key. Store both secrets in a secret manager.

## Add the provider configuration

1. In Privilege Secure for Discovery, select **Configure** > **Server**.
2. In **EDR Provider Configuration**, select **Add Provider**.
3. Set **Provider** to **Carbon Black Cloud**.
4. Enter a **Configuration Name**. You select this name when you assign the configuration to domains and systems.
5. Under **Remote Systems Management**, set **Endpoint Standard (NGAV) Live Response** to **Enabled**.
6. Set **Use Proxy Configuration** to **Enabled** if the server reaches Carbon Black Cloud through a proxy.
7. Enter the **API Base URL** of your Carbon Black Cloud console, for example `https://defense.conferdeploy.net`.
8. Enter the **Org Key**.
9. Under **Live Response APIs Credentials**, enter the **API ID** and **API Secret Key** of the Live Response key.
10. Under **Custom API Credentials**, enter the **API ID** and **API Secret Key** of the custom key.

    ![The Carbon Black Cloud provider form with the API Base URL, Org Key, Live Response APIs Credentials, and Custom API Credentials fields](/images/privilegesecurediscovery/integrations/edr-carbonblack-credentials.webp)

11. Select **Test Connection**. The product shows `<name> EDR Integration configuration validated successfully.` when the connection works.
12. Select **Save**.

The form accepts the configuration only when the name, base URL, org key, and both credential pairs have values. The status of the **Intelligent Session Capture** section doesn't affect remote systems management.

### Tune rate limiting

The form includes rate limiting for the calls that the product makes to Carbon Black Cloud. The defaults suit most organizations.

| Setting | Default | Purpose |
| --- | --- | --- |
| **Rate Limiting Enabled** | Enabled | Limits API requests during bulk operations. |
| **Rate Limit (requests/second)** | 5.0 | The maximum sustained request rate. |
| **Burst Capacity** | 10 | The maximum number of requests in a short burst. |
| **Max Wait Time (seconds)** | 30.0 | The longest that a request waits for a rate limit slot. |

## Assign the configuration

A configuration has no effect until you assign it to a domain or to systems. See [Assign a configuration](./overview.md#assign-a-configuration). To delete a configuration, see [Delete a configuration](./overview.md#delete-a-configuration).

## Troubleshoot Test Connection

Test Connection fails with `Invalid <name> EDR Integration configuration` followed by the reason that the product detected. Use the following checks.

| Symptom | Check |
| --- | --- |
| The reason names the Custom API Credentials | Confirm the API ID and secret, the org key, and that the access level includes the permissions in this page. |
| The reason names the Live Response API Credentials | Confirm that the key has the **Live Response** access level type. |
| The test fails although both keys are correct | Confirm that at least one sensor in the organization is active and has Live Response enabled. The test creates a Live Response session on such a device. |
| The test can't connect | Confirm the **API Base URL** and the network path, and enable **Use Proxy Configuration** if the server needs a proxy. |
