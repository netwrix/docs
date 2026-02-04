---
title: "Active Directory State-In-Time Reports"
description: "Active Directory State-In-Time Reports"
sidebar_position: 10
---

# Active Directory State-In-Time Reports

Examine the Active Directory state-in-time data on the user account attributes:

- User Accounts - Attributes

To instruct Netwrix Auditor to collect data needed for the report, make sure that **Collect data for
state-in-time reports** option is selected in the corresponding monitoring plan properties. See the
[Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for additional information.

## User Accounts - Attributes

This report shows specific AD attributes for the accounts that meet the specified filtering
criteria. Use this report to discover user accounts with settings that violate company policies or
applicable compliance standards.

Supported object types and attributes are listed in the
[Active Directory](/docs/auditor/10.9/configuration/activedirectory/overview.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for additional information.

### Tips to Work with Report

1. Set desired filters in the report header. See Filters for more information.
2. Select as many Accounts details to show as needed. Selected details are shown in the table view
   for each account that comply filtering criteria.
3. Filter on Sort by to bring important accounts' data to front.
4. Add filters by specific attribute values to narrow your report scope. In this case, the report
   shows only accounts that contains these values. See the Reported Attributes  topic below for more
   information.
5. The report is limited by 2000 records. To view all, create subscription to the report. The
   subscription (email attachment or file uploaded to a file share) will contain complete data.
6. If you have more than 2000 entities within the report scope, sorting might work incorrectly.
   Apply filters to narrow your report scope.

Please consider that if you are going to export the report in .csv format or want to subscribe to
the .csv report, the file will contain the full list of available attributes regardless of which
filters you specified. Note that unseleted attributes have no values.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- Monitoring plan — name of the monitoring plan set to collect data from the AD domain you need.
- Item — name of the item within your monitoring plan.
- Account details to show — set of AD attributes to display in the report for each account.
- Sort by — list of available sorting parameters.
- Attribute/Value — list of available AD attributes with the ability to provide specific value.
  Review the full list in the Reported Attributes

### Reported Data

For the account(s) you selected using filters, the summary section includes:

- **Total account count** — total number of accounts that meet selected filtering criteria.
- **Enabled accounts** —total number of enabled accounts that meet selected filtering criteria.
- **Disabled accounts** —total number of disabled accounts that meet selected filtering criteria.

#### Reported Attributes

The following account attributes are reported:

| Attribute                     | Description                                                                                                                                                                                                                                                                  | Possible values                                                                                                                                        | Filtering |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Account                       |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account enabled               | Shows whether an account enabled or not.                                                                                                                                                                                                                                     | Yes No                                                                                                                                                 | +         |
| Account locked                | Shows whether an account locked or not.                                                                                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Canonical name                | Equals the Canonical-Name attribute. See the corresponding Microsoft article for more information: [Canonical-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-canonicalname).                                                                      | Example: _USRegion.OrgName.com/Finance/JDoe_                                                                                                           | +         |
| Display name                  | Equals the Display-Name attribute. See the corresponding Microsoft article for more information: [Display-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-displayname).                                                                            | Example: _John Smith_                                                                                                                                  | +         |
| Logon name (sAMAccountName)   | Equals the sAMAccountName attribute. See the corresponding Microsoft article for more information: [sAMAccountName](https://docs.microsoft.com/en-us/windows/win32/ad/naming-properties#samaccountname).                                                                     | Example: _JSmith_                                                                                                                                      | +         |
| Logon name (UPN)              | Equals the userPrincipalName attribute. See the corresponding Microsoft article for more information: [User-Principal-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-userprincipalname).                                                          | Example: _JSmith@domain.com_                                                                                                                           | +         |
| Parent OU/container           | Shows the path to account's parent object (OU or container)                                                                                                                                                                                                                  | Example: _test.corp.local/UserAccounts/user with all properties_                                                                                       | +         |
| Member of                     | Shows direct AD group membership for the account. The report is limited to 10 groups. To view all groups the account is member of, export the report to .CSV file.                                                                                                           | Example: _Domain Admins, Backup Operators_ Clicking the Expand group membership link opens a detailed report on the user’s effective group membership. | +         |
| Employee details              |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| First name                    | Shows the first name.                                                                                                                                                                                                                                                        | Example: _John_                                                                                                                                        | +         |
| Last name                     | Shows the last name.                                                                                                                                                                                                                                                         | Example: _Smith_                                                                                                                                       | +         |
| Job title                     | Equals the Title attribute. See the corresponding Microsoft article for more information: [Title attribute (AD Schema)](https://docs.microsoft.com/en-us/windows/win32/adschema/a-title).                                                                                    | Example: _Manager_                                                                                                                                     | +         |
| Department                    | Shows the name for the department in which the user works.                                                                                                                                                                                                                   | Example: _Sales_                                                                                                                                       | +         |
| Telephone number              | Equals the Telephone-Number attribute. See the corresponding Microsoft article for more information: [Telephone-Number attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-telephonenumber).                                                                | Example: _949-555-1234_                                                                                                                                | +         |
| Email address                 | Equals the E-mail-Addresses attribute. See the corresponding Microsoft article for more information: [E-mail-Addresses attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-mail).                                                                           | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Manager                       | Shows manager specified for the account.                                                                                                                                                                                                                                     | Display name (default) If empty, the report shows common name.                                                                                         | +         |
| Manager email address         | Equals the manager / mail attribute.                                                                                                                                                                                                                                         | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Office                        | Equals the Physical-Delivery-Office-Name attribute. See the corresponding Microsoft article for more information: [Physical-Delivery-Office-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-physicaldeliveryofficename).                           | Example: _London Office_                                                                                                                               | +         |
| Company                       | Equals the Company attribute. See the corresponding Microsoft article for more information: [Company attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-company).                                                                                          | Example: _Corporation_                                                                                                                                 | +         |
| Street address                | Shows address based on the Street-Address and postOfficeBox attributes.                                                                                                                                                                                                      | Example: _The Main Road; 10_                                                                                                                           | +         |
| City                          | Shows the locality, such as the town or city, in the user's address.                                                                                                                                                                                                         | Example: _NewLondon_                                                                                                                                   | +         |
| State/province                | Equals the State-Or-Province-Name attribute. See the corresponding Microsoft article for more information: [State-Or-Province-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-st).                                                                 | Example: _New York_                                                                                                                                    | +         |
| ZIP/postal code               | Equals the Postal-Code attribute. See the corresponding Microsoft article for more information: [Postal-Code attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-postalcode).                                                                               | Example: _61441_                                                                                                                                       | +         |
| Country/region                | Shows the country/region in which the user is located.                                                                                                                                                                                                                       | Example: _Ireland_                                                                                                                                     | +         |
| Security                      |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account cannot be delegated   | Shows whether the account can be delegated or not based on the User-Account-Control attribute. See the corresponding Microsoft article for more information: [User-Account-Control attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-useraccountcontrol). | Yes No                                                                                                                                                 | +         |
| Account expiration date       | Equals the Account-Expires attribute. See the corresponding Microsoft article for more information: [Account-Expires attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-accountexpires).                                                                   | Date                                                                                                                                                   | –         |
| Password age                  | Shows password age for the account based on the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                        | Number of days N/A — if password never set When the filter applied, the report shows above or equal results                                            | +         |
| Password expired              | Shows whether the account has the "_Password expired_" flag set under the AccountControl attribute.                                                                                                                                                                          | Yes No                                                                                                                                                 | +         |
| Password last changed         | Equals the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                                                             | Date                                                                                                                                                   | –         |
| Never – if password never set | +                                                                                                                                                                                                                                                                            |                                                                                                                                                        |           |
| Password never expires        | Shows whether the account has the "_Password never expires_" flag set on the Account tab in properties.                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Password not required         | Shows whether the account has the "_Password not required_" flag set under the AccountControl attribute. Such account may have empty password.                                                                                                                               | Yes No                                                                                                                                                 | +         |
| User cannot change password   | Shows whether the account has the "_User cannot change password_" flag set on the Account tab in properties.                                                                                                                                                                 | Yes No                                                                                                                                                 | +         |
| User must change password     | Shows whether the account has the "_User must change password_" flag set on the Account tab in properties.                                                                                                                                                                   | Yes No                                                                                                                                                 | +         |
| Other                         |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Creation date                 | Shows account creation date.                                                                                                                                                                                                                                                 | Date                                                                                                                                                   | –         |
| Days inactive                 | Shows the number of days the account is considered to be inactive.                                                                                                                                                                                                           | Days When the filter applied, the report shows above or equal results                                                                                  | +         |
| Description                   | Contains account description if provided.                                                                                                                                                                                                                                    | Example: _Sales Manager_                                                                                                                               | +         |
| Last logon                    | Shows the date of account's last logon.                                                                                                                                                                                                                                      | Date Never A user's last logon time is updated only once every 9-14 days, so some data may be outdated.                                                | -         |
| Last modified                 | Equals the When-Changed attribute. See the corresponding Microsoft article for more information: [When-Changed attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-whenchanged).                                                                            | Date The Last modified attribute is considered as last object's modification date and not appears immediately. So some data may be outdated.           | –         |
| Logon script path             | Equals the Script-Path attribute. See the corresponding Microsoft article for more information: [Script-Path attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-scriptpath).                                                                               | Example: _C:\Powershellscripts\old scripts\script.ps1_                                                                                                 | +         |
| Recipient type                | Shows recipient type based on the msExchRecipientTypeDetails attribute.                                                                                                                                                                                                      | Mail user User Mailbox                                                                                                                                 | +         |
| Working (logon) hours         | Shows time interval based on the Logon-Hours attribute. See the corresponding Microsoft article for more information: [Logon-Hours attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-logonhours).                                                         | Specified time interval (in hours).                                                                                                                    | –         |

### Related Reports

Clicking the **Account name** link opens the Account Permissions in Active Directory report.

Clicking the **Expand group membership** link opens the Effective Group Membership report for this
account.

### Usage Example

An IT administrators wants to find all user accounts from the OU named _Finance_ that are currently
locked out and disabled with information about their managers to contact them in case of any
questions. This OU is included in the monitoring plan named _Active Directory Monitoring_. They need
to set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- In the "Account details to show" filter, select Manager.
- Attribute 1: Parent OU/container - equals | Value: Domain.com/Finance
- Attribute 2: Account enabled | Value: No
- Attribute 3: Account locked | Value: Yes
- All other filter values can be left default.

A security manager wants to find administrators of the _corp.local_ domain with incorrect password
settings (password not required). Service accounts (_svc_%_) must be skipped in the report. This
domain is included in the monitoring plan named \_Active Directory Monitoring_. He or she needs to
set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- Item: corp.local
- In the "Account details to show" filter, select Member of, Password not required.
- Attribute 1: Member of - equals | Value: Domain Admins
- Attribute 2: Password not required| Value: Yes
- Attribute 3: Logon name (sAMAccountName) - not equal to | Value: svc\_%
- All other filter values can be left default.
