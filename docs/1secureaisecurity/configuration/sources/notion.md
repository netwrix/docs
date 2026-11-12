---
title: "Notion"
description: "Connect Notion to AI Security with an internal integration so it can read custom agents, their connectors, runs, and workspace settings."
sidebar_position: 65
---

# Notion

Connect Notion so AI Security can read the custom agents in one Notion workspace. You create an internal integration in Notion, connect it to the content it should see, and enter its secret in AI Security.

{/* TODO: confirm with the product team which Notion capabilities AI Security needs to list custom agents, because Notion doesn't document the agent list. */}

## Before you start

- A workspace owner creates the integration. Connecting it to pages needs full access to those pages.
- Sign in to Notion, and open the Developer portal at app.notion.com/developers/connections. Notion calls an integration a connection.
- Decide which top-level pages and data sources AI Security should see. It sees nothing else.
- Use a Notion plan that offers custom agents.

## Connect Notion

### Create the integration in Notion

1. In the Developer portal, under **Build**, select **Internal connections**, and click **Create a new connection**.
2. Name the connection, for example "Netwrix 1Secure AI Security", and select the workspace.
3. Open the connection's **Configuration** tab.
4. Under content capabilities, select **Read content** only.
5. Under user capabilities, select **User information with email addresses**, because AI Security names people by their email.
6. To read agent runs, also select **Interact with agents**, and share each custom agent with the integration.
7. On the **Configuration** tab, copy the API token. AI Security calls it the Internal Integration Secret.
8. Open each top-level page the integration should see, open the page's **...** menu, select **Connections**, and add the connection. Its child pages follow. You can also pick the pages on the connection's **Content access** tab with **Edit access**.

:::warning
An integration that isn't connected to any page signs in and then reads nothing. Connect it to the pages in step 8 before you rely on what the scan reports.
:::

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Notion".
3. In the Notion row, click **Connect**. The **Connect Notion** dialog opens.
4. In **Internal Integration Secret**, paste the secret.
5. Optional, on a Notion Enterprise plan: in **Organization bot token**, paste an organization bot token. See [The optional organization bot token](#the-optional-organization-bot-token).
6. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
7. Click **Done**.

Select the Notion row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded", with the date of the test. |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped, such as creators that couldn't be named. "Partly scanned" appears when a list was cut short. |

## What this connector reads

- Every custom agent in the workspace: its name, creator, triggers, why it is paused, and when it last ran.
- The connectors each agent holds, with the account and the permissions each one grants.
- How many pages and data sources the integration can see, as the upper bound of what an agent can reach.
- Which pages the integration can see are published to the web, by count and ID.
- The integration itself, as the bot user it runs as, and the workspace it is installed in.
- The workspace's members, so the scan names an agent's creator by the email address Notion states for them. If Notion states no email address for a creator, the scan doesn't name that person as the agent's creator.
- Each agent run shared with the integration over the last 30 days, or since the last scan: which agent, who started it, how it was triggered, its status, and when it started and was last updated. This isn't a run count, because it covers only agents shared with the integration. Where a scan reads only part of the runs, the next scan continues from there.
- The Model Context Protocol (MCP) clients each member connected to the workspace, such as Claude or Cursor. Each is listed as an identity the member owns, with the client, when it was connected, and when it was last used. Such a client reaches what the member can, including results from the member's connected sources.
- The active personal access tokens members created in the workspace. Each is listed as a credential the member owns, with its name, when it expires, and when it was last used.

AI Security reads the MCP clients and the personal access tokens only where the source holds the optional organization bot token. Without it, the scan says nothing of them, and the source's test lists the two scopes as optional, not granted.

An issue about published pages appears on **Notion workspace settings**, the workspace itself, rather than on the integration. It has no owner and no page to open. See [Issues](/docs/1secureaisecurity/admin/pages/issues.md).

A personal access token can't list members, so use an internal integration.

### What it never touches

- A run's title, its messages, or the emails of the people who chatted with the agent.
- The contents of an agent's instructions page. AI Security records only that the page exists.
- Any page body, property value, or block. AI Security counts page titles and never names them, and it doesn't keep a public page's address because the address carries the title.
- A list of the workspace's other integrations.
- The value of a personal access token. Notion never returns it.
- AI Security never writes to Notion.
- Hosted Notion MCP and its tools. How those tools show pages, files, or connected source results doesn't change what AI Security reads.

If Notion asks AI Security to slow down, the read ends there, and the next scan reads the rest.

## The optional organization bot token

An organization bot token belongs to your Notion organization rather than to one workspace, and only a Notion Enterprise plan has one. An organization owner creates it in Notion's organization settings and chooses its scopes. Give it these two read-only scopes:

- `mcp-client-connection:read`, to list the MCP clients, such as Claude or Cursor, that each member connected to the workspace.
- `personal-access-token:read`, to list the active personal access tokens that members created.

With the token, a scan shows who connects to Notion over MCP and which personal access tokens members hold, each owned by the member. AI Security sends this token only to Notion and reads only the workspace the integration is installed in. Without the token, everything else on this page works as described.

Without the token, or where Notion refuses the token a list, the source's test shows "Optional, not granted: mcp-client-connection:read (Who connects to Notion over MCP); personal-access-token:read (Members' personal access tokens)". It lists only the refused scopes where one of them works. With a token that reads both, the test doesn't show the line. The test's status stays the same.

## Permissions

| Integration capability | What AI Security reads with it | Scan without it |
|------------------------|--------------------------------|-----------------|
| Read content | Agents, pages, and data sources. | Nothing is read and the test fails. |
| User information, on an internal integration | Members, to name each agent's creator by email address. | No agent names its creator, and the scan says so. |
| Interact with agents | Agent runs. | No run reaches the Activity tab, and each agent keeps only its last run time. |
| Organization bot token with `mcp-client-connection:read`, on an Enterprise plan | The MCP clients members connected. | No MCP client is listed. |
| Organization bot token with `personal-access-token:read`, on an Enterprise plan | Members' active personal access tokens. | No personal access token is listed. |

## Troubleshoot the connection

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." | No secret is stored. | Click **Edit**, and paste the secret. |
| "The stored credential can't be used. Enter it again." | The stored secret can't be used. | Click **Edit**, and paste it again. |
| "The platform refused the credential. It is wrong, expired or revoked." | Notion refused the secret: it is wrong, or was refreshed. | Copy the current secret from the integration, and paste it under **Edit**. |
| "The credential works, but access was denied. A permission is missing." | Notion accepted the secret and refused the agent list. Under **Technical details**, the test says: "Create an internal integration in Notion under Settings, then Connections, with read content access, connect it to the pages and databases it should see, and save its token in the source's settings." | Select **Read content** on the integration, and check that the workspace's plan offers custom agents. |
| "The platform returned a response the scanner doesn't support." | Notion answered in a form AI Security doesn't know. Under **Technical details**, the test says: "If the next scan reports the same, send Copy for support to Netwrix support." | Nothing to change on your side. If the next scan reports the same, send **Copy for support** to Netwrix support. |
| "The platform didn't answer, or said it is down or busy." | Notion didn't answer. | Check that AI Security can reach api.notion.com. |
| "The platform didn't answer in time." | Notion didn't answer in time. | Click **Test again**. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the secret. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The creator of every Notion agent, because Notion refused the list of workspace members." skipped | Notion refused the member list, so no agent names its creator this scan. The scan says: "A personal access token cannot list users, so no creator resolves to a person and every agent is listed with no creator, keeping only the creator's Notion id. Install the integration as an internal integration with user information capability to name each agent's creator." | Use an internal integration, and give it user information. |
| "Succeeded", with "Notion agent runs, so they do not reach the Activity report." skipped | Notion refused agent runs, or the workspace doesn't offer them. The scan says: "Give the integration the Interact with agents capability and share each custom agent with its connection, or read with a personal access token of a member who can see the agents. Until then no agent run reaches the Activity report and each agent keeps only its last run time." | Select **Interact with agents**, and share each agent with the integration. |
| "Succeeded", with "One Notion agent's configuration, though the agent is still listed." skipped | Notion refused one agent's detail. The scan still reports the agent, with its configuration unknown. A 404 means the agent was removed during the scan. Any other refusal is worth checking against what the integration is connected to. | Do nothing for a 404, because the next scan clears it. Otherwise, check that the integration is connected to that agent's pages, as step 8 of "Create the integration in Notion" describes. |
| "Succeeded", with "The MCP clients each Notion member connected to the workspace, such as Claude or Cursor." skipped | Notion refused the organization bot token the list. The token lacks the `mcp-client-connection:read` scope, or the workspace isn't on an Enterprise plan. | Give the token that scope in Notion, or paste a token that has it under **Edit**. |
| "Succeeded", with "The personal access tokens Notion members created in the workspace." skipped | Notion refused the organization bot token the list. The token lacks the `personal-access-token:read` scope, or the workspace isn't on an Enterprise plan. | Give the token that scope in Notion, or paste a token that has it under **Edit**. |
| "Succeeded", with "Notion's MCP client connections or personal access tokens, because Notion did not answer the list." skipped | Notion answered the list with an error or a rate limit. The scan didn't measure the list, rather than finding it empty. Where it was a rate limit, the source reads "Partly scanned" instead. | Nothing. The next scan reads it again. |
| "The rest of one read, because the platform asked the scanner to slow down for longer than a scan allows." or "The rest of this source, because it stopped answering in time." skipped, after Notion slowed the member list down or didn't answer it | The scan still reads the agents, and their creators keep only their Notion IDs this scan. The scan keeps what earlier scans found rather than removing it as gone. Where Notion slowed the read down, the source reads "Partly scanned". | Nothing. The next scan reads it again. |
| "Succeeded", with "The configuration of some Notion agents, which are still listed." skipped | The workspace holds more agents than the 200 whose configuration a scan reads. The scan lists every agent. The line says: "Raise Agents with full configuration under Scan settings on the source card." | Raise the limit, or accept that the scan lists the rest without their configuration. |
| "Succeeded", with "Activity after [moment], which the next scans read." skipped | The agent runs since the last scan were more than one scan reads, so this scan read them up to that moment. | Nothing. The next scan reads on from there. |

## Security notes

- AI Security stores the secret when you click **Connect** and never shows it again.
- AI Security sends the secret, and the organization bot token where one is set, only to Notion.
- To revoke access, delete the integration, or remove it from a page's **Connections**. **Disconnect** on the source removes the secret from AI Security.
