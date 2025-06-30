# AD_UserAttributeCompletion Job

The AD_UserAttributeCompletion Job identifies which attributes are present within User fields in
Active Directory, and which ones are blank for a majority of objects. This may indicate accounts
within Active Directory which are lacking appropriate information.

## Analysis Tasks for the AD_UserAttributeCompletion Job

Navigate to the **Active Directory** > **2.Users** > **AD_UserAttributeCompletion** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_UserAttributeCompletion Job](/img/product_docs/accessanalyzer/11.6/solutions/activedirectory/users/userattributecompletionanalysis.webp)

The default analysis tasks are:

- Details – Creates an interim processing table in the database for use by downstream analysis and
  report generation
- User Details – Creates an interim processing table in the database for use by downstream analysis
  and report generation

In addition to the tables and views created by the analysis tasks, the AD_UserAttributeCompletion
Job produces the following pre-configured report:

| Report                    | Description                                                                                                                                     | Default Tags | Report Elements                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Attribute Completion | This report identifies which attributes are present within User fields in Active Directory, and which ones are blank for a majority of objects. | None         | This report is comprised of three elements: - Stacked Bar Chart – Displays completeness by attribute - Table – Provides details on users with blank attributes - Table –Provides details on completeness by attribute |
