# AD_GroupProbableOwners Job

The AD_GroupProbableOwners Job determines potential owners for Active Directory Groups which can be
used to perform automated membership reviews and enable self-service group management and membership
requests.

## Analysis Tasks for the AD_GroupProbableOwners Job

Navigate to the **Active Directory** > **1.Groups** > **AD_GroupProbableOwners** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupProbableOwners Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/activedirectory/groups/groupprobableownersanalysis.webp)

The default analysis tasks are:

- Determine Ownership – Creates the SA_AD_GroupProbableOwner_Owners table accessible under the job’s
  Results node
- Domain Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_GroupProbableOwner Job
produces the following pre-configured report:

| Report          | Description                                                                                           | Default Tags | Report Elements                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Probable Owners | This report identifies the most probable manager or department, based on effective member attributes. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays top domains by blank manager field - Table – Provides details on probable ownership - Table – Provides summary of managers |
