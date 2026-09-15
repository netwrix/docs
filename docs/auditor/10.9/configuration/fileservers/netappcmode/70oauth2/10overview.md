---
title: "OAuth 2.0 Authentication Overview"
description: "OAuth 2.0 Authentication Overview"
sidebar_position: 10
slug: /configuration/fileservers/netappcmode/oauth2overview
---

# OAuth 2.0 Authentication Overview

Netwrix Auditor can authenticate to NetApp ONTAP REST API using OAuth 2.0 / Modern Authentication
instead of an AD user or group account. If your organization requires Modern Authentication and
does not allow basic authentication for service accounts (for example, when Okta or AD FS is
enforced), you can configure Netwrix Auditor to obtain a short-lived access token from your
identity provider (IdP) and present it to ONTAP, instead of storing a domain account password.

With OAuth 2.0, Netwrix Auditor (the client) authenticates itself to your IdP using a Client
ID/Client Secret pair and receives a short-lived access token (a client credentials grant — there
is no interactive user in this flow). Netwrix Auditor then presents this token to ONTAP REST API in
the `Authorization: Bearer <token>` header on every request. No account password is stored in
Netwrix Auditor, and access can be revoked centrally at the IdP.

**NOTE:** OAuth 2.0 works only with the REST API — ONTAPI is not used at all when OAuth 2.0 is
configured, and no AD account is required for it. Your monitoring plan must use the REST API
collection mode.

## Terms Used in This Topic

| Term | Meaning |
| --- | --- |
| OAuth 2.0 | Authorization protocol: lets an application obtain limited access to a resource (or act on its own behalf, as in client credentials) without exchanging a resource owner's password. |
| OIDC (OpenID Connect) | A layer on top of OAuth 2.0 used for authentication; adds `id_token` and a set of standard claims. |
| JWT (JSON Web Token) | The token format: a signed JSON object of three parts (header.payload.signature) — this is the form in which ONTAP receives and validates the access token. |
| Claim | A single field inside a JWT — a name/value pair describing something about the token (who issued it, who it is for, what it allows). |
| Issuer (`iss`) | A claim, and an identically named ONTAP parameter — who issued the token. |
| Audience (`aud`) | A claim, and an identically named ONTAP parameter — who the token is intended for. |
| Scope | The set of permissions claimed by the token; in this section, this includes the ONTAP-specific self-contained scope format (see [Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/20ontap.md#self-contained-scope-format)). |
| Bearer token | A token that is sufficient to present in the `Authorization: Bearer <token>` header — no additional proof of possession is required (unlike DPoP/mTLS). |
| Client Credentials Grant | The OAuth 2.0 flow in which the client (the application) authenticates with its own Client ID/Secret and receives a token for itself — no human user is involved. This is the flow used throughout this section. |
| Client ID / Client Secret | The public identifier and secret of the client application, used to authenticate to the IdP. |
| Token Endpoint | The IdP URL that the client calls to request a token. |
| JWKS (JSON Web Key Set) | The provider's set of public keys, used by ONTAP to locally validate the JWT signature (`-provider-jwks-uri`). |
| Introspection (RFC 7662) | Validating a token by calling the authorization server in real time, instead of validating the signature locally. |
| IdP (Identity Provider) | The authentication/authorization server — in this section, AD FS, Okta, or Microsoft Entra ID. |
| Self-contained scope | An ONTAP-specific role string of the form `ontap:<SVM>:<role>:<access>:<cluster-uuid>:<api-path>`, embedded directly in the `scope`/`scp` claim. |
| External role mapping | An ONTAP mechanism that maps a role name from a token claim (for example `roles`) to a locally created ONTAP role. |

## How ONTAP Validates a Token

ONTAP supports two ways to validate an access token:

- **Local validation** — ONTAP caches the provider's JWKS (`-provider-jwks-uri`) and validates the
  JWT signature itself. Works with all three providers covered in this section.
- **Remote introspection** (RFC 7662) — ONTAP calls the IdP on every request. Supported by Okta;
  **not supported by AD FS or Microsoft Entra ID** — neither implements RFC 7662 Token
  Introspection.

**_RECOMMENDED:_** Start with local validation (JWKS) unless you have a specific reason to use
introspection.

## How ONTAP Decides What the Token Is Allowed to Do

ONTAP determines the client's role using one of three mutually exclusive models, depending on what
the provider can put into the token:

- **A. Self-contained scope.** The full role description string is embedded directly in the
  `scope`/`scp` claim of the token; nothing needs to be created in ONTAP in advance. Used for
  **Okta** in this section.
- **B. External role mapping.** The provider places a short role name in a claim (for example
  `roles`). A local ONTAP role is created in advance, together with a mapping "role name from
  token → local ONTAP role". Used for **Microsoft Entra ID** in this section.
- **C. Local login matched by a claim (`-remote-user-claim`).** ONTAP reads the value of a
  specified claim (for example `appid`) and looks up a **local** account or group with exactly that
  name. Used for **AD FS** in this section.

## Limitations

- ONTAPI does not support OAuth 2.0 — only REST API does.
- DPoP and mutual-TLS-constrained (sender-constrained) tokens are not supported by ONTAP.
- Okta is not on NetApp's officially tested provider list — see
  [OKTA](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/40okta.md)
  for details.

## Related Topics

- [Configure API Access](/docs/auditor/10.9/configuration/fileservers/netappcmode/20webaccess.md)
- [Configure Cluster](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/20ontap.md)
- [ADFS](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/30adfs.md)
- [OKTA](/docs/auditor/10.9/configuration/fileservers/netappcmode/70oauth2/40okta.md)
- [Overview of OAuth 2.0 in ONTAP](https://docs.netapp.com/us-en/ontap/authentication/overview-oauth2.html)
- [OAuth 2.0 deployment scenarios — Summary of configuration parameters](https://docs.netapp.com/us-en/ontap/authentication/oauth2-deployment-scenarios.html#summary-of-the-configuration-parameters)
- [Self-contained OAuth 2.0 scopes](https://docs.netapp.com/us-en/ontap/authentication/oauth2-sc-scopes.html)
- [Prepare to deploy OAuth 2.0](https://docs.netapp.com/us-en/ontap/authentication/oauth2-prepare.html)
