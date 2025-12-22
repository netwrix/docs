---
title: "Authentication Connector Tab"
description: "Authentication Connector Tab"
sidebar_position: 70
---

# Authentication Connector Tab

The Authentication Connector tab for a user or group shows the type of multi-factor authentication
(MFA) being used for the selected user or group. The settings on this tab determine the options
displayed on the login page for the user.

The list is populated from the previously configured authentication connectors on the
Authentications page. See the [Authentication Page](/docs/privilegesecure/4.2/admin/configuration/authentication/authentication.md)
topic for additional information.

![Users Authentication Connector Tab](/images/privilegesecure/4.2/accessmanagement/admin/policy/tab/usersgroups/userauthenticationtab.webp)

Select the method of authentication for the user or group:

- Internal MFA — User will be prompted using the internal MFA when signing into the Privilege Secure
  console
- Duo (and other RADIUS profile values) — RADIUS profile that will be used for MFA when the user
  signs into the Privilege Secure console
- Duo SAML — SAML profile that will be used for MFA when the user signs into the Privilege Secure
  console
- Not Required — No multi-factor authentication is required for the user. Login only requires a user
  name and password. Intended for users who access Privilege Secure over a VPN where MFA has already
  been leveraged.

    :::warning
    Disabling multi-factor authentication can create a significant security
    vulnerability.
    :::


The following information determines which MFA method has priority:

- If the user is a member of an Active Directory group that has a different RADIUS profile, the
  group assignment will take precedence over the Internal MFA setting on the user.
- If the user MFA setting is for a RADIUS profile, the User assignment will take precedence over any
  group RADIUS profile setting.
- If the user is a member of multiple Active Directory groups, each having different RADIUS
  profiles, the user assignment will be determined by the alphabetical order of the RADIUS profile
  name.
