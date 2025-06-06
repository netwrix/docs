# AD\_DCSummary Job

The AD\_DCSummary Job provides operational reporting related to the details collected for each domain controller. For each domain controller, the report identifies the FSMO role, whether it is a bridgehead server, whether it is a global catalog, and the time server it syncs to.

## Analysis Task for the AD\_DCSummary Job

Navigate to the __Active Directory > 5.Domains > AD\_DCSummary > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/domains/dcsummaryanalysis.png)

The default analysis tasks are:

- 1. List DCs
  - Creates the AD\_DCSummary\_List table accessible under the job’s Results node
  - Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis task, the AD\_DCSummary Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controllers Overview | This report identifies domain controllers' roles and attributes within each domain. | None | This report is comprised of two elements:   - Bar Chart – Displays domain controllers by domain  - Table – Provides details on domain controllers by domain |
