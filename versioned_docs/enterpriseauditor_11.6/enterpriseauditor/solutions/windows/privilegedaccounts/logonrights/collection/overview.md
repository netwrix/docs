# Collection Job Group

The Collection job group collects group policy settings, local users, and local group membership
information from Windows servers which will be further analyzed to provide insight into privileged
users within the environment.

![Collection Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.png)

The jobs in the Collection job group are:

- [SG_GroupPolicy Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_grouppolicy.md)
  – This job collects policy assignments from all targeted servers. In particular, **Allow log on
  locally**, **Log on as a batch job**, **Allow log on through Remote Desktop Services**, and **Log
  on as a service** are audited.
- [SG_LocalMembership Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_localmembership.md)
  – This job collects local group membership details from all targeted servers
- [SG_LocalUsers Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/windows/privilegedaccounts/logonrights/collection/sg_localusers.md)
  – This job collects local user accounts from all targeted servers
