---
title: "Configure Okta"
description: "Configure Okta as an Authentication Provider"
sidebar_position: 40
slug: /configuration/fileservers/netappcmode/oauth2/okta
---

# Configure Okta as an Authentication Provider

Netwrix Auditor can obtain an OAuth 2.0 access token from Okta and present it to NetApp ONTAP
REST API. Therefore, register Netwrix Auditor as an application in Okta, then configure ONTAP to
trust tokens issued by your Okta org.

## Prerequisites

- An Okta org with administrator access to **Security → API → Authorization Servers** and
  **Applications**.
- A dedicated custom Authorization Server for this integration, recommended so its claims, scopes,
  and access policies don't affect other applications in the same Okta org.
- Cluster administrator access to ONTAP, to register the OAuth 2.0 client configuration.

**NOTE:** Okta is **not** on NetApp's officially tested provider list for OAuth 2.0. It is
configured here as a generic OAuth 2.0/OIDC-compliant authorization server, without a NetApp
support guarantee.

## Register Netwrix Auditor as an Application in Okta

**Step 1 –** In the Okta Admin Console, go to **Security → API → Authorization Servers**. Use the
`default` org authorization server, or the dedicated custom server from Prerequisites.

**Step 2 –** Go to **Applications → Applications → Create App Integration → API Services**. This
application type is built for machine-to-machine scenarios (no Redirect URI or login flow fields,
unlike interactive types) and returns a **Client ID** and **Client Secret**. Save the for the
future usage.

**Step 3 –** Disable **DPoP** (Demonstrating Proof-of-Possession) for the App Integration. This is
a **mandatory** step: Okta may require DPoP by default for some application types, but ONTAP does
not support it and expects a plain bearer token — a DPoP-bound token will not pass validation.

**Step 4 –** Deliver the self-contained scope to the token as a custom claim. On the authorization
server, go to the **Claims** tab → **Add Claim**. Set **Name** (for example `NetApp`, or `scp` to
merge it into the standard scope claim), **Include in token type: Access Token**, **Value type:
Expression**, and **Value** to a conditional expression that checks the requesting application's
**Client ID**, so only Netwrix Auditor receives access and every other application on this
Authorization Server is denied:
```
app.clientId == "<app-id>" ? "ontap-role-netwrix_rest_role" : "ontap:*:no-access:none:*:"
```

Replace `<app-id>` with the **Client ID** of the Netwrix Auditor application (Step 2). If the
Client ID matches, the claim resolves to `ontap-role-netwrix_rest_role`, which maps to the local
ONTAP role name `netwrix_rest_role` created on `Step 4` in
[Configure ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/ontap.md).
For ONTAP details, refer to [Overview and options for ONTAP client authorization](https://docs.netapp.com/us-en/ontap/authentication/oauth2-authorization.html).
For every other application, the claim resolves to `ontap:*:no-access:none:*:`, which grants no access.

**NOTE:** The `ontap-role-<role-name>` format maps the claim to a local ONTAP role instead of a
self-contained scope, and requires `-use-local-roles-if-present true` on the OAuth 2.0 client
configuration (Step 5). The referenced role must already exist on the cluster.

Then, on the **Access Policies** tab, make sure the rule for this application has a **No user**
condition and allows the relevant scope — Access Policy rules assume an interactive user by
default, and without an explicit **No user** condition Okta will refuse to issue a token to this
application at all.

**Step 5 –** Create the OAuth 2.0 client configuration, with local JWKS validation.
```
security oauth2 client create -config-name okta -application http -issuer https://<your-domain>.okta.com/oauth2/default -provider-jwks-uri  https://<your-domain>.okta.com/oauth2/default/v1/keys -use-local-roles-if-present true -provider basic -use-mutual-tls none
```

**Step 6 –** Verify OAuth 2.0 configuration:
```
security oauth2 client show
```

## Reference Values

| Name | Netwrix | NetApp | Value |
| --- | --- | --- | --- |
| Client ID | Client ID | not used | `Client ID` from Step 2 |
| Client secret | Client secret | not used | `Client secret` from Step 2 |
| Issuer | not used | issuer | `https://<okta-org>.okta.com/oauth2/default` |
| Token Endpoint | Token Endpoint| not used | `https://<okta-org>.okta.com/oauth2/default/v1/token` |
| Scope claim | Scope | not used | ontap-role-netwrix_rest_role |
| JWKS URI | not used | provider-jwks-uri | `https://<okta-org>.okta.com/oauth2/default/v1/keys` |

Where `<okta-org>` is your Okta org name, and `default` is the Authorization Server ID — replace it
if you created a dedicated custom Authorization Server (Step 1).

## Related Topics

- [Overview and options for ONTAP client authorization](https://docs.netapp.com/us-en/ontap/authentication/oauth2-authorization.html)
- [OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/overview.md)
- [Configure ONTAP](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/ontap.md)
- [Okta Authorization Servers documentation](https://help.okta.com/en-us/content/topics/security/api/authorization-servers.htm)
