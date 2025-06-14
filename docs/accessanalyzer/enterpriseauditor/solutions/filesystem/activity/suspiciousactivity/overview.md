# Suspicious Activity Job Group

The Suspicious Activity job group is designed to report on potentially suspicious activity event
information from targeted file servers.

![Suspicious Activity Job Group in the Jobs Tree](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The Suspicious Activity job group is comprised of:

- [FS_DeniedActivity Job](fs_deniedactivity.md) – Designed to report on denied activity event
  information from targeted file servers

    - Requires **Access Auditing** component data collection

    [FS_HighestHourlyActivity Job](fs_highesthourlyactivity.md) – Designed to report on the highest
    hourly activity event information from targeted file servers broken down by user

    - Includes a Notification analysis task option
    - Requires **Access Auditing** component data collection

- [FS_HourlyShareActivity Job](fs_hourlyshareactivity.md) – Designed to report on the highest hourly
  activity event information from targeted file servers broken down by share

    - Requires **Access Auditing** component data collection

- [FS_ModifiedBinaries Job](fs_modifiedbinaries.md) – Designed to report on activity event
  information where binaries were modified from targeted file servers

    - Requires **Access Auditing** component data collection

- [FS_PeerGroupActivity Job](fs_peergroupactivity.md) – Designed to report on abnormal activity
  event information based on peer group analysis from targeted file servers

    - Requires **Access Auditing** component data collection
    - Requires Ownership be assigned within the Access Information Center. See the Resource Owners
      Overview topic in the
      [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
      for additional information.

- [FS_Ransomware Job](fs_ransomware.md) – Designed to report on potential ransomware activity event
  information based on file extensions and large number of modified file events from targeted file
  servers
- [FS_SensitiveDataActivity Job](fs_sensitivedataactivity.md) – Designed to report on activity event
  information on resources identified to contain sensitive information from targeted file servers

    - Requires **Access Auditing** component data collection
    - Requires **Sensitive Data Discovery Auditing** component data collection

- [FS_StaleFileActivity Job](fs_stalefileactivity.md) – Designed to report on user activity event
  information involving stale files from targeted file servers
- [FS_UserShareActivity Job](fs_usershareactivity.md) – Designed to report on normal user activity
  within a share from targeted file servers

    - Requires **Access Auditing** component data collection

- [FS_WeekendActivity Job](fs_weekendactivity.md) – Designed to report on activity events that occur
  over the weekend from targeted file servers

    - Requires **Access Auditing** component data collection
