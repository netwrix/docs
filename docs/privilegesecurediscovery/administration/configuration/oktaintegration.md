---
title: "Okta SSO and MFA Integration"
description: "Okta SSO and MFA Integration"
sidebar_position: 160
---

# Okta SSO and MFA Integration

Okta SSO and MFA Integration

# Okta SSO and MFA Integration

This articles covers integrating Privilege Secure with Okta SSO.

## Prerequisites

- Admin access to Privilege Secure and Okta
- Okta Active Directory Agent Installed

- [https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm](https://help.okta.com/en/prod/Content/Topics/Directory/ad-agent-new-integration.htm)

## Okta: Add distinguishedName Attribute to Okta Users

If distinguishedName attribute is already configured for Okta users, skip this section.

- Login to the Okta Admin page
- Go to Directory > Profile Editor

    - Click on Okta > User (default)

![mceclip2.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip2.webp)

Click on +Add Attribute on the Profile Editor

![mceclip3.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip3.webp)

Click on +Add Attribute on the Profile Editor.

Example settings, adjust as required for environment:

![mceclip4.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip4.webp)

## Okta: Active Directory (AD) Mappings

Directory > Profile Editor

On the desired domain, click Mappings

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip1.webp)

Under ‘`<domain>` to Okta User’ scroll down and set “appuser.dn” for “dn”

![mceclip5.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip5.webp)

(removed section to compact this image for display)

![mceclip6.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip6.webp)

Save and apply mappings.

## Okta: Import AD Users to Retrieve distinguishedName Attribute

Navigate to directory to import .

- ![mceclip7.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip7.webp)

Click the Import Now button.

![mceclip8.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip8.webp)

Full Import.

- ![mceclip9.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip9.webp)

This can take a few minutes to complete, do not refresh page. Example status and results:

![mceclip10.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip10.webp)

- ![mceclip18.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip18.webp)

Assign any new users appropriately and confirm, example:

![mceclip13.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip13.webp)

## Okta (Optional): Test Authentication with AD Credentials

**![mceclip14.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip14.webp)**

Scroll down to bottom

![mceclip15.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip15.webp)

![mceclip16.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip16.webp)

## Okta: Add Privilege Secure Application

![mceclip19.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip19.webp)

![mceclip20.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip20.webp)

![mceclip21.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip21.webp)

Note in the example below

- The URL format is: `https://<Privilege Secure URL>/api/login/`
- The "Audience URI" should be the base URL only, leave off "/api/login/"

![mceclip23.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip23.webp)

**NOTE:** An ‘Application username’ may be required by the Okta environment.

- ![mceclip26.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip26.webp)

**NOTE:** user.dn may not appear in drop down list, it can be manually entered.

- Click Next button to continue.
- Provide answer to Feedback question and Finish.
- Configure Sign On

![mceclip28.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip28.webp)

Settings

![mceclip37.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip37.webp)

User authentication policy  Examples uses "Any two factors" ploicy.

![mceclip29.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip29.webp)

## Okta: Assign Okta People/Groups to Privilege Secure Application

**![mceclip31.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip31.webp)**

![mceclip32.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip32.webp)

## Okta: Retrieve SAML/SSO Information for Privilege Secure

**![mceclip33.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip33.webp)**

**![mceclip34.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip34.webp)**

## Privilege Secure: Enter SAML/SSO Information

![blobid2.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_blobid2.webp)

![blobid3.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_blobid3.webp)

## Enable SSO in Privilege Secure and Login Example

At the bottom of the Configure → Server -> SAML Configuration Panel, enable or disable SSO when
appropriate:

- When logging into Privilege Secure, you will either be automatically directed to Okta for
  authentication, or presented with a Privilege Secure SSO Login Screen Example:

![mceclip36.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360048120774_mceclip36.webp)

- Click [SSO Login] button to log in via Okta.
