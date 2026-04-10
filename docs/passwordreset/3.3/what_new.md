---
title: "What's New"
description: "What's New"
sidebar_position: 2
---

# What's New

## What's New in this Version

Netwrix Password Reset v3.3 includes the following improvements:

### Enhancements

• **Updated branding** — The product now reflects the Netwrix brand.

• **Increased protocol requirement to version 9.0 or higher** — Due to a protocol upgrade, Netwrix
Password Reset v3.3 isn't compatible with Netwrix Password Policy Enforcer v8.x and earlier
versions. If you are using Netwrix Password Reset with any of those older Netwrix Password Policy Enforcer versions, upgrade Netwrix Password Policy Enforcer to a current version before upgrading Netwrix Password Reset to v3.3 or later.

Older versions of Netwrix Password Policy Enforcer can still enforce the policy, but Netwrix Password Reset 3.3 doesn't get the policy and rejection messages or enforce the Similarity rule from Netwrix Password Policy Enforcer versions older than 9.0. See the [General Tab](/docs/passwordreset/3.3/administration/configuringpasswordreset/general_tab.md)
topic for Password Policy Enforcer integration settings.

• **Option to enable PPC protocol encryption** — Due to a protocol upgrade, Netwrix recommends enabling protocol encryption for clients. To do so, go to PPS Properties in your Netwrix Password Policy Enforcer server configuration and enable "Only accept encrypted client request".

Don't enable this option if you are using Netwrix Password Reset v3.3 with Netwrix Password Policy Enforcer v8.x or earlier versions, or with Netwrix Password Policy Enforcer/Web. If you are using Netwrix Password Reset v3.3 with any of those older versions of Netwrix Password Policy Enforcer, upgrade to a current and supported version first. See the
[General Tab](/docs/passwordreset/3.3/administration/configuringpasswordreset/general_tab.md) topic for protocol encryption configuration details.

• **Enabled ‘ServerMayChangeIPAddress’ for PPC queries** — This ensures that Netwrix Password Reset
always displays the policy or rejection message if it queried a domain controller with more than one
IP address.

### Bug Fix List

See the Netwrix Password Reset v3.3
[Bug Fix List PDF](https://helpcenter.netwrix.com/bundle/PasswordReset_3.3_ReleaseNotes/resource/Netwrix_PasswordReset_3.3_BugFixList.pdf)
for a list of bugs fixed in this version.
