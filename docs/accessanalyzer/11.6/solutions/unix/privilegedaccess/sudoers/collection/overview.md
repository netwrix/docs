# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix
and Linux Environments.

![0.Collection Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/11.6/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0.Collection job group are:

- [UX_MakeDirectory Job](/docs/accessanalyzer/11.6/solutions/unix/privilegedaccess/sudoers/collection/ux_makedirectory.md)
  – This job creates a temporary Enterprise Auditor directory on target Unix and Linux environments
  to be used by the UX_ParseSudoers job
- [UX_ParseSudeors Job](/docs/accessanalyzer/11.6/solutions/unix/privilegedaccess/sudoers/collection/ux_parsesudeors.md)
  – This job parses all rights granted via sudoers in the audited environment
