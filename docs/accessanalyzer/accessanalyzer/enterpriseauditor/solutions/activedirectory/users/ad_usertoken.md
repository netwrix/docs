# AD\_UserToken Job

The AD\_UserToken Job identifies and reports the number of SIDS and estimated token size associated with each user. Token bloat can lead to issues during login and can also cause applications that use Kerberos authentication to fail. See the Microsoft [Problems with Kerberos authentication when a user belongs to many groups](https://learn.microsoft.com/en-US/troubleshoot/windows-server/windows-security/kerberos-authentication-problems-if-user-belongs-to-groups) article for more information about estimated token size.

## Analysis Task for the AD\_UserToken Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_UserToken__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AD_UserToken Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/usertokenanalysis.png)

The default analysis tasks are:

- Calculate Token Size – Creates the SA\_AD\_UserTokens\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_UserToken Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Token | A user's token size is directly related to the number of SIDs associated with their user account, taking into account historical SIDs and effective membership. | None | This report is comprised of two elements:   - Stacked Bar Chart – Displays top users by estimated token size  - Table – Provides details on user tokens |
