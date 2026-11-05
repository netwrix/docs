---
title: "Configure endpoint operations for Microsoft Entra ID"
sidebar_label: "Endpoint operations"
description: "Configure inventory, EDR-assisted endpoint operations, or an AD and Microsoft Entra hybrid model in Netwrix Privilege Secure for Discovery."
sidebar_position: 40
---

Microsoft Graph imports Microsoft Entra users, groups, devices, and relationships into Netwrix Privilege Secure for Discovery. SAML authenticates an existing identity. Neither integration provides a Windows endpoint execution channel, so you configure endpoint operations separately.

Choose one of the following models:

- **Entra Native baseline:** Microsoft Graph and SAML with read-only inventory when Privilege Secure for Discovery has direct endpoint connectivity and a valid Scan account.
- **Entra Native with EDR:** Microsoft Graph and SAML with a supported endpoint detection and response (EDR) connector.
- **AD and Entra Hybrid:** Active Directory (AD), Microsoft Graph, and SAML with direct Windows connectivity. An EDR connector is optional.

Review the [operating model comparison](./overview.md#select-an-endpoint-operating-model) before you continue.

## Entra Native baseline: inventory only

Use this model for Microsoft Entra directory visibility, SAML single sign-on (SSO), and read-only endpoint inventory.

A direct scan succeeds only when:

- Privilege Secure for Discovery can resolve and reach the Windows endpoint through a supported network path.
- The required Windows management protocols and ports are available.
- A valid, least-privilege Scan account can authenticate to the endpoint.
- You set **Scan Mode** to **Enabled** for the target device or policy scope.

Keep Protect, Deny, Just-In-Time Access (JIT/JITA), and Offline Access Management (OAM) disabled in this model.

This model doesn't guarantee that the product can scan every Entra-joined device. If an endpoint isn't directly reachable, Microsoft Graph can still supply its directory record, but the product can't collect endpoint-local inventory through Graph. Use Entra Native with EDR or AD and Entra Hybrid when you require reliable endpoint operations.

## Entra Native with EDR

Use this model when Microsoft Graph supplies the directory objects, SAML provides authentication, and a supported EDR platform provides the endpoint execution path.

Privilege Secure for Discovery supports EDR configuration for:

- [Carbon Black Cloud](../edr/carbonblack.md)
- [CrowdStrike Falcon](../edr/crowdstrike.md)
- [SentinelOne](../edr/sentinelone.md)
- [Tanium Cloud](../edr/tanium.md)

Use the provider guide to configure provider-side access and the required fields. The endpoint actions available to a device depend on the selected connector, its configuration, and the installed release. Validate each required action with a pilot before you use it in production.

### Configure the shared EDR workflow

1. Complete [Microsoft Graph directory synchronization](./directory-synchronization.md) and [SAML configuration](./saml-sso.md).
2. Complete the provider-side prerequisites in the selected EDR guide.
3. Confirm that each pilot Windows endpoint has an active provider agent and appears in the provider console.
4. In Privilege Secure for Discovery, open **Configure** > **Server** > **EDR Provider Configuration**.
5. Select **Add Provider**, and select the provider.
6. Enter a descriptive configuration name, the provider URL, a dedicated application programming interface (API) credential, proxy settings, and the provider-specific values.
7. Set the provider's integration **Enable** option, which manages Windows systems that the server can't reach directly, to **Enabled** when the configuration is ready for testing.
8. Select **Test Connection**, and save the provider configuration.

   A successful connection test verifies the provider API path. It doesn't verify an endpoint operation.

9. Open the Microsoft Entra domain in **Domain Configuration**.
10. Under **Default Policies**, select the provider configuration in **EDR Configuration**. When only one provider exists, the field shows the link **Configure an EDR Provider below.** instead of a list.
11. Assign the EDR configuration individually or through **Bulk Actions** to devices that already exist in Privilege Secure for Discovery.
12. Set **Scan Mode** to **Enabled** for a pilot group. Keep Protect and OAM disabled.
13. Run a scan.
14. Verify device mapping, local Administrators inventory, timestamps, and the related events in the product and in the provider console.
15. Enable Protect, Deny, JIT/JITA, and OAM separately, and only when the connector and installed release support the required action.

To assign or delete a configuration later, see [EDR integrations overview](../edr/overview.md).

Use a dedicated provider-side service identity with only the required permissions. Store its credential in your secret manager. Don't reuse the Graph client secret as a Scan, Protect, LDAP, or EDR credential.

### Tanium Bulk Scan boundary

Tanium Bulk Scan is an inventory path. It doesn't replace the standard per-device path for supported Protect, Deny, JIT/JITA, or password-management operations. Follow the [Tanium Cloud configuration guide](../edr/tanium.md), and validate the counts of completed devices, offline devices, and devices with no match during a pilot.

## AD and Microsoft Entra Hybrid

Use this model when AD users and devices synchronize to Microsoft Entra through Microsoft Entra Connect or Cloud Sync, and Privilege Secure for Discovery can connect to the corresponding AD domain.

In this model:

- Lightweight Directory Access Protocol (LDAP) supplies AD identities, domain information, and the direct Windows management configuration.
- Microsoft Graph supplies the Microsoft Entra representation and cloud relationships.
- Privilege Secure for Discovery uses available on-premises identity information to correlate the hybrid records.
- Separate AD Scan and Protect accounts provide the direct Windows execution path.
- SAML authenticates users through the Microsoft Entra enterprise application.
- An EDR connector can provide a path for endpoints without consistent direct connectivity.

An Entra-joined device alone doesn't establish the hybrid model. The product must contain both the LDAP domain configuration and the corresponding Microsoft Entra source.

### Configure the hybrid model

1. Confirm that the required users, groups, and devices originate in AD and synchronize to Microsoft Entra.
2. Verify that the synchronized Microsoft Entra objects contain the expected on-premises synchronization attributes.
3. In Privilege Secure for Discovery, open **Configure** > **Server** > **Domain Configuration** > **Add Domain** > **LDAP**.
4. Configure the AD Domain Name System (DNS) domain, directory endpoint, secure LDAP settings, bind account, and directory search scope.
5. Configure separate least-privilege accounts:

   - Use the **Scan Mode** account for read and inventory operations.
   - Use the **Protect Mode** account for local administrator membership and password-management actions.

6. Select the Windows authentication method.

   - For NT LAN Manager (NTLM), use the required `NETBIOS\User` account format.
   - For Kerberos, use the corresponding AD principal and configure the correct AD DNS and NetBIOS names.

7. Keep Protect and OAM disabled. Complete and validate the LDAP synchronization.
8. Add the corresponding Microsoft Entra source. See [Configure Microsoft Graph directory synchronization](./directory-synchronization.md).
9. Complete both synchronization paths.
10. Verify that the pilot AD objects correlate with their Microsoft Entra representations without duplicates.
11. Verify that each pilot user and device maps to one record. Confirm the expected AD identifiers, domain, DNS name, domain-controller classification when applicable, group memberships, and source of the effective policy.
12. [Configure SAML SSO](./saml-sso.md).
13. Enable Scan Mode for a pilot group, and validate direct endpoint inventory.
14. After you accept read-only inventory, enable Protect, Deny, JIT/JITA, and OAM separately.

Validate AD DNS resolution, time synchronization, endpoint reachability, authentication, and the effective service-account permissions. If the deployment also uses an EDR connector, document which connection path applies to each endpoint scope.

## Assign endpoint policies

Domain defaults apply to newly discovered devices. Apply settings to existing devices through individual device configuration or **Bulk Actions**.

Enable a policy action only after you confirm that the selected direct or EDR path supports it in the installed release.

| Setting | Purpose |
| --- | --- |
| **Scan Mode** | Defaults to **Disabled**. **Enabled** turns on scheduled administrator inventory and endpoint processing. |
| **Protect Mode: Disabled** | Keeps the device in inventory-only mode. |
| **Protect Mode: New Accounts: JITA** | Removes unauthorized, nonpersistent administrator membership while allowing an approved identity to remain eligible for JITA. |
| **Protect Mode: New Accounts: Deny** | Removes unauthorized, nonpersistent administrator membership without retaining newly discovered access for JITA. |
| **EDR Configuration** | Selects the endpoint execution provider. |
| **Offline Access** | Selects **Best Practice**, **Unmanaged** (the default), or **Advanced** for OAM and the password lifecycle. |

Complete the administrator inventory before you enable Protect Mode. Define persistent accounts, service identities, exclusions, rollback, and break-glass access.

## Security boundaries

- Use separate, dedicated credentials for Graph synchronization, LDAP bind, Windows Scan, Windows Protect, and each EDR provider.
- Don't grant `DeviceLocalCredential.Read.All` or other Microsoft Entra Local Administrator Password Solution (LAPS) password-read permissions to the Graph synchronization application. This integration doesn't require Graph access to local administrator passwords.
- This integration doesn't use Microsoft Intune as an endpoint execution path. Configure direct Windows connectivity or a supported EDR connector for endpoint operations.
- Use one password-management authority for each managed local account. If Windows LAPS manages an account, don't configure OAM to rotate the same account.
- Store every secret in your secret manager. Assign an owner and an expiration-monitoring process to each credential.

After you configure the selected model, [validate endpoint operations](./validation-and-troubleshooting.md#validate-endpoint-operations).

## Related Microsoft documentation

- [Microsoft Entra hybrid joined devices](https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join)
- [Microsoft Entra Connect Sync](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-azure-ad-connect)
