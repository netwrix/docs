---
title: Integrations
description: How Netwrix Activity Monitor connects to Access Analyzer and what it adds.
---

Access Analyzer integrates with [Netwrix Activity Monitor](netwrix-activity-monitor.md). Activity Monitor sends Access Analyzer the activity it records on file servers, SharePoint Online, and Microsoft 365 Copilot. You enroll an Activity Monitor agent with Access Analyzer using a short-lived enrollment token; after that the agent connects without it. The agent streams its events to the Access Analyzer server over TLS on port 4504.

Scans tell you what data exists and who can reach it. Activity tells you who used that access, what they did, and when. With the integration in place, the **Activity** tab of the **DSPM Scan Overview** dashboard in [Reporting](../reporting/netwrix-reports.md) breaks events down by type, data source, and user, and charts activity over time. The **Activity Investigation** dashboard and the **Activity** tab of the **Share Audit** dashboard draw on the file server events from the same feed. All three stay empty until you enroll an agent and it starts sending data.
