---
title: "AI Chat"
description: "Use the AI Chat assistant to investigate security posture, alerts, risks, and compliance using natural language."
sidebar_position: 10
---

# AI Chat

Netwrix 1Secure includes an AI-powered chat assistant that lets you investigate your security
posture, alerts, risks, and compliance status using natural language. Instead of navigating to
individual reports or dashboards, you can ask questions directly and receive answers drawn from
your collected data.

{/* TODO: Screenshot of AI Chat welcome screen */}

## Access AI Chat

You can open AI Chat using either of the following methods:

- Click the **Ask AI** button in the header bar.
- Press **Ctrl+K** (Windows) or **Cmd+K** (macOS) on your keyboard.

The chat panel opens on the right side of the screen.

## Welcome Screen

When you first open AI Chat, a welcome screen displays the greeting:

> **Hi, I'm Neo**
> The One for 1Secure. Ask me about your security posture, alerts, identities, and compliance.

Below the greeting, suggestion cards appear in three categories to help you get started.

### Investigate

| Card | Description |
| --- | --- |
| Risk Overview | Top-risk orgs right now |
| Active Alerts | Critical security events today |
| Full Report | Complete posture with rich formatting |
| Incident Analysis | Deep-dive incident timeline |

### Take Action

| Card | Description |
| --- | --- |
| Access Review | Audit and remediate admin rights |
| Fix Violations | Remediate password policy issues |

### Visualize

| Card | Description |
| --- | --- |
| Risk Scores | Current risk scores by org |
| Compliance Trend | Compliance % over time |

Click any suggestion card to send that query to the assistant.

## Prerequisites

- The **AiChat** feature flag must be enabled for your tenant.
- Data availability depends on the connectors you configure for your organizations and the data
  they collect. If you have not configured any data sources, the assistant has limited
  information to work with.

## Related Topics

- [1Secure Dashboard](/docs/1secure/admin/dashboard/overview.md) -- View alerts, risk levels, and
  organization health at a glance.
- [Activity Reports](/docs/1secure/admin/searchandreports/activity.md) -- Run predefined and custom
  reports on user activities across your audited environment.
- [Risk Assessment Dashboard](/docs/1secure/admin/riskprofiles/riskassessmentdashboard.md) -- Review
  risk levels and risk details for your organizations.
- [Alert Profiles](/docs/1secure/admin/alerts/alerts.md) -- Configure and manage alert profiles.
