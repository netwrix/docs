---
title: "Known limitations"
description: "Check what Netwrix 1Secure AI Security doesn't do yet, or does only in part, before you report a missing value as a problem."
sidebar_position: 2
---

# Known limitations

This page lists what AI Security doesn't do yet, or does only in part. Check it before you report a missing value as a problem.

## Scans

- **Scans run on the schedule you save, or when someone starts one.** With no schedule saved, 1Secure scans an organization every day after it connects a source. Set the schedule on the **Settings** page. To start a scan at any time, use **Scan all** on the **Sources** page.
- **Only an organization administrator can start a scan.** Anyone else sees "Only an organization administrator can start a scan."
- **File counts aren't read.** How many files each agent can reach shows as unknown, because a scan doesn't count files yet.
- **Retention is set for the whole deployment.** The **Settings** page shows how long scan results are kept. You can't change it there.

## Sources

- **Six platforms are coming soon.** AWS Bedrock, Atlassian, ServiceNow, ServiceNow AI Control Tower, Salesforce, and Google Workspace show "Coming soon" and offer no way to connect a new source. A source already connected on one of them still lists, edits, tests, and scans.
- **Agents used with personal accounts can't be seen.** No source can see agents used outside single sign-on, or with personal accounts.
- **Microsoft roles take a few minutes to apply.** A test right after a grant can still be refused. Test again after a couple of minutes.

## Connect with Microsoft

Connect with Microsoft grants the Microsoft Graph permissions in one sign-in. It can't grant everything a Microsoft source needs.

- **The Defender for Endpoint account read is granted by hand.** Defender for Endpoint reads with ThreatHunting.Read.All, which Connect with Microsoft grants. Its optional account read needs the WindowsDefenderATP permissions Machine.LiveResponse and Machine.ReadWrite.All, which you add on the app registration with admin consent.
- **Azure roles are separate.** Assign Reader on each subscription, and Foundry User, formerly Azure AI User, on each Foundry project, in the Azure portal. For Reader, you can use **Let 1Secure do it** instead.
- **Power Platform needs its own steps.** Register the management application with **Let 1Secure do it** or PowerShell. The System Administrator of each environment adds the application user.
- **A tenant that consented before a permission was added holds the older set.** If you connected before Organization.Read.All and DelegatedPermissionGrant.Read.All were added to the one-click registration, the verified domains and the delegated grants read as refused. To fix this, open the Microsoft Entra ID source, click **Sign in with Microsoft** or **Reconnect**, and accept the permissions.
- **Apps holding Sites.Selected show as reaching unknown sites.** On SharePoint sites you haven't approved, 1Secure can't see which sites those apps reach. Approve the sites on the **Sites** tab of the SharePoint Online source. {/* TODO: confirm the wording of this limit and the Sites.Selected behavior */}

:::info
Each source's test or scan names the grant it is missing, so the **Sources** page tells you which of these limits apply to your tenant.
:::

## Licenses

- **Agent 365** needs a Microsoft Agent 365 license with at least one agent package in the catalog. Without the license, ThreatHunting.Read.All lets the Microsoft Defender read list the same agents.
- **Sign-in data** from Microsoft Entra ID needs Microsoft Entra ID P1.
- **Purview audit log** needs Purview Audit (Standard) turned on for the tenant.
- **Copilot Studio agents** exist only where somebody holds a Copilot Studio license, or Agent Builder in a Microsoft 365 Copilot tenant.
- **Defender for Endpoint** needs Microsoft Defender for Endpoint, or Defender for Servers, with machines onboarded.
