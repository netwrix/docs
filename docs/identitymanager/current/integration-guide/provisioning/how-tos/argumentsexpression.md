# Compute a Resource Type's Provisioning Arguments

This guide gives examples to understand how to configure a resource type's `ArgumentsExpression` attribute to compute a resource type's provisioning arguments, for example the identifier of the workflow to launch, or the identifier of the record to copy.

## Examples

This option is used to use provisioning orders to compute useful arguments.

Most standard situations use only one workflow per action type on a resource (addition, update, deletion). But in some more complex situations (like using multi records), several workflows are available for one type of action. As the configuration JSON file of an [InternalWorkflow](../../../integration-guide/connectors/references-connectors/internalworkflow) connection cannot contain expressions, a resource type can be configured with the `ArgumentsExpression` attribute to explicit the arguments of provisioning orders, based on conditions and variables.

The following example computes the identifier of the workflow to launch, based on the provisioning order as a variable (the returned value depends here mostly on the type of change):

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

Now consider a record creation for a given identity, inside a multi-record organization. Suppose that records are defined by their position and location, while other properties are the same for all records (usually the identity's personal data like the name and birth date). When creating a new record for an existing identity, you will want to copy an existing record from the database to modify only the values specific to the new record.

The following example computes the identifier of the record to copy, if the identity has already any:

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

**return arguments;" />**
```

## Attributes Provided by Usercube

 | Name | Details | 
 | --- | --- | 
 | ProvisioningOrder.ChangeType | **Type** String **Description** Action of the provisioning order. | 

## Methods Provided by Usercube

 | Name | Details | 
 | --- | --- | 
 | IsNone | **Type** Boolean **Usage** provisioningOrder.ChangeType.IsNone() **Description** `True` when the provisioning order demands no change. **Note:** this method can be used only on `ChangeType`. | 
 | IsAdded | **Type** Boolean **Usage** provisioningOrder.ChangeType.IsAdded() **Description** `True` when the provisioning order demands a resource addition. **Note:** this method can be used only on `ChangeType`. | 
 | IsUpdated | **Type** Boolean **Usage** provisioningOrder.ChangeType.IsUpdated() **Description** `True` when the provisioning order demands a resource update. **Note:** this method can be used only on `ChangeType`. | 
 | IsDeleted | **Type** Boolean **Usage** provisioningOrder.ChangeType.IsDeleted() **Description** `True` when the provisioning order demands a resource deletion. **Note:** this method can be used only on `ChangeType`. | 
 | HasChanged | **Type** Boolean **Usage** provisioningOrder.HasChanged("PropertyName") **Description** `True` when the provisioning order demands a change on a given property. | 
 | TryGetScalar | **Type** Boolean **Usage** provisioningOrder.TryGetScalar("PropertyName", out var myChange) **Description** `True` when `PropertyName` is a scalar property whose value is changed by the provisioning order. `myChange` takes the new value of `PropertyName` changed by the provisioning order. | 
 | TryGetAddedNavigations | **Type** Boolean **Usage** provisioningOrder.TryGetAddedNavigations("PropertyName", out var myChanges) **Description** `True` when `PropertyName` is a navigation property to which new values are added by the provisioning order. `myChanges` takes the list of values of `PropertyName` added by the provisioning order. | 
 | TryGetRemovedNavigations | **Type** Boolean **Usage** provisioningOrder.TryGetRemovedNavigations("PropertyName", out var myChanges) **Description** `True` when `PropertyName` is a navigation property from which some values are removed by the provisioning order. `myChanges` takes the list of values of `PropertyName` removed by the provisioning order. | 

