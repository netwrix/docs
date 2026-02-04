---
title: "Configure ONTAPI/RESTAPI Web Access"
description: "Configure ONTAPI/RESTAPI Web Access"
sidebar_position: 10
---

# Configure ONTAPI\RESTAPI Web Access

Netwrix Auditor uses ONTAPI to obtain the current CIFS audit configuration and force the audit data
flush from the internal filer format to an MS Event Viewer compatible format. Netwrix Auditor
supports both the SSL and non-SSL HTTP access, trying HTTPS first, and falling back to HTTP if it is
unavailable.

Follow the steps to configure ONTAPI\RESTAPI Web Access.

**Step 1 –** Navigate to your cluster management command prompt through the SSH/Telnet connection.

**Step 2 –** Log in as a cluster administrator and review your current web access settings. Make
sure that External Web Services are allowed. For example:

|                                                                                                        |        |
| ------------------------------------------------------------------------------------------------------ | ------ |
| `cluster1::>  system  services  web show` where `'cluster1`' is the name of your NetApp ONTAP cluster. |        |
| External Web Services:                                                                                 | true   |
| Status:                                                                                                | online |
| HTTP Protocol Port:                                                                                    | 80     |
| HTTPs Protocol Port:                                                                                   | 443    |
| TLSv1 Enabled:                                                                                         | true   |
| SSLv3 Enabled:                                                                                         | true   |
| SSLv2 Enabled:                                                                                         | false  |

If the result of the` External Web Services` command is '`false`', execute the following:

```
cluster1::> system services web modify -external true
```

**Step 3 –** Enable ONTAPI access on the 'Storage VM' (SVM) where CIFS server is installed. Run the
following command where svm1 is the name of your SVM:

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true
cluster1::> vserver services web show -vserver svm1.
```

| Vserver | Type    | Service Name | Description                 | Enabled |
| ------- | ------- | ------------ | --------------------------- | ------- |
| `svm1`  | `data ` | `ontapi `    | `Remote Administrative API` | `true`  |
|         |         |              | Support                     |         |
| svm1    | data    | rest         | Remote Administrative API   | true    |
|         |         |              | `Support`                   |         |

To display the current settings of web services for SVM svm1, use the following command:

```
cluster1::> vserver services web show -vserver svm1
```

**Step 4 –** Review the [Permissions for NetApp Auditing](/docs/auditor/10.9/configuration/fileservers/netappcmode/permissions.md) topic for additional
information on how to create the role and enable AD user access.

**Step 5 –** Enable HTTP/HTTPS access. For example:

ONTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true
```

RESTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name rest -enabled true
```

**Step 6 –** Enable only SSL access (HTTPS in Netwrix Auditor). For example:

ONTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name ontapi -enabled true -ssl-only true
```

RESTAPI

```
cluster1::> vserver services web modify -vserver svm1 -name rest -enabled true -ssl-only true
```

**Step 7 –** Make sure that the custom role (e.g., netwrix_role for ONTAPI or netwrix_rest_role for
RESTAPI) assigned to your account specified for data collection can access ONTAPI or RESTAPI. See
[Permissions for NetApp Auditing](/docs/auditor/10.9/configuration/fileservers/netappcmode/permissions.md) topic for additional information.

```
cluster1::> vserver services web access show -name ontapi -vserver svm1
cluster1::> vserver services web access show -name rest -vserver svm1
```

|                             |           |                |                    |
| --------------------------- | --------- | -------------- | ------------------ |
| `Vserver`                   | `Type`    | `Service Name` | `Role`             |
| `--------------`            | `-------` | `------------` | `---------------`  |
| `svm1`                      | `data `   | `ontapi `      | `netwrix_role`     |
| `svm1`                      | `data `   | `ontapi `      | `vsadmin`          |
| `svm1`                      | `data `   | `ontapi `      | `vsadmin-protocol` |
| `svm1`                      | `data `   | `ontapi `      | `vsadmin-readonly` |
| `svm1`                      | `data `   | `ontapi `      | `vsadmin-volume`   |
| `5 entries were displayed.` |           |                |                    |
