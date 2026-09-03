---
title: "ServiceNow"
description: "ServiceNow"
sidebar_position: 120
---

# ServiceNow

The ServiceNow® node is for configuring the settings needed to integrate with ServiceNow. These
settings are exclusive to the Enterprise Auditor integration with ServiceNow, and the ServiceNow
Action Module uses them. See the
[ServiceNow Action Module](/docs/accessanalyzer/11.6/admin/action/servicenow/overview.md)
topic for additional information.

![ServiceNow node](/images/accessanalyzer/11.6/admin/settings/servicenow.webp)

Provide ServiceNow authentication information to your ServiceNow instance.

- Instance – The ServiceNow instance, for example `example.service-now.com`
- User Name and Password – The **Settings** > **ServiceNow** node at the global level can be
  configured with a credential provisioned to create incidents as Callers in the **Assigned to**
  field, and any other ServiceNow incident field that references the **sys_user** table.

The **Cancel** and **Save** buttons are in the lower-right corner of the ServiceNow view. These
buttons become enabled when you make modifications to the ServiceNow global settings. Whenever
you make changes at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if you don't want to save the changes.

## Update ServiceNow Authentication Credentials

To update the ServiceNow authentication credentials:

**Step 1 –** In the ServiceNow Authentication section, enter a new **Password** for the user
account.

**Step 2 –** Click **Save**.

Enterprise Auditor updates the credentials for ServiceNow authentication.
