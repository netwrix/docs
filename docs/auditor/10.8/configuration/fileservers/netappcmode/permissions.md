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


## ONTAPI vs. REST API

NetApp ONTAP supports two API protocols for SVM access. The choice affects how roles are created and assigned.

**ONTAPI is applicable when:**

- The environment runs ONTAP 9.9 or earlier, where REST API support may be limited or unavailable.
- The existing configuration already uses ONTAPI and migration is not needed.

**REST API is applicable when:**

- The environment runs ONTAP 9.10 or later — REST API is the recommended interface in modern ONTAP versions.
- The security or network policy prefers REST-based communication over the legacy ONTAPI (ZAPI) protocol.

**NOTE:** In ONTAP 9.10 and higher, an ONTAPI role (e.g., `netwrix_role`) and a REST API role (e.g., `netwrix_rest_role`) cannot be assigned to the same AD user. To grant a single user access to both, assign the respective roles to separate AD groups and add the user to both groups.

For more information, see [Migrate to the ONTAP REST API](https://docs.netapp.com/us-en/ontap-automation/migrate/overview.html) in the NetApp ONTAP Automation documentation.

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

Create login for ONTAPI role:

```
security login create -vserver svm1 -user-or-group-name domain\user -application ontapi -authmethod domain -role netwrix_role
```

Create login for RESTAPI role:

```
security login create -vserver svm1 -user-or-group-name domain\user -application http -authmethod domain -role netwrix_rest_role
```

where `domain\user` is your data collecting account.

## NetApp Built-in vsadmin Role

As an alternative to custom roles, the built-in **vsadmin** role can be assigned to the data collection account. The `vsadmin` role grants full SVM administrative access and covers all API capabilities that Netwrix Auditor requires.

**vsadmin is suitable when:**

- A simple setup without custom role configuration is acceptable.
- There are no restrictions on using a highly privileged SVM account.
- Troubleshooting collection issues — `vsadmin` helps rule out insufficient permissions as the cause.

**Granular roles are preferable when:**

- Security is a priority — granular roles follow the least-privilege principle and limit the data collection account to only the permissions Netwrix Auditor requires.
- The SVM is shared or has strict access controls.
- An AD domain account is used for data collection (see [Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access](#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9-and-enabling-ad-user-access)).

## Related Resources

- [NetApp ONTAP documentation: Predefined roles for SVM administrators](https://docs.netapp.com/us-en/ontap/authentication/predefined-roles-svm-administrators-concept.html)
- [NetApp ONTAP Automation documentation: Migrate to the ONTAP REST API](https://docs.netapp.com/us-en/ontap-automation/migrate/overview.html)
