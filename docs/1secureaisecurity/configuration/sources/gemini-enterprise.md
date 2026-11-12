---
title: "Gemini Enterprise"
description: "Connect Gemini Enterprise to AI Security so it can read Google Cloud projects, Gemini Enterprise apps, Agent Engine deployments, and data stores."
sidebar_position: 60
---

# Gemini Enterprise

Connect Gemini Enterprise so AI Security can read the Google Cloud projects you list. It reads the identities your AI runs on, the Gemini Enterprise apps and Agent Engine deployments built there, and their data stores. You create a read-only service account in Google Cloud and enter an access token or a key for it in 1Secure.

## Before you start

- Have a project owner or IAM administrator create the service account and grant the roles.
- Decide between a token and a key. A key needs your organization policy to allow service account keys.
- Open the Google Cloud console at console.cloud.google.com.
- Know the IDs of the projects to scan.

The source takes one of two credentials for the service account. Know what each costs before you choose.

- **An access token.** You create it outside AI Security, by impersonating the service account or through workload identity federation. It leaves no key behind, so it raises no finding. Google expires it about an hour after you create it, and the source can't renew it, so it serves one test or one scan. This is the recommended path.
- **A JSON key.** It is the only credential that lasts from scan to scan, because AI Security creates a token from it on every test and scan. It is also a user-managed key on the service account, and this connector reports a user-managed key that never expires.

The source can't sign in by workload identity federation on its own. If you store both a token and a key, the source uses the key.

:::warning
If you connect with a JSON key, the service account that AI Security signs in as shows a "Long lived" credential on every scan until you delete the key.
:::

## Create the service account in Google Cloud

1. In the project, select **IAM & Admin > Service accounts**, and click **Create service account**.
2. Enter a name, for example "netwrix-1secure-ai-security".
3. In each project to scan, select **IAM & Admin > IAM**, and click **Grant access**.
4. Enter the service account's email, and add the nine roles from the first table in [Permissions](#permissions).
5. In each project, select **APIs & Services > Enabled APIs & services**, and enable any of the eight APIs that is off.
6. Copy each project's "Project ID" from the project picker.
7. For a token, allow your own account to impersonate the service account, open Cloud Shell, and run `gcloud auth print-access-token --impersonate-service-account=<service-account-email>`.
8. Copy the token it prints. The token is valid for about an hour.
9. For a key only: in **IAM & Admin > Service accounts**, open the account's **Keys**, click **Add key**, then click **Create new key**.
10. Select **JSON**, and click **Create**. The browser downloads the key file. The key shows as a "Long lived" credential on this service account.

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Gemini Enterprise".
3. In the Gemini Enterprise row, click **Connect**. The **Connect Gemini Enterprise** dialog opens.
4. In **Project IDs**, enter one or more project IDs separated by commas, for example `ai-prod,ai-dev`.
5. Under "Choose one of the following to connect:", in **Access token**, paste the token. Or open the downloaded key file in a text editor, copy all of it from the first brace to the last, and paste it into **Service account JSON key**.
6. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
7. Click **Done**.
8. If you used a key, delete the downloaded key file.
9. If you used a token, start the scan within the hour. Before each later test or scan, create a new token, and enter it with the project IDs under **Edit**. Entering one setting replaces the whole stored credential.

Select the Gemini Enterprise row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". With a token, this doesn't show that the token has expired. |
| Last test | "Succeeded", or "Warning" when one project was read and another refused. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped. Most scans list one item, because Google's lists name no creator on service accounts and keys. "Partly scanned" when the page limit cut a list. |

A scan can list "Agent Engine agents in the Google Cloud project [project], in the locations that do not offer Agent Engine, where no agent can run." among the skipped items. This needs no action. Google doesn't offer Agent Engine to the project in those locations, so no agent can run there.

## What this connector reads

- In each listed project: the service accounts, their user-managed keys, and when each account and key last authenticated.
- API keys, and whether each is restricted.
- Agent Engine deployments and the identity each runs as, and Agent Builder apps. Google states no run-as identity on an Agent Builder app.
- Gemini Enterprise apps, and the agents people build inside each one, each with its app and the data stores that app answers from. Google lists those agents only to a role that can also change them, so AI Security reads them only if you grant the optional role in [Permissions](#permissions). Without it, the scan lists the app and says its agents are unknown.
- Vertex AI Search data stores, what they are built on, and whether access control is on. AI Security reads data stores and apps in the global, `us`, and `eu` locations.
- Roles granted to everyone on the internet (allUsers) or to every Google account (allAuthenticatedUsers) in a project that runs an agent.
- Which service accounts hold Vertex AI and Discovery Engine roles. AI Security doesn't keep the people and groups in those bindings.
- Who created each Agent Engine deployment, app, and Gemini Enterprise agent, from the project's Admin Activity audit log, for as long as the project keeps it. Only a person is named. A creation by a service account names nobody.
- Who changed each Gemini Enterprise agent and when, from the same audit log. Each update says which fields were saved, never what was entered in them.
- Who holds Owner or Editor on each project. If the audit log names no person for an agent, AI Security suggests each such user as its owner. It never records them as the owner, so the agent stays unowned. It doesn't suggest groups and service accounts.
- Which of the eight Google APIs listed in [Permissions](#permissions) are enabled.

Two kinds of issue appear on **Gemini Enterprise workspace settings**, with no owner and no page to open:

- An issue about data stores with access control off. It appears once per project and names each such store.
- An issue about each allUsers or allAuthenticatedUsers grant.

An issue about a service account that holds a basic project role stays on an agent in that project. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

### What it never touches

- It only reads and never writes.
- It drops key material. It never keeps API key strings and private key data.
- It reads no prompts, no documents in a data store, and no model output.
- From the audit log, it keeps who created an agent or app, when, and the method. It never keeps the request's content, which for a deployment carries its environment. It doesn't look up service accounts and keys there, so they carry no creator.

## The Cloud edition and the business edition

Gemini Enterprise comes in two editions, and this connector reads one of them.

- **The Cloud edition** is the Gemini Enterprise app in your own Google Cloud project. AI Security reads it in the projects you list, with the roles in [Permissions](#permissions).
- **The business edition** is bought per seat at business.gemini.google, outside Google Cloud. It keeps its agents on a project that Google manages for you. That project isn't in your organization's folders, and you can't grant a service account a role on it, so AI Security doesn't list those agents. Only a person signed in to that edition can see them, and this connector doesn't ask for that sign-in. Every scan says so once, as advice.

## Permissions

Grant these roles on each project.

| Google Cloud role | What AI Security reads with it | Scan without it |
|-------------------|--------------------------------|-----------------|
| `roles/browser` | The project itself, which the test reads. | Nothing in the project is read. |
| `roles/iam.serviceAccountViewer` | Service accounts and their keys, which the test reads. | The project fails the test. |
| `roles/serviceusage.serviceUsageViewer` | Which APIs are enabled. | Each API's state is unknown. |
| `roles/serviceusage.apiKeysViewer` | API keys. | API keys are unknown. |
| `roles/cloudasset.viewer` | Role bindings, and who owns and edits the project. Viewer and Security Reviewer don't replace this role. | Who holds AI roles is unknown, and nobody is suggested from the project. |
| `roles/aiplatform.viewer` | Agent Engine deployments. | Those are unknown. |
| `roles/discoveryengine.viewer` | Data stores and Agent Builder apps. | Those are unknown. |
| `roles/policyanalyzer.activityAnalysisViewer` | Last authentication of accounts and keys. | Which accounts and keys are stale is unknown. |
| `roles/logging.viewer` | Who created each agent and app, and who changed a Gemini Enterprise agent, from the Admin Activity audit log. | Those agents name no creator and no change, and the scan names the project. |
| `roles/discoveryengine.agentAdmin` (optional) | The agents built inside Gemini Enterprise apps. Google offers no read-only role that lists them, so this role can also create, change, and delete agents. | Those agents are unknown, and the scan names each app it couldn't list. |

Each project also needs these APIs enabled: cloudresourcemanager, serviceusage, iam, apikeys, cloudasset, aiplatform, discoveryengine, and policyanalyzer, each on googleapis.com. The scan names any API that is off instead of calling it a permission problem. The test needs cloudresourcemanager and iam. The audit log read also needs logging.googleapis.com, which Google enables on a new project by default.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The project list, or both the key and the token, isn't stored. | Click **Edit**, and enter the project IDs with the key or a token. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter it again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Google refused the key or the token. A key was deleted or disabled, or a token expired. | Create a new key and paste its whole contents, or create a new token. Enter it with the project IDs under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | No listed project could be read. A role is missing, an API is off, or a token lacks the Cloud scope. The message names which, and for a role, the permission. | Grant the role or enable the API named. For a scope, create the token again. |
| "The credential works, but Gemini Enterprise refused part of what the scan reads." | AI Security read at least one project, and another refused. | Fix the named project, or remove it from the list. |
| "The platform didn't answer, or said it is down or busy." | Google didn't answer, or rate limited the read. | Test again later. |
| "The platform didn't answer in time." | Google didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish, for example when the pasted key isn't complete JSON. | Paste the whole key file again. If it repeats, contact Netwrix Support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Failed" | A token expired between the test and the scan. | Create a new token, enter it, and scan within the hour, or connect with a key. |
| "Succeeded", with a skipped item naming a project, such as "Which people and accounts hold AI roles in the Google Cloud project [project]." | AI Security read a project, and a role or API was missing. The scan says what to grant, such as "Turn on the Cloud Asset API in the project and grant the scanner's service account the Cloud Asset Viewer role." | Grant the role or enable the API named. |
| "Succeeded", with "Who created the agents and apps in the Google Cloud project [project]." among the skipped items | Google refused the project's Admin Activity audit log, so its agents and apps name no creator this scan. AI Security still suggests the project's owners and editors. The scan says: "Grant the scanner's service account the Logs Viewer role on the project." | Grant `roles/logging.viewer` to the scanner's service account on the project, then scan again. |
| "Succeeded", with "The agents people built in the Gemini Enterprise app [app]." among the skipped items | Google refused to list the agents built inside the app. The scan names the permission Google asked for and the Agent Admin role that carries it. | Grant `roles/discoveryengine.agentAdmin` to the service account AI Security signs in as if you accept a role that can change agents, then scan again. |
| Advice, once per scan, that AI Security doesn't read business edition agents | Every scan says once that it doesn't read the agents people built in the Gemini Enterprise business edition. That edition keeps them on a Google-managed project outside the listed projects. The advice shows among the skipped items and doesn't make the scan a warning. | Nothing. No role grants access. Only the edition's administrator can see those agents, by signing in to the business edition. |
| "Succeeded", with "A service account's keys, or the agents and apps in one Google Cloud location, for [name]." among the skipped items | Google refused one service account's keys, or the agents or apps in one location, while the project's other reads answered. What the detail names is unknown this run, not zero. | Check the account or location the detail names, then scan again. |

## Security notes

- AI Security stores the key or token encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set and which settings are missing.
- A test or a scan opens the credential for that run only. The key signs a request and is attached to no error or log line.
- AI Security sends the signed request only to oauth2.googleapis.com, and the tokens only to Google API hosts on googleapis.com.
- This connector reports a key that never expires, so a key used to connect appears among the keys it reads, as a "Long lived" credential on the service account AI Security signs in as. A token avoids that. If you use a key, keep it on this one service account with the read-only roles in [Permissions](#permissions).
- To revoke access, delete the key under the service account's **Keys**, or remove the account's roles. A token expires on its own within the hour. **Disconnect** on the source removes the credential from 1Secure.
