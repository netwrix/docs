# Active Directory Sync Page

The Active Directory Sync page within the Integrations interface lists the domains that are synced to theThreat Manager database. The sync operation gets all information about an Active Directory environment (users, groups, hosts, etc).See the [Permissions for Active Directory Sync ](/docs/product_docs/threatmanager/threatmanager/requirements/permissions/adsync.md#Permissions-for-Active-Directory-Sync) topic for additional information about the permissions required for Active Directory syncing.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

Click __Active Directory Sync__ in the navigation pane to view a list of the already added Active Directory domains, if any. Each added domain represents a sync policy.

![Integrations interface on the Active Directory Sync page](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.png)

A service named Active Directory Service continuously runs to collect data for the specified domain(s). It evaluates the USN value of an object and syncs when the object changes. The table provides the following information:

- Name – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Enabled – icon indicates the enabled state:

  - Checkmark icon – Enabled
  - X icon – Disabled
- Profile – Name of the Credential Profile assigned to the policy. As mentioned earlier, each added domain represents a sync policy.
- Last Sync Start – Date timestamp when the task started for the most recent sync
- Last Sync Status – Event status for the most recent sync task

To view policy details or make modifications, select a domain from the table or under Active Directory Sync in the navigation pane.

## Add an Active Directory Sync Policy

__NOTE:__  Prior to adding an Active Directory Sync policy, you must first configure a Credential Profile with credentials properly provisioned for running the sync operation for the domain. See the [Application Server Requirements](/docs/product_docs/threatmanager/threatmanager/requirements/server.md) topic for the permissions. See the [Credential Profile Page](/docs/product_docs/threatmanager/threatmanager/administration/configuration/integrations/credentialprofile.md) topic for additional information on creating a profile.

Follow the steps to add a domain/Active Directory sync policy.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click Add New Integration in the navigation pane. The Add New Integration window opens.

![Add New Integration window with Active Directory Sync type selected](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/activedirectorysync.png)

__Step 3 –__ In the Type drop-down menu, select Active Directory Sync.

__Step 4 –__ Enter the following information:

- Domain – Enter the domain DNS name or domain controller hostname in the required format of [DOMAIN.COM], e.g. NT-DC03.NWXTech.com
- Credential Profile – Select the Credential Profile by name from the drop-down menu. This was pre-created in the Credential Profiles page.
- Enabled / Disabled – Toggle indicates if the policy is enabled to run the sync service. By default it is set to Enabled.
- Max Renew Ticket Age (days) – The value indicates the maximum number of days of the Renew Ticket Age for the domain. This value must match the domain configuration. See the Microsoft [Max-Renew-Age attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-maxrenewage) article for additional information. The default value is 7 days; modify the value by typing in the textbox.
- Max Ticket Age (hours) – The value indicates the maximum number of hours of the Ticket Age for the domain. This value must match the domain configuration. See the Microsoft [Max-Ticket-Age attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-maxticketage) article for additional information. The default value is 10 hours; modify the value by typing in the textbox.
- Use SSL – Check the box to enable SSL for secure communication with the domain. See the Microsoft [5.1.1.2 Using SSL/TLS](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-adts/8e73932f-70cf-46d6-88b1-8d9f86235e81#5112-Using-SSLTLS) article for additional information.

__Step 5 –__  Click __Test Connection__ to ensure connection to the domain. This will take a moment. Then a message will appear in the upper right corner of the console indicating a successful or failed connection.If successful, move on to the next step. If failed, recheck your entries for error and repeat this step until a successful connection is established.

__Step 6 –__ Click Add. The Add New Integration window closes.

The domain or domain controller (the Domain value supplied in Step 4) is listed in the Integrations navigation pane. Repeat the process to add additional domains.

## Active Directory Sync Policy Details

Follow the steps to view the details of an Active Directory sync policy.

__Step 7 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 8 –__ On the Integrations interface, click __Active Directory Sync__ in the navigation pane to view a list of the already created Active Directory Sync policies, if any. A policy is represented by the domain for which it is created.

__Step 9 –__ Select a domain from the table or the navigation pane to view the details of the Active Directory Sync policy created for that domain.

![Active Directory Sync details page for a specific domain](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/details.png)

Select the domain from the list to see modification options:

- Name – The box at the top displays the name of the domain

  - Delete – The delete button in the upper right corner of the box opens the Delete Domain window to confirm the action
- Domain Configuration – Displays the sync policy settings entered for the selected domain. These settings can be modified on this tab. See the [Domain Configuration Tab](#Domain-Configuration-Tab) topic for additional information.
- Sync History – Displays the information on each synchronization event. See the [Sync History Tab](#Sync-History-Tab) topic for additional information.

### Domain Configuration Tab

The Domain Configuration tab displays the sync policy settings entered for the selected domain. With the exception of the domain itself, these settings can be updated as needed.

![Active Directory Sync details page for a specific domain showing the Domain Configuration tab](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/domainconfigurationtab.png)

The Domain Configuration tab displays the following settings:

- Domain – Displays the domain DNS name or domain controller hostname in the required format of [DOMAIN.COM], e.g. NT-DC03.NWXTech.com
- Credential Profile – Displays the Credential Profile by name
- Enabled / Disabled – Toggle indicates if the policy is enabled to run the sync service
- Max Renew Ticket Age (days) – Displays the value indicates the maximum number of days of the Renew Ticket Age for the domain. This value must match the domain configuration. See the Microsoft [Max-Renew-Age attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-maxrenewage) article for additional information.

  __NOTE:__ This value is required to accurately evaluate the Golden Ticket threat.
- Max Ticket Age (hours) – Displays the value indicates the maximum number of hours of the Ticket Age for the domain. This value must match the domain configuration. See the Microsoft [Max-Ticket-Age attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-maxticketage) article for additional information.

  __NOTE:__ This value is required to accurately evaluate the Golden Ticket threat.
- Use SSL – Indicates whether you have enabled SSL for secure communication with the domain. See the Microsoft [5.1.1.2 Using SSL/TLS](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-adts/8e73932f-70cf-46d6-88b1-8d9f86235e81#5112-Using-SSLTLS) article for additional information.
- Perform a full scan on next run – Indicates whether the next sync will only look for domain changes or run a full scan of the domain. By default, this option is enabled for the first sync executed when a new domain is added; however, it is disabled automatically after the first sync. This can be used to fully refresh domain information, but is typically not needed for normal operation.
- Test Connection – Click __Test Connection__ to ensure connection to the domain. This will take a moment. Then a message will appear in the upper right corner of the console indicating a successful or failed connection.

The Save button is enabled when any settings are modified. Click it to commit the changes before leaving the page.

### Sync History Tab

The Sync History tab displays the information on each synchronization event. This includes general information about user, group, and computer objects within the selected domain.

![Active Directory Sync details page for a specific domain showing the Sync History tab](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/synchistorytab.png)

The table provides the following information:

- Start Time – Date timestamp when the task started
- End Time – Date timestamp when the task completed
- Users – Number of user objects in the domain
- Users Changed – Number of user objects with changes detected since the last sync
- Groups – Number of group objects in the domain
- Groups Changed – Number of group objects with changes detected since the last sync
- Computers – Number of computer objects in the domain
- Computers Changed – Number of computer objects with changes detected since the last sync
- Status – Event status for the sync task

The table is designed to display 10 records at a time, by default. However, you can set this to 50, 100, or 1,000 rows with the drop-down menu above the right corner of the table. There is a search box above the left corner of the table. Page navigation buttons are below the table. You can also export the data from the current page using the __Export CSV__ button.

## Modify Active Directory Sync Policy

Follow the steps to modify the Active Directory Sync policy for the selected Active Directory domain.

__Step 1 –__ On the Integrations interface, click __Active Directory Sync__ in the navigation pane to view a list of the already created Active Directory Sync policies, if any. A policy is represented by the domain for which it is created.

__Step 2 –__ The Domain Configuration tab opens, where you can make the desired modification.

_Remember,_  the domain cannot be modified.

![Active Directory Sync details page for a specific domain showing the Domain Configuration tab](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/domainconfigurationtab.png)

__Step 3 –__ To modify the Credential Profile, select the Credential Profile by name from the drop-down menu. This was pre-created in the Credential Profiles page.

__NOTE:__ If you modify the Credential Profile for a domain, click __Test Connection__ to ensure connection to the domain. This will take a moment. Then a message will appear in the upper right corner of the console indicating a successful or failed connection.

__Step 4 –__ Click the toggle to change the Enabled/Disabled state of the policy.

__Step 5 –__ For the Max Renew Ticket Age (days) value, modify the value by typing in the textbox.

__Step 6 –__ For the Max Ticket Age (hours) value, modify the value by typing in the textbox.

__Step 7 –__ Select or deselect the __Use SSL__ box for the desired security state for communication with the domain.

__Step 8 –__ Select the __Perform a full scan on next run__ checkbox to force the next sync to run a full scan of the domain.

__Step 9 –__ The Save button is enabled when any settings are modified. Click it to commit the changes before leaving the page.

The changes to the Domain Configuration have been saved.
