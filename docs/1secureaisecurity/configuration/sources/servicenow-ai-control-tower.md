---
title: "ServiceNow AI Control Tower"
description: "Connect ServiceNow AI Control Tower to AI Security so it can read the AI asset inventory your governance team keeps on the same instance."
sidebar_position: 71
---

# ServiceNow AI Control Tower

Connect ServiceNow AI Control Tower so AI Security can read the AI asset inventory that your governance team keeps there. The source uses the same instance and the same integration user as the ServiceNow source. You give the integration user the governance role in ServiceNow and enter its sign-in in AI Security.

This source discovers no agents of its own. It shows which of the agents that the ServiceNow source finds your team has registered.

{/* TODO: confirm the governance role, the plugin names, the asset classes, and the asset fields this source reads against a live instance. */}

## Before you start

- Connect [ServiceNow](/docs/1secureaisecurity/configuration/sources/servicenow.md) first, or at least create its integration user.
- Install AI Control Tower on the instance. A ServiceNow administrator with the `admin` role installs plugins and assigns roles.
- Have the instance address and the integration user's credential ready.

## Connect ServiceNow AI Control Tower

:::note
The ServiceNow AI Control Tower row shows "Coming soon" and has no **Connect** button yet. These steps apply when the button appears.
:::

### Give the integration user the governance role in ServiceNow

1. Create the integration user as steps 1 to 4 of the [ServiceNow](/docs/1secureaisecurity/configuration/sources/servicenow.md) page describe, or reuse it.
2. Open **System Applications > All Available Applications**, and check that AI Control Tower (`sn_aict`) and AI Control Tower Core (`sn_ai_governance`) show as installed.
3. Open **User Administration > Users**, and open the integration user.
4. In its **Roles** list, add `sn_ai_governance.integration.rest`.

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "ServiceNow AI Control Tower".
3. In the ServiceNow AI Control Tower row, click **Connect**. The **Connect ServiceNow AI Control Tower** dialog opens.
4. In **Instance address**, paste the instance address, a public https address under `service-now.com` or `servicenowservices.com`.
5. Under "Choose one of the following to connect:", enter the **User ID** and **Password**, or the **Access token**. Leave the option you don't use empty.
6. With a token, under "Token renewal, optional", enter the **Client ID** and **Client Secret** to renew a refused token.
7. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
8. Click **Done**.

The fields and values are the same as on the ServiceNow source. The dialog asks for the credential again and doesn't read the one stored on the ServiceNow source. Without the client ID and secret, a refused token stays refused, so the user ID and password is the credential that lasts between scans. The [ServiceNow](/docs/1secureaisecurity/configuration/sources/servicenow.md) page says where to find the pair.

The instance address must be a public https address under `service-now.com` or `servicenowservices.com`, for example `https://contoso.service-now.com`. AI Security refuses a private or reserved address, a single-label name, a name in an internal zone such as `.local` or `.internal`, and plain http.

Select the ServiceNow AI Control Tower row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". An installed AI Control Tower with nothing registered also shows "Succeeded". |
| Last scanned | "Never", then "Succeeded", with anything the scan couldn't read listed as skipped. "Partly scanned" appears when a list was cut short. |

A scan of this source also reads the ServiceNow agents on the same credential. Where the integration user lacks `sn_aia.viewer`, that refusal belongs to the ServiceNow read, so it doesn't change this source's "Last scanned".

## What this connector reads

- The AI system assets, and for each one the Now Assist agent it stands for.
- The owner an asset names, where it names one, and that owner's email address, so the scan can match the owner to a directory user.
- Each asset's lifecycle stage or state, install status, risk level, and approval, where it states them.
- The AI model, prompt, and dataset assets, counted so coverage can say how much of the inventory answered. Only a system asset makes a claim about an agent.
- System assets that name no agent are counted and reported. The scan invents no agent for them.

Without the plugin or the role, the scan never reports an agent as ungoverned. It treats an unanswered registry as unknown, not as a registry that lists nothing.

### What it never touches

- AI Security never writes to the inventory and never registers an agent.
- It never takes who typed an asset in as its owner.
- The agent tables, their conversations, and memory belong to the ServiceNow source, not this one.

## Permissions

| Role or plugin | What AI Security reads with it | Scan without it |
|----------------|--------------------------------|-----------------|
| The `sn_ai_governance` plugin, installed on the instance | The governance data. | The scan doesn't measure every agent's governance. |
| `sn_ai_governance.integration.rest` | The asset inventory. | The scan doesn't measure every agent's governance. |
| Read access to `sys_user` | The address of each asset's owner. | The scan can't match owners to directory users, and says so. |

## Troubleshoot the connection

### If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address, or both halves of one sign-in, isn't stored. | Click **Edit**, and enter the address and the token, or the user ID and password. |
| "The stored credential cannot be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter it again. |
| "The platform refused the credential. It is wrong, expired or revoked." | The instance refused the sign-in: wrong password, or an expired token that wasn't renewed. | Reset the password or issue a new token, and enter it under **Edit**. To renew a token automatically, enter the client ID and secret, and check that the application allows the client credentials grant. |
| "The credential works, but access was denied. A permission is missing." | The instance refused the governance data. Under **Technical details**, the test says: "Install the sn_ai_governance plugin and assign the sn_ai_governance.integration.rest role to the integration user." | Check that the plugin is installed, and assign the role. |
| "Access denied because of the platform's plan or licence. Changing permissions will not fix it." | The `sn_ai_governance` plugin isn't installed. Under **Technical details**, the test says: "Install the sn_ai_governance plugin and assign the sn_ai_governance.integration.rest role to the integration user." | Install the plugin, and assign the role. |
| "The platform returned a response the scanner does not support." | The instance didn't answer with governance data. Under **Technical details**, the test says: "Check the instance URL in the source's settings and that the sn_ai_governance plugin is installed." | Check that the address is the instance itself, then check the plugin. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't https, isn't on `service-now.com` or `servicenowservices.com`, or resolves to a private address. | Use the instance address as ServiceNow shows it. |
| "The platform did not answer, or said it is down or busy." | No answer, or the instance rate limited the read. For a rate limit, under **Technical details**, the test says: "Raise the inbound rate limit rule on the instance that turned the scanner away." In the scan drawer, **Details** names the rule. | Check the network path, or ask your team to raise that rule for this user. |
| "The platform did not answer in time." | The instance didn't answer in time. | Click **Test again**. |
| "A live connection test is not available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

### If the scan skips something or warns

A scan that reads to the end lists what it couldn't read as skipped, and its source reads "Succeeded". Only a read that stopped short reads "Partly scanned".

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "Succeeded", with "The AI Control Tower governance of each ServiceNow AI agent, which shows as not measured." skipped | ServiceNow refused an asset class. The line says: "Install the sn_ai_governance plugin and assign the sn_ai_governance.integration.rest role to the integration user." | Install the plugin, and assign the role. |
| "Succeeded", with "The email addresses of the people who created ServiceNow AI agents or own their AI Control Tower entries." skipped | AI Security couldn't read the owners' addresses. The line says: "Grant the integration user read access to the user table." | Grant the integration user read access to `sys_user`. The scan reads the claims either way. |
| "Succeeded", with "The AI Control Tower entries of the asset class [class], which answered without results." skipped | An asset class answered without its result list. Its registry entries are unknown this run, not absent. | Scan again. If it repeats, read the asset class the detail names in the instance as the integration user, then contact support. |

## Security notes

- AI Security stores the credential when you click **Connect** and never shows it again.
- AI Security sends the credential only to the instance address you entered, and only over https. It sends the client secret only to the instance's token endpoint, to renew a refused token.
- To revoke access, remove `sn_ai_governance.integration.rest` from the user, or deactivate it. **Disconnect** on the source removes the stored credential from AI Security.
