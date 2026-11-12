---
title: "Beta support"
description: "Learn how to report a problem with Netwrix 1Secure AI Security during the Beta, what to include, and what happens to your report."
sidebar_position: 4
---

# Beta support

This page says how to report a problem with AI Security during the Beta, what to put in a report, and what happens to your report.

## Who the Beta tenants are

The Beta is open to a small set of invited organizations on the Beta environment.

{/* TODO: the product owner must confirm the names of the Beta tenants. The source lists this as an open question. */}

## Where to report

{/* TODO: confirm the customer-facing reporting channel and the required fields. */}

Write the summary of each report as the page or source, then what went wrong, in one line. For example, "Sources: Microsoft Entra ID test reads Failed after a grant".

## What to put in a report

Write the description as plain sentences under these headings:

1. **What you did.** The steps, in order, from the page you started on.
2. **What you expected.** One or two sentences.
3. **What happened.** The words the page showed, copied exactly.
4. **Details.**
   - The organization name in 1Secure.
   - The page, such as **Overview**, **Agents**, or **Sources**.
   - The source or the scan, such as "Microsoft Entra ID" or "the scan started at 09:14".
   - The time it happened, in UTC.
   - A screenshot of the page.
   - The **Copy for support** text from the scan drawer, where the source shows one. Click **Copy for support** and paste the text into the report as it is.

Report one problem in each report. Two problems in one report slow both down.

## What never goes in a report

- Passwords, client secrets, API keys, or tokens, for any platform.
- A screenshot that shows a secret, a key, or a sign-in code. Crop or blur it first.
- Personal data you don't need to show the problem, such as a list of user names.

If a secret reaches a report by mistake, revoke it on its platform at once, then say so on the ticket.

## What happens to your report

1. **The AI Security team reads it.** The team takes each new report into triage.
2. **The team sorts it.** A report is either a clear defect, or a question about what the product does or how it is worded.
3. **The team fixes a clear defect.** The team deploys the fix to the Beta environment. The ticket then comes back to you marked ready for testing, with a note of what to test.
4. **You test it.** Try the steps again. If the fix works, say so on the ticket. If it doesn't, say what you saw and the ticket goes back to the team.
5. **The team answers a question.** The team answers a question about the product or its wording on the ticket.

You may be asked for more detail on the ticket. Answer there, so that the whole history stays in one place.

## Answer times and severity

{/* TODO: the product owner must confirm the first answer time, the definition of the highest severity for the Beta, and the time to a fix for it. The source lists all three as unconfirmed. */}

## Before you report

Read [Known limitations](/docs/1secureaisecurity/troubleshooting/known-limitations.md) and [Troubleshooting](/docs/1secureaisecurity/troubleshooting/index.md) first. A value that shows as **Not measured** isn't a fault on its own. It means that part wasn't read, and the scan drawer says why.
