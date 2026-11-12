---
title: "Identities"
description: "Review the non-human identities your AI agents act as or use, and see which have risky access or credentials."
sidebar_position: 4
---

# Identities

The Identities page lists the non-human identities your AI agents act as or use, and what is wrong with them. Agents themselves are on the **Agents** page.

![Identities page on the AI-related tab with its cards, the search box, and the AI relationship, Owner, Access, and Credential columns](/images/1secureaisecurity/pages/identities-page.webp)

## Tabs

| Tab | What it lists |
|-----|---------------|
| AI-related | Identities that AI runs as or uses, and Microsoft's own AI applications, such as Microsoft 365 Copilot. AI Security counts these in its totals. |
| AI runs as | Identities an agent acts as. The identity's permissions are the agent's permissions. |
| AI uses | Identities whose credential an agent uses to reach another system, and Microsoft's own AI applications. |
| Other non-human | Non-human identities that AI doesn't run as or use. AI Security doesn't count these in its totals. The table has no **Risk and top issue** column on this tab, and an identity's drawer still lists its issues. |

Agent identity blueprints always appear on the tab their link to AI puts them in, the **AI-related** tab among them, and each one is marked as a blueprint in its row. No switch hides them. A blueprint is the template an agent identity is made from, and it doesn't sign in.

## Cards

The cards count the identities on the tab you are on. Click a card to filter the table to the identities it counts.

| Card | What it counts |
|------|----------------|
| Critical and high | Identities with a critical or high issue. |
| Without an owner | Identities with no owner recorded or named on the platform. |
| Privileged | Identities that hold a privileged directory role, such as Global Administrator. |
| Credential problems | Identities with a credential that is long-lived, expired, or expiring within 30 days. |
| Unused | Identities last used more than 90 days ago. The card doesn't count identities with no reported use. |

## Columns

| Column | What it shows |
|--------|---------------|
| Name | The identity's name, with its type and platform under it. |
| AI relationship | The agent that runs as the identity or uses it, and how many more. |
| Owner | The person who answers for the identity. |
| Risk and top issue | The identity's highest severity and the issue behind it. Not shown on the **Other non-human** tab. |
| Access | A summary of the identity's roles and permissions. |
| Credential | The kind of credential the identity signs in with, and its age or when it expires. |
| Last activity | When the identity was last used. |

Search with "Search by identity, agent or owner".

## Identity drawer

Select a row to open the identity's drawer.

| Tab | What it shows |
|-----|---------------|
| Overview | What the identity is, which agents use it, and what it can access. |
| Issues | The identity's open issues. |
| Access | The identity's directory roles and its application and delegated permissions, with a summary such as "12 permissions". |
| Activity | The identity's platform activity and the actions taken on it in AI Security, newest first. |
