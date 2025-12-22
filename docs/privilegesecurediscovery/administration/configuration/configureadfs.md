---
title: "Configure ADFS (Active Directory Federation Services) SSO"
description: "Configure ADFS (Active Directory Federation Services) SSO"
sidebar_position: 260
---

# Configure ADFS (Active Directory Federation Services) SSO

Configure ADFS (Active Directory Federation Services) SSO

# Configure ADFS (Active Directory Federation Services) SSO

## ADFS

- On the “Identifiers” section, add Identifier to match the URL of your website (Ex:
  `https://s1.<company>.com`)

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip0.webp)

- On the “Endpoints” tab, create a SAML POST binding pointing towards the login URL (Ex:
  `https://s1.<company>.com/api/login`)

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip0.webp)

In the Claim rules, you have to type in the entries as the required values are not built-in/default
to ADFS. Set the Attribute Store to Active Directory, and manually type in **distinguishedName** in
the LDAP Attribute field. In the Outgoing Claim Type field, annually type in **dn**

**NOTE:** On saving, distinguishedName will be changed to DistinguishedName (starts with capital D),
as see in the example below.  It should be entered as a lower case d.

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360052376373_mceclip1.webp)

## Privilege Secure

**Step 1 –** Navigate to **Configure** > **Server**.

**Step 2 –** As Privilege Secure is unable to perform Service Provider initiated (SP-initiated)
logon, you must specified an Identity Provider initiated (IdP-intiatied) URL.

- Entrypoint: `https://<ADFS_URL>/adfs/ls/idpinitiatedsignon.aspx?LoginToRP=https://SecureONE_URL`
- Issuer: `http://ADFS_URL/adfs/services/trust`
- Issuer Cert: This is the Signing Certificate of your ADFS environment, excluding the headers
  (---BEGIN CERTIFICATE--- and ---END CERTIFICATE---)
- SSO Enabled: Enabled

## F5 Load Balancing

In order for F5 to work with ADFS a certificate trust must be configured between the the ADFS server
and the BIG-IP load balancer, details are listed below:

- [https://support.f5.com/csp/article/K81345433](https://support.f5.com/csp/article/K81345433)

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while
trying to log in, please see:  the ADFS configuration steps above
