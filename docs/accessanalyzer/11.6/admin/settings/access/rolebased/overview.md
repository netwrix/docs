---
title: "Role Based Access"
description: "Role Based Access"
sidebar_position: 10
---

# Role Based Access

With Role Based Access, Enterprise Auditor users don't need local Administrator rights on the
console server. Enterprise Auditor achieves this by creating different roles that cover all aspects
of the Enterprise Auditor workflow introduced by enabling Role Based Access. You can use these roles
without such elevated rights. These roles divide responsibilities within the Enterprise Auditor
Console.

Role Based Access also secures published reports when accessed through the Web
Console. To do this, first enable Role Based Access, then assign users or groups as viewers to the
reports they should access.

You can apply report security through Role Based Access without implementing a least-privileged
access model for the Enterprise Auditor Console. See the
[Securing Published Reports Only](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/securereports.md)
topic for additional information.

:::note
The least-privileged access model to the Enterprise Auditor Console doesn't work with the Exchange
Solution. You can enable Role Based Access, but running the Exchange Solution jobs requires the
Administrator role.
:::


:::warning
Use caution when enabling Role Based Access, as it's a very powerful tool
within the console that's difficult to disable once activated. If you enable Role Based Access
by accident, contact [Netwrix Support](https://www.netwrix.com/support.html) for
help disabling it.
:::


The account used to perform the initial Enterprise Auditor installation, as well as to change
Storage Profile settings after installation, require additional rights to query objects in
the master database. See the
[Configure the Installation Account](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/configureroles.md#configure-the-installation-account)
topic for additional information on this account.

To enable Role Based Access within Enterprise Auditor, first create the corresponding roles within
SQL Management Studio. Then assign roles to Enterprise Auditor users both in SQL Management Studio
and in Enterprise Auditor.

The first Enterprise Auditor user assigned a role must be an Administrator. Assigning this first
user role officially enables Role Based Access within Enterprise Auditor. See the
[Configuring Roles](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/configureroles.md)
topic for additional configuration details.
