---
title: Agents
description: Agents are the Linux machines that run scans; the System agent is built into every installation, and you can deploy more where the network or the workload calls for it.
---

An agent is a Linux machine that runs scans. Every installation has one from the moment setup finishes: the System agent, which runs on the Access Analyzer server itself. Unless you route a scan, or one of its sources, to other agents with a label, every scan runs there.

You can deploy more agents on other Linux hosts. Access Analyzer connects to the host over SSH, installs the agent software, and adds the agent to the list. From then on you steer scans to it with labels. [Deploy an agent](deploy-agent.md) covers the host requirements and the procedure; [Agent labels and scan routing](agent-labels.md) explains how a scan chooses where to run.

## The System Agent

The System agent always exists. You can't delete or rename it, and you can't give it labels, so its **Labels** column is empty. It shares the server with the rest of Access Analyzer, so heavy scans compete with the server's own services.

The same agent goes by three names in the interface, depending on where it appears:

| Where | What you see |
|---|---|
| The Agents page | **Default Agent** |
| The **Agent** field in the Create scan steps | **System agent** |
| The **Agent** column on the Scans page | **System** |

## When to Deploy More Agents

The System agent is enough for many installations. Add an agent when:

- The server can't reach a source. An agent placed inside a segmented network or behind a firewall scans the sources there, so the scan traffic comes from the agent rather than the server.
- You want scan traffic to stay local. An agent in the same site or region as the data keeps large reads off slow or expensive links.
- Scans compete with the server. A dedicated agent takes only scan work, so long-running scans no longer slow the server.

## Who Can Manage Agents

Deploying, editing, and deleting agents requires the Admin role. Viewers can open the Agents page and see every agent but can't change anything. Assign roles on the [Users and roles](../settings/users.md) page.

## The Agents Page

Go to **Configuration > Agents**.

![Agents list with Name, Health Status, Last Heartbeat, and Labels columns](/images/accessanalyzer/26.1/agents/list.webp)

| Column | Meaning |
|---|---|
| **Name / IP** | The agent's name, with its hostname or IP address underneath |
| **Labels** | The `key=value` labels used for scan routing |
| **Health Status** | Whether the agent is reporting normally; see [Health status](#health-status) |
| **Last Heartbeat** | When the agent last reported in to the server; a dash means the agent hasn't reported yet |
| **Last Updated** | When the agent's record last changed |
| **Actions** | **Edit** for every agent; **Delete** for deployed agents only |

The list sorts by **Last Updated**, newest first, and you can sort by **Name** and **Health Status** as well. It shows 25 agents per page (you can pick 10, 25, or 50) and refreshes every 60 seconds on its own, pausing while the **Deploy agent** or **Edit agent** panel is open.

The **Search agents…** field matches an agent's name, a label key, a label value, or a `key:value` pair, so `region:us-east` finds every agent carrying that label. **Clear filters** resets the search. **Deploy agent** starts the deployment flow.

### Health Status

| Status | Meaning | What to do |
|---|---|---|
| **Healthy** | The agent is connected and reporting to the server | Nothing; scans routed to it run normally |
| **Offline** | The server has stopped hearing from the agent | Check the host and its connection to the server |

The heartbeat is the agent's regular check-in with the server. **Last Heartbeat** shows the time of the most recent one, so a stale value alongside **Offline** tells you roughly when the agent went offline. Scan executions routed to an offline agent wait for it to come back, and fail if it stays offline for about two hours; see [When no agent matches](agent-labels.md#when-no-agent-matches).

Offline agents also surface on the Home page. The **Needs attention** panel counts them ("1 agent is offline.") and its **Check agents** link opens the Agents page.

### Actions

**Edit** lets you change the agent's name and labels; on the System agent both are locked. **Delete** appears only for deployed agents. See [Edit an agent](deploy-agent.md#edit-an-agent) and [Remove an agent](deploy-agent.md#remove-an-agent).
