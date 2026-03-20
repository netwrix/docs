---
title: "First Login and Admin Setup"
description: "Initial administrator account creation and login"
sidebar_position: 20
---

# First Login and Admin Setup

After installing Access Analyzer, the first step is to access the web interface, create your administrator account, and sign in.

## Access the Application

Open a browser and navigate to:

```
https://<SERVER_IP_OR_HOSTNAME>
```

Replace `<SERVER_IP_OR_HOSTNAME>` with the IP address or hostname of the VM where Access Analyzer is installed.

:::note
Access Analyzer uses a self-signed TLS certificate by default. Your browser will display a security warning — accept the warning to proceed to the login page. To use a trusted certificate, see [SSL / TLS Configuration](/docs/accessanalyzer/1_0/install/ssl).
:::

## Create the Administrator Account

The first user to create an account is automatically assigned the **Administrator** role.

1. On the login page, click **Create Account**
2. Enter the following:
   - **Full Name** — Your display name
   - **Email Address** — Used as your login username
   - **Password** — Must meet complexity requirements
   - **Confirm Password** — Re-enter the password
3. Click **Create Account**

:::warning
The first account created receives full administrator privileges. Ensure this account is created by an authorized administrator.
:::

## Sign In

1. Enter the email address and password you used during account creation
2. Click **Sign In**

You are now signed in with full administrator access.

## Next Steps

- [Overview Dashboard Walkthrough](/docs/accessanalyzer/1_0/gettingstarted/dashboardwalkthrough) — Explore the main interface
- [Your First Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/overview) — Add a data source and run your first scan
- [Users and Roles](/docs/accessanalyzer/1_0/admin/users/overview) — Create additional user accounts
