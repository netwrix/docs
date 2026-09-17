---
title: "Create NetApp API role"
description: "Create NetApp API role"
sidebar_position: 40
---

# Permissions for NetApp Auditing

Before you start creating a monitoring plan to audit your NetApp file storage system, plan for the
account that will be used for data collection – it should meet the requirements listed below.

If you want to authenticate with AD user account, you must enable it to access SVM through ONTAPI.
See [Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9](#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9)
below, and [Configure AD domain authentication](/docs/auditor/10.9/configuration/fileservers/netappcmode/adauth.md)
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
  (for example, `netwrix_role`) on the Storage Virtual Machine (SVM) that has the following
  capabilities with access query levels:

    - version readonly
    - volume readonly
    - vserver audit all
    - vserver audit rotate-log all
    - vserver cifs readonly

The following permissions are required for the account on the Netwrix Auditor server:

- The account must be a member of the Local Administrators group.

See [Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9](#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9)
below, and
[Configure AD domain authentication](/docs/auditor/10.9/configuration/fileservers/netappcmode/adauth.md)
for additional information.

**NOTE:** You can also assign the built-in `admin\vsadmin` role instead of the permissions above.


## Create Role on NetApp Clustered Data ONTAP 8 or ONTAP 9

**NOTE:** This article applies to NetApp 8.3.2 and later. You must be a **cluster administrator** to
run the commands below.

**Step 1 –** Create a new role on SVM

### Create the RESTAPI role
The commands below create the REST API role `netwrix_rest_role` on the SVM `svm_name`.

**NOTE:** When AD domain authentication is used, 'svm_name' is the name of NetApp SVM with SMB shares, e.g. 'svm1'.
If OAuth 2.0 is used, 'svm_name' is the name of NetApp Management SVM, e.g. 'Cluster1'.

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access read_create_modify -vserver svm_name 
```
```
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access read_create_modify -vserver svm_name 
```
```
security login rest-role create -role netwrix_rest_role -api /api/storage/volumes -access readonly -vserver svm_name
```
```
security login rest-role create -role netwrix_rest_role -api /api/protocols/cifs/shares -access readonly -vserver svm_name
```

**NOTE:** The commands in the first two lines above can be used on NetApp versions 9.11+. In earlier
versions, use the following commands:

```
security login rest-role create -role netwrix_rest_role -api /api/svm/svms -access all -vserver svm_name
```
```
security login rest-role create -role netwrix_rest_role -api /api/protocols/audit -access all -vserver svm_name
```

### Create the ONTAPI role
The commands below create the ONTAPI role `netwrix_role` on the SVM `svm_name`.

```
security login role create -role netwrix_role -cmddirname version -access readonly -vserver svm_name
```
```
security login role create -role netwrix_role -cmddirname volume -access readonly -vserver svm_name
```
```
security login role create -role netwrix_role -cmddirname "vserver audit" -access all -vserver svm_name
```
```
security login role create -role netwrix_role -cmddirname "vserver audit rotate-log" -access all -vserver svm_name
```

**NOTE:** This option is required for auto audit configuration.

```
security login role create -role netwrix_role -cmddirname "vserver cifs" -access readonly -vserver svm_name
```

**Step 2 –** The capabilities must be assigned one by one. To review applied capabilities,
you can use the following command:

ONTAPI role:

```
security login role show -vserver svm_name -role netwrix_role
```

RESTAPI role:

```
security login rest-role show -vserver svm_name -role netwrix_rest_role
```

**NOTE:** To be able to add an event policy for NetApp, the role you set up for working with
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
