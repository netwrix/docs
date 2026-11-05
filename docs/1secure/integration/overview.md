---
title: "Third-party Systems"
description: "Third-party Systems"
sidebar_position: 60
---

# Third-party Systems

Managed Service Providers (MSPs) use a service ticket to track an issue, usually by someone in an IT role.
Each issue gets its own ticket, and the ticket remains open until the issue is resolved. After the
issue is resolved, IT closes the ticket.

Netwrix 1Secure integrates with two ticket-related services: ConnectWise and ServiceNow. An alert profile lists ConnectWise or ServiceNow as a delivery channel only if that integration is configured. Email is always listed.

Each organization can have one integration of each type. A managed organization with no integrations of its own inherits the ConnectWise and ServiceNow connections of the parent MSP organization.

There is also a SharePoint Online integration you can use for report subscriptions. Use this integration to deliver reports to a specific folder in SharePoint Online.

## Integrations Page

The **Integrations** page is under **Configuration**. It lists each integration with the columns
**Type**, **Status**, **Last Update**, and **Details**. Details shows failure details. The status is
Ok, Warning, or Error, and a newly saved integration has the status Ok.

Viewing the page requires the View Integrations permission. Adding, editing, and deleting require
the Manage Integrations permission. The Tenant Administrator role holds both permissions. The Editor
role holds only View Integrations, and the Viewer role holds neither.

## Add an Integration

The **Add** button shows only to users with the Manage Integrations permission, and only while at
least one integration type is still available to add. The wizard has two steps:

- **Integration type** – Choose a target system, then click **Next**. **Next** stays disabled until
  you choose a type. The list offers only the types that aren't configured yet.
- **Configure connection** – Provide connection details, then click **Finish**. **Back** returns to
  step 1 and **Cancel** closes the wizard.

## Delete an Integration

To delete an integration, click the Bin icon. The dialog asks: Are you sure you want to delete
"name"? Deleting requires the Manage Integrations permission.

See the following topics for additional information:

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```