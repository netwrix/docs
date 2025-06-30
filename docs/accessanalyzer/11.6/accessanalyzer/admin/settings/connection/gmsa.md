# Group Managed Service Accounts (gMSA) Configuration

Enterprise Auditor can use a previously-configured Group Managed Service Accounts (gMSA/MSA)
account. Make sure that Managed Service Account is selected in the User Credentials window. See the
[Create a Connection Profile](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/connection/profile/create.md)
or
[Create a Schedule Service Account](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/schedule.md#create-a-schedule-service-account)
topic for additional information.

To run a job or scheduled task with a gMSA/MSA account, the following prerequisites must be met:

- The account that Enterprise Auditor is run with must have permissions to retrieve the gMSA account
  password
- The gMSA account must be a Local Admin in the target hosts
- The gMSA account does not have to be a local admin in the Enterprise Auditor Console
- The Data Collector used must support unicode characters in the Connection Profile's credential
  password to retrieve the gMSA account password

**NOTE:** For FSAA, remote scans using gMSA credentials need to use the Windows Service launch
mechanism in the query configuration.

See the Microsoft
[Group Managed Service Accounts](https://learn.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview)
article for additional information.
