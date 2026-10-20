---
title: "Configure AD FS SAML SSO"
description: "Configure an Active Directory Federation Services relying party trust and the SAML settings that let users sign in to Privilege Secure for Discovery."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Re-verify against the current AD FS UI (Windows Server 2019 and later): the Identifiers, Endpoints, and Claim rules wizard names. Evidence: none.

TODO: Confirm the assertion consumer path (`/api/login` in the source page versus `/api/v1/login` at 26.09.1). Evidence: docker/node/api-legacy-onprem/app.js:58.

TODO: Replace the screenshots (the same image appears twice in the source page). Evidence: none.

TODO: Confirm the Issuer scheme: the source page used http for the AD FS trust identifier. AD FS normally publishes `http://<adfs-fqdn>/adfs/services/trust` as the federation service identifier. Evidence: none.
:::

Active Directory Federation Services (AD FS) can act as the identity provider (IdP) for Netwrix Privilege Secure for Discovery. This page describes the AD FS relying party settings and the matching values in the product. Read [SAML SSO configuration reference](./saml-sso-reference.md) first.

In the following procedures, `<fqdn>` is the fully qualified domain name of Privilege Secure for Discovery and `<adfs-fqdn>` is the AD FS server name.

## Configure AD FS

1. In the relying party trust, open the **Identifiers** section and add an identifier that matches the URL of the product, for example `https://<fqdn>`.

   ![AD FS relying party Identifiers tab with the product URL added](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip0.webp)

2. On the **Endpoints** tab, add a SAML endpoint that uses the POST binding and points to the sign-in URL, for example `https://<fqdn>/api/v1/login`.

   ![AD FS relying party Endpoints tab with a SAML POST endpoint](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip0.webp)

3. Add a claim rule that sends LDAP attributes as claims. AD FS doesn't provide the required values by default, so type them manually.
4. Set **Attribute Store** to **Active Directory**.
5. In the **LDAP Attribute** field, type `distinguishedName`.
6. In the **Outgoing Claim Type** field, type `dn`.

   :::note
   After you save, AD FS changes `distinguishedName` to `DistinguishedName` with a capital D. Enter it with a lowercase d.
   :::

   ![AD FS claim rule that maps the distinguishedName LDAP attribute to the dn outgoing claim](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip1.webp)

## Configure Privilege Secure for Discovery

This configuration uses the IdP-initiated flow.

1. Go to **Configure** > **Server**.
2. In the **SAML Configuration** panel, enter the following values.

   | Field | Value |
   | --- | --- |
   | **Entrypoint** | `https://<adfs-fqdn>/adfs/ls/idpinitiatedsignon.aspx?LoginToRP=https://<fqdn>` |
   | **Issuer** | `http://<adfs-fqdn>/adfs/services/trust` |
   | **Issuer Cert** | The AD FS token-signing certificate, without the `BEGIN CERTIFICATE` and `END CERTIFICATE` lines. |
   | **SSO Enabled** | Enabled |

3. Save the configuration.

## Use a load balancer with AD FS

When a BIG-IP load balancer sits in front of AD FS, configure a certificate trust between the AD FS server and the load balancer. See [F5 article K81345433](https://support.f5.com/csp/article/K81345433).

## Troubleshoot AD FS sign-in

If sign-in fails with "SAML Assertion Not Yet Valid", see [Troubleshoot SAML sign-in](./saml-sso-reference.md#troubleshoot-saml-sign-in).
