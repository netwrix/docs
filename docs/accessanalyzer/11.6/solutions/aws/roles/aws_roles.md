# AWS_Roles Job

The AWS_Roles job provides details on roles in the AWS IAM environment.

## Analysis Tasks for the AWS_Roles Job

Navigate to the **AWS** > **4.Roles** > **AWS_Roles** > **Configure** node and select **Analysis**
to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_Roles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/roles/rolesanalysis.webp)

The following analysis tasks are selected by default:

- Role Details – Provides detailed information on AWS Roles. Creates the AWS_Role_Details table
  accessible under the job’s Results node.
- Role Summary – Summarizes roles by AWS account. Creates the AWS_Role_Summary table accessible
  under the job’s Results node.

## Report for the AWS_Roles Job

In addition to the tables and views created by the analysis task, the AWS_Roles job produces the
following preconfigured report:

| Report | Description                                                       | Default Tags | Report Element                                                                                                                                                               |
| ------ | ----------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Roles  | This report provides details on roles in the AWS IAM environment. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top roles by account - Table – Shows roles by account - Table – Provides details on roles |
