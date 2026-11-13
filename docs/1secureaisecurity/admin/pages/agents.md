---
title: "Agents"
description: "Use the Agents page to find an AI agent, see what it can reach and who owns it, and work through its issues."
sidebar_position: 3
---

# Agents

The Agents page lists every AI agent discovered across connected sources. Use it to find an agent, see what it can reach and who owns it, and work through its issues.

![Agents page with the Agents, High risk, Issues, Newly discovered, and Can reach outside the company cards, the Agents list and Agent reach switch, the search box, and the agents table](/images/1secureaisecurity/pages/agents-page.webp)

## Cards

| Card | What it counts |
|------|----------------|
| Agents | Every agent found. |
| Critical and high risk | Agents with a critical or high issue. |
| Issues | Agents with at least one open issue. |
| New | Agents found for the first time in the last 7 days. |
| Can reach outside the company | Agents that can call hosts outside your organization. |

Click a card to filter the table to the agents it counts.

## Table

| Column | What it shows |
|--------|---------------|
| Name | The agent's name, with its platform and category under it. For an Agent 365 agent, hover over the platform line to read what Agent 365 is: "Microsoft's inventory of agents published through the Microsoft 365 admin center and Copilot." |
| Owner | The person who answers for the agent. An agent Microsoft built, such as Researcher or Word (Agent), names Microsoft unless someone in your organization was recorded as its owner. AI Security never counts such an agent as needing an owner. On an agent with no owner, the column shows a **Suggested** person and why, such as "Created this agent", or "No suggestion", with **Assign** for an administrator. |
| Risk and top issue | The agent's highest severity and the issue behind it. |
| Capabilities | What the agent can do, such as send email or run code. |
| Discovered | When a scan first found the agent. |

Search with "Search by agent, platform or owner". **Agent list** shows the table and **Agent reach** shows what the agents can reach as a picture. Both show the same agents.

The **Platform** filter lists each group of platforms, such as **Microsoft 365 agents** or **Custom agents**, ahead of the platforms, where two or more of the group's platforms are in the list. Choose a group to show the agents on every platform in it. The **Owner** filter offers **Has an owner**, **Without an owner**, **Without an owner, suggested**, **Without an owner, no suggestion**, and **Owner has left**.

After you set a filter, the link that removes every filter says how many it removes, for example "Clear 2 filters". The search counts as one filter. On **Agent reach**, the same link removes the bands and labels you selected.

If your 1Secure role is **Administrator** or **Editor**, a checkbox on each row lets you act on several agents at once. The bar over the table counts the selected agents, says how many have no owner, a suggested owner, or open issues, and offers **Export selected**. For an administrator, the bar also offers **Assign owner** for the selected agents with no owner, and **Change owner**.

Where any selected agent has a suggested owner, **Assign suggested owners** lists each agent with its suggested owner and why. Clear any you don't want and click **Assign [n] owners**. The page says how many owners were assigned, with **Undo**. The link that clears the selection says how many agents it clears, for example "Deselect 3 agents".

## Agent drawer

Select a row to open the agent's drawer. It shows the agent's name, its platform, its risk, and when it was last active. The arrow keys move to the next and the previous agent in the list.

| Tab | What it shows |
|-----|---------------|
| Overview | Who created the agent, its owner with **Change**, its worst issues, what it can do with **Reach graph**, the identities it uses, the source that last scanned it, and the last **Next step**. Under **Details**, a **Prompt** line gives the first sentence of the agent's prompt, where the scan read one. |
| Issues | The agent's open issues. An agent with none reads "No open issues." |
| Reach | What the agent can reach through its own grants and the identities it acts as, as a picture. |
| Activity | The agent's history, such as when 1Secure discovered it, when it was created, and the permissions and owners added. |

### Next step

At the foot of **Overview**, **Next step** says what to do with the agent.

- An agent with open issues offers **Review its 3 open issues**, which opens the **Issues** tab.
- An agent with an owner and no open issues reads "Nothing to do. It has an owner and no open issues."

An agent with no owner is asked for one at the top of **Overview**, not in **Next step**. Its **Owner** line reads **No owner**, or names the owners who left with **Owner has left**. An administrator clicks **Assign an owner** beside it. Anyone else reads "Ask an administrator to assign one."

## Change an owner

1. In the agent drawer, on **Overview**, click **Change** beside the owner. An agent with no owner shows **Assign an owner** instead.
2. Pick a person from your directory.
3. Where the agent has an owner already, choose **Replace current owner** or **Add as another owner**.
4. Click **Assign**. The page confirms "Owner assigned to" the agent.

## Remove something that isn't an AI agent

An administrator can take an agent out of AI Security when it isn't an AI agent.

1. In the agent drawer, open the **More actions** menu.
2. Click **Not an AI agent**.
3. Click **Remove from AI Security** to confirm.

The agent leaves every list and count, and later scans keep it out. [Sources](/docs/1secureaisecurity/admin/pages/sources.md) lists the agent under **Removed from AI Security**, where an administrator can restore it.
