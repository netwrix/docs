# 6.Activity Job Group

The 6.Activity Job Group provides insights into access sprawl, privileged account usage, and
operational health of the Active Directory environment. Information collected includes Active
Directory Changes, Authentication, LDAP Traffic, Replication Traffic, and LSASS.EXE process
injection on domain controllers.

The jobs that comprise the 6.Activity Job Group collect data, process analysis tasks, and generate
reports.

_Remember,_ this job group requires the Active Directory Activity license.

![6.Activity Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/11.6/admin/hostmanagement/jobstree.webp)

The 6.Activity Job Group is comprised of the following jobs:

- [0.Collection > AD_ActivityCollection Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/ad_activitycollection.md)
  – Imports data from the Netwrix Activity Monitor logs into the Enterprise Auditor Database.
  Retention can be modified in the query (120 days default).
- [Changes Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/changes/overview.md)
  – Provides an audit trail for changes made to Computer, Group and User objects within the
  environment
- [Group Usage Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/groupusage/overview.md)
  – Shows how group membership changes have affected access across the entire environment, the
  actions taken by the members of a group, and identifies where groups may be used for authorization
  in applications
- [LDAP > AD_LDAPQueries Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/ad_ldapqueries.md)
  – Analyzes LDAP traffic to determine trends such as most expensive queries, most active servers
  and users, successful/failed and signing status. This data can be used to troubleshoot performance
  issues, load balancing, and poorly configured services.
- [Lockouts > AD_Lockouts Job](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/ad_lockouts.md)–
  Provides a listing of all account lockouts with relevant details which can be used to aid
  troubleshooting
- [Operations Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/operations/overview.md)
  – Reports on Active Directory activity events related to operational activity. This group can help
  report on probable machine owners based on authentications, domain controller traffic and
  activity, and authentication protocols being used in the environment.
- [Privileged Accounts Job Group](/docs/accessanalyzer/11.6/solutions/activedirectory/activity/privilegedaccounts/overview.md)–
  Highlights the activity performed by this accounts, to identify potential abuses or unused
  accounts that can be deprovisioned
