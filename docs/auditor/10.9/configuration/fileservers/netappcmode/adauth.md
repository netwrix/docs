---
title: "Configure AD Authentication"
description: "Configure AD Authentication"
sidebar_position: 60
---

# Configure AD domain authentication

**IMPORTANT:** If you want to use OAuth 2.0 authentication instead of AD domain authentication,
skip the steps in this topic and follow
[OAuth 2.0 Authentication Overview](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/overview.md).

Create a login for the AD domain account that is going to authenticate and collect data from
NetApp. If you want to use an AD account for collecting data, enable it to access SVM through
ONTAP API.

**NOTE:** In ONTAP 9.10 and higher, it isn't possible to assign ONTAPI role (e.g. netwrix_role) and
RESTAPI role (e.g. netwrix_rest_role) to one AD user. To allow a user access to both the ONTAPI and
RESTAPI, you can use different AD groups by assigning roles to them and including the user in these
groups.

## Create login for ONTAPI role:
```
security login create -application ontapi -authmethod domain -role netwrix_role -vserver svm1 -user-or-group-name domain\user
```

## Create login for RESTAPI role:
```
security login create -application http -authmethod domain -role netwrix_rest_role -vserver svm1 -user-or-group-name domain\user
```

where `domain\user` is your data collecting account.
