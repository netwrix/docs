---
title: "Azure AI Foundry"
description: "Connect Azure AI Foundry so AI Security can read your AI resources, model deployments, and the agents inside each Foundry project."
sidebar_position: 11
---

# Azure AI Foundry

Connect Azure AI Foundry so AI Security can read your Foundry estate: the AI resources, their model deployments, and the agents inside each project. You give the app registration that connects Microsoft Entra ID two Azure roles, and enter its values in 1Secure. Microsoft Graph permissions grant no access to Azure resources, so this connector needs Azure roles of its own.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have Owner or User Access Administrator on each subscription and each project, to assign roles.
* Sign in to the Azure portal at portal.azure.com.

## Create the credential in Azure

1. Create the app registration and its client secret as steps 1 to 8 of the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describe, or reuse the one you have.
2. Open **Subscriptions**, and select a subscription that holds Foundry resources.
3. Open **Access control (IAM)**, and select **Add > Add role assignment**.
4. Select **Reader**, and click **Next**.
5. Select **User, group, or service principal**, and click **Select members**.
6. Select the app registration by name, and click **Review + assign**.
7. Repeat steps 2 to 6 for every subscription to cover, or assign Reader once on a management group above them.
8. Assign Foundry User on each Foundry project, using one of these methods:
   * If you connected Microsoft Entra ID with **Sign in with Microsoft**, click **Let 1Secure do it** on the **Azure Reader on your subscriptions** card. In the same sign-in that grants Reader on the subscriptions you select, it assigns Foundry User on the Foundry projects you select, once on each Foundry resource that holds them. Every project under that resource inherits the role. Your account needs Owner or User Access Administrator on the subscriptions and projects. The card then says how many of each, for example "Reader on 3 subscriptions, Foundry User on 2 projects", with who signed in and the date. Do steps 9 to 11 for a project your account couldn't assign it on, and for a project you add later under another Foundry resource.
   * Otherwise, do steps 9 to 11 on each project.
9. Open the Foundry project resource. It sits under its Foundry resource, of type Azure AI Services.
10. On the project, open **Access control (IAM)**, and add a role assignment.
11. Select **Foundry User**, formerly Azure AI User, and assign it to the same app registration. If you assign it with a script, use the role ID `53ca6127-db72-4b80-b1b0-d745d6d5456d`, because the old name no longer resolves.

## Connect the source

:::info
If a Microsoft Entra ID source is connected, **Connect using** offers that source's app registration or "An app registration of its own". If you choose the Entra ID source, there is nothing to enter.
:::

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Azure AI Foundry".
3. In the Azure AI Foundry row, click **Connect**. The **Connect Azure AI Foundry** dialog opens.
4. In **Directory (tenant) ID**, enter the Directory (tenant) ID.
5. In **Application (client) ID**, enter the Application (client) ID.
6. In **Client secret value**, paste the client secret value from the **Value** column.
7. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
8. Click **Done**.

The dialog says "Subscription ID is read from the credential". You enter nothing to name this source. The test fills in the Subscription ID when the registration lists one subscription. AI Security reads every subscription the registration can list.

The test lists the subscriptions as a scan does. A refusal fails the test, an empty list reads "Not set up", and a throttled or failing Azure Resource Manager only warns.

Select the Azure AI Foundry row to see the source. To test it again, click **Test** in the source drawer's menu, or click **Edit** and then **Test again** in the dialog.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when some subscriptions answered and some didn't. "Not set up" when no subscription is visible. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as one read that didn't answer while the rest did, or a project's agents that couldn't be listed or read. "Partly scanned" when the page limit cut a listing, or Azure slowed a subscription's listing down. "Not set up", with "No Azure subscription was found for this tenant.", only when the administrator's own list of subscriptions was empty at the Azure Reader step. Where subscriptions exist and the app registration can't read them, the scan instead lists "Any Azure subscription, because none is readable by the app registration." with "Give the app registration the Reader role on at least one subscription or its management group." See [If the test fails](#if-the-test-fails). |

The test doesn't reach the Foundry projects, so it doesn't prove the Foundry User role. A project that lacks the role shows after a scan among the skipped items, and **Last scanned** still reads "Succeeded".

A scan of this source also reads the other Microsoft platforms that the same three values unlock. If the registration lacks permissions for another Microsoft platform, that platform's own source lists what it skipped. That doesn't change this source's **Last scanned** status.

## What this connector reads

* Every subscription the registration can list, and in each one the Azure Machine Learning workspaces, Azure AI Services accounts, and Foundry projects, with the identity each runs as.
* Each resource's network, authentication, and endpoint settings, its model deployments, and its content filter policies. An issue about a resource's key authentication or public network access names every agent on the resource, so each agent's page shows it too. If the scan holds no identity for the resource, the issue appears on its first agent.
* The agents inside each Foundry project, both classic and current: model, creation date, and the tools each can call, including Model Context Protocol (MCP) servers, file search stores, web search, and other agents. Current agents also carry their version and when they were last changed. AI Security doesn't list agents in hub-based projects, which are Azure Machine Learning workspaces. It reads the workspace as a resource only.
* The connections that a tool points at. For current agents, the names of files in a file search store. The rest appear by ID alone, and the scan says how many. For a classic agent, AI Security reads a file search store by its ID only.
* The identity an agent runs as, and the project identity behind it.
* Who created each Foundry project, read from the Azure Activity Log. If a project's own record names no creator, this suggests an owner for its agents.
* Who changed what an agent runs on or can reach, read from the Activity Log with who made each change and when: a model deployment saved on the agent's account, which is a change to the agents on that deployment, and a connection saved on the agent's project or account. The Activity Log doesn't record a change to an agent's own model or tools, so AI Security doesn't show who made those changes. The first scan reads the last 3 days, or the Activity window set under **Settings**. Each later scan reads on from where the last stopped, and catches up on no more than the last 14 days, or the Activity window if it is longer.

### What it never touches

* It never writes. Every call is a read.
* It keeps the first sentence of an agent's instructions and, for current agents, a digest of them, never the rest.
* From file search stores it reads names, counts, and sizes, never file contents.
* It reads no usage metrics. Those need Azure Monitor, which AI Security doesn't read.

## Permissions

| Azure role | Where | What AI Security reads with it | Scan without it |
|------------|-------|--------------------------------|-----------------|
| Reader | Each subscription, or a management group above them. | Subscriptions, AI resources, deployments, and content filters. | AI Security reads nothing in this platform, and the test fails. |
| Foundry User, formerly Azure AI User | Each Foundry project. | The agents, their tools, connections, and file names. | AI Security still reads resources and identities, and reports the agents as unknown, never as none. |
| Reader or Monitoring Reader, either of which carries `Microsoft.Insights/eventtypes/values/read` | Each subscription that holds a Foundry project. | Who created each project, and who changed an agent's deployment or connections, from the Activity Log. | A project whose own record names no creator suggests no owner, a change in that subscription names nobody, and AI Security reads the agents as before. The scan says so once per subscription. |

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three registration values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in: the secret is wrong or expired, or an ID belongs to another directory. | Check the secret under **Certificates & secrets** in Microsoft Entra, and both IDs on the app's **Overview**. |
| "The credential works, but access was denied. A permission is missing." | The sign-in worked and no subscription could be read. The test says: "Give the app registration the Reader role on each subscription or their management group." If no subscription is visible at all, the test says: "No Azure subscription is visible. Give the registration Reader on one, or leave Azure unconnected." The test then reads "Not set up". A scan reads "Not set up" with "No Azure subscription was found for this tenant." only when the account that signed in for the Azure Reader step saw no subscription either, and Reader is granted on none. Otherwise, as for a credential entered by hand, the scan ends as a missing grant: "Any Azure subscription, because none is readable by the app registration." with "Give the app registration the Reader role on at least one subscription or its management group." | Assign Reader as steps 2 to 7 of [Create the credential in Azure](#create-the-credential-in-azure) describe. |
| "The credential works, but Azure AI Foundry refused part of what the scan reads." | AI Security read some subscriptions and Azure refused at least one. | Assign Reader on the subscriptions the scan should cover, or accept that AI Security doesn't read the others. |
| "The platform didn't answer, or said it is down or busy." | Azure Resource Manager or the sign-in service didn't answer. | Test again later. |
| "The platform didn't answer in time." | Azure didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The agents inside an AI Foundry project." among the skipped items | AI Security read resources and Azure refused a project's agents. The scan says: "Give the app registration the Foundry User role, formerly Azure AI User, on each AI Foundry project." | Assign Foundry User on each project, as steps 8 to 11 of [Create the credential in Azure](#create-the-credential-in-azure) describe. |
| "Succeeded", with one read among the skipped items, such as "The Azure read of [read], which did not answer." | One read didn't answer while the rest did. What it holds is unknown this run, not absent. A refusal means a role is missing on that one scope: Reader for an Azure Resource Manager read, Foundry User for a Foundry project's agents. | For a refusal, assign the role the message names on the scope the detail names. For any other answer, scan again before acting. |
| "Succeeded", with "The rest of this source, because it stopped answering in time." among the skipped items | Azure failed or didn't answer one subscription's resource listing, and AI Security read the other subscriptions. The scan removes nothing the last scan found in Azure AI Foundry. | Scan again to read the rest. |
| "Partly scanned", with "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows." | Azure slowed one subscription's resource listing down, and AI Security read the other subscriptions. The scan removes nothing the last scan found in Azure AI Foundry. | Wait for the next scan, which reads the rest. |
| "Succeeded", and a project whose agents answered in a form the scan can't read | That project's agents are unknown this run. | Scan again. If it recurs, send the project the detail names to Netwrix Support. |
| "Succeeded", and a project with no Foundry endpoint | AI Security couldn't list the project's agents. | Check the project the detail names in the Foundry portal, then scan again. |
| "Succeeded", with "Who created each AI Foundry project, from the activity log." among the skipped items | The Activity Log read of one subscription was refused or didn't answer. A project whose own record names no creator suggests no owner for its agents. The scan says: "Give the app registration the Reader or Monitoring Reader role on the subscription." | Assign one of those roles on the subscription the detail names, then scan again. |
| "Succeeded", with "Who changed the model deployments and connections of the AI Foundry agents in a subscription, from the activity log." among the skipped items | The Activity Log read of one subscription was refused or didn't answer. A change to a deployment or a connection there names nobody. The scan says: "Give the app registration the Reader or Monitoring Reader role on the subscription." | Assign one of those roles on the subscription the detail names, then scan again. |

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* A source connected with **Sign in with Microsoft** stores no secret of yours. A test or a scan reads with Microsoft tokens that 1Secure requests for your tenant with Netwrix's application.
* The secret goes only to Microsoft's token endpoint. The tokens go only to Azure Resource Manager and to Foundry hosts.
* To revoke access, remove the role assignments under **Access control (IAM)**, or delete the client secret. **Disconnect** on the source removes the stored credential from 1Secure.
