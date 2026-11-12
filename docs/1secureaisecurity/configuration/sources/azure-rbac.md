---
title: "Azure RBAC"
description: "Connect Azure RBAC so AI Security can read the Azure role assignments that non-human identities hold and report what each one can do."
sidebar_position: 14
---

# Azure RBAC

Connect Azure role-based access control (RBAC) so AI Security can read the Azure role assignments held by non-human identities and say what each one can do in Azure. You give the app registration that connects Microsoft Entra ID the Reader role in Azure, and enter its values in 1Secure. Microsoft Graph permissions grant no access to Azure resources, so this connector needs Azure roles of its own.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have Owner or User Access Administrator on each subscription, to assign roles. No custom role is needed.
* Sign in to the Azure portal at portal.azure.com.

## Create the credential in Azure

1. Create the app registration and its client secret as steps 1 to 8 of the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describe, or reuse the one you have.
2. Open **Subscriptions**, and select a subscription to cover.
3. Open **Access control (IAM)**, and select **Add > Add role assignment**.
4. Select **Reader**, and click **Next**.
5. Select **User, group, or service principal**, and click **Select members**.
6. Select the app registration by name, and click **Review + assign**.
7. Repeat steps 2 to 6 for every subscription to cover, or assign Reader once on a management group above them.

The picker shows the registration's name, and the role lands on its service principal, the Enterprise application of the same name. They're one identity, so either page shows the assignment.

## Connect the source

:::info
If a Microsoft Entra ID source is connected, **Connect using** offers that source's app registration or "An app registration of its own". If you choose the Entra ID source, there is nothing to enter.
:::

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Azure RBAC".
3. In the Azure RBAC row, click **Connect**. The **Connect Azure RBAC** dialog opens.
4. In **Directory (tenant) ID**, enter the Directory (tenant) ID.
5. In **Application (client) ID**, enter the Application (client) ID.
6. In **Client secret value**, paste the client secret value from the **Value** column.
7. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
8. Click **Done**.

The test lists the subscriptions as a scan does. A refusal fails the test, an empty list reads "Not set up", and a throttled or failing Azure Resource Manager only warns.

Select the Azure RBAC row to see the source. To test it again, click **Test** in the source drawer's menu, or click **Edit** and then **Test again** in the dialog.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when some subscriptions answered and some didn't. "Not set up" when no subscription is visible. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as one subscription's listing or one role definition lookup that didn't answer while the rest did. "Partly scanned" when the page limit cut a listing, or Azure slowed a subscription's listing down. "Not set up", with "No Azure subscription was found for this tenant.", when no subscription is visible and the tenant has none. If the tenant might have one, a scan that sees none ends as a missing Reader grant instead. See [If the test fails](#if-the-test-fails). |

The test doesn't read the eligible schedules or the Azure Activity Log. A subscription that refuses either shows after a scan among the skipped items, and **Last scanned** still reads "Succeeded".

A scan of this source also reads the other Microsoft platforms that the same three values unlock. If the registration lacks permissions for another Microsoft platform, that platform's own source lists what it skipped. That doesn't change this source's **Last scanned** status.

## What this connector reads

* The role assignments held by service principals and managed identities, in every subscription the registration can read. AI Security skips assignments held by users, groups, and devices.
* The role, the scope, and the date of each assignment, and the role's name.
* Privileged Identity Management eligible schedules and active assignment schedules in each subscription, to tell a standing privileged role from a time-bound one. An active assignment with an end date still to come is time-bound.
* Which identity each grant belongs to, matched by object ID to the identities that the directory and Azure AI Foundry reads find. If a scan doesn't read the directory, AI Security reads from Microsoft Graph, by ID, the identities that the grants and changes name. AI Security leaves out a grant whose holder none of these reads finds.
* Each role assignment written or deleted, from each subscription's Activity Log: who made the change, for which identity, and when. Each change carries the role by its name, where the scan resolved it, and the scope in words, such as a resource group in a named subscription, beside the path the log states it by. Set how far back scans read under **Settings** in the Activity window. AI Security doesn't read changes to role definitions.

The same credential and the same subscriptions also run two reads that have no card of their own: Azure Logic Apps agent workflows and their runs, described in [Azure Logic Apps](/docs/1secureaisecurity/configuration/sources/azure-logic-apps.md), and Azure Bot Service bots, described in [Azure Bot Service](/docs/1secureaisecurity/configuration/sources/azure-bot-service.md).

From these reads, AI Security raises four kinds of finding:

* Owner converted from a classic administrator.
* A privileged role such as Owner, Contributor, or User Access Administrator.
* A role held at a wider scope than the workload needs.
* A privileged role held permanently, with no eligible schedule and no end date.

### What it never touches

* It never writes. Every call is a read.
* It never changes, activates, or removes a role assignment or an eligible schedule.
* From each schedule it keeps who holds or can activate the role, which role and at which scope, and for an active assignment when it ends. It keeps nothing else about the window.
* It reads no resource's contents, keys, or connection strings. On its own it reads grants only.

## Permissions

| Azure role or action | Where | What AI Security reads with it | Scan without it |
|----------------------|-------|--------------------------------|-----------------|
| Reader, which carries `Microsoft.Authorization/roleAssignments/read` | Each subscription, or a management group above them. | Subscriptions and their role assignments. | AI Security reads nothing in this platform, and the test fails. |
| Reader, which carries `Microsoft.Authorization/roleEligibilityScheduleInstances/read` and `roleAssignmentScheduleInstances/read` | Each subscription. | Eligible and active assignment schedules. | AI Security reads assignments, and calls none standing, because it can't tell standing apart from time-bound. |
| Reader or Monitoring Reader, either of which carries `Microsoft.Insights/eventtypes/values/read` | Each subscription. | Role assignment changes from the Activity Log. | AI Security reads assignments, and no role assignment change in that subscription reaches the **Activity** tab. |
| Microsoft Graph application permission `Application.Read.All`, with admin consent | The tenant. | The identities the role assignments name, where the scan doesn't read the directory. | The scan leaves out their role assignments and changes, and names the permission to grant. |

Reader is enough for the three Azure reads. A subscription whose schedules Reader still can't read has a deny assignment or an Azure Policy that strips the read. Ask the subscription's administrator rather than creating a role.

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the three values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in: the secret is wrong or expired, or an ID belongs to another directory. | Check the secret under **Certificates & secrets** in Microsoft Entra, and both IDs on the app's **Overview**. |
| "The credential works, but access was denied. A permission is missing." | The sign-in worked and no subscription is visible or readable. The test says: "Give the app registration the Reader role on each subscription or their management group." If no subscription is visible at all, the test says: "No Azure subscription is visible. Give the registration Reader on one, or leave Azure unconnected." The test then reads "Not set up". Otherwise, the scan ends as a missing grant: "Any Azure subscription, because none is readable by the app registration." with "Give the app registration the Reader role on at least one subscription or its management group." | Assign Reader as steps 2 to 7 of [Create the credential in Azure](#create-the-credential-in-azure) describe. |
| "The credential works, but Azure RBAC refused part of what the scan reads." | AI Security read some subscriptions and Azure refused at least one. | Assign Reader on the subscriptions the scan should cover, or accept that AI Security doesn't read the others. |
| "The platform didn't answer, or said it is down or busy." | Azure Resource Manager or the sign-in service didn't answer. | Check that AI Security can reach management.azure.com and login.microsoftonline.com. |
| "The platform didn't answer in time." | Azure didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "Which privileged Azure roles are time bound through Privileged Identity Management." among the skipped items | A subscription's eligible or active assignment schedules were refused. The scan says: "Ask the subscription's administrator to remove the deny assignment or Azure Policy that stops the Reader role reading role eligibility." | Check that Reader is assigned on the subscription the detail names, then ask that subscription's administrator to lift the deny assignment or Azure Policy. Don't create a custom role. |
| "Succeeded", with "Changes to Azure role assignments in a subscription." among the skipped items | A subscription's Activity Log was refused, so no role assignment change in it reaches the **Activity** tab. The role assignments themselves are unaffected. The scan says: "Give the app registration the Reader or Monitoring Reader role on the subscription." | Assign Reader on the subscription the detail names. |
| "Succeeded", with "The name of the role with the id [id], because its role definition was deleted or is out of the scanner's reach." among the skipped items, or, if several roles didn't resolve, "The name of a role that role assignments hold, because its role definition was deleted or is out of the scanner's reach." | A role assignment names a role definition that Azure reports as not found or refuses. AI Security shows the assignments without the role's name. The scan says: "Check Access control (IAM) on the subscription for role assignments whose role shows as unknown, and remove them if the role was deleted." | Look for the assignments with an unknown role in **Access control (IAM)**. A second scan gives the same result. |
| "Succeeded", with "The Azure read of [read], which did not answer." among the skipped items, naming one subscription, or, if several didn't answer, "One Azure read, which did not answer." | One subscription's listing was refused, or one role definition lookup didn't answer, while the rest answered. Assignments for that role name it by its ID. The scan says: "Scan again, and if it repeats, give the app registration the Reader role on that scope, or Foundry User, formerly Azure AI User, on an AI Foundry project." | For a refusal, give the service principal Reader on the scope the message names. For any other answer, scan again before acting. |
| "Succeeded", with "The rest of this source, because it stopped answering in time." among the skipped items | Azure failed or didn't answer one subscription's role assignment listing, and AI Security read the other subscriptions. The scan removes nothing the last scan found in Azure RBAC. | Scan again to read the rest. |
| "Partly scanned", with "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows." | Azure slowed one subscription's role assignment listing down, and AI Security read the other subscriptions. The scan removes nothing the last scan found in Azure RBAC. | Wait for the next scan, which reads the rest. |

## Security notes

* AI Security stores the three values encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* The secret goes only to Microsoft's token endpoint. The token goes only to Azure Resource Manager.
* To revoke access, remove the role assignments under **Access control (IAM)**, or delete the client secret. **Disconnect** on the source removes the stored credential from 1Secure.
