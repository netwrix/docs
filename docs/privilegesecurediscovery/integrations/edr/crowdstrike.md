---
title: "Configure the CrowdStrike Falcon integration"
sidebar_label: "CrowdStrike"
description: "Create a CrowdStrike Falcon API client and an EDR provider configuration so Netwrix Privilege Secure for Discovery can manage Windows systems remotely."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the API client scopes. The table in this page comes from the old documentation. The product calls host search and detail, Real Time Response (RTR) session start and delete, RTR script create, update, and delete, put-file upload, and RTR admin commands. Confirm whether session start needs **Real time response** Write instead of Read, and whether **Real time response (admin)** needs Read as well as Write. Evidence: docker/shared/python/src/remediant/integrations/crowdstrike/api/api_calls.py:130-520.
:::

The CrowdStrike Falcon integration lets Netwrix Privilege Secure for Discovery scan Windows systems and grant just-in-time administrator access through the Falcon sensor. The product doesn't need a direct network connection to the endpoint, and the endpoint doesn't need to be on the domain.

For a system that uses this integration, the product scans through Falcon first. If that scan fails, it tries a direct connection. To manage a system, the product uploads its management script (`secureone_management.ps1`) to your Falcon Real Time Response (RTR) scripts, starts an RTR session on the device, runs the script, and closes the session.

The **Intelligent Session Capture** section of the form and the **Remote Systems Management** section are independent. You can enable either one without the other. Only **Remote Systems Management** makes the **EDR Integration** list appear on a system.

## Prerequisites

- A CrowdStrike Falcon console account that can create API clients.
- The Falcon sensor on the Windows systems that you want to manage, with Real Time Response available.
- HTTPS access (TCP 443) from the Privilege Secure for Discovery server to your Falcon API base URL. If the server uses a proxy, configure it under **Configure** > **Server** > **Proxy Configuration**.

## Create an API client in Falcon

The following steps use the Falcon console. Menu names can change between console releases. Check the CrowdStrike documentation in your Falcon console if a label differs.

1. Sign in to the Falcon console.
2. Open **Support and resources**, and select **API clients and keys**.
3. Select **Create API client**.
4. Enter a **Client name** and a **Description**.
5. Select the following scopes.

   | Scope | Permission |
   | --- | --- |
   | Hosts | Read |
   | Real time response | Read |
   | Real time response (admin) | Write |

6. Select **Create**.
7. Copy the **Client ID**, **Secret**, and **Base URL**.

Falcon shows the secret only once. Store it in a secret manager.

## Add the provider configuration

1. In Privilege Secure for Discovery, select **Configure** > **Server**.
2. In **EDR Provider Configuration**, select **Add Provider**.
3. Set **Provider** to **CrowdStrike Falcon**.
4. Enter a **Configuration Name**. You select this name when you assign the configuration to domains and systems.
5. Under **Remote Systems Management**, set **Enable** to **Enabled**.
6. Set **Use Proxy Configuration** to **Enabled** if the server reaches Falcon through a proxy.
7. Enter the **API Base URL** from the API client, for example `https://api.crowdstrike.com`.
8. Under **API Client Credentials**, enter the **Client ID** and **Client Secret**.

   ![The CrowdStrike Falcon provider form with the Use Proxy Configuration, API Base URL, and API Client Credentials fields](/images/privilegesecurediscovery/integrations/edr-crowdstrike-credentials.webp)

9. Select **Test Connection**. The product shows `<name> EDR Integration configuration validated successfully.` when it can search hosts with the client.
10. Select **Save**.

You can create more than one configuration, for example one for each Falcon tenant, and assign each one to different systems.

## Assign the configuration

A configuration has no effect until you assign it to a domain or to systems. See [Assign a configuration](./overview.md#assign-a-configuration). To delete a configuration, see [Delete a configuration](./overview.md#delete-a-configuration).

## Troubleshoot Test Connection

Test Connection fails with `Invalid <name> EDR Integration configuration` when the product can't search hosts. Check the following:

- The **API Base URL** matches the cloud of your Falcon tenant.
- The **Client ID** and **Client Secret** belong to the same API client, and the client has the **Hosts** Read scope.
- The server can reach the base URL, and **Use Proxy Configuration** is on if the server needs a proxy.

Test Connection checks host search only. A scan or a session can still fail if the API client lacks a Real Time Response scope.
