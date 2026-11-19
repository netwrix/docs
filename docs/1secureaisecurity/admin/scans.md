---
title: "Scans"
description: "Start, follow, stop, and retry AI Security scans, read the scan drawer, and learn what to do when a source is read only in part."
sidebar_position: 2
---

# Scans

A scan reads every connected source and imports what it found into the AI Security pages. This page explains how to start a scan, follow it, read its drawer, and respond when a source is read only in part.

## Start a scan

1. Select **Sources** in the sidebar.
2. Click **Scan all**. To scan one source, open its card and click **Scan now**.
3. Read the confirmation, such as "Scan 27 platforms now?". A source whose credential isn't set, can't be used, or was refused at its last test is left out and reads **Not scanned**.
4. Confirm the scan.

The scan appears at the top of the **Scans** tab of **Sources**, as **Waiting to start** or **Running**.

:::warning
Only an organization administrator can start a scan. An organization runs one scan at a time, so while one is running, follow it rather than start another.
:::

Scans also start on the schedule saved under **Scan schedule** in **Settings**. See [Settings](/docs/1secureaisecurity/admin/settings.md).

## Follow a scan

The **Scans** tab of **Sources** lists every scan, newest first, with who started it.

Two words in the status table need a definition. A source's activity is the events it reads, such as sign-ins and audit events, as opposed to the agents and identities it lists. 1Secure runs a limited number of scans at the same time, and each running scan takes a scan slot. A scan waits while every slot it may take is in use.

| Status | What it means |
|--------|---------------|
| Waiting to start | The scan is accepted and hasn't started. Where every scan slot it may take is in use, its drawer says "Waiting for a free scan slot." A scan started while another scan's activity is still being read also waits here until that activity is read. |
| Running | The scan is reading its sources. A scan also reads **Running** while 1Secure retries a source by itself, or is due to, because the platform slowed the read down. |
| First results in, reading activity | The first results are in, and a source's activity is still being read. |
| Succeeded | Every source was read to the end, even where a source skipped something it couldn't read or had nothing to read. |
| Partly scanned | At least one source finished, and at least one failed or wasn't started, or a source's read stopped short. A scan with automatic retries reads this only after the retries are spent, stopped, or taken over with something still unread. |
| Failed | No source finished. |
| Stopped | Someone stopped the scan. |
| Not run, scanning is disabled | Scanning isn't turned on, so no scan runs. 1Secure recorded the request. |

While a source is read, its card on the **Sources** tab reads **Scanning**, and the numbers shown for it are from the previous scan.

A scan stays running until the Microsoft Entra ID sign-in and audit activity it reads has landed, though the directory lands first. After its first results are in, its status reads **First results in, reading activity**, and it has no end time until the activity lands. While only the activity is left, **Stop** is hidden. The **Issues** and **Shadow AI** pages say "Still reading activity for [sources]. More issues may follow."

A scan that a 1Secure restart put back to run again says "Started again after a restart" on its row and in its drawer.

## Stop a scan

1. On the running scan's row, click **Stop**.
2. Read "Stop this scan?". Sources still scanning stop and return no results. Finished sources keep their results.
3. Confirm the stop, or click **Keep scanning**.

## Retry failed sources

1. On a scan's row, click **Retry failed sources**.
2. Wait for the new scan. It starts for the sources the first scan didn't finish, where each is still connected and turned on. It leaves every other source alone.

**Retry failed sources** doesn't scan again a source its platform refused, because scanning again doesn't change a refusal. Make the grant its "To fix:" line names, then scan the source.

## Read the scan drawer

Open a scan's row to open its drawer, titled "Scan of" and the time. The drawer opens with how the scan went and what it found, such as "Scan finished with 2 problems.", then "Started [when], took [duration]." While the scan saves what it read, it says "Saving results. This can take a while." The sources follow under **Needs attention**, **Scanned**, and **Not set up**.

![Scans tab with the scan drawer open on a Partly scanned scan, showing each source with its Not scanned and To fix lines](/images/1secureaisecurity/misc/scan-drawer-partly-scanned.webp)

A reader is the part of a source that reads one kind of data. Where a source reads with more than one reader, the drawer can list the readers under the source, each with its own result.

For each source, the drawer shows:

- **What was read**, as **Complete**, **Partly scanned**, or **Not scanned**, with counts such as "27 sites read", "2 locked", or "3 refused".
- **The agents found**, as new, changed, unchanged, and removed.
- **What was skipped**, for a source read to the end, or **what was not read and what to do**, for a source whose read stopped short or failed. [Respond to scan results](#respond-to-scan-results) describes both.
- **Show support details**, which shows the technical details for Netwrix Support on the page, with **Copy** beside them, on a source whose read stopped short or failed.

**Download scan report** saves the scan as one file for Netwrix Support. The file holds the scan, each source, what it read, what it didn't read, and what to do, then the same record as JSON.

## Respond to scan results

A source's result in the drawer says how far the scan read it. These sections explain the three results that need a closer look: things skipped, **Not set up**, and **Partly scanned**.

### Things skipped

A source can be read to the end and still skip something it couldn't read, most often because a permission is missing or the platform refused one item. Such a source reads **Succeeded**, and each reader listed under it reads **Complete**. Its line says what it found and read, then how many things it skipped, for example "12 agents found, 27 sites read, 2 items skipped".

Click the count to list each thing skipped, followed by what to do. Click **Export** to download the list as a CSV file. The export also carries each thing's code, the details for Netwrix Support, and each item the platform refused.

A read that a platform refused a permission for, where the platform lists the permission as optional, such as Policy.Read.All on Microsoft Entra ID, is listed the same way, with what to grant. The scan runs without the permission, so the source still reads **Succeeded**, and the next scan reads the activity on from where this one stopped.

A source that skipped something still adds what it read. What it didn't read shows as unknown or **Not measured**, never as zero. Some things skipped need no action. A SharePoint site listed under "The site is locked" is the common case.

### Not set up

Some sources have nothing to read on your tenant, and no grant changes that. A source whose read found only that ends as a clean scan.

On the **Sources** page, the source's test, its **Last scanned** line, and its row read **Not set up**, in the ordinary color, with the reason:

- "No Azure subscription was found for this tenant."
- "The tenant has no license for this product."
- "This product isn't set up on the tenant."
- "No Power Platform environment has a Dataverse database."

A test can name the product, such as "This tenant has no Purview audit, so there is nothing to read here." In the scan drawer, such sources are listed under **Not set up**, for example "Purview audit log is not set up on this tenant."

The scan counts the source as read, not failed, and the source needs nothing from you. If you expected data from the source, act on the reason it gives, for example license or set up the product on the tenant, then scan again. Its last test isn't marked passed, so a scan of every source tests it again first. A source the scan left out for the same reason after its last test ends the same way.

An Azure source reads **Not set up** only where the administrator's Azure Reader sign-in saw no subscription. Where the tenant has subscriptions but the app registration can't see them, the scan ends as the missing Reader grant instead.

### Partly read sources

A source is read in part, and reads **Partly scanned**, only where its read stopped short. A read stops short in any of these cases:

- A reader stopped with an error.
- The activity read stopped with an error.
- A list was cut at a page limit.
- A platform slowed a list down past its retries.
- The results didn't reach 1Secure in time.

A scan with such a source reads **Partly scanned**. Where the only shortfall is a platform slowing the read down, the source reads **Partly scanned, retries next scan** in the ordinary color, or **Partly scanned, no scan scheduled** where the organization has no scan schedule.

Where a list comes back short because the platform slowed down or didn't answer, what earlier scans found stays, and nothing is removed for being missing.

An activity read that ran out of time or reached its limit doesn't make a source partly scanned. It says how far it got, and the next scan reads on from there.

A source the scan left out on purpose reads **Not scanned**, in gray rather than as a failure. The scan leaves a source out in any of these cases:

- The platform refused its credential at the last connection test or by the last scan.
- Its last test found no Power Platform environment, which reads "Not scanned because the last test found nothing to read."
- The Microsoft Entra ID source it reads with is turned off.
- Someone stopped the scan before it read the source.

A scan of every source tests such sources again before it starts, and reads each one that now passes.

A partly read source lists what it didn't read in lines that start "Not scanned:" and "To fix:". Where a platform refused some items, the source shows **Details** and **Export**.

**Details** opens the list, grouped by reason with a count for each, and each item with what the platform answered in a word: **Refused**, **Locked**, **Not found**, **Slowed down**, or **No answer**. One line under the list gives the platform's own answers for Netwrix Support. **Show all** lists the rest, and a long list has a search box, "Search by item or reason". **Export** downloads the whole list as a CSV file with **Item**, **Status**, **Code**, and **Reason** columns.

## Activity read over more than one scan

A source's first scan reads the last three days of Microsoft Entra ID sign ins and audit events, unless the organization chose an **Activity window** under **Settings**. Every later scan reads on from where the last one stopped. A source not scanned for more than 14 days catches up on the last 14 days only, or on the **Activity window** where the organization chose a longer one, and older activity isn't read. Each source reads on from its own last scan.

On a large tenant, one scan may read only part of the activity. The source's drawer then says "The [sign in or audit log] after the [days] this scan read, which the next scans read." A source's first scan reads the newest days first, so there the drawer says "The [sign in or audit log] before the [days] this scan read, newest first, which the next scans read."

1Secure then starts a follow-on scan, an automatic scan that reads the rest of the activity, as soon as no other scan of the organization is running. A follow-on scan reads only that source and the sources read with its app registration, such as Microsoft Defender for Endpoint, and reads on from where the scan before it stopped. It reads only the activity, not the directory again, and what the scan before it found stands. 1Secure also starts a follow-on scan, after a short wait, where a platform slowed a read down.

On the **Scans** tab, a follow-on scan has no row of its own. The scan it continues reads **Running** while one is due or running, and its drawer shows each source's latest result. **Download scan report** lists each follow-on scan under "AUTOMATIC RETRIES".

Follow-on scans stop when the log is read to the end, when someone starts a scan, or when the scan schedule is due. They also stop when they keep reading nothing new, and the source says "The rest of the activity, because the last two follow on scans read nothing new." with "Scan again later. The next scan reads on from where the last read stopped." The scan that takes over reads on from the same place.

See [Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) for every sentence the drawer can show, with what to do.
