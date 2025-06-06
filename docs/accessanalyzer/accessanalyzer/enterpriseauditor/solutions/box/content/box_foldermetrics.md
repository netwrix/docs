# Box\_FolderMetrics Job

The Box\_FolderMetrics Job offers insight into content sizing, staleness, and ownership of folders in the Box environment.

__NOTE:__ The staleness threshold can be customized within the __Folder Metrics Details__ analysis. Largest and smallest folder size thresholds can be configured in a similar way on their respective analysis tasks.

## Analysis Tasks for the Box\_FolderMetrics Job

Navigate to __Box__ > __2.Content__ > __Box\_FolderMetrics__ > __Configure__ node and select __Analysis__ to view analysis tasks.

__CAUTION:__ Most of these analysis tasks should never be modified and never be deselected.

![Analysis Tasks for the Box_FolderMetrics Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/box/content/foldermetricsanalysis.png)

The following analysis tasks are selected by default:

- Folder Metrics Details – Creates the Box\_FolderMetrics\_Details table accessible under the job’s Results node
  - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
  - See the [Customizable Analysis Tasks for the Box\_FolderMetrics Job](#Customizable-Analysis-Tasks-for-the-Box_FolderMetrics-Job) topic for additional information.
- Largest Folders – Creates the Box\_FolderMetrics\_Largest table accessible under the job’s Results node
- Smallest Non-Empty Folders – Creates the Box\_FolderMetrics\_Smallest table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box\_FolderMetrics Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest Folders | This report summarizes the Box content by folder size. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 largest folders - Table – Provides details on largest folders |
| Smallest Folders | This report summarizes the Box content by folder size. | None | This report is comprised of three elements:   - Bar Chart – Displays top 5 smallest folders with files - Table – Provides details on smallest folders with files - Table – Provides details on empty folders |

### Customizable Analysis Tasks for the Box\_FolderMetrics Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Folder Metrics Details | @STALE\_THRESHOLD | 30 | Consider content stale after 30 days |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for instructions on how to modify parameters.
