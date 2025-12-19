---
title: "Add Hosts"
description: "Add Hosts"
sidebar_position: 10
---

# Add Hosts

The **Add Hosts** option creates a new host list. It can be accessed through the **Host Management**
node. Follow the steps to add a new host list.

![Add Hosts option on Activities pane of the Host Management node](/images/accessanalyzer/11.6/admin/hostmanagement/actions/addhosts.webp)

**Step 1 –** Click **Add Hosts** to open the Host List Wizard in the Results pane.

![Host List Wizard Specify Manual Host Entry page](/images/accessanalyzer/11.6/admin/hostmanagement/actions/hostlistwizardhostentry.webp)

**Step 2 –** On the Manual Host Entry page, choose to either enter the hosts manually one at a time,
or use the **Import** option. When the list is completed, click **Next**.

- To enter hosts manually, type the host name in the **Host name** textbox. Then click **Add**. The
  entry will appear in the **Host list** box. Repeat the process until all hosts for this list have
  been entered.
- The **Import** option opens the Import Hosts window. See the
  [Import Hosts Option](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/importhost.md)
  topic for additional information.
- Use **Remove** to delete a selected host from the **Host list** box

![Host List Wizard Specify Host List Properties page](/images/accessanalyzer/11.6/admin/hostmanagement/actions/hostlistwizardproperties.webp)

**Step 3 –** On the Specify Host List Properties page, provide a unique descriptive **Host List
Name**.

- There cannot be two host lists with the same name. Enterprise Auditor automatically appends a
  numeral to the end of a host list name to avoid duplicates.

**Step 4 –** On the Specify Host List Properties page, configure when inventory fields should be
refreshed for hosts in the list and set the credentials to use to conduct the host inventory.

- Refresh inventory every time when the host discovery query completes – Automates the host
  inventory process and is dependent on the **Settings** > **Host Inventory** node configuration for
  the age of previously inventoried records. Leaving this option deselected applies the global
  settings for host inventory.
- Set the credentials to use to conduct the host inventory.

    - Default credentials (credentials the application is run with) – Applies the credentials used
      to launch the Enterprise Auditor application
    - Credentials in my default connection profile – Applies the default Connection Profile
      configured at the global level (**Settings** > **Connection**)
    - Credentials in this connection profile – Use the dropdown list to select a Connection Profile
      from those preconfigured at the global level (**Settings** > **Connection**)

    See the
    [Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
    topic for additional information on Connection Profiles.

**Step 5 –** Click **Finish** to save the host list and close the Host Lost Wizard.

The new list displays at the bottom of the host lists under the **Host Management** node in the
Navigation pane. Every host added is included in the host master table at the Host Management node
as well as in the newly created host list.
