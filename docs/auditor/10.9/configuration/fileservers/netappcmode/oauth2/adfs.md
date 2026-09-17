---
title: "Configure AD FS"
description: "Configure AD FS as an Authentication Provider"
sidebar_position: 30
slug: /configuration/fileservers/netappcmode/oauth2/adfs
---

# Configure AD FS as an Authentication Provider

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
`ontap-role-netwrix_rest_role`. This value becomes the `aud` claim of every issued token — ONTAP must be
configured with the same value through `-audience`.

**Step 5 –** Set **Access Control Policy** to **Permit everyone**. AD FS access control policies
are designed to evaluate conditions of an interactive sign-in (MFA, group membership); in client
credentials there is no user at all, so the policy must simply permit the request, or no token
will ever be issued.

**Step 6 –** In the **Issuance Transform Rules** add a new rule. In the wizard select the template
`Send Claims Using a Custom Rule`. In the next window set the **claim rule name**, e.g. `NetApp scope rule`.
In the **Custom rule** field insert the following rule:
```
=> issue(Type = "scope", Value = "ontap-role-netwrix_rest_role");`
```

Where `netwrix_rest_role` is the REST API role name created in `Step 4` of
[Configure ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/ontap.md).
For details, refer to [Overview and options for ONTAP client authorization](https://docs.netapp.com/us-en/ontap/authentication/oauth2-authorization.html).

**Step 7 –** Under **Application Permissions**, select the Web API scope you need — typically
`openid`, and `allatclaims` if you want all configured claims (including `appid`, which the
authorization model below depends on) to be included in the access token.


**Step 8 –** Register the authorization server on the cluster (create provider configuration)
```
security oauth2 client create -config-name adfs -application http -issuer http://<adfs-host>/adfs/services/trust  -remote-user-claim appid -provider-jwks-uri https://<adfs-host>/adfs/discovery/keys -use-local-roles-if-present true -provider adfs -use-mutual-tls none
```

**Step 9 –** Verify OAuth 2.0 configuration:
```
security oauth2 client show
```

## Reference Values

| Name | Netwrix | NetApp | Value |
| --- | --- | --- | --- |
| Client ID | Client ID | not used | `Client identifier` from `Step 2` |
| Client secret | Client secret | not used | `shared secret` from `Step 3` |
| Issuer | not used | issuer | `http://<adfs-host>/adfs/services/trust` |
| Token Endpoint | Token Endpoint | not used | `https://<adfs-host>/adfs/oauth2/token` |
| Scope claim | Scope | not used | `ontap-role-netwrix_rest_role` |
| JWKS URI | not used | provider-jwks-uri | `https://<adfs-host>/adfs/discovery/keys` |

Where `<adfs-host>` is your AD FS federation service name.

**CAUTION:** The `http` scheme and the `/adfs/services/trust` path in the issuer are not a typo —
this is the historical WS-Trust identifier that AD FS places in `iss` even for OAuth 2.0 tokens.

## Related Topics

- [Overview and options for ONTAP client authorization](https://docs.netapp.com/us-en/ontap/authentication/oauth2-authorization.html)
- [OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/overview.md)
- [Configure ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/ontap.md)
- [AD FS Deployment Guide](https://learn.microsoft.com/en-us/windows-server/identity/ad-fs/deployment/active-directory-federation-services-deployment-guide)
