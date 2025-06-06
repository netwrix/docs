# AAD\_ProbableOwners Job

The AAD\_ProbableOwners Job determines potential owners for Microsoft Entra ID Groups which can be used to perform automated membership reviews and enable self-service group management and membership requests.

## Analysis Tasks for the AAD\_ProbableOwners Job

Navigate to the __Jobs__ > __Entra ID__ > __1.Groups__ > __AAD\_ProbableOwners__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis tasks for AAD_ProbableOwners Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/entraid/groups/probableownersanalysis.png)

The default analysis tasks are:

- Calculates group probable owners – Creates the AAD\_ProbableOwners\_Details table accessible under the job’s Results node
- Summarizes group probable owners by domain – Creates the AAD\_ProbableOwners\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_ProbableOwners Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Probable Owners | This report identifies the most probable manager based on effective member attributes. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays top domains by blank manager field - Table – Provides probable owner details - Tables – Provides details on top domains by blank manager field |
