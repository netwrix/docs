---
title: "Resource Type"
description: "Resource Type"
sidebar_position: 130
---

# Resource Type

In Identity Manager a resource type is a conceptual model used to categorize resources. It groups
together, with a meaningful name, resources sharing the same intent and the same authorization
system. Resource types are assigned directly to a resource rather than mapped to a role. A resource
type can be assigned manually, or configured to be assigned automatically via a resource type rule.

## Examples

The following example declares a new resource type to provision the LDAP service accounts:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="LDAP_Entry_ServiceEntry" DisplayName_L1="LDAP Entry (service)" Policy="Default" TargetEntityType="LDAP_Entry" Category="LDAP" SourceEntityType="Directory_Application" />
```

### ArgumentsExpression

This option is used for provisioning orders to compute useful arguments.

Most standard situations use only one workflow per action type on a resource (addition, update,
deletion). But in some more complex situations (like using multi records), several workflows are
available for one type of action. As the configuration JSON file of an InternalWorkflow connection
cannot contain expressions, a resource type can be configured with the ArgumentsExpression attribute
to explicit the arguments of provisioning orders, based on conditions and variables. See the
[InternalWorkflow](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/internalworkflow/index.md),
[Compute a Resource Type's Provisioning Arguments](/docs/identitymanager/saas/integration-guide/provisioning/argumentsexpression/index.md),
and [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topics for additional information.

The following example computes the identifier of the workflow to launch, based on the provisioning
order as a variable (the returned value depends here mostly on the type of change):

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="HR_Person_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" SourceEntityType="HR_Person" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
    
  if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone() {
    return null;
  }
  var arguments = new System.Collections.Generic.Dictionary<string, string>();
  var workflowIdentifier = "Directory_User_UpdateFromHR";
  if ((provisioningOrder.ChangeType.IsAdded()) || (provisioningOrder.HasChanged("Employee_Id") {
    workflowIdentifier = "Directory_User_StartInternalByHR";
  }
  else if (provisioningOrder.ChangeType.IsDeleted()) {
    workflowIdentifier = "Directory_User_DeleteFromHR";
  }
  arguments.Add("WorkflowIdentifier", workflowIdentifier);
  return arguments;" />
```

#### ResourceIdToCopy

Now consider a record creation for a given identity, inside a multi-record organization. Suppose
that records are defined by their position and location, while other properties are the same for all
records (usually the identity's personal data like the name and birth date). When creating a new
record for an existing identity, you will want to copy an existing record from the database to
modify only the values specific to the new record.

The following example computes the identifier of the record to copy, if the identity has already
any:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="HR_Person_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" SourceEntityType="HR_Person" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone() {
  return null;
}
var arguments = new System.Collections.Generic.Dictionary<string, string>();
if (provisioningOrder.TryGetScalar("EmployeeId", out var employeeId) && (employeeId != null)) {  
  var resources = queryHandler.Select<Directory_UserRecord>("Select Id Where EmployeeId="\" + employeeId.ToString() + "\"");
  if (resources.Any()) {
    arguments.Add("ResourceIdToCopy", resources.FirstOrDefault().Id.ToString());
  }
}  
return arguments;" />
```

### DependsOn

This option is used to configure another resource type as prerequisite for this resource type.

For example, a Microsoft Exchange account requires the email address of a related Active Directory
account.

In this case, we want to configure the Exchange Account resource type so that a user cannot own an
Exchange account when they do not own an AD account.

The following example is meant to perform an automatic check to prevent the execution of any
provisioning order for the creation of an Exchange account when the user does not own an AD
nominative account.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="Exchange" DisplayName_L1="Exchange Account" Policy="Default" TargetEntityType="Exchange" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="ManualAssignmentNotAllowed" DependsOn="AD_Entry_NominativeUser">
```

### DependsOnOwnerProperty

This option is used to configure a property as prerequisite for the resource type.

Consider an Active Directory administrator account which should be able to perform manual
provisioning to ServiceNow. Then it requires the random identifier computed by ServiceNow.

In this case, we want to configure the AD_Entry_AdministrationUser resource type so that a user
cannot own an AD administrator account when they do not have an identifier in ServiceNow.

:::note
The DependsOnOwnerProperty of a resource type should only refer to scalar values that are
part of the properties of the SourceEntityType.
:::


The following example is meant to perform an automatic check to prevent the execution of any
provisioning order for the creation of an AD administrator account when the user does not have an
identifier in ServiceNow.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_AdministrationUser" DisplayName_L1="AD User (Administration)" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="ManualAssignmentNotAllowed" DependsOnOwnerProperty="ServiceNow:identifier">
```

### DiscardManualAssignments

This option is used to set Identity Manager as authoritative following a manual change in a managed
system.

Suppose a resource type managing the provisioning of Active Directory nominative accounts based on
users data in Identity Manager (Directory_User). Suppose a scalar rule that provisions the AD's sn
property based on users' last names.

The following scenario is about a user named Cedric Blanc, whose AD's sn property is set by the
scalar rule to Blanc.

![Example - State 0](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state0_v602.webp)

Let's see what happens when the user's name is changed manually directly in the AD.

Suppose that we change in the AD the last name to White. As the scalar rule computes the sn value
based on the user's data which still states the last name Blanc, such a change induces a difference
between the value calculated by the rule and the actual value in the AD. This difference is spotted
by the next synchronization, triggering a non-conforming assignment on the Resource Reconciliation
page.

![Example - State 1](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state1_v602.webp)

![Example - Step 1](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_step1_v602.webp)

![Example - Step 2](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_step2_v602.webp)

Once this manual new value is confirmed, the property is stated as **Approved**.

![Example - State 2](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state2_v602.webp)

Now suppose that the user's last name is changed to Black via Identity Manager's workflows. As the
source data is changed, the scalar rule computes a new value for sn. There are two options:

- The default configuration (DiscardManualAssignments set to false) considers manual assignments,
  i.e. changes made directly in the managed system, as authoritative. So there will be no
  provisioning of the newly computed value for sn. The current sn value that was written manually in
  the AD stays as is, no matter the changes in the source data (here the user's last name). Identity
  Manager only states the property's value as Questioned.

    ![Example - State 3](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state3_v602.webp)

    :::note
    No change in the source data can affect the property's value. However, any manual
    change made in the managed system will trigger a non-conforming assignment. Then, reconciling
    the property by choosing to keep Identity Manager's suggested value will make the property's
    value go back to Calculated and thus follow the changes in the source data.
    :::


    :::note
    If DiscardManualAssignments is changed from False to True, then the state of the
    property's value does not matter. Identity Manager applies the rules of the role model, and
    generates a provisioning order to overwrite the manual change White with the newly computed
    value Black.
    :::


    ![Example - State 4](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_state4_v602.webp)

In this scenario for Cedric Blanc, these behaviors can be summed up like the following:

![Schema for DiscardManualAssignments](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/discardmanualassignments_schema.webp)

### Correlate Multiple Resources

With the **Correlation Multiple Resources** option, Identity Manager can link a single owner to
several existing target objects of the same resource type. This setting can be used in conjunction
with the **Suggest all resources** option to fine tune the behavior.

Below, we illustrate the different scenarios that are possible, taking into consideration whether a
resource type has previously been correlated to the owner or not.

![suggestallcorrelations-nnn](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nnn.webp)

- The value for both **Correlate Multiple Resources** and **Suggest All Correlations** is **No**
  there is no Resource already correlated so the first match with the highest confidence rate is
  **Correlated** if it is > 100 or **Suggested** if it is < 100. As for all other matches with lower
  confidence rate they will be ignored.

    ![suggestallcorrelations-nnn2](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nnn2.webp)

    If there are no Resources to be correlated with a confidence rate >100, the ones below with
    confidence rate below 100 are Suggested or Ignored.

    ![suggestallcorrelations-nny](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nny.webp)

- The value for both **Correlate Multiple Resources** and **Suggest All Correlations** is **No**
  there is one Resource already correlated so due to this all future correlations will be ignored.

    ![suggestallcorrelations-nyn](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nyn.webp)

- The value for **Correlate Multiple Resources** is **No**, **Suggest All Correlations** is **Yes**
  there is no Resource already correlated so all Resource Types will be **Suggested**.

    ![suggestallcorrelations-nyy](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-nyy.webp)

- The value for **Correlate Multiple Resources** is **No**, **Suggest All Correlations** **Yes**
  there is one Resource already correlated so the Resource Types that have a confidence rate `>100`
  will be **Suggested**. As for all other matches with lower confidence rate they will be ignored.

    ![suggestallcorrelations-ynn](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-ynn.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **No**,
  and there is no Resource already correlated so Resource Types that have a confidence rate `>100`
  will be **Correlated** and the ones `<100` will be **Suggested** if there are no higher matches
  otherwise they will be ignored.

    ![suggestallcorrelations-ynn2](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-ynn2.webp)

    If there are no Resources to be correlated with a confidence rate `>100`, the ones with
    confidence rate below 100 are Suggested.

    ![suggestallcorrelations-yny](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-yny.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **No**
  there is one Resource already correlated so the matches with confidence rate `>100` will be
  **Correlated** and the ones `<100` will be ignored.

    ![suggestallcorrelations-yyny](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/suggestallcorrelations-yyny.webp)

- The value for **Correlate Multiple Resources** is **Yes**, **Suggest All Correlations** **Yes**
  one Resource could be already correlated or not so the matches with confidence rate `>100` will be
  **Correlated** and the ones `<100` will be **Suggested**.

## Properties

| Property                                                                                   | Type                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AllowAdd default value: true                                                               | Boolean                                    | Enables Identity Manager to automatically create new resources in the managed system when their owners are given the right entitlements. Otherwise, resource managers must create resources manually directly in the managed system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| AllowRemove default value: true                                                            | Boolean                                    | Enables Identity Manager to automatically deprovision resources in the managed system when their owners are deprived of the right entitlements. Otherwise, Identity Manager is able to delete resources in the managed system only with a manual approval on the Resource Reconciliation screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ApprovalWorkflowType default value: 0                                                      | ProvisioningPolicyApprovalWorkflow         | Indicates the number of validation to give to a role given manually (from None to Three). The value ManualAssignmentNotAllowed is used when a manual assignment cannot be performed. **NOTE:** Netwrix recommends using ManualAssignmentNotAllowed for all resource types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ArgumentsExpression optional                                                               | String                                     | **NOTE:** C# expression used to compute the arguments of provisioning orders, for example a workflow identifier, in a situation where it is not obvious. The aim is to enable an InternalWorkflow connector to fulfill correctly a virtual managed system by launching the right workflows based on a given provisioning order. This expression must return a dictionary of string. **NOTE:** ArgumentsExpression is useful only when provisioning via the following packages: Active Directory, Apache Directory, Generic LDAP, Open LDAP, Oracle LDAP, Red Hat Directory Server and Workflow.                                                                                                                                                                                                                                                                         |
| BlockProvisioning default value: true                                                      | Boolean                                    | True to block the provisioning policy orders.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Category optional                                                                          | Int64                                      | Resource type category.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| CorrelateMultipleResources default value: false                                            | Boolean                                    | True to extend the QueryRule/CorrelationRule to match as many target resources as possible (no blocking like this is normally the case).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DependsOn optional                                                                         | Int64                                      | Identifier of another resource type that must be provisioned for a given identity before the current resource type can be provisioned for said identity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DependsOnOwnerProperty optional                                                            | Int64                                      | Identifier of one of the owner properties that must be filled before the current resource type can be provisioned for said identity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description_L1 optional                                                                    | String                                     | Describe this resource type in detail.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DiscardManualAssignments default value: false                                              | Boolean                                    | True to always allow the provisioning of a new property value, i.e. re-computed by a provisioning rule after a change in the source data, no matter the property's current workflow state. Set to false, any manual change of a property's value made directly in the target system will be "protected" (only after the change is approved in Identity Manager in Resource Reconciliation). It means that a future change in the source data will not trigger the provisioning of the new value to the target system. Instead, Identity Manager will keep the value of the manual change, and state the value as **Questioned**. This option should be set to true when: \* using multiple authoritative sources and the latest value should be provisioned; \* a source system is not often synchronized to Identity Manager but should stay the authoritative source. |
| DisplayName_L1 required                                                                    | String                                     | Display name of the resource type in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| FulfillHoursAheadOfTime default value: 0                                                   | Int32                                      | Anticipate resource fulfill order hours ahead of they start time. It is helpful for manual fulfillment and/or long fulfillment process. It differs from TimeOffset because the start date of the resource to fulfill is not impacted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| HideOnSimplifiedView default value: false                                                  | Boolean                                    | True to hide this resource type in the basket simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Identifier required                                                                        | String                                     | Unique identifier of the resource type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ImplicitApproval default value: 0                                                          | Byte                                       | Indicates if the validation steps of the resource type can be skipped. 0 - Inherited: implicit approval value in the associated policy. 1 - Explicit: all the workflow steps must be approved. 2 - Implicit: the workflow steps can be skipped if the requester has enough permissions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ManualAssignmentEndDateLockedToContextMode default value: ExplicitNotContextBoundByDefault | ManualAssignmentEndDateLockedToContextMode | The values are: 0 - ExplicitNotContextBoundByDefault — By default, the assignment's end date will not be context bound in order to encourage the manual entry of an end date 1 - ExplicitContextBoundByDefault — By default, the assignment's end date will be context bound and therefore locked, but a manual date can be entered. 2 - Never — The assignment's end date will never be locked and needs to be specified manually 3 - Always — The assignment's end date is always locked according to the applicable context rule.                                                                                                                                                                                                                                                                                                                                    |
| MaximumDelete default value: 0                                                             | Int32                                      | Deleted lines threshold. Sets the maximum number of resources that can be removed from the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| MaximumDeletePercent default value: 30                                                     | Int32                                      | Deleted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| MaximumInsert default value: 0                                                             | Int32                                      | Inserted lines threshold. Sets the maximum number of resources that can be added into the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| MaximumInsertPercent default value: 30                                                     | Int32                                      | Inserted lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| MaximumUpdate default value: 0                                                             | Int32                                      | Updated lines threshold. Sets the maximum number of resources that can be modified within the resource type when running the provisioning job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MaximumUpdatePercent default value: 30                                                     | Int32                                      | Updated lines threshold in percent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| P0 default value: false                                                                    | Boolean                                    | True to indicate that the resource type is parametrized, i.e. there is at least one type rule configured to assign the resource type based on the dimension 0 (up to 3V following the base32hex convention). See the [Base32 Parameter Names](/docs/identitymanager/saas/integration-guide/toolkit/parameter-names/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Policy required                                                                            | Int64                                      | Identifier of the policy that the resource type is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ProlongationWithoutApproval default value: 0                                               | ProlongationWithoutApproval                | Indicates whether the resource type can be extended without any validation. 0 - Inherited: gets the value from the policy. 1 - Enabled. 2 - Disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| R0 default value: false                                                                    | Boolean                                    | True to set the dimension 0 (up to 3V following the base32hex convention) as a required parameter when assigning the resource type. See the [Base32 Parameter Names](/docs/identitymanager/saas/integration-guide/toolkit/parameter-names/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| RemoveOrphans default value: false                                                         | Boolean                                    | True to authorize the deprovisioning of this resource when it does not have an owner. Can only be true when AllowRemove property is also true.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| SourceEntityType required                                                                  | Int64                                      | Identifier of the source entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| SuggestAllCorrelations optionalAttribute                                                   | Boolean                                    | Allows correlation suggestions for rules with a confidence rate below 100, even if other correlations with a confidence rate above 100 have been found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TargetEntityType required                                                                  | Int64                                      | Identifier of the target entity type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TransmittedStateValidityPeriod default value: 0                                            | Int32                                      | Time period (in minutes) after which fulfillment orders in Transmitted/Executed states are automatically set in Error state. **_RECOMMENDED:_** - when provisioning automatically, then set 1, 2 or 3 times the period between two synchronizations. - when provisioning manually and synchronizing regularly, then set around 15 days. - when provisioning manually with few synchronizations, then don't set it.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Child Element: BinaryRule

A ResourceBinaryRule allows to specify the file that must be set to an assigned resource binary
property. It is defined by a child element `<BinaryRule>` of the `<ResourceType>` element. The
source file should already be synchronized and stored inside and reference as an EntityType
property.

### Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
    <ResourceType Identifier="AD_Entry_To_Directory_User" ...>    ...
    <BinaryRule Property="Photo" Binding="thumbnailPhoto" />  </ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding optional                           | Int64               | Defines the binding expression to get the file property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                          | Int64               | Identifier of the property used to represent the file on the target EntityType.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| SingleRole optional                        | Int64               | Identifier of the single role. The single role must be assigned to the owner so that the file can be provisioned on the resource. See the [Single Role](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| TimeOffsetAfterReference default value: 0  | Int32               | Defines the offset after reference (in minutes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| TimeOffsetBeforeReference default value: 0 | Int32               | Defines the offset before reference (in minutes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. **NOTE:** in a situation with several binary rules, the order of application is: After, then Before, then Around, then Default. Each rule is able to overwrite those previously applied in case they overlap. _Remember,_ two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: NavigationRule

A navigation rule computes the value of a given navigation property for target resources, based on
the properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system. Contrary to query rules, navigation rules assign
resources regardless of the attributes of source resources.

A navigation rule is defined by the child element `<NavigationRule>` of the `<ResourceType>`
element.

:::note
Both navigation and query rules compute navigation properties. The value of one navigation
property should be computed by either navigation or query rules, not both.
:::


See the
[Compute a Navigation Property](/docs/identitymanager/saas/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/index.md)
topic for additional information.

### Examples

**Computation based on other properties**

The following example declares a new rule to give the SG_APP_SharePoint_HR_Owner group to all users
who had the SharePoint_HR_Owner role.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<NavigationRule Property="memberOf" Resource="SG_APP_SharePoint_HR_Owner" SingleRole="SharePoint_HR_Owner" Policy="Default" />
```

The following rule will set users' Active Directory nominative account in the
CN=SG_APP_DL-INTERNET-Restricted,OU=Applications,DC=acme,DC=internal group for people having the
DL-INTERNET-Restricted role.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser">    ...
    <NavigationRule Property="memberOf" Resource="CN=SG_APP_DL-INTERNET-Restricted,OU=Applications,DC=acme,DC=internal" SingleRole="DL-INTERNET-Restricted" />
</ResourceType>
```

**Parametrized roles**

The role catalog can be optimized by reducing the number of roles, by configuring parametrized
roles. See the
[Configure a Parametrized Role](/docs/identitymanager/saas/user-guide/optimize/parameterized-role/index.md)topic
for additional information.

This optimization will simplify the functional understanding of the role catalog, and speed up
Identity Manager's calculations.

Supposing that the 10th dimension (dimension A following the base32hex convention) is created for
time slots, the following example creates a single role Access/A_Brune_HR for all time slots. Each
time-slot-related entitlement will be assigned to users by configuring one navigation rule per
entitlement, using the dimension as a required parameter. See the
[Dimension](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md) and
[Base32 Parameter Names](/docs/identitymanager/saas/integration-guide/toolkit/parameter-names/index.md)topics for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<SingleRole Identifier="Access/A_Brune_HR" DisplayName_L1="Zone - Brune - HR" DisplayName_L2="Zone - Brune - RH" Category="Access" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" RA="1" /><ResourceType ... >    <NavigationRule Property="TimeSlot" Resource="TS_5/7_8/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_8/24" />    <NavigationRule Property="TimeSlot" Resource="TS_5/7_12/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_12/24" />    <NavigationRule Property="TimeSlot" Resource="TS_7/7_24/24" SingleRole="Access/A_Brune_HR" DA="TS_7/7_24/24" /></ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D0 optional                                | Int64               | Value to match for the dimension D0 (up to D127) to trigger the rule. For example, considering that D0 corresponds to users' countries, then set D0 to France to compute the navigation property for users whose country is France. **NOTE:** Specifying at least one dimension makes the linked role parametrized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| IsDenied default value: false              | Boolean             | True to forbid the resource assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| L0 default value: false                    | Boolean             | True to activate inheritance for D0 (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Property required                          | Int64               | Identifier of the navigation property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Resource required                          | Int64               | Identifier of the resource to be assigned as a value of the impacted navigation property. Said resource must be part of the entity type that the navigation property points to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SingleRole optional                        | Int64               | Identifier of a single role, which users must have to trigger the property computation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TimeOffsetReference default value: 0       | TimeOffsetReference | _Remember,_ Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several navigation rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap, for mono-valued properties. _Remember,_ two offsets of the same mode should never overlap for mono-valued properties. Overlapping rules on a multi-valued property do not conflict with each other, Identity Manager stores all computed values. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: QueryRule

A query rule computes the value of a given navigation property for target resources, based on the
properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system. Contrary to navigation rules, query rules assign
resources to target resources according to a query via a C# expression with conditions, based on the
attributes of the source resources. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for
additional information.

A query rule is defined by the child element `<QueryRule>` of the `<ResourceType>` element.

Both navigation and query rules compute navigation properties. The value of one navigation property
should be computed by either navigation or query rules, not both.

See the
[Compute a Navigation Property](/docs/identitymanager/saas/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/index.md)
topic for additional information.

### Examples

**Computation based on other properties**

The following example declares a new rule to compute the parent distinguished name for guest users.
Here we do not use source properties, but a literal expression for all guest users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_Guest">    ...
    <QueryRule Property="parentdn" Policy="Default" TargetBinding="AD_Entry:dn" SourceExpression="C#:resource:return "OU=Guests,DC=acme,DC=internal";" TargetMatchedConfidenceLevel="100" />
</ResourceType>
```

### Properties

| Property                                      | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy required                               | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                             | Int64               | Identifier of the navigation property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| SourceBinding optional                        | Int64               | Binding of the property from the source entity type to be compared with the target binding/expression, in order to find a matching resource to be the value of Property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| SourceExpression optional                     | String              | C# expression to compare with the target binding/expression in order to compute the value of Property with the matching resource. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| TargetBinding optional                        | Int64               | Binding of the property from the entity type pointed by Property, which will be the value of Property if it matches the source binding/expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TargetExpression optional                     | String              | C# expression to compare with the source binding/expression in order to compute the value of Property with the matching resource.See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information. **_RECOMMENDED:_** The TargetExpression must contain at least one target property, it cannot be a literal expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| TargetMatchedConfidenceLevel default value: 0 | Int32               | Percentage rate expressing the confidence in the rule according to data quality and sensitivity. Identity Manager considers the rules in descending order of confidence rate, the first matching rule is applied. 0 to 99: imposes that a resource manager reviews the property computation on the Resource Reconciliation page. 100 to 150: computes the property automatically.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TimeOffsetAfterReference default value: 0     | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TimeOffsetBeforeReference default value: 0    | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| TimeOffsetReference default value: 0          | TimeOffsetReference | TypeDescriptionOffset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several query rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap, for mono-valued properties. two offsets of the same mode should never overlap for mono-valued properties. Overlapping rules on a multi-valued property do not conflict with each other, Identity Manager stores all computed values. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: ScalarRule

A scalar rule computes the value of a given scalar property for target resources, based on the
properties of their owners (source resources and entitlements). These properties are to be
provisioned, i.e. written to the managed system.

A scalar rule is defined by the child element `<ScalarRule>` of the `<ResourceType>` element.

See the
[Compute a Scalar Property](/docs/identitymanager/saas/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/index.md)
topic for additional information.

### Examples

**Computation based on other properties**

The following example shows two scalar rules. The first one computes users' emails based on AD
values. The other one contains a C# expression to compute AccountExpires.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="Bot">    ...
    <ScalarRule Property="Mail" Binding="AD_Entry:mail" Policy="Default" />  
    <ScalarRule Property="accountExpires" Expression="C#:person:return !person.EndDate.HasValue ? null : person.EndDate.Value.ToSince1601DateString();" />
</ResourceType>
```

The next example computes the firstName property of a App1_Account from the resource type
App1_Standard_Account, indicating that it must be equal to the firstName of the source resource.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">    ...
    <ScalarRule Property="firstName" Binding="User:FirstName" />
</ResourceType>
```

**Computation via a literal expression**

The following example translates to "the userAccountControl property of a App1_Account of resource
type App1_Standard_Account must be equal to 66048. It uses a literal expression. See the
[Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="Bot">    ...
    <ScalarRule Property="userAccountControl" Expression="Literal:66048" />
</ResourceType>
```

**Binding**

The Binding attribute complies with the binding expression syntax or the calculation expression
syntax. So, it can use the C# language to specify a more complex binding. See the
[Bindings](/docs/identitymanager/saas/integration-guide/toolkit/bindings/index.md) and [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topics for
additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="email" Binding="C#:user:user.firstName+"."+user.lastName+"@acme.com"" />
```

**IsMapped**

Consider a system that we want to connect to Identity Manager, let's call it SYST, using a title
property. Consider also that SYST needs to be provisioned with the value of title, but does not
allow any other system to retrieve the said value.

In this case, we set `IsMapped` to false so that Identity Manager sends the adequate provisioning
order when needed, and then is able to change the provisioning state to **Executed** without
synchronization. See the [Provision](/docs/identitymanager/saas/user-guide/administrate/provisioning/index.md)
[Synchronize Data](/docs/identitymanager/saas/user-guide/set-up/synchronization/index.md) topic for additional
information.

The following example computes users' title in a given managed system, based on Identity Manager's
`PersonalTitle` property without ever retrieving the value:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScalarRule Property="title" Binding="PersonalTitle" IsMapped="false" />
```

**TimeOffset**

A scalar rule is applied according to reference start and end dates (configured through record
sections and context rules), usually users' arrival and departure days. It means that, for a user
matching the rule's criteria, a property is to be computed, by default, from the user's arrival day
until their departure day. See the [Record Section](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/recordsection/index.md) and
[Context Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/contextrule/index.md) topics for additional information.

![Schema - Default Application Period](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetdefault.webp)

A time offset adjusts the period for which the rule applies and computes a property's value.

The following example impacts the property for the activation of nominative AD accounts:

- The first rule deactivates the account from its creation, i.e. 1 month before the user's arrival
  day, until the arrival day;
- The second rule activates the account from the user's arrival day until their departure;
- The third rule deactivates the account from the user's departure day and until its deletion, i.e.
  6 months after the departure day.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="None">    <ScalarRule Property="accountEnabled" Expression="C#:person:return &quot;false&quot;;" TimeOffsetReference="Before" TimeOffsetBeforeReference="-43200" TimeOffsetAfterReference="0" />    <ScalarRule Property="accountEnabled" Expression="C#:person:return person.Leave.GetValueOrDefault() ? &quot;false&quot; : &quot;true&quot;;" TimeOffsetReference="Around" TimeOffsetBeforeReference="0" TimeOffsetAfterReference="0" />    <ScalarRule Property="accountEnabled" Expression="C#:person:return &quot;false&quot;;" TimeOffsetReference="After" TimeOffsetBeforeReference="0" TimeOffsetAfterReference="259200" />    ...
</ResourceType>
```

![Schema - Offset Application Period](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetexample.webp)

If the time period of property computation exceeds the limits of the period of resource type
assignment, then the period of resource type assignment is extended accordingly.

Note that the rules are applied in a specific order according to their offset reference: After,
Before, Around and Default. Each rule overwrites pre-existing values. Thus in case of overlapping
rules, Default-offset rules overwrite the values of Around-offset rules, which overwrite the values
of Before-offset rules, which overwrite the values of After-offset rules. We could have the
following:

![Schema - Overlapping Offsets](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/datamodel_scalarrule_timeoffsetoverlap.webp)

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding optional                           | Int64               | Defines the binding expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ComparisonType default value: 0            | ComparisonType      | Defines the comparison type for the computed value, when Identity Manager retrieves it from the managed system during synchronization, and compares it to the value stored in Identity Manager's database. 0 - CaseSensitive: compares words exactly as they are. 1 - IgnoreCase: ignores the difference between upper and lower case. 2 - IgnoreDiacritics: considers all letters with diacritics (é, à, ç) to be equivalent to their base letters (e, a, c...). 3 - Simplified: ignores diacritics, case and characters which are not letters. 4 - Approximate: does the same as Simplified but also ignores some spelling mistakes. Some letters are considered equivalent (Z and S, Y and I, W and V, K and C, SS and C). All H can be missing. A T, D or S can be missing at the very end. Finally, it ignores all duplicate letters (other than SS). There is no comparison for unmapped properties (IsMapped set to false).                                   |
| Expression optional                        | String              | Expression used to compute the target property specified in Property. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information. _Remember,_ for C# expressions, Identity Manager provides an implicit variable called "assignment" that contains basic information about the linked assigned resource type, i.e. StartDate, EndDate and ParametersValues.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| IsMapped default value: true               | Boolean             | True to use the scalar rule's computation to both provision the managed system and synchronize the property back to Identity Manager, thus both create and update. Otherwise, the scalar rule's computation is used only to provision the managed system and the property will be ignored during synchronization, thus create only. This way the property can never be displayed as non-conforming. IsMapped is usually set to false in order to adapt the configuration to the constraints of the managed system, when Identity Manager does not retrieve and/or update the property value.                                                                                                                                                                                                                                                                                                                                                                         |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Property required                          | Int64               | Identifier of the scalar property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SingleRole optional                        | Int64               | Identifier of a single role that users must have to trigger the property computation. _Remember,_ scalar rules must not be dependent on dimensions or role as far as possible as, according to Identity Manager, a good rights policy must be based on group membership and not on mono-valued properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: the offset inherited from the type rule. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. **NOTE:** in a situation with several scalar rules, the order of application is: After, then Before, then Around, then Default. Each rule is able to overwrite those previously applied in case they overlap. _Remember,_ two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |

## Child Element: TypeRule

A resource type rule assigns resources to given users if they match specific criteria. These
resources are to be provisioned, i.e. written to the managed system.

A resource type rule is defined by the child element `<TypeRule>` of the `<ResourceType>` element.

:::note
The specification of several resource type rules for one resource type implies the union
of all rules, i.e. the combination of all rules (and all sets of criteria) with an OR operator.
:::


### Examples

**With a dimension criterion**

The following rule will assign an App1_Standard_Account resource (resource of type App1_Account) to
any User whose organization dimension (dimension binded to column 0) identifier is Marketing.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">
    <TypeRule D0="Marketing">
    ...
</ResourceType>
```

**With a single role criterion**

In addition to dimensions, a single role can be used as a criterion for a rule.

The following rule will assign an App1_Standard_Account resource to all User whose organization
dimension identifier is Marketing and having the single role Multimedia_Designer.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Policy="Default" Identifier="App1_Standard_Account" TargetEntityType="App1_Account" SourceEntityType="User">
    <TypeRule D0="Marketing" SingleRole="Multimedia_Designer">
    ...
</ResourceType>
```

**Without any criterion**

Di and SingleRole conditions are not mandatory. A type rule with no condition entails the creation
of an AssignedResourceType, and hence of a target resource (from the target entity type), for every
source resource (from the source entity type). See the AssignedResourceType topic for additional
information.

The following example declares a new rule to give the resource type "AD_Entry_NominativeUser" to all
users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceType Identifier="AD_Entry_NominativeUser" Policy="Default" TargetEntityType="AD_Entry" Category="Accounts" SourceEntityType="Directory_User" Type="Suggested" ApprovalWorkflowType="None">
    <TypeRule Policy="Default" />
    ...
</ResourceType>
```

### Properties

| Property                                   | Type                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D0 optional                                | Int64               | Value to match for the dimension D0 (up to D127) to trigger the rule. For example, considering that D0 corresponds to users' countries, then set D0 to France to assign the resource type to users whose country is France. **NOTE:** specifying at least one dimension makes the linked resource type parametrized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| IsDenied default value: false              | Boolean             | True to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| L0 default value: false                    | Boolean             | True to activate inheritance for D0 (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Policy required                            | Int64               | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SingleRole optional                        | Int64               | Identifier of a single role, which users must have to trigger the resource type assignment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| TimeOffsetAfterReference default value: 0  | Int32               | Time period (in minutes) after the reference end date, which shifts the end of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| TimeOffsetBeforeReference default value: 0 | Int32               | Time period (in minutes) after the reference start date, which shifts the start of the rule's application. A negative value for the time offset means that the time period is before the reference date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| TimeOffsetReference default value: 0       | TimeOffsetReference | Offset mode defining which dates to use as references, in order to apply the time offset. The time period for which the rule is applied is adjusted accordingly. 0 - Default: no offset. 1 - Around: the offset before reference is applied from the start date of the resource, and the offset after reference is applied from the end date. 2 - Before: the offset before and after reference are both applied from the start date of the resource. 3 - After: the offset before and after reference are both applied from the end date of the resource. In a situation with several resource type rules, the order of application is descending (After-Before-Around-Default). Thus each time offset is able to overwrite those previously applied in case they overlap. two offsets of the same mode should never overlap. Resources' start and end dates can be configured through record sections and/or context rules. |
| Type default value: 0                      | RuleType            | Represents the type of the rule. 0 - Required: the resource type is automatically assigned to users matching the criteria. 1 - Requested Automatically: the resource type is listed in the permission basket of new workers. These assignments can still be modified. For existing workers, the rule's type is Suggested. 2 - Suggested: the resource type is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request. Suggested assignments must be selected manually to be requested, and will go through the validation process.                                                                                                                                                                                                                                                                                                                          |
