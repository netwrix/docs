---
title: "Configure Microsoft Graph directory synchronization"
sidebar_label: "Directory synchronization"
description: "Create a Microsoft Entra app registration and synchronize users, groups, and devices into Netwrix Privilege Secure for Discovery."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm at 26.09.1 that the Microsoft Entra ID domain form still requires the Scan and Protect account fields when Scan Mode and Protect Mode are disabled, and what value an EDR-only deployment should enter. Evidence: none.

TODO: Confirm at 26.09.1 that Test Connection checks only token acquisition and Device.Read.All, and that the Microsoft Entra configuration has no object-scope filter. Evidence: none.
:::

Configure a dedicated Microsoft Entra app registration so that Netwrix Privilege Secure for Discovery can read users, groups, devices, domains, and relationships through Microsoft Graph. Complete the [integration prerequisites](./overview.md#prerequisites) before you start.

## Create an app registration

1. Open the **Microsoft Entra admin center**.
2. Go to **Identity > Applications > App registrations > New registration**.
3. Enter a name such as `PSD-<environment>-Graph-Sync`.
4. Select **Accounts in this organizational directory only**.
5. Leave **Redirect URI** empty, and select **Register**.
6. Record the **Application (client) ID** and **Directory (tenant) ID**.
7. Assign at least two accountable application owners.

## Add Microsoft Graph application permissions

1. Open **API permissions > Add a permission > Microsoft Graph**.

   ![The Request API permissions pane in Microsoft Entra with the Microsoft Graph tile selected](/img/product_docs/privilegesecurediscovery/microsoftentraid/09-entra-select-microsoft-graph.webp)

2. Select **Application permissions**. Don't select delegated permissions.
3. Add the permissions that apply to the deployment.

   | Permission | Requirement | Purpose |
   | --- | --- | --- |
   | `Directory.Read.All` | Required | Reads directory, user, group, domain, and membership data that synchronization uses |
   | `Device.Read.All` | Required | Reads device inventory, device relationships, and device delta changes |
   | `Member.Read.Hidden` | Conditional | Reads hidden group memberships when the deployment requires complete hidden-membership synchronization |

   ![The Directory.Read.All application permission selected in Microsoft Entra](/img/product_docs/privilegesecurediscovery/microsoftentraid/10-entra-directory-read-all.webp)

   ![The Device.Read.All application permission selected in Microsoft Entra](/img/product_docs/privilegesecurediscovery/microsoftentraid/11-entra-device-read-all.webp)

4. Select **Grant admin consent for `<tenant>`**.
5. Verify that Microsoft Entra shows granted status for each required application permission.

Don't grant Graph write permissions or delegated permissions. Endpoint operations don't require `User.ReadWrite.All` or `Group.ReadWrite.All` because they act on the managed endpoint, not on the Microsoft Entra directory object.

## Create the client secret

1. Open **Certificates & secrets > Client secrets > New client secret**.

   ![The New client secret form in Microsoft Entra before a description and lifetime are entered](/img/product_docs/privilegesecurediscovery/microsoftentraid/12-entra-new-client-secret-blank.webp)

2. Enter a description and a lifetime.
3. Select **Add**.
4. Copy the secret **Value**, not the Secret ID, directly to your secret manager.
5. Record the credential owner and the rotation date.

Microsoft Entra shows the secret value only once. Don't include it in screenshots, tickets, or chat.

## Add the Microsoft Entra ID source

1. In Privilege Secure for Discovery, open **Configure > Server > Domain Configuration**.
2. Select **Add Domain > Entra ID**.
3. Complete the configuration.

   | Field | Value |
   | --- | --- |
   | Name | Enter a stable descriptive name, normally the tenant's default domain or an environment label. |
   | Client Id | Enter the application (client) ID from the Graph app registration. |
   | Tenant Id | Enter the directory (tenant) ID from Microsoft Entra. |
   | Client Secret | Enter the active secret value from your secret manager. |
   | Scan Mode | Keep disabled until you commission the selected inventory path. |
   | Protect Mode | Keep disabled until you commission a supported write path. |
   | Scan and Protect accounts | Enter dedicated, least-privilege identities from your endpoint-management design. |

   The Microsoft Entra ID form requires the Scan and Protect account fields even when the related modes are disabled. Enter only dedicated account values. If a deployment relies only on EDR and has no direct Windows accounts, contact Netwrix Support for the supported value convention before you save the source.

4. Select **Test Connection**.
5. Save the source.
6. Monitor the complete synchronization.

A successful connection test confirms token acquisition and the presence of `Device.Read.All`. It doesn't call every Microsoft Graph endpoint, validate every permission, or prove that users, groups, devices, and relationships synchronize successfully.

## Validate the full import

For an Entra-native deployment, complete the following checks before you configure SAML. For a hybrid deployment, also complete the correlation checks in [Configure endpoint operations](./endpoint-operations.md#configure-the-hybrid-model).

- Confirm that user, group, and device synchronization completes without an error.
- Confirm that the pilot user exists in **Configure > Users and Groups**.
- Confirm that the synchronized `sAMAccountName` and `domain_fqdn` produce the expected user principal name.
- Confirm that the pilot user has a direct or group-derived role.
- Confirm that required group memberships are present, including hidden memberships when you use the optional permission.
- Complete one full synchronization and at least one later delta cycle.

Privilege Secure for Discovery synchronizes the general Microsoft Entra groups that Microsoft Graph returns, not only Microsoft 365 groups. Plan the initial import as tenant-wide because the Microsoft Entra configuration doesn't provide an object-scope filter.

After the import passes these checks, [configure SAML SSO](./saml-sso.md).

## Related Microsoft documentation

- [List a user's direct memberships](https://learn.microsoft.com/en-us/graph/api/user-list-memberof?view=graph-rest-1.0)
- [Get incremental changes for devices](https://learn.microsoft.com/en-us/graph/api/device-delta?view=graph-rest-1.0)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
