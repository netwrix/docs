---
title: "Configure Okta SSO"
description: "Add the distinguishedName attribute to Okta users, create the SAML application, and enter the Okta values in Privilege Secure for Discovery."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Re-verify against the current Okta Admin Console UI (Profile Editor, mappings, Import Now, the app integration wizard, and authentication policies). Evidence: none.

TODO: Most steps in the source page exist only as screenshots. Confirm the exact UI labels and the SAML settings for the Okta app (Single sign-on URL, Audience URI, Name ID format, attribute statements). Evidence: none.

TODO: Confirm the SAML application display name in the Okta catalog or custom app. Evidence: none.

TODO: Confirm the assertion consumer path (`/api/login/` in the source page versus `/api/v1/login` at 26.09.1). Evidence: docker/node/api-legacy-onprem/app.js:58.
:::

Okta can act as the SAML identity provider (IdP) for Netwrix Privilege Secure for Discovery, with Okta providing multifactor authentication (MFA). This page covers the Okta and product settings. Read [SAML SSO configuration reference](./saml-sso-reference.md) first.

:::warning[Screenshot needs attention: remove before publishing]
TODO: 360048120774_mceclip34.webp and 360048120774_blobid3.webp show an Okta developer tenant, application IDs, and the start of a certificate. Redact or replace before publishing.
:::

## Prerequisites

- Administrator access to Privilege Secure for Discovery and Okta.
- The Okta Active Directory (AD) Agent installed. See [Okta AD agent integration](https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm).

## Add the distinguishedName attribute to Okta users

Skip this section if the `distinguishedName` attribute is already configured for Okta users.

1. Sign in to the Okta Admin Console.
2. Go to **Directory** > **Profile Editor**.
3. Select **Okta** > **User (default)**.

   ![Okta Profile Editor with the default Okta user profile selected](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip2.webp)

4. Select **Add Attribute**.

   ![Add Attribute button in the Okta Profile Editor](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip3.webp)

5. Enter the attribute settings. The following example shows one set of values. Adjust them for your environment.

   ![Example settings for the distinguishedName attribute](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip4.webp)

## Map the AD distinguished name

1. Go to **Directory** > **Profile Editor**.
2. On the domain, select **Mappings**.

   ![Mappings option for the Active Directory domain in the Profile Editor](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip1.webp)

3. Under the `<domain>` to Okta User mapping, scroll down and set `appuser.dn` for `dn`.

   ![Mapping of appuser.dn to the dn attribute](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip5.webp)

   ![Remaining mappings in the Okta user profile](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip6.webp)

4. Save and apply the mappings.

## Import AD users to retrieve the distinguishedName attribute

1. Open the directory to import.

   ![Okta directory list with the AD directory selected](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip7.webp)

2. Select **Import Now**.

   ![Import Now button](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip8.webp)

3. Select **Full Import**.

   ![Full Import option](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip9.webp)

4. Wait for the import to finish. This can take a few minutes. Don't refresh the page.

   ![Import in progress with status information](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip10.webp)

   ![Import results](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip18.webp)

5. Assign any new users and confirm.

   ![Confirmation of newly imported users](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip13.webp)

## Test authentication with AD credentials (optional)

Test that an imported user can authenticate with AD credentials.

![Test authentication entry in the Okta directory settings](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip14.webp)

![Okta directory test page scrolled to the end](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip15.webp)

![Test authentication result](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip16.webp)

## Add the Privilege Secure for Discovery application

1. In Okta, add a SAML application for Privilege Secure for Discovery.

   ![Okta page for adding a new application](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip19.webp)

   ![Application name and settings](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip20.webp)

   ![SAML settings page](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip21.webp)

2. Enter the SAML URLs.

   - The sign-in URL format is `https://<fqdn>/api/v1/login/`, where `<fqdn>` is the fully qualified domain name of Privilege Secure for Discovery.
   - **Audience URI** is the base URL only. Leave off `/api/v1/login/`.

   ![SAML URL and Audience URI settings](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip23.webp)

3. If your Okta environment requires an application user name, set it.

   ![Application username setting](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip26.webp)

4. Add an attribute statement for `user.dn`. If `user.dn` doesn't appear in the list, type it manually.
5. Select **Next**, answer the feedback question, and select **Finish**.
6. Configure the **Sign On** settings.

   ![Sign On tab of the application](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip28.webp)

   ![Sign On settings](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip37.webp)

7. Select a user authentication policy. The example uses an **Any two factors** policy.

   ![Authentication policy selection](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip29.webp)

## Assign users and groups to the application

Assign the Okta people and groups that need access to Privilege Secure for Discovery.

![Assignments tab of the application](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip31.webp)

![Assigning people and groups to the application](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip32.webp)

## Retrieve the SAML information from Okta

Copy the identity provider single sign-on URL, the issuer, and the signing certificate from the application's SAML setup details.

![SAML setup instructions in the Okta application](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip33.webp)

![Okta SAML metadata values](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip34.webp)

## Enter the SAML information in Privilege Secure for Discovery

1. Go to **Configure** > **Server** > **SAML Configuration**.
2. Enter the Okta values in **Entrypoint**, **Issuer**, and **Issuer Cert** as described in the [field reference](./saml-sso-reference.md#saml-configuration-fields).

   ![SAML Configuration panel fields](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_blobid2.webp)

   ![SAML Configuration panel filled with Okta values](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_blobid3.webp)

3. Enable **SSO Enabled** and save.

## Sign in with Okta

When you sign in to Privilege Secure for Discovery, you are either redirected automatically to Okta or shown the sign-in page with an SSO option. Select **SSO Login** to sign in through Okta.

![Privilege Secure for Discovery sign-in page with the SSO Login option](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip36.webp)
