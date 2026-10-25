---
title: "Configure a SAML connector"
description: "Add a Security Assertion Markup Language (SAML) identity provider to Privilege Secure so users can sign in to the console with single sign-on."
sidebar_position: 40
---

# Configure a SAML connector

A SAML connector lets users sign in to the Privilege Secure console through a Security Assertion Markup Language (SAML) identity provider (IdP), such as Active Directory Federation Services (AD FS) or Microsoft Entra ID. The console shows an **Or login using** button for each SAML connector.

This page covers the connector fields, the values to register at the IdP, and the template files to protect during an upgrade. For the other connector types, see [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

## Prerequisites

- You have the Administrator role. Only administrators can manage authentication connectors.

- You can create an application (a relying party) at the SAML IdP.
- The console is reachable at `https://<nps-server>:6500`, and its web certificate is trusted by the browsers that sign in. See [Certificates](/docs/privilegesecure/26.07/configuration/certificates.md) and [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

## Add a SAML connector

1. Select **Configuration** > **Authentication** in the left navigation.
1. Click the **+** button above the connector list.
1. Enter a name in **Enter Authentication Connector Name**, for example `corporate-saml`. The **Connector Type** list stays disabled until you enter a name.
1. Optional: Enter a **Description**.
1. In **Connector Type**, select **SAML**.
1. Enter the connector settings, using the wizard or manual entry. See the next two sections.
1. Click **Save**.

{/* TODO screenshot: the Authentication page with Connector Type set to SAML */}

### Enter the settings manually

Click **Manually Enter Data** to show the fields. The button changes to **Hide Data**.

| Field | Description |
| --- | --- |
| **Login URI**\* | The sign-in address of the SAML IdP. An incorrect value generally returns a 404 error. |
| **Name ID Policy**\* | The name identifier format that Privilege Secure requests: **Transient Identifier** or **Unspecified**. If you leave it empty, Privilege Secure requests **Transient Identifier**. |
| **Login Format**\* | The Active Directory attribute that identifies the user: **sAMAccountName** (default), **User Principal Name**, **Email Address**, or **SID**. |
| **User Claim**\* | The claim in the IdP response that identifies the user. |
| **Check Certificate** | Select to have Privilege Secure validate the signature on the IdP response. |
| **Certificate** | The IdP signing certificate. Enter it when **Check Certificate** is selected. |
| **Logout URI**\* | The address that signs the user out of the IdP. |
| **Use Remote Access Gateway** | Select to make the connector available only for sign-in through the Remote Access Gateway portal. The connector doesn't work on the console. See [Use a connector with the Remote Access Gateway](#use-a-connector-with-the-remote-access-gateway). |

An asterisk marks a required field.

**User Claim** and **Login Format** work together to find the user. Privilege Secure reads the value from the IdP response and looks for a user whose **Login Format** attribute equals that value, ignoring case. For **User Claim**, enter `Subject:NameID` to use the subject name identifier of the response. Enter any other name to use the claim with that name. If the response has no such claim, the sign-in fails.

For **Logout URI**, use the simple sign-out address of the IdP that accepts a post-logout redirect parameter. Don't use a SAML single logout (SLO) endpoint. For Microsoft Entra ID, the address has this form:

```text
https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri
```

For other IdPs, use the equivalent address from the IdP documentation, for example `https://<idp-host>/login/signout?fromURI`.

### Use the Configuration Wizard

Click **Configuration Wizard** to enter and test the settings step by step.

The wizard has four pages. **Next >** is enabled after the step is complete.

1. **Configure Client**. Enter the **Signin URI** of the IdP. The page also shows the **Callback Address** and **CORS** (Cross-Origin Resource Sharing) values to register at the IdP. Click **Test Connection** to open the IdP sign-in page. Don't sign in at this step.
1. **Test Login**. Select the **Name ID Policy**. Optionally select **Check Certificate** and enter the **Certificate**. Click **Login**, and sign in with a valid IdP account.
1. **Configure Id Mapping**. The wizard lists each **Field** that the IdP returned, with an **Example Value**. Select the row of the field that holds the user identifier, and click **Select**. Then select the **Login Format** that matches it in Active Directory.
1. **Test Logout**. Enter the **Signout URI**, and click **Test Log Out**. When the sign-out returns to the wizard, click **Finish**.

The wizard shows a summary of the SAML settings. Click **Okay** to close the wizard, and click **Save** on the **Authentication** page.

## Register Privilege Secure at the IdP

Create an application at the IdP, and register these values. The wizard shows both values for your server.

| Value | Format |
| --- | --- |
| Callback address | `https://<nps-server>:6500/samlSigninCallback` |
| CORS (allowed origin) | `https://<nps-server>:6500` |

The wizard builds both values from the address in the browser. Open the console at `https://<nps-server>:6500` before you open the wizard so the values carry the correct host name and port.

For step-by-step IdP recipes, see:

- [Add Active Directory Federation Services as an authentication connector (SAML)](/docs/kb/privilegesecure/authentication-and-mfa/add-active-directory-federation-services-ad-fs-as-an-authentication-connector-saml)
- [Add Microsoft Entra ID as an authentication connector (SAML)](/docs/kb/privilegesecure/authentication-and-mfa/add-microsoft-entra-id-as-an-authentication-connector-saml)

## Assign users to the connector

Open a user on the **Users & Groups** page, select the **Authentication Connector** tab, and choose the SAML connector. Privilege Secure refuses an external sign-in when the user isn't assigned to the connector.

The `StrictExternalAuth` setting controls this check. Its default is `true`, and Privilege Secure reads it from the web service configuration. The user is matched to the connector through the user's own assignment, or when the user has none, through the first group that has a connector. When the check fails, Privilege Secure refuses the sign-in.

To make the SAML connector the default or the only sign-in method, or to show the password fields again with `?adlogin=1`, see [Default and exclusive connectors](/docs/privilegesecure/26.07/configuration/authentication/overview.md#default-and-exclusive-connectors).

## Use a connector with the Remote Access Gateway

A connector marked **Use Remote Access Gateway** works only when users sign in through the Remote Access Gateway portal. A connector that isn't marked works only on the console. To offer SAML sign-in in both places, create one connector for each.

## Protect the SAML template files during an upgrade

Privilege Secure builds SAML requests from two template files in the `Web` folder of the installation, `C:\Program Files\Stealthbits\PAM\Web\`:

- `SamlRequestTemplate.xml`
- `SamlSignoutTemplate.xml`

If you customized either file, back up both before you upgrade. Installations of 26.03.2 and later mark both files so that an upgrade keeps modified copies. Upgrades from earlier releases overwrote them, and single sign-on failed until the files were restored. See [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md).

## Troubleshoot a SAML sign-in

- If the IdP page returns a 404 error, check **Login URI** and the IdP application address.
- If the IdP returns a 500 error after the redirect, the IdP doesn't allow the **CORS** value. Register the origin at the IdP.
- If the sign-in succeeds at the IdP but fails in Privilege Secure, check **Login Format** and **User Claim**, and check that the user is assigned to the connector.
