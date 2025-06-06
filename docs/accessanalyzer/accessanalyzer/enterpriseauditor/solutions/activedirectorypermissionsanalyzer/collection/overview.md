# 0.Collection Job Group

The 0.Collection job group collects data on permissions applied to certificates, computers, groups, organizational units, and users. It is dependent on data collected by the .Active Directory Inventory job group. The jobs which comprise the 0.Collection job group process analysis tasks.

![0.Collection Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

The jobs in the 0.Collection job group are:

- [AD\_CertificateRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_certificaterights.md) – Collects all Active Directory permissions applied to certificate objects within the targeted domains
- [AD\_ComputerRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_computerrights.md) – Collects all Active Directory permissions applied to computer objects within the targeted domains
- [AD\_ContainerRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_containerrights.md) – Collects all Active Directory permissions applied to container objects within the targeted domains
- [AD\_DomainRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_domainrights.md) – Collects all Active Directory permissions applied to domain objects within the targeted domains
- [AD\_GroupRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_grouprights.md) – Collects all Active Directory permissions applied to group objects within the targeted domains
- [AD\_OURights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_ourights.md) – Collects all Active Directory permissions applied to group objects within the targeted domains
- [AD\_SiteRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_siterights.md) – Collects all Active Directory permissions applied to site objects within the targeted domains
- [AD\_UserRights Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/collection/ad_userrights.md) – Collects all Active Directory permissions applied to user objects within the targeted domains
