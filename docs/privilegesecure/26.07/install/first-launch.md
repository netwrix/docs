---
title: "Run the setup wizard"
description: "Sign in to the console for the first time and complete the five-step setup wizard to create the first administrator, sync Active Directory, and add a resource."
sidebar_position: 50
---

# Run the setup wizard

After you install Netwrix Privilege Secure for Access Management (Privilege Secure), open the console and complete the setup wizard. The wizard creates the first administrator, registers a multi-factor authentication (MFA) app for that account, adds the Active Directory (AD) service account, synchronizes the domain, and onboards the first resource.

## Before you begin

Gather the following:

- A domain account and its password for the primary application administrator. Use a standard, non-privileged account. Privilege Secure grants the account full administrative rights in the product, and you use the product to reach privileged accounts.
- An MFA authenticator app, such as Microsoft Authenticator or Google Authenticator, on your phone. You can skip MFA registration and add it later, but skipping isn't recommended.
- An AD service account and its password. The account must be a member of Domain Admins for the domain of the primary administrator. Privilege Secure uses it to scan resources and to provision and deprovision accounts that have temporary access to privileged systems.

## Open the setup wizard

Use either method:

- On the application server, double-click the **Netwrix Privilege Secure** desktop icon. The default browser opens the console.
- Open a supported browser and go to `https://localhost:6500` on the application server, or to `https://<nps-server>:6500` from another computer.

Until you create the administrator account, the sign-in page redirects to the wizard. After that, sign in with the administrator account you created, and the console returns you to the step you reached.

If you run the wizard from another computer, service registration can fail. See [Handle certificate errors](#handle-certificate-errors).

For the supported browsers, see [Client requirements](/docs/privilegesecure/26.07/requirements/client.md).

## Complete the wizard

Each wizard page shows its position, for example "Step 2 out of 5".

{/* TODO screenshot: wizard Welcome page. Blur nothing; no lab values on this page. */}

1. On the Welcome page, click **Let's get started**.

2. On **Create Your First User**, enter the following, and then click **Next**:

   - **Domain** – The domain of the account, in `domain.com` format.
   - **Username** – The account name.
   - **Password** – The account password. Use the eye icon to show the entry.

   {/* TODO screenshot: Create Your First User page. Use a placeholder domain and account. */}

3. On **Register Authenticator**, register the account with your MFA app:

   1. Scan the QR code, or enter the key into the app. Spaces and case in the key don't matter.
   2. Enter the code that the app shows in **Verification Code**.
   3. Click **Next** while the code is still valid.

   To register MFA later, click **Setup Later**. The wizard then skips the recovery codes. The account then uses the built-in **Not Required** authentication connector, so it signs in without a verification code. To register MFA later, an administrator assigns the **Internal MFA** connector to the account on the **Authentication Connector** tab, as described in [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md#authentication-connector). The account registers its authenticator at the next sign-in. See [Register multi-factor authentication](/docs/privilegesecure/26.07/user-guide/sign-in.md#register-multi-factor-authentication).

   {/* TODO screenshot: Register Authenticator page. Blur the QR code and the key. */}

4. Click **Copy to clipboard** to copy the one-time recovery codes, save them in a secure location, and then click **Next**. You can use a recovery code to sign in if you lose the device that runs the authenticator app.

   {/* TODO screenshot: recovery codes page. Blur the recovery codes. */}

5. On **Add an Active Directory Service Account**, enter the **Service Account Username** and the password, and then click **Next**. The domain comes from the first page.

   The account must be a member of the Domain Admins group of the domain. If it isn't, the wizard rejects the account and reports that the user isn't a member of Domain Admins.

   {/* TODO screenshot: Add an Active Directory Service Account page. Use a placeholder account. */}

6. On **Synchronize the Active Directory Domain to Netwrix Privilege Secure**, click **Sync**. The page shows progress while it processes computers, groups, group members, service accounts, and users. The wizard also registers and health-checks the Privilege Secure services during this step. When synchronization completes, the next page opens.

   Privilege Secure then synchronizes the domain automatically every 24 hours. To change the schedule later, see [Schedule synchronization](/docs/privilegesecure/26.07/resources/domains.md#schedule-synchronization).

   {/* TODO screenshot: domain synchronization in progress. */}

7. On **Add a Resource**, select one system from the list, and then click **Add resource**. Use **Search resources** to filter the list. The list comes from the synchronization in the previous step. Adding a resource checks connectivity and sets up an initial activity that starts a privileged session on that resource. You can add more resources later.

   {/* TODO screenshot: Add a Resource page. */}

   The **Check Resource** window runs the connectivity tests, including DNS resolution and Windows Remote Management (WinRM). If a test fails, click **Details** or **Troubleshoot** for the cause, fix the configuration, and click **Retest**. Click **Close** to cancel the tests. When all tests succeed, the window and the wizard close.

   {/* TODO screenshot: Check Resource window with test results. */}

When the wizard closes, the console opens **My Activities**. Adding the resource also creates an access policy named `New Policy <domain>`, where `<domain>` is your domain. The policy gives the first administrator the **Activity Token for Domain Admin Access** activity on that resource.

To continue, see [Configuration overview](/docs/privilegesecure/26.07/configuration/overview.md) and [Quick start](/docs/privilegesecure/26.07/getting-started/quick-start.md).

## Handle certificate errors

If service registration fails because the console isn't served over a trusted certificate, for example when you run the wizard from another computer, the wizard shows a certificate error page. Click **Ignore Certificate Errors in Service** to continue the initial configuration.

## Handle wizard errors

If a step fails, the wizard shows "An Error Has Occurred" with three options:

- **Try again** – Repeats the step.
- **View Logs** – Opens the logs.
- **Skip** – Skips the step.

For log locations, see [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

## Exit the wizard early

You can exit the wizard from the service account, synchronization, and resource pages. Click **Exit Wizard**, and then click **Exit** to confirm. The wizard then doesn't create your first activity, and you must set it up manually. Finish setup based on where you exited:

| Exited from | Complete setup |
| --- | --- |
| Add an Active Directory Service Account | Add a service account on the domain details page, then synchronize the domain and add a resource. See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md). |
| Synchronize the Active Directory Domain | Click **Sync** on the domain details page, then add a resource. |
| Add a Resource | Add a server on the Resources page, then create an access policy. See [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md) and [Access policies overview](/docs/privilegesecure/26.07/configuration/access-policies/overview.md). |
