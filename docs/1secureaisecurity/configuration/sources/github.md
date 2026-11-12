---
title: "GitHub"
description: "Connect a GitHub organization to AI Security with a classic personal access token to read apps, tokens, deploy keys, Actions, and Copilot."
sidebar_position: 47
---

# GitHub

Connect GitHub so AI Security can read one organization's non-human access: installed apps, tokens, deploy keys, Actions settings and runners, and Copilot. You create a token in GitHub as an organization owner and enter it in 1Secure.

## Before you start

* Sign in to github.com as an owner of the organization. The token acts as you.
* Know the organization's login: the part after github.com/ in its address.
* Have a password manager open. GitHub shows the token once.
* Use a token from a dedicated account if you can, so that nobody's daily work shares its API rate limit.

## Create the token in GitHub

1. Open your profile menu, and select **Settings > Developer settings > Personal access tokens > Tokens (classic)**.
2. Click **Generate new token**, then **Generate new token (classic)**.
3. In **Note**, enter a name, for example "Netwrix 1Secure AI Security".
4. Choose an **Expiration**.
5. Select `admin:org`, which includes `read:org`.
6. Select `repo` for private deploy keys and workflow runs, and `manage_billing:copilot` for Copilot seats.
7. On GitHub Enterprise Cloud, select `read:audit_log` for what Apps and tokens did and who installed each App.
8. Click **Generate token**, and copy the token.
9. If the organization enforces Security Assertion Markup Language (SAML) single sign-on, click **Configure SSO** beside the token, and click **Authorize** beside the organization.

:::warning
Use a classic personal access token. A GitHub App installation token lasts one hour, and 1Secure stores the token rather than the App's key, so a stored installation token stops working before the next scan.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "GitHub".
3. In the GitHub row, click **Connect**. The **Connect GitHub** dialog opens.
4. In **Organization login**, enter the organization login. If you paste the organization's github.com address, 1Secure keeps the login alone.
5. In **Personal access token (classic)**, paste the token.
6. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
7. Click **Done**.

The organization login also names this source.

Select the GitHub row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when the token reads members and not the owner-only settings, because `admin:org` is missing. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, normally the fine-grained tokens, which are unknown with a classic token. "Partly scanned" when a listing was cut at the page limit. |

## What this connector reads

* The organization's owners and members, and its default repository permission and two-factor requirement. The members, by login or public email, also place GitHub Copilot users seen by an endpoint product under this organization. The placement is by membership, not by key.
* The GitHub Apps installed on the organization.
* Classic personal access tokens and SSH keys authorized for the organization, if it uses SAML single sign-on on GitHub Enterprise Cloud.
* Fine-grained personal access tokens and the repositories each reaches, if the token is a GitHub App installation token.
* Deploy keys on each repository, either read or write, for up to 500 repositories.
* The Actions policy: the workflow token's default permission, allowed actions, the OpenID Connect subject template, and self-hosted runners.
* Copilot: seats, who holds them, activity, and the coding agent's configuration per repository.
* The custom agents, Model Context Protocol (MCP) servers, and skills that Copilot used, from the latest 28-day usage report. The scan keeps each one that the report named on at least one day, with how often it was used. For an MCP server, the count is connection attempts, not tool calls. The scan doesn't keep plugins and slash commands, or activity that GitHub groups under other or custom. Names appear only from Copilot CLI 1.0.97 or later and for report days after 2026-10-22.
* What a GitHub App, a token, or the Actions identity did, from the organization audit log. The scan keeps only events that a machine credential made. GitHub serves the audit log on GitHub Enterprise Cloud only.
* Who installed each GitHub App, from the App installation events in the same audit log, over the 180 days it keeps. The scan names only a person, by public email where the member publishes one and by login otherwise. An App installed earlier, or by a bot, names no installer.
* Who changed the MCP servers of a repository's Copilot coding agent and when, from the same audit log over the same 180 days. The event names the person and the repository, never the servers.
* Each workflow run on the repositories read: workflow, event, status, and times. The scan keeps no commit, message, or pull request.

An issue about the workflow token's default permission, allowed actions, or the Copilot seat policy appears on **GitHub workspace settings**, once per organization, rather than on the Copilot agent or the Actions identity. It has no owner. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

With a classic personal access token, fine-grained tokens are reported as unknown. On an organization without SAML single sign-on, classic tokens are unknown too. A scan therefore normally lists them as skipped, and its source still reads "Succeeded".

### What the connector never touches

* It never writes. Every call is a read.
* It reads no repository contents, no secrets, and no workflow files.
* Of a token, it keeps the last eight characters at most. It drops deploy key material and keeps only the key's type and a hint.

## Permissions

| Token scope or plan | What AI Security reads with it | Scan without it |
|---------------------|--------------------------------|-----------------|
| `read:org`, on a token owned by an organization owner | Members, owners, the OpenID Connect template, and Copilot. | AI Security reads nothing and the test fails. |
| `admin:org` | App installations, the Actions policy, runners, and the owner-only organization settings. | Those are unknown, never none. |
| `repo` | Deploy keys on private repositories, and workflow runs. | Private repositories' deploy keys are unknown, and the Actions identity shows no runs. |
| `read:audit_log`, on GitHub Enterprise Cloud | What Apps, tokens, and the Actions identity did, who installed each App, and who changed a coding agent's MCP servers. | These agents show last used dates and no runs, which is unknown, not idle. The Apps name no installer, and those changes name nobody. |
| `manage_billing:copilot`, or `read:org` | Copilot seats and metrics. | Seats are unknown. |
| `read:org`, and the organization's Copilot usage metrics policy turned on | The custom agents, MCP servers, and skills that Copilot used. Names appear only from Copilot CLI 1.0.97 or later and for report days after 2026-10-22. | They are unknown, never none. |
| Copilot Business or Enterprise | Copilot seats. | Seats are unknown. |
| A GitHub App installation, with Organization permissions "Administration: Read-only" and "Personal access tokens: Read-only" | Fine-grained personal access tokens, which only an App can list. | Fine-grained tokens are unknown, never zero. |

GitHub ships no read-only variant of `admin:org`. AI Security only reads.

{/* TODO: confirm the supported GitHub plans and the Copilot CLI version and report date requirement. */}

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The token or the organization isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter both again. |
| "The platform refused the credential. It is wrong, expired or revoked." | GitHub refused the token. | Generate a new token, and enter it under **Edit**. |
| "No GitHub organization named [login]. Use the name from its address." | GitHub answered that no organization has that login. A personal account's name answers the same way. | Click **Edit**, and enter the organization's login, the part after github.com/ in its address. |
| "The credential works, but access was denied. A permission is missing." | GitHub accepted the token and refused the owner list. Under **Technical details**, the test says: "Connect a classic personal access token with read:org owned by an organization owner, or install the scanner's GitHub App on this organization." | Check that the token's owner is an organization owner, the token has `read:org`, the organization login is right, and the token is authorized for SAML single sign-on. |
| "The credential works, but GitHub refused part of what the scan reads." | Members answered and the owner-only settings didn't. The test says: "Grant the token admin:org, or give the GitHub App the Administration read-only organization permission." | Add `admin:org` to the token. |
| "The platform didn't answer, or said it is down or busy." | GitHub didn't answer. | Check that AI Security can reach api.github.com, and test again later. |
| "The platform slowed down the test. Wait a few minutes and test again." | GitHub slowed the test down. The test shows "Warning". This isn't a missing permission. | Wait a few minutes, and click **Test again**. |
| "The platform didn't answer in time." | GitHub didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the token. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned". If the scan reads a long audit log in several scans, it continues where it stopped on the next scan.

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with a skipped item and what to do on its line, most often "The fine-grained personal access tokens with access to this GitHub organization." followed by "Install the scanner's GitHub App on this organization with the Personal access tokens read-only permission." | Something was unknown, most often the fine-grained tokens, which GitHub lets only a GitHub App list. | Nothing, with a classic token. For the rest, add the scope the line names. The table under [Permissions](#permissions) lists each one. |
| "Succeeded", with a skipped item that names the item, such as "The GitHub member, token or repository octo-org/app.", and the line says: "Check the token's access to that member, token or repository, then scan again." | GitHub refused one item while the organization's other reads answered: a member's profile, a fine-grained token's repositories, or a repository's deploy keys or Copilot coding agent settings. What the detail names is unknown this run, not absent. | Scan again. If GitHub refuses the same item again, check the token's access to that repository or member. |

## Security notes

* AI Security stores the token encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set and which settings are missing.
* AI Security sends the token only to api.github.com.
* To revoke access, delete the token under **Personal access tokens** in GitHub. **Disconnect** on the source removes it from 1Secure.
