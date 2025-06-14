# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix
and Linux Environments.

![0.Collection Job Group in the Jobs Tree](../../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0.Collection job group are:

- [UX_MakeDirectory Job](ux_makedirectory.md) – This job creates a temporary Access Analyzer
  directory on target Unix and Linux environments to be used by the UX_ParseSudoers job
- [UX_ParseSudeors Job](ux_parsesudeors.md) – This job parses all rights granted via sudoers in the
  audited environment
