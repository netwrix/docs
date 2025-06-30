# 7.Containers Job Group

The 7.Containers Job Group reports on all Active Directory permissions applied to container objects
within the targeted domains.

![7.Containers Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the 7.Containers Job Group are:

- [AD_AdminSDHolder Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/ad_adminsdholder.md)
  – Reports on all non-default Active Directory permissions applied to the AdminSDHolder container
  within the targeted domains. The AdminSDHolder container can be leveraged by an attacker to create
  persistence within the environment. See the Microsoft
  [AdminSDHolder, Protected Groups and SDPROP](https://technet.microsoft.com/en-us/library/2009.09.sdadminholder.aspx)
  article for additional information.
- [AD_ContainerPermissions Job](/docs/accessanalyzer/11.6/solutions/activedirectorypermissionsanalyzer/containers/ad_containerpermissions.md)
  – Reports on all Active Directory permissions applied to container objects within the targeted
  domains
