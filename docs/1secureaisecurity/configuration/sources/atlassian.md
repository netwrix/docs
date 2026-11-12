---
title: "Atlassian"
description: "Connect an Atlassian cloud organization to AI Security with an admin API key to read user API tokens, Rovo agents, and open Confluence spaces."
sidebar_position: 41
---

# Atlassian

Connect Atlassian so AI Security can read the user API tokens in your Atlassian cloud organization and, with a Confluence site, the Confluence spaces open to anonymous readers. You create an organization admin API key in Atlassian Administration and enter it in 1Secure.

Atlassian publishes no interface that lists Rovo agents. AI Security finds Rovo agents from their created, updated, and deleted events in the organization audit log, so it doesn't see an agent that nobody changed recently. {/* TODO: confirm how far back the audit log read goes */} AI Security reads Rovo agents only when it reads the API tokens, so a scan that couldn't read the tokens shows no Rovo agents either.

## Before you start

* Have an organization admin create the key in Atlassian Administration at admin.atlassian.com.
* Use an organization admin API key. The admin interface refuses an Atlassian account API token, a Forge app token, and an OAuth 2.0 token.
* For the Confluence read, have an account that can browse the spaces you want covered, and the site's address, for example `https://acme.atlassian.net/wiki`.
* Have a password manager open. Atlassian shows each key once.

## Create the key in Atlassian

1. In Atlassian Administration, select **Organization settings > API keys**. To choose scopes, select **API keys with scopes** first.
2. Click **Create API key**.
3. Enter a **Name**, for example "Netwrix 1Secure AI Security".
4. Choose an expiration date of a year or less.
5. If the dialog offers scopes, select `read:tokens:admin`, `read:accounts:admin`, and `read:events:admin`. Select no scope that writes.
6. Click **Create**, and copy the key.
7. Copy the organization ID from the address bar or the organization's settings page.
8. For the Confluence read, sign in as the reading account at id.atlassian.com/manage-profile/security/api-tokens, click **Create API token**, and copy it.

## Connect the source

:::info
The Atlassian row shows "Coming soon" and has no **Connect** button. These steps apply when the button is available.
:::

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Atlassian".
3. In the Atlassian row, click **Connect**. The **Connect Atlassian** dialog opens.
4. In **Organization ID**, paste the organization ID. If you leave it empty, AI Security reads every organization the key can see.
5. In **Organization admin API key**, paste the admin key.
6. For spaces, under "Confluence spaces, optional", enter the site's address in **Confluence site address**.
7. In **Confluence account email**, enter the reading account's email.
8. In **Confluence API token**, paste the account token.
9. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
10. Click **Done**.

Enter all three Confluence values or none. With only one or two, AI Security skips the space read.

The Confluence site address must be a public https address under `atlassian.net`, `jira.com`, or `atlassian.com`, for example `https://acme.atlassian.net/wiki`. AI Security refuses a plain http address, a private or reserved address, a single-label name, and a name in an internal zone such as `.local` or `.internal`.

Select the Atlassian row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded" and the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as a refused optional read or a Confluence space that came back without an ID. "Partly scanned" when the audit log listing was cut at the page limit. |

The test proves that the key can see the tokens. The test doesn't reach Confluence, so a refused space read shows only after a scan, as a skipped item under **Last scanned**.

## What this connector reads

* The organizations the key can see, or only the one you name. AI Security reads at most ten organizations and fifty spaces in one run, and says so when it stops short.
* Every user API token in each organization: its owner, the scopes it holds, when it expires, and when it was last used. AI Security never receives token values.
* The organization's managed accounts, to tell whether each token's owner is still active.
* The organization audit log. Each event taken with a token that the scan listed appears as a sign-in by that token, with the time, the action, and the address it came from. Rovo agents come from the same log: their created, updated, and deleted events, and a chat started with a Rovo agent, which AI Security shows as a run on that agent. Atlassian logs no event when an automation rule runs an agent.
* With a Confluence site configured: the site's spaces and the permissions on each, to find the spaces open to anonymous readers. An issue about an open space appears under **Atlassian workspace settings**, once per space, rather than on any token. It has no owner and no page to open. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

AI Security reads user API tokens only. It doesn't read service account tokens, so each scan says its token count is a minimum, not the total. That note doesn't delay retirement. A token you revoke in Atlassian leaves AI Security on the next scan.

### What the connector never touches

* It never writes. Every call is a read.
* It never receives a token value.
* From Confluence it reads the space list and each space's permissions, never a page.

## Permissions

| Scope or access | What AI Security reads with it | Scan without it |
|-----------------|--------------------------------|-----------------|
| `read:tokens:admin` on the admin key | The token count and the token list. | The test fails, and the organization's tokens are unknown, not zero. |
| `read:accounts:admin` on the admin key | Managed accounts, to join each token to a live owner. | AI Security still reads tokens, without the departed owner signal. |
| `read:events:admin` on the admin key, and a plan that carries the organization audit log | Token use and every Rovo agent. | AI Security still reads tokens, each with only its last used time, so no token use reaches the **Activity** tab and no Rovo agent appears. |
| `read:orgs:admin` on the admin key | The organization list, only where Atlassian refuses the key the list without this scope. | Enter the organization ID instead, which skips the list. |
| `read:space:confluence` on the Confluence token, or an account that can browse the spaces | Spaces and their permissions. | Spaces are unknown, and AI Security doesn't see a space open to anonymous readers. |

The audit log read needs a plan as well as the scope:

* Atlassian Guard Standard, Guard Premium, or Cloud Enterprise for the organization admin log.
* Guard Premium, Cloud Enterprise, or Guard Standard with Cloud Premium for the Jira and Confluence activity that carries API token use.

Atlassian logs a chat started with a Rovo agent only with Guard Premium.

{/* TODO: confirm the minimum scopes for the Confluence read and the organization list. */}

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | No admin key is stored. | Click **Edit**, and enter the key and the other values you use. |
| "The stored credential cannot be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Atlassian refused the key: it is wrong, expired, deleted, or not an organization admin key. | Create a new organization admin API key, and enter it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | Atlassian accepted the key and refused the read, or the key listed no organization. Under **Technical details**, the test says: "Use an organization admin API key from Atlassian Administration with the read:tokens:admin and read:accounts:admin scopes." If Atlassian refuses the token count, it says: "Grant the organization admin API key the read:tokens:admin scope." | Create the key with both scopes, and enter the organization ID. If the key holds both scopes and Atlassian still refuses the organization list, add `read:orgs:admin` or enter the organization ID. |
| "The platform returned a response the scanner does not support." | Atlassian answered with something unexpected, which points to an interface change, not a key problem. | Click **Test again** later. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The Confluence address isn't https, isn't on atlassian.net, jira.com, or atlassian.com, or its name resolves to a private address. | Enter the site address as Atlassian shows it. |
| "The platform did not answer, or said it is down or busy." | Atlassian didn't answer. | Check that AI Security can reach api.atlassian.com, then test again. |
| "The platform is rate limiting the scanner. Wait a few minutes and test again." | Atlassian rate limited the test, so **Last test** shows "Warning". This isn't a missing scope. | Wait a few minutes, then click **Test again**. |
| "The platform did not answer in time." | Atlassian didn't answer in time. | Click **Test again**. |
| "A live connection test is not available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the key. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The account state of each Atlassian API token's owner, so tokens of people who have left are not flagged." among the skipped items | Atlassian refused the managed accounts. The scan says: "Grant the organization admin API key the read:accounts:admin scope." | Add the scope. |
| "Succeeded", with "The Confluence spaces on this site, so spaces open to anonymous readers are not found." among the skipped items | Confluence refused the spaces. The scan says: "Give the source's account the read:space:confluence scope, or access to browse the spaces to scan." | Give the Confluence account access to the spaces. |
| "Succeeded", with "Each use of an Atlassian API token, so tokens show only their last use." among the skipped items | Atlassian refused the audit log, or the plan doesn't include it. The scan says: "Grant the organization admin API key the read:events:admin scope on an Atlassian Guard or Cloud Enterprise plan." | Add the scope, and check the plans named under [Permissions](#permissions). |
| "Succeeded", with "The Confluence spaces on this site, because Atlassian did not find the Confluence address." among the skipped items | Confluence answered not found: the address is wrong, or the site runs no Confluence. | Correct **Confluence site address**, or clear all three Confluence fields. |
| "Succeeded", with "Who can open the Confluence space [space key], because Confluence listed it incompletely." among the skipped items | A Confluence space came back without an ID, so whether it is open to anonymous readers is unknown. No grant fixes this. | Open the space that the detail names in Confluence, and read its permissions there. |

## Security notes

* AI Security stores the key and the account token encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* AI Security sends the admin key only to api.atlassian.com. It sends the account token only to the Confluence site you entered, over https.
* To revoke access, delete the key under **Settings > API keys** and the account token under **Security > API tokens**. **Disconnect** on the source removes both from 1Secure.
