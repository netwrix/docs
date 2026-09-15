---
title: "OKTA"
description: "Configure Okta as an Authentication Provider"
sidebar_position: 40
slug: /configuration/fileservers/netappcmode/oauth2okta
---

# OKTA

Netwrix Auditor can obtain an OAuth 2.0 access token from Okta and present it to NetApp ONTAP
REST API. Therefore, register Netwrix Auditor as an application in Okta, then configure ONTAP to
trust tokens issued by your Okta org.

**NOTE:** Okta is **not** on NetApp's officially tested provider list for OAuth 2.0. It is
configured here as a generic OAuth 2.0/OIDC-compliant authorization server, without a NetApp
support guarantee.

## Register Netwrix Auditor as an Application in Okta

**Step 1 –** In the Okta Admin Console, go to **Security → API → Authorization Servers**. Use the
`default` org authorization server, or create a dedicated custom server. **_RECOMMENDED:_** Use a
custom authorization server dedicated to this integration, so its claims, scopes, and access
policies do not affect other applications in the same Okta org.

**Step 2 –** Go to **Applications → Applications → Create App Integration → API Services**. This
application type is built for machine-to-machine scenarios (no Redirect URI or login flow fields,
unlike interactive types) and returns a **Client ID** and **Client Secret**.

**Step 3 –** Disable **DPoP** (Demonstrating Proof-of-Possession) for the App Integration. This is
a **mandatory** step: Okta may require DPoP by default for some application types, but ONTAP does
not support it and expects a plain bearer token — a DPoP-bound token will not pass validation.

**Step 4 –** Deliver the self-contained scope (see
[Self-Contained Scope Format](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/ontap.md#self-contained-scope-format))
to the token. Okta scope names are subject to OAuth 2.0 spec restrictions, and it is not
documented whether `/` is safe in a scope name, so there are two ways to deliver it:

- **Method 1 — custom claim.** On the authorization server, go to the **Claims** tab → **Add
  Claim**. Set Name (for example `NetApp`, or `scp` to merge it into the standard scope claim),
  **Include in token type: Access Token**, **Value type: Expression**, **Value:** the literal
  string in quotes, for example `"ontap:*:full-access:all:*:"`. Then, on the **Access Policies**
  tab, make sure the rule for this application has a **No user** condition and allows the
  relevant scope — Access Policy rules assume an interactive user by default, and without an
  explicit **No user** condition Okta will refuse to issue a token to this application at all.
- **Method 2 — custom scope named after the scope string** (confirmed to work). On the **Scopes**
  tab → **Add Scope**, set Name to the self-contained scope string itself, for example
  `ontap:*:full-access:all:*:` (colons are confirmed to work in Okta scope names; slashes are not
  documented as safe — verify the scope saves without a validation error). Clear **require
  consent** — irrelevant for client credentials, since there is no consent screen. On **Access
  Policies**, allow this scope for the application (same **No user** condition as Method 1). The
  Netwrix Auditor token request must then explicitly request
  `scope=ontap:*:full-access:all:*:` — unlike Method 1, Okta only copies a scope into the `scp`
  claim if the client explicitly requested it.

**_RECOMMENDED:_** Method 2 is the confirmed working configuration; use Method 1 as a fallback.

## Reference Values

| Value | Okta |
| --- | --- |
| Issuer | `https://<okta-org>.okta.com/oauth2/default` |
| Token Endpoint | `https://<okta-org>.okta.com/oauth2/default/v1/token` |
| JWKS URI | `https://<okta-org>.okta.com/oauth2/default/v1/keys` |
| Introspection endpoint | `https://<okta-org>.okta.com/oauth2/default/v1/introspect` — **supported** |

## Configure ONTAP

**Step 5 –** Create the OAuth 2.0 client configuration, either with remote introspection or with
local JWKS validation. For a full description of every parameter, see
[Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/ontap.md).
This section uses authorization model A (self-contained scope) — no `security login` steps are
required.

Introspection:

```
cluster1::> security oauth2 client create -config-name Okta \
  -issuer https://<okta-org>.okta.com/oauth2/default \
  -audience api://default \
  -client-id <client-id> \
  -introspection-endpoint https://<okta-org>.okta.com/oauth2/default/v1/introspect \
  -introspection-interval 0s \
  -application http -use-mutual-tls none
```

**NOTE:** The CLI prompts `Enter the client secret for remote introspection:` twice.

Local JWKS validation:

```
cluster1::> security oauth2 client create -config-name Okta \
  -issuer https://<okta-org>.okta.com/oauth2/default \
  -audience api://default \
  -provider-jwks-uri https://<okta-org>.okta.com/oauth2/default/v1/keys \
  -application http -use-mutual-tls none
```

**Step 6 –** Enable OAuth 2.0 and verify:

```
cluster1::> security oauth2 modify -enabled true
cluster1::> security oauth2 show
cluster1::> security oauth2 client show
```

## Example Token

A decoded Okta access token contains claims similar to:

```
iss : https://<okta-org>.okta.com/oauth2/default
aud : api://default
cid : <client-id>
scp : {ontap:*:full-access:all:*:}
sub : <client-id>
```

## Related Topics

- [OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/overview.md)
- [Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/ontap.md)
- [Okta Authorization Servers documentation](https://help.okta.com/en-us/content/topics/security/api/authorization-servers.htm)
