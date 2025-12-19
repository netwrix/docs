---
title: "ServiceNow"
description: "ServiceNow"
sidebar_position: 20
---

# ServiceNow

## Features and Benefits

With Platform Governance for NetSuite's integration of **NetSuite** and **ServiceNow**, you can use
the **ServiceNow** tool while we automatically add and track the associated changes in your NetSuite
account. The integration eliminates the need for double entry in the two systems.

The ServiceNow integration automatically syncs ServiceNow with NetSuite:

- Creates a corresponding Change Request when a ServiceNow ticket is generated.
- Updates NetSuite with the corresponding customizations.
- Sets the Change Request status to **Approved**.

Change Managers and System Administrators quickly realize the integration benefits:

- Uses ServiceNow to organize their development process.
- Maintains data integrity within ServiceNow and NetSuite .
- Streamlines processes for updating daily activities and tasks.
- Reduces turnaround time for change deployments.
- Eliminates waiting for others to approve a change request.

## Technical Considerations

The following should be considered prior to deploying the ServiceNow integration:

1. The integration is a client script that can be enabled or disabled by form, user, or role. It has
   high order value to ensure it is the last thing to run and does not interrupt any other process.
2. All functions are self-executing, complying with ServiceNow's best practices.
3. No DOM manipulation or global scripts are deployed.
4. No external libraries are needed. It is plain JavaScript.
5. No direct or custom database access is required.
6. NetSuite connections use the REST ServiceNow interface, executing on the client side to prevent
   server load.

## ServiceNow Integration process Flow

![servicenowflow](/images/platgovnetsuite/integrations/servicenowflow.webp)

## Deployment Process

This process is performed by the ServiceNow Administrator.

1. Create a ServiceNow ticket for deployment.
2. Click **Select Account** to connect to Platform Governance for NetSuite.
3. Add customization to the ServiceNow ticket:

    - Parsed from text with script identifiers.
    - Added as customizations using the **Connector** tab.

4. Click **Push Deployment Record** when complete. A Change Request is created using the changes in
   the ServiceNow ticket.
5. Start a **Respider** to create the Change Log and documents.
