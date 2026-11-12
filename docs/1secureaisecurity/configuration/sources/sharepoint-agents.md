---
title: "SharePoint agents"
description: "Connect SharePoint agents so AI Security can find the .agent files in your tenant's document libraries through Microsoft Graph and read what each is grounded in."
sidebar_position: 21
---

# SharePoint agents

Connect SharePoint agents so AI Security can find the SharePoint agents in your tenant through Microsoft Graph. A SharePoint agent is a file ending in .agent, kept in an ordinary document library. Anyone who can edit a library can create one, and nothing in the directory records that it exists, so AI Security looks for the files themselves. You add one permission to the app registration that connects Microsoft Entra ID, and connect the source in AI Security.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have a Global Administrator or Privileged Role Administrator grant the admin consent.
* Sign in to the Microsoft Entra admin center at entra.microsoft.com.

## Connect SharePoint agents

### Add the permission in Microsoft Entra

1. Create the app registration and its client secret as steps 1 to 8 of "Create the app registration in Microsoft Entra" on the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md#create-the-app-registration-in-microsoft-entra) page describe, or reuse the one you have.
2. Select **Entra ID > App registrations**, select the registration, and then select **API permissions**.
3. Click **Add a permission**, select **Microsoft Graph**, and then select **Application permissions**.
4. Add Sites.Read.All. If you connected SharePoint Online, it's already there.
5. Click **Grant admin consent for** your tenant, and then click **Yes**. The row's status turns to "Granted".

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "SharePoint agents".
3. In the SharePoint agents row, click **Connect**. The **Connect SharePoint agents** dialog opens.
4. Where Microsoft Entra ID is connected, the dialog says "Uses your Microsoft app registration", and there's nothing to enter: go to step 8. To enter other values, click **Use different credentials**.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID.
6. In **Application (client) ID**, enter the Application (client) ID.
7. In **Client secret value**, paste the client secret's Value.
8. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
9. Click **Done**.

Select the SharePoint agents row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", and the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything it couldn't read listed as skipped, such as some sites, libraries, or agent files, or an agent file's creator or folder, or "Partly scanned" when a list was cut short. |

The test reads the tenant's root site and the site list. It doesn't search a library, so it proves the permission and not that any agent exists.

A scan of this source reads every Microsoft source the three values unlock, not only the agent files. Where the registration lacks another Microsoft platform's grants, that platform's own source lists what it skipped, or reads "Failed" where it read nothing. That doesn't change this source's "Last scanned".

## What this connector reads

* Every site collection, and every document library on each site, searched for .agent files. A scan searches 500 sites by default. **Sites scanned** under **Scan settings** on the source raises that, up to 5,000.
* Where the tenant has more sites than one scan searches, each scan continues where the scan before it stopped, and starts again at the first site after the last one, so every site is searched in turn. The scan says which sites it searched. A site that refused a read doesn't count as searched. A personal OneDrive site that answered locked does count as searched, because a locked OneDrive is normal and not yours to unlock. The scan names those sites in a note of their own. An agent found on a site stays until a later scan of that site no longer finds it.
* Each agent file's definition: its name, description, and capabilities, and the libraries, folders, and files it's grounded in.
* Each agent file's creator, last editor, and dates. AI Security keeps the last editor as its own fact, never as the creator.
* Who can open each agent file and every knowledge source it names, so the scan can tell when an agent reaches people its data doesn't. SharePoint limits how many knowledge sources an agent names, so the scan measures every agent built in SharePoint in full.
* The files inside each library or folder an agent is grounded in: each item's ID, name, path, and whether its own sharing differs from its folder's. The scan reads the sharing scope of each item marked that way, and the sensitivity labels of the files. On a very large library a scan may read only part of these. A library the scan didn't reach waits for the next scan, which starts with it. From this come three issues per agent: files with an Anyone link, files with an organization link inside a source shared more narrowly than the organization, and files carrying a sensitivity label, each with a count and the first paths.
* The sites that refused a read, named one per site, so the scan reports an unreadable site as unknown rather than as holding no agents. The list is in the **Export** of the scan's skipped items, and under **Details** as well where the read stopped short.

A very large library, or many libraries, can take several scans to read in full. Each scan continues where the previous one stopped. The agents grounded on such a library are "not fully checked" until a scan has read it in full.

The file listing uses Sites.Read.All too. If Microsoft refuses the sensitivity labels, the scan still reads the sharing, and says it didn't read the labels rather than that no file carries one. The scan keeps only the scope of each link, so a file shared with named people directly, without a link, raises nothing here. The access scan holds those grants.

Restricted Content Discovery, the site setting that keeps a site out of Copilot's search, isn't readable through Microsoft Graph. Each scan says so once among its skipped items, as a limit of the platform rather than a refusal. The line has no "To fix" because there's nothing to do.

### What it never touches

* AI Security never writes to SharePoint.
* AI Security opens only files whose names end in .agent.
* The agent's icon. AI Security reads the agent's instructions from the file, shortened if they are long, holds them only while the scan runs, and doesn't keep them in the scan's results.
* A sharing link's address and share ID. AI Security drops them before it stores anything.
* Usage and conversations with the agent.
* The contents of files in a knowledge source. AI Security reads each item's name and path, the link scopes of the shared ones, and the labels of the files, and keeps only counts and the first ten paths under each heading.
* When SharePoint throttles the scan, it stops and reports how many sites it never reached. The next scan searches the same sites again.

## Permissions

| Microsoft Graph application permission | What AI Security reads with it | Scan without it |
|----------------------------------------|--------------------------------|-----------------|
| Sites.Read.All | Sites, libraries, the search for agent files, their definitions, and their access lists. | Nothing is read and the test fails. |

The one-click Connect with Microsoft registration carries Sites.Read.All, so this read runs on either path.

If Microsoft refuses the access list of an agent file or its knowledge sources, the scan reports that agent's access as unknown.

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in: the secret is wrong or expired, or an ID belongs to another directory. | Check the secret under **Certificates & secrets** and both IDs on **Overview**. |
| "The credential works, but access was denied. A permission is missing." | The sign-in worked and Microsoft refused the root site or the site list, or the root site answered and the site list came back empty, which can't happen in a healthy tenant and the test treats as a refused read. The test says: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission and grant admin consent.", or for the empty list: "In the Microsoft Entra admin center, open App registrations, the 1Secure registration, then API permissions, and add Sites.Read.All as an application permission, not a delegated one, and grant admin consent." | Add Sites.Read.All as an application permission and grant consent. |
| "The platform didn't answer, or said it is down or busy." | Microsoft didn't answer. | Click **Test again**. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact Netwrix Support. |

### If the scan skips something or warns

A scan that read to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| Skipped reads "Agents on [n] SharePoint sites, because they are locked." | Sites refused a read because they are locked, which is the common case and usually needs no action. The scan doesn't count a locked personal OneDrive site here. Where some sites refused for another reason, the sentence ends "because SharePoint refused the scanner." or "because they are locked or SharePoint refused the scanner." The scan keeps the agents found on those sites earlier. The line says what to do: "Check in the SharePoint admin center that these sites are not locked." | Check a site you expect to be readable against that site's own permissions. |
| Skipped reads "Any SharePoint agent, because the app registration lacks Sites.Read.All, so no site let the scanner list its document libraries." | No site answered a document library listing. | Add Sites.Read.All as an application permission and grant admin consent, as the line says. |
| Skipped reads "What data some SharePoint agents are grounded in, because their files could not be read." or "Who can open some SharePoint agents or the data they are grounded in." | The scan found an agent and couldn't read its definition or access list. The line says what to do: "Scan again, and if the same agents stay unread, send the support details to Netwrix Support." | Scan again. The scan still reports the agent, with its reach or access as unknown. |
| Skipped reads "The rest of the search for SharePoint agents, because SharePoint Online slowed the scanner down." | SharePoint throttled the scan. The line says what to do: "Scan outside busy hours, or lower Sites scanned under Scan settings on the source card." | Nothing is missing. Coverage fills in on the next scan, best run outside peak hours. |
| Skipped reads "Which files inside some agents' knowledge sources carry an Anyone link, an organization link or a sensitivity label, because those sources could not be listed." or "The sensitivity labels of the files inside agents' knowledge sources." | The scan couldn't list a library or folder an agent is grounded in, or Graph refused the files' sensitivity labels, or the scan stopped before reading them. | Scan again. The agents grounded there raise none of the three file issues for the sources the scan didn't list, and say so. |
| Skipped reads "Some files inside the largest libraries agents are grounded in, because each scan lists part of a very large library and the next scan lists on from there." | A library held more items than one scan lists, or the scan reached the most reads of shared and labeled files it makes. | Nothing to do. The next scans list the rest, and its agents read "not fully checked" until then. |
| Skipped reads "[n] libraries wait for the next scan." | The scan reached the most reads of shared and labeled files it makes before it reached these libraries. | Nothing to do. The next scan starts with them. Until then, each agent grounded there names the library and says it waits for the next scan. |
| Skipped reads "A SharePoint site, library or agent file that could not be fully read." | A site or library row came back without an ID and the scan didn't search it, or an agent file's creator or folder didn't read, so that agent has no owner or location. The line says what to do: "Scan again, and if it happens again, send the support details to Netwrix Support." | Scan again. A row without an ID is a Microsoft anomaly to report, not a missing permission. |

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* AI Security sends the secret and the token only to Microsoft.
* To revoke, remove Sites.Read.All and its consent under **API permissions**, or delete the client secret. **Disconnect** on the source removes the stored credential from AI Security.
