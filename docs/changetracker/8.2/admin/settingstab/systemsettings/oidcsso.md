---
title: "Single Sign-On (OIDC)"
description: "Configure generic OpenID Connect (OIDC) single sign-on for the Change Tracker Hub on-premises deployment"
sidebar_position: 20
---

# Single Sign-On (OIDC)

Netwrix Change Tracker supports single sign-on (SSO) through any standards-compliant OpenID Connect
(OIDC) identity provider (IdP). Compatible providers include Keycloak, PingFederate, Active
Directory Federation Services (ADFS), OneLogin, Okta, Auth0, and others.

When OIDC is enabled, the login page displays an SSO button that redirects users to the IdP for
authentication. After successful authentication, the IdP redirects back to the Hub, which logs the
user in automatically. Standard username/password login remains available alongside it.

On a user's first login, Change Tracker automatically creates a local account — no
pre-registration is required. On subsequent logins, the user's roles are updated to reflect any
changes made in the IdP since their last login.

:::note
OIDC SSO is available for **on-premises deployments only**. SaaS deployments use a separate
authentication pathway managed by Netwrix.
:::

## Before you begin

Collect the following from your identity provider before configuring Change Tracker:

| Item | Description | Where to find it |
|---|---|---|
| **Client ID** | The unique identifier your IdP assigns to the Change Tracker application registration | IdP application / client settings |
| **Client Secret** | A shared secret used to exchange an authorization code for tokens | IdP application / client settings |
| **Authorization endpoint URL** | The URL users are redirected to for authentication | IdP documentation or discovery document |
| **Token endpoint URL** | The URL Change Tracker calls to exchange an authorization code for tokens | IdP documentation or discovery document |
| **UserInfo endpoint URL** | The URL Change Tracker calls to retrieve user profile claims | IdP documentation or discovery document |
| **Roles claim key** | The claim key in the token or UserInfo response that contains role assignments | IdP documentation or token inspection — see [The rolesClaimKey setting](#the-rolesclaimkey-setting) |

:::note
Most OIDC-compliant IdPs publish a discovery document at
`https://<your-idp>/.well-known/openid-configuration` that lists all endpoint URLs. Change Tracker
doesn't use this document automatically — endpoint URLs must be supplied individually — but it can
save time locating them manually.
:::

## Set up your identity provider

Before Change Tracker can use your IdP for authentication, register Change Tracker as an
application (also called a "client" or "relying party") in your IdP and configure it to return
role information.

### Register Change Tracker as an OIDC client

Create a new application or client registration in your IdP with the following settings:

- **Application type / grant type**: Confidential client using the **Authorization Code** flow
- **Redirect URI (callback URL)**: `https://<your-hub-host>/api/auth/oidc`
  - This must exactly match the address users use to reach Change Tracker Hub. If Hub is served on
    a non-standard port, include it: `https://hub.example.com:5001/api/auth/oidc`
- **Allowed scopes**: At minimum, `openid`, `profile`, and `email`. Add additional scopes if your
  IdP requires them to include role or group claims in the token.

After creating the registration, record the **Client ID** and generate a **Client Secret**.

### Configure role claims

Change Tracker reads role assignments from a configurable claim in the token or UserInfo response.
Configure your IdP to include role or group membership in that response:

1. Define the roles or groups in your IdP that correspond to Change Tracker roles (for example, an
   Active Directory group `CT-Administrators` that maps to the Change Tracker `admin` role).
2. Configure the IdP to include those roles in the token or UserInfo response.
3. Note the exact claim key under which roles appear. This is the `rolesClaimKey` value — see
   [The rolesClaimKey setting](#the-rolesclaimkey-setting).

**Auth0**: Auth0 doesn't include role assignments in the OIDC token by default. Create a
**Post-Login Action** in the Auth0 dashboard to inject the user's roles as a custom claim:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://your-domain.com/';
  api.idToken.setCustomClaim(namespace + 'roles', event.authorization.roles);
};
```

The namespace prefix can be any URL-shaped string. Set `rolesClaimKey` in Change Tracker to the
full claim key, for example `https://your-domain.com/roles`.

**Keycloak**: Role claims are typically available under `realm_access.roles` or
`resource_access.<client-id>.roles` in the access token, but the UserInfo endpoint may not include
them by default. Create a **Client Scope** with a User Client Role mapper or User Realm Role
mapper configured to add roles to the UserInfo response, then add that scope to your client. Set
`rolesClaimKey` to the claim name configured in the mapper.

### Verify your IdP configuration

Before configuring Change Tracker, confirm that your IdP returns the expected claims. Decode a
sample ID token at [jwt.io](https://jwt.io) or inspect the UserInfo endpoint response with a tool
such as Postman, and verify that the roles claim is present with the expected values.

---

## Configure OIDC in Change Tracker

All OIDC settings live under the `security:oauth:oidc` section of the Hub's
`appsettings.Production.json` configuration file.

### Configuration keys

| Key | Required | Default | Description |
|---|---|---|---|
| `enabled` | Yes | `false` | Set to `true` to enable OIDC SSO and show the SSO button on the login page. |
| `clientId` | Yes | — | The client (application) ID registered with the IdP. |
| `clientSecret` | Yes | — | The client secret issued by the IdP. |
| `authorizeUrl` | Yes | — | The IdP's authorization endpoint URL. |
| `accessTokenUrl` | Yes | — | The IdP's token endpoint URL. |
| `userProfileUrl` | Yes | — | The IdP's UserInfo endpoint URL. |
| `callbackUrl` | No | `https://<hub-host>/api/auth/oidc` | Override the callback URL registered with the IdP. Set this only if the Hub is behind a reverse proxy or load balancer with a different external URL. |
| `scopes` | No | `openid profile email` | Space-separated list of OAuth2 scopes to request. |
| `buttonLabel` | No | `Sign In with SSO` | The label on the SSO button. Set this to something meaningful to your users, such as `Sign In with Keycloak`. |
| `rolesClaimKey` | No | `roles` | The claim key that contains role assignments. See [The rolesClaimKey setting](#the-rolesclaimkey-setting). |

### Apply the configuration

**Option 1 — Maintenance App (recommended)**

Run the Maintenance App with `--updateAppSettings` and `--targetEnvironment Production` to write
the values directly to `appsettings.Production.json`:

```
NNT.Hub.Service.Maintenance.App.exe --updateAppSettings --targetEnvironment Production ^
  --oidc-enabled true ^
  --oidc-client-id "<your-client-id>" ^
  --oidc-client-secret "<your-client-secret>" ^
  --oidc-authorize-url "https://idp.example.com/authorize" ^
  --oidc-access-token-url "https://idp.example.com/token" ^
  --oidc-user-profile-url "https://idp.example.com/userinfo" ^
  --oidc-roles-claim-key "roles" ^
  --oidc-button-label "Sign In with SSO"
```

Available flags:

| Flag | Setting |
|---|---|
| `--oidc-enabled` | `enabled` |
| `--oidc-client-id` | `clientId` |
| `--oidc-client-secret` | `clientSecret` |
| `--oidc-authorize-url` | `authorizeUrl` |
| `--oidc-access-token-url` | `accessTokenUrl` |
| `--oidc-user-profile-url` | `userProfileUrl` |
| `--oidc-callback-url` | `callbackUrl` |
| `--oidc-scopes` | `scopes` |
| `--oidc-button-label` | `buttonLabel` |
| `--oidc-roles-claim-key` | `rolesClaimKey` |

After running the Maintenance App, restart the Hub service for the changes to take effect.

**Option 2 — Edit appsettings.Production.json directly**

Open `<Hub install directory>\Configs\appsettings.Production.json` and add or update the OIDC
section:

```json
{
  "security": {
    "oauth": {
      "oidc": {
        "enabled": "true",
        "clientId": "<your-client-id>",
        "clientSecret": "<your-client-secret>",
        "authorizeUrl": "https://idp.example.com/authorize",
        "accessTokenUrl": "https://idp.example.com/token",
        "userProfileUrl": "https://idp.example.com/userinfo",
        "scopes": "openid profile email",
        "buttonLabel": "Sign In with SSO",
        "rolesClaimKey": "roles"
      }
    }
  }
}
```

All values — including booleans — are strings in the configuration file (note `"true"`, not
`true`). Restart the Hub service after saving.

---

## The rolesClaimKey setting

Role or group membership isn't a standard OIDC claim — there is no single agreed-upon name for
it, and different identity providers use different keys. The `rolesClaimKey` setting tells Change
Tracker which claim key to read when resolving a user's role assignments.

The default value is `roles`, which works when the IdP returns roles under that exact key.
However:

- Some IdPs use a different key entirely. For example, ADFS may publish group memberships under
  `groups`, or a Keycloak mapper may use a custom name.
- Some IdPs require custom claims to be namespaced with a URL prefix to prevent collisions. Auth0,
  for example, requires the full namespaced string — such as `https://your-domain.com/roles` — as
  the claim key.

To find the correct value, inspect the raw token or UserInfo response from your IdP and locate the
key that contains a list of role or group names. Use that exact string as `rolesClaimKey`.

**Example — standard key:**

```json
{
  "sub": "abc123",
  "email": "alice@example.com",
  "roles": ["CT-Administrators", "CT-Users"]
}
```

`rolesClaimKey` should be `roles` (the default).

**Example — namespaced key (Auth0):**

```json
{
  "sub": "auth0|abc123",
  "email": "alice@example.com",
  "https://your-domain.com/roles": ["CT-Administrators"]
}
```

`rolesClaimKey` must be set to `https://your-domain.com/roles` — the entire string including the
URL prefix.

---

## Role mapping

When a user logs in through OIDC, Change Tracker reads the roles claim from the IdP response and
resolves each role to a Change Tracker role using this sequence:

1. If an explicit mapping is configured for the IdP role name, the mapped Change Tracker role is
   used.
2. If no mapping exists but the IdP role name exactly matches a known Change Tracker role name, it
   is used directly.
3. If neither condition is met, Change Tracker discards the role and writes a warning to the Hub
   log.

If no valid roles remain after this process, Change Tracker assigns the user the default `user`
role.

Change Tracker re-evaluates role assignments on every login. Role changes made in the IdP take
effect the next time the user logs in to Change Tracker.

### Change Tracker roles

| Role | Description |
|---|---|
| `admin` | Full administrative access. Can manage all devices, policies, users, and system settings. |
| `user` | Standard read access (default for users with no valid roles). |
| `useradmin` | Can create and manage user accounts within their groups. |
| `changeapprover` | Can manage planned change windows for their groups. |
| `reportadmin` | Can view and manage reports across all users. |
| `itsm` | Provides permissions required for ITSM integration. |
| `licenseupdater` | Can apply license updates. |

:::note
The `agent` role is reserved for device monitoring agents and can't be assigned via OIDC.
:::

### Configure role mappings

Role mapping is needed when your IdP uses role or group names that don't match Change Tracker role
names. For example, if your Active Directory group is named `CT-Administrators` but you want those
users to get the Change Tracker `admin` role, define a mapping.

Change Tracker stores mappings as key-value pairs in **System Settings**. Each mapping uses the key
format `oidc:rolemap:<IdP-role-name>`, with the value set to the target Change Tracker role name.

**Step 1 –** In Change Tracker, go to **Administration** > **System Settings**.

**Step 2 –** Add a new entry for each mapping. For example:

| Key | Value |
|---|---|
| `oidc:rolemap:CT-Administrators` | `admin` |
| `oidc:rolemap:CT-Users` | `user` |
| `oidc:rolemap:CT-ChangeApprovers` | `changeapprover` |
| `oidc:rolemap:CT-UserAdmins` | `useradmin` |

**Step 3 –** Save. Mappings take effect on the user's next login — no Hub restart is required.

:::warning
Key matching is case-sensitive. The IdP role name in the key must exactly match the value returned
in the token. For example, `oidc:rolemap:CT-Administrators` matches only `CT-Administrators`, not
`ct-administrators`.
:::

---

## User provisioning

### First login

When an OIDC user logs in for the first time, Change Tracker automatically creates a local account
for them. No pre-registration is required.

The new account is created with:

| Field | Source |
|---|---|
| **Username** | `preferred_username` claim; falls back to `email` if not present |
| **Email** | `email` claim |
| **Display name** | `name` claim; falls back to `given_name` |
| **Roles** | Resolved from the IdP token via the role mapping process |

### Subsequent logins

On every login, Change Tracker re-reads the user's roles from the IdP and updates the local
account if they have changed.

---

## Username conflicts

Change Tracker checks for username conflicts at login time and rejects the login in the following
situations.

**Conflict with a system account**

If the IdP returns a `preferred_username` that matches a reserved Change Tracker system account
name (such as `admin` or `agent`), Change Tracker rejects the login.

To resolve: update the user's `preferred_username` in the IdP to a different value.

**Conflict with an existing local account**

If the IdP returns a `preferred_username` that matches an existing Change Tracker account that you
created locally (not via OIDC), Change Tracker rejects the login.

To resolve, update the existing local account's email address to match the email returned by the
IdP. Change Tracker will then recognise the account by email address on the next OIDC login and
link the OIDC identity to it, rather than attempting to create a duplicate.

**Step 1 –** Log in to Change Tracker as an administrator.

**Step 2 –** Go to **Administration** > **Users**.

**Step 3 –** Find the existing account and update its email address to match exactly what the IdP
returns.

The user can then log in via OIDC successfully.

---

## Login experience

### SSO button

When OIDC is enabled, a **Sign In with SSO** button (or the custom label configured via
`buttonLabel`) appears on the Change Tracker login page alongside the standard username/password
form. OIDC doesn't replace existing authentication methods.

### Forced re-authentication

Change Tracker always includes the `prompt=login` parameter in authorization requests to the IdP.
This instructs the IdP to always prompt for credentials, even if the user already has an active
IdP session in the browser.

This is intentional behavior for a security monitoring product: Change Tracker is often deployed
on shared workstations where multiple users may use the same browser. Without forced
re-authentication, the IdP could silently authenticate a second user as the previous user.

### Multi-factor authentication

Change Tracker respects MFA enforced by the IdP. If your IdP requires MFA as part of the
authentication flow, the IdP prompts users for their second factor before redirecting them back to
Change Tracker. MFA enforcement is the responsibility of the IdP — Change Tracker doesn't enforce
its own MFA for OIDC-authenticated users.

If the IdP includes an `amr` (Authentication Methods References) claim in the ID token, Change
Tracker reflects the MFA status in the user's session. No additional configuration is required.

---

## Limitations

The following items aren't supported in the current release:

- **Automatic OIDC endpoint discovery**: Endpoint URLs must be supplied individually. Automatic
  discovery from a `.well-known/openid-configuration` URL isn't supported.
- **Multiple simultaneous OIDC providers**: Only one OIDC provider can be configured at a time.
- **Group-to-device group mapping**: Role mapping assigns Change Tracker roles only. Mapping IdP
  groups to Change Tracker device access groups isn't supported.
- **SAML**: SAML-based SSO isn't supported.

---

## Troubleshooting

**SSO button doesn't appear on the login page**

- Verify `enabled` is set to `"true"` under `security:oauth:oidc` in
  `appsettings.Production.json`.
- Confirm the Hub service has been restarted after the configuration change.
- OIDC SSO isn't available in SaaS deployments. Verify you're running an on-premises Hub.

**Login redirects to the IdP but fails to return**

- Verify the callback URL registered in your IdP exactly matches
  `https://<hub-host>/api/auth/oidc`. A mismatch in protocol, hostname, port, or path causes the
  IdP to reject the redirect.
- If the Hub is behind a reverse proxy, set the `callbackUrl` configuration key to the external
  URL and ensure the IdP's registered redirect URI matches it.
- Check the IdP's logs for error details.

**User logs in successfully but has incorrect permissions**

- Check the Hub's `rolling-log.txt` for warnings from `OidcRoleMappingService`. The log shows
  which IdP roles were received and whether they were mapped, matched directly, or discarded.
- Verify the `rolesClaimKey` value exactly matches the claim key the IdP uses, including any URL
  namespace prefix.
- Confirm that the IdP is actually including role claims in its response. Decode a sample token at
  [jwt.io](https://jwt.io) and verify the roles claim is present.
- If using role mappings, verify the keys in System Settings are spelled correctly and match the
  IdP role names exactly (case-sensitive).

**Login fails with "username is reserved for a system account"**

- The user's `preferred_username` in the IdP matches a reserved Change Tracker account name.
  Update it in the IdP.

**Login fails with "username already in use by an existing Change Tracker account"**

- An existing local Change Tracker account has the same username. Update that account's email
  address in Change Tracker to match what the IdP returns — see
  [Username conflicts](#username-conflicts).

**Roles aren't updating after being changed in the IdP**

- Roles are re-synced on every login. The user must log out and log back in via OIDC for role
  changes to take effect.
- Verify that the updated roles are present in the IdP's token or UserInfo response.
