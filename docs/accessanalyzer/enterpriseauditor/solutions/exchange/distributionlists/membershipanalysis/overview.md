# Membership Analysis Job Group

The Membership Analysis job group provides visibility into toxic conditions contained with the
environment, such as circular nesting, large groups, empty groups, nesting, and potentially stale
groups.

![Membership Analysis Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/membershipanalysisjobstree.webp)

The jobs in the Membership Analysis job group are:

- [EX_CircularNesting Job](ex_circularnesting.md) – Identifies where circular nesting exists within
  distribution groups
- [EX_EmptyGroups Job](ex_emptygroups.md) – Identifies empty distribution groups that are candidates
  for cleanup
- [EX_LargestGroups Job](ex_largestgroups.md) – Identifies distribution groups with a high member
  count
- [EX_NestedGroups Job](ex_nestedgroups.md) – Identifies where nesting exists within distribution
  groups
- [EX_StaleGroups Job](ex_stalegroups.md) – Identifies potentially stale distribution groups based
  on the last domain logon of the members. These groups should be reviewed and cleaned up.
