# Oracle Platform Policy Configuration

The Oracle menu displays the configuration options for Oracle platforms.

![Oracle Platform Configuration](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/settings/connection/profile/oracle.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for an Oracle Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account — The built-in administrator account for the resources on the selected platform.
  If multiple built-in administrator accounts are required, create a copy of the platform. For
  Windows platforms, the built-in account is defined via the well-known SID (S-1-5-21\*-500).
- Password Complexity Policy — The password complexity rules for managed accounts created on the
  resources defined by the selected platform. See the
  [Password Complexity Page](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
  rotation). See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  and
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Scan Schedule — How often to perform a host scan on the resources defined by the selected platform
  (local users, groups, windows services and scheduled tasks). This scan can also be run ad-hoc from
  the
  [Resources Page](/docs/privilegesecure/4.1/administration/resources/index.md).
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  topic for additional information on managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
  verification step finds that the existing password for an account does not match what Privilege
  Secure expects.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
