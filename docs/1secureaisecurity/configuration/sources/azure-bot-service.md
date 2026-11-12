---
title: "Azure Bot Service"
description: "Read the Azure Bot Service bots in your subscriptions, their channels, and the identity each runs as, using the Azure RBAC credential."
sidebar_position: 12
---

# Azure Bot Service

AI Security reads the Azure Bot Service bots in your subscriptions, the channels each answers on, and the identity each runs as. You don't connect it on its own. It has no card of its own, and it reads with the Azure role-based access control (RBAC) source's credential, over the subscriptions that source can read. You connect Azure RBAC, and this read comes with it.

## Before you start

* Connect Azure RBAC first, or check that it's connected. See [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md).
* Have Reader on every subscription that holds bots, as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.

## Check the Reader role in Azure

There's nothing to create. The Azure RBAC source's app registration and its Reader role assignments are the credential. If Reader is missing on a subscription that holds bots, assign it as steps 2 to 7 of "Create the credential in Azure" on [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md#create-the-credential-in-azure) describe.

## Check the source in 1Secure

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Azure RBAC".
3. Check that the Azure RBAC row is connected. If it isn't, connect it as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.
4. Select the Azure RBAC row, and click **Test**.

The Azure RBAC test also proves this read, because both list the same subscriptions with the same role.

| Line | What it shows |
|------|---------------|
| Credential | As on the Azure RBAC source. |
| Last test | As on the Azure RBAC source. |
| Last scanned | On the Azure RBAC source, "Succeeded". |

Bots appear on the **Agents** page under Azure Bot Service after the first scan. A bot whose channels didn't read is still listed, with the channels its own resource names, and the scan says: "this bot's channels did not read; it is listed with the channels its own resource names".

## What this connector reads

* Every bot in each subscription the Azure RBAC source can read. AI Security lists every bot as an agent, because a bot exists to answer people on its channels.
* Each bot's name, location, kind, pricing tier, provisioning state, and the host of its messaging endpoint. AI Security doesn't keep the path and query of the endpoint, because they can hold a function key.
* The identity each bot runs as: its Microsoft app ID, the app type, its tenant and, for a user-assigned managed identity, that identity's resource ID. AI Security matches the app ID to the directory's service principal with the same ID, so the bot's owners and grants are that principal's.
* Each channel the bot is configured or enabled on, such as Microsoft Teams, Web Chat, or Direct Line, and whether it's enabled.
* Whether local authentication is turned off, whether public network access is on, and whether streaming is supported.
* Who changed each bot, read from the Azure Activity Log with who made each change and when: the bot itself saved, a channel added or changed, and an OAuth connection added or changed. The first scan reads the last 30 days, or the Activity window the organization chose under **Settings**. Each later scan reads on from where the last stopped, and catches up on no more than the last 14 days, or the Activity window where the organization chose a longer one.

Azure Bot Service states no owner and no creation date on a bot, so AI Security reads none. The owner is the owner of the matched app registration in Microsoft Entra ID. A bot's conversations aren't in Azure Resource Manager. They're in the bot's own Application Insights, if its developer set one up, so this read records no conversation for a bot.

### What it never touches

* It never writes. Every call is a read.
* AI Security picks every field it keeps by name. It never keeps a bot's Language Understanding (LUIS) key, Application Insights key, publishing credentials, app settings, or each channel's password or client secret.
* It reads no conversation, message, or transcript.

## Permissions

| Azure role or action | Where | What AI Security reads with it | Scan without it |
|----------------------|-------|--------------------------------|-----------------|
| Reader, which lists `Microsoft.BotService/botServices` and each bot's channels | Each subscription, or a management group above them. | Bots and their channels. | AI Security doesn't read the subscription's bots, and the scan says so. |
| Reader or Monitoring Reader, either of which carries `Microsoft.Insights/eventtypes/values/read` | Each subscription that holds a bot. | Who changed each bot, its channels, and its connections, from the Activity Log. | A change in that subscription names nobody, and AI Security reads the bots as before. The scan says so once per subscription. |

This is the same Reader role the Azure RBAC source needs. This read needs no further grant.

## Troubleshooting

### If the test fails

Azure Bot Service has no test of its own. Its test is the Azure RBAC source's test, which lists the subscriptions with the same Reader role and reads one resource in each, so the Azure RBAC row's answer stands for this read too. If that test fails, this read doesn't run.

1. Fix what the Azure RBAC test names, as the test table on [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md#if-the-test-fails) says.
2. Open the Azure RBAC source, and in its drawer's menu click **Test**.

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| On the Azure RBAC source, "Succeeded", with "Some Azure Bot Service bots or their channels." among the skipped items, or, for a list cut at the page limit, "The rest of a long list, because the scanner reached the most it reads in one scan." | A subscription's bot list was refused, throttled, or cut short. The line says what to do: "Give the app registration the Reader role on each subscription that holds bots." A throttled or cut short read is read again on the next scan. | Give the service principal Reader on the subscription the detail names, or scan again for a throttled read. |
| "Succeeded", and one bot listed with only the channels its own resource names | One bot's channels didn't read. | Check Reader on that bot's resource group, then scan again. |
| "Succeeded", with "Who changed the Azure Bot Service bots, their channels and connections in a subscription, from the activity log." among the skipped items | The Activity Log read of one subscription was refused or didn't answer. A change to a bot there names nobody, and the bots are read as before. The line says what to do: "Give the app registration the Reader or Monitoring Reader role on the subscription." | Assign one of those roles on the subscription the detail names, then scan again. |

## Security notes

* The credential is the Azure RBAC source's, held as [Azure RBAC](/docs/1secureaisecurity/configuration/sources/azure-rbac.md) describes.
* The token goes only to Azure Resource Manager at management.azure.com.
* To stop this read, remove Reader from the subscriptions that hold bots, or disconnect the Azure RBAC source. Either action stops the Azure RBAC read on those subscriptions too.
