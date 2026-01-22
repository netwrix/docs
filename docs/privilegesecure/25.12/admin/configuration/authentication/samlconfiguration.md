---
title: "SAML Configuration Wizard"
description: "SAML Configuration Wizard"
sidebar_position: 30
---

# SAML Configuration Wizard

The SAML Configuration wizard is opened with the **Configuration Wizard** button in the
Configuration > [Authentication Page](/docs/privilegesecure/25.12/admin/configuration/authentication/authentication.md) for an SAML Authentication
Connector Type.

![configureclient](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/configureclient_1.webp)

It contains four pages:

- Configure Client
- Test Login
- Configure Id Mapping
- Test Logout

## Configure SAML Authentication Connector

Follow the steps to verify the SAML configuration:

**Step 1 –** Navigate to the **Configuration** > **Authentication** page.

**Step 2 –** In the Connectors list, select the applicable authentication connector and click
**Configuration Wizard**.

**Step 3 –** On the Configure Client page, enter the following information:

- Signin URI– The SAML provider issuer URI. Out-going redirection requires the correct “Issuer” path
  to be set. Incorrect settings will generally result in a 404 error.
- Callback Address – The SAML provider requires the Privilege Secure callback path to be authorized.
  Generally this is displayed by the provider after redirection. Enter the address and port of the
  Privilege Secure server:

    [protocol]//[hostname]:[port]/callback

- CORS – The SAML provider requires the Privilege Secure callback location to be configured for
  CORS. This will either be displayed by the provider after redirection, or a 500 error is returned.
  If an error is returned, CORS is probably not configured with the correct information. Enter the
  address and port of the Privilege Secure server:

    [protocol]//[hostname]:[port]

:::warning
In the next step, verify that the Sign In page displays as expected, but do NOT sign in
at this step.
:::


**Step 4 –** Click Test Connection to verify the connection configuration. This opens the Sign In
page in the browser. Do NOT sign in.

- If the Sign In page does not display as expected, review the values configured for the SAML
  connector and modify them where needed. Then, verify the Sign In page again.

**Step 5 –** Click the browser’s back arrow to return to the Configure Client wizard page.

**Step 6 –** If the Sign In page displayed as expected, click Next.

![SAML Configuration wizard, Test Login page](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/samlconfigtestlogin.webp)

When the SAML provider authenticates a user login, it will optionally sign that authentication using
a certificate (available from the SAML provider). Privilege Secure can be configured to validate the
authentication using the certificate.

**Step 7 –** _(Optional)_ On the Test Login page, enter the following information:

- Check Certificate – Check to have Privilege Secure validate the authentication using the
  certificate.
- Certificate – Enter the authentication certificate.

**Step 8 –** Click Login. The Sign In page opens in the browser.

**Step 9 –** Enter valid credentials for the SAML provider and sign in.

**Step 10 –** If the sign in was successful, the Provider User Name/Id will display. This is passed
to the UserTokenController so that the user information can be extracted. Click Next.

![SAML Configuration Wizard, Retrieved Data](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/samlconfigidmapping.webp)

SpPAM will use the access token to retrieve user data from the SAML provider. The SAML provider
requires a User Id Field for sign in. It is necessary to specify which field in Active Directory
should map to that User Id Field, so that Privilege Secure can automatically fill in the required
credentials at login. The value provided is used to sign in to the multi factor authenticator (MFA)
when a user logs in to the Privilege Secure Console.

In order to connect a user from the SAML provider to a user in the Privilege Secure copy of the AD
data, it is necessary to map a field in the provider list to a field in the Privilege Secure host
user table. The exact fields to map will vary between providers and according to the user’s AD
configuration.

The table displays the retrieved data that can be used for the host user lookup. The user must
select from the displayed records a field that corresponds to a value in their AD configuration. For
example, if the AD data contains email addresses, they can select any of the fields which contain
email addresses.

Field values will vary according to the information supplied by the provider. Example Values come
from the provider and will vary:

- Field – Shows the possible fields used by the OpenID Connect provider detected by Privilege
  Secure.
- Example Value – Shows an example value for the field based on the login credentials provided in
  the previous step. This represents the format of the value that will be used to sign in to the MFA
  during log in.

    :::note
    These are not the credentials that will be used during the login process; only an
    example of the format of those credentials. The actual credentials used are unique to each user
    and are setup during the MFA registration process for that user.
    :::


**Step 11 –** Select a field to use for the User Id Field and click Select.

![SAML Configuration wizard, Map Id](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/samlconfigidmapping2.webp)

**Step 12 –** The selected Source and User ID fields from the previous table are shown. Now map the
applicable AD field to the User Id Field. This is the value that will be used to sign in to the MFA
during login. In the Login Format drop-down, select the applicable AD field to map to the User Id
Field.

**Step 13 –** Click **Next** to proceed.

![SAML Configuration wizard, Test Logout page](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/samlconfigtestlogout.webp)

**Step 14 –** On the Test Logout page, enter the following information:

- Signout URI – The Signout URI must be the simple logout address (not a SAML SLO endpoint) which
  takes a parameter for the post logout redirection.

    - Examples for Microsoft Entra ID:

        https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri

    - Example for Auth0:

        https://privilegesecure-dev.auth0.com/v2/logout?returnTo

    - Example for Okta:

        https://dev-106968.okta.com/login/signout?fromURI

- Signout Callback URI – Some SAML providers require that redirection URIs be authorized, so the
  page displays the URI details for the redirection.

**Step 15 –** Click Test Log Out to verify the connection configuration. This opens the browser page
and logs out of the SAML Provider.

- If the Log Out page does not display as expected, review the values configured for the Signout URI
  and modify them where needed. Then, verify the Log Out page again.

**Step 16 –** Click the browser’s back arrow to return to the Test Logout wizard page.

**Step 17 –** If the logout was successful, click Finish. A window will display the updated
configuration settings.

![SAML Configuration updating connector settings](/images/privilegesecure/25.12/accessmanagement/admin/configuration/wizard/samlconfigupdateconnector.webp)

**Step 18 –** Click Okay to close the wizard and click **Save** on the Authentication page to accept
the changes.

The Authentication Connector is configured and added to the Connectors list.
