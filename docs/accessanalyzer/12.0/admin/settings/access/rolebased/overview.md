---
title: "Role Based Access"
description: "Role Based Access"
sidebar_position: 10
---

# Role Based Access

Role Based Access allows Access Analyzer users to not have local Administrator rights on the console
server. This is done through the creation of different roles which cover all aspects of the Access
Analyzer work flow introduced by enabling Role Based Access. These roles can be leveraged without
such elevated rights. Responsibilities within the Access Analyzer Console have been divided among
these roles.

Role Based Access also allows users to secure published reports when accessed through the Web
Console. This is done by first enabling Role Based Access and then by assigning users/groups as
viewers to the reports to which they should have access.

Report security through Role Based Access can be applied without implementing a least privileged
access model to the Access Analyzer Console. See the
[Securing Published Reports Only](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/securereports.md) topic for additional information.

:::note
The least privileged access model to the Access Analyzer Console does not work in
conjunction with the Exchange Solution. Role Based Access can be enabled, but the Administrator role
is required to run the Exchange Solution jobs.
:::


:::warning
Please use caution when enabling Role Based Access, as it is a very powerful tool
within the console designed to be difficult to disable once activated. If Role Based Access is
enabled by accident, please contact [Netwrix Support](https://www.netwrix.com/support.html) for
assistance in disabling it.
:::


The account used to perform the initial Access Analyzer installation, as well as to change Storage
Profile settings after installation, require additional rights in order to query objects in the
master database. See the
[Configure the Installation Account](configureroles.md#configure-the-installation-account) topic for
additional information on this account.

To enable Role Based Access within Access Analyzer, corresponding roles must first be created within
SQL Management Studio. Then Access Analyzer users must be assigned roles both in SQL Management
Studio and in Access Analyzer.

The first Access Analyzer user assigned a role must be an Administrator. Assigning this first user
role officially enables Role Based Access within Access Analyzer. When Role Based access is first
enabled, an NEAUsers local group is created on the Access Analyzer server with the required
permissions to the Access Analyzer application directory. When a user is assigned a role, they are
added to the NEAUsers group to give them the necessary access. See the
[Assign User to Role Members](/docs/accessanalyzer/12.0/admin/settings/access/rolebased/assignroles.md) topic for additional information.
