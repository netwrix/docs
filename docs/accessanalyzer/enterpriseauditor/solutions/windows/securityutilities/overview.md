# Security Utilities Job Group

The Security Utilities job group is designed to reveal all open ports along with the associated
executable on the targeted systems. The job remotely executes a netstat command on the target hosts
and collects the results for reporting.

![Security Utilities Job Group in the Jobs Tree](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The jobs and job groups in the Security Utilities job group are:

- [OpenPortScan Job Group](openportscan/overview.md) – Reveals all open ports along with the
  associated executable on the targeted systems leveraging the jobs within this group. This is
  accomplished through remotely executing a netstat command on the target hosts and collecting the
  results for reporting.
- [SG_PowerShellCommands Job](sg_powershellcommands.md) – This job highlights instances where
  suspicious PowerShell commands have been found in a host’s PowerShell log
