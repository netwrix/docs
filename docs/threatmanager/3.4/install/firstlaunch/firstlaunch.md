---
title: "First Launch"
description: "First Launch"
sidebar_position: 50
---

# First Launch

The installer places the following icon on the desktop, which opens the Threat Manager console:

![Desktop icon](/images/threatmanager/3.0/install/desktopicon.webp)

**Step 1 –** Double-click the **Netwrix Threat Manager Dashboard** icon to open the console for the
first time.

![First launch showing fields for setting up the builtin Administrator account](/images/threatprevention/7.5/install/reportingmodule/builtinadminpassword.webp)

The built-in ADMIN account handles the initial configuration steps and grants user access.
The User Name is "admin". You will set the password and optionally enable MFA for this account
during first launch. To set up this account:

**Step 2 –** Specify a password in the **New Password** and **Confirm Password** fields. It must
meet the following minimum requirements:

- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (symbol)
- Have a minimum length of 10 characters

**Step 3 –** By default, MFA is on. Toggle this option off or on as desired. If you set the Enable MFA
option to ON, the application provides an internally-generated one-time password (OTP)
option for the Administrator account. If you set the Enable MFA option to OFF, sign-in requires only a username and
password.

**Step 4 –** Click Set Password.

You have now set the built-in ADMIN account password.

:::note
If an ADMIN account created on version 2.7 has no password, the sign-in page offers the create-password
step again. Set the password as described in this topic. This adds the password and repairs the
account's links to the user account.
:::

If you set the Enable MFA option to OFF, you need no additional configuration and the Threat
Manager Console opens. See the [Getting Started with Threat Manager](/docs/threatmanager/3.4/gettingstarted.md) topic for
next steps.

If you set the Enable MFA option to ON, you must register an MFA authenticator. Proceed to
the Configure MFA for the Bultin Administrator Account topic.

## Configure MFA for the Bultin Administrator Account

If MFA was enabled for the buildtin Administrator account during first launch, configure MFA for the account:

![registerauthenticator](/images/threatprevention/7.5/install/reportingmodule/registerauthenticator.webp)

**Step 1 –** Register the MFA authenticator. The Register Authenticator prompt will provide
instructions to configure multi-factor authentication with an external or third-party application.

**Step 2 –** On successful registration with an authenticator, enter the verification code and click
Continue.

**Step 3 –** Threat Manager presents a list of recovery codes to restore access to the
application if you lose access to the authenticator application or device. Save this list
of codes for account recovery, if needed.

**Step 4 –** Click **Continue**.

Once MFA is configured for this account, the Threat Manager Console opens. See the
[Getting Started with Threat Manager](/docs/threatmanager/3.4/gettingstarted.md) topic for next steps.
