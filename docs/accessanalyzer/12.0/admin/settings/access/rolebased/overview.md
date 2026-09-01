---
title: "Role Based Access"
description: "Role Based Access"
sidebar_position: 10
---

# Role Based Access

Role Based Access allows Access Analyzer users to work without local Administrator rights on the
console server. It does this by creating different roles that cover all aspects of the Access
Analyzer workflow introduced by enabling Role Based Access. Users can use these roles without
such elevated rights. Role Based Access divides responsibilities within the Access Analyzer
Console among these roles.

With Role Based Access, users can also secure published reports when accessed through the Web
Console. To do this, first enable Role Based Access, then assign users or groups as viewers to
the reports they should access.

You can apply report security through Role Based Access without implementing a least privileged
access model for the Access Analyzer Console. See the
[Securing Published Reports Only](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/securereports.md) topic for additional information.

:::note
The least privileged access model to the Access Analyzer Console doesn't work in
conjunction with the Exchange Solution. You can enable Role Based Access, but running the
Exchange Solution jobs requires the Administrator role.
:::


:::warning
use caution when enabling Role Based Access, as it is a very powerful tool
within the console designed to be difficult to disable once activated. If you enable Role Based
Access by accident, contact [Netwrix Support](https://www.netwrix.com/support.html) for
assistance in disabling it.
:::


The account you use to perform the initial Access Analyzer installation, and to change Storage
Profile settings after installation, requires additional rights to query objects in the
master database. See the
[Configure the Installation Account](configureroles.md#configure-the-installation-account) topic for
additional information on this account.

To enable Role Based Access within Access Analyzer, first create the corresponding roles in SQL
Management Studio. Then assign roles to Access Analyzer users in both SQL Management Studio and
Access Analyzer.

The first Access Analyzer user assigned a role must be an Administrator. Assigning this first user
role officially enables Role Based Access within Access Analyzer. When Role Based access is first
enabled, Access Analyzer creates an NEAUsers local group on the Access Analyzer server with the
required permissions to the Access Analyzer application directory. When you assign a user a role,
Access Analyzer adds them to the NEAUsers group to give them the necessary access. See the
[Assign User to Role Members](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/assignroles.md) topic for additional information.
