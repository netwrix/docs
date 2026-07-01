---
title: "Permissions for NetApp Auditing"
description: "Permissions for NetApp Auditing"
sidebar_position: 60
---

# Permissions for NetApp Auditing

Before you start creating a monitoring plan to audit your NetApp file storage system, plan for the
account that will be used for data collection – it should meet the requirements listed below.

If you want to authenticate with AD user account, you must enable it to access SVM through ONTAPI.
See the Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access section
for additional information.

The following permissions are required for the account on the target server:

- The account must be a member of the Local Administrators group.
- The account must be a member of the BUILTIN\Administrators group.

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

- To connect to NetApp Clustered Data ONTAP 8 or ONTAP 9, an account must be assigned a custom role
  (e.g., fsa_role) on SVM that has the following capabilities with access query levels:

    |                                                                              |                                    |
    | ---------------------------------------------------------------------------- | ---------------------------------- |
    | - version - volume - vserver audit - vserver audit rotate-log - vserver cifs | readonly readonly all all readonly |

The following permissions are required for the account on the Netwrix Auditor server:

- The account must be a member of the Local Administrators group.

See Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access section for
additional information.

_Remember,_ that you can also assign the built-in vsadmin role instead of the permissions above.

## Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9 and Enabling AD User Access

**NOTE:** This article applies to NetApp 8.3.2 and later. You must be a **cluster administrator** to
run the commands below.

Follow the steps to create a role for enabling AD user access:

**Step 1 –** Create a new role (e.g., netwrix_role for ONTAPI and netwrix_rest_role for RESTAPI) on
your SVM (e.g., svm1). For example:

Create ONTAPI role:

```
security login role create -role netwrix_role -cmddirname version -access readonly -vserver svm1
security login role create -role netwrix_role -cmddirname volume -access readonly -vserver svm1
security login role create -role netwrix_role -cmddirname "vserver audit" -access all -vserver svm1
security login role create -role netwrix_role -cmddirname "vserver audit rotate-log" -access all -vserver svm1
```

**NOTE:** This option is required for auto audit configuration.

```
security login role create -role netwrix_role -cmddirname "vserver cifs" -access readonly -vserver svm1
```

Create RESTAPI role:

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access read_create_modify -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access read_create_modify -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/storage/volumes -access readonly -vserver svm1 
security login rest-role create -role netwrix_rest_role -api /api/protocols/cifs/shares -access readonly -vserver svm1
```

**NOTE:** The commands in the first two lines above can be used on NetApp versions 9.11+. In earlier
versions, use the following commands:

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access all -vserver svm1
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access all -vserver svm1
```

**Step 2 –** The capabilities must be assigned one by one. To review currently applied capabilities,
you can use the following command:

ONTAPI role:

```
security login role show -vserver svm1 -role netwrix_role
```

RESTAPI role:

```
security login rest-role show -vserver svm1 -role netwrix_rest_role
```

**Step 3 –** Create a login for the account that is going to authenticate and collect data from
NetApp. If you want to use an AD account for collecting data, enable it to access SVM through
ONTAPI. For example:

**NOTE:** In ONTAP 9.10 and higher, it is not possible to assign ONTAPI role (e.g. netwrix_role) and
RESTAPI role (e.g. netwrix_rest_role) to one AD user. To allow a user access to both the ONTAPI and
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

_Remember,_ that to be able to add event policy for NetApp, the role you set up for working with
ONTAPI must have the following attributes:

- version readonly
- volume readonly
- vserver audit all (required for the product to adjust audit settings automatically)
- vserver audit rotate-log all
- vserver cifs readonly

The role you set up for working with RESTAPI must have the following attributes:

- /api/svm/svms read_create_modify
- /api/protocols/audit read_create_modify
- /api/storage/volumes readonly
- /api/protocols/cifs/shares readonly
