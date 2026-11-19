---
title: "Power Platform"
description: "Connect Power Platform so AI Security can read your Power Automate cloud flows and list the ones with an AI step as agents."
sidebar_position: 19
---

# Power Platform

Connect Power Platform so AI Security can read your Power Automate cloud flows and list the ones with an AI step as agents. AI Security reads each environment's Dataverse database as an application user, in the environments you name or in every environment it can discover. You add the app registration that connects Microsoft Entra ID to each environment as an application user, and connect the source in AI Security.

## Before you start

* Connect Microsoft Entra ID first, or at least create its app registration. You need its three values: the Directory (tenant) ID, the Application (client) ID, and the client secret value. See [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md).
* Adding an application user needs System Administrator in that environment. Reading the data policies once, or registering the app as a management application, which is an opt-in, needs a Power Platform administrator or Global Administrator.
* Decide whether to name environments or let AI Security discover them. The source needs one or the other, and named environments win where both are set.
* Sign in to the Power Platform admin center at admin.powerplatform.microsoft.com.

## Connect Power Platform

### Create the application user in Power Platform

1. Create the app registration and its client secret as the [Microsoft Entra ID](/docs/1secureaisecurity/configuration/sources/microsoft-entra-id.md) page describes, or reuse the one you have.
2. Open **Manage > Environments**, select an environment, and copy its "Environment URL". It ends in .dynamics.com.
3. In that environment, open **Settings > Users + permissions > Security roles**, and create a role with Organization Read on Process, Connection Reference, Connector, User, and Flow Run.
4. Open **Settings > Users + permissions > Application users**, and click **New app user**.
5. Add the app registration, choose the business unit, and give it the role from step 3.
6. Repeat steps 2 to 5 for every environment to cover.
7. Optional. To read each discovered environment, and the data policies and cross-tenant isolation at every scan, register the app registration as a Power Platform management application. As a Power Platform administrator, run this command once:

   ```powershell
   Add-PowerAppsAccount; New-PowerAppManagementApp -ApplicationId <app-id>
   ```

Where Microsoft Entra ID is connected with **Sign in with Microsoft**, AI Security does steps 2 to 6 for you on the environments you select. See [Let AI Security do it](#let-ai-security-do-it). Do them by hand for an environment made after that sign-in, and for one where your account isn't a System Administrator.

Microsoft gives a management application the same rights as a tenant administrator, and you can't narrow them. The registration is what opens the environment list, the data policies, and cross-tenant isolation to an app. No directory role opens them for an app, Power Platform Administrator included.

Each environment URL must be a public https address under `dynamics.com`, for example `https://contoso.crm.dynamics.com`. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

### Let AI Security do it

Where Entra ID is connected with **Sign in with Microsoft**, the **Power Platform policies** card under **Sources** holds every Power Platform grant in one place, with one button, **Finish Power Platform setup**, and one Microsoft sign-in. The card says "Needs Power Platform Administrator or Global Administrator, and System Administrator in each environment."

Being a Global Administrator or Power Platform administrator doesn't make you a member of an environment's Dataverse. Until you are, the user record and the security role's Members page refuse you, with read-only or no privileges. The card says "Read-only or no privileges means you aren't a member yet. Use Membership, Add me."

1. In the Power Platform admin center, open each environment to add.
2. Select **Membership**, then **System Administrators**, and click **Add me**.
3. On the card, select **Also register the management application** only if you want the policies read at every scan. The card warns: "It grants tenant-wide administrator rights that can't be narrowed. Policies are read at every scan." The option is cleared to start with, and not shown after the management application is registered.
4. Click **Finish Power Platform setup**. A small Microsoft sign-in window opens.
5. Sign in as a Power Platform administrator or Global Administrator who is also a System Administrator of the environments to add, and accept what Microsoft asks for this sign-in.
6. On the card, review the environments with a Dataverse database. The card lists them, all ticked. Where there are too many to list, it says how many it shows of how many. The card clears an environment Microsoft gives your account no access to, and says "Power Platform administrators use Add me under Membership in" the environment, "and others ask a System Administrator."
7. Untick any environment to leave out, and click **Add 1Secure**.

AI Security reads the tenant's data policies and cross-tenant isolation once with that sign-in, and keeps them with the date. Nothing is granted to AI Security for this read. Where you ticked the management application, the same sign-in registers the AI Security registration as a Power Platform management application. Where your account isn't a Power Platform administrator or Global Administrator, Power Platform refuses the registration and nothing is registered.

The card then says what was done, one line per grant: "Policies read by" who signed in "on" the date, "Added as an application user in" the number of environments, by whom and when, and, where you didn't tick the management application, "Management application not registered." The card names each environment skipped with why. The source's drawer shows "Policies as of" and the date. The card stays, so you can add more environments later.

**Show me the steps** shows the steps by hand in place of the button. Where AI Security knows the app's Application ID, it shows it under the steps with a copy button. Where it doesn't, the steps say "Find the Application ID of the app in Microsoft Entra, under Enterprise applications." A source on an app registration of its own has only those steps.

Where the Power Platform test sees no environment, or none that admits the AI Security registration as an application user, the source's row reads "Needs a grant" rather than failed. A **Power Platform management application** card then offers the registration with **Let 1Secure do it**, which signs you in once more. Its **Do it yourself** option is the application user steps instead: add the registration as an application user in each environment, with a security role that has Read at Organization depth on Process, Connection Reference, Connector, User, and Flow Run. After the registration is made, AI Security tests the Power Platform and Copilot Studio sources whose test asked for it, for a short while as Microsoft applies it, and the card shows "Registered. Checking the connection…".

The Get started wizard doesn't ask for any of these. The **Sources** page is where you grant them.

### What adding the application users does

AI Security adds its app as an application user in each environment you ticked, with your own access. It gives the app the built-in Agent Viewer role for Copilot Studio and the 1Secure Flow Reader role for flows. 1Secure Flow Reader has Read at Organization depth on Process, Connection Reference, Connector, User, and Flow Run, and on Copilot and Team, which say who each agent is shared with. Where the environment doesn't have the role, AI Security creates it in the root business unit, which gives it to every business unit.

An environment where the app is already an application user keeps it, is turned back on where it was disabled, and gets any of the two roles it lacks. Where it holds a 1Secure Flow Reader role, that role gets the seven Read privileges again, so a role made earlier gains Copilot and Team.

Only a System Administrator of an environment can add an application user there. This applies to a Power Platform administrator too, which is why the card asks you to use **Add me** first.

Where Dataverse refuses your account because it isn't a System Administrator of an environment, AI Security adds itself there with the same sign-in, which a Power Platform administrator or Global Administrator can do without a role in the environment. Microsoft gives an application user made this way the System Administrator role, and AI Security can't remove that role from itself, so it keeps it. AI Security then gives it Agent Viewer and the 1Secure Flow Reader role where Dataverse accepts them. The environment counts as added, and the card names it among the environments AI Security was added to. The list of rights, as [What 1Secure can do in your environment](/docs/1secureaisecurity/getting-started/what-1secure-can-do-in-your-environment.md) describes, marks that System Administrator role "You can trim this". To trim it:

1. In the Power Platform admin center, open **Environments**, and select the environment.
2. Open **Settings**, **Users + permissions**, **Application users**.
3. Select 1Secure, and choose **Edit security roles**.
4. Clear System Administrator, and keep Agent Viewer and 1Secure Flow Reader.

Where Microsoft refuses that too, AI Security skips the environment, and the card names it with why. Where Dataverse didn't accept the 1Secure Flow Reader role, the card says "flow runs not read. Needs Organization Read on Flow Run." for that environment.

While you sign in, AI Security asks Microsoft for your access to each environment listed. It keeps that access sealed for fifteen minutes, for the environments you select, and never stores it. The Microsoft Entra ID source records who added the app, when, in which environments, and which it skipped.

For an environment made later, or one where your account isn't a System Administrator, do steps 2 to 6 of "Create the application user in Power Platform" by hand. Where a scan says it didn't read the flow runs of an environment, add Organization Read on Flow Run to a role of the application user there.

If the Microsoft window closes without an answer, the card says "The Microsoft sign in window closed before it finished." and "Ask a Global Administrator or Privileged Role Administrator to select Finish Power Platform setup."

:::info
To undo the management application registration, run `Remove-PowerAppManagementApp` with the app's application ID.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Power Platform".
3. In the Power Platform row, click **Connect**. The **Connect Power Platform** dialog opens.
4. Where Microsoft Entra ID is connected, the dialog says "Uses your Microsoft app registration", and it doesn't ask for the three registration values. Go to step 8. To enter other values, click **Use different credentials**.
5. In **Directory (tenant) ID**, enter the Directory (tenant) ID from the app's **Overview**.
6. In **Application (client) ID**, enter the Application (client) ID from the app's **Overview**.
7. In **Client secret value**, paste the client secret, the Value column.
8. To discover the environments, select **Find every environment for me**, and leave the environment URLs empty.
9. To name environments instead, click **Name specific environments instead**, which clears **Find every environment for me**.
10. In **Environment URLs**, paste the environment URLs, separated by commas, each starting `https://`.
11. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer. The test lists the environments as a scan does, so a refusal fails here in the scan's words, and a throttled or failing Power Platform API only warns.
12. Click **Done**.

The dialog shows the two options under "Choose one of the following to connect:", with "or" between them. Either one works.

Select the Power Platform row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", or "Warning" when AI Security read some environments and one was refused, or an environment answered with no flows. |
| Last scanned | "Never", then "Succeeded", with anything it couldn't read listed as skipped, such as a refused read. "Partly scanned" when a list was cut short, or the read of the flow runs didn't finish. "Not set up", with the reason, where no environment has a Dataverse database. The test and the source's row say "Not set up" too, in the ordinary color, not as a failure. |

An environment that answers with no flows can hold none. It's also what a role with User depth Read returns, so the test warns rather than passing quietly.

A scan of this source reads every Microsoft source the three values unlock, including the directory. Where the registration lacks another Microsoft platform's grants, that platform's own source lists what it skipped, or reads "Failed" where it read nothing. That doesn't change this source's "Last scanned".

## What this connector reads

* Every cloud flow in each environment: name, state, owner, who it runs as, trigger, and when it was created and changed.
* The connectors each flow uses and the stored connections behind them, and the outbound HTTP calls in its definition, with each address cut to its scheme and host.
* The co-owners of each flow, the people and teams it's shared with who can edit, share, assign, or delete it. AI Security doesn't keep people a flow is shared with to run only.
* Each owner's name, address, directory object ID, and whether the account is disabled, so the scan finds a live flow owned by a departed user.
* Who last changed each flow. AI Security keeps this apart from the creator and the owner.
* The runs since the last scan, as status and times, so the scan can tell an unused flow from an active one. The first scan reads the runs of the last 3 days, or of the Activity window the organization chose under **Settings**.
* The tenant's data policies and whether connections to other tenants are restricted, at every scan where the app is a management application, and otherwise as of the last administrator sign-in on the **Power Platform policies** card.
* Where the Copilot Studio inventory answered on the same registration, the owner, connectors, and trigger the tenant inventory states for each flow.
* Agent flows and workflows built in Copilot Studio, read as the same rows: the kind of flow, what starts it, whether it's published or a draft, how its last run ended, the agents its steps run, and whether a step waits for a person. A suspended flow reads as switched off.

### Which flows are listed as agents

AI Security lists a flow as an agent only when it has an AI step. That's a flow built in Copilot Studio or Microsoft 365 Copilot, or a flow with a step that runs a Copilot Studio agent, an AI Builder model, or Azure OpenAI, or that calls a known AI model API over HTTP. AI Security doesn't list plain flows and raises no findings on them, and the same goes for the managed flows Microsoft ships owned by SYSTEM. A flow whose definition AI Security couldn't read is still listed, because an AI step can't be ruled out.

A step that runs an agent becomes a call from the flow to that agent. It joins the agent's Copilot Studio row where the step names the agent by its identifier. A step whose agent is built while the flow runs names no agent.

### Without an application user

Where no environment admits AI Security as an application user, AI Security still lists every flow the tenant inventory holds, read through the Copilot Studio inventory on the same registration. Each flow comes with its name, its kind (cloud flow, agent flow, or Microsoft 365 Copilot agent flow), its owner and creator, the connectors the inventory names for it, and what starts it. What it reaches through those connectors is unknown, and so are its definition, its outbound HTTP calls, its run history, and who else can edit it: those need the application user. The test answers "The credential works, but Power Platform refused part of what the scan reads." rather than failing, and the scan says it listed the flows from the tenant inventory. A tenant with an application user in some environments gets the full read there and the inventory listing for the flows in the rest.

Where Microsoft refuses the sharing read, each flow reports its primary owner only.

### What it never touches

* A flow's definition. AI Security keeps only derived values, and cuts outbound addresses to scheme and host, because an author can enter a key into an HTTP action.
* Run inputs or outputs. AI Security reads runs as status and times. On an environment with very many runs, a scan may read only part of them, and says so.
* AI Security never writes, and never starts, stops, or edits a flow.
* AI Security sends a Dataverse token only to an address on .dynamics.com. The scan skips and reports a discovered environment on any other address.
* Every Dataverse read draws from your tenant's pooled daily allowance of Power Platform requests, which your own flows and apps share. A scan keeps its share of that allowance small, and stops there, keeping what it read.

## Permissions

| Role | Where | What AI Security reads with it | Scan without it |
|------|-------|--------------------------------|-----------------|
| An application user with a security role giving Read at Organization depth on Process | Each environment | The flows. | AI Security doesn't read the environment, lists its flows from the Copilot Studio inventory where it answers, and with no environment readable and no inventory the test fails. |
| The same role with Read on Connection Reference and Connector | Each environment | Connector reach and custom connector names. | The scan lists flows, each saying its reach is unreadable. |
| The same role with Read on User | Each environment | Owners as people. | Owners stay Dataverse IDs and join to no directory identity. |
| The same role with Read on Flow Run | Each environment | Run history. | No flow has a last-used date, and the scan calls none unused. |
| Registration as a Power Platform management application, an opt-in | The tenant | Each discovered environment's address, so discovery reads it. | The scan lists environments under the Microsoft Entra AI Reader directory role, which [Microsoft Copilot Studio](/docs/1secureaisecurity/configuration/sources/microsoft-copilot-studio.md) assigns, and doesn't read them. Name the environments instead. |
| Registration as a Power Platform management application, or an administrator's sign-in on the **Power Platform policies** card | The tenant | Data policies and cross-tenant isolation, at every scan, or as of the sign-in. | Both read as unknown, never as off. |

## Troubleshooting

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | A registration value is missing, or neither environment URLs nor discovery is set. | Click **Edit**, and enter all three values and one of the two. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter the values again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Microsoft refused the sign-in. | Check the secret and both IDs in Entra. |
| "The credential works, but access was denied. A permission is missing." | AI Security listed the environments and none has a Dataverse database, so there's nothing to read and no grant changes that. The test says: "No environment has a Dataverse database, so there is nothing to read. Leave Power Platform unconnected." The test, the last scan, and the source's row read "Not set up", and the last scan says "No Power Platform environment has a Dataverse database." This isn't a failure. The scan leaves the source out, and a scan of every source tests it again first. | Leave Power Platform unconnected, or turn the source off. |
| "The credential works, but access was denied. A permission is missing." | Discovery found nothing. The test says: "Make the 1Secure registration a Power Platform management application, or name each environment in the source's settings." | Register the app as step 7 of the application user procedure describes, or name the environments. |
| "The credential works, but access was denied. A permission is missing." | No environment accepted AI Security, and the tenant inventory didn't answer either. The test says: "Add the app registration as an application user in each environment with a role that reads flows." | Create the role and the application user as steps 3 to 5 describe. |
| "The credential works, but Power Platform refused part of what the scan reads." | No environment accepted AI Security, so the scan listed the flows from the tenant inventory without their reach, runs, or co-owners. The test says: "Add the app registration as an application user in each environment with a role that reads flows." | Create the role and the application user as steps 3 to 5 describe. |
| "The credential works, but Power Platform refused part of what the scan reads." | AI Security read some environments, or the flow table was refused, or it returned no flows. The test says: "Give the 1Secure registration user Read at Organization depth on the Process table.", or for no flows: "Give the 1Secure registration user Read at Organization depth on the Process table if the environment has flows." Where some environments didn't accept AI Security, it gives the application user sentence from the previous row. | Check that the role's depth on Process is Organization. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | An environment URL isn't https, isn't on .dynamics.com, or resolves to a private address. | Paste the "Environment URL" exactly as the admin center shows it. |
| "The platform didn't answer, or said it is down or busy." | Microsoft didn't answer. | Test again later. |
| "The platform didn't answer in time." | Microsoft didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact Netwrix Support. |

### If the scan skips something or warns

A scan that read to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with the refused read skipped | AI Security read flows, and a table, the run history, the sharing read, or the tenant policies were refused. | Add the Read that the Permissions table names for that read. |
| "Succeeded", with "The cloud flows in an environment where the scanner is not an application user." skipped | Some environments didn't accept AI Security, and the scan read the rest. Environments that refused alike are one entry, and the line names them after what wasn't read, for example "2 environments refused the scanner: a and b." The line under it says once: "Add the app registration as an application user in each environment with a role that reads flows." | Create the role and the application user in each environment the details name, as steps 3 to 5 describe. |
| "Succeeded", with "The runs, connection targets and sharing of the cloud flows, which were listed from the tenant inventory because no environment admits the scanner as an application user." skipped | No environment accepted AI Security, so the scan listed the flows from the tenant inventory. The details name the environments that refused it. | Create the role and the application user as steps 3 to 5 describe. |
| "Succeeded", with the environment list skipped | The environment list answered without the environments' Dataverse addresses, so the environments are unknown this run, not empty. No grant fixes this. | Scan again. If it repeats, send the details to Netwrix Support. |
| "Succeeded", with "[count] more Power Automate flows, past the most one scan lists." skipped | The tenant inventory's flow listing was capped, so the flows past the cap are unknown this run, not absent. The line reads "More" where Microsoft gave no total. | Scan again. If it repeats, send the details to Netwrix Support. |
| Skipped reads "One Microsoft read, because Microsoft slowed the scanner down.", "One Microsoft read, because Microsoft did not answer." or "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows.", with a detail naming an environment and the table read | An environment's Dataverse throttled the scan, failed, or didn't answer, or the scan reached its share of your tenant's Power Platform requests and sent no more. No role is missing, and AI Security still reads the other environments unless the scan reached its share. Where a listing of the environment's records came back short, the scan keeps what the source held from earlier scans rather than removing it. | Wait for the next scan, which reads it again. |
| "Succeeded", with the tenant isolation setting skipped | The tenant policies answered without the tenant isolation setting, so cross-tenant connections are unknown this run, not unrestricted. | Scan again. No grant fixes this. |

## Security notes

* AI Security stores the values encrypted when you click **Connect** and never shows them again.
* A source connected with **Sign in with Microsoft** never receives the registration's secret.
* AI Security sends the secret only to Microsoft. It sends each Dataverse token only to the environment it was issued for.
* To revoke access, remove the application users and the management application registration (`Remove-PowerAppManagementApp`), or delete the client secret. **Disconnect** on the source removes the stored credential from AI Security.
