---
title: "System Settings"
description: "System Settings"
sidebar_position: 50
---

# System Settings

Edit settings such as SMTP, Active Directory, and Syslog server details, and reset the UI to
Default. User Password Settings lets you enforce a User Password Policy in environments that don't
use AD.

After entering SMTP and/or Syslog Host details, use the **Test** button to confirm Change Tracker
sends emails and messages correctly.

![SystemSettings](/images/changetracker/admin/settings/systemsettings.webp)

Clicking **Advanced Options** presents other System Settings, including a library of NNT_FILEHASH
binaries to use with any Agentless FIM.

![SystemSettingsAdvanced](/images/changetracker/admin/settings/systemsettingsadvanced.webp)

## Single Sign-On (OIDC)

Change Tracker supports single sign-on through any OpenID Connect (OIDC) identity provider. See
[Single Sign-On (OIDC)](/docs/changetracker/admin/settingstab/systemsettings/oidcsso.md) for
configuration details.
