---
title: "Configure AD Authenthication"
description: "Configure AD Authenthication"
sidebar_position: 60
---

# Create a login for API role

Create a login for the AD domain account that is going to authenticate and collect data from
NetApp. If you want to use an AD account for collecting data, enable it to access SVM through
ONTAP API.

**IMPORTANT:** If you want to use OAuth 2.0 authetication insted of AD domain one skip this and
follow [Configure OAUth 2.0](/docs/auditor/10.9/configuration/fileservers/netappcmode/oauth2/overview.md)

**NOTE:** In ONTAP 9.10 and higher, it isn't possible to assign ONTAPI role (e.g. netwrix_role) and
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
