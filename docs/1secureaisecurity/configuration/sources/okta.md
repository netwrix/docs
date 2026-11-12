---
title: "Okta"
description: "Connect an Okta org to AI Security with an API token so it can read app integrations, their assignments and grants, and the org's API tokens."
sidebar_position: 67
---

# Okta

Connect Okta so AI Security can read one Okta org's app integrations, their assignments and grants, and the org's API tokens. You create an API token in Okta, which Okta calls an SSWS token, and enter it in AI Security. One token reads one org, so connect each org as its own source.

The token has no scopes of its own. It acts with the admin role of the person who creates it.

## Before you start

- A Super Administrator creates the admin account and assigns its role.
- Use a dedicated service account that is never deactivated. A token stops working when the admin who created it is deactivated, and Okta recommends a service account for this.
- Know the org's address, for example `https://acme.okta.com`. It must be https and on okta.com or okta-emea.com.

## Connect Okta

### Create the API token in Okta

1. In the Okta Admin Console, select **Security > Administrators**, and assign the service account the Super Administrator role. Read-only Administrator reads only the apps, users, and groups. Without Super Administrator, the reads of admin roles and scope grants described in [Permissions](#permissions) are incomplete.
2. For the API token list, give the service account an admin role that includes the `okta.users.apitokens.read` permission, such as a custom admin role.
3. Sign in to the Admin Console as the service account.
4. Select **Security > API > Tokens**, and click **Create token**.
5. Enter a name, for example "Netwrix 1Secure AI Security", and create the token.
6. Copy the **Token value**. Okta shows it once.

:::warning
A token stops working when the admin who created it is deactivated. Create the token as a service account that stays active.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Okta".
3. In the Okta row, click **Connect**. The **Connect Okta** dialog opens.
4. In **Okta domain**, enter the org address, with https://. The address also names this source.
5. In **API token**, paste the token value.
6. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
7. Click **Done**.

The org address must be a public https address under `okta.com` or `okta-emea.com`, for example `https://acme.okta.com`. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

Select the Okta row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded" and the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as a refused read or an app's detail that didn't read. "Partly scanned" appears when a list was cut short. |

The scan records a warning and reports the token's visibility as unknown. The scan says: "Okta publishes no documented endpoint that identifies the calling token or its owner, so the admin role bounding what this scan could see is unknown." No permission clears the warning. The results are complete for what the token's role can see.

## What this connector reads

- Every app integration, and for OAuth service apps, their scope grants and admin roles.
- The people and groups assigned to each app, including assignments to everyone. The scan records an app assigned to Okta's built-in Everyone group as assigned to everyone, and doesn't list its people one by one.
- The org's active API tokens, who created each, and that admin's roles.
- How many people hold Super Administrator. An issue about that count appears on **Okta workspace settings**, the org itself, rather than on one of its apps or tokens. It has no owner. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).
- Each API token's last use, from the Okta system log, because Okta's token list has no last-used field. Also when each app was created and by whom.
- The owner behind each app or token as a login, and whether that person is still active.
- The org's name, for report headers.

### What it never touches

- AI Security never writes to Okta.
- Token values. Okta's token list returns none.
- System log reads are limited to the following events, inside the System Log's retention.
  - Events made with each API token.
  - Events made by an OAuth app acting as itself.
  - App token grants.
  - App creation.
  - An app's lifecycle changes: deactivation, a new client secret or key, consent grants, and admin role grants.
- Any user's password, factors, or sessions.
- AI Security keeps its share of Okta's rate limits small, so your own integrations keep working.

## Permissions

| Read | Required role or permission | Scan without it |
|------|-----------------------------|-----------------|
| Apps, their users and groups | An admin role that includes `okta.apps.read`, such as Read-only Administrator. | Nothing is read and the test fails. |
| Admin roles, and the admin roster | Super Administrator. | An app's or a token's actual reach is unknown, and the Super Administrator count is unknown. |
| The org's API tokens | An admin role that includes `okta.users.apitokens.read`, such as a custom admin role. | API tokens are unknown, not zero, and no dormant token finding is raised. |
| Each app's scope grants | Super Administrator. | An app's grants are unknown, not none. |
| Owners by login | An admin role that reads users, such as Read-only Administrator. | Owners appear as Okta user IDs, and the scan doesn't flag a departed owner. |
| The system log | An admin role that reads the System Log, such as Read-only Administrator. | The scan derives a token's last use from its expiry, which is less exact. |
| The org's name | An admin role that reads the org settings, such as Read-only Administrator. | Reports carry no org name. |

Read-only Administrator reads the apps, users, and groups, but not the admin roles, the admin roster, or the app scope grants. The Super Administrator spread finding, the overscoped app finding, and the sign-on signal need those reads, so use Super Administrator for them. For the API token list, AI Security names the permission `okta.users.apitokens.read` rather than a role, because Okta doesn't document which standard roles carry it.

You can't connect an Okta API service app that signs in with client credentials. The **Connect Okta** dialog accepts an API token only, and sends it as an SSWS token. If an older setup guide names the fields "Org ID" and "Instance URL", enter that value in **Okta domain**. If it names "API key", enter that value in **API token**.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address or the token isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter both again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Okta refused the token: it is wrong, revoked, expired from disuse, or its admin was deactivated. | Create a new token as the service account, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | Okta accepted the token and refused the app list, or the list came back empty. Under **Technical details**, the test says: "Give the API token's admin the Okta Read-only Administrator role." For an empty list, it says: "Check that the org has app integrations and that the credential's admin role covers them." | Assign the role that step 1 of the token procedure describes, then create a new token. If the org has apps, check the role's resource set. |
| "The credential works, but Okta refused part of what the scan reads." | The test doesn't raise this for an API token, because the test reads only the app list. A later read that Okta refuses shows on the scan instead. | See "If the scan skips something or warns" in this article. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't https, or isn't on okta.com or okta-emea.com, or its name resolves to a private address. AI Security refuses a custom domain or a preview org. | Use the org's okta.com or okta-emea.com address. |
| "The platform didn't answer, or said it is down or busy." | Okta didn't answer. | Test again later. |
| "The platform slowed down the test. Wait a few minutes and test again." | Okta rate limited the read. This is a warning, not a missing permission. | Wait a few minutes, then click **Test again**. |
| "The platform didn't answer in time." | Okta didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the token. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact Netwrix Support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with the read skipped, for example "The API tokens in this Okta org, so unused tokens are not found." | Okta refused a read described in the Permissions section. The line under it names the role or permission, for example "Create the API token as an admin whose role includes okta.users.apitokens.read." | Give the service account the role permission the table names, then scan again. |
| "Partly scanned", with "Part of this Okta org, because Okta slowed the scanner down." skipped | Okta rate limited a read. AI Security starts a follow-on scan itself. The scan says: "The inventory is incomplete this run, not absent". The line says: "Wait for the next scan, which reads it again." | Nothing. It fills in on the next scan. |
| "Succeeded", with "The Okta app, user or API token [name]." skipped, naming one app, user, or token owner | Okta refused one item while others of its kind read: an app's grants, assignments, or admin roles, a user, or a token owner's roles. The scan says: "one per item read was refused, or could not be made, so what the detail names is unknown this run rather than bounded: an app's scope grants, assignments or admin roles, a user, or a token owner's roles. Where other items of the same kind read, the scope is granted and the refusal is about that one item; check it, then scan again." | Check the item the detail names, then scan again. The role permission is already in place. |
| "Succeeded", with "The Okta app, user or API token [app id]." skipped | An app states no OAuth client ID, so AI Security couldn't look up its admin roles and its reach is unknown. | Check the app the detail names in the Okta Admin Console, then scan again. |

## Security notes

- AI Security stores the token when you click **Connect** and never shows it again.
- AI Security sends the token only to the org address you entered, which it checks before anything is sent.
- To revoke, select **Security > API > Tokens** in Okta and revoke the token, or deactivate the service account. **Disconnect** on the source removes it from AI Security.
