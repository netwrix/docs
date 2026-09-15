---
title: "ADFS"
description: "Configure AD FS as an Authentication Provider"
sidebar_position: 30
slug: /configuration/fileservers/netappcmode/oauth2adfs
---

# ADFS

Netwrix Auditor can obtain an OAuth 2.0 access token from Active Directory Federation Services
(AD FS) and present it to NetApp ONTAP REST API. Therefore, register Netwrix Auditor as an
application in AD FS, then configure ONTAP to trust tokens issued by your AD FS server.

## Prerequisites

- AD FS is deployed on a domain member server (not a domain controller).
- A DNS A record exists for the federation service name (for example `adfs.yourdomain.com`),
  pointing at the AD FS server.
- An SSL certificate with a **Subject Alternative Name (SAN)** matching the federation service
  name is installed. **NOTE:** ONTAP does not trust your internal CA automatically — you install
  its root certificate separately in Step 7.
- Port 443 is open inbound.
- A domain service account is configured for the AD FS service.

Deploying AD FS from scratch is outside the scope of this topic — see
[AD FS Deployment](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/active-directory-federation-services-deployment-guide)
in Microsoft documentation.

## Register Netwrix Auditor as an Application in AD FS

**Step 1 –** In **AD FS Management**, go to **Application Groups → Add Application Group**. Name
the group (for example `NetApp`) and select the **Server application accessing a web API**
template. This template configures a confidential OAuth 2.0 client for the client credentials
flow (machine-to-machine, no interactive user) — the templates for interactive sign-in do not
apply here.

**Step 2 –** On the **Server application** screen, copy the auto-generated **Client Identifier**
(this is the `client_id` Netwrix Auditor will use to request a token), and set a **Redirect URI**.
**NOTE:** This field is required by the wizard, but is not used in the client credentials flow —
any placeholder value works.

**Step 3 –** On **Configure Application Credentials**, select **Generate a shared secret**, then
copy it immediately. **CAUTION:** The secret is shown only once.

**Step 4 –** On **Configure Web API**, set **Identifier** to your audience value, for example
`https://netapp`. This value becomes the `aud` claim of every issued token — ONTAP must be
configured with the same value through `-audience`.

**Step 5 –** Set **Access Control Policy** to **Permit everyone**. AD FS access control policies
are designed to evaluate conditions of an interactive sign-in (MFA, group membership); in client
credentials there is no user at all, so the policy must simply permit the request, or no token
will ever be issued.

**Step 6 –** Under **Application Permissions**, select the Web API scope you need — typically
`openid`, and `allatclaims` if you want all configured claims (including `appid`, which the
authorization model below depends on) to be included in the access token.

## Reference Values

| Value | AD FS |
| --- | --- |
| Issuer | `http://<adfs-host>/adfs/services/trust` |
| Token Endpoint | `https://<adfs-host>/adfs/oauth2/token` |
| JWKS URI | `https://<adfs-host>/adfs/discovery/keys` |
| Introspection | Not supported |

**CAUTION:** The `http` scheme and the `/adfs/services/trust` path in the issuer are not a typo —
this is the historical WS-Trust identifier that AD FS places in `iss` even for OAuth 2.0 tokens.

## Configure ONTAP

**Step 7 –** Install the AD FS root CA certificate on ONTAP (if it is internal or self-signed) and
create the OAuth 2.0 client configuration:

```
cluster1::> security certificate install -type server-ca -vserver <admin-svm>

cluster1::> security oauth2 client create -config-name Adfs -provider adfs \
  -issuer http://<adfs-host>/adfs/services/trust \
  -audience https://netapp \
  -provider-jwks-uri https://<adfs-host>/adfs/discovery/keys \
  -application http -use-mutual-tls none \
  -use-local-roles-if-present true -remote-user-claim appid
```

where `<adfs-host>` is your AD FS federation service name. For a full description of every
parameter, see
[Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/ontap.md).
This section uses authorization model C (local login by claim):

- `-provider adfs` enables AD FS-specific token handling on ONTAP.
- `-use-local-roles-if-present true` tells ONTAP to determine access through local roles/logins
  instead of a self-contained scope.
- `-remote-user-claim appid` tells ONTAP to read the `appid` claim from the token (the same GUID
  as the AD FS Client Identifier from Step 2) and look up a local login with that exact name.

**Step 8 –** Create the local role and a login matching the `appid` claim:

```
cluster1::> security login rest-role create -role full-access -api /api -access all -vserver <SVM>
cluster1::> security login create -user-or-group-name <client-id> -application http -authmethod password -role full-access
```

where `<client-id>` is the Client Identifier from Step 2. `security login rest-role create`
creates the local role with the actual permission set the client receives; `security login
create -user-or-group-name <client-id>` creates a local login whose name matches the `appid` claim
— this name match is what links the incoming token to the `full-access` role. The command still
prompts for a password twice, but the password itself is not used in the OAuth 2.0 flow.

**Step 9 –** Enable OAuth 2.0 and verify:

```
cluster1::> security oauth2 modify -enabled true
cluster1::> security oauth2 show
cluster1::> security oauth2 client show
cluster1::> security login show
```

## Example Token

A decoded AD FS access token contains claims similar to:

```
aud        : https://netapp
iss        : http://<adfs-host>/adfs/services/trust
apptype    : Confidential
appid      : <client-id>
authmethod : http://schemas.microsoft.com/ws/2008/06/identity/authenticationmethod/password
ver        : 1.0
```

## Related Topics

- [OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/overview.md)
- [Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/ontap.md)
- [AD FS Deployment Guide](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/active-directory-federation-services-deployment-guide)
