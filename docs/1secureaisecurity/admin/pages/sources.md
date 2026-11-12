---
title: "Sources"
description: "Use the Sources page to connect a platform, test a connection, start a scan, and see what each source still needs."
sidebar_position: 7
---

# Sources

The Sources page lists the platforms you connect and the scans that read them. Use it to connect a platform, test a connection, start a scan, and see what each source still needs.

![Sources page with the Connected, Not detected yet, Not visible, and Needs attention cards, the status filters, and the platform rows with Scan now](/images/1secureaisecurity/pages/sources-page.webp)

## Sources tab

Three cards sit at the top.

| Card | What it shows |
|------|---------------|
| Connected | How many platforms have a source connected, and how many agents are visible across them. |
| Shadow AI signals | Which of the two kinds of source Shadow AI reads are connected: **None connected**, **Sign ins only**, **Devices only**, or **Sign ins and devices**. Sign ins and consents come from Microsoft Entra ID or Okta. AI tools on devices come from Microsoft Defender for Endpoint, CrowdStrike, or Tanium. The line under the card says which source to connect for the other kind. |
| Needs attention | How many platforms have permissions to grant or details to add. Click the card to show those platforms. |

Filter the rows with **All**, **Connected**, **Needs attention**, and **Needs connection**, and with **Scanning** while a scan runs. You can also search with "Search platforms". The rows are grouped by category.

| Column | What it shows |
|--------|---------------|
| Platform | The platform's name. |
| Status | Where the source stands, such as **Connected**, **Needs attention**, **Needs a grant**, **Not set up**, or **Not connected**, with what it needs under it. **Not set up** means the tenant has no license for the product, has no Azure subscription, or hasn't set the product up. It isn't a failure and needs nothing from you. |
| Last scanned | When the source was last scanned. |
| Agents discovered | How many agents the source found. Click the number to open them on the **Agents** page. |
| Actions | **Scan now** and the source's menu. |

### Scan all

**Scan all** asks you to confirm, such as "Scan 27 platforms now?", counting the connected platforms, and then scans every enabled source. A source whose credential isn't set, can't be used, or was refused at its last test is left out and reads **Not scanned**.

**Scan all** is off while a scan runs, and while a source's connection test is still running. In the second case, hover over it to read "Sources are still being tested. Scan when that finishes."

### Removed from AI Security

Under the sources, **Removed from AI Security** lists the agents an administrator said aren't AI agents, with their platform, when they were removed, and by whom. An administrator clicks **Restore** to bring one back into every list and count.

## Source drawer

Select a platform's row to open its drawer. A Microsoft source that reads with the app registration of your Microsoft Entra ID source, and holds none of its own, says "Connected through Microsoft Entra ID" under its name.

| Line | What it shows |
|------|---------------|
| Status | **Connected**, **Needs attention**, **Needs a grant**, **Not set up**, or **Scanning**, with what the source needs. |
| Last scanned | When the source was last scanned, how long the scan took where that is known, and its outcome: **Succeeded**, **Partly scanned**, **Failed**, **Not scanned**, or **Not set up**. **Not set up** gives the reason, such as "The tenant has no license for this product." A read that succeeded with nothing to read says "Succeeded, nothing to read yet". |
| Discovered | The agents and identities the last scan found. |
| Scanned | What the last scan read, platform by platform. SharePoint Online with no site approved says "Nothing to read until a site is approved". |
| Skipped | For a source read to the end, how many things the last scan skipped. Click the count to see each one with what to do, and click **Export** to save the list. Where a Power Platform environment refused 1Secure, or 1Secure has no access to SharePoint sites, the line names the environment or the sites after what wasn't read. |
| Not scanned | For a source whose last read stopped short or failed, what wasn't scanned and what to do. |
| Next run | When the next scheduled scan runs. |
| Credential | **Readable**, **Not set**, or **Can't be used**, or **Refused** where the platform refused it at the last test. |
| Missing | The settings the source still needs, where any are missing. |
| Last test | The test's outcome, **Succeeded**, **Warning**, **Failed**, or **Not set up**, with its date and sentence. A scan that signed in with the credential counts as a test. Where no test has run since the scan started, the line reads **Succeeded**, "The last scan signed in with this credential and read what it reaches.", dated when the scan started. |

A source waiting on an optional grant, such as the Microsoft Entra AI Reader role or the Power Platform policies, reads **Needs a grant** in its row and in its drawer. The drawer says "Waiting on a grant to" the application and the grant, with a link to the card that grants it: **Grant with my sign in** for a source connected with Microsoft, or **How to grant** for one on an app registration of its own. A platform that needs only an optional grant still counts as **Connected**. One that is missing a required permission reads "Needs permissions, [N] missing" and doesn't count as **Connected** until the permission is granted.

To send a scan to Netwrix Support, open it on the **Scans** tab and click **Download scan report**. The file holds the scan, each source, what it read, what it didn't read, and what to do.

The drawer's **Scan now** waits while a scan of your organization runs, as the row's button does. It reads **Scan running** where the running scan covers the source, and **In next scan** where it doesn't.

The drawer's menu has **Edit**, **Test**, **Docs**, and **Disconnect**. **Docs** opens the platform's connector page. The SharePoint Online drawer also has a **Sites** tab, where you approve the sites 1Secure may read. See [SharePoint Online](/docs/1secureaisecurity/configuration/sources/sharepoint-online.md#the-sites-tab).

## Test a connection

1. In the source drawer's menu, click **Test**.
2. Read the outcome and its sentence.

A test changes nothing.

## Edit a source

1. In the source drawer's menu, click **Edit**.
2. Enter only the settings that change. A setting left empty keeps its stored value, and the page never shows a stored secret. When you change where the credential is sent, such as an instance URL, an API server, or a tenant ID, enter the secret again too.
3. Click **Save and test**.

A Microsoft source that can hold an app registration of its own, such as SharePoint Online or Azure RBAC, but reads with your Microsoft Entra ID source's registration, has no registration fields to fill. Its **Edit** dialog says which source it reads with and how that source was connected: "Reads with Microsoft Entra ID, connected by consent on" a date, or "Reads with Microsoft Entra ID, connected with its app registration". Where Microsoft Entra ID was connected by consent, **Reconnect** renews that consent. To give the source a registration of its own, click **Use its own app registration** and enter its values.

:::warning
**Disconnect** deletes the stored credential and everything the source found: its agents, identities, issues, and activity. What another connected source also reads stays.
:::

## Scans tab

The **Scans** tab lists every scan with **When**, **Started by**, **Scanned sources**, **Outcome**, **Duration**, and **What was discovered**. See [Scans](/docs/1secureaisecurity/admin/scans.md) for how to start, follow, stop, and retry a scan.
