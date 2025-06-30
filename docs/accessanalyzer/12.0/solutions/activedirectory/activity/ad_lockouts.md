# Lockouts > AD_Lockouts Job

The **Lockouts** > **AD_Lockouts** Job provides a listing of all account lockouts. For any lockout
occurring in the past 30 days, failed authentications and host information is provided to aid
troubleshooting.

![AD_Lockouts Job in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/activedirectory/activity/lockoutsjobstree.webp)

**_RECOMMENDED:_** Schedule this job to run with the 0.Collection job group.

## Analysis Tasks for the AD_Lockouts Job

Navigate to the **Active Directory** > **6.Activity** > **Lockouts** > **AD_Lockouts** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_Lockouts Job](/img/product_docs/accessanalyzer/solutions/activedirectory/activity/lockoutsanalysis.webp)

The default analysis tasks are:

- Account Lockouts – Creates the SA_AD_AccountLockouts_Details view accessible under the job’s
  Results node
- Failed Authentications – Creates the SA_AD_AccountLockouts_FailedAutnentications table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_Lockouts Job produces the follow
pre-configured reports:

| Report   | Description                                                                                                                                                                        | Default Tags                                               | Report Elements                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lockouts | This report tracks all lockouts for user accounts. For any lockout occurring in the past 30 days, failed authentications and host information are provided to aid troubleshooting. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Table – Displays account lockouts details - Table –  Displays failed authentications in the past 30 days |
