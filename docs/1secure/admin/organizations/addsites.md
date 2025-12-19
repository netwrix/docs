---
title: "Add Sites to an Organization"
description: "Add Sites to an Organization"
sidebar_position: 40
---

# Add Sites to an Organization

Sites are used to signify physical groupings within the organization. The feature is helpful for
Managed Service Providers with clients in multiple office locations from different cities. Once they
set up an organization, install an agent for the on-prem sources (Active Directory or Computer), you
can track the agent status for the organization's site, the agent connection, server name, and check
for the agent updates.

| Icon                                                                                             | Description                                              |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| ![alerts_editicon](/images/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the site details. |
| ![addicon](/images/1secure/admin/organizations/addicon.webp)         | Add Icon. Click the Add Icon to add a site.              |
| ![deletebutton](/images/1secure/integration/deletebutton.webp)       | Bin Icon. Click the Bin Icon to delete a site.           |

## Add a New Site

Follow the steps to add a site to your organization.

**Step 1 –** Add your organization or add a source to the created organization. See the
[Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic for additional information.

:::note
You can add sites only for on-prem sources - Active Directory and Computer. These sources
require an installation of the agent. See the
[Add a Source and Connectors for Active Directory](/docs/1secure/admin/organizations/sourcesandconnectors/activedirectory.md) or
[Add a Source and Connectors for Computer](/docs/1secure/admin/organizations/sourcesandconnectors/computer.md)topic for additional
information.
:::


![addsourcessite](/images/1secure/admin/organizations/addsourcessite.webp)

**Step 2 –** On the Configure source details window (Step 2 of 3) window, add a new site. In the
"New site name" field, specify the name for your site. This could be a geographical location like
'Barcelona' or a cluster of servers from which a single agent collects data. Click **Next**.

:::note
You can add multiple sites and then add it to your source. A managed organization can have
multiple sites and each site can be associated with multiple sources.
:::


**Step 3 –** Finish adding a source for your organization. See the
[Add a Source and Connectors for Active Directory](/docs/1secure/admin/organizations/sourcesandconnectors/activedirectory.md) or
[Add a Source and Connectors for Computer](/docs/1secure/admin/organizations/sourcesandconnectors/computer.md) topic for additional
information.

The site is now added.

You can now add the created sites to your source.

**Step 1 –** Add a source to the your organization.

**Step 2 –** Select your site from the drop-down list or click the **Add** icon, if your want to add
a new site. Click **Next**.

![sitesdropdown](/images/1secure/admin/organizations/sitesdropdown.webp)

**Step 3 –** Finish adding the source. Screens will vary depending on the source added. See the
[Add a Source and Connectors for Active Directory](/docs/1secure/admin/organizations/sourcesandconnectors/activedirectory.md) or
[Add a Source and Connectors for Computer](/docs/1secure/admin/organizations/sourcesandconnectors/computer.md)topic for additional
information.

## View Sites and Agent Status

Now you can review the created site for your organization and check the agent status.

Follow the steps to view the site for the organization.

**Step 1 –** Navigate to Managed Organizations > "your organization" > Sites.

![updateagents2](/images/1secure/admin/updateagents2.webp)

**Step 2 –** View the following details:

- Agent status – Agent status in color. See the [Statuses](docs\1secure\admin\statuses.md) topic for additional
  information
- Server name – Server from which the data is collected
- Last Connected – Last connection time with your agent in UTC
- Last Updated – Last time for the agent update in UTC
- Version – Agent version
- Agent Connection String (Update) – Update agent
- Override Tenancy Defaults – Toggle on if you want to change the update defaults for that
  organization

**Step 3 –** You can edit or delete the site by clicking the **Edit** or **Bin** icon.
