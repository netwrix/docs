---
title: "OpenAI"
description: "Connect an OpenAI API organization to AI Security with an Admin key and project keys so it can read projects, keys, members, agents, and vaults."
sidebar_position: 68
---

# OpenAI

Connect OpenAI so AI Security can read one OpenAI API organization with two kinds of key. An Admin key reads the organization: its projects, keys, service accounts, and members. It can't read an agent. A project key, one per project, reads that project's agents. You create the keys in the OpenAI platform and enter them in AI Security.

## Before you start

- An organization owner creates the Admin key.
- A project owner creates each project key.
- Sign in to the OpenAI platform at platform.openai.com.
- Open a password manager. OpenAI shows each key once.
- Turn on the agents beta for the organization. Without it, no key can read agents.

## Connect OpenAI

### Create the keys in OpenAI

1. Open **Settings > Organization > General**, and copy the "Organization ID". It starts with `org-`.
2. Open **Settings > Organization > Admin keys**, and create an admin key.
3. Copy the admin key.
4. For each project whose agents you want read, open **Settings**, select the project, and open **API keys** inside it.
5. Create a key with restricted permissions that allow reading agents (`api.agents.read`) and nothing more.
6. Copy the project key.
7. Copy that project's "Project ID" from the project's **General** settings. It starts with `proj_`.
8. Write the project keys as one line, with each project ID, an equals sign, and then its key, separated by commas: `proj_abc=sk-proj-...,proj_def=sk-proj-...`.

:::warning
AI Security drops a pair written without an equals sign and gives no warning.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "OpenAI".
3. In the OpenAI row, click **Connect**. The **Connect OpenAI** dialog opens. The dialog has no field for the organization ID. AI Security reads the ID from the Admin key when the test passes.
4. In **Admin key**, paste the Admin key.
5. Optional: in **Project keys**, paste the line from step 8, or leave the field empty to read the organization only.
6. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
7. Click **Done**.

Select the OpenAI row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", with the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as a project, or a sandbox or vault inside one. "Partly scanned" appears when a list was cut short. |

:::note
The test uses the Admin key only. It doesn't use the project keys, so a wrong or under-permissioned project key shows only after a scan. It appears as skipped on the **Skipped** line, while **Last scanned** reads "Succeeded".
:::

## What this connector reads

With the Admin key, AI Security reads the following:

- The organization's projects and members. The members also place Codex and ChatGPT users that an endpoint product sees under this organization.
- Every admin key and every project API key: name, owner, when it was created, and when it was last used. OpenAI never returns key values. OpenAI states no expiry on a key, so the scan records whether a key expires as not read.
- Each project's service accounts.
- Who created each key, from the organization audit log.
  - The scan names a member who created a key in the console, or through a key of their own, by email address.
  - A key that a service account owns names the person who created that service account, unless the key's own creation names someone.
  - A key that a service account created names no creator.
  - The scan keeps the stated owner as well. Where your Microsoft Entra ID directory holds one person with the owner's email address as their sign-in name or mail, the scan shows the owner as that person.
  - The audit log answers only after you turn on audit logging for the organization.

{/* TODO: confirm the audit log events AI Security relies on for key creators against a live organization. */}

An issue about the organization holding more than one admin key appears on **OpenAI workspace settings**, once for the organization, rather than on any key. It has no owner and no page to open. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

With a project key for a project, AI Security reads the following:

- The project's agents, both saved agents and those that exist only on a session: whether instructions are set, how long they are, and their first sentence, Model Context Protocol (MCP) tools, environments, their network settings, and whether an agent can run other agents. Where no network setting is stated, the platform default applies, which is unrestricted outbound.
- Sessions, as events with a start time and a status. A source's first scan reads the sessions started in the last 3 days, or in the Activity window the organization chose under Settings. Each later scan continues from where the previous scan stopped, and reads back no further than 14 days, or the Activity window where the organization chose a longer one.
- Vaults: which MCP servers their credentials authenticate to, with the authentication type, OAuth client ID, scopes, and expiry. AI Security never reads a secret.

An agent that exists only on a session stays for 30 days after the last scan that saw it. The sandboxes and vaults that a session showed stay linked to a saved agent while that agent stays.

### How the keys divide the work

- The Admin key reads the organization inventory and gets nothing from the agents listing. A scan that holds the Admin key alone reports every project as not read for agents, sessions, and vaults. Add a project key to fix it.
- A project key reads one project. It can't read the project list, and it can't read another project.
- A restricted Admin key created without the `api.management.read` scope can't read the organization. Create the key unrestricted, or add that scope.

### What it never touches

- Instructions beyond whether they are present, their length, and their first sentence (at most 200 characters).
- Session transcripts, turn output, and command text. AI Security records sessions as metadata only.
- Secret values in vault and tool records.
- From the audit log, anything beyond who created a key, when, and the key's ID.
- AI Security never writes to OpenAI.

## Permissions

| Key | What AI Security reads with it | Scan without it |
|-----|--------------------------------|-----------------|
| Admin key, created by an organization owner | The organization inventory. | Nothing is read and the test fails. |
| Audit logging turned on for the organization, and an Admin key allowed to read audit logs (`api.audit_logs.read`) | Who created each key. | Each key keeps its stated owner and names no creator, and the scan says so. |
| A project application key holding `api.agents.read`, one per project | That project's agents, sandboxes, and vaults. | The scan reports that project as not read, never as a project with no agents. |

## Troubleshoot the connection

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | No Admin key is stored. | Click **Edit**, and enter the Admin key, and the project keys again if you use them. |
| "The stored credential can't be used. Enter it again." | The stored keys can't be used. | Click **Edit**, and enter them again. |
| "The platform refused the credential. It is wrong, expired or revoked." | OpenAI refused the Admin key: it is wrong, or deleted. | Create a new admin key, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | OpenAI accepted the key and refused the project list. The test says: "Save an Admin key, created by an organization owner under Settings, API keys, Admin keys, in the source's settings." or, for an empty list, "Check that the Admin key in the source's settings belongs to the organization you meant to scan." | Put an Admin key from the right organization in **Admin key**. If the key is restricted, create it unrestricted, or add `api.management.read` and, for the audit log, `api.audit_logs.read`. |
| "The platform didn't answer, or said it is down or busy." | OpenAI didn't answer. | Check that AI Security can reach api.openai.com. |
| "The platform slowed down the test. Wait a few minutes and test again." | OpenAI rate limited the read. This is a warning, not a missing permission. | Wait a few minutes, then click **Test again**. |
| "The platform didn't answer in time." | OpenAI didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the keys. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "Who created each OpenAI key, from the organization's audit log." skipped | AI Security didn't read the audit log, or it holds no events, which is what an organization with audit logging off returns. The line says: "Turn on audit logging for the organization and give the Admin key permission to read the audit log." | Turn on audit logging under the organization's data controls, and give a restricted Admin key read access to audit logs. |
| "Succeeded", with "The API keys and service accounts of the OpenAI project [name]." skipped | The Admin key couldn't read that project's keys or service accounts. The scan says: "The Admin key cannot read this project; its keys and service accounts are missing from this inventory." | Scan again. If it repeats, check that the Admin key can read that project. |
| "Succeeded", with "The agents, sandboxes and vaults of OpenAI projects with no project key." skipped | A project has no project key. The scan says: "Create an application key with the api.agents.read permission inside each project (Settings -> API keys, inside the project) and configure it in the OpenAI project keys setting as the project id and the key, alongside the Admin key. One key reads one project's agents and vaults." | Add a key for each project, or accept those projects as not read. |
| "Succeeded", with "The agents, sandboxes and vaults of the OpenAI project [name], whose key was refused." skipped | OpenAI refused a project key. The scan says: "The key for this project authenticated and was refused: give it the api.agents.read permission, which a key with model access does not carry by default." | Create the key again with agents read. |
| "Succeeded", with "OpenAI agents, sandboxes and vaults, because the Agents API is off for this organization." skipped | The scan says: "The agents beta is not enabled for this organization, or the endpoint has moved." | Confirm the agents beta is on for the organization before you change any key. |
| "Succeeded", with "The agents, sandboxes and vaults of the OpenAI project [name], which answered with an error." skipped | That project's agent read failed for another reason. | Scan again. If it repeats, send **Copy for support** to Netwrix support. |
| "Succeeded", with "The OpenAI sandbox or credential vault [id], which an agent used, though the agent is still listed." skipped | AI Security didn't read a sandbox or a credential vault behind an agent, though it read the agent. The scan says: "A sandbox or a credential vault this project's agents used did not read, so it is missing from this inventory while the agent stays in it." | Check that project's key, then scan again. Or accept that the agent's sandboxes and vaults are unknown. |

## Security notes

- AI Security stores the keys when you click **Connect** and never shows them again.
- AI Security sends the keys only to OpenAI.
- To revoke access, delete the admin key and the project keys in OpenAI. **Disconnect** on the source removes them from AI Security.
