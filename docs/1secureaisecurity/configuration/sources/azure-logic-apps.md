---
title: "Azure Logic Apps"
description: "Read the Azure Logic Apps workflows that act as AI agents, their models, connectors, identities, and runs, using the Azure RBAC credential."
sidebar_position: 13
---

# Azure Logic Apps

AI Security reads the Azure Logic Apps workflows that act as AI agents, the models and connectors they use, the identity they run as, and their runs. You don't connect it on its own. It has no source of its own: its row on the **Sources** page opens the Azure RBAC source. It reads with the Azure role-based access control (RBAC) source's credential, over the subscriptions that source can read. You connect Azure RBAC, and this read comes with it.

## Before you start

* Connect Azure RBAC first, or check that it's connected. See [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md).
* Have Reader on every subscription that holds logic apps, as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.

## Check the Reader role in Azure

There's nothing to create. The Azure RBAC source's app registration and its Reader role assignments are the credential. If Reader is missing on a subscription that holds logic apps, assign it as steps 2 to 7 of "Create the credential in Azure" on [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md#create-the-credential-in-azure) describe.

## Check the source in 1Secure

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Azure RBAC".
3. Check that the Azure RBAC row is connected. If it isn't, connect it as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.
4. Select the Azure RBAC row, and click **Test**.

The Azure RBAC test also proves the subscription read. It doesn't reach a Standard logic app's host, so a refused host shows only after a scan. The Azure RBAC row shows these lines.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when some subscriptions answered and some didn't. |
| Last scanned | "Succeeded", with anything the scan couldn't read listed as skipped. |

Agent workflows appear on the **Agents** page under Azure Logic Apps after the first scan, and their runs on the **Activity** tab. A note counts the workflows that aren't agents: "workflows with no Agent action and no model call; they are counted here and not listed".

## What this connector reads

Azure Logic Apps has two hosting types. A Consumption workflow is one workflow that is its own Azure resource. A Standard logic app is one Azure resource that holds several workflows. An Agent action is the Logic Apps action that runs an AI agent with a model, and a Microsoft Sentinel playbook is a workflow that Microsoft Sentinel starts in response to an alert or incident.

* Consumption workflows in each subscription the Azure RBAC source can read, and the workflows inside each Standard logic app.
* Which workflows are agents. A workflow is an agent when its definition holds an Agent action, an Azure OpenAI connector or built-in action, or an HTTP action that calls an Azure OpenAI, Foundry, or OpenAI address. AI Security counts every other workflow and doesn't list it.
* For each agent: its host type, location, and state, whether it's autonomous or conversational, its trigger type, whether it's a Microsoft Sentinel playbook, the model deployment it calls, and every connector and built-in service it uses.
* The identity each agent runs as: its system-assigned or user-assigned managed identity, matched to the directory's service principal. A Standard workflow runs as its logic app.
* Each connector as something the agent can reach, and each model address that an HTTP action calls.
* The runs of each agent workflow: status, start, end, and the trigger that started it. The first scan reads the last 3 days, or the Activity window the organization chose under **Settings**. Each later scan reads on from where the last stopped. A source not scanned for more than 14 days catches up on the last 14 days only, or on the Activity window where the organization chose a longer one. On a very busy workflow, a scan may read only part of its runs.
* AI Security reads who saved each Consumption agent workflow, and when, from the Azure Activity Log over the same span as the runs. A Standard workflow is a file in its logic app, so the Activity Log doesn't record its saves.

AI Security reads a workflow's definition to work out these items, then drops it, because the definition holds the agent's instructions. It keeps only action names and types, connector names, the model deployment, and the trigger type. Logic Apps names no owner for a workflow and no person for a run, so AI Security reads neither. The owner is the owner of the matched identity in Microsoft Entra ID. AI Security doesn't read what each connection signs in as, or which mailbox, site, or database it points at.

### What it never touches

* It never writes. Every call is a read.
* It keeps no run inputs or outputs, and no link to them.
* It keeps no text from a workflow definition, so no instruction, prompt, or parameter value.

## Permissions

| Azure role or action | Where | What AI Security reads with it | Scan without it |
|----------------------|-------|--------------------------------|-----------------|
| Reader, which lists `Microsoft.Logic/workflows` and `Microsoft.Web/sites`, and each workflow's runs | Each subscription, or a management group above them. | Consumption workflows, Standard logic apps, and runs. | AI Security doesn't read the subscription's workflows, and the scan says so. |
| Reader's read actions under `Microsoft.Web/sites/hostruntime` | Each Standard logic app. | A Standard logic app's workflows and their runs. | AI Security lists the logic app as a host whose workflows didn't read, and whether it holds an agent is unknown. |
| Reader or Monitoring Reader, either of which carries `Microsoft.Insights/eventtypes/values/read` | Each subscription that holds a Consumption agent workflow. | Who saved each agent workflow, from the Activity Log. | A save in that subscription names nobody, and AI Security reads the workflows as before. The scan says so once per subscription. |

This is the same Reader role the Azure RBAC source needs. This read needs no further grant. A Standard logic app behind a private endpoint, or a Reader role scoped narrower than the logic app, can refuse the read of its workflows.

## Troubleshooting

### If the test fails

Azure Logic Apps has no test of its own. Its test is the Azure RBAC source's test, which lists the subscriptions with the same Reader role and reads one resource in each, so the Azure RBAC row's answer stands for this read too. If that test fails, this read doesn't run. The test doesn't reach a Standard logic app's host, so a refused host shows only after a scan.

1. Fix what the Azure RBAC test names, as the test table on [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md#if-the-test-fails) says.
2. Open the Azure RBAC source, and in its drawer's menu click **Test**.

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| On the Azure RBAC source, "Succeeded", with "Some Logic Apps workflows or their run history." among the skipped items, or, for a list cut at the page limit, "The rest of a long list, because the scanner reached the most it reads in one scan." | Azure refused, throttled, or cut short a read of a subscription's workflows, sites, or runs. The line says what to do: "Give the app registration the Reader role on each subscription that holds Logic Apps." A Standard logic app behind a private endpoint, or a Reader role scoped narrower than the subscription, can also block the read. The next scan retries a throttled or cut short read from the same point. | Give the service principal Reader on the subscription the detail names, or scan again for a throttled read. |
| "Succeeded", and one Standard logic app listed as a host and not counted as an agent | A Standard logic app's workflows didn't read. The scan says: "this Standard logic app's workflows did not read, so whether it hosts an agent is unknown; it is listed as a host and not counted as an agent". | Check that the logic app isn't behind a private endpoint and that Reader covers it, then scan again. |
| "Succeeded", and some workflow definitions not read | Some workflow definitions didn't read, so whether they call a model is unknown this run. | Scan again. If it repeats, check Reader on those workflows. |
| "Succeeded", with "Who changed the Logic Apps agent workflows in a subscription, from the activity log." among the skipped items | The Activity Log read of one subscription was refused or didn't answer. A save of a workflow there names nobody, and the workflows are read as before. The line says what to do: "Give the app registration the Reader or Monitoring Reader role on the subscription." | Assign one of those roles on the subscription the detail names, then scan again. |

## Security notes

* The credential is the Azure RBAC source's, held as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.
* The token goes only to Azure Resource Manager at management.azure.com.
* To stop this read, remove Reader from the subscriptions that hold logic apps, or disconnect the Azure RBAC source. Either action stops the Azure RBAC read on those subscriptions too.
