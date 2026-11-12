---
title: "Salesforce"
description: "Connect a Salesforce org to AI Security with a connected app so it can read Agentforce agents, their actions, and the users they run as."
sidebar_position: 69
---

# Salesforce

Connect Salesforce so AI Security can read the Agentforce agents in one Salesforce org, their actions, and the users they run as. You create a connected app that uses the OAuth client credentials flow and runs as an integration user, and enter its key and secret in AI Security.

One app reads one org, so connect each org as its own source. Salesforce also calls agents Einstein Bots or Copilot on older screens.

{/* TODO: confirm the Salesforce object names, fields, and minimum permissions on this page against a live org. */}

## Before you start

- A Salesforce administrator creates the app and the user.
- Enable Agentforce in the org. Agent runs also need Data Cloud with the session trace data model.
- Every read counts against the org's shared 24-hour API allocation.

## Connect Salesforce

:::note
The Salesforce row shows "Coming soon" and has no **Connect** button yet. These steps apply when the button appears.
:::

### Create the connected app in Salesforce

1. Create a user for this connection with a profile that can't write.
2. Give the user a permission set with Read on the objects in [Permissions](#permissions).
3. Open **Setup > App Manager**, and click **New Connected App**. Salesforce turns off creating new connected apps by default and recommends an External Client App instead.
4. Enter a name, for example "Netwrix 1Secure AI Security", and select **Enable OAuth Settings**.
5. Enter any https callback URL. The flow never uses it.
6. Add the scopes "Manage user data via APIs (api)" and "Perform requests at any time (refresh_token, offline_access)".
7. Select **Enable Client Credentials Flow**, and save.
8. Click **Manage**, then click **Edit Policies**.
9. Under **Client Credentials Flow**, set **Run As** to the user from step 1.
10. On the app, click **Manage Consumer Details**, and enter the verification code that Salesforce emails.
11. Copy the "Consumer Key" and "Consumer Secret".
12. Open **Setup > My Domain**, and copy the "Current My Domain URL".

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Salesforce".
3. In the Salesforce row, click **Connect**. The **Connect Salesforce** dialog opens.
4. In **My Domain URL**, enter the Current My Domain URL, with `https://`.
5. In **Consumer Key**, paste the Consumer Key.
6. In **Consumer Secret**, paste the Consumer Secret.
7. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
8. Click **Done**.

The My Domain URL must be a public https address under `my.salesforce.com`, `lightning.force.com`, or `sandbox.my.salesforce.com`, for example `https://contoso.my.salesforce.com`. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

Select the Salesforce row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". An org with Agentforce on and no agents also shows "Succeeded". |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped. "Partly scanned" appears when a list was cut short. |

## What this connector reads

- Every agent and its versions: name, type, template, creator, dates, and the user it runs as.
- Each agent's planner and its topics.
- Each action: what it invokes, what kind of target that is, and whether a person must confirm it.
- For an agent that runs as a dedicated user: that user's name, profile, permission sets, and permission set licenses.
- Who may invoke each agent.
- The Model Context Protocol (MCP) servers the org registered in its API Catalog.
- That each agent ran, over the last 90 days.
- How much of the org's daily API allocation the scan used.
- The email address of each user who created an agent, so the owner picker can suggest the creator.
- Who last changed each agent.

### What it never touches

- What a person said to an agent and what the model answered.
- Action input schemas, which can carry customer field names.
- An MCP registration's client secret.
- The staff directory. AI Security reads only the accounts that agents run as and the users who created them.
- AI Security never writes to the org.

## Permissions

| Grant | What AI Security reads with it | Scan without it |
|-------|--------------------------------|-----------------|
| The connected app's `api` and `refresh_token` scopes | Every read in this table. | Nothing is read. |
| Read on `BotDefinition` | The agent inventory, with its versions. | Nothing is read and the test fails. |
| Read on `GenAiPlannerDefinition`, `GenAiPluginDefinition`, `GenAiFunctionDefinition`, `GenAiPlannerFunctionDef` | Planners, topics, and actions. | The scan reads agents with less or no reach. |
| Read on `User`, `PermissionSetAssignment`, `PermissionSetLicenseAssign` | What a dedicated agent user holds. | That user's holdings are unknown, not empty. |
| Read on `User` and its `Email` field | The address of each agent's creator. | Nobody is suggested as owner. |
| Read on `PermissionSet`, through the Tooling API | Who may invoke each agent. | Invocation is unknown for every agent. |
| Read on the API Catalog | Registered MCP servers. | The endpoint an MCP action calls is unknown. |
| Read on the three `ssot__AiAgentSession` trace objects | Agent runs. | Activity is unknown, not zero. |

When Salesforce refuses an object, grant the integration user read access to the named object on its profile or permission set. The connector needs only object read plus the `api` and `refresh_token` scopes.

## Troubleshoot the connection

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | One of the three values isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential cannot be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter the three again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Salesforce refused the key and secret: wrong values, the flow isn't enabled, or no **Run As** user. | Check steps 7 to 11 of the connected app, and enter the values again. |
| "The credential works, but access was denied. A permission is missing." | Salesforce refused the agent inventory for the integration user. Under **Technical details**, the test says: "Grant the integration user read access to that object on its profile or permission set." | Grant Read on `BotDefinition`. |
| "Access denied because of the platform's plan or licence. Changing permissions will not fix it." | Agentforce isn't enabled in this org. Under **Technical details**, the test says: "Turn Agentforce on in Salesforce Setup if this org should have agents." | Turn Agentforce on. |
| "Access denied because of the platform's plan or licence. Changing permissions will not fix it." | Agentforce is on and the org isn't entitled to run it. Under **Technical details**, the test says: "Ask your Salesforce account team for an Agentforce license or more Flex Credits." | Contact your Salesforce account team. |
| "The platform is rate limiting the scanner. Wait a few minutes and test again." | Salesforce slowed the test down for a short while. This is a warning, not a missing permission. | Wait a few minutes, then click **Test again**. |
| "The platform is rate limiting the scanner. Wait a few minutes and test again." | The org's 24-hour API allocation is spent. Under the message, the test says: "This Salesforce org has used its API allowance for the day. The allowance resets daily, so test again tomorrow, or ask Salesforce to raise it." | Wait for the allocation to reset, or raise it, then click **Test again**. |
| "The platform returned a response the scanner does not support." | The org answered with something other than the API, usually a login page. Under **Technical details**, the test says: "Check that the My Domain URL in the source's settings is the org's own My Domain address." | Check the My Domain URL. If it is correct, contact support. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The My Domain URL isn't https, isn't on an allowed Salesforce domain, or resolves to a private address. | Use the https My Domain URL as Salesforce shows it. |
| "The platform did not answer, or said it is down or busy." | The org didn't answer. | Check that AI Security can reach the My Domain host. |
| "The platform did not answer in time." | The org didn't answer in time. | Click **Test again**. |
| "A live connection test is not available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The [object] records in Salesforce, which the integration user may not read." skipped | Salesforce refused an object. The line also says: "Grant the integration user read access to that object on its profile or permission set." | Grant Read on the named object. |
| "Succeeded", with "The [object] records in Salesforce, because the org refused a field." skipped | Salesforce refused a field. | Check field-level security on the field the details name. |
| "Succeeded", with "How often each Agentforce agent ran, because this org has no Data Cloud session trace data model." skipped | The org has no Data Cloud session trace data model, so agent runs are unsupported. | Add Data Cloud, which Salesforce sells separately, to read agent runs. |
| "Succeeded", with "The email addresses of the people who created the Salesforce agents." skipped | AI Security couldn't read the creators' addresses. | Grant the integration user Read on `User`, and check field-level security on `Email`. The scan reads the agents either way. |
| "Succeeded", with "Some [object] records in Salesforce past the point, because the org answered in an unreadable form." skipped | A read of an object answered in a form AI Security can't read. Its records are unknown this run, not absent. | Scan again. If it repeats, contact support and name the object. |

## Security notes

- AI Security stores the values when you click **Connect** and never shows them again.
- AI Security sends the secret only to the org's own token endpoint, and sends the token only to the My Domain host. It stores no refresh token.
- Revoke access by blocking the connected app, deleting it, or deactivating the user. **Disconnect** on the source removes the stored credential from AI Security.
