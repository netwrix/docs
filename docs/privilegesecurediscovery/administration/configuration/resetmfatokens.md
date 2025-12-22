---
title: "Reset MFA Tokens"
description: "Reset MFA Tokens"
sidebar_position: 310
---

# Reset MFA Tokens

Reset MFA Tokens

# Reset MFA Tokens

## Reset an MFA for an Individual User

To reset a single user's MFA token, a Privilege Secure Administrator must access the "Configure >
Users and Groups" section.  Click the "Modify" button selected in the right-hand column.  Select
"Reset 2-Factor Token" from the available options, and the user will be prompted to set up their MFA
token at next login.

![Screen_Shot_2019-04-15_at_10.25.L04_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.25.04_am.webp)

Please see the Privilege Secure User Guide - First Time Logging In for setting new MFA:

- [First Login](/docs/privilegesecurediscovery/administration/systemmanagement/firstlogin.md)

## Reset MFA Inherited by AD Group

Many organizations will create a "Privilege Secure_Users" group in Active Directory which will grant
their users the ability to log into the Privilege Secure UI to request administrative access to
resources in the domain(s).  When customers are using this approach alongside either the default
Google Authenticator or other TOTP solutions, if a user loses or becomes locked out of their device
the token is stored on, the MFA token must be reset.  In this example, resetting the 2-Factor token
for the configured group would force all users inheriting their access from this group to reset
their token, therefore it is necessary to reset a single user's token.

Solution

To reset a single user's MFA token that is in a group, a Privilege Secure Administrator must access
the "Configure > Users and Groups" section.  If the user's account is not already present as a
single user, and instead inherits its access to Privilege Secure via an AD group, search for it in
the "Add Username or Group" pane, select the account, and select the "Add" button to the right of
the pane:

![Screen_Shot_2019-04-15_at_10.33.L53_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.33.53_am.webp)

Once added, the account will appear in the existing configured accounts pane, where it can be
located and the "Modify" button selected in the right-hand column.  Select "Reset 2-Factor Token"
from the available options, and the user will be prompted to set up their MFA token anew at next
login.  The Privilege Secure Administrator can then remove the individual account from this pane,
which will return the organization of the pane to its prior state, while correctly resetting the
appropriate user's MFA token:

![Screen_Shot_2019-04-15_at_10.25.L04_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.25.04_am.webp)

Please see the Privilege Secure User Guide - First Time Logging In for setting new MFA:

- [First Login](/docs/privilegesecurediscovery/administration/systemmanagement/firstlogin.md)
