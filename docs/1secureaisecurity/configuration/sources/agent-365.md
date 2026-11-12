---
title: "Agent 365"
description: "Connect Agent 365 so AI Security can read your organization's agent catalog in Microsoft Graph and mark which agents the organization registered."
sidebar_position: 10
---

# Agent 365

Agent 365 is Microsoft's agent inventory for Microsoft 365: the agents built and published through the Microsoft 365 admin center and Copilot. Connect it so AI Security can read your organization's agent catalog in Microsoft Graph. Agent 365 is the one source that can say the organization registered an agent, so it turns agents other connectors found into registered ones.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values: the Directory (tenant) ID, the Application (client) ID, and the client secret. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Check that the tenant holds a Microsoft Agent 365 license. Without one, there is nothing to read. The Microsoft Defender source is the other way to list the organization's agents.
* Have a Global Administrator or Privileged Role Administrator grant the admin consent.
* Sign in to the Microsoft Entra admin center at entra.microsoft.com.

## Grant the permissions in Microsoft Entra

1. Create the app registration and its client secret as the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describes, or reuse the one you have.
2. On the app, open **API permissions**, and click **Add a permission**.
3. Select **Microsoft Graph**, then **Application permissions**.
4. Add `CopilotPackages.Read.All` and `AppCatalog.Read.All`.
5. Click **Grant admin consent for** your tenant, then click **Yes**.

The permission rows show the status "Granted".

:::info
Don't add `AgentRegistration.Read.All`. It belongs to an agent registry API that Microsoft retired on June 15, 2026. AI Security reads the catalog with `CopilotPackages.Read.All`.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Agent 365".
3. In the Agent 365 row, click **Connect**. The **Connect Agent 365** dialog opens.
4. If Microsoft Entra ID is connected, the dialog says "Uses your Microsoft app registration" and there is nothing to enter. Go to step 8. To enter other values, click **Use different credentials**. If Microsoft Entra ID isn't connected and the dialog starts with **Sign in with Microsoft**, you can click it instead, accept the permissions, and go to step 9. **Use an app registration instead** opens the fields of steps 5 to 7.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID from the app's **Overview**.
6. In **Application (client) ID**, enter the Application (client) ID from the app's **Overview**.
7. In **Client secret value**, paste the client secret value from the **Value** column.
8. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
9. Click **Done**.

The test reads the catalog as a scan does, so a missing license or permission fails the test in the scan's words. A throttled or failing Microsoft Graph only warns.

Select the Agent 365 row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". A passing test confirms the permission and the license together. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped. "Partly scanned" when the catalog or the publish requests were cut at the page limit. "Not set up" when the tenant has no Agent 365 license. |

A scan of this source also reads the other Microsoft platforms that the same three values unlock. If the registration lacks permissions for another Microsoft platform, that platform's own source lists what it skipped and reads "Succeeded", or reads "Failed" where it read nothing. That doesn't change this source's **Last scanned** status.

If Microsoft refuses the catalog, the scan still reads the other Microsoft platforms and reports Agent 365 as not measured. If a permission is missing, this source reads "Failed". If the tenant has no Agent 365 license, the test, the last scan, and the source row read "Not set up" in the ordinary color, not as a failure. The last scan says "The tenant has no license for this product."

## What this connector reads

* The packages in the organization's agent catalog: declarative, Teams, Copilot Studio, Agent Builder, and third-party agents.
* Which packages the organization built or deployed. Marketplace listings that nobody deployed are counted per platform and aren't treated as agents.
* Each package's type, whether it's blocked, who it's available and deployed to, its element types, supported hosts, source platform and publisher, and when it was last modified.
* Each package's app ID, matched to the directory, so a package vouches for the Microsoft Entra application it names.
* For each agent, the active users and sessions over the last 30 days, as the admin center's **Activity** tab counts them, who the agent is shared with (as user and group IDs), and when it was last updated.
* Registered agents that also hold tenant-wide Microsoft Graph permissions or Azure roles, raised as findings.
* For each declarative agent, what its manifest grounds it in. Each item becomes something the agent can reach:
  * The SharePoint and OneDrive items the manifest names, resolved to the sites that hold them. A manifest that names no items grounds the agent in all of SharePoint and OneDrive, and AI Security reports it that way.
  * The Microsoft Graph connectors the manifest names. A manifest that names none reaches every connector in the organization.
  * Web search, with the sites it's limited to where the manifest names them.
* The other agents a declarative agent's manifest names as worker agents. AI Security records each as a call from that agent to the one it names.

If AI Security can't read an agent's usage, active users, sessions, and sharing show as not measured, never as zero, and the source still reads "Succeeded". The scan also lists one of these messages among the skipped items:

* "One Microsoft read, because Microsoft slowed the scanner down."
* "One Microsoft read, because Microsoft did not answer."

In that case AI Security keeps the Agent 365 records from earlier scans.

The catalog carries no owner, sponsor, creator, or creation date, so AI Security reads none from it. If the organization's Teams app catalog names the person who submitted a package's app for publishing, AI Security keeps that person as the agent's creator.

AI Security doesn't read:

* The admin center's **Risks** column.
* What a custom engine agent or an agent connector can reach.
* A declarative agent's actions, API plugins, or Model Context Protocol (MCP) servers.

### What it never touches

* It never writes to Microsoft 365.
* It keeps package metadata and a declarative agent's grounding. It never reads the files or sites an agent is grounded in. Of a manifest's instructions, it keeps only the first sentence, as the agent's purpose.
* It reads no conversations. The usage it keeps is the two counts for each agent, never who used it.

## Permissions

| Grant or license | What AI Security reads with it | Scan without it |
|------------------|--------------------------------|-----------------|
| Microsoft Graph application permission `CopilotPackages.Read.All` | The catalog, and each agent's package detail with its usage and sharing. | AI Security doesn't read the catalog and the test fails. |
| A Microsoft Agent 365 license on the tenant, with at least one package in the catalog | Microsoft serves the catalog only to a tenant with the license. | As above. No permission fixes it. |
| Microsoft Graph application permission `AppCatalog.Read.All` | The publish requests waiting in the admin center. | An agent that is registered and not yet published shows its publishing status as unknown rather than as a draft. |

Without the license, AI Security doesn't read the organization's declarative and custom engine agents from the catalog. The Microsoft Defender source lists them without the license when its app registration holds `ThreatHunting.Read.All`. See [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md).

Without the catalog, every agent that Agent 365 might have vouched for reads as "not measured", never as ungoverned.

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in or the token. | Check the secret under **Certificates & secrets** and both IDs on the app's **Overview**. |
| "Agent 365 refused access. Grant admin consent to CopilotPackages.Read.All again, then test again shortly." | The catalog refused the read. Microsoft can take a few minutes to apply a consent. | If you connected with **Sign in with Microsoft**, grant admin consent to the 1Secure registration again under **Enterprise applications**, then test again in a few minutes. If you connected with your own app registration, grant the permission as the steps in "Grant the permissions in Microsoft Entra" describe. If the tenant has no Agent 365 license, connect Microsoft Defender for Endpoint to list the same agents. |
| "The app registration is missing these permissions, or they have no admin consent: CopilotPackages.Read.All. Add them as application permissions, grant admin consent, and test again." | The permission is missing or has no admin consent. | Add the permission and grant admin consent as the steps in "Grant the permissions in Microsoft Entra" describe. |
| "Agent 365 refused access despite consent to CopilotPackages.Read.All. Check the license, or test again shortly." | The app holds the permission with admin consent, and Microsoft still refused the catalog without naming a license. | Check that the tenant holds a Microsoft Agent 365 license, and click **Test again** in a few minutes. If it fails again, send the technical details to Netwrix Support. Microsoft Defender for Endpoint lists the same agents without the license. |
| "The tenant has no Microsoft Agent 365 license." | One of two cases. The sentence after it tells them apart. "Either add a Microsoft Agent 365 license, or connect Microsoft Defender for Endpoint with ThreatHunting.Read.All, which lists these agents without one." means Microsoft refused the read and named the license, for example "Customer must be a licensed for Agent 365 in order to use Agent 365 Graph APIs." "Add a Microsoft Agent 365 license and publish an agent package to its catalog." means the catalog doesn't exist on this tenant. | For the first, ask your Microsoft account team about an Agent 365 license, or connect Microsoft Defender for Endpoint with `ThreatHunting.Read.All` as [Microsoft Defender for Endpoint](/docs/1secureaisecurity/configuration/sources/microsoft-defender-for-endpoint.md) describes. For the second, check the license, and that the catalog holds a package. |
| "Microsoft retired the Agent 365 catalog address 1Secure uses. Contact Netwrix Support." | Microsoft retired the endpoint. | Contact Netwrix Support. AI Security needs an update. |
| "The platform didn't answer, or said it is down or busy." or "The Agent 365 catalog didn't respond. Test again later." | Microsoft Graph didn't answer, or answered that it's down. | Click **Test again** later. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

The test shows "The tenant has no Microsoft Agent 365 license." in two cases: Microsoft says a license is required, or the catalog doesn't exist. The scan tells them apart. It says the agents are read "only for a tenant with an Agent 365 license" in the first case, and that the catalog wasn't read "because the tenant has not set it up" in the second.

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* A test or a scan decrypts the credential for that run only.
* A source connected with **Sign in with Microsoft** stores no secret of yours. A test or a scan reads with Microsoft tokens that 1Secure requests for your tenant with Netwrix's application.
* The secret goes only to Microsoft's token endpoint. The token goes only to graph.microsoft.com.
* To revoke access, remove `CopilotPackages.Read.All` or delete the client secret. **Disconnect** on the source removes the stored credential from 1Secure.
