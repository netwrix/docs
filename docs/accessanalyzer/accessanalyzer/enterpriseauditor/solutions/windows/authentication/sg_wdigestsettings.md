# SG\_WDigestSettings Job

The SG\_WDigestSettings job lists WDigest settings on all targeted hosts. In particular, the UseLogonCredentials key is examined. If this key is not set properly for a given host, cleartext passwords will be stored in memory. See the [Microsoft Security Advisory](https://support.microsoft.com/en-us/help/2871997/microsoft-security-advisory-update-to-improve-credentials-protection-a) article for more information.

## Queries for the SG\_WDigestSettings Job

The SG\_WDigestSettings job uses the Registry and WMICollector Data Collectors for the following queries:

__CAUTION:__ The queries are preconfigured for this job. Never modify the queries.

![Queries for the SG_WDigestSettings Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/authentication/wdigestsettingsqueries.png)

The queries for the SG\_WDigestSettings job are:

- Check WDigest registry keys – Checks WDigest registry keys
- Installed Hotfixes – Returns all hotfixes installed
- OS Versions – Returns OS versions

## Analysis Tasks for the SG\_WDigestSettings Job

Navigate to the __Windows__ > __Authentication__ > __SG\_WDigestSettings__ > __Configure__ node and select __Analysis__.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SG_WDigestSettings Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/windows/authentication/wdigestsettingsanalysis.png)

The default analysis tasks are:

- Track changes – Creates the SG\_WDigestSettings\_ChangeTracking table accessible under the job’s Results node
- List WDigest setting details – Creates the SG\_WDigestSettings\_Details table accessible under the job’s Results node
- Summarize WDigest Settings – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the data collector, the SG\_WDigestSettings job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| WDigest Settings | This report summarizes WDigest registry settings on targeted hosts. See the [Microsoft Security Advisory](https://support.microsoft.com/en-us/help/2871997/microsoft-security-advisory-update-to-improve-credentials-protection-a) article for additional details. | None | This report is comprised of two elements:   - Pie Chart – Displays WDigest settings by host - Table – Provides WDigest setting details |
