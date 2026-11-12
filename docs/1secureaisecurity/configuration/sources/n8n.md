---
title: "n8n"
description: "Connect an n8n instance to AI Security with an API key so it can read workflows as agents, their credentials, projects, runs, and audit findings."
sidebar_position: 64
---

# n8n

Connect n8n so AI Security can read one n8n instance with an API key that the instance owner creates. AI Security reads each workflow as an agent. One key reads one instance, so connect each instance as its own source. You create the key in n8n and enter it in AI Security.

## Before you start

- Sign in to the instance as the instance owner.
- Enable the instance's public API. On n8n's hosted service, it isn't available during the free trial.
- Know the instance's public address, for example `https://acme.app.n8n.cloud`. A public address must be https.

## Connect n8n

### Create the API key in n8n

1. Open **Settings > n8n API**, and click **Create an API key**.
2. Give the key a label, for example "Netwrix 1Secure AI Security", and an expiry.
3. If the dialog offers scopes, select `workflow:list`, `user:list`, `project:list`, `execution:list`, and `securityAudit:generate`, and nothing else.
4. Copy the key from **My API Key**. n8n shows it once.

:::warning
Without scope selection, the key carries the role of the user who creates it. A key that a member creates reads workflows and nothing else, so create the key as the instance owner.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "n8n".
3. In the n8n row, click **Connect**. The **Connect n8n** dialog opens.
4. In **Instance address** paste the instance's address. It names this source and must be a public https address.
5. In **API key** paste the key.
6. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
7. Click **Done**.

The instance address must be a public https address that AI Security can reach over the internet. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

Select the n8n row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when the audit answered and the workflow list didn't. |
| Last scanned | "Never", then "Succeeded", with anything that a missing scope in the Permissions section left unread listed as skipped. "Partly scanned" appears when a list stopped short. |

## What this connector reads

- Every workflow: its steps, whether it is active, who it is shared with, and the credential each step names.
- The credentials the workflows use, by name and type, taken from the workflows and from n8n's own audit.
- Where each workflow calls out to, and which other workflows it calls.
- The projects that workflows and credentials belong to, and the people in them, so an owner is a person.
- The admins of a team project, from the same member listing, named as administrators of what the project owns. The project stays the owner.
- Recent runs of each workflow, as status and times, over the last seven days by default.
- n8n's own security audit findings: unused credentials, credentials shared with everyone, unprotected webhooks, and community nodes.
- Whether the instance serves the public REST API, from n8n's own security audit. An issue about it appears on **n8n workspace settings**, once per instance, rather than on any workflow. It has no owner and no page to open. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

### What it never touches

- Pinned data, which is copied rows from the systems a workflow touches.
- Run data: no inputs, no outputs, and no rows a run touched. AI Security reads runs as status and times only.
- Credential secrets, node parameters, and notes. AI Security does store values it reads from them: model names, the hosts a step calls, and field names.
- AI Security never changes anything in n8n. The audit is the only request that makes n8n generate something, and it generates it on request.

## Permissions

| API key scope, as n8n names it | What AI Security reads with it | Scan without it |
|--------------------------------|--------------------------------|-----------------|
| `workflow:list` | Workflows and the credentials they bind. | No credential and no reach is known. |
| `user:list` | The instance's users and each project's members. | Owners can stop at the project name. |
| `project:list` | Projects, so a personal project resolves to one person. | No owner resolves to a person. |
| `execution:list` | Runs, as metadata. | Every workflow's usage is unknown. |
| `securityAudit:generate` | n8n's own audit. | n8n's findings are absent. |

n8n builds with scoped API keys offer scope selection, which is an Enterprise feature. On other builds, the key carries the role of the user who creates it, so create it as the instance owner. A key that a member creates reads workflows and nothing else.

You don't need the `credential:list` scope.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address or the key isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter both again. |
| "The platform refused the credential. It is wrong, expired or revoked." | n8n refused the key: it is wrong, expired, or deleted. | Create a new key, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | n8n accepted the key, and neither the workflow list nor the audit answered. Under **Technical details**, the test says: "Create an n8n API key as the instance owner with the workflow:list, execution:list, user:list, project:list and securityAudit:generate scopes, then save it in the source's settings." | Create the key as the instance owner with the five scopes in step 3 of "Create the API key in n8n". |
| "Access denied because of the platform's plan or license. Changing permissions won't fix it." | The instance answered that its plan doesn't offer the public API, and the audit didn't answer either. | Use a plan that offers the public API. On the hosted service, it isn't available during the free trial. |
| "The credential works, but n8n refused part of what the scan reads." | The audit answered and n8n refused the workflow list. The test says: "Grant the n8n API key the workflow:list scope." | Add `workflow:list`, or create the key again as the owner. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't https, or its name is a local, private, or internal address or resolves to one. | Use the public https address. |
| "The platform didn't answer, or said it is down or busy." | The instance didn't answer, or answered with something that isn't n8n's API. | Check that the address is the instance itself, that its public API is on, and that AI Security can reach it. |
| "The platform didn't answer in time." | The instance didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

## Security notes

- AI Security stores the key when you click **Connect** and never shows it again.
- AI Security sends the key only to the instance address you entered, and only over https for a public host.
- To revoke, delete the key under **Settings > n8n API**. **Disconnect** on the source removes it from AI Security.
