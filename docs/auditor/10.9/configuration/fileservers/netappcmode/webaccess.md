---
title: "Configure API Web Access"
description: "Configure API Web Access"
sidebar_position: 20
---

# Configure API Web Access

Netwrix Auditor uses ONTAPI to obtain the current CIFS audit configuration and force the audit data
flush from the internal filer format to an MS Event Viewer compatible format. Netwrix Auditor
supports both the SSL and non-SSL HTTP access, trying HTTPS first, and falling back to HTTP if it is
unavailable.

Follow the steps to configure ONTAPI\RESTAPI Web Access.

**Step 1 –** Navigate to your cluster management command prompt through the SSH/Telnet connection.

**Step 2 –** Log in as a cluster administrator and review your current web access settings. Make
sure that External Web Services are allowed. For example:

```
system services web show
```

| Setting               | Value  |
| ---------------------- | ------ |
| External Web Services | true   |
| Status                | online |
| HTTP Protocol Port    | 80     |
| HTTPs Protocol Port   | 443    |
| TLSv1 Enabled         | true   |
| SSLv3 Enabled         | true   |
| SSLv2 Enabled         | false  |

Where `cluster1` is the name of your NetApp ONTAP cluster.

If the value of `External Web Services` is `false`, execute the following:
```
system services web modify -external true
```

**Step 3 –** Enable ONTAPI access on the 'Storage VM' (SVM) where CIFS server is installed. Run the
following command where svm1 is the name of your SVM:
```
vserver services web modify -vserver svm1 -name ontapi -enabled true
```
```
vserver services web show -vserver svm1
```

| Vserver | Type   | Service Name | Description                          | Enabled |
| ------- | ------ | ------------ | ------------------------------------- | ------- |
| `svm1`  | `data` | `ontapi`     | `Remote Administrative API Support`   | `true`  |
| `svm1`  | `data` | `rest`       | `Remote Administrative API Support`   | `true`  |

To display the current settings of web services for SVM svm1, use the following command:
```
vserver services web show -vserver svm1
```

**Step 4 –** Review the [Permissions for NetApp Auditing](/docs/auditor/10.9/configuration/fileservers/netappcmode/apirole.md) topic for additional
information on how to create the role and enable AD user access.

**Step 5 –** Enable HTTP/HTTPS access. For example:

ONTAPI
```
vserver services web modify -vserver svm1 -name ontapi -enabled true
```

RESTAPI
```
vserver services web modify -vserver svm1 -name rest -enabled true
```

**Step 6 –** Enable only SSL access (HTTPS in Netwrix Auditor). For example:

ONTAPI
```
vserver services web modify -vserver svm1 -name ontapi -enabled true -ssl-only true
```

RESTAPI
```
vserver services web modify -vserver svm1 -name rest -enabled true -ssl-only true
```

**Step 7 –** Ensure that the custom role (for example, `netwrix_role` for ONTAPI or
`netwrix_rest_role` for RESTAPI) assigned to your account specified for data collection can access
ONTAPI or RESTAPI. See [Permissions for NetApp Auditing](/docs/auditor/10.9/configuration/fileservers/netappcmode/apirole.md)
for additional information.

```
vserver services web access show -name ontapi -vserver svm1
```
```
vserver services web access show -name rest -vserver svm1
```

| Vserver | Type   | Service Name | Role               |
| ------- | ------ | ------------ | ------------------ |
| `svm1`  | `data` | `ontapi`     | `netwrix_role`     |
| `svm1`  | `data` | `ontapi`     | `vsadmin`          |
| `svm1`  | `data` | `ontapi`     | `vsadmin-protocol` |
| `svm1`  | `data` | `ontapi`     | `vsadmin-readonly` |
| `svm1`  | `data` | `ontapi`     | `vsadmin-volume`   |
5 entries were displayed.
