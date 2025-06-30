# Active Directory Platform Policy Configuration

The Active Directory menu displays the configuration options for Active Directory platforms.

![Active Directory Platform Configuration](/img/product_docs/accessanalyzer/11.6/admin/hostdiscovery/wizard/activedirectory.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for an Active Directory Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account — The built-in administrator account for the resources on the selected platform.
  If multiple built-in administrator accounts are required, create a copy of the platform. For
  Windows platforms, the built-in account is defined via the well-known SID (S-1-5-21\*-500).
- Password Complexity Policy — The password complexity rules for managed accounts created on the
  resources defined by the selected platform. See the
  [Password Complexity Page](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.
- Password Length — The number of characters required by the selected password policy
- Arrow icon — Show or Hide password policy details. Click the icon to display the password
  complexity requirements of the selected password policy.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
  rotation). See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  and
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  topic for additional information on managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
  verification step finds that the existing password for an account does not match what Privilege
  Secure expects.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

# Computers Tab for Domain

The Computers tab shows information about the domain computer objects on the selected resource.

![Domain Resource Computers Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/computersdomain.webp)

The Computers tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion: Resource and Not On-boarded
- Add as NPS Managed Resource — Opens the Enroll Hosts in Management window to onboards the selected
  resource. See
  [Enroll Hosts in Management Window](/docs/privilegesecure/4.1/administration/resources/resource-management/enrollment.md)
  for additional information.
- Remove as NPS Managed Resource — Removes the selected resource from being managed by the
  application. A confirmation window will display.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the group
- NPS Managed — Indicates if the resource is being managed by Privilege Secure
- Operating System — Displays the operating system of the resource
- DC — Indicates if the resource is a domain controller
- DNS Host Name — Displays the DNS host name for a host resource or the FQDN for a domain resource
- Distinguished Name — Displays the distinguished name of the object
- Service Account — Displays the service account associated with the resource

The table columns can be resized and sorted in ascending or descending order.

# Groups Tab for Domain

The Groups tab shows information about the domain groups on the selected resource.

![Domain Resource Groups Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/groupsdomain.webp)

The Groups tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion: Not Enrolled, Can Log In,
  and Admin
- Add to NPS User Role — Onboards the selected account, granting the Privilege Secure User role
- Remove NPS Role — Removes console access from the selected account
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the group
- NPS Role — Indicates the assigned Privilege Secure role
- Group Name (Pre-Windows 2000) — Displays the sAMAccountName for the account
- Description — Description of the policy
- Distinguished Name — Displays the distinguished name of the object

The table columns can be resized and sorted in ascending or descending order.

# History Tab for Domain

The History tab shows information about the synchronization history of the selected resource.

![History Tab for Domain Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/historydomain.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion:

  - Status — Filter by status message type: All Statuses, Information, Warning, and Error
  - Event Type — Filter by event type: Unspecified, Status, Service Start, Password Rotation, Host
    Scan, AD Sync, and Activity Session
  - Service Type — Filter by service type: Unspecified, Web UI, Action Service, Proxy Service,
    Schedule Service, and Email Service

- Refresh — Reload the information displayed

The table has the following columns:

- Occurred — Date timestamp for when the event occurred
- Status — Shows status information for the synchronization:

  - Information — Session was successful and row contains details
  - Warning — Session was successful but there were non-critical issues detected
  - Error — Session had an error and row contains details

- Event Type — Displays the type of event that occurred
- Service Type — Displays the type of service
- Event Message — Description of the event

The table columns can be resized and sorted in ascending or descending order.

# Sync Errors Tab for Domain

The Sync Errors tab displays the synchronization error log for the selected resource.

![Sync Errors Tab for Domain Recource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/syncerrorsdomain.webp)

The table has the following columns:

- Time — Date timestamp for when the event occurred
- Message — Description of the event

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Domain

The Users tab shows information about the domain users on the selected resource.

![Domian Users Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/usersdomain.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Users, Admin, Managed,
  and Not Onboarded
- Add to NPS User Role — Onboards the selected account, granting the Privilege Secure User role
- Remove NPS Role — Removes console access from the selected account
- Manage — Set the selected account to be managed by Privilege Secure. This button is only available
  when the account Managed Type is Standard or Internal. For an Internal account, a pop up window
  will display.. Password rotation can be set to automatic or manual for managed accounts.
- Unmanage — Remove the account from being managed by Privilege Secure
- Schedule Rotation — Add the credential rotation task to the queue. This button is only available
  when the Method is Automatic managed.
- Verify — Checks that the credentials for the selected account match the credentials set by
  Privilege Secure
- View History — Opens the Password History window to displays the password history for the account
- Password Reset Options — Customize password rotation options. This option is only available for
  managed accounts. See
  [Password Reset Options Window](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- Privilege — Level of privilege the account has on the resource
- Last Login — Date timestamp for the last time the user logged into the application
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- NPS Role — Indicates the assigned Privilege Secure role
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.1/administration/credentials/index.md)
  topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Dependents — Number of scheduled tasks or Windows services using this account.
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md)
  topic for additional information on configuring a verification schedule.

  - Unspecified — Verification check has not run
  - Verified — Confirmed the credentials match the value stored in Privilege Secure
  - Mismatch — Credentials do not match the value stored in Privilege Secure. This status only
    appears when the Reset on Mismatch option is not enabled.
  - Changed — Credentials were successfully updated to match the value stored in Privilege Secure.
    This status only appears when the Reset on Mismatch option is enabled.
  - Failed — Attempt to update the credentials to match the value stored in Privilege Secure was
    unsuccessful. This status only appears when the Reset on Mismatch option is enabled.

- Last Checked — Date timestamp of the last verification check
- Next Change — Date timestamp for the next credential password rotation
- Schedule — Shows the schedule policy used to change the password of a manged account, the
  credential rotation. See the
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Complexity — Indicates the password complexity policy used for the account. See the
  [Password Complexity Page](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.

The table columns can be resized and sorted in ascending or descending order.
