---
title: "Configure Identity Provider"
description: "Deployment steps for connecting an Identity Provider to Access Analyzer"
sidebar_position: 50
---

# Configure Identity Provider

:::note
This article is for the team performing the Access Analyzer deployment. It covers the cluster-level steps required to connect an identity provider to Keycloak. If you are an application administrator setting up user accounts after the IdP connection is in place, see [Identity Provider](../configurations/identity-provider.md).
:::

Access Analyzer uses Keycloak as its identity broker. Keycloak is deployed and configured automatically during installation. IdP connections are added after the cluster is running by running configuration scripts via `kubectl exec` into the Keycloak pod.

Configuration scripts for each IdP type are included in the Access Analyzer distribution at `scripts/configure-<type>.sh`. A verification script is available at `scripts/verify-idp-config.sh`.

## Before you begin

Confirm the following before running any configuration script:

- The Access Analyzer cluster is deployed and healthy
- You have `kubectl` access to the `access-analyzer` namespace
- The required credentials have been collected from the customer's IdP or directory administrator (see [Identity Provider — Part 1](../configurations/identity-provider.md#part-1-configure-your-identity-provider))
- For LDAP: the Keycloak pod has network access to the LDAP server on port 636 (LDAPS) or 389 (LDAP)
- For private CA certificates: `customCaBundle` is set in the `infra` chart values and the cluster has been (re)deployed with it

## Authenticate to the Keycloak Admin CLI

Run this step before configuring any IdP type. It authenticates the Keycloak Admin CLI inside the pod using the bootstrap credentials injected at deploy time.

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- bash -c '
  /opt/keycloak/bin/kcadm.sh config credentials \
    --server http://localhost:8080/auth \
    --realm master \
    --user "$KC_BOOTSTRAP_ADMIN_USERNAME" \
    --password "$KC_BOOTSTRAP_ADMIN_PASSWORD"'
```

:::note
The bootstrap admin credentials are read from environment variables already present in the pod. Do not pass them as command-line arguments — they would appear in Kubernetes audit logs.
:::

## Configure Entra ID (OIDC)

**Required values:** Tenant ID, Client ID, Client secret (from the Azure App Registration)

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

Replace `<tenant-id>`, `<client-id>`, and `<client-secret>` with the values collected from the customer's Azure App Registration. Pass the client secret via stdin heredoc (as shown) to keep it out of Kubernetes audit logs.

**Step 2 — Refresh OIDC discovery endpoints**

Keycloak does not always populate the authorization, token, and JWKS URLs from the discovery endpoint at creation time. Run this step to explicitly apply them:

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

This mapper is required. Access Analyzer matches pre-provisioned users to their IdP identity using the `email` claim on first sign-in. Without this mapper, authentication succeeds in Keycloak but the application cannot find the user.

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/entra-oidc/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=oidc-user-attribute-idp-mapper \
  -s identityProviderAlias=entra-oidc \
  -s 'config={"syncMode":"INHERIT","claim":"email","user.attribute":"email"}'
```

## Configure Entra ID (SAML)

**Required values:** Tenant ID (no client ID or secret needed for SAML)

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

Replace `<tenant-id>` with the customer's Azure AD tenant GUID.

**Step 2 — Add the email mapper**

Entra ID sends the email address as a URI-named SAML attribute. The mapper below maps that specific attribute to Keycloak's `email` field. The attribute URI is fixed for Entra ID and does not vary by customer.

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/entra-saml/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=saml-user-attribute-idp-mapper \
  -s identityProviderAlias=entra-saml \
  -s 'config={"syncMode":"INHERIT","attribute.name":"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress","user.attribute":"email"}'
```

## Configure Generic SAML

**Required values:** SSO URL, Entity ID, signing certificate (PEM), email attribute name

**Step 1 — Strip PEM headers from the signing certificate**

Keycloak expects the certificate as bare base64 without `-----BEGIN CERTIFICATE-----` headers. Strip them before running the next step:

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

Replace `<email-attribute-name>` with the SAML attribute the customer's IdP uses to send the email address. Common values are `email`, `mail`, or a URI. Confirm with the customer's IdP administrator.

```bash
kubectl exec -n access-analyzer statefulset/keycloak -- \
  /opt/keycloak/bin/kcadm.sh create identity-provider/instances/saml/mappers -r dspm \
  -s name=email-mapper \
  -s identityProviderMapper=saml-user-attribute-idp-mapper \
  -s identityProviderAlias=saml \
  -s 'config={"syncMode":"INHERIT","attribute.name":"<email-attribute-name>","user.attribute":"email"}'
```

## Configure LDAP / Active Directory

LDAP federation is architecturally different from OIDC and SAML. It creates a **User Federation component** rather than an identity provider instance. Users enter credentials directly on the Keycloak login page — no redirect occurs.

**Required values:** LDAP server URL, service account DN, service account password, users base DN

**Step 1 — Create the LDAP User Federation component**

The command below targets Active Directory. For generic LDAP, replace `ad` with `other` and adjust the attribute values (`sAMAccountName` → `uid`, `cn` → `uid`, `objectGUID` → `entryUUID`, user object classes as appropriate).

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

Pass the service account password via stdin heredoc to keep it out of audit logs. Note that LDAP federation values use JSON array syntax (`["value"]`) — this is a Keycloak API requirement for federation components.

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

Replace `mail` if the customer's directory uses a different attribute for email. Confirm with the customer's directory administrator.

**Step 3 — Add the provider attribute mapper**

This stamps all LDAP users with a `ldap_provider` attribute so Access Analyzer can identify them as LDAP-authenticated users:

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

This surfaces the `ldap_provider` attribute as the `identity_provider` claim in OIDC tokens. This mapper is created once at the realm level and applies to all LDAP federations:

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

## Verify the configuration

Run the verification script after configuring any IdP type. The script re-authenticates to the Keycloak Admin CLI and checks that all required components are present.

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

## Next steps

After verifying the IdP connection, the application administrator must pre-provision user accounts in Access Analyzer before any users can sign in. See [Identity Provider](../configurations/identity-provider.md#pre-provision-user-accounts).
