---
title: "Configure Microsoft Graph directory synchronization"
sidebar_label: "Directory synchronization"
description: "Create a Microsoft Entra app registration and synchronize users, groups, and devices into Netwrix Privilege Secure for Discovery."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: What should an EDR-only deployment, with no direct Windows accounts, enter in the required Scan Mode and Protect Mode account fields of the Microsoft Entra ID domain form? Evidence: the fields are required by the form and by the entraid_config schema (lib-api-common/schemas/entraidConfig.js, scan_config.read_acct and write_acct: user and pass required), and no code path documents a placeholder convention.
:::

Configure a dedicated Microsoft Entra app registration so that Netwrix Privilege Secure for Discovery can read users, groups, devices, and the default domain through Microsoft Graph. Complete the [integration prerequisites](./overview.md#prerequisites) before you start.

## Create an app registration

1. Open the **Microsoft Entra admin center**.
2. Go to **Entra ID** > **App registrations** > **New registration**.
3. Enter a name such as `PSD-<environment>-Graph-Sync`.
4. Select **Accounts in this organizational directory only**.
5. Leave **Redirect URI** empty, and select **Register**.
6. Record the **Application (client) ID** and **Directory (tenant) ID**.
7. Assign at least two accountable application owners.

Portal menus change over time. If a label differs, follow the Microsoft procedure to [register an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).

## Add Microsoft Graph application permissions

1. Open **API permissions** > **Add a permission** > **Microsoft Graph**.
2. Select **Application permissions**. Don't select delegated permissions.
3. Add the permissions that apply to the deployment.

   | Permission | Requirement | Purpose |
   | --- | --- | --- |
   | `Directory.Read.All` | Required | Reads users, groups, group memberships, the default domain, and the Global Administrator role members |
   | `Device.Read.All` | Required | Reads devices and device changes |
   | `Member.Read.Hidden` | Conditional | Reads the members of groups that have hidden membership |

4. Select **Grant admin consent for `<tenant>`**.
5. Verify that Microsoft Entra shows a granted status for each required application permission.

Don't grant Graph write permissions or delegated permissions. Endpoint operations act on the managed endpoint, not on the Microsoft Entra directory object, so they don't need `User.ReadWrite.All` or `Group.ReadWrite.All`.

## Create the client secret

1. Open **Certificates & secrets** > **Client secrets** > **New client secret**.
2. Enter a description and a lifetime.
3. Select **Add**.
4. Copy the secret **Value**, not the **Secret ID**, directly to your secret manager.
5. Record the credential owner and the rotation date.

Microsoft Entra shows the secret value only once. Don't include it in screenshots, tickets, or chat.

## Add the Microsoft Entra ID source

1. In Privilege Secure for Discovery, open **Configure** > **Server** > **Domain Configuration**.
2. Select **Add Domain** > **Entra ID**.
3. Complete the configuration.

   | Field | Value |
   | --- | --- |
   | **Name** | Enter a descriptive name, such as the tenant's default domain (`contoso.com`) or an environment label. |
   | **Client Id** | Enter the application (client) ID from the app registration. |
   | **Tenant Id** | Enter the directory (tenant) ID from Microsoft Entra. |
   | **Client Secret** | Enter the secret value from your secret manager. |
   | **Windows Authentication Method** | Select **NTLM** or **Kerberos** to match your endpoint design. |
   | **Scan Mode Account** and **Protect Mode Account** | Enter a **Domain User** and **Domain Password** for each. Use dedicated, least-privilege identities from your endpoint-management design. |
   | **Scan Mode** and **Protect Mode** | Keep both set to **Disabled** until you commission the endpoint path. |

   ![The Microsoft Entra ID domain form with the connection settings, Windows service accounts, and default policies](/images/privilegesecurediscovery/integrations/ent-entra-domain-form.webp)

   The form requires the Scan Mode and Protect Mode account fields even when both modes are disabled. For the NTLM method, enter `<NETBIOS>\<user>`. For Kerberos, enter `<user>@<realm>` and the NetBIOS domain name.

4. Select **Test Connection**.

   The test requests a Microsoft Graph token and confirms that the token carries the `Device.Read.All` role. On success, the product displays **Successfully validated Entra ID Credentials**. If the credentials are wrong, or the token lacks `Device.Read.All`, it displays an error such as **Failed to check Entra ID credentials**. The test doesn't call the other Graph endpoints and doesn't prove that users and groups synchronize.

5. Select **Save**. The product displays **Successfully Saved EntraID Domain**.
6. Select **Refresh** and watch the **Status** column until the first synchronization completes.

If the product can't get a token during synchronization, the domain status shows **Please Check Credentials**. Verify the tenant ID, client ID, secret value, and expiration date.

The product reads the tenant's default domain name from Microsoft Graph and uses it as the domain FQDN for every user and device from this source. The **Name** field is only a label.

## Synchronization schedule

After the first import, the product applies changes from Microsoft Graph every 15 minutes by default and runs a full synchronization once a day.

The Microsoft Entra configuration has no object-scope filter. Plan the first import as tenant-wide. Privilege Secure for Discovery synchronizes every user, group, and device that Microsoft Graph returns, including security groups and Microsoft 365 groups.

## Validate the full import

For an Entra-native deployment, complete the following checks before you configure SAML. For a hybrid deployment, also complete the correlation checks in [Configure endpoint operations](./endpoint-operations.md#configure-the-hybrid-model).

- Confirm that the domain status shows a completed synchronization without an error.
- Confirm that the pilot user exists in **Configure** > **Users and Groups**.
- Confirm that the pilot user's `sAMAccountName` is the part of the user principal name (UPN) before the `@`, and that `domain_fqdn` is the tenant's default domain.
- Confirm that the pilot user has a direct or group-derived role.
- Confirm that required group memberships are present, including hidden memberships when you grant the optional permission.
- Complete one full synchronization and at least one later change cycle.

:::note
For a cloud-only user, the product builds the `sAMAccountName` from the UPN prefix and uses the tenant's default domain as `domain_fqdn`. If the user's UPN uses a different suffix, the SAML default match template in [Configure SAML SSO](./saml-sso.md#configure-nameid) doesn't match that user.
:::

After the import passes these checks, [configure SAML SSO](./saml-sso.md).

## Remove the Microsoft Entra ID source

In **Domain Configuration**, open the domain, select **Delete**, and then select **Remove Domain** in the confirmation dialog.

## Related Microsoft documentation

- [Register an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
- [Microsoft Graph permissions reference](https://learn.microsoft.com/en-us/graph/permissions-reference)
- [Get incremental changes for devices](https://learn.microsoft.com/en-us/graph/api/device-delta?view=graph-rest-1.0)
