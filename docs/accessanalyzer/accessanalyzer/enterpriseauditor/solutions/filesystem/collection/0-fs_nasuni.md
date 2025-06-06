# 0-FS\_Nasuni Job

The 0-FS\_Nasuni job is required in order to target Nasuni Edge Appliances. The job can be added from the Access Analyzer Instant Job Library. See the [Instant Job Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic to add this instant job to the 0.Collection job group.

__CAUTION:__ It is necessary to rename the job after it has been added to the 0.Collection job group from __FS\_Nasuni__ to __0-FS\_Nasuni__, so that it runs immediately after the 0-Create Schema job.

_Remember,_ the 0-FS\_Nasuni job must be assigned a custom host list containing all on-premise Nasuni Edge Appliances and cloud filers, and a custom Connection Profile containing the API Access Key and Passcode for each on-premise Nasuni Edge Appliance and cloud filer in the target environment. Nasuni API key names are case sensitive. When providing them, ensure they are entered in the exact same case as generated.

## Queries for the 0-FS\_Nasuni Job

The queries for the 0-FS\_Nasuni job use the PowerShell Data collector to gather system information, volume data, and share data from the Nasuni environment.

__CAUTION:__ Do not modify the queries. The queries are preconfigured for this job.

![Queries for the 0-FS_Nasuni Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/collection/fsnasuniquery.png)

The queries for the 0-FS\_Nasuni job are:

- SysInfo – Collects Nasuni system information
- Volumes – Collects Nasuni volume information
- Shares – Collects Nasuni CIFS/SMB share information
