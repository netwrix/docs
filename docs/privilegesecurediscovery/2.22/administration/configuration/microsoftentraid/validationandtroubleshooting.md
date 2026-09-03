---
title: "Validate and troubleshoot the Microsoft Entra ID integration"
sidebar_label: "Validation and troubleshooting"
description: "Validate Microsoft Entra directory synchronization, SAML SSO, and endpoint operations, and troubleshoot common NPS-D integration issues."
sidebar_position: 50
---

# Validate and troubleshoot the Microsoft Entra ID integration

Validate each Netwrix Privilege Secure for Discovery (NPS-D) integration layer separately before you expand the production scope. A successful Microsoft Graph connection doesn't prove SAML authentication or endpoint connectivity. A successful endpoint detection and response (EDR) connection test doesn't prove that a connector can complete an endpoint action.

## Troubleshoot directory synchronization and SAML

| Symptom | Action |
| --- | --- |
| **Test Connection** fails | Verify the tenant ID, application (client) ID, secret **Value**, credential expiration, required application permissions, and administrator consent. |
| **Test Connection** succeeds, but synchronization fails | Verify consent and credential validity. Review the user, group, device, and relationship synchronization logs. |
| Users or groups are absent | Confirm that the full synchronization completed. Verify the required Graph permissions, group memberships, and delta-cycle results. |
| `AADSTS50011` | Correct the Reply URL so that the scheme, host, path, case, and trailing slash match exactly. |
| `AADSTS50010` | Make the Microsoft Entra Identifier and NPS-D Issuer identical. |
| `AADSTS50105` | Assign the approved user or group to the enterprise application. |
| The browser returns 404 at `/api/v1/saml/callback` or `/api/login` | Use the documented Reply URL path: `/api/v1/login`. |
| NPS-D reports an invalid SAML signature | Use the active certificate from this enterprise application. Sign both the response and assertion with SHA-256. |
| NPS-D doesn't find the user | For Entra Native, complete Microsoft Graph synchronization. For Hybrid, confirm that the LDAP identity exists and both synchronization paths completed. Compare NameID to `${sAMAccountName}@${domain_fqdn}` exactly, including case and suffix. |
| The user matches but doesn't have access | Assign an effective NPS-D role directly or through an authorized group. |
| Local login appears instead of automatic SSO | Confirm that the installed version is NPS-D 26.09.0 or later, **SSO Enabled** is on, and Auto-Redirect to IdP is enabled. Test an unauthenticated request to a protected route in a new private browser session. A direct visit to `/#/login` doesn't by itself prove protected-route redirection. |
| SSO starts again after NPS-D logout | NPS-D doesn't initiate SAML Single Logout. If Auto-Redirect to IdP is enabled, a later unauthenticated protected-route request can start SSO while the Microsoft Entra session remains active. Apply the organization's Microsoft Entra session and Conditional Access controls. |

For local recovery, open `https://npsd.example.com/#/login`, select **Show local login**, and use the tested local credentials. If required, use the preserved administrator session to clear **redirect to IdP on login page**.

## Validate endpoint operations

Run only the tests that apply to the selected [endpoint operating model](./overview.md#select-an-endpoint-operating-model) and to the capabilities that the commissioned connector and installed release support.

For the Entra Native baseline, acceptance ends after read-only inventory succeeds. Don't test Protect, Deny, Just-In-Time Access (JIT/JITA), or Offline Access Management (OAM) in that model.

### Scan and inventory

1. Select a small, representative Windows pilot scope.
2. Enable Scan Mode.
3. Confirm that each endpoint maps to the expected NPS-D device record.
4. Run a scan.
5. Verify local users, local groups, and local Administrators membership.
6. Confirm that NPS-D records scan timestamps and audit events.
7. Resolve approved account exceptions before you enable write operations.

### Protect and Deny

Use this procedure only after the selected EDR or Active Directory (AD) Hybrid path passes the read-only inventory pilot and supports the required action.

1. Select a controlled endpoint with an approved test administrator account.
2. Confirm the intended persistent and authorized membership.
3. Select the required Protect behavior.
4. Run the operation through the configured EDR or Hybrid execution path.
5. Confirm that NPS-D removes unauthorized membership and retains approved membership.
6. Review the NPS-D audit evidence and, for an EDR path, provider-side evidence.
7. Confirm the documented rollback procedure before you expand the scope.

### JIT/JITA

JIT/JITA temporarily grants an eligible identity local administrator membership on an approved endpoint. It doesn't change the user or group object in Microsoft Entra.

Use this procedure only when the selected connector or direct Hybrid path supports the required membership actions in the installed release.

1. Request access for an approved pilot identity.
2. Confirm that NPS-D adds the identity to the target local Administrators group.
3. Verify access during the approved session.
4. Allow the session to expire or revoke it.
5. Confirm that NPS-D removes the administrator membership.
6. Verify request, approval, grant, expiration, and removal events in the audit record.

### OAM

Commission OAM only after you confirm that the selected EDR or Hybrid path supports the required local-account and password actions in the installed release.

Define and approve:

- The managed local-account strategy
- Password length and complexity
- Scheduled and post-use rotation
- Password-history retention
- Roles that can retrieve an offline credential
- Pilot scope, audit ownership, rollback, and recovery procedures

Validate credential retrieval, endpoint login, rotation, history, audit evidence, and offline recovery before you expand the scope.

## Manage credentials and certificates

Assign accountable owners and expiration monitoring for:

- The Microsoft Graph application credential
- The SAML signing certificate
- EDR API credentials for Entra Native with EDR
- LDAP bind, Scan, and Protect credentials for AD and Entra Hybrid
- Proxy credentials, when applicable

Rotate one integration credential at a time. Complete its connection and functional acceptance tests before you retire the previous credential.

### Rotate a Graph credential

1. Create a second credential, and store it in the approved secret manager.
2. Update NPS-D, and select **Test Connection**.
3. Complete a full or delta synchronization, and validate relationships.
4. Revoke the old credential only after the overlap window and successful acceptance.

### Roll over a SAML certificate

1. Preserve and retest local login.
2. Schedule a controlled change window.
3. Activate the new certificate in the same enterprise application.
4. Update the certificate body that NPS-D stores.
5. Test SP-initiated SAML before you retire the old certificate.

## Troubleshoot endpoint operations

| Symptom | Action |
| --- | --- |
| Graph synchronization succeeds, but endpoint inventory is empty | Graph synchronization doesn't prove endpoint reachability. For the baseline, verify Domain Name System (DNS) or IP resolution, required ports and protocols, the Scan account, and Scan Mode. For EDR, verify agent health and provider assignment. For Hybrid, verify the direct AD and Windows path. |
| EDR **Test Connection** succeeds, but the endpoint scan fails | Verify that the device is active and visible in the provider, its identifier maps to the expected NPS-D record, the EDR configuration is enabled and assigned, and the provider credential has the permissions that the provider guide requires. |
| New devices use the EDR configuration, but existing devices don't | Domain defaults apply to newly discovered devices. Assign the EDR configuration to existing devices individually or through **Bulk Actions**. |
| Protect, JIT/JITA, or OAM is unavailable or fails | Confirm that the selected connector and installed NPS-D release support the action. Verify the device policy and provider-side prerequisites. Don't enable the action until its pilot succeeds. |
| Tanium Bulk Scan omits devices | Verify the exact computer-group name, group membership, agent health, EDR assignment, and completed, offline, and unmatched counts. |
| Hybrid objects appear twice or don't correlate | Confirm that both LDAP and Microsoft Entra sources are configured. Complete both synchronizations, and verify that Microsoft Entra contains the expected on-premises synchronization attributes. |

## Final handoff checklist

Confirm that:

- The selected endpoint operating model is recorded.
- The stable fully qualified domain name (FQDN), trusted Transport Layer Security (TLS), and time synchronization are verified.
- Dedicated least-privilege credentials have accountable owners.
- Full synchronization, later delta cycles, identity mapping, and NPS-D roles are verified.
- Positive and negative SAML tests are complete.
- Local NPS-D recovery login is retested after SSO enablement.
- The Auto-Redirect to IdP setting and its version requirement are recorded. Local recovery is retested after every change to this setting.
- Read-only inventory is accepted for the Entra Native baseline, or each approved endpoint action is accepted separately for the EDR or Hybrid model.
- Protect, Deny, JIT/JITA, and OAM remain disabled wherever they are unsupported or haven't been commissioned.
- Domain and per-device policies are documented.
- The EDR provider and device-policy assignments are recorded, when applicable.
- The direct and EDR connection strategy is documented when both paths are used.
- Operations receives a list of directly unreachable, provider-offline, and unmatched endpoints.
- Conditional Access and multifactor authentication follow the organization's policy.
- Credential and certificate expiration monitoring is assigned.
- Operations receives rollback, break-glass, and credential-rotation procedures.
- Distributable documentation contains no passwords, secrets, tokens, certificate private keys, sensitive customer identifiers, or authentication prompts.
