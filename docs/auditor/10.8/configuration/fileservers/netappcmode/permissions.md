---
title: "Permissions for NetApp Auditing"
description: "Permissions for NetApp Auditing"
sidebar_position: 60
---

# Permissions for NetApp Auditing

Before you start creating a monitoring plan to audit your NetApp file storage system, plan for the
account you will use for data collection — it must meet the following requirements.

If you want to authenticate with AD user account, you must enable it to access SVM through ONTAPI.
See the Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access section
for additional information.

The account on the target server requires the following permissions:

- The account must be a member of the NetApp BUILTIN\Administrators group.

- The account requires the following **NTFS** permissions:

    - List folder / read data
    - Read attributes
    - Read extended attributes
    - Read permissions

- The account requires the following share permissions:

    - Read

- The account requires the following NTFS and share permissions:

    - Read permission on the audit logs folder and its content.
    - Delete permission on the audit log folder content.

- To connect to NetApp Clustered Data ONTAP 8 or ONTAP 9, assign the account a custom role
  (e.g., netwrix_role) on SVM with the following capabilities and access query levels:

  To connect using the ONTAPI
    |             API               |       Access Level     |
    | ----------------------------- | ---------------------- |
    |   version                     |    readonly            |
    |   volume                      |    readonly            |            
    |   vserver audit               |    all                 |
    |   vserver audit rotate-log    |    all                 |
    |   vserver cifs                |    readonly            |

   To connect using the RestAPI
    |             API               |       Access Level     |
    | ----------------------------- | ---------------------- |
    |  /api/svm/svms                |    read_create_modify  |
    |  /api/storage/volumes         |    readonly            |            
    |  /api/protocols/audit         |    read_create_modify  |
    |  /api/protocols/cifs/shares   |    readonly            |


See Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access section for
additional information.

## Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access

**NOTE:** This article applies to NetApp 8.3.2 and later. You must be a **cluster administrator** to
run the following commands.

To create a role for enabling AD user access:

**Step 1 –** Create a new role (e.g., netwrix_role for ONTAPI and netwrix_rest_role for RESTAPI) on
your SVM (e.g., svm1). For example:

Create ONTAPI role:

```
security login role create -role netwrix_role -cmddirname version -access readonly -vserver svm1
security login role create -role netwrix_role -cmddirname volume -access readonly -vserver svm1
security login role create -role netwrix_role -cmddirname "vserver audit" -access all -vserver svm1
security login role create -role netwrix_role -cmddirname "vserver audit rotate-log" -access all -vserver svm1
security login role create -role netwrix_role -cmddirname "vserver cifs" -access readonly -vserver svm1
```

Create RESTAPI role:

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access read_create_modify -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/storage/volumes -access readonly -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access read_create_modify -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/protocols/cifs/shares -access readonly -vserver svm1
```

**NOTE:** The commands in the first two lines work on NetApp 9.11 and later. In earlier
versions, use the following commands:

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access all -vserver svm1
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access all -vserver svm1
```

**Step 2 –** Assign the capabilities one by one. To review applied capabilities,
use the following command:

ONTAPI role:

```
security login role show -vserver svm1 -role netwrix_role
```

RESTAPI role:

```
security login rest-role show -vserver svm1 -role netwrix_rest_role
```

**Step 3 –** Create a login for the account that will authenticate and collect data from
NetApp. If you want to use an AD account for collecting data, enable it to access SVM through
ONTAPI. For example:

**NOTE:** In ONTAP 9.10 and higher, you can't assign an ONTAPI role (e.g., netwrix_role) and a
RESTAPI role (e.g., netwrix_rest_role) to one AD user. To allow a user access to both the ONTAPI and
RESTAPI, you can use different AD groups by assigning roles to them and including the user in these
groups.

Create login for ONTAPI role:

```
security login create -vserver svm1 -user-or-group-name domain\user -application ontapi -authmethod domain -role netwrix_role
```

Create login for RESTAPI role:

```
security login create -vserver svm1 -user-or-group-name domain\user -application http -authmethod domain -role netwrix_rest_role
```

where `domain\user` is your data collecting account.

## Built-in vsadmin Role

As an alternative to custom roles, the built-in **vsadmin** role can be assigned to the data collection account. The `vsadmin` role grants full SVM administrative access and covers all API capabilities that Netwrix Auditor requires.

**vsadmin is suitable when:**

- A simple setup without custom role configuration is acceptable.
- There are no restrictions on using a highly privileged SVM account.
- Troubleshooting collection issues — `vsadmin` helps rule out insufficient permissions as the cause.

**Granular roles are preferable when:**

- The environment follows a least-privilege security policy.
- The SVM is shared or has strict access controls.
- An AD domain account is used for data collection (see [Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access](#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9-and-enabling-ad-user-access)).

## Related Resources

- [Predefined roles for SVM administrators](https://docs.netapp.com/us-en/ontap/authentication/predefined-roles-svm-administrators-concept.html) — NetApp ONTAP documentation
