# Updating Passwords

Credential passwords in Enterprise Auditor occasionally need to be updated due to reasons such as
the password expiring due to existing password expiration polices or for security purposes. If a
password change is required, there are multiple types of accounts where credential passwords must be
updated:

- [Storage Profiles](#storage-profiles)
- [Connection Profiles ](#connection-profiles)
- [Schedule Service Accounts ](#schedule-service-accounts)

  - [Settings > Schedule Node](#settings-schedule-node)
  - [Schedules Node](#schedules-node)
  - [Jobs](#jobs)

- [Notifications (if enabled)](#notifications-if-enabled)
- [ServiceNow (if enabled)](#servicenow-if-enabled)
- [Enterprise Auditor Services](#enterprise-auditor-services)

**NOTE:** When updating passwords in Enterprise Auditor, you should also check the passwords in
Netwrix Activity Monitor. See the Update Credential Passwords topic in the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for additional information.

## Storage Profiles

Storage Profiles manage user authentication with the database. See the
[Update Authentication Credentials in a Storage Profile](/docs/accessanalyzer/11.6/administration/settings/storage.md)
topic for information about updating Storage Profile authentication credentials in the Enterprise
Auditor Console.

## Connection Profiles

Connection Profiles are used for scan authentication in the Enterprise Auditor console. See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for details on how to edit user credentials for a Connection Profile.

For Entra ID, formerly Microsoft Azure Active Directory, accounts, see the
[Microsoft Entra ID Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/directory-services/entra-id.md)
topic for additional information.

## Schedule Service Accounts

Enterprise Auditor uses the Schedule Service Account to run scheduled tasks on the Enterprise
Auditor Console server. The global account is configured at the Settings > Schedule node. However, a
custom account can be assigned to either a Job or a Scheduled Task.

### Settings > Schedule Node

The Settings > Schedule Node displays the Schedule page where you can configure the account used for
executing a scheduled task. See the
[Edit a Schedule Service Account](/docs/accessanalyzer/11.6/administration/settings/schedule.md#edit-a-schedule-service-account)
topic for additional information on editing the user credentials for the account.

### Schedules Node

The Schedules Node opens the Scheduled Actions pages where scheduled tasks are listed. From this
page, actions can be scheduled using the Schedule wizard. See the
[Schedule Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/scheduling.md)
topic for additional information on updating the credentials password in the Schedule wizard.

### Jobs

Jobs are typically scheduled with the global scheduled account. However, Jobs can also be scheduled
with a custom account. See the
[Auto Retry Tab](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for information on updating the Schedule Authentication credentials.

## Notifications (if enabled)

Email notifications are configured in the Notifications node. The following steps only apply if
Notification authentication has been enabled for the Enterprise Auditor Console. See the
[Update Notification Authentication Credentials](/docs/accessanalyzer/11.6/administration/settings/notifications.md#update-notification-authentication-credentials)
topic for information on updating Notification authentication credentials.

## ServiceNow (if enabled)

The ServiceNow Node controls the integration between Enterprise Auditor and ServiceNow. See the
[Update ServiceNow Authentication Credentials](/docs/accessanalyzer/11.6/administration/settings/service-now.md#update-servicenow-authentication-credentials)
topic for information on updating ServiceNow authentication credentials.

## Enterprise Auditor Services

Depending on your configuration, the credentials for the accounts running the following Netwrix
Enterprise Auditor services may need updating:

- File System Proxy Service – This service is on the proxy server. See the
  [File System Proxy Service Installation](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
  topic for additional information.
- Vault Service – See the
  [Vault](/docs/accessanalyzer/11.6/administration/settings/application.md)
  topic for additional information
- Web Server Service – See the
  [Reports via the Web Console](/docs/accessanalyzer/11.6/installation/reports-configuration/security.md)
  topic for additional information
