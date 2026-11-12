---
title: "Overview"
description: "Read the Overview page to see how many agents, high-risk agents, open issues, and shadow AI tools your environment has."
sidebar_position: 2
---

# Overview

The Overview is the first page of AI Security. It shows how many agents your environment has, how many are high risk, how many issues are open, and how much shadow AI needs a decision. Every card opens the list it counts.

The line under the title says how many sources the latest scan read and when it ran, for example "Results from your latest scan of 27 sources. Last scanned 2 hours ago." During a later scan, the page leaves this line out, and the scan's own line says how far the scan is.

![AI Security Overview page with the Agents, High risk, Open issues, and Shadow AI cards, the What was discovered headline with View issues, and the By category list](/images/1secureaisecurity/pages/overview-page.webp)

## Cards

| Card | What it counts |
|------|----------------|
| Agents | Every agent across the agent platforms you connected, with how many are published and how many are drafts. |
| High risk | Agents with a critical or high issue. |
| Open issues | Open issues, split into critical, high, medium, and low. |
| Shadow AI | The shadow agents and unknown AI tools that need a decision, split into agents and tools. |

:::info
Each card opens the list it counts, and the number on the card equals the number of rows in that list.
:::

## Headline

Under **What was discovered**, the headline reads "Your environment has" the number of AI agents "across" the number of platforms. The line under it says how many agents are high risk and how many open issues there are to resolve. **View issues** opens the **Issues** page.

The category list shows only the categories that hold agents. Under the categories, a line says how many shadow AI tools need a decision.

The picture beside the category list draws every agent as one dot, grouped around the ring by the platform it is on. One dot can stand for several agents. Each dot takes the color of its category, the same color the category list shows, as the legend under the picture says. Bigger dots have more open issues. Hover over a dot to see its platform and its risk. Select a dot to open the agent. To see only the agents at risk, use the picture's **High risk** filter.

## While a scan runs

During the first scan, the line under the title says "Agents discovered so far in your first scan." The four cards wait until the first scan ends. A banner in their place says "First scan in progress" with how many sources have finished, for example "12 agents discovered so far, 2 of 5 sources finished", and the minutes left where 1Secure can estimate them. The banner also says "Results below are partial and update as each source finishes." **View progress** opens the **Sources** page. After the scan ends, the banner changes to "First scan finished." with the agents found and the sources read, until you click **Close**.

During a later scan, the page keeps its results, and one line under the title says "Scan in progress." with the same count and **View progress**. A card that isn't measured yet says "Not measured".

## Before the first agent

Until a scan finds an agent, the Overview says why in place of the picture: "No scan has run", "Your first scan is running", "The last scan failed", or "The last scan discovered no agents". A running scan offers **View progress**, a failed scan offers **View sources**, and the other two offer **Scan now**.
