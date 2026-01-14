---
title: "First Launch"
description: "First Launch"
sidebar_position: 30
---

# First Launch

To launch the Recovery Console, either:

- Click the desktop icon
- Type `http:/localhost:3005` in a web browser and press Enter

## First Login

On the first login to the Recovery Console, use the credentials configured on the Administrator Role
page during installation. This account has the Administrator role needed to manage the application.
If a group is used, any account with membership to this group can login.

Follow the steps to login to Identity Recovery.

**Step 1 –** Launch the Recovery Console. The Log in page is displayed.

![ Recovery for Active Directory - Login page](/images/recoveryforactivedirectory/3.1/product/login.png)

**Step 2 –** Log in with credentials configured on the Administrator Role page of the Identity Recovery Setup wizard during installation. See the [Install the Application](/docs/recoveryforactivedirectory/3.1/install/application.md)
topic for additional information on the administrator role. The username must be entered in the
following format:

- Domain\Username

**Step 3 –** Click **Log in**.

Once logged in, the first step is to configure a domain. See the
[Domain Backup Configuration Page](/docs/recoveryforactivedirectory/3.1/admin/domainbackupconfig.md) topic for
additional information.

The administrator must also add users who can access the application. Once these users have access,
see the [Log into the Recovery Console](/docs/recoveryforactivedirectory/3.1/install/login.md) topic for information on accessing and signing into the Recovery Console.
