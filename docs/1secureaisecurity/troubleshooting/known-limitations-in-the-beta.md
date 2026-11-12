---
title: "Known limitations in the Beta"
description: "Learn the limits you may meet during the Netwrix 1Secure AI Security Beta, what causes each, and what to do about it."
sidebar_position: 3
---

# Known limitations in the Beta

This page lists the limits you may meet during the Beta. Each one says what you see, why, and what to do. [Known limitations](/docs/1secureaisecurity/troubleshooting/known-limitations.md) lists the general ones.

## Some Microsoft sources need a license or a service your tenant lacks

**What you see.** A source shows "Not set up" with the reason, such as "No Azure subscription was found for this tenant." This isn't a failure, and the rest of the scan goes on. Or the Microsoft Entra ID source says it didn't read "Sign ins by people and agents, because this directory has no Microsoft Entra ID P1."

**Why.** Some sources read a Microsoft service that not every tenant has:

- Azure AI Foundry needs an Azure subscription.
- Power Platform and Copilot Studio need a Power Platform environment with a Dataverse database.
- Defender for Endpoint needs its license, with machines onboarded.
- The sign-in log needs Microsoft Entra ID P1. Without it, apps show no count of people using them, agents show no last sign-in, and the **Activity** tab gets no sign-ins.
- The Purview audit log needs auditing turned on in the Purview portal.

No permission fixes a missing license or service. 1Secure also connects to the worldwide Microsoft cloud only, not to a national or government cloud.

**What to do.** Skip the source during setup, or add the license or service. A scan of every source tests a source with nothing to read again first, and reads it after its test passes.

{/* TODO: confirm which Microsoft 365 plans (for example E3 and Business Basic) are supported for each source */}

## A very large directory is read only in part

**What you see.** The Microsoft Entra ID source says the read of people was cut short.

**Why.** One scan reads at most 99,900 people. 1Secure keeps the people it read. It doesn't offer people past that number as owners.

{/* TODO: confirm the 99,900-person limit is a supported customer limit */}

**What to do.** If your directory holds more people, contact Netwrix support.

## A short time per source spreads the sign-in read over several scans

**What you see.** The scan reads "Done, still loading", its drawer lists **Automatic retries**, and the **Sources** page shows "Scanning continues, 1 of 12".

**Why.** **Time per source**, under **Scan limits** on the **Settings** page, sets how long each source's scan can run, from 5 to 60 minutes. The sign-in read stops early to leave time to save the results. The next scans read what isn't read yet, from where the last one stopped.

**What to do.** To read additional data in one scan, raise **Time per source**.

## Follow-on scans stop after twelve in a row

**What you see.** The follow-on scans stop before the sign-in read is done. A source can say "The rest of the activity, because the last two follow on scans read nothing new."

**Why.** A scan that didn't finish the sign-in read starts a follow-on scan, which reads on. At most 12 run in a row. The chain also stops when two follow-on scans in a row read nothing new, or when a scan you start or a scheduled scan runs.

**What to do.** Nothing is lost. The next scan you start, or the next scheduled one, reads on from where the last read stopped.

## An update to 1Secure can restart a running scan

**What you see.** A scan running while 1Secure is updated starts again from the beginning. If something stops it a second time, it ends. The **Sources** page then says "Interrupted by a service update, runs again at the next scan", or "The scan was interrupted. Scan again." where the stop wasn't an update.

**Why.** A 1Secure update can interrupt a scan that is running.

**What to do.** If the scan ended as interrupted, start it again from the **Sources** page.

## 1Secure only reads

**What you see.** [What 1Secure can do in your environment](/docs/1secureaisecurity/getting-started/what-1secure-can-do-in-your-environment.md) lists each right as **Read-only** or **Read via a privileged right**. AI Security finds issues and tells you how to fix them, but it doesn't fix them for you.

**Why.** 1Secure reads your platforms and never changes, deletes, or sends anything on them. A few reads need a right that Microsoft defines more widely than the read. 1Secure only reads with those too. The linked page explains each one.

**What to do.** Make each fix on the platform itself, then scan again to see it cleared.
