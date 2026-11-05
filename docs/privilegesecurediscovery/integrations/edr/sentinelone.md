---
title: "Configure the SentinelOne integration"
sidebar_label: "SentinelOne"
description: "Collect a SentinelOne API token, account ID, and base URL, and create an EDR provider configuration for Netwrix Privilege Secure for Discovery."
sidebar_position: 30
---

The SentinelOne integration lets Netwrix Privilege Secure for Discovery scan Windows systems and grant just-in-time administrator access through the SentinelOne agent. The product doesn't need a direct network connection to the endpoint, and the endpoint doesn't need to be on the domain.

For a system that uses this integration, the product scans through SentinelOne first. If that scan fails, it tries a direct connection. To manage a system, the product uploads its management script (`secureone_management.ps1`) to the SentinelOne remote script library, runs it on the agent, and downloads the output. The product uploads the script at the site level when you enter a **Site ID**, and at the account level otherwise.

## Prerequisites

- A SentinelOne management console account that can create users and generate API tokens.
- The SentinelOne agent on the Windows systems that you want to manage.
- HTTPS access (TCP 443) from the Privilege Secure for Discovery server to your SentinelOne management console. If the server uses a proxy, configure it under **Configure** > **Server** > **Proxy Configuration**.

You need four values from SentinelOne: the API token, the management console URL (the API base URL), the account ID, and optionally the site ID.

## Collect values in SentinelOne

The following steps use the SentinelOne management console. Menu names can change between console releases. Check the SentinelOne documentation in your console if a label differs.

### Generate an API token

Use a dedicated service user, so that the token doesn't depend on a person's account. The user needs permission to do the following:

- View sites and endpoints.
- View, upload, delete, and run remote scripts.
- Fetch files from endpoints.

Use a service-user token whose scope covers the sites that you manage.

1. Sign in to the SentinelOne management console.
2. Select **Settings** > **Users**.
3. Create a user for the integration, and select that user.
4. Select **Options** > **Generate API token**.
5. Copy the token to a secret manager.

SentinelOne shows the token only while the dialog is open. If you close the dialog before you copy the token, generate a new token.

The scope of the user decides the scope of the token. An account-level user produces an account-scoped token, and a site-level user produces a site-scoped token. The two scopes need different settings in the product, as described in the next section.

### Find the account ID and site ID

1. In SentinelOne, select **Settings** > **Accounts**.
2. Select the account, and open **Account Info**.
3. Copy the **Account ID**.
4. For a site-scoped token, open the site in **Settings** > **Sites** and copy the site ID.

## Add the provider configuration

1. In Privilege Secure for Discovery, select **Configure** > **Server**.
2. In **EDR Provider Configuration**, select **Add Provider**.
3. Set **Provider** to **SentinelOne**.
4. Enter a **Configuration Name**. You select this name when you assign the configuration to domains and systems.
5. Under **Remote Systems Management**, set **Enable** to **Enabled**.
6. Set **Use Proxy Configuration** to **Enabled** if the server reaches SentinelOne through a proxy.
7. Enter the **API Base URL**, the URL of your management console.
8. Enter the **Account ID**.
9. For a site-scoped token, enter the **Site ID**. Leave **Site ID (optional)** empty for an account-scoped token.

   ![The SentinelOne provider form with the API Base URL, Account ID, and Site ID fields](/images/privilegesecurediscovery/integrations/edr-sentinelone-account.webp)

10. Enter the **API Token**.
11. Select **Test Connection**. The product shows `<name> EDR Integration configuration validated successfully.` when the settings and the token are consistent.
12. Select **Save**.

After you save, the product reads the expiration date of the token from SentinelOne and shows it in **Token Expiry**. The product warns you before the token expires. See [Provider tokens that expire](./overview.md#provider-tokens-that-expire). Generate a new token and enter it before the old one expires.

### Choose the domain fallback list

To find an agent, the product matches the host name together with a domain name. It tries the NetBIOS domain of the system first, then the names in **Domain Fallback List**, then the host name, then the first part of the fully qualified domain name, and then an empty domain. The default list is `WORKGROUP`. Add names, separated by commas, if your agents register under a different domain name.

![The Domain Fallback List, API Token, and Token Expiry fields of the SentinelOne provider form](/images/privilegesecurediscovery/integrations/edr-sentinelone-token.webp)

### Tune rate limiting

| Setting | Default | Purpose |
| --- | --- | --- |
| **Rate Limiting Enabled** | Enabled | Limits API requests during bulk operations. |
| **Rate Limit (requests/second)** | 10.0 | The maximum sustained request rate (0.1 to 100). |
| **Burst Capacity** | 20 | The maximum number of requests in a short burst (1 to 1000). |
| **Max Wait Time (seconds)** | 30.0 | The longest that a request waits for a rate limit slot (1 to 600). |

## Assign the configuration

A configuration has no effect until you assign it to a domain or to systems. See [Assign a configuration](./overview.md#assign-a-configuration). To delete a configuration, see [Delete a configuration](./overview.md#delete-a-configuration).

## Troubleshoot Test Connection

Test Connection fails with `Invalid <name> EDR Integration configuration`. The product writes the reason to the browser console and to its logs. Common reasons:

| Reason | Fix |
| --- | --- |
| `No sites available` | The token has no access to the account. Check the account ID and the permissions and scope of the user. |
| The account ID doesn't match | Enter the account ID that owns the sites that the token can see. |
| `a site-scoped token was provided without a valid site ID` | Enter the **Site ID**. |
| `a site ID was provided but the token is not a site-scoped token` | Clear the **Site ID**, or generate a token for a site-level user. |
| `the site-scoped token does not have access to the site` | Enter a site that the token's user can access. |
| `Could not find a SentinelOne agent for this domain and name.` (during a scan) | Add the domain that the agent reports to **Domain Fallback List**. |
