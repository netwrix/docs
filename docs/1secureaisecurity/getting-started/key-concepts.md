---
title: "Key concepts"
description: "Learn the terms the Netwrix 1Secure AI Security pages use: agents, identities, owners, sources, scans, issues, alerts, and Shadow AI."
sidebar_position: 2
---

# Key concepts

This page explains the words the AI Security pages use. Read it before you connect your first source, and come back to it when a page uses a word you don't recognize.

## Agents

An agent is something that acts on its own: a Copilot Studio agent, an Azure AI Foundry agent, an n8n workflow, or a Power Automate flow. Each agent is listed once on the **Agents** page, with the platform it came from, its owner, and its issues.

An agent's reach is its own grants plus the grants of every identity it acts as. That is why the **Reach** tab of an agent can show more than the grants on the agent itself.

## Identities

A non-human identity is any principal that isn't a person: a service principal, a managed identity, an app registration, or a stored key. Every agent is one, and most non-human identities aren't agents. The **Identities** page lists all of them and separates the ones AI runs as or uses from the others. Only the AI-related identities count in the AI Security totals.

## Owners

An owner is the person who answers for an agent. AI Security reads owners from the platform where the platform reports one. To name or change an owner, use **Change owner** on the agent. Where a platform names the owner by email address, the owner is the person in your directory with that address as their sign-in name or mail. Owners are people from your directory, never groups.

## Sources

A source is a platform you connect: a Microsoft Entra directory, an n8n instance, or an Okta org. Each source holds one credential and is read with read-only access.

Some sources read with another source's credential. Several Microsoft sources read with the app registration of your Microsoft Entra ID source, and their cards say so. A few reads have no card of their own. The Purview audit log and Microsoft Security Copilot read through Microsoft Entra ID, and Azure Logic Apps and Azure Bot Service read through Azure RBAC.

## Scans

A scan reads every connected source and imports what it found. Each source in a scan ends as **Succeeded**, **Partly scanned**, **Failed**, or **Not scanned**.

- A source read to the end still succeeds where the platform refused part of the read, most often because a permission is missing. It lists what it skipped.
- A source is partly scanned only when its read stopped short.
- A source reads **Not set up** when the tenant holds nothing for it, such as no license for the product.

The scan says what wasn't read and what to do, so you never mistake a smaller answer for a smaller estate. [Scans](/docs/1secureaisecurity/admin/scans.md) has the detail.

## Issues

An issue tells you something is wrong now. A scan raises it, and it stays open until a scan no longer finds it, someone marks it resolved, or someone makes an exception for it. Each issue comes from a rule on the **Rules** tab of **Settings**, with a severity of critical, high, medium, or low.

## Alerts

An alert tells you something happened. It has a time, a subject, and the platform that reported it. You can't fix an alert, because it already happened, so you read it and mark it as seen. An alert can be about a change that raised an issue or added to one. Marking the alert seen leaves the issue as it is. [Alerts](/docs/1secureaisecurity/admin/pages/alerts.md) explains how the two relate.

## Shadow AI

Shadow AI is the AI tools and apps that people use and that no connected platform accounts for. AI Security finds them through app consent in your directory, sign-ins with work accounts, and the tools found on your endpoints. You decide on each one: approve it or mark it not approved.

## Not measured and Not reported

**Not measured** means AI Security didn't read a value, usually because a permission is missing. **Not reported** means the platform doesn't give that value. AI Security never shows either as zero, because "not read" and "read and found none" are different answers.
