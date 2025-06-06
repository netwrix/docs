# AD\_DeprovisionGroups Job

The AD\_DeprovisionGroups Job provides an automated workflow to deprovision stale groups. This workflow is completed by the action tasks.

__Step 1 –__ Move stale groups to a staging OU for deletion.

__Step 2 –__ The group is changed to a distribution list.

__Step 3 –__ The assigned manager is alerted by email of the impending deletion.

__Step 4 –__ The group is flagged as __To Be Deleted__.

__Step 5 –__ After a configurable amount of days in the staging OU, the group is deleted from the staging OU. The default is 365 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The AD\_DeprovisionGroups page has the following configurable parameters:

- Days in the Staging OU before deletion

See the [Customizable Analysis Parameters for the AD\_DeprovisionGroups Job](#Customizable-Analysis-Parameters-for-the-AD_DeprovisionGroups-Job) topic for additional information.

## Analysis Tasks for the AD\_DeprovisionGroups Job

Navigate to the __Active Directory__ > __Cleanup__ > __1.Groups__ > __1. Deprovision Groups__ > __AD\_Deprovision Groups__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionGroups Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsanalysis.png)

The default analysis tasks are:

- Identify Stale Groups – Creates the AD\_DeprovisionGroups\_Details table accessible under the job’s Results node
- Groups to Delete – Identifies groups in the Stale Groups OU that are ready to be deleted

  - This analysis task contains a configurable parameter: ```@days_before_deleting```. See the [Customizable Analysis Parameters for the AD\_DeprovisionGroups Job](#Customizable-Analysis-Parameters-for-the-AD_DeprovisionGroups-Job) topic for additional information.

### Customizable Analysis Parameters for the AD\_DeprovisionGroups Job

Customizable parameters enable you to set the values used to classify user and group objects during this job’s analysis.

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Groups to Delete | @days\_before\_deleting | 365 | Days in the staging OU before deletion |

See the [Configure the Customizable Parameters in an Analysis Task](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/analysiscustomizableparameters.md) topic for additional information.

## Action Tasks for the AD\_DepvisionGroups Job

Navigate to the __Active Directory__ > __Cleanup__ > __1.Groups__ > __1. Deprovision Groups__ > __AD\_DeprovisonGroups__ > __Configure__ node and select __Actions__ to view the action tasks.

__CAUTION:__ Do not enable the actions unless it is required. Disable the actions after execution to prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DepvisionGroups Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsaction.png)

The action tasks are:

__CAUTION:__ The action tasks must be executed together and in order.

- Move Groups – Move groups to staging OU

  - The target staging OU must be set in the Move Groups Action Task prior to executing the action tasks. See the [Configure the Target OU](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/cleanup/configuretargetou.md) topic for additional information.
- Disable Groups – The group is changed to a distribution list
- Notify Manager – Notify assigned manager by email of the impending deletion
- Update Description – The group is changed to a distribution list to prevent its use for authentication and flagged as __To Be Deleted__
- Delete Groups – After a configurable amount of days in the staging OU, the group is deleted. The default is 365 days.

After the ```@days_before_deleting``` analysis parameter has been configured and the target OU has been set in the Move Groups Action Task, select the checkboxes next to all of the action tasks and click __Execute Action__ to execute the action tasks.
