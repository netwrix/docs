# 0.Collection Job Group

The __Dropbox__ > __0.Collection__ job group scans the targeted Dropbox site using the DropboxAccess Data Collector. The collected data is then available to other job groups in the Dropbox solution and the Access Information Center for analysis.

![0.Collection Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

The 0.Collection job group is comprised of:

- [1-Dropbox\_Permissions Scan Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/1-dropbox_permissions_scan.md) – This job is responsible for scanning the target Dropbox site
- [1-Dropbox\_SDD Scan Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/1-dropbox_sdd_scan.md) – This job is responsible for scanning sensitive data in the target Dropbox site. The Sensitive Data Discovery Add-On is required to run this job. The Dropbox sensitive data Discovery Reports in the Access Information Center are also populated by this data. See the Resource Audits Overview topic in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.
- [2-Dropbox\_Permissions Bulk Import Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/2-dropbox_permissions_bulk_import.md) – This job is responsible for importing the collected data into the Access Analyzer database
- [2-Dropbox\_SDD Bulk Import Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/2-dropbox_sdd_bulk_import.md) – This job is responsible for importing the collected sensitive data into the Access Analyzer database. The Sensitive Data Discovery Add-On is required to run this job. The Dropbox sensitive data Discovery Reports in the Access Information Center are also populated by this data. See the Resource Audits Overview topic in the [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter) for additional information.

The relationship between the scan and bulk import jobs requires the following considerations:

- A scan job executed from an Access Analyzer Console must be followed by the corresponding bulk import job from the same Access Analyzer Console version
- Two scan jobs processing the same information, for example two 1-Dropbox\_Permissions Scan jobs, cannot be executed consecutively against the same target host. The corresponding bulk import job, for example 2-Dropbox\_Permissions Bulk Import job, must be executed in between.
- For the Dropbox Solution, the bulk import jobs require the same connection profile as used in the corresponding scan jobs

___RECOMMENDED:___ When running the sensitive data jobs, disable the permissions jobs, and vice versa.

_Remember,_ prior to running the Dropbox Solution for the first time, it is necessary to generate an access token to be used in the Connection Profile. This only needs to be done once. See the [Configure the Dropbox Access Query](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/dropbox/collection/1-dropbox_permissions_scan.md#Configure-the-Dropbox-Access-Query) topic for additional information.
