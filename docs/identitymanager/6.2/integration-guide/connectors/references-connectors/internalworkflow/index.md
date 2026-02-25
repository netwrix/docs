---
title: "InternalWorkflow"
description: "InternalWorkflow"
sidebar_position: 90
---

# InternalWorkflow

This connector triggers workflows in Identity Manager for a system's provisioning orders.

This page is about Identity Manager Internal Workflow. See the
[Workflow](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/workflow/index.md) topic for additional information.

![Package: Usercube/Workflow](/images/identitymanager/integration-guide/connectors/references-connectors/internalworkflow/packages_workflow_v603.webp)

## Overview

This connector is singular because it does not connect Identity Manager to an external system.

Instead, it is made to read the provisioning orders of a given connector or resource type, and
launch specific workflows still within Identity Manager, depending on each order's type (creation,
update, deletion).

It works via a JSON file used to set the workflow to launch along with its arguments such as its
message and body.

## Prerequisites

Implementing this connector requires:

- Knowledge of the basic principles of Identity Manager's workflows. See the
  [Workflow](/docs/identitymanager/6.2/integration-guide/connectors/references-packages/workflow/index.md) topic for additional information.
- Configuring in Identity Manager the workflows for the arrival of a new user, the update of a
  pre-existing user, and for the departure of a user

## Export

There are no export capabilities for this connector.

## Fulfill

This connector retrieves the files containing provisioning orders that correspond to a given list of
connectors or resource types, and then starts workflows according to the type of the provisioning
orders (Added, Modified, Deleted) found in the JSON files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
appsettings.agent.json > **Connections** section:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

:::note
The identifier of the connection and thus the name of the subsection must:
:::


- be unique
- not begin with a digit
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "HR_Person_To_Directory_UserRecord": {
        "WorkflowJsonPath": "<C:/identitymanagerOrganization/Conf/FulfillInternalWorkflow.json>"
    }
  }
}
```

The configuration setting must have the following attributes:

| Name                      | Type   | Description                                             |
| ------------------------- | ------ | ------------------------------------------------------- |
| WorkflowJsonPath required | String | Path of the JSON file used to configure this connector. |

**WorkflowJsonPath**

The file specified in WorkflowJsonPath must have a specific structure.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
FulfillInternalWorkflow.json
{
  "SourceEntityIdentifier": "Directory_UserRecord",
  "NavigationToTargetEntity": "User",
  "NavigationTargetToSource": "Records",
  "TargetEntityTypeIdentifier": "Directory_User",
  "FulfillInternalWorkflowConfigurations": [{
      "ChangeType": "Added",
      "Model": {
        "WorkflowIdentifier": "Directory_User_StartInternal",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow start: $Changes:LastName$ - $Changes:FirstName$, EmployeeId: $Changes:EmployeeId$",
        "Body": "body of workflow $Changes:EmployeeId$ - $Changes:Site.Label$"
      },
      "ScalarProperties": [
        "LastName",
        "FirstName",
        "ContractStartDate",
        "ContractEndDate"],
      "NavigationProperties": ["Category",
        "Service",
        "Site"]
    },
    {
      "ChangeType": "Modified",
      "Model": {
        "WorkflowIdentifier": "Directory_User_ChangeName",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow Update: $Resource:LastName$ - $Resource:FirstName$, EmployeeId: $Resource:EmployeeId$",
        "Body": "body of workflow Update for  $Resource:EmployeeId$ "
      },
      "ScalarProperties": ["FirstName",
        "LastName"]
    },
    {
      "ChangeType": "Deleted",
      "Model": {
        "WorkflowIdentifier": "Directory_User_End",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow end Directory_Person for $Resource:LastName$ - $Resource:FirstName$",
        "Body": "body if workflow end for $Resource:LastName$ - $Resource:FirstName$"
      },
      "DateProperties": ["ContractEndDate"]
    }
  ]
}

```

:::tip
Remember, as workflows' aspects are computed during the fulfill process, all the required
properties must be present in the provisioning order and in this JSON file.
:::


**Setting attributes**

The table below summarizes the setting attributes.

| Name                                | Type          | Description                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Body required                       | String        | Body of the message transmitted by the workflow.                                                                                                                                                                                                                                                                                                                    |
| ChangeType required                 | String        | Type of the provisioning order: Added; Modified; Deleted.                                                                                                                                                                                                                                                                                                           |
| DateProperties optional             | DateTime List | List of the properties corresponding to the dates that the workflow is to fill in. **NOTE:** When not specified and ChangeType is set to Deleted, then the dates are filled with the workflow's execution date.                                                                                                                                                     |
| Message required                    | String        | Message sent to the accounts impacted by the workflow.                                                                                                                                                                                                                                                                                                              |
| NavigationProperties optional       | String List   | List of the navigation properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                            |
| NavigationTargetToSource optional   | String        | Navigation property that makes the link from the target entity type to the source entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[Position Change via Records](/docs/identitymanager/6.2/integration-guide/identity-management/joiners-movers-leavers/position-change/index.md) topic for additional information. |
| NavigationToTargetEntity optional   | String        | Navigation property that makes the link from the source entity type to the target entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[Position Change via Records](/docs/identitymanager/6.2/integration-guide/identity-management/joiners-movers-leavers/position-change/index.md) topic for additional information. |
| ScalarProperties optional           | String List   | List of the scalar properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                                |
| SourceEntityIdentifier required     | String        | Identifier of the source entity type of the workflow.                                                                                                                                                                                                                                                                                                               |
| TransitionIdentifier required       | String        | Identifier of the workflow's transition after execution.                                                                                                                                                                                                                                                                                                            |
| TargetEntityTypeIdentifier required | String        | Identifier of the target entity type of the workflow.                                                                                                                                                                                                                                                                                                               |
| WorkflowIdentifier optional         | String        | Identifier of the workflow to be started. **NOTE:** Optional but recommended because it acts as default value when there is no related ArgumentsExpression or it does not return a valid identifier. See the[Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) topic for additional information.                                |

The table below summarizes the variables for messages and bodies.

| Name     | Type        | Description                                                                                                                                                                             |
| -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes  | String List | Prefix used to get data from the **Changes** section of the provisioning order. Example **Changes:LastName** retrieves the value of the **LastName** property from the order's changes. |
| Resource | String List | Prefix used to get data from Identity Manager's database. Example **Resource:LastName** retrieves the value of the **LastName** property from the database.                             |

### Output details

All three types of workflows (onboarding, update and off-boarding) can be completed with the fulfill
Internal Workflow.

## Authentication

See the following to figure out authentication.

**Password reset**

This connector does not reset passwords.

**Credential protection**

This connector has no credential attributes, and therefore does not use RSA encryption, nor a
CyberArk Vault. See the
[RSA Encryption](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md) and
[CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
topics for additional information.

Still, data protection can be ensured through an Azure Key Vault safe. See the
[Azure Key Vault](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)topic
for additional information.
