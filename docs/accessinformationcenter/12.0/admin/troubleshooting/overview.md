---
title: "Troubleshooting"
description: "Troubleshooting"
sidebar_position: 70
---

# Troubleshooting

The following are several troubleshooting tips which can assist with diagnosing trouble with the
Access Information Center. If engaging with [Netwrix Support](https://www.netwrix.com/support.html),
it will be useful to be aware of these.

**Service Account Delegation**

Use delegation to grant the Active Directory service account the minimal rights to
allow the Access Information Center to commit changes in Active Directory. See the
[Service Account Delegation](/docs/accessinformationcenter/12.0/admin/troubleshooting/delegation.md) topic for additional information.

**Log File**

By default, the Access Information Center logs at the Error level. When requested by
Netwrix Support, you can enable Debug level from the Diagnostics page of the Configuration
interface. See the [Diagnostics Page](/docs/accessinformationcenter/12.0/admin/configuration/diagnostics.md) topic for additional
information.

If you need or want a different log level, you can modify the `aic.log` file. See the
[Change Log Level](/docs/accessinformationcenter/12.0/admin/troubleshooting/loglevel.md) topic for additional information.

**Credential Password Changes**

The Access Information Center uses several different types of service accounts. If a credential
password for one of these accounts is no longer valid, it will impact application functionality.
Additionally, if the Builtin Administrator account remains enabled, it may be necessary to reset the
password. See the [Update Credential Passwords](/docs/accessinformationcenter/12.0/admin/troubleshooting/credentialpasswords.md) topic for additional
information.
