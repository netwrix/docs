# 5.Policies Job Group

The 5.Policies job group provides details on AWS IAM policies including the various types of
policies, the permissions they grant, and where they are applied in the AWS organization.

![5.Policies Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.png)

The 5.Policies job group is comprised of:

- [AWS_CustomManagedPolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_custommanagedpolicies.md)
  – Provides details on customer managed policies created in the AWS Organization
- [AWS_InlinePolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_inlinepolicies.md)
  – Provides details on customer managed policies that are directly assigned to a user or group
- [AWS_ManagedPolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_managedpolicies.md)
  – Provides details on policies managed by Amazon in the AWS Organization
- [AWS_SensitivePolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_sensitivepolicies.md)
  – Provides details on users, groups, and roles as well as the policies granting them sensitive
  permissions
- [AWS_UnusedManagedPolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_unusedmanagedpolicies.md)
  – Provides details on customer managed policies that exist in the AWS Organization. Optionally,
  AWS managed policies can be included by changing the @IncludeAWSManaged parameter on the analysis
  task.
- [AWS_UserPolicies Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/aws/policies/aws_userpolicies.md)
  – Provides details outlining user policy assignment. This includes where the policy is assigned,
  directly or at a group level, and if the policy assignment has been duplicated.
