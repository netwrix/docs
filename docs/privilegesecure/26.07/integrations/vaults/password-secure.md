---
title: "Netwrix Password Secure integration"
description: "Use Netwrix Password Secure as a vault so Netwrix Privilege Secure checks out AD user passwords for activities, using a Password Secure API key."
sidebar_position: 60
---

# Netwrix Password Secure integration

The Password Secure connector lets Netwrix Privilege Secure check out passwords that are stored in Netwrix Password Secure. Activities sign in with accounts whose passwords Password Secure holds, so the passwords don't have to be copied into Privilege Secure. For how vault connectors work in general, see [Third-party vault connectors](vault-connectors.md).

{/* TODO screenshot: redraw the 26.03 Password Secure vault diagram (ps-vault-diagram.webp) for 26.07 */}

The **Password Secure** connector template is controlled by the `password_secure` feature flag. The flag is on by default, so the template appears in the **Connector Template** list.

{/* TODO verify: how a customer turns the password_secure flag on if the Password Secure template is missing from the Connector Template list. Don't document the feature utility until Product confirms it is supported for customers. */}

## Prerequisites

- A working Password Secure server and Password Secure Web Application. Install them on a separate server from Privilege Secure. See the Password Secure [installation](/docs/passwordsecure/9_3/installation/installation) and [Web Application](/docs/passwordsecure/9_3/configuration/webapplication/web_application) documentation.
- A Password Secure API key with read access to passwords. See [Generate an API key](#generate-an-api-key).
- In Password Secure, an entry for each account to check out, created with the **AD User** template. The **Domain** and **Username** fields of the entry must match the account that the activity uses.
- The Password Secure API URL reachable from the Privilege Secure server.

## Generate an API key

Privilege Secure uses an API key to sign in to Password Secure.

1. Sign in to Password Secure as an administrator.
2. Select **Tools** > **API Keys**.
3. Click **Create a new API key**.
4. Complete the form:
   - **Name:** `NPS Integration`
   - **Expires:** A validity period, such as one year.
   - **Access Rights:** Read
   - **Access Scopes:** Password
5. Click **Next**, and copy the API token to a safe location.

:::warning
Password Secure shows the token once. If you lose it, generate a new key.
:::

## Create the AD user entry

Skip this step if the account already exists as an **AD User** entry. In production, use existing entries.

1. In Password Secure, select **Passwords** > **New Item**.
2. For **Item Type**, select **AD User**.
3. Enter a **Description**, the **Domain**, the **Username**, and the **Password**.
4. Save the entry.

**Example:** To check out the account `EXAMPLE\svc-backup`, create an **AD User** entry with the domain `EXAMPLE` and the username `svc-backup`.

## Add the API key as a service account

1. In the Privilege Secure Console, select **Configuration** > **Service Accounts**.
2. Click **+** above the list.
3. Enter a **Name**, such as `NPS Password`.
4. Enter any identifier for **Username**, such as `NPS`.
5. For **Password**, paste the Password Secure API key.
6. Click **Save**.

See [Service accounts](../../configuration/service-accounts/service-accounts.md) for the other fields.

## Add the Password Secure connector

1. Select **Configuration** > **Integration Connectors**.
2. Click **+** above the list.
3. Enter a name, such as `NPS Password`, and an optional description.
4. For **Connector Template**, select **Password Secure**.
5. Complete the fields in the following table.
6. Click **Save**.

| Field | Description |
|---|---|
| **API Url**\* | The base URL of the Password Secure API, such as `https://<password-secure-server>/api`. |
| **Service Account**\* | The service account that holds the Password Secure API key. |
| **Skip Certificate Check** | Under **Advanced**. When selected, Privilege Secure doesn't validate the Password Secure server certificate. The option is cleared by default. Leave it cleared in production. |

An asterisk (\*) marks a required field.

{/* TODO verify: the API Url default. The code seeds `https://passwordsecure/api`; the lab form showed the same value. */}

![The Add Integration Connector form with the Password Secure template selected, showing API Url, Service Account, and the collapsed Advanced section.](/images/privilegesecure/26.07/integrations/integration-connector-password-secure-form.webp)

## Use the connector in an activity

1. Create an activity. See [Create an activity](../../configuration/activities/create-activity.md).
2. Enter a **Name** and **Description**, and select the **Platform**.
3. For **Login Account**, select **Vault**.
4. For **Activity Type**, select **Interactive**.
5. For **Vault Connector**, select the Password Secure connector.
6. Click **Save**.

Then add the activity to a resource-based access policy, with the users and resources that can use it. See [Create a resource-based access policy](../../configuration/access-policies/resource-based-policy.md).

## How Privilege Secure finds the password

For each session, Privilege Secure looks up the account in Password Secure by its domain and user name.

- The user name comes from the activity's login account name. If the name has no domain, Privilege Secure uses the NetBIOS name of the target host as the domain.
- Both values must match a Password Secure entry exactly.
- The check-out fails if Password Secure has no matching entry, or has more than one.

The check-out error messages begin with "NPWS Integration >>", such as "NPWS Integration >> No password was found for the given parameters" and "NPWS Integration >> More than one password was found for the given parameters".

Release 26.07.3 fixes an error in the username match during lookup. If check-out fails to find an account that exists in Password Secure, upgrade to 26.07.3.

{/* TODO verify: customer wording for the 26.07.3 fix (447232, Get-NpwsPassword null reference in username matching) and the earlier 26.07.2 fix (PSAM-1307, PSAM-1434). */}

## Update the Password Secure SDK files

Privilege Secure includes the Password Secure SDK files that it uses to communicate with Password Secure. The included files work with Password Secure 9.2.0 and later. To use a newer Password Secure release, replace the files in the `PsrApi` folder of the Action Service Worker installation with the files from the newer SDK. Download the SDK from the Password Secure Customer Information System.

{/* TODO verify: the SDK file path (`C:\Program Files\Stealthbits\PAM\ActionServiceWorker\PsrApi`) and the 9.2.0 minimum for 26.07. The 26.03 page gives both; the code loads the DLL from a `psrapi` folder one level above the module. */}
