---
title: "OpenID Connect Authentication"
description: "OpenID Connect Authentication"
sidebar_position: 10
---

# OpenID Connect Authentication

## Okta

The following sections provide configuration information to use OpenID with an Okta account.

### Adding Users

In order to use the OpenID login functionality with Privilege Secure an Okta user must match a user
in an AD domain that Privilege Secure is aware of.

:::note
The user will also need to be given access to Privilege Secure by assigning them a role
from the Config->Role Management screen.
:::


To create a new user click the Directory menu item and select People from the drop-down. You should
see this screen.

![Okta Menu](/images/privilegesecure/4.1/accessmanagement/admin/configuration/integrationdetails/oktamenu.webp)

If your screen doesn’t look like this then you’re probably in Developer Console view. Click in the
top left corner (where it says Developer Console) and choose Classic UI.

To add a new user, click the Add Person button:

![Add person to Okta](/images/privilegesecure/4.1/accessmanagement/admin/configuration/integrationdetails/oktaaddperson.webp)

Privilege Secure will use the ‘Username’ value to search the host-user table for the matching user.

The OpenID Connector configuration screen gives 3 options for the host-user field that the Okta
Username will be matched against – under the Login Format dropdown:

- sAMAccountName
- User Principal Name
- Email Address

:::note
Okta doesn’t allow sAMAccountName to be used as the Username so we can’t use that one
here.
:::


Users in sbpam.local are all set up with both UPN and Email Address – but they’re not the same.

The two Okta users below both map to the same sbpam.local user

![Okta login format](/images/privilegesecure/4.1/accessmanagement/admin/configuration/integrationdetails/oktaloginformat.webp)

To use the first account the Privilege Secure OpenID Connector Login Format should be set to Email,
for the second UPN.

So, to create a user enter the appropriate Username value and other data. I recommend setting the
Password option to ‘Set by Admin’ and setting it yourself. If the user is required to set (or reset)
their own password then it will be handled on the Okta side – which won’t give control back to
Privilege Secure until it’s done.

### Assigning Users to Applications

Currently we only have one application and users are being automatically assigned – but that may not
always be the case, so…

When the user has been created click on their name and you will see the User Details screen:

![Assign Apps top users](/images/privilegesecure/4.1/accessmanagement/admin/configuration/integrationdetails/oktaassignapps.webp)

If the application you want to use is not listed, click the ‘Assign Applications’ button and select
it.
