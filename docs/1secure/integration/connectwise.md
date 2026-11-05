---
title: "ConnectWise"
description: "ConnectWise"
sidebar_position: 10
---

# ConnectWise

With the ConnectWise integration in Netwrix 1Secure, you can deliver an alert as a ticket for help desk or
tech services. In ConnectWise, you can create a Company and match with the Organization in Netwrix
1Secure. The tickets are delivered under the name of that company.

Image keys:

| Icon                                                                                                                      | Description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp)                             | Edit Icon. Click the Edit Icon to edit the settings of the integration type.           |
| ![alerts_connectwisesprocketpng](/images/1secure/integration/alerts_connectwisesprocketpng.webp) | ConnectWise Icon. Click the ConnectWise icon to make the settings for the ConnectWise. |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)                                   | Bin Icon. Click the Bin icon to delete the ConnectWise integration                     |

## Add a ConnectWise Company in a System

To add a ConnectWise company in Netwrix 1Secure:

**Step 1 –** Go to **Configuration** > **Integrations** and click the **Add** icon to add the
ConnectWise company.

![Integration Type pane](/images/1secure/integration/integrationtypewindowconnectwise.webp)

**Step 2 –** Click **ConnectWise** and then click **Next**.

![Configure connection pane](/images/1secure/integration/integrationconfigureconnectionconnectwise.webp)

**Step 3 –** In the Configure Connection window, enter information in the required fields.

:::note
First, you need to configure your account at
[https://www.connectwise.com/](https://www.connectwise.com/). See the
[ConnectWise Help/FAQs](https://virtualcommunity.connectwise.com/helphome/faq) page for additional
information.
:::


- Company Url – Enter when setting the public keys for the company at https://www.connectwise.com/
- Company Id – Company ID at [https://www.connectwise.com/](https://www.connectwise.com/)
- Public Key – Public key you specify at [https://www.connectwise.com/](https://www.connectwise.com/)
- Private Key – Private key you specify at
  [https://www.connectwise.com/](https://www.connectwise.com/)

You must fill in all four fields. If you leave a field empty, 1Secure shows a message such as "The
Company Url field is required."

1Secure connects to ConnectWise with HTTP Basic authentication built from the Company Id, Public Key,
and Private Key. It sends requests to the Company Url followed by `/v4_6_release/apis/3.0`.

**Step 4 –** Click _Finish_.

1Secure tests the credentials against ConnectWise before it saves the integration. If the
ConnectWise system info call doesn't return HTTP 200, the save fails with the message
"Configuration does not validate with ConnectWise".

The ConnectWise company appears in the Integrations list. The status displays "Ok".

![Integrations List](/images/1secure/integration/connectwise.webp)

Use the Edit icon or the Bin icon to edit or delete the integration.

## Manage Delivery Settings

After adding your ConnectWise company, you can link it to your organization and manage delivery
settings.

Also, when you add a new organization, you can specify your ConnectWise company from the start. See
the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic for additional
information. The **ConnectWise Company** dropdown in that drawer appears only if ConnectWise is
configured. It has a **\<No Company\>** entry and creates a link to an existing ConnectWise company.

To manage delivery settings for ConnectWise:

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** In an alert profile, click the ConnectWise icon under the Delivery Settings. The
icon appears only if the ConnectWise integration is configured. The ConnectWise Delivery Settings
pane opens.

![ConnectWise Delivery Settings](/images/1secure/integration/alerts_connectwisedeliverysettings.webp)

**Step 3 –** Toggle on the Enabled button to enable the ConnectWise delivery.

**Step 4 –** In the **Priority** dropdown, select the default priority of raised tickets. The
dropdown lists the priorities read from the connected ConnectWise system, sorted alphabetically by
name. If no priority is saved, the dropdown preselects the priority that ConnectWise flags as the
default.

**Step 5 –** In the **Child Tenant Mappings** table, select the corresponding ConnectWise Company ID
for each managed organization. Each row in the **Managed Organization** column has a dropdown of
ConnectWise companies. The first entry is **\<No Company\>**. The table lists managed organizations
only, not the Managed Service Provider's own organization.

**Step 6 –** Click **Save**.

The ConnectWise delivery settings save along with the organization-to-company mappings. Saving
requires the Manage Alerts permission. The save fails with the message
`One or more tenancy mappings reference tenancies that are not managed by the current user` if
the signed-in user doesn't manage a mapped organization.

1Secure caches the lists it reads from ConnectWise: companies for 5 minutes and priorities for 1
hour. A newly created ConnectWise company can take up to 5 minutes to appear.

The drawer shows these messages when ConnectWise returns no data:

- "No priorities available." – ConnectWise returned no priorities.
- "There was an issue retrieving ConnectWise priorities, please check your integration setup." – the
  priority lookup failed.
- "No tenants to map." – there are no managed organizations to map.
- "There was an issue retrieving ConnectWise Companies, please check your integration setup." – the
  company lookup failed.

## ConnectWise Ticket Content

1Secure creates a ticket only for an organization that has a ConnectWise company mapped. 1Secure
creates the ticket under that company, with the saved priority. If the organization has no mapped
company, 1Secure creates no ticket and logs the warning "Unable to create ConnectWise ticket:
tenancy not configured."

The ticket summary is "Netwrix 1Secure Alert: " followed by the alert rule name. The initial
description reads "This ticket is for the alert", followed by the rule name. For grouped alerts, it
adds "where" the grouped column "equals" the value. It ends with "Details on the activity that
triggered this alert can be found in the most recent note."

1Secure puts the alert details in a note on the ticket. 1Secure flags the note to appear in the
ticket's detail description. It starts with the italic text "Note: This note includes all alert activity data
from previous notes."

The note for an activity alert lists:

- A header: "The alert _name_ was triggered by _n_ activity records being captured in _period_."
- Organization
- Item, or "Item: [Not Provided]"
- Num of occurrences
- First Activity
- Last Activity
- "Activity record times in" followed by the time zone
- A "Click here to investigate" link to the report, only for alerts that aren't grouped or are
  grouped with a value

Times in tickets use the organization's default time zone and culture.

System health alerts produce a different ticket body: Alert, Organization, Item, Since, Last
Checked, and "Times in" followed by the time zone.

## ConnectWise Ticket Updates

Each new alert creates a new ticket. When the same alert is updated with new activity, 1Secure adds
a note to the existing ticket. If it can't find the original ticket, it creates a new one. Email,
by contrast, sends only for new alerts.

{/* TODO: Confirm with the team which ConnectWise Manage API Member permissions the integration needs. The code uses only Basic auth with the Company Id, Public Key, and Private Key. */}
