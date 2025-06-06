# 5.Probable Owner > SP\_ProbableOwner Job

The SP\_ProbableOwner Job aids in the identification of probable owners for Site Collections and Sites, which can be used for entitlement reviews. Probably Owner calculation is based on file ownership, management structure, and file activity. The goal of this report is to help you identify who most likely owns the SharePoint resource or at least someone who can tell you who does.

![5.Probable Owner > SP_ProbableOwner Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/probableownerjobstree.png)

The SP\_ProbableOwner Job is located in the 5.Probable Owner Job Group.

## Analysis Tasks for the SP\_ProbableOwner Job

Navigate to the __Jobs__ > __SharePoint__ > __5.Probable Owner__ > __SP\_ProbableOwner__ >__Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SP_ProbableOwner Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/probableowneranalysis.png)

The default analysis tasks are:

- Identify Probable Owners – Creates the SA\_SP\_SiteProbablyOwners\_Details table accessible under the job’s Results node

In addition to the table created by the analysis task which displays probable ownership, the SP\_ProbableOwner Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SharePoint Probable Ownership | This report identifies probable owners based on management structure, file ownership, and activity. | None | This report is comprised of one element:   - Table – Provides details on probable owners |
