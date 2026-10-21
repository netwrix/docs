---
title: "Validate and troubleshoot the Microsoft Entra ID integration"
sidebar_label: "Validation and troubleshooting"
description: "Validate Microsoft Entra directory synchronization, SAML SSO, and endpoint operations, and resolve common integration problems."
sidebar_position: 50
---

Validate each integration layer separately before you expand the scope to production. A successful Microsoft Graph connection doesn't prove SAML authentication or endpoint connectivity. A successful endpoint detection and response (EDR) connection test doesn't prove that a connector can complete an endpoint action.

## Troubleshoot directory synchronization and SAML

| Symptom | Action |
| --- | --- |
| **Test Connection** fails with **Failed to check Entra ID credentials** or **The credentials provided are not valid.** | Verify the tenant ID, application (client) ID, secret **Value**, credential expiration, and administrator consent. The test also fails when the token lacks `Device.Read.All`, so confirm that you granted it as an application permission. |
| The domain **Status** shows **Please Check Credentials** | The product couldn't get a Microsoft Graph token during synchronization. Verify the tenant ID, client ID, secret value, and expiration date. |
| **Test Connection** succeeds, but synchronization fails | Verify that `Directory.Read.All` has administrator consent. The test doesn't check that permission. Review the synchronization logs. |
| Users or groups are absent | Confirm that the full synchronization completed. Verify the required Graph permissions, group memberships, and delta-cycle results. |
| `AADSTS50011` | Correct the Reply URL so that the scheme, host, path, case, and trailing slash match exactly. |
| `AADSTS700016` or `AADSTS50010` | Make the Microsoft Entra Identifier and the Privilege Secure for Discovery Issuer identical. |
| `AADSTS50105` | Assign the user or group to the enterprise application. |
| The browser fails at a Reply URL other than `/api/v1/login` | Set the Reply URL to `https://<fqdn>/api/v1/login`. |
| Privilege Secure for Discovery reports an invalid SAML signature | Paste the active certificate from this enterprise application into **Issuer Cert**. Sign both the response and the assertion with SHA-256. |
| The product displays **User not found with nameID: `<value>` using template "`<template>`"** | For Entra Native, complete Microsoft Graph synchronization. For Hybrid, confirm that the LDAP identity exists and both synchronization paths completed. Compare the NameID to the **Match User By** template exactly, including case and the domain suffix. A UPN suffix other than the tenant's default domain doesn't match `${sAMAccountName}@${domain_fqdn}`. |
| The product displays **Required field 'nameID' missing in SAML profile** | Confirm that the enterprise application sends a Name ID claim and that **ID Claim** is `nameID`. |
| The user matches but doesn't have access | Assign an effective role directly or through an authorized group. |
| Local login appears instead of automatic SSO | Confirm that **SSO Enabled** is **Enabled** and **Auto-Redirect to IdP** is selected. Test an unauthenticated request to a protected route in a new private browser session. A direct visit to `/#/login` doesn't by itself prove protected-route redirection. |
| SSO starts again after sign-out | Privilege Secure for Discovery doesn't initiate SAML Single Logout. If **Auto-Redirect to IdP** is enabled, a later unauthenticated protected-route request can start SSO while the Microsoft Entra session remains active. Apply your Microsoft Entra session and Conditional Access controls. |

For local recovery, open `https://psd.example.com/#/login`, select **Show local login**, and use the local administrator credentials. If required, use a preserved administrator session to clear **redirect to IdP on login page**.

## Validate endpoint operations

Run only the tests that apply to the selected [endpoint operating model](./overview.md#select-an-endpoint-operating-model) and to the capabilities that the connector and installed release support.

For the Entra Native baseline, validation ends after read-only inventory succeeds. Don't test Protect, Deny, Just-In-Time Access (JIT/JITA), or Offline Access Management (OAM) in that model.

### Scan and inventory

1. Select a small, representative Windows pilot group.
2. Set **Scan Mode** to **Enabled**.
3. Confirm that each endpoint maps to the expected device record.
4. Run a scan.
5. Verify local users, local groups, and local Administrators membership.
6. Confirm that the scan records timestamps and audit events.
7. Resolve account exceptions before you enable write operations.

### Protect and Deny

Use this procedure only after the selected EDR or Active Directory (AD) Hybrid path passes the read-only inventory pilot and supports the required action.

1. Select a test endpoint with a test administrator account.
2. Confirm the intended persistent and authorized membership.
3. Select the required **Protect Mode** behavior.
4. Run the operation through the configured EDR or Hybrid execution path.
5. Confirm that Privilege Secure for Discovery removes unauthorized membership and retains authorized membership.
6. Review the audit events and, for an EDR path, the provider-side events.
7. Confirm the rollback procedure before you expand the scope.

### JIT/JITA

JIT/JITA temporarily grants an eligible identity local administrator membership on an endpoint. It doesn't change the user or group object in Microsoft Entra. Use this procedure only when the selected connector or direct Hybrid path supports the required membership actions in the installed release.

1. Request access for a pilot identity.
2. Confirm that Privilege Secure for Discovery adds the identity to the target local Administrators group.
3. Verify access during the session.
4. Allow the session to expire or revoke it.
5. Confirm that Privilege Secure for Discovery removes the administrator membership.
6. Verify the request, approval, grant, expiration, and removal events in the audit record.

### OAM

Enable OAM only after you confirm that the selected EDR or Hybrid path supports the required local-account and password actions in the installed release. Define:

- The managed local-account strategy
- Password length and complexity
- Scheduled and post-use rotation
- Password-history retention
- Roles that can retrieve an offline credential
- Pilot scope, audit ownership, rollback, and recovery procedures

Validate credential retrieval, endpoint sign-in, rotation, history, audit events, and offline recovery before you expand the scope.

## Manage credentials and certificates

Assign an owner and expiration monitoring to each of the following:

- The Microsoft Graph application credential
- The SAML signing certificate
- EDR API credentials for Entra Native with EDR
- LDAP bind, Scan, and Protect credentials for AD and Entra Hybrid
- Proxy credentials, when applicable

Rotate one integration credential at a time. Complete its connection and functional tests before you retire the previous credential.

### Rotate a Graph credential

1. Create a second client secret in the app registration, and store it in your secret manager.
2. Open the Microsoft Entra ID domain in **Domain Configuration**, enter the new **Client Secret**, and select **Test Connection**. Save the domain.
3. Wait for the next synchronization, and confirm that the domain status shows no error.
4. Revoke the old credential after an overlap period and successful validation.

### Roll over a SAML certificate

1. Test the local login.
2. Schedule a change window.
3. Activate the new certificate in the same enterprise application.
4. Update the **Issuer Cert** value in the SAML configuration.
5. Test SP-initiated SAML before you retire the old certificate.

## Troubleshoot endpoint operations

| Symptom | Action |
| --- | --- |
| Graph synchronization succeeds, but endpoint inventory is empty | Graph synchronization doesn't prove endpoint reachability. For the baseline, verify Domain Name System (DNS) or IP resolution, required ports and protocols, the Scan account, and Scan Mode. For EDR, verify agent health and provider assignment. For Hybrid, verify the direct AD and Windows path. |
| EDR **Test Connection** succeeds, but the endpoint scan fails | Verify that the device is active and visible in the provider, its identifier maps to the expected device record, the EDR configuration is enabled and assigned, and the provider credential has the permissions that the provider guide requires. |
| New devices use the EDR configuration, but existing devices don't | Domain defaults apply to newly discovered devices. Assign the EDR configuration to existing devices individually or through **Bulk Actions**. |
| The product refuses to delete an EDR configuration | You still assign the configuration to a Microsoft Entra ID domain, another domain, or a system. Remove the assignment, and then delete the configuration. |
| Protect, JIT/JITA, or OAM is unavailable or fails | Confirm that the selected connector and installed release support the action. Verify the device policy and provider-side prerequisites. Don't enable the action until its pilot succeeds. |
| Tanium Bulk Scan omits devices | Verify the exact computer-group name, group membership, agent health, EDR assignment, and the counts of completed devices, offline devices, and devices with no match. |
| Hybrid objects appear twice or don't correlate | Add both an LDAP domain and a Microsoft Entra ID domain. Complete both synchronizations, and verify that the Microsoft Entra users carry the on-premises security identifier (SID) attribute. |

## Complete a final check

Before you hand the integration to operations, confirm that you:

- Record the endpoint operating model.
- Verify the stable fully qualified domain name (FQDN), the trusted Transport Layer Security (TLS) certificate, and time synchronization.
- Assign an owner to each dedicated least-privilege credential.
- Verify full synchronization, later change cycles, identity mapping, and roles.
- Complete positive and negative SAML tests.
- Retest the local recovery login after you enable SSO and after every change to **Auto-Redirect to IdP**.
- Accept read-only inventory for the Entra Native baseline, or accept each endpoint action separately for the EDR or Hybrid model.
- Keep Protect, Deny, JIT/JITA, and OAM disabled wherever the path doesn't support them or you haven't enabled them deliberately.
- Document the domain and per-device policies.
- Record the EDR provider and device-policy assignments, when applicable.
- Document the direct and EDR connection strategy when you use both paths.
- Give operations a list of directly unreachable endpoints, provider-offline endpoints, and endpoints with no match.
- Align Conditional Access and multifactor authentication with your organization's policy.
- Assign credential and certificate expiration monitoring.
- Give operations the rollback, break-glass, and credential-rotation procedures.
