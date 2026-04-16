---
title: "Configure Identity Provider"
description: "Deployment steps for connecting an Identity Provider to Access Analyzer using the installer"
sidebar_position: 50
---

# Configure Identity Provider

:::note
This article is for the team performing the Access Analyzer deployment. It covers the installer flags required to connect an identity provider at install time. If you are an application administrator setting up user accounts after the IdP connection is in place, see [Identity Provider](../configurations/identity-provider.md).
:::

Access Analyzer supports connecting an identity provider (IdP) so users authenticate through your organization's directory rather than with local credentials. IdP federation is **optional** — if you omit `--idp-type` at install time, Access Analyzer is deployed without Keycloak and uses local accounts only.

When `--idp-type` is configured, the installer automatically:

1. Deploys Keycloak (v26.5.3) as part of the cluster
2. Waits for Keycloak to become healthy
3. Creates the IdP federation using the flags you provided
4. Enables OIDC authentication in the Access Analyzer application

## Before you begin

Confirm the following before running the installer with IdP flags:

- The Access Analyzer cluster system requirements are met — see [Hardware and System Requirements](system/requirements.md)
- You have collected the required credentials from the customer's IdP or directory administrator (see [Identity Provider — Part 1](../configurations/identity-provider.md#part-1-configure-your-identity-provider))
- For LDAP/AD: the Access Analyzer server has network access to the LDAP server on port 636 (LDAPS) or 389 (LDAP)
- For a private CA certificate: you have the PEM file available on the server and will pass `--ca-bundle <path>` to the installer

## Choosing an IdP type

| `--idp-type` value | Use case |
| --- | --- |
| `entra-oidc` | Microsoft Entra ID via OIDC (recommended for Entra ID) |
| `entra-saml` | Microsoft Entra ID via SAML 2.0 |
| `oidc` | Generic OIDC — Okta, Auth0, Ping Identity, and others |
| `saml` | Generic SAML 2.0 — Okta, ADFS, and others |
| `ad` | Active Directory via LDAP (on-premises) |
| `ldap` | Generic LDAP |

## Configure Entra ID (OIDC)

**Required flags:** `--idp-type entra-oidc`, `--idp-alias`, `--entra-tenant-id`, `--oidc-client-id`

**Prompted secret:** OIDC client secret — entered interactively, never written to disk or logs

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type entra-oidc \
  --idp-alias "Entra ID" \
  --entra-tenant-id <tenant-id> \
  --oidc-client-id <client-id>
```

Replace `<tenant-id>` with the customer's Azure AD tenant GUID and `<client-id>` with the Application (client) ID from their Azure App Registration. When prompted, paste the client secret.

The installer constructs the OIDC discovery URL automatically from `--entra-tenant-id`.

## Configure Entra ID (SAML)

**Required flags:** `--idp-type entra-saml`, `--idp-alias`, `--entra-tenant-id`

**No secret required** — SAML uses the signing certificate embedded in the Entra ID SAML metadata.

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type entra-saml \
  --idp-alias "Entra ID" \
  --entra-tenant-id <tenant-id>
```

Replace `<tenant-id>` with the customer's Azure AD tenant GUID. The SSO URL and entity ID are constructed automatically.

## Configure Generic OIDC

Use this type for Okta, Auth0, Ping Identity, and any other OIDC-compliant provider.

**Required flags:** `--idp-type oidc`, `--idp-alias`, `--oidc-discovery-url`, `--oidc-client-id`

**Prompted secret:** OIDC client secret

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type oidc \
  --idp-alias "Okta" \
  --oidc-discovery-url https://<your-okta-domain>/.well-known/openid-configuration \
  --oidc-client-id <client-id>
```

Replace the discovery URL with the OpenID Connect discovery endpoint for your provider. When prompted, paste the client secret.

## Configure Generic SAML

Use this type for Okta, ADFS, and any other SAML 2.0-compliant provider.

**Required flags:** `--idp-type saml`, `--idp-alias`, `--saml-sso-url`, `--saml-entity-id`, `--saml-signing-cert`

**Optional:** `--saml-email-attribute` (default: `email`) — the SAML attribute carrying the user's email address

**No secret required**

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type saml \
  --idp-alias "Okta" \
  --saml-sso-url https://<your-idp>/sso/saml \
  --saml-entity-id https://<your-idp>/saml/metadata \
  --saml-signing-cert /path/to/signing-cert.pem
```

Pass the path to the signing certificate PEM file. The installer strips the `-----BEGIN CERTIFICATE-----` headers automatically before passing the value to Keycloak.

If your IdP sends the email address under a different attribute name (such as `mail` or a URI), add `--saml-email-attribute <attribute-name>`.

## Configure Active Directory

**Required flags:** `--idp-type ad`, `--idp-alias`, `--ldap-url`, `--ldap-bind-dn`, `--ldap-users-dn`

**Optional:** `--ldap-email-attribute` (default: `mail`)

**Prompted secret:** LDAP bind credential — entered interactively, never written to disk or logs

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type ad \
  --idp-alias "Active Directory" \
  --ldap-url ldaps://dc.corp.example.com:636 \
  --ldap-bind-dn "CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com" \
  --ldap-users-dn "OU=Users,DC=corp,DC=example,DC=com"
```

Replace the LDAP URL with the customer's domain controller address (LDAPS on port 636 recommended). When prompted, enter the bind account password.

The `ad` type uses Active Directory–specific defaults: `sAMAccountName` for the username attribute and `objectGUID` for the UUID attribute.

## Configure Generic LDAP

Use this type for OpenLDAP and other non-AD LDAP directories.

**Required flags:** `--idp-type ldap`, `--idp-alias`, `--ldap-url`, `--ldap-bind-dn`, `--ldap-users-dn`

**Optional:** `--ldap-email-attribute` (default: `mail`)

**Prompted secret:** LDAP bind credential

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --idp-type ldap \
  --idp-alias "LDAP" \
  --ldap-url ldaps://ldap.corp.example.com:636 \
  --ldap-bind-dn "CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com" \
  --ldap-users-dn "OU=Users,DC=corp,DC=example,DC=com"
```

The `ldap` type uses generic LDAP defaults: `uid` for the username attribute and `entryUUID` for the UUID attribute.

## Recover from a failed IdP configuration

If IdP configuration fails after the cluster is already running, use `--configure-idp-only` to retry without reinstalling K3s or ArgoCD:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --configure-idp-only \
  --idp-type entra-oidc \
  --idp-alias "Entra ID" \
  --entra-tenant-id <tenant-id> \
  --oidc-client-id <client-id>
```

:::note
`--configure-idp-only` does not require `--license-key`. It skips all infrastructure provisioning steps and runs only the IdP configuration phase.
:::

## Next steps

After the installer completes IdP configuration, the application administrator must pre-provision user accounts in Access Analyzer before any users can sign in. See [Identity Provider](../configurations/identity-provider.md#pre-provision-user-accounts).

## Manual configuration reference

The installer automates all of the following steps. Use this section only if you need to reconfigure or troubleshoot an IdP connection on a cluster that is already running, without re-running the installer.

### Authenticate to the Keycloak Admin CLI

Run this step before any manual configuration. It authenticates the Keycloak Admin CLI inside the pod using the bootstrap credentials injected at deploy time.

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- bash -c '
  /opt/keycloak/bin/kcadm.sh config credentials \
    --server http://localhost:8080/auth \
    --realm master \
    --user "$KC_BOOTSTRAP_ADMIN_USERNAME" \
    --password "$KC_BOOTSTRAP_ADMIN_PASSWORD"'
```

:::note
The bootstrap admin credentials are read from environment variables already present in the pod. Don't pass them as command-line arguments — they would appear in Kubernetes audit logs.
:::

### Configure Entra ID (OIDC) — manual

**Required values:** Tenant ID, Client ID, Client secret (from the customer's Azure App Registration)

**Step 1 — Create the OIDC identity provider**

```bash
kubectl exec -i -n access-analyzer statefulset/keycloak -- bash <<EOF
/opt/keycloak/bin/kcadm.sh create identity-provider/instances -r dspm \
  -s alias=entra-oidc \
  -s providerId=oidc \
  -s enabled=true \
  -s trustEmail=true \
  -s 'firstBrokerLoginFlowAlias=first broker login' \
  -s 'config.useDiscoveryEndpoint=true' \
  -s 'config.discoveryEndpoint=https://login.microsoftonline.com/<tenant-id>/v2.0/.well-known/openid-configuration' \
  -s 'config.clientId=<client-id>' \
  -s 'config.clientSecret=<client-secret>' \
  -s 'config.defaultScope=openid email profile'
EOF
```

**Step 2 — Refresh OIDC discovery endpoints**

```bash
kubectl exec -i -n access-analyzer statefulset/keycloak -- bash <<EOF
DISCOVERY=\$(/opt/keycloak/bin/kcadm.sh create identity-provider/import-config -r dspm \
  -s fromUrl='https://login.microsoftonline.com/<tenant-id>/v2.0/.well-known/openid-configuration' \
  -s providerId=oidc -o)

AUTH_URL=\$(echo "\$DISCOVERY" | grep '"authorizationUrl"' | sed 's/.*: *"\([^"]*\)".*/\1/')
TOKEN_URL=\$(echo "\$DISCOVERY" | grep '"tokenUrl"' | sed 's/.*: *"\([^"]*\)".*/\1/')
JWKS_URL=\$(echo "\$DISCOVERY" | grep '"jwksUrl"' | sed 's/.*: *"\([^"]*\)".*/\1/')

/opt/keycloak/bin/kcadm.sh update identity-provider/instances/entra-oidc -r dspm \
  -s "config.authorizationUrl=\$AUTH_URL" \
  -s "config.tokenUrl=\$TOKEN_URL" \
  -s "config.jwksUrl=\$JWKS_URL" \
  -s 'config.validateSignature=true' \
  -s 'config.useJwksUrl=true'
EOF
```

**Step 3 — Add the email mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/entra-oidc/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=oidc-user-attribute-idp-mapper \
  -s identityProviderAlias=entra-oidc \
  -s 'config={"syncMode":"INHERIT","claim":"email","user.attribute":"email"}'
```

### Configure Entra ID (SAML) — manual

**Required values:** Tenant ID

**Step 1 — Create the SAML identity provider**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances -r dspm \
  -s alias=entra-saml \
  -s providerId=saml \
  -s enabled=true \
  -s trustEmail=true \
  -s 'firstBrokerLoginFlowAlias=first broker login' \
  -s 'config.singleSignOnServiceUrl=https://login.microsoftonline.com/<tenant-id>/saml2' \
  -s 'config.validateSignature=true' \
  -s 'config.wantAssertionsSigned=true' \
  -s 'config.nameIDPolicyFormat=urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
```

**Step 2 — Add the email mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/entra-saml/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=saml-user-attribute-idp-mapper \
  -s identityProviderAlias=entra-saml \
  -s 'config={"syncMode":"INHERIT","attribute.name":"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress","user.attribute":"email"}'
```

### Configure Generic SAML — manual

**Required values:** SSO URL, Entity ID, signing certificate (PEM), email attribute name

**Step 1 — Strip PEM headers from the signing certificate**

```bash
SAML_SIGNING_CERT=$(cat <cert-file>.pem | grep -v '^-----' | tr -d '[:space:]')
```

**Step 2 — Create the SAML identity provider**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances -r dspm \
  -s alias=saml \
  -s providerId=saml \
  -s enabled=true \
  -s trustEmail=true \
  -s 'firstBrokerLoginFlowAlias=first broker login' \
  -s 'config.singleSignOnServiceUrl=<sso-url>' \
  -s 'config.entityId=<entity-id>' \
  -s "config.signingCertificate=$SAML_SIGNING_CERT" \
  -s 'config.validateSignature=true' \
  -s 'config.wantAssertionsSigned=true'
```

**Step 3 — Add the email mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/saml/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=saml-user-attribute-idp-mapper \
  -s identityProviderAlias=saml \
  -s 'config={"syncMode":"INHERIT","attribute.name":"<email-attribute-name>","user.attribute":"email"}'
```

### Configure LDAP / Active Directory — manual

**Required values:** LDAP server URL, service account DN, service account password, users base DN

**Step 1 — Create the LDAP User Federation component**

```bash
LDAP_ID=$(kubectl exec -i -n access-analyzer statefulset/keycloak -- bash <<EOF
/opt/keycloak/bin/kcadm.sh create components -r dspm \
  -s name=ldap \
  -s providerType=org.keycloak.storage.UserStorageProvider \
  -s providerId=ldap \
  -s 'config.priority=["0"]' \
  -s 'config.editMode=["READ_ONLY"]' \
  -s 'config.vendor=["ad"]' \
  -s 'config.connectionUrl=["<ldap-url>"]' \
  -s 'config.bindDn=["<service-account-dn>"]' \
  -s 'config.bindCredential=["<service-account-password>"]' \
  -s 'config.usersDn=["<users-base-dn>"]' \
  -s 'config.usernameLDAPAttribute=["sAMAccountName"]' \
  -s 'config.rdnLDAPAttribute=["cn"]' \
  -s 'config.uuidLDAPAttribute=["objectGUID"]' \
  -s 'config.userObjectClasses=["person,organizationalPerson,user"]' \
  -s 'config.searchScope=["2"]' \
  -s 'config.importEnabled=["true"]' \
  -s 'config.syncRegistrations=["false"]' \
  -o --fields id | grep '"id"' | sed 's/.*"id"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/'
EOF
)
```

**Step 2 — Add the email attribute mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create components -r dspm \
  -s name=email-mapper \
  -s providerType=org.keycloak.storage.ldap.mappers.LDAPStorageMapper \
  -s providerId=user-attribute-ldap-mapper \
  -s "parentId=$LDAP_ID" \
  -s '{"ldap.attribute":["mail"],"is.mandatory.in.ldap":["false"],"always.read.value.from.ldap":["false"],"read.only":["true"],"user.model.attribute":["email"]}'
```

**Step 3 — Add the provider attribute mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create components -r dspm \
  -s name=ldap-provider-attribute \
  -s providerType=org.keycloak.storage.ldap.mappers.LDAPStorageMapper \
  -s providerId=hardcoded-attribute-mapper \
  -s "parentId=$LDAP_ID" \
  -s '{"attribute.value":["ldap"],"user.model.attribute":["ldap_provider"]}'
```

**Step 4 — Add the realm protocol mapper**

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create protocol-mappers/models -r dspm \
  --body '{
    "name": "ldap-identity-provider-claim",
    "protocol": "openid-connect",
    "protocolMapper": "oidc-usermodel-attribute-mapper",
    "config": {
      "user.attribute": "ldap_provider",
      "claim.name": "identity_provider",
      "jsonType.label": "String",
      "id.token.claim": "true",
      "access.token.claim": "true",
      "userinfo.token.claim": "true"
    }
  }'
```

### Verify the configuration — manual

**OIDC or SAML:**

```bash
TYPE=oidc ALIAS=entra-oidc ./scripts/verify-idp-config.sh
TYPE=saml ALIAS=entra-saml ./scripts/verify-idp-config.sh
```

**LDAP (component check only):**

```bash
TYPE=ldap ./scripts/verify-idp-config.sh
```

**LDAP (with connectivity test):**

```bash
TYPE=ldap \
LDAP_URL=<ldap-url> \
LDAP_BIND_DN=<service-account-dn> \
LDAP_BIND_CREDENTIAL=<service-account-password> \
./scripts/verify-idp-config.sh
```
