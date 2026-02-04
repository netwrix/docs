---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 60
---

# Troubleshooting

The following are several troubleshooting tips that can assist with diagnosing trouble with the
Access Reviews application. If engaging with
[Netwrix Support](https://www.netwrix.com/support.html), it will be useful to be aware of these.

Configuration of Permissions on the Installation Directory:

The Windows service account running the Netwrix Auditor Access Reviews service may be used as the
Database service account, the Active Directory service account, and/or the SMTP authentication
account. Check the Database, Active Directory, and Notification pages in the Configuration interface
to confirm where the account is in use before modifying it to ensure these functionality are not
impaired. If this account is changed, a new account must have the **Full Control** permission to
files and folders in the Access Reviews installation directory. See the
[Application Service Account](/docs/auditor/10.9/accessreviews/admin/troubleshooting/serviceaccount.md) topic for additional information.

Log File:

By default the Access Reviews application is configured to log at the Info level. When requested by
Netwrix Support, you can enable Debug level from the Diagnostics page of the Configuration
interface. See the [Diagnostics Page](/docs/auditor/10.9/accessreviews/admin/configuration/diagnostics.md) topic for additional
information.

If a different log level is needed or desired, the `aic.log` file can be modified. See the
[Change Log Level](/docs/auditor/10.9/accessreviews/admin/troubleshooting/loglevel.md) topic for additional information.

Credential Password Changes:

The Access Reviews application uses several different types of service accounts. If a credential
password for one of these accounts is no longer valid, it will impact application functionality.
Additionally, if the Builtin Administrator account remains enabled, it may be necessary to reset the
password. See the [Update Credential Passwords](/docs/auditor/10.9/accessreviews/admin/troubleshooting/credentialpasswords.md) topic for additional
information.
