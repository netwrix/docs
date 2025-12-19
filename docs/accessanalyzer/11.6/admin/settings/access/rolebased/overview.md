---
title: "Role Based Access"
description: "Role Based Access"
sidebar_position: 10
---

# Role Based Access

Role Based Access allows Enterprise Auditor users to not have local Administrator rights on the
console server. This is done through the creation of different roles which cover all aspects of the
Enterprise Auditor work flow introduced by enabling Role Based Access. These roles can be leveraged
without such elevated rights. Responsibilities within the Enterprise Auditor Console have been
divided among these roles.

Role Based Access also allows users to secure published reports when accessed through the Web
Console. This is done by first enabling Role Based Access and then by assigning users/groups as
viewers to the reports to which they should have access.

Report security through Role Based Access can be applied without implementing a least privileged
access model to the Enterprise Auditor Console. See the
[Securing Published Reports Only](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/securereports.md)
topic for additional information.

:::note
The least privileged access model to the Enterprise Auditor Console does not work in
conjunction with the Exchange Solution. Role Based Access can be enabled, but the Administrator role
is required to run the Exchange Solution jobs.
:::


:::warning
Please use caution when enabling Role Based Access, as it is a very powerful tool
within the console designed to be difficult to disable once activated. If Role Based Access is
enabled by accident, please contact [Netwrix Support](https://www.netwrix.com/support.html) for
assistance in disabling it.
:::


The account used to perform the initial Enterprise Auditor installation, as well as to change
Storage Profile settings after installation, require additional rights in order to query objects in
the master database. See the
[Configure the Installation Account](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/configureroles.md#configure-the-installation-account)
topic for additional information on this account.

To enable Role Based Access within Enterprise Auditor, corresponding roles must first be created
within SQL Management Studio. Then Enterprise Auditor users must be assigned roles both in SQL
Management Studio and in Enterprise Auditor.

The first Enterprise Auditor user assigned a role must be an Administrator. Assigning this first
user role officially enables Role Based Access within Enterprise Auditor. See the
[Configuring Roles](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/configureroles.md)
topic for additional configuration details.
