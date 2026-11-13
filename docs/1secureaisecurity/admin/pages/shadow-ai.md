---
title: "Shadow AI"
description: "Review unregistered AI tools and agents found in your directories and on devices, then approve them or mark them not approved."
sidebar_position: 6
---

# Shadow AI

The Shadow AI page lists unregistered AI found in your directories and on company devices, matched to known AI vendors by application ID, domain, or name. You decide on each tool or agent: approve it, or mark it not approved.

![Shadow AI page on Needs decision with the Needs decision, High risk, Can read company data, No sign ins, and New since last scan cards, and the tools table](/images/1secureaisecurity/pages/shadow-ai-page.webp)

## Tabs

| Tab | What it lists |
|-----|---------------|
| Needs decision | Tools and agents nobody has decided on. |
| Approved | Tools you approved. 1Secure keeps monitoring them without alerts. |
| Not approved | Tools and agents you marked not approved. |

The page doesn't list Microsoft's own apps. An app is Microsoft's when one of Microsoft's own tenants owns it, or the directory states Microsoft Corporation as its verified publisher. A display name never counts.

**Approved** lists the registration 1Secure scans your tenant with, known by its client ID, and any Netwrix product registration, each with a reason that says whose registration it is. This way, 1Secure never asks you to approve the product that reads your tenant.

## Cards

| Card | What it counts |
|------|----------------|
| Needs decision | The agents and apps nobody has decided on, with the three of highest risk to **Review**. Where the card counts more than it lists, it says so, for example "Showing 3 of 5." with **View all**, which opens the **Needs decision** tab. Where apps are already approved, "View the 4 approved tools" opens them. |
| High risk | Tools awaiting a decision that have a critical or high open issue. Being unregistered doesn't count as an issue. |
| Can read company data | Directory apps whose granted permissions can read company data. The card doesn't count tools found only on devices. |
| No sign ins | Directory apps nobody signed in to during the scan period. The card doesn't count apps without sign-in data. |
| New since last scan | Tools found for the first time by the most recent scan of your sources. After the first scan, it says "First scan, nothing to compare yet". |

## Drawer

Select a row to open its drawer. It shows how the tool was found, its access in your environment, and its related issues, with **Approve** and **Not approved**.

## Approve a tool

1. In the drawer, click **Approve**.
2. To let 1Secure see what the tool does, fill in the settings under **Connect** and the platform's name. The connection is read only, and you can also connect later from **Sources**.
3. Click **Approve**, or **Approve and connect** where you filled in the connection. The tool moves to **Approved**.

An approved agent moves out of Shadow AI and into **Agents**, where it gets an owner, a risk level, and issues. To name its owner now, pick an owner and click **Approve and assign**.

## Mark a tool not approved

1. In the drawer, click **Not approved**.
2. To hear about new use, select **Alert me when 1Secure detects new use**.
3. Click **Mark as not approved**. The tool moves to **Not approved**.

:::warning
Marking a tool not approved doesn't remove anyone's access. For an app, the decision applies to every product of its vendor.
:::

To mark a program or domain as not AI-related, use **Mark as not AI-related** in the drawer's menu. These programs and domains are listed on **Settings** under **Marked as not AI-related**, where you can undo them.
