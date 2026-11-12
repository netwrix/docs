---
title: "Microsoft Copilot Studio"
description: "Connect Microsoft Copilot Studio so AI Security can read your agents across the tenant and, optionally, the knowledge sources they're grounded in."
sidebar_position: 15
---

# Microsoft Copilot Studio

Connect Microsoft Copilot Studio so AI Security can read your Copilot Studio agents across the tenant, and what those agents are grounded in, from every Power Platform environment it can discover plus the one environment you can name. You give the app registration that connects Microsoft Entra ID a role in Microsoft Entra and access in Power Platform, and connect the source in 1Secure.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Have a Privileged Role Administrator or Global Administrator assign the AI Reader role. Have a Power Platform administrator or Global Administrator register the app as a management application.
* For knowledge sources, have System Administrator in each environment whose agents should show reach.

## Grant the access in Microsoft Entra and Power Platform

1. Create the app registration and its client secret as the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describes, or reuse the one you have.
2. In the Microsoft Entra admin center at entra.microsoft.com, open **Entra ID > Roles & admins**, and select **AI Reader**.
3. Assign the role to the app registration.
4. To read knowledge sources in every environment, register the app registration as a Power Platform management application. The registration is what opens the environment list to an app. A Power Platform admin Reader role is for a user and doesn't open it. As a Power Platform administrator, run:

   ```powershell
   Add-PowerAppsAccount; New-PowerAppManagementApp -ApplicationId <app-id>
   ```

5. Without the registration, open **Manage > Environments** in the Power Platform admin center, select the one environment to read, and copy its "Environment URL". It ends in .dynamics.com.
6. In each environment whose agents should show reach, sign in as a System Administrator of that environment. A Power Platform Administrator can't add an application user until you give that role in the environment.
7. Open **Settings > Users + permissions > Application users**, and click **New app user**.
8. Add the app registration, choose the business unit, and give it the built-in Agent Viewer role, or a custom role with Organization read on the Copilot component table.
9. To list who each agent is shared with, also give the application user a custom security role with Read on the Copilot table at Business Unit level or deeper (`prvReadbot`) and Read on the Team table (`prvReadTeam`). Agent Viewer holds Read on the Copilot table at User level only, which reads none of the agents, and no Read on the Team table. The test names each of the two that the application user lacks.

If Microsoft Entra ID is connected with Microsoft, 1Secure does steps 6 to 9 for you on the environments you tick. See [Let 1Secure add the application user](#let-1secure-add-the-application-user). Steps 6 to 9 remain for an environment made after that sign-in, and for one where your account isn't a System Administrator.

:::info
If Microsoft Entra ID is connected with Microsoft, 1Secure does steps 2 to 4 for its own app. The "Entra AI Reader role" card offers **Let 1Secure do it**. **Also register the management application** on the "Power Platform policies" card, with **Finish Power Platform setup**, makes the registration. Each asks an administrator to sign in once more. After the management application is registered, AI Security tests this source again if its test asked for the registration. An environment that still has no application user keeps the test's warning until you complete steps 6 to 8 there. See [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md).
:::

## Let 1Secure add the application user

If a test says "Knowledge not read. Add the app as an application user with Agent Viewer.", the Microsoft Copilot Studio drawer under **Sources** shows the "Power Platform application users" card. It offers **Let 1Secure do it** beside **Do it yourself** if Microsoft Entra ID is connected with Microsoft and the source reads with its app. A source on an app registration of its own gets **Do it yourself** alone, which is steps 6 to 8.

1. Click **Let 1Secure do it**. A small Microsoft sign-in window opens.
2. Sign in as an administrator who is a System Administrator of the environments to add. A Global Administrator or Power Platform administrator isn't one until added. In the Power Platform admin center, open the environment, then **Membership**, **System Administrators**, and click **Add me** first.
3. Accept the access Microsoft asks for, to the PowerApps Service API and to Dynamics 365 as you, for this sign-in.
4. Review the environments that the card lists. They are the environments that have a Dataverse database, all ticked. The card clears an environment that Microsoft gives your account no access to, and says "Power Platform administrators use Add me under Membership in" the environment, "and others ask a System Administrator." Untick any to leave out.
5. Click **Add 1Secure**.

1Secure adds its app as an application user in each environment you ticked, with the Agent Viewer role and the 1Secure Flow Reader role, as the [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md) card does. 1Secure Flow Reader reads flows, and holds the Read on the Copilot and Team tables at Organization depth that step 9 asks for. The card names the environments added and each one skipped with why. Then 1Secure tests the source again for a short while as Microsoft applies the grant. If no environment took the application user, it tests once and doesn't wait. The card goes when the test reads every environment.

The Get started wizard doesn't ask for this grant. The card is where you make it.

If your account isn't a System Administrator of an environment, 1Secure adds itself there through the Power Platform admin API instead, as the [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md#what-adding-the-application-users-does) card does. That application user holds the System Administrator role, which 1Secure can't remove from itself, beside Agent Viewer and the 1Secure Flow Reader role where Dataverse accepts them. The card names the environment among those added, and the list of rights marks that System Administrator role "You can trim this". [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md#what-adding-the-application-users-does) gives the one step in the Power Platform admin center that trims it. The card names as skipped only an environment where the admin API refuses too.

The environment URL must be a public https address under `dynamics.com`, for example `https://contoso.crm.dynamics.com`. AI Security refuses a plain http address, a private or reserved address, a single-label name, and a name in an internal zone such as `.local` or `.internal`.

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Microsoft Copilot Studio".
3. In the Microsoft Copilot Studio row, click **Connect**. The **Connect Microsoft Copilot Studio** dialog opens.
4. If Microsoft Entra ID is connected, the dialog says "Uses your Microsoft app registration", and it doesn't ask for the three registration values. Go to step 8. To enter other values, click **Use different credentials**.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID from the app's **Overview**.
6. In **Application (client) ID**, enter the Application (client) ID from the app's **Overview**.
7. In **Client secret value**, paste the client secret value from the **Value** column.
8. Optionally, in **Environment URL**, paste an environment URL, starting with `https://`. AI Security reads it beside the environments it discovers. It's the only environment read if discovery isn't granted.
9. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
10. Click **Done**.

The test runs the scan's agent inventory query. A missing AI Reader role fails the test, and a throttled or failing Azure Resource Graph only warns.

Select the Microsoft Copilot Studio row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when the inventory answered and at least one Dataverse environment refused, or the application user in an environment lacks a privilege the share read needs. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as part of the inventory that Resource Graph capped or answered in a form AI Security can't read. "Partly scanned" when the page limit cut the inventory or an environment's components. |

A scan of this source also reads the other Microsoft platforms that the same three values unlock. If the registration lacks permissions for another Microsoft platform, that platform's own source lists what it skipped. That doesn't change this source's **Last scanned** status.

## What this connector reads

* Every Copilot Studio and Agent Builder agent in the tenant: name, environment, creator, owner, when it was last published, its channels, authentication, and orchestration settings.
* Whether each agent is published or a draft, and the Entra agent identity or app it's linked to.
* Each agent's model, triggers, and flows, who it's shared with as viewers and editors, whether it's quarantined or managed, and whether it's a command-line or GitHub Copilot agent.
* The connector operations each agent can call, and whether each needs the end user's consent.
* Whether each agent runs on an event. An agent with a trigger other than a conversation, such as a new email or a schedule, runs with no person involved and is listed as a workflow. Such an agent whose connector actions write data or send email raises an issue.
* The Power Platform environments the agents live in.
* From each environment's Dataverse: each agent's knowledge sources, such as SharePoint sites, URLs, and Dataverse tables, and its skills and file attachments. The read covers every environment AI Security discovers or you name, and each agent's knowledge comes from its own environment.
* From each environment's Dataverse: who owns each agent's record and who created it, and the people the record is shared with. AI Security looks up each person once in the environment's User table, for the Entra object ID that joins them to the directory. An agent that the inventory names no owner or creator for gets them from here. A creator who also owns the agent is named as both. A team that owns an agent is listed by its name and never as a person. A share is access to the agent and never makes the person an owner.
* Who an agent is shared with. In an environment with very many agents, the scan lists among the skipped items how many agents it didn't ask about, and those agents list no shares rather than being read as shared with nobody.

The Power Platform connector reads agent flows and workflows built in Copilot Studio. See [Power Platform](/docs/1secureaisecurity/configuration/sources/power-platform.md). A step in one of them that runs an agent is shown as a call to the agent listed here.

Agents exist only where somebody holds a Copilot Studio license, or Agent Builder in a Microsoft 365 Copilot tenant.

### What it never touches

* It never writes. Every call is a read or a query.
* It keeps agent fields from a fixed list, so it doesn't store a field that carries a key, a token, or an author's instructions.
* It reads no conversation transcripts and no invocation metrics.
* Classic bots built before Copilot Studio agents are out of scope.
* Every Dataverse read draws from your tenant's pooled daily allowance of Power Platform requests, which your own flows and apps share. A scan keeps its share of that allowance small, and stops there, keeping what it read.

## Permissions

| Role or permission | What AI Security reads with it | Scan without it |
|--------------------|--------------------------------|-----------------|
| The Entra AI Reader role, assigned to the app in Microsoft Entra ID | The agent and environment inventory. | AI Security doesn't read the platform and the test fails. |
| `GroupMember.Read.All`, or `Group.Read.All`, a Microsoft Graph application permission with admin consent | The name and member count of each Microsoft 365 group or Teams team an agent is shared with. | Agents shared with a team list no group under **Shared with** for it. The people each agent is shared with are unaffected. |
| Registration as a Power Platform management application | The list of environments to read knowledge sources from. | AI Security reads only the environment you name. |
| An application user in each environment whose agents should show reach, with a security role that reads the Copilot component table (`botcomponent`), such as the built-in Agent Viewer role | Knowledge sources in that environment. | AI Security still inventories agents in that environment, but not their knowledge sources, and their reach reads as unknown. |
| A role the application user holds with Read on the Copilot table (`bot`, privilege `prvReadbot`) at Business Unit level or deeper. Organization level reads the agents of every business unit. | Each agent record's owner and creator, and who it's shared with. | Owners and creators come from the inventory alone, and nobody is listed as shared with. At User level, the depth Agent Viewer holds, the read answers none of the agents. |
| The same role with Read on User (`systemuser`, privilege `prvReadSystemUser`) | Owners, creators, and shared people as directory users. | They stay Dataverse IDs that join to no directory identity. |
| A role the application user holds with Read on Team (`team`, privilege `prvReadTeam`) | Which Microsoft 365 group or Teams team stands behind each share with a team. | An agent shared with a team lists no group under **Shared with** for it. |

Agent Viewer is a security role that Microsoft ships in each environment, and it reads bot components. A custom role with read on the `botcomponent` table also works. Agent Viewer doesn't read who an agent is shared with. Add Read on the Copilot table at Business Unit level or deeper and Read on Team to a custom role the application user holds, as step 9 describes. The test and each scan read the application user's privileges in every environment that answers, and name each of the two it lacks. Only a System Administrator of the environment can add an application user. A Power Platform Administrator isn't one until you give that role in the environment.

The application user is what the full read needs. Without it, the inventory still lists every agent. An agent for which the inventory counts public website knowledge sources still raises "Agent grounded on public website content", on that count. The issue then says how many public sites the inventory counts, but not which sites. AI Security reads their addresses from the agent's components, which only an application user with the Agent Viewer role reads. After you add the application user, the next scan names each site. The issue's **How to resolve** names the environment and the agent, and tells you to take these steps:

* Open the agent's **Knowledge**.
* Remove the public website sources, which it names where the scan read them, or replace them with content the organization maintains.
* Publish the agent again, or save it if it's a draft not yet published.

An agent that Microsoft built, such as Copilot in Power Apps, lists Microsoft as its owner and is never listed as needing one. It raises no issue for being shared with the whole tenant or for having no Entra agent identity, because the organization chooses neither.

## Add the application user

A test that warns about an environment lists these steps under its message, with the environment and the app registration named. **What to do** opens this section.

To add the application user, as a System Administrator of the environment:

1. Open the Power Platform admin center at admin.powerplatform.microsoft.com.
2. Select **Environments**, then the environment the test names.
3. Select **Settings**, then **Users + permissions**, then **Application users**.
4. Select **New app user**, and add the app registration the test names.
5. Choose the business unit, and add the **Agent Viewer** security role.
6. Come back and select **Test again**.

To give the application user's role a privilege the test names:

1. Open the Power Platform admin center at admin.powerplatform.microsoft.com.
2. Select **Environments**, then the environment the test names.
3. Select **Settings**, then **Users + permissions**, then **Security roles**.
4. Open the custom security role the application user holds, or select **New role** to make one.
5. Give the role the privileges the test names, such as Read on the Copilot table at Business Unit level or deeper and Read on the Team table, then select **Save**.
6. In **Users + permissions**, select **Application users**, then the app registration the test names, then **Edit security roles**, and add the role.
7. Come back and select **Test again**.

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three registration values isn't stored. | Click **Edit**, and enter all three, and the environment URL if you use it. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter the values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in. | Check the secret and both IDs in Microsoft Entra. |
| "The credential works, but access was denied. A permission is missing." | Microsoft refused the inventory. The test says: "In the Microsoft Entra admin center, open Roles and administrators, then AI Reader, and assign the role to the 1Secure registration." | Assign the role as steps 2 and 3 describe. |
| "Knowledge not read. Add the app as an application user with Agent Viewer." | The inventory answered and an environment's Dataverse refused the agents' components. The detail starts with the environment's name, and the test says: "Have a System Administrator of that environment add the 1Secure registration as an application user with a role that reads bot components, such as the built in Agent Viewer role." The "Power Platform application users" card asks for it. | Click **Let 1Secure do it** on that card, or have a System Administrator of that environment add the application user as steps 6 to 8 describe. |
| "The credential works, but Microsoft Copilot Studio refused part of what the scan reads." | The inventory answered and the application user in an environment lacks a privilege the share read needs. The test names each one missing and the environment, for example: "Add Read on the Copilot table (prvReadbot) at Business Unit level or deeper and Read on the Team table (prvReadTeam) to the security role of the 1Secure registration user in the environment prod-contoso." No permission card asks for it, because the privilege belongs to the security role of the application user in that environment and no tenant-wide grant gives it. | Add the privileges the test names to a custom role the application user holds, as step 9 describes, and test again. |
| "The credential works, but Microsoft Copilot Studio refused part of what the scan reads." | The inventory answered and the environment list was refused. The test says: "Make the 1Secure registration a Power Platform management application, or name each environment in the source's settings." | Register the app as step 4 describes, or name the environment in **Environment URL**. |
| "The platform returned a response the scanner doesn't support." | Azure Resource Graph or Dataverse answered in a form AI Security can't read. | Check that the environment URL is the environment's own address. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The environment URL isn't https, or isn't on .dynamics.com, or its name resolves to a private address. | Paste the "Environment URL" exactly as the admin center shows it. |
| "The platform didn't answer, or said it is down or busy." | Microsoft didn't answer. | Test again later. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix Support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped items, and its source reads "Succeeded". A read that stopped short, such as a list cut at the page limit, reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The knowledge sources of the Copilot Studio agents in a Power Platform environment." among the skipped items, and what to do: "Have a System Administrator of that environment add the 1Secure registration as an application user with a role that reads bot components, such as the built in Agent Viewer role." | An environment refused the knowledge source read, and agents in that environment read as unknown reach. The detail names the environment. Environments that refused alike are one entry naming each, for example "2 environments refused the scanner: prod and sales (default)." | Create the application user in each named environment as steps 6 to 8 describe. |
| "Succeeded", with "The list of Power Platform environments, so only those named in the source's settings are read." among the skipped items | AI Security refused the environment list, and agents in the environments it leaves out read as unknown reach. | Register the app as step 4 describes. |
| "Succeeded", with who the owners and creators are, or who the agents are shared with, among the skipped items | The application user can't read the User table, so owners and creators stay Dataverse IDs, or it can't list who an agent is shared with. AI Security read everything else in that environment. | Add Read on User, or Read on the Copilot table at Business Unit level or deeper, to the application user's role. |
| "Succeeded", with who the agents are shared with among the skipped items, and a detail that names a privilege check | The application user's roles lack Read on the Copilot table at Business Unit level or deeper, or Read on Team, so nobody is listed as shared with, or a share with a team lists no group. The detail names each privilege missing and the depth held. | Add the privileges the line names, as step 9 describes. |
| "Succeeded", with "Who the Copilot Studio agents in an environment are shared with, past the number a scan asks about." among the skipped items | The environment holds more agents than a scan asks about, and the scan didn't ask who the rest are shared with. Owners and creators are unaffected. | Nothing. No permission is missing. |
| "Succeeded", with "[count] more Copilot Studio agents, past the most one scan lists." among the skipped items, or the same line naming Power Platform environments | Azure Resource Graph capped a result set, so the agents or environments past the cap are unknown this run. A capped listing of Power Automate flows shows on the Power Platform source instead. The count is Microsoft's total less the rows read, and the line reads "More" where Microsoft gave no total. | Scan again. If it recurs, send the details to Netwrix Support. |
| A skipped item that reads "One Microsoft read, because Microsoft slowed the scanner down.", "One Microsoft read, because Microsoft did not answer.", "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows." or "The rest of this source, because it stopped answering in time.", with a detail naming an environment | An environment's Dataverse throttled the scan, failed, or didn't answer, or the scan reached its share of your tenant's Power Platform requests and sent no more. No application user or privilege is missing, and AI Security still reads the other environments unless the scan reached its share. If a listing came back short, the scan keeps the agents and knowledge the source held from earlier scans rather than removing them. | Wait for the next scan, which reads it again. |
| "Succeeded", with "Part of the Copilot Studio inventory, because a query answered unexpectedly." among the skipped items | Part of the inventory is unknown this run, not absent: a Resource Graph query answered without a result set. | Scan again. If it recurs, report it with the query the detail names. |

## Security notes

* AI Security stores the values encrypted when you click **Connect** and never shows them again. The source shows only whether a credential is set and which settings are missing.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* The secret goes only to Microsoft's token endpoint. AI Security gets each Dataverse token for one environment and sends it only to that environment, and only to an address on .dynamics.com.
* To revoke access, remove the AI Reader assignment, the management application registration, and the application users, or delete the client secret. **Disconnect** on the source removes the stored credential from 1Secure.
