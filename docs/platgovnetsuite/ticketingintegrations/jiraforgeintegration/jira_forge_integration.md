---
title: "Jira Forge"
description: "Jira Forge"
sidebar_position: 1
---

# Jira Forge

Platform Governance for NetSuite's Change Management capabilities are integrated with Jira, one of the most popular issue ticketing and development project management systems. Customers can look for and include NetSuite Customizations, assess impacts for requested changes, and push Jira change tickets into a Change Request. This enables streamlined management of changes, seamless tracking of compliant changes, and automated reconciliation of change logs during an audit.

## Integration Overview

- Features and Benefits
- Technical Considerations
- Set Up the Integration

### Features and Benefits

With Platform Governance for NetSuite's integration of NetSuite and Jira (Cloud), you can use the Jira tool while Platform Governance for NetSuite automatically adds and tracks the associated changes in your NetSuite account. The integration eliminates the need for double entry in the two systems.

Jira Integration uses the latest Atlassian Forge implementation which provides enhanced security, ensuring data doesn't leave the ecosystem and adheres to strict security standards (SOC2, ISO/IEC 27001).

The Jira Forge integration automatically syncs Jira tickets with a NetSuite change request:

- Creates a corresponding Change Request when a Jira ticket is generated.
- Updates NetSuite with the corresponding customizations.
- Sets the Change Request status according to its corresponding Jira ticket status.

Change Managers and System Administrators quickly realize the integration benefits:

- Uses Jira to organize and track the development process.
- Maintains data integrity within Jira and NetSuite.
- Streamlines processes for updating daily activities and tasks.
- Reduces turnaround time for change deployments.
- Eliminates waiting for others to transition a change request status.
- Enables creating a change request to a target NetSuite account.

### Technical Considerations

Review these considerations before deploying the Jira integration:

1. Platform Governance for NetSuite integration is implemented as a Forge app. You can enable or disable it based on configuration. It runs independently of other scripts, ensuring it doesn't interfere with existing processes.
2. All functions are self-executing, complying with Atlassian Jira Forge's best practices.
3. The app deploys no DOM manipulation or global scripts.
4. No external libraries are needed. It is plain JavaScript.
5. No direct or custom database access is required. Data resides either in the Atlassian instance or the connected NetSuite account.
6. NetSuite connections use the REST Atlassian Jira Forge's interface, executing on the client side to prevent server load.


**Next Step:** [Jira Forge Set Up](/docs/platgovnetsuite/ticketingintegrations/jiraforgeintegration/jira_forge_set_up)
