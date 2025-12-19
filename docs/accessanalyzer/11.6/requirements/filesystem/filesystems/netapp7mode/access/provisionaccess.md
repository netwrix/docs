---
title: "Provision Account"
description: "Provision Account"
sidebar_position: 10
---

# Provision Account

This section describes the steps needed to create a user account with the privileges required to
execute Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans from Enterprise
Auditor. It is necessary to:

- Create Role
- Create a Group & Assign Role
- Add User to Group

Relevant NetApp Documentation: To learn more about node access controls, please visit the NetApp
website and read the
[na_useradmin – Administers node access controls](https://library.netapp.com/ecmdocs/ECMP1511537/html/man1/na_useradmin.1.html)
article.

## Create Role

This section provides instructions for creating a role with access to the following commands:

```
login-http-admin
api-system-api-list
api-system-get-version
api-cifs-share-list-iter-*
api-volume-list-info-iter-*
```

The following command needs to be run to create the role.

```
useradmin role ‑add [ROLE_NAME] ‑c "[ROLE_DESCRIPTION]" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter
```

Example:

```
useradmin role ‑add enterpriseauditor ‑c "Role for Enterprise Auditor" ‑a login‑http‑admin,api‑system‑api‑list,api‑system‑get‑version,api‑cifs‑share‑list‑iter‑*,api‑volume‑list‑info‑iter‑*
```

After the role is created, Create a Group & Assign Role.

## Create a Group & Assign Role

Once the role has been created, it must be attached to a group. The following command needs to be
run to create a group and assign the role to it.

```
useradmin group add [GROUP_NAME] ‑r [ROLE_NAME]
```

Example:

```
useradmin group add nwxgroup ‑r enterpriseauditor
```

After the group is created and the role is assigned, Add User to Group.

## Add User to Group

The final step is to add the domain user to the new group, Backup Operators group, and Power Users
group. The following command needs to be run to add the user to all three groups.

```
useradmin domainuser ‑add [DOMAIN\USER] ‑g [GROUP_NAME, WITHIN " MARKS IF MULTIPLE WORDS], "Backup Operators","Power Users"
```

Example:

```
useradmin domainuser ‑add example\user1 ‑g nwxgroup,"Backup Operators","Power Users"
```

This credential is used within the Connection Profile assigned to the File System scans.
