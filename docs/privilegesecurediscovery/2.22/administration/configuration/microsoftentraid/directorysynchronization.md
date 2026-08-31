---
title: "Configure Microsoft Graph directory synchronization"
sidebar_label: "Directory synchronization"
description: "Configure a Microsoft Entra app registration and synchronize users, groups, and devices to Netwrix Privilege Secure for Discovery."
sidebar_position: 20
---

# Configure Microsoft Graph directory synchronization

Configure a dedicated Microsoft Entra app registration so that Netwrix Privilege Secure for Discovery (NPS-D) can read users, groups, devices, domains, and relationships through Microsoft Graph.

This procedure applies to NPS-D 25.12.0 and later. Complete the [integration prerequisites](./overview.md#prerequisites) before you start.

## Create an app registration

1. Open the **Microsoft Entra admin center**.
2. Go to **Identity > Applications > App registrations > New registration**.
3. Enter a name such as `NPSD-<environment>-Graph-Sync`.
4. Select **Accounts in this organizational directory only**.
5. Leave **Redirect URI** empty, and select **Register**.
6. Record the **Application (client) ID** and **Directory (tenant) ID** in the approved implementation record.
7. Assign at least two accountable application owners.

## Add Microsoft Graph application permissions

1. Open **API permissions > Add a permission > Microsoft Graph**.

   ![Select Microsoft Graph in Request API permissions](/img/product_docs/privilegesecurediscovery/microsoftentraid/09-entra-select-microsoft-graph.webp)

2. Select **Application permissions**. Don't select delegated permissions.
3. Add the permissions that apply to the deployment.

   | Permission | Requirement | Purpose |
   | --- | --- | --- |
   | `Directory.Read.All` | Required | Reads directory, user, group, domain, and membership data used by the NPS-D synchronization flow |
   | `Device.Read.All` | Required | Reads device inventory, device relationships, and device delta changes |
   | `Member.Read.Hidden` | Conditional | Reads hidden group memberships when the deployment requires complete hidden-membership synchronization |

   ![Add Directory.Read.All as an application permission](/img/product_docs/privilegesecurediscovery/microsoftentraid/10-entra-directory-read-all.webp)

   ![Add Device.Read.All as an application permission](/img/product_docs/privilegesecurediscovery/microsoftentraid/11-entra-device-read-all.webp)

4. Select **Grant admin consent for `<tenant>`**.
5. Verify that Microsoft Entra shows granted status for each required application permission.

For NPS-D 26.06, don't grant Graph write permissions or delegated permissions. Endpoint operations don't require `User.ReadWrite.All` or `Group.ReadWrite.All` because they act on the managed endpoint, not on the Microsoft Entra directory object.

## Create and protect the client credential

1. Open **Certificates & secrets > Client secrets > New client secret**.
2. Enter the approved description and lifetime.
3. Create the credential during the controlled change window.
4. Copy the secret **Value**, not the Secret ID, directly to the approved secret manager.
5. Record the credential owner and rotation date without recording the secret value in deployment evidence.

![Blank client secret form used as a safe evidence point](/img/product_docs/privilegesecurediscovery/microsoftentraid/12-entra-new-client-secret-blank.webp)

Don't include the generated value in screenshots, tickets, chat, or video.

## Add the Microsoft Entra ID source in NPS-D

1. In NPS-D, open **Configure > Server > Domain Configuration**.
2. Select **Add Domain > Entra ID**.
3. Complete the configuration.

   | NPS-D field | Value |
   | --- | --- |
   | Name | Enter a stable descriptive name, normally the tenant's default domain or environment label. |
   | Client Id | Enter the application or client ID from the Graph app registration. |
   | Tenant Id | Enter the directory or tenant ID from Microsoft Entra. |
   | Client Secret | Retrieve and enter the active credential value from the approved secret manager. |
   | Scan Mode | Keep disabled until you deliberately commission the selected inventory path. |
   | Protect Mode | Keep disabled until you separately commission a supported write path. |
   | Scan and Protect accounts | Enter dedicated least-privilege identities from the approved endpoint-management design. |

NPS-D 26.06 requires the Scan and Protect account fields in the Microsoft Entra form even when the related modes are disabled. Enter only approved, dedicated account values. If an EDR-only deployment doesn't have approved direct Windows accounts, contact Netwrix Support for the supported value convention for the exact installed release before you save the source.

4. Select **Test Connection**.
5. Save the source.
6. Monitor the complete synchronization.

In NPS-D 26.06, a successful connection test confirms token acquisition and the presence of `Device.Read.All`. It doesn't call every Microsoft Graph endpoint, validate every permission, or prove that users, groups, devices, and relationships can synchronize successfully.

## Validate the full import

For an Entra-native deployment, complete the following checks before you configure SAML. For a hybrid deployment, also complete the correlation checks in [Configure endpoint operations](./endpointoperations.md#ad-and-microsoft-entra-hybrid).

- Confirm that user, group, and device synchronization completes without an error.
- Confirm that the pilot user exists in **Configure > Users and Groups**.
- Confirm that the synchronized `sAMAccountName` and `domain_fqdn` produce the expected user principal name.
- Confirm that the pilot user has a direct or group-derived NPS-D role.
- Confirm that required group memberships are present, including hidden memberships when the optional permission is used.
- Complete one full synchronization and at least one later delta cycle.
- Confirm that distributable evidence contains no credential or sensitive customer identifier.

NPS-D synchronizes general Microsoft Entra groups returned by Microsoft Graph. The flow isn't limited to Microsoft 365 groups. Plan the initial import as tenant-wide because the NPS-D 26.06 Microsoft Entra configuration doesn't provide an object-scope filter.

After the import passes these checks, [configure SAML SSO](./samlsso.md).

## Related Microsoft documentation

- [List a user's direct memberships](https://learn.microsoft.com/en-us/graph/api/user-list-memberof?view=graph-rest-1.0)
- [Get incremental changes for devices](https://learn.microsoft.com/en-us/graph/api/device-delta?view=graph-rest-1.0)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
