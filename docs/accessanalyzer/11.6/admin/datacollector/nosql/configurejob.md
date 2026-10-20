---
title: "NoSQL Custom Connection Profile & Host List"
description: "NoSQL Custom Connection Profile & Host List"
sidebar_position: 10
---

# NoSQL Custom Connection Profile & Host List

The NoSQL Data Collector requires a custom connection profile and host list.

## Connection Profile

The credential used for MongoDB Server auditing can be either an Active Directory account or a SQL
account. Create a Connection Profile and set the following information on the User Credentials
window.

**Active Directory**

For an Active Directory account, set the following on the User Credentials window:

- Select Account Type – Active Directory Account
- Domain – dropdown menu with available trusted domains will appear. Either enter the short domain
  name in the textbox or select a domain from the menu.
- User name – Enter the user name
- Password Storage – Choose the option for credential password storage:

    - Application – Uses the configured Profile Security setting as selected at the **Settings** >
      **Application** node. See the
      [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
      topic for additional information.
    - CyberArk – Uses the CyberArk Enterprise Password Vault. See the
      [CyberArk Integration](/docs/accessanalyzer/11.6/admin/settings/connection/cyberarkintegration.md)
      topic for additional information. The password fields don't apply for CyberArk password
      storage.

- Password – Enter the password
- Confirm – Re-enter the password

**SQL**

For a SQL account, set the following on the User Credentials window:

- Select Account Type – SQL Authentication
- User name – Enter user name
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
  topic for additional information.)
- Password – Enter the password
- Confirm – Re-enter the password

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
and
[Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
topics for additional information.

## Host List

Jobs using the NoSQL Data Collector must create a host list with the servers containing the target
databases. Set up the list of MongoDB hosts to monitor. Be sure to use a specific
host name (if forcing the connection to a secondary host) or just the cluster name if connecting to
the cluster. See the
[Host Management](/docs/accessanalyzer/11.6/admin/hostmanagement/overview.md)
topic for additional information.

Additionally, add the database clusters/instances to the Filter page in the query
configuration. See the
[NoSQL: Filter](/docs/accessanalyzer/11.6/admin/datacollector/nosql/filter.md)
topic for additional information.
