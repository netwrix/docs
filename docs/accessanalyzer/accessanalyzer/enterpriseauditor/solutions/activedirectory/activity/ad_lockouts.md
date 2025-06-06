# Lockouts > AD\_Lockouts Job

The __Lockouts__ > __AD\_Lockouts__ Job provides a listing of all account lockouts. For any lockout occurring in the past 30 days, failed authentications and host information is provided to aid troubleshooting.

![AD_Lockouts Job in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/lockoutsjobstree.png)

___RECOMMENDED:___ Schedule this job to run with the 0.Collection job group.

## Analysis Tasks for the AD\_Lockouts Job

Navigate to the __Active Directory__ > __6.Activity__ > __Lockouts__ > __AD\_Lockouts__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_Lockouts Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/lockoutsanalysis.png)

The default analysis tasks are:

- Account Lockouts – Creates the SA\_AD\_AccountLockouts\_Details view accessible under the job’s Results node
- Failed Authentications – Creates the SA\_AD\_AccountLockouts\_FailedAutnentications table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_Lockouts Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Lockouts | This report tracks all lockouts for user accounts. For any lockout occurring in the past 30 days, failed authentications and host information are provided to aid troubleshooting. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Table – Displays account lockouts details  - Table –  Displays failed authentications in the past 30 days |
