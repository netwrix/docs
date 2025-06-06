# 5.Policies Job Group

The 5.Policies job group provides details on AWS IAM policies including the various types of policies, the permissions they grant, and where they are applied in the AWS organization.

![5.Policies Job Group in the Jobs Tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

The 5.Policies job group is comprised of:

- [AWS\_CustomManagedPolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_custommanagedpolicies.md) – Provides details on customer managed policies created in the AWS Organization
- [AWS\_InlinePolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_inlinepolicies.md) – Provides details on customer managed policies that are directly assigned to a user or group
- [AWS\_ManagedPolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_managedpolicies.md) – Provides details on policies managed by Amazon in the AWS Organization
- [AWS\_SensitivePolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_sensitivepolicies.md) – Provides details on users, groups, and roles as well as the policies granting them sensitive permissions
- [AWS\_UnusedManagedPolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_unusedmanagedpolicies.md) – Provides details on customer managed policies that exist in the AWS Organization. Optionally, AWS managed policies can be included by changing the @IncludeAWSManaged parameter on the analysis task.
- [AWS\_UserPolicies Job](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/aws/policies/aws_userpolicies.md) – Provides details outlining user policy assignment. This includes where the policy is assigned, directly or at a group level, and if the policy assignment has been duplicated.
