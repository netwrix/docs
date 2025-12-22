---
title: "ServiceNow"
description: "ServiceNow"
sidebar_position: 20
---

# ServiceNow

ServiceNow is a flexible platform for Managed Service Providers that provides integrated services.
Integrated with Netwrix 1Secure, ServiceNow allows to deliver an alert as a ticket or a work note
for help desk or tech services. Once a ticket is created, it is assigned to an IT agent to be
resolved.

In ServiceNow, you can create a profile for your Managed Service Provider and then implement the
delivery settings in Netwrix 1Secure. The tickets shall be delivered to specific assigned work
group.

Image keys:

| Icon                                                                                          | Description                                                                     |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the settings of the integration type.    |
| ![servicenowicon](/images/1secure/integration/servicenowicon.webp)   | ServiceNow Icon. Click the ServiceNow icon to make the settings for ServiceNow. |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)       | Bin Icon. Click the Bin icon to delete the ServiceNow integration               |

## Add a ServiceNow Integration System

Follow the steps to add a ServiceNow integration system.

**Step 1 –** Go to Configuration > **Integrations** and click the **Add** icon to add the system.

![integrationtypewindowservicenow](/images/1secure/integration/integrationtypewindowservicenow.webp)

**Step 2 –** In the displayed Integration type window, click **ServiceNow** and click **Next**.

![servicenowconnection](/images/1secure/integration/servicenowconnection.webp)

**Step 3 –** In the Configure connection window, specify the required boxes - Server Name, Username,
and Password.

:::note
First, you need to configure your account at
[https://www.servicenow.com/](https://www.servicenow.com/). See the
[https://docs.servicenow.com/en-US/bundle/vancouver-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html](https://docs.servicenow.com/en-US/bundle/vancouver-platform-administration/page/administer/users-and-groups/task/t_CreateAUser.html)
help page for an additional information.
:::


View Fields Here:

- Server Name – The root url of your ServiceNow instance (https.//intance.service-now.com)
- Username - Username you create at [https://www.servicenow.com](https://www.servicenow.com/)/
- Password – Password you set up when creating a service account at
  [https://www.servicenow.com/ ](https://www.servicenow.com/)

**Step 4 –** Click **Finish**.

The ServiceNow profile is added now. The status displays "Ok" in green.

![servicenowstatus](/images/1secure/integration/servicenowstatus.webp)

Click the **Edit** icon or the **Bin** icon to edit or delete the integration.

## Manage Delivery Settings

Follow the steps to manage delivery settings for ServiceNow.

**Step 1 –** Navigate to **Configuration** > **Alerts**.

**Step 2 –** Click the Service Now icon\* under Delivery Settings. The ServiceNow Delivery Settings
panel displays.

![alerts_servicenowdeliverysettings](/images/1secure/integration/alerts_servicenowdeliverysettings.webp)

**Step 3 –** Specify the Assignment Group, which should receive the tickets.

**Step 4 –** Toggle on the **Enabled** field to enable the ServiceNow delivery.

**Step 5 –** Specify the required parameters, such as impact, severity, and urgency of raised
tickets.

**Step 6 –** Optionally, toggle on the **Work Notes** field to assign alerts detail to Work notes
column in ServiceNow. See the
[https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html)
topic for additional information.

**Step 7 –** Optionally, toggle on the **Comments** field to specify the alerts detail in the
Comments column in ServiceNow.

**Step 8 –** Click **Save**.

:::note
The user account configured for the integration must have the Information technology
infrastructure library (ITIL) role assigned to it in ServiceNow. Users without this role are unable
to assign urgency/severity to an incident.
:::


See the
[https://www.servicenow.com/products/itsm/what-is-itil.htm](https://www.servicenow.com/products/itsm/what-is-itil.html)
article for additional information.
