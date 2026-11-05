---
title: "ServiceNow"
description: "ServiceNow"
sidebar_position: 20
---

# ServiceNow

With the ServiceNow integration in Netwrix 1Secure, you can deliver an alert as a ticket or a work note
for help desk or tech services.

In ServiceNow, you can create a profile for your Managed Service Provider and then configure the
delivery settings in Netwrix 1Secure. Tickets go to the assigned work group.

Image keys:

| Icon                                                                                          | Description                                                                     |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the settings of the integration type.    |
| ![servicenowicon](/images/1secure/integration/servicenowicon.webp)   | ServiceNow Icon. Click the ServiceNow icon to make the settings for ServiceNow. |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)       | Bin Icon. Click the Bin icon to delete the ServiceNow integration               |

## Add a ServiceNow Integration System

To add a ServiceNow integration system:

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

- Server Name – The root url of your ServiceNow instance (https://instance.service-now.com/)
- Username - Username you create at [https://www.servicenow.com](https://www.servicenow.com/)/
- Password – Password you set up when creating a service account at
  [https://www.servicenow.com/ ](https://www.servicenow.com/)

**Step 4 –** Click **Finish**.

1Secure tests the connection before it saves the integration. It sends a GET request for
`/api/now/table/sys_user_group` to the Server Name with HTTP Basic authentication, using the
Username and Password. Only an HTTP 200 response counts as valid, so the service account needs read
access to the `sys_user_group` table. If the test fails, the save fails with the message
"Configuration does not validate with ServiceNow".

The ServiceNow profile is added. The status displays "Ok".

![servicenowstatus](/images/1secure/integration/servicenowstatus.webp)

Click the **Edit** icon or the **Bin** icon to edit or delete the integration.

## Manage Delivery Settings

To manage delivery settings for ServiceNow:

**Step 1 –** Navigate to **Configuration** > **Alerts**.

**Step 2 –** In an alert profile, click the ServiceNow icon under Delivery Settings. The icon is
listed only if the ServiceNow integration is configured. The ServiceNow Delivery Settings panel
displays.

![alerts_servicenowdeliverysettings](/images/1secure/integration/alerts_servicenowdeliverysettings.webp)

**Step 3 –** In the **Assignment Group** dropdown, select the group that receives the tickets. The
dropdown lists the groups read from the ServiceNow `sys_user_group` table. The default is no group.
If ServiceNow can't be read, the error is
`Cannot fetch ServiceNow Groups - is the connected ServiceNow instance asleep?`

**Step 4 –** Toggle on the **Enabled** field to enable the ServiceNow delivery.

**Step 5 –** Set the **Impact**, **Urgency**, and **Severity** of raised tickets. Each offers
High, Medium, and Low, and each defaults to High. In the **Category** box, enter the default
category name. The box starts empty in a new drawer.

**Step 6 –** Optionally, toggle on the **Work Notes** field to assign alerts detail to Work notes
column in ServiceNow. See the
[https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html](https://docs.servicenow.com/bundle/vancouver-servicenow-platform/page/administer/state-flows/concept/c_WorkNotes.html)
topic for additional information.

**Step 7 –** Optionally, toggle on the **Comments** field to specify the alerts detail in the
Comments column in ServiceNow. Comments is on by default and Work Notes is off.

If neither Work Notes nor Comments is on, an update to an existing incident sends no alert detail.

**Step 8 –** Click **Save**.

Saving requires the Manage Alerts permission.

{/* TODO: Confirm with the team whether the ServiceNow user needs a specific role. The code checks no role; it needs read access to sys_user_group. */}

## ServiceNow Incident Content

1Secure creates the incident with state New, active, and the chosen Impact, Urgency, Severity,
Assignment Group, and Category.

The incident short description is "Netwrix 1Secure Alert: " followed by the alert rule name. The
description reads "This incident is for the alert", followed by the rule name. For grouped alerts,
it adds "where" the grouped column "equals" the value. It ends with "Details on the activity that
triggered this alert can be found in the most recent comment."

The alert detail starts with "Note: This comment includes all alert activity data from previous
comments." For an activity alert, the detail lists:

- A header: "The alert _name_ was triggered by _n_ activity records being captured in _period_."
- Organization
- Item, or "Item: [Not Provided]"
- Num of occurrences
- First Activity
- Last Activity
- "Activity record times in" followed by the time zone
- An **Activity Records** link to the report, only for alerts that aren't grouped or are grouped
  with a value. ServiceNow shows the link as `[code]<a href=...>Activity Records</a>[/code]`.

Times in incidents use the organization's default time zone and culture.

System health alerts produce a different body: Alert, Organization, Item, Since, Last Checked, and
"Times in" followed by the time zone.

## ServiceNow Incident Updates

Each new alert creates a new incident. When the same alert is updated with new activity, 1Secure
adds a work note or comment to the existing incident. If it can't find the original incident, it
creates a new one. Email, by contrast, sends only for new alerts.
