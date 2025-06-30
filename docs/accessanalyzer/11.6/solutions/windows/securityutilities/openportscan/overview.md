# OpenPortScan Job Group

The OpenPortScan job group reveals all open ports along with the associated executable on the
targeted systems leveraging the jobs within this group. This is accomplished through remotely
executing a netstat command on the target hosts and collecting the results for reporting.

![OpenPortScan Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/securityutilities/openportscan/openportscanjobstree.webp)

_Remember,_ both jobs need to be assigned the same host list under the Host List Assignments node in
the OpenPortScan job group’s settings.

The jobs in the OpenPortScan job group are:

- [RemoteOpenPort Job](/docs/accessanalyzer/11.6/solutions/windows/securityutilities/openportscan/remoteopenport.md)
  – This job remotely executes `netstat -a -b -n` command to gather information about the available
  port on the targeted hosts
- [RetrieveNetstat Job](/docs/accessanalyzer/11.6/solutions/windows/securityutilities/openportscan/retrievenetstat.md)
  – This job reveals all open ports along with the associated executable on  targeted systems
