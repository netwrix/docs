---
title: "Single Sign-On (OIDC)"
description: "Configure generic OpenID Connect (OIDC) single sign-on for the ChangeTracker Hub on-premises deployment"
sidebar_position: 20
---

# Single Sign-On (OIDC)

Netwrix Change Tracker supports single sign-on (SSO) through any standards-compliant OpenID Connect
(OIDC) identity provider (IdP). When OIDC is enabled, the login page displays an SSO button that
redirects users to the IdP for authentication. After successful authentication, the IdP redirects
back to the Hub and the user is logged in automatically.

OIDC SSO supports automatic role assignment. Roles returned by the IdP in the userinfo response are
mapped to ChangeTracker roles, either directly (if the IdP role names match ChangeTracker role
names) or through configurable role mappings.

:::note
OIDC SSO is available for **on-premises deployments only**. SaaS deployments use Auth0 and don't
require this configuration.
:::

## Prerequisites

- A registered application (client) in the OIDC identity provider with:
  - **Client ID** and **Client Secret** (authorization code flow)
  - **Redirect / callback URI** set to `https://<hub-host>:<port>/auth/oidc`
  - Scopes: `openid`, `profile`, and `email` at minimum
- The following endpoint URLs from the IdP:
  - Authorization endpoint
  - Token endpoint
  - Userinfo endpoint

:::info
Change Tracker doesn't use OIDC Discovery (`.well-known/openid-configuration`). You must provide
each endpoint URL individually.
:::

## Configuration

OIDC is configured in the Hub's `appsettings.Production.json` file, located at:

```
<Hub install directory>\Configs\appsettings.Production.json
```

All OIDC settings are nested under the `security:oauth:oidc` section.

### Configuration keys

| Key | Required | Default | Description |
|---|---|---|---|
| `enabled` | Yes | `false` | Set to `true` to enable OIDC SSO. |
| `authorizeUrl` | Yes | — | The IdP's authorization endpoint URL. |
| `accessTokenUrl` | Yes | — | The IdP's token endpoint URL. |
| `userProfileUrl` | Yes | — | The IdP's userinfo endpoint URL. |
| `callbackUrl` | No | — | The Hub's OIDC callback URL. Defaults to `https://<hub-host>/auth/oidc`. Override this if the Hub is behind a reverse proxy or load balancer with a different external URL. |
| `clientId` | Yes | — | The client (application) ID registered with the IdP. |
| `clientSecret` | Yes | — | The client secret issued by the IdP. |
| `scopes` | No | `openid profile email` | Space-separated list of OIDC scopes to request. |
| `buttonLabel` | No | `Sign In with SSO` | The text displayed on the SSO button on the login page. |
| `rolesClaimKey` | No | `roles` | The claim key in the userinfo response that contains role assignments. Use a namespaced URL for IdPs that require custom claim namespacing (e.g. `https://example.com/roles` for Auth0). |

### Example configuration

Add the following section to `appsettings.Production.json`:

```json
{
  "security": {
    "oauth": {
      "oidc": {
        "enabled": "true",
        "authorizeUrl": "https://idp.example.com/authorize",
        "accessTokenUrl": "https://idp.example.com/oauth/token",
        "userProfileUrl": "https://idp.example.com/userinfo",
        "clientId": "your-client-id",
        "clientSecret": "your-client-secret",
        "scopes": "openid profile email",
        "buttonLabel": "Sign In with Contoso",
        "rolesClaimKey": "roles"
      }
    }
  }
}
```

### Applying the configuration

After editing `appsettings.Production.json`, restart the Hub service for the changes to take
effect.

Alternatively, use the Hub Maintenance App to configure OIDC from the command line:

```powershell
NNT.Hub.Service.Maintenance.App.exe `
  --oidc-enabled true `
  --oidc-authorize-url "https://idp.example.com/authorize" `
  --oidc-access-token-url "https://idp.example.com/oauth/token" `
  --oidc-user-profile-url "https://idp.example.com/userinfo" `
  --oidc-client-id "your-client-id" `
  --oidc-client-secret "your-client-secret" `
  --oidc-scopes "openid profile email" `
  --oidc-button-label "Sign In with Contoso" `
  --oidc-roles-claim-key "roles"
```

The Maintenance App writes the configuration directly to the Hub's settings and doesn't require
a manual restart.

## Role mapping

When a user logs in through OIDC, the Hub reads the roles claim from the IdP's userinfo response
and maps each role to a ChangeTracker role. The mapping follows this order:

1. **Explicit mapping** — If a mapping exists in the Hub configuration database for the IdP role
   name, the mapped ChangeTracker role is used.
2. **Direct match** — If no explicit mapping exists but the IdP role name matches a known
   ChangeTracker role exactly, it is used as-is.
3. **Discarded** — If neither condition is met, the role is discarded with a warning in the Hub
   log.

If no valid roles remain after mapping, the user is assigned the default **User** role.

### ChangeTracker roles

| Role | Description |
|---|---|
| `admin` | Full administrator access. |
| `user` | Read-only access (default for unmapped users). |
| `useradmin` | Can create and edit user accounts within their groups. |
| `changeapprover` | Manages planned changes for their groups. |
| `reportadmin` | Can view and edit reports across all users. |
| `itsm` | ITSM synchronisation permissions. |
| `licenseupdater` | Can update the product license. |

### Configuring role mappings

Role mappings are stored as key-value pairs in the Hub configuration database. Each mapping
uses the key format `oidc:rolemap:<idp-role-name>` with the value set to the target
ChangeTracker role.

To add a role mapping, insert a record into the `HubConfigData` MongoDB collection:

```javascript
db.HubConfigData.insertOne({
  _id: new ObjectId().toString(),
  Key: "oidc:rolemap:Engineering",
  Value: "user",
  Encrypted: false
})
```

This example maps the IdP role `Engineering` to the ChangeTracker `user` role.

:::warning
When writing to `HubConfigData` via `mongosh`, always set `_id` to `new ObjectId().toString()`.
Using an auto-generated `ObjectId` causes the Hub to fail when deserialising the collection.
:::

## Multi-factor authentication detection

If the IdP includes an `amr` (Authentication Methods References) claim in the ID token,
Change Tracker detects whether multi-factor authentication (MFA) was used during the login.
The user's session reflects the MFA status — no additional configuration is required.

## Troubleshooting

**SSO button doesn't appear on the login page**

- Verify `enabled` is set to `true` under `security:oauth:oidc` in `appsettings.Production.json`.
- Confirm the Hub has been restarted after the configuration change.
- OIDC SSO isn't available in SaaS deployments. Verify you're running an on-premises Hub.

**Login redirects to the IdP but fails to return**

- Verify the callback URL is correctly registered in the IdP as `https://<hub-host>:<port>/auth/oidc`.
- If the Hub is behind a reverse proxy, set the `callbackUrl` configuration key to the external URL.
- Check the IdP's logs for error details.

**User logs in successfully but has incorrect permissions**

- Check the Hub's `rolling-log.txt` for warnings from `OidcRoleMappingService`. The log shows
  which IdP roles were received and whether they were mapped, matched directly, or discarded.
- Verify the `rolesClaimKey` matches the claim key the IdP actually uses. Some IdPs (e.g. Auth0)
  namespace custom claims with a URL prefix.
- Add explicit role mappings for IdP roles that don't match ChangeTracker role names directly.

**Error page shown after login attempt**

- The error description is displayed in the URL. Check for common issues:
  - `unauthorized` — the IdP returned valid credentials but the user's email conflicts with an
    existing local account or a protected system account.
  - IdP-side errors (invalid scope, expired client secret) appear with the IdP's error description.
