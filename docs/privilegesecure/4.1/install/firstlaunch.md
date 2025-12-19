---
title: "First Launch"
description: "First Launch"
sidebar_position: 20
---

# First Launch

Once the database and application are installed, the next step is to walk through the Setup Wizard.

![Netwrix Setup Launcher showing the Netwrix Privilege Secure with a green checkmark](/images/privilegesecure/4.1/accessmanagement/install/launcherstep4.webp)

The Netwrix Setup Launcher can be closed, if it was used during installation.

:::info
The first user, your primary Administrator, will be setup through the wizard. It
is recommended that you have a multi-factor authentication (MFA) solution (Authenticator, DUO,
Symantec VIP, etc.) ready to setup for this account through the wizard.
:::


There are two methods for launching the Setup Wizard:

![Netwrix Privilege Secure desktop icon](/images/privilegesecure/4.1/accessmanagement/install/desktopicon.webp)

- Double-click the desktop icon. Your default browser opens to the Setup Wizard.
- Open a supported browser window and navigate to the following URL, which opens the Setup Wizard:

**https://localhost:6500**

## Setup Wizard

You will need to following information for your environment to complete the wizard:

- Domain account and its password to be the primary application Administrator

    :::info
    Use a non-privileged account and use the application to access privileged
    accounts.
    :::


- Multi-factor authenticator (MFA) app on your phone to register this application Administrator
  account

    :::note
    This step can be skipped during the wizard, and an MFA can be added at a later time,
    but that is not recommended.
    :::


- Active Directory service account and its password

    :::note
    This service account must have membership in the Domain Admins group for the domain
    where the primary application Administrator account resides.
    :::


Follow the steps to walk through the Setup Wizard.

**Step 1 –** Launch the  Setup Wizard.

![Setup Wizard on the Welcome page](/images/privilegesecure/4.1/accessmanagement/install/welcome.webp)

**Step 2 –** Click **Let's get started**.

![Setup Wizard on the Step 1 page](/images/privilegesecure/4.1/accessmanagement/install/administratoruser.webp)

**Step 3 –** On the Step 1 page, you identify your primary application Administrator account. Enter
the following information and then click Next:

- Domain – Enter the account's domain in `domain.com` format
- Username – Enter the account. The domain will auto-populate from the field above.
- Password – Enter the account's password. The eye icon can be used to view the entry.

![Setup Wizard on the Step 2 page](/images/privilegesecure/4.1/accessmanagement/install/authenticator.webp)

**Step 4 –** On the Step 2 page, you register your primary application Administrator account with an
MFA provider.

- Scan the QR code or manually enter the provided key into the MFA phone app. The MFA will provide a
  verification code.
- Enter the verification code in the textbox.
- Click **Next**, while the code is still active.

    :::note
    MFA for this account can be done at a later time through the User details page. If
    that is desired, click Setup Later and skip to Step 6 of these instructions. The initial account
    will be set to Not Required MFA. See the
    [User, Group, & Application Details Page](/docs/privilegesecure/4.1/admin/interface/usersgroups/usergroupapplication/usergroupapplication.md)
    topic for additional information.
    :::


![Setup Wizard on the Step 2 page displaying the recovery codes](/images/privilegesecure/4.1/accessmanagement/install/authenticatorcodes.webp)

**Step 5 –** One-time recovery codes are provided for the registered authenticator. It is
recommended to copy these codes with the Copy to clipboard link and save them in a secure location
in case you lose your phone with the authenticator app. Click **Next**.

![Setup Wizard on the Step 3 page](/images/privilegesecure/4.1/accessmanagement/install/adserviceaccount.webp)

**Step 6 –** On the Step 3 page, you identify the Active Directory service account with domain
administrator privileges. Enter the following information and then click **Next**:

- Username – Enter the account. The domain will auto-populate from the Step 1 page.
- Password – Enter the account's password. The eye icon can be used to view the entry.

:::note
This service account will be used to run domain synchronization. If you do not have an
account with domain administrator privileges ready when walking through the Setup Wizard, you can
click the Exit Wizard link. See the [Exit Wizard Early](#exit-wizard-early) topic for additional
information.
:::


![Setup Wizard on the Step 4 page](/images/privilegesecure/4.1/accessmanagement/install/sync.webp)

**Step 7 –** On the Step 4 page, click **Sync**. The Active Directory domain synchronization begins
and is tracked by the status bar. When synchronization is complete, the Step 5 page opens.

:::note
Problems with service registration may occur if accessing the wizard from a remote
IP address. If this does occur during domain synchronization, you will be redirected to a dedicated
error page, which allows you to ignore certificate errors during the initial configuration.
:::


![Setup Wizard on the Step 5 page](/images/privilegesecure/4.1/accessmanagement/install/resource.webp)

**Step 8 –** On the Step 4 page, select the first resource to be onboarded. The Setup Wizard will
create your first access policy to grant Domain Admin Access with an Activity Token to this
resource. The selected resource displays a green checkmark at the beginning of the row. Click **Add
resource**.

:::note
Available resources were discovered on the domain during the synchronization completed on
the Step 3 page. You can use the Search resources box to filter the list.
:::


![Check resources window](/images/privilegesecure/4.1/accessmanagement/install/checkresource.webp)

**Step 9 –** The Check resources window opens. The application is checking DNS resolution and WinRM
requirements. If a test fails you can fix the configuration and click Retest. To cancel the test,
click **Close**. When all tests are successful, the window and the Setup Wizard close automatically.

![My Activities interfacing displaying the Activity Token for Domain Admin Access activity created by the Setup Wizard](/images/privilegesecure/4.1/accessmanagement/install/myactivities.webp)

When the Setup Wizard closes, you are redirected to the My Activities interfacing . The activity
created by the Setup Wizard, Activity Token for Domain Admin Access, is displayed.

Take a
[Product Tour](/docs/privilegesecure/4.1/admin/navigation/producttour.md)
of the console or onboard more users and resources. See the
[Getting Started](/docs/privilegesecure/4.1/gettingstarted.md)
topic for additional information.

## Exit Wizard Early

It is possible to exit the Setup Wizard from Step 3, Step 4, and Step 5 pages. If you do that, then
the Setup Wizard will not create the Activity Token for Domain Admin Access activity. You will need
to complete the following to create your first access policy, depending on what page of the wizard
you exited from:

Exit From Step 3 Page – Domain Service Account

Navigate to the domain details page and add a new service account. See the
[Domain Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/domain/domain.md)
topic for additional information.

Complete the onboarding process misses on the Step 4 and Step 5 pages.

Exit From Step 4 Page – Active Directory Sync

Navigate to the domain details page and click Synchronize Now. See the
[Domain Details Page](/docs/privilegesecure/4.1/admin/interface/resources/detailspages/domain/domain.md)
topic for additional information.

Complete the onboarding process misses on the Step 4 and Step 5 pages.

Exit From Step 5 Page – Onboard First Resource and Create Access Policy

Navigate to the Resources page and add a new server. See the
[Add Resources Window](/docs/privilegesecure/4.1/admin/interface/resources/addandchange/addresourcesonboard/addresourcesonboard.md)
topic for additional information.

Navigate to the Access Policies page and create a new access policy. See the
[Add Access Policy](/docs/privilegesecure/4.1/admin/interface/accesspolicy/addaccesspolicy.md)
topic for additional information.
