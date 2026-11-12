---
title: "Run your first scan"
description: "Start your first Netwrix 1Secure AI Security scan, follow it on the Sources page, and read each source's outcome."
sidebar_position: 6
---

# Run your first scan

The first scan reads every source you connected and fills the AI Security pages. You start it from the last step of the first run, **Start your first scan**, and you follow it on the **Sources** page.

:::warning
Only an organization administrator can start a scan. Anyone else sees "Only an organization administrator can start a scan."
:::

## Start the scan

1. On **Start your first scan**, read the summary. A ring counts how many of the sources you chose will be scanned, over **Will be scanned**, and a tile stands for each platform you chose.
   - A tile is green where its platform will be scanned.
   - A tile is white, with **Checking** under its name, where a role granted on **Connect Microsoft** is still applying.
   - A tile is white with **Skipped** where you skipped its permission.
   - A tile is dim where the platform isn't connected, with **No access** or **Needs a license** under its name where its test failed. Hover a tile marked **No access** or **Needs a license** to see why 1Secure won't scan it.

   Where a source won't be scanned, the heading says how many will, for example "4 of 6 sources will be scanned", with how many 1Secure is checking beside it, for example "Checking 2 sources".
2. Where a source is still to connect, read the rows under **Still to connect**. Each row says what is missing and what stays unread. A platform skipped or not connected shows **Connect** and the platform's name, for example **Connect Microsoft**. A source whose test failed shows **Fix it**.
3. Where you skipped a Microsoft permission, click the link that counts them, for example **1 skipped**, last on the step. Each row names the permission and what granting it adds, for example "Adds the agents built in Copilot Studio to the scan.", with **Grant now**, which opens that permission's card in a window over the step.
4. Click **Start first scan with** the number of sources that will be scanned. The **Overview** opens.

A source whose last test refused its credential is left out of the scan. Under the button, a line counts the sources that won't be scanned yet, for example "2 sources won't be scanned yet. Their cards above say why." The step doesn't list them by name.

Where a role is still applying, a line above the button says so, for example "2 sources join as their roles apply. Nothing to do." 1Secure tests again by itself for a few minutes, so a tile turns green as its test passes.

While a source's connection test is still running, the button is off, and hovering it says "Sources are still being tested. Scan when that finishes."

## Follow the scan

1. In AI Security, select **Sources**.
2. On the **Sources** tab, find each source's row. It reads **Scanning** while 1Secure reads the source.
3. Select the **Scans** tab. The new scan's row reads **Waiting to start**, then **Running**.

While the scan runs, the **Overview** says "Your first scan is running".

## Read the outcome

1. When the scan ends, read its row under **Scan history**. The **Outcome** column reads one of the values in the following table.

   | Outcome | What it means |
   |---------|---------------|
   | Succeeded | Every source was read to the end, even where a source skipped something it couldn't read. |
   | Partly scanned | At least one source finished, and at least one failed or didn't start, or a source's read stopped short and its automatic retries are spent. |
   | Failed | No source finished. |
   | Stopped | Someone stopped the scan. Finished sources keep their results. |

   A scan whose automatic retry is due or running for a source a platform slowed down still reads **Running**.

2. Click the scan's row. The scan drawer opens with how the scan went and what it found, when it started and how long it took, and lists the sources under **Needs attention**, **Scanned**, and **Not set up**, with each one's result. **Download scan report** saves the whole scan as one file to send to support.

   ![Scans tab with the drawer of a finished, Partly scanned scan open, and each source with its Not scanned and To fix lines](/images/1secureaisecurity/getting-started/scan-drawer-partly-scanned.webp)

3. Read each source's result. A source read to the end can still skip something, most often because a permission is missing. Its line ends with how many things it skipped, which you click to see each one and what to do. A source whose read stopped short says what it didn't read and what to do in lines that start "Not scanned:" and "To fix:".

[Scans](/docs/1secureaisecurity/admin/scans.md) explains the drawer, and [Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) lists every sentence it can show.
