---
title: "Google Workspace"
description: "Connect Google Workspace to AI Security so it can read third-party app access and domain-wide delegation in one Google Workspace domain."
sidebar_position: 61
---

# Google Workspace

Connect Google Workspace so AI Security can read third-party app access and domain-wide delegation in one Google Workspace domain. You create a Google Cloud service account, a super administrator authorizes it for domain-wide delegation, and you enter its key in 1Secure.

AI Security signs in as the service account and acts as the super administrator you name. The same key can also read the domain's Google Cloud service accounts.

## Before you start

- Have a super administrator authorize the delegation. The super administrator is the user AI Security acts as.
- Have a Google Cloud project to hold the service account, and a user who can create one there.
- Sign in to the Google Cloud console at console.cloud.google.com and the Admin console at admin.google.com.
- Allow up to 24 hours for Google to apply delegation changes.

## Create the service account in Google

1. In the Cloud console, select **IAM & Admin > Service accounts**, and click **Create service account**.
2. Enter a name, for example "netwrix-1secure-ai-security".
3. Open the account, click **Show advanced settings**, and under **Domain-wide delegation** copy its "Client ID", a number.
4. Under **APIs & Services**, enable the Admin SDK API in this project.
5. To read the Google Cloud service accounts, also enable the Cloud Resource Manager API, the Identity and Access Management (IAM) API, and the Cloud Logging API in the same project. Until you enable each one, the project and service account reads answer "API has not been used in project".
6. Open the account's **Keys** tab, click **Add key**, then click **Create new key**.
7. Select **JSON** as the key type, and click **Create**. The browser downloads the key file.
8. In the Admin console, select **Security > Access and data control > API controls**, then select **Manage Domain Wide Delegation**, and click **Add new**.
9. In **Client ID**, enter the client ID from step 3, not the account's email.
10. In **OAuth scopes**, paste the scopes from the first table in [Permissions](#permissions), separated by commas, and click **Authorize**.
11. To read the Google Cloud service accounts, select **IAM & Admin > IAM**, and grant the service account `roles/browser`, `roles/iam.serviceAccountViewer`, and `roles/logging.viewer` on the organization.

## Connect the source

:::note
The Google Workspace row shows "Coming soon" and has no **Connect** button. These steps apply when the button is available.
:::

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Google Workspace".
3. In the Google Workspace row, click **Connect**. The **Connect Google Workspace** dialog opens.
4. Open the downloaded key file in a text editor, and copy all of it from the first brace to the last.
5. In **Service account JSON key**, paste the key. AI Security reads the key from this field only, never from a file path.
6. In **Super administrator email**, enter the super administrator's email address.
7. Leave **Read Google Cloud service accounts** empty to read the Google Cloud service accounts, or enter 0 to skip them.
8. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
9. Click **Done**.
10. Delete the downloaded key file.

Select the Google Workspace row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded" and the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, or "Partly scanned" when the page limit cut a listing. |

The test reads one user as the super administrator. It proves the key, the super administrator, and the user scope. It doesn't prove the other scopes or the Cloud roles. Every scan also says that it rebuilds delegation from six months of audit log, so a healthy domain reads "Succeeded" with that listed as skipped.

## What this connector reads

- The third-party apps that hold standing OAuth access to your users' Drive, Gmail, and Calendar, from each user's granted tokens and from the OAuth token audit log.
- Domain-wide delegation, rebuilt from the admin audit log. Google lists delegation nowhere else and keeps that log for six months, so AI Security doesn't see an older, idle delegation.
- Delegation in use, from the access evaluation log.
- Each OAuth token audit event as an activity record. A consent, a revocation, or a denied consent is a grant change. An app's API call with a user's token is a sign-in. Each record names the user, the app, and the time. AI Security reads consents, requests, denials, and revocations over the six months the log keeps. Set how far back it reads API calls under **Settings** in the Activity window.
- From the Drive audit log, the shares that a service account or app made, such as changes to user access, document visibility, and shared drive membership. Each share is recorded on that app: the event, the time, the actor, the file's ID and title, the shared drive, the visibility before and after, and the person, group, or domain given access. AI Security keeps nothing else of the event, and it doesn't read a share that a person made alone.
- If a scan reads fewer events than occurred, it lists "Activity after [moment], which the next scans read." among the skipped items, and the next scan reads on from there.
- The users, with whether each is a super administrator or a delegated administrator, the customer's name, and the policies that govern third-party app access.
- Optionally, the Google Cloud projects the service account can see, their service accounts, and each account's user-managed keys.
- With the Google Cloud half, who created each of those service accounts, from the project's Admin Activity audit log, for as long as the project keeps it. Only a person is named. A service account that another service account created names nobody.
- If no one is named as having authorized or created an app, AI Security suggests the domain's administrators as its owner: super administrators first, then delegated administrators, and never a suspended account. The suggestion reads "Administers the Google Workspace". AI Security never shows the administrator as the person who made the app.

An issue about unconfigured third-party apps, domain-wide delegation, or Drive external sharing appears on **Google Workspace workspace settings**, the domain itself, rather than on an OAuth client. It has no owner. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

The token audit log and each user's granted tokens are the only two places an app appears. If AI Security can read neither, the scan fails rather than report a domain with no third-party apps.

Apps installed from the Google Workspace Marketplace can't be listed, because Google publishes no interface for a domain's installed Marketplace apps. An installed app appears only after it obtains a token, so every scan lists this as skipped. Compare the list by hand at **Apps > Google Workspace Marketplace apps > Domain installed apps** in the Admin console.

### What it never touches

- It never writes. Every call is a read.
- From the audit log, it keeps who created a service account, when, and the method. It never keeps the request's content.
- It reads no mail, no files, and no calendar events. It reads which apps may reach them.
- It never deletes a token, although one scope would allow it.
- It reads key names and dates, never key material.
- It reads at most 500 users' tokens, 100 projects, and 500 key lists in one run, and says so.

## Permissions

Enter these domain-wide delegation scopes on the client's delegation row.

| OAuth scope | What AI Security reads with it | Scan without it |
|-------------|--------------------------------|-----------------|
| `https://www.googleapis.com/auth/admin.reports.audit.readonly` (required) | The token, admin, access evaluation, and Drive audit logs, and the activity records. | Nothing is read and the test fails. AI Security asks for this scope and the user list scope together, and Google refuses the whole request when either is missing. |
| `https://www.googleapis.com/auth/admin.directory.user.readonly` | The user list, which the test reads. | Nothing is read and the test fails. |
| `https://www.googleapis.com/auth/admin.directory.customer.readonly` | The customer's name. | The scan carries no domain name. |
| `https://www.googleapis.com/auth/admin.directory.user.security` | Each user's granted tokens. | Apps come from the audit log only. |
| `https://www.googleapis.com/auth/cloud-identity.policies.readonly` | Third-party app access policies, for a super administrator only. | Third-party app access policies are unknown. |

Google publishes no read-only form of `admin.directory.user.security`. It also permits deleting a user's tokens, which AI Security never does. You can leave it out, and apps then come from the audit log only.

For the Google Cloud half, AI Security uses the `https://www.googleapis.com/auth/cloud-platform` scope for the service account, and the roles are the boundary.

| Google Cloud role | Where | What AI Security reads with it | Scan without it |
|-------------------|-------|--------------------------------|-----------------|
| `roles/browser` | The organization. | The project list. | Service accounts are unknown. |
| `roles/iam.serviceAccountViewer` | The organization, or each project. | Service accounts and their user-managed keys. | Those are unknown, not absent. |
| `roles/logging.viewer` | The organization, or each project. | Who created each service account, from the Admin Activity audit log. | Those service accounts name no creator, and the scan names the projects it couldn't read. |

The audit log read also needs logging.googleapis.com enabled on each project, which Google does on a new project by default.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The key or the super administrator isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter both again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Google refused the key itself. Under **Technical details**, the test says: "Download a new JSON key for the service account in the Google Cloud console and save it in the source's settings." | Create a new key, and paste its whole contents. |
| "The credential works, but access was denied. A permission is missing." | The client isn't authorized, or a scope is missing. The test says: "Authorize the service account by its numeric client ID with every scope the scan asks for in the Google Admin console, then allow up to a day." If the token was issued and the user list was refused, it says: "Authorize the service account's client ID for domain-wide delegation with the reports audit and directory user scopes in the Google Admin console, then allow up to a day." | Check that the delegation row uses the numeric ID and every scope, then wait up to 24 hours. |
| "The platform didn't answer, or said it is down or busy." | Google gave no answer, or refused the sign-in for a reason that isn't a permission: a super administrator that doesn't exist or is suspended, a skewed clock, or a bad signature. **Technical details** say which, for example "Set an active super administrator as the administrator in the source's settings." or "Scan again, and if it happens again, send Copy for support to Netwrix support." | Set the super administrator to a live account, or do what **Technical details** say. |
| "The platform didn't answer in time." | Google didn't answer in time. | Click **Test again**. |
| "The platform slowed down the test. Wait a few minutes and test again." | Google slowed the test down. The test shows "Warning". This isn't a missing permission. | Wait a few minutes, and click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish, for example when the pasted key isn't complete JSON. | Paste the whole key file again, then contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with a skipped item and what to do on its line, for example "Grant the scanner's service account the Logs Viewer role on each project." | Google refused an optional scope or Cloud role. If the refusal is about one project, user, or service account, the skipped item names it, such as "Who created the Google Cloud service accounts in the project my-project." | Add the scope or role the line names. The tables in [Permissions](#permissions) list each one. |
| "Succeeded", with a skipped item that names the item, such as "The user, project or service account my-project.", and the line "Check that user, project or service account in Google, then scan again." | Google refused one user's OAuth grants, one project's service accounts, or one service account's keys while others of the same kind answered. What the detail names is unknown this run, not absent. | Check the user, project, or account the detail names, then scan again. The scope is already granted. |
| "Succeeded", with a skipped item naming a Cloud project | A Cloud project came back without its project ID, so AI Security didn't read its service accounts. | Check the project the detail names in the Google Cloud console, then scan again. |
| "Partly scanned", with "Part of this Google Workspace domain, because Google slowed the scanner down." | Google rate limited a read. AI Security treats this as a rate limit, never as a missing scope. The scan says: "Wait for the next scan, which reads it again." 1Secure also starts a follow-on scan itself. | Nothing. It fills in on the next scan. |

## Security notes

- AI Security stores the key and the super administrator email encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
- AI Security sends the signed request only to oauth2.googleapis.com, and the tokens only to Google's admin, Cloud Identity, Resource Manager, IAM, and Cloud Logging hosts.
- To revoke access, delete the client's row under **Manage Domain Wide Delegation**, and delete the key under the service account's **Keys**. **Disconnect** on the source removes it from 1Secure.
