---
title: "Configure OAuth 2.0 on the ONTAP"
description: "Configure OAuth 2.0 on the ONTAP"
sidebar_position: 20
slug: /configuration/fileservers/netappcmode/oauth2ontap
---

# Configure OAuth 2.0 on the ONTAP

**NOTE:** This section only applies to NetApp ONTAP version 9.16.1 and higher. See
[OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/overview.md)
for prerequisites and concepts referenced below.

Netwrix Auditor requires OAuth 2.0 to be enabled and configured on the ONTAP cluster before you
configure the authentication provider (AD FS, Okta, or Microsoft Entra ID). Therefore, perform the
provider-independent steps below first, then continue with the topic for your provider.

**Step 1 –** Install the IdP root CA certificate, if your IdP serves HTTPS with an internal or
self-signed certificate:

```
cluster1::> security certificate install -type server-ca -vserver <admin-svm>
```

Paste the PEM block (`-----BEGIN CERTIFICATE-----...-----END CERTIFICATE-----`) when prompted.
**NOTE:** If your CA uses a two-tier hierarchy (offline root + issuing CA), install both
certificates, starting with the root.

**Where to get the PEM.** Three GUI-only ways to obtain the CA certificate:

- **Certificate Services Web Enrollment** (if installed): browse to `http://<ca-server>/certsrv` →
  **Download a CA certificate, certificate chain, or CRL** → encoding **Base 64** → download the
  `.cer` file.
- **Certification Authority console** on the CA server: `certsrv.msc` → right-click the CA →
  **Properties** → **General** tab → **View Certificate** → **Details** tab → **Copy to File** →
  **Base-64 encoded X.509 (.CER)**.
- **Trusted Root store on any domain-joined machine**: `certlm.msc` → **Trusted Root Certification
  Authorities** → find the CA certificate → **Copy to File** → **Base-64 encoded X.509 (.CER)**.

Open the resulting `.cer` file in Notepad — the text block it contains, headers included, is the
PEM to paste into `security certificate install -type server-ca`.

**Step 2 –** Create the ONTAP role. This step is required only for authorization models **B**
(external role mapping) and **C** (local login by claim) — skip it for Okta, which uses model A
(self-contained scope):

```
cluster1::> security login rest-role create -role full-access -api /api/svm/svms -access read_create_modify -vserver <SVM>
cluster1::> security login rest-role create -role full-access -api /api/protocols/audit -access read_create_modify -vserver <SVM>
cluster1::> security login rest-role create -role full-access -api /api/storage/volumes -access readonly -vserver <SVM>
cluster1::> security login rest-role create -role full-access -api /api/protocols/cifs/shares -access readonly -vserver <SVM>
```

These are the same least-privilege API paths as `netwrix_rest_role` in
[Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/ad/apirole.md).

**Step 3 –** Register the authorization server on the cluster with `security oauth2 client create`.
The table below lists all supported parameters:

| Parameter (CLI) | REST JSON alias | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `-config-name <name>` | `name` | Yes | Unique name of the authorization server configuration on the cluster (up to 8 configurations at a time). | `-config-name Okta` |
| `-application http` | `application` | Yes | Application type; always `http` for REST API. | `-application http` |
| `-issuer <URL>` | `issuer` | Yes | Must match the `iss` claim in the actual token byte for byte. | `-issuer https://<okta-org>.okta.com/oauth2/default` |
| `-provider-jwks-uri <URL>` | `jwks.provider_uri` | Required for local validation | URI ONTAP downloads and caches the JWKS (public keys) from, to validate the JWT signature. | `-provider-jwks-uri https://<okta-org>.okta.com/oauth2/default/v1/keys` |
| `-jwks-refresh-interval <ISO-8601>` | `jwks.refresh_interval` | Optional | How often ONTAP refreshes the cached JWKS (for example `PT1H`). | `-jwks-refresh-interval PT1H` |
| `-introspection-endpoint <URL>` | `introspection.endpoint_uri` | Required for introspection (not supported by AD FS/Entra ID) | URL ONTAP calls to verify token validity with the IdP. | `-introspection-endpoint https://<okta-org>.okta.com/oauth2/default/v1/introspect` |
| `-introspection-interval <ISO-8601>` | `introspection.interval` | Optional | How long an introspection result is cached; `0s` disables caching. | `-introspection-interval 0s` |
| `-client-id <id>` | `client_id` | Required for introspection | Client ID ONTAP uses to authenticate to the introspection endpoint. | `-client-id <client-id>` |
| `-client-secret <secret>` | `client_secret` | Required for introspection (or `-hashed-client-secret`); prompted twice by the CLI | Client secret for the introspection endpoint. | entered interactively |
| `-hashed-client-secret <hash>` | `hashed_client_secret` | Alternative to `-client-secret` | Hash of the client secret. | `-hashed-client-secret <hash>` |
| `-audience <value>` | `audience` | Recommended | Must match the `aud` claim in the token; if omitted, `aud` is not validated at all. Always verify against a real decoded token. | `-audience api://default` |
| `-use-local-roles-if-present {true\|false}` | `use_local_roles_if_present` | Optional | Switches to authorization models B/C (external role mapping or local login by claim) instead of self-contained scope. | `-use-local-roles-if-present true` |
| `-remote-user-claim <claim>` | `remote_user_claim` | Optional | Model C: which token claim to treat as the local login name (default `sub`). | `-remote-user-claim appid` |
| `-provider {auth0\|adfs\|keycloak\|entra}` | `provider` | Optional | Explicitly identifies the IdP type; for `entra`, enables automatic reading of the `roles` claim. Leave unset for untested IdPs (Okta). | `-provider adfs` |
| `-outgoing-proxy <URL>` | `outgoing_proxy` | Optional | Proxy used by ONTAP to reach the JWKS/introspection endpoint. | `-outgoing-proxy https://proxy.example.com:8080` |
| `-use-mutual-tls {none\|required\|optional}` | `use_mutual_tls` | Optional | Sender-constrained (mTLS) tokens. Use `none` unless your IdP requires mTLS-bound tokens. | `-use-mutual-tls none` |

**Step 4 –** Choose the authorization model for your provider and add the corresponding flags:

| Model | Provider in this section | Flags to add |
| --- | --- | --- |
| A — self-contained scope | Okta | none (scope is read from the `scope`/`scp` claim) |
| B — external role mapping | Microsoft Entra ID | `-use-local-roles-if-present true -provider entra`, then `security login external-role-mapping create` |
| C — local login by claim | AD FS | `-use-local-roles-if-present true -remote-user-claim appid`, then `security login create` |

### Self-Contained Scope Format

Model A (used by Okta) embeds the full role description directly in the token's `scope`/`scp`
claim, as a single string of the form:

```
ontap:<SVM>:<role-name>:<access-level>:<cluster-UUID>:<API-path>
```

| Segment | Meaning | Example |
| --- | --- | --- |
| `<SVM>` | SVM name, or `*` for all SVMs | `*` |
| `<role-name>` | Any role name (does not have to exist in ONTAP — the role is fully described by this string) | `full-access` |
| `<access-level>` | One of: `none`, `readonly`, `all`, `read_create`, `read_modify`, `read_create_modify` | `all` |
| `<cluster-UUID>` | Cluster UUID, or `*` for all clusters | `*` |
| `<API-path>` | A path such as `/api/...`; if empty, applies to all API endpoints | (empty = all API) |

A least-privilege example, scoped to the role Netwrix Auditor actually needs (see
[Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/ad/apirole.md)
for the equivalent `netwrix_rest_role` API paths), is preferred over a blanket `full-access:all`
grant in production. You do not have to build the string by hand — ONTAP provides a helper command:

```
cluster1::> security oauth2 scope cli-to-scope -role full-access -access all -api /api
```

**NOTE:** This self-contained scope string must appear verbatim in the `scope` or `scp` claim of
the token — this is where ONTAP looks for it first.

**Step 5 –** Enable OAuth 2.0 globally on the cluster:

```
cluster1::> security oauth2 modify -enabled true
```

**Step 6 –** Verify the configuration:

```
cluster1::> security oauth2 show
cluster1::> security oauth2 client show
cluster1::> security login show
cluster1::> security login external-role-mapping show
```

**CAUTION:** `-issuer` and `-audience` must match the `iss`/`aud` claims of the actual issued token
byte for byte. If `-audience` is not set, `aud` is not validated at all. Always decode a real token
before finalizing these values.

## Related Topics

- [OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/overview.md)
- [ADFS](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/adfs.md)
- [OKTA](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/oauth2/okta.md)
- [Configure Role](/docs/auditor/10.9/configuration/fileservers/netappcmode/apiaccess/ad/apirole.md)
- [security oauth2 client create — CLI reference](https://docs.netapp.com/us-en/ontap-cli/security-oauth2-client-create.html)
- [OAuth 2.0 deployment scenarios — Summary of configuration parameters](https://docs.netapp.com/us-en/ontap/authentication/oauth2-deployment-scenarios.html#summary-of-the-configuration-parameters)
