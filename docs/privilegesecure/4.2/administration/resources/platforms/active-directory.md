# Add New Domain

Follow the steps to add a domain to the console.

**Step 1 –** Navigate to the Policy > Resources page.

**Step 2 –** Click the Plus icon and select Domain from the drop-down list.

![Add Domian Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/adddomain.webp)

**Step 3 –** Enter the following information:

- Domain Name – Displays the fully qualified domain name (FQDN)
- Service account – From the drop-down menu, select a previously added service account with
  credentials for the domain. See the
  [Service Accounts Page](/docs/privilegesecure/4.2/administration/configuration/services/service-accounts.md) topic for additional
  information.

  - Add New Service Account – Open the Add New Service Account window. The fields are identical to
    those on the Service Accounts page.

- Use TLS – Check to enable a secure connection to the domain
- Enter the desired frequency for the domain sync.

**Step 4 –** Click Test to verify the connection to the domain.

**Step 5 –** When the connection is verified, the Save button is enabled. Click Save to add the
domain to the console.

The new domain has been on-boarded. See the [Domain Details Page](/docs/privilegesecure/4.2/administration/resources/platforms/active-directory.md) topic
for additional information.

# Domain Details Page

The Domain Details page shows additional information for the selected domain resource. This page is
opened from any linked resource within the various interfaces.

![Domain Details Page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/details/domaindetailspage.webp)

The details page shows the following information:

- Name — Displays the name of the resource
- Trashcan icon — Removes the selected resource from being managed by the application. A
  confirmation window will display.
- Users — Number of user objects in the domain
- Groups — Number of group objects in the domain
- Members — Number of users that are members of groups
- Computers — Number of computer objects in the domain
- Last Synchronized — Date timestamp for the last time the domain was synchronized
- Status — Shows status information for the synchronization:

  - Complete — Synchronization completed successfully
  - Processing — Synchronization is actively occurring
  - Failed — Synchronization failed to complete
  - Cancelled — Synchronization was cancelled by an Administrator

- Synchronize Now button — Scans the domain for users, groups, members, and computers. The Cancel
  button, which is only visible when scanning can be used to stop the resource scan. This scan can
  also be scheduled from the [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md).
- Platform — Displays the type of platform, which defines the resource
- Service Account — Displays the service account associated with the resource
- Use TLS checkbox — Enables a secure connection to the domain
- Frequency — Indicates how often the synchronization task will run: Never, Hourly, Daily, or
  Weekly. Options open additional fields:

  - Hourly — Opens the Every field for selecting specific hour ranges
  - Daily— Opens the At field for indicating the start time of the daily synchronization
  - Weekly— Opens the On and At fields for indicating the day of the week and start time of the
    weekly synchronization

- Test button — Tests the settings by attempting to connect

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [Users Tab for Domain](/docs/privilegesecure/4.2/administration/resources/resource-tabs/users.md)
- [Groups Tab for Domain](/docs/privilegesecure/4.2/administration/resources/resource-tabs/groups.md)
- [Computers Tab for Domain](/docs/privilegesecure/4.2/administration/resources/resource-tabs/computers.md)
- [History Tab for Domain](/docs/privilegesecure/4.2/administration/resources/resource-tabs/history.md)
- [Sync Errors Tab for Domain](/docs/privilegesecure/4.2/administration/resources/resource-tabs/sync-errors.md)

# Active Directory Platform Policy Configuration

The Active Directory menu displays the configuration options for Active Directory platforms.

![Active Directory Platform Configuration](/img/product_docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/activedirectory.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for an Active Directory Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account — The built-in administrator account for the resources on the selected platform.
  If multiple built-in administrator accounts are required, create a copy of the platform. For
  Windows platforms, the built-in account is defined via the well-known SID (S-1-5-21\*-500). This
  feature informs Netwrix Privilege Secure which account(s) to discover and onboard for a given
  platform during its discovery process.
- Password Complexity Policy — The password complexity rules for managed accounts created on the
  resources defined by the selected platform. See the
  [Password Complexity Page](/docs/privilegesecure/4.2/administration/credentials/password-policies/password-complexity.md) topic for additional information.
- Password Length — The number of characters required by the selected password policy
- Arrow icon — Show or Hide password policy details. Click the icon to display the password
  complexity requirements of the selected password policy.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
  rotation). See the [Credentials Dashboard](/docs/privilegesecure/4.2/user-guide/dashboard-widgets/credentials-widget.md) and
  [Schedule Policies Page](/docs/privilegesecure/4.2/administration/policies/schedule-policies/add-schedule-policy.md) topic for additional information.
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the
  [Credentials Dashboard](/docs/privilegesecure/4.2/user-guide/dashboard-widgets/credentials-widget.md) topic for additional information on
  managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
  verification step finds that the existing password for an account does not match what Privilege
  Secure expects.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
