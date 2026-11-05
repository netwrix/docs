---
title: "System Health Alerts"
description: "Reference for the system health alerts that Netwrix 1Secure raises for agents, source connectors, and credentials."
sidebar_position: 30
---

# System Health Alerts

System health alerts tell you about problems with the Netwrix 1Secure platform itself, such as an
agent that stopped connecting or credentials that need attention. The alert source label for these
alerts is Health Notification.

All system health alerts have the category System and the theme Platform health.

## Health Alert Types

| Alert | Severity | Raised when |
| ----- | -------- | ----------- |
| Agent Offline | High | An agent has not connected recently |
| Expired Credentials | High | Credentials must be re-entered |
| Source Connector Error | Medium | A source returns an error during collection |
| Entra ID SSO Client Secret Expiring | Medium | The client secret for Entra ID SSO is about to expire |
| Agent Manual Update Recommended | Low | A major update is available for an agent without automatic updates |

### Agent Offline

An agent is considered offline when it last connected more than 3 hours ago, or when it never
reported a server name. Check the host the agent is installed on for any issues that prevent the
agent from uploading data.

### Agent Manual Update Recommended

This alert is raised when a major update is available for an agent that doesn't have automatic
updates configured.

### Source Connector Error

This alert is raised when 1Secure encounters an issue gathering information from a source. Review
the source status so that crawling can continue.

### Expired Credentials

Credentials can expire after a change in the encryption key. Re-enter them so that the agent can
decrypt them. This alert ignores credentials that are already being deleted with their source
group.

### Entra ID SSO Client Secret Expiring

The client secret for Entra ID SSO is expiring soon. Renew it to prevent issues accessing
1Secure. This alert is raised when the secret expires within 30 days, and only for organizations
that use Entra ID authentication.

## Alert Resolution

Health alerts clear automatically. When the issue behind an alert is no longer present, 1Secure
marks the alert as resolved.
