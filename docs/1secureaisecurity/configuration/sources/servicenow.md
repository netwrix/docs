---
title: "ServiceNow"
description: "Connect a ServiceNow instance to AI Security with an integration user so it can read Now Assist AI agents and their tools through the Table API."
sidebar_position: 70
---

# ServiceNow

Connect ServiceNow so AI Security can read the Now Assist AI agents and their tools in one ServiceNow instance. You create an integration user in ServiceNow and enter its sign-in in AI Security.

One instance and one integration user serve both ServiceNow and ServiceNow AI Control Tower. Each source stores its own credential, so you enter it on both. ServiceNow's Zurich documentation also calls Now Assist "ServiceNow Otto", and the tables and roles keep the `sn_aia` prefix.

{/* TODO: confirm the ServiceNow table names, columns, roles, and minimum required access on this page against a live instance. */}

## Before you start

- A ServiceNow administrator with the `admin` or `user_admin` role creates the user and assigns roles.
- The AI agent tables come with Now Assist Pro Plus or Enterprise Plus on Zurich Patch 2 or later. {/* TODO: confirm the supported ServiceNow release range. */}
- Know the instance address, for example `https://acme.service-now.com`. It must use https.

## Connect ServiceNow

:::note
The ServiceNow row shows "Coming soon" and has no **Connect** button yet. These steps apply when the button appears.
:::

### Create the integration user in ServiceNow

1. Open **User Administration > Users**, and click **New**.
2. Enter a user ID that says it is an integration account, for example `netwrix_ai_security`.
3. Select **Web service access only** so the account can't sign in interactively, and click **Submit**.
4. Open the user, click **Set Password**, and copy the password.
5. In the user's **Roles** list, click **Edit**, add `sn_aia.viewer`, `agent_role_config_viewer`, and `sn_mcp_client.viewer`, and save.
6. Give the user read access to `sys_security_acl` through a role that your platform team maintains for read access.

If you use an OAuth token instead of a password, also do the following.

1. Create an OAuth token for this user, and copy the access token.
2. To have AI Security renew a refused token, open **System OAuth > Application Registry**.
3. Open the OAuth application that issued the token, and copy its "Client ID" and "Client Secret". The application must allow the client credentials grant and act as this integration user.

ServiceNow expires an access token after the lifespan set on its OAuth application. Without the client ID and secret, a refused token stays refused, so the user ID and password is the credential that lasts between scans. Where you store both a token and a user ID and password, AI Security uses the token.

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "ServiceNow".
3. In the ServiceNow row, click **Connect**. The **Connect ServiceNow** dialog opens.
4. In **Instance address**, paste the instance address.
5. Under "Choose one of the following to connect:", enter the **User ID** and **Password**, or the **Access token**. Leave the option you don't use empty.
6. With a token, under "Token renewal, optional", enter the **Client ID** and **Client Secret** to renew a refused token.
7. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
8. Click **Done**.

The instance address must be a public https address under `service-now.com` or `servicenowservices.com`, for example `https://contoso.service-now.com`. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

Select the ServiceNow row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". An instance with the tables and no agents also shows "Succeeded". |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped. "Partly scanned" appears when a list was cut short. |

A scan of this source also reads ServiceNow AI Control Tower on the same credential. Where that plugin or its role is missing, the scan doesn't measure every agent's governance. That gap doesn't change this source's "Last scanned".

## What this connector reads

- Every AI agent and agentic workflow: name, description, whether it is active, and its domain.
- The teams that agents are grouped into, and which agents each workflow hands work to.
- Each agent's tools, and what each tool declares it touches: a table and an operation, a search profile, a Model Context Protocol (MCP) server, or an external agent. AI Security doesn't read what a script or flow action does inside its code.
- Whether an agent runs on an active trigger or only when someone chats with it.
- Whether an agent runs as the person invoking it or as a dedicated AI user, that user's account and roles, and the approved role list that narrows an agent that runs as the invoker.
- Who may invoke each agent.
- Where an agent talks outside the instance: MCP server registrations and external agent endpoints.
- That each agent ran, over the last 90 days. Each run names the user that the instance recorded. Runs the instance started itself appear under its `system` user.
- The instance's build, only when the AI agent tables are missing, to say whether the fix is an upgrade or a license.
- The email address of each user who created an agent or a workflow, so the owner picker can suggest the creator.

### What it never touches

- Conversations and memory about named people.
- Any column naming an objective, prompt, input, output, or result on the execution tables.
- Any password, token, API key, or secret value. AI Security keeps the names of an outbound endpoint's custom headers and drops their values.
- The user directory, beyond the AI users that agents name and the people who created the agents.
- AI Security never writes to the instance.

## Permissions

| Role or access | What AI Security reads with it | Scan without it |
|----------------|--------------------------------|-----------------|
| `sn_aia.viewer` | The AI agent tables: agents, workflows, teams, tools, triggers, and execution history. | Nothing is read and the test fails. |
| `agent_role_config_viewer` | The approved role lists. | The scan reads agents, and whether each is narrowed is unknown, not absent. |
| `sn_mcp_client.viewer` | MCP server registrations. | Whether any agent calls an MCP server is unknown, not none. |
| Read access to `sys_security_acl` | Who may invoke each agent. | Invocation is unknown, not unrestricted. |
| Read access to `sys_user` | The address of each agent's creator. | The agents name no creator, and the scan says so. |

To read AI users and their roles, grant the integration user read access to the `sys_user` and `sys_user_has_role` tables. You don't need `snc_read_only`. The governance role is on the [ServiceNow AI Control Tower](/docs/1secureaisecurity/configuration/sources/servicenow-ai-control-tower.md) page.

## Troubleshoot the connection

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address, or both halves of one sign-in, isn't stored. | Click **Edit**, and enter the address and the token, or the user ID and password. |
| "The stored credential cannot be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter it again. |
| "The platform refused the credential. It is wrong, expired or revoked." | The instance refused the sign-in: wrong password, or an expired token that wasn't renewed. | Reset the password or issue a new token, and enter it under **Edit**. To renew a token automatically, enter the client ID and secret, and check that the application allows the client credentials grant. |
| "The credential works, but access was denied. A permission is missing." | The instance refused the agent table. Under **Technical details**, the test says: "Assign the sn_aia.viewer role to the integration user." | Assign the role, as step 5 of the integration user describes. |
| "Access denied because of the platform's plan or licence. Changing permissions will not fix it." | The AI agent tables aren't installed. Under **Technical details**, the test says whether the release is older than Zurich Patch 2, so the fix is an upgrade, or new enough, so a Now Assist license is missing. | Follow what the test says. A role fixes neither. |
| "The platform returned a response the scanner does not support." | The instance answered with something other than its API, usually a login page. Under **Technical details**, the test says: "Check that the instance URL in the source's settings is the instance's own address." | Check that the address is the instance itself. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't https, isn't on `service-now.com` or `servicenowservices.com`, or resolves to a private address. | Use the instance address as ServiceNow shows it. |
| "The platform did not answer, or said it is down or busy." | No answer, or the instance rate limited the read. For a rate limit, under **Technical details**, the test says: "Raise the inbound rate limit rule on the instance that turned the scanner away." In the scan drawer, **Details** names the rule. | Check the network path, or ask your team to raise that rule for this user. |
| "The platform did not answer in time." | The instance didn't answer in time. | Click **Test again**. |
| "A live connection test is not available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with what the scan didn't read skipped, such as "The approved role lists that limit each ServiceNow AI agent." | ServiceNow refused an optional read, or the read covered only some domains. The line under it names the role, such as "Assign the agent_role_config_viewer role to the integration user." | Add the role the line names, or give the user visibility of every domain. |
| "Succeeded", with "The email addresses of the people who created ServiceNow AI agents or own their AI Control Tower entries." skipped | AI Security couldn't read the creators' addresses. The line says: "Grant the integration user read access to the user table." | Grant the integration user read access to `sys_user`. The scan reads the agents either way. |
| "Succeeded", with "The records of the ServiceNow table [table], which answered without results." skipped | A table answered without its result list. Its rows are unknown this run, not absent. | Scan again. If it repeats, read the table the detail names in the instance as the integration user, then contact support. |

## Security notes

- AI Security stores the credential when you click **Connect** and never shows it again.
- AI Security sends the credential only to the instance address you entered, and only over https. It sends the client secret only to the instance's token endpoint, to renew a refused token.
- To revoke access, deactivate the integration user, revoke its token, or delete the OAuth application. **Disconnect** on the source removes the stored credential from AI Security.
