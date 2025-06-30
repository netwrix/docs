# AD_PasswordStatus Job

The AD_PasswordStatus Job highlights potential issues with user password settings that may exploited
or compromised if not addressed.

## Analysis Tasks for the AD_PasswordStatus Job

Navigate to the **Active Directory** > **2.Users** > **AD_PasswordStatus** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigure for this job.

![Analysis Tasks for the AD_PasswordStatus Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/passwordstatusanalysis.webp)

The default analysis tasks are:

- Password Status Details – Creates the SA_AD_PasswordStatus_Details table accessible under the
  job’s Results node
- Domain Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD_PasswordStatus Job
produces the following pre-configured report:

| Report          | Description                                                                              | Default Tags | Report Elements                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Password Status | This report identifies the password status of all users and highlights potential issues. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays password issues by domain - Table – Provides details on users - Provides details on password issues by domain |
