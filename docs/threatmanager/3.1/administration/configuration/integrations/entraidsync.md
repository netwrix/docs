---
title: "Entra ID Sync Page"
description: "Entra ID Sync Page"
sidebar_position: 20
---

# Entra ID Sync Page

The Entra ID Sync page within the Integrations interface lists all the Entra ID tenants for which
the application is configured to sync.See the
[Application Permissions for Entra ID Sync](/docs/threatmanager/3.1/requirements/permissions/entraidsync.md)topic
for additional information about the permissions required for Microsoft Entra ID syncing.

![Entra ID Sync Page](/images/threatmanager/3.0/administration/configuration/integrations/entraidsync.webp)

Microsoft Entra ID Sync schedules the Azure service to collect Microsoft Entra ID data for the
specified Microsoft Entra ID tenant(s). The Microsoft Entra ID Sync runs continuously, evaluating
the USN value of Microsoft Entra ID objects and syncing whenever an object changes.

- Name – Name of the Microsoft Entra ID tenant.
- Enabled – icon indicates the enabled state:

    - Checkmark icon – Enabled
    - X icon – Disabled

- Profile – Name of the Credential Profile assigned to the policy
- Last Sync Start – Date timestamp when the task started for the most recent sync
- Last Sync Status – Event status for the most recent sync task

To view policy details or make modifications, select a tenant from the list or select it in the
navigation pane from the Microsoft Entra ID Sync drop-down.

## Add an Entra ID Sync Policy

:::note
Prior to adding a Microsoft Entra ID Sync policy, you must first configure a Credential
Profile with a credential properly provisioned for running Microsoft Entra ID Sync within the
Microsoft Entra ID tenant. See the
[Application Server Requirements](/docs/threatmanager/3.1/requirements/server.md) topic for the permissions. See
the [Credential Profile Page](/docs/threatmanager/3.1/administration/configuration/integrations/credentialprofile.md) topic for additional information on creating a
profile.
:::


Follow the steps to add a policy Microsoft Entra ID Sync.

**Step 1 –** On the Integrations interface, click Add New Integration in the navigation pane. The
Add New Integration window opens.

![Add New Integration window with Entra ID Sync type selected](/images/threatmanager/3.0/administration/configuration/integrations/addnewinteg.webp)

**Step 2 –** In the Type drop-down menu, select Entra ID Sync.

**Step 3 –** Enter the following information:

- Tenant – Enter the Microsoft Entra ID tenant you want to connect to (ex. domain onmicrosoft.com)
- Azure Cloud – Enter the specified cloud instance of Microsoft Entra ID tenant
- Credential Profile – Select the Credential Profile by name from the drop-down menu. This was
  pre-created in the Credential Profiles page.
- Enabled / Disabled – Toggle indicates if the policy is enabled to run the sync service. By default
  it is set to Enabled.

**Step 4 –** Click **Test Connection** to ensure connection to the tenant. This will take a moment.
Then a message will appear in the upper right corner of the console indicating a successful or
failed connection.If successful, move on to the next step. If failed, recheck your entries for error
and repeat this step until a successful connection is established.

**Step 5 –** Click Add. The Add New Integration window closes.

The tenant is listed in the Integrations navigation pane. Repeat the process to add additional
tenants.

## Entra ID Sync Policy Details

The Microsoft Entra ID Sync policy details can be viewed by selecting the tenant from the table or
the navigation pane.

![Tenant Configuration tab](/images/threatmanager/3.0/administration/configuration/integrations/entraidsync_tenantconfiguration.webp)

Select the tenant from the list to see modification options:

- Name – The box at the top displays the name of the tenant.

    - Delete – The delete button in the upper right corner of the box opensthe Delete Domain window
      to confirm the action

- Tenant Configuration – Displays the sync policy settings entered for the selected tenant. These
  settings can be modified on this tab. See the Tenant Configuration Tab topic for additional
  information.
- Sync History – Displays the information on each synchronization event. See the Sync History Tab
  topic for additional information.

## Tenant Configuration Tab

The Tenant Configuration tab displays the sync policy settings entered for the selected tenant. With
the exception of the Tenant and Azure Cloud fields, these settings can be updated as needed.

![tenantconfigurationtab](/images/threatmanager/3.0/administration/configuration/integrations/tenantconfigurationtab.webp)

The Tenant Configuration tab displays the following settings:

- Tenant – Displays the Microsoft Entra ID tenant you want to connect to (ex. domain
  onmicrosoft.com)
- Azure Cloud – the specified cloud instance of Microsoft Entra ID tenant
- Select the Credential Profile by name from the drop-down menu. This was pre-created in the
  Credential Profiles page.
- Enabled/Disabled – Toggle indicates if the policy is enabled to run the sync service
- Perform a full scan on next run – Indicates whether the next sync will only look for tenant
  changes or run a full scan of the tenant. By default, this option is enabled for the first sync
  executed when a new tenant is added; however, it is disabled automatically after the first sync.
  This can be used to fully refresh tenant information, but is typically not needed for normal
  operation.
- Test Connection – Click **Test Connection** to ensure connection to the tenant. This will take a
  moment. Then a message will appear in the upper right corner of the console indicating a
  successful or failed connection.

The Save button is enabled when any settings are modified. Click it to commit the changes before
leaving the page.

## Sync History Tab

The Sync History tab displays the information on each synchronization event. This includes general
information about user, group, and computer objects within the Entra ID tenant.

![Entra ID Sync details page for a specific Entra ID tenant showing the Sync History tab](/images/threatmanager/3.0/administration/configuration/integrations/synchistorytab.webp)

The table provides the following information:

- Start Time – Date timestamp when the task started
- End Time – Date timestamp when the task completed
- Type – The object class that was being synced
- Total Objects – The total number of objects synced
- Objects Changed – The total number of objects modified since the last sync
- Objects Deleted – The total number of objects that were deleted since the last sync
- Objects Filtered – The total number of objects that were filtered
- Status – Event status for the sync task

The table is designed to display 50 records at a time, by default. However, you can change it to 100
or 1,000 rows per page from the Rows per page option given below the right corner of the table. Page
navigation buttons are next to this option. There is a search box above the left corner of the
table. You can also export the data using the **Export to CSV** button above the table.

## Modify Entra ID Sync Policy

Follow the steps to modify the Entra ID Sync policy for the selected Microsoft Entra ID tenant.

**Step 1 –** On the Integrations interface, select the desired Microsoft Entra ID tenant.

**Step 2 –** On the Tenant Configuration tab, make the desired modification.

:::tip
Remember, the Tenant and Azure Cloud fields cannot be modified.
:::


![tenantconfigurationtab](/images/threatmanager/3.0/administration/configuration/integrations/tenantconfigurationtab.webp)

**Step 3 –** To modify the Credential Profile, select the Credential Profile by name from the
drop-down menu. This was pre-created in the Credential Profiles page.

:::note
If you modify the Credential Profile for a Microsoft Entra ID tenant, click **Test
Connection** to ensure connection to the tenant. This will take a moment. Then a message will appear
in the upper right corner of the console indicating a successful or failed connection.
:::


**Step 4 –** Click the toggle to change the Enabled/Disabled state of the policy.

**Step 5 –** Select the **Perform a full scan on next run** checkbox to force the next sync to run a
full scan of the domain.

**Step 6 –** The Save button is enabled when any settings are modified. Click it to commit the
changes before leaving the page.

The changes to the Tenant Configuration have been saved.
