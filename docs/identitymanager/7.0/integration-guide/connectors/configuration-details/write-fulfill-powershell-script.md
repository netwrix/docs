---
title: "Write a PowerShell Script for Provisioning"
description: "Write a PowerShell Script for Provisioning"
sidebar_position: 100
---

# Write a PowerShell Script for Provisioning

This guide shows how to write a PowerShell script used by the [PowerShellProv](../../../integration-guide/connectors/references-connectors/powershellprov) connector.

## Structure of a PowerShell Script

The goal of the script is to append, for each provisioning order, a line in a CSV file.

Let's consider the following `ResourceType`:

```text
...
<ResourceType Identifier="PowerShellCsv_User_NominativeUser" DisplayName_L1="PowerShell CSV User (nominative)" DisplayName_L2="Utilisateur PowerShell CSV (nominatif)" Policy="Default" TargetEntityType="PowerShellCsv_User" Category="PowerShellCsv" SourceEntityType="Directory_User" RemoveOrphans="true" AllowAdd="true" AllowRemove="true">  <ScalarRule Property="identifier" Binding="EmployeeId"/>  <ScalarRule Property="firstName" Binding="FirstName"/>  <ScalarRule Property="lastName" Binding="LastName"/></ResourceType>...
```

The end of the CSV file must look like:

```text
command;identifier;firstName;lastName
...
insert;007;James;Bond
...
```

### Define the common part of every script

The goal of the common part is to get all required variables needed by the script.

Two parameters are required at the top of the script:

```text
param(
  [Parameter(Mandatory = $true)][string]$resultsFilePath,
  [Parameter(Mandatory = $true)][string]$ordersPath
)
```

- `resultsFilePath` is the agent-side path of the result file containing the summary of the executed
and errored orders.
- `ordersPath` is the agent-side folder path containing the JSON provisioning orders.

It is important for these settings to be defined at the top of the script and keep these names because they are filled by the `Fulfill-PowerShell` connector.

The `Fulfill-CSV.ps1` script must be placed in the script folder of Identity Manager containing the `Environment.ps1` script. Thanks to this, environment variables (such as `$runtimePath`) are loaded and can be used in the script:

```powershell
. (Join-Path -Path $PSScriptRoot -ChildPath "Environment.ps1")
. (Join-Path -Path $runtimePath -ChildPath "Usercube-Visit-Orders.ps1")
```

### Define the specific function

A function which is called for each provisioning order must be defined.

#### Define the header

The header is always the same. Only the name of the function can change:

```json
function Fulfill-CSV {
  param ([parameter(Mandatory = $true)] $order)
```

The previous parameter `$order` is an object corresponding to the following provisioning order (JSON):

```json
{
    "ProvisioningOrdersList": [{
            "AssignedResourceTypeId": "3930001",
            "ChangeType": "Added",
            "WorkflowInstanceId": "81",
            "Owner": {
                "Id": "21511",
                "InternalDisplayName": "007 - Bond James",
                "Identifier": "007",
                "EmployeeId": "007",
                "PhotoTag": -3065,
                "MainFirstName": "James",
                "MainLastName": "Bond",
                ...
            },
            "ResourceType": {
                "Id": "-41",
                "SourceEntityType": {
                    "Id": "51",
                    "Identifier": "Directory_User"
                },
                "TargetEntityType": {
                    "Id": "70",
                    "Identifier": "PowerShellCsv_User"
                },
                "Identifier": "PowerShellCsv_User_NominativeUser"
            },
            "Changes": {
                "identifier": "007",
                "firstName": "James",
                "lastName": "Bond"
            }
        }]
}
```

There can be more sections and attributes.

#### Define mandatory parameters

The `ChangeType` parameter (`Added`, `Deleted` or `Modified`) is always mandatory and must be checked.

Depending on the function requirements, other parameters should be checked. For example, the function below always needs an identifier to work properly, therefore you should check its presence.

```text
  $changeType = $order.ChangeType
  # if the change type is not recognized, we throw an error
  if ($changeType -ne 'Added' -and $changeType -ne 'Deleted' -and $changeType -ne 'Modified') {
    $artId = $order.AssignedResourceTypeId
    throw "Order ChangeType: $changeType not recognized in AssignedResourceTypeId: '$artId'"
  }

  # if the section is Changes, we want to create/update the identifier
  $identifier = $order.Changes.identifier
  if(!$identifier){
    # if the section is Resources, we want to keep the same identifier
    $identifier = $order.Resource.identifier
    if(!$identifier){
      throw "identifier is the primary key and must not be null."
    }
  }
```

#### Define order processing

This is the last part of the function:

- Parameters from the provisioning order are stored in variables.
- A specific treatment is applied if `ChangeType` is `Added`, `Deleted` or `Modified`.

```text
  # firstName and lastName are the two other properties of the ResourceType
  $firstName = $order.Changes.firstName
  $lastName = $order.Changes.lastName

  # change type defines what is written in the 'command' column
  if ($changeType -eq 'Added') {
    $command = "Insert"
  }
  elseif ($changeType -eq 'Deleted') {
    $command = "Delete"
  }
  elseif ($changeType -eq 'Modified') {
    $command = "Update"
  }

  # CSV columns are command, identifier, firstName and lastName
  $script:powershellResults += New-Object -TypeName psobject -Property @{Command = "$command"; identifier = "$identifier"; firstName = "$firstName"; lastName = "$lastName" }
}
```

**Define how to send logs to Identity Manager**

The three methods to log in Identity Manager are:

- **Write-Host**: writes Information in the log.
- **Throw**: raises an exception (which stops the script), and writes the Error in the log (the
provisioning order will be errored too).
- **Write-Error**: writes Error in the log (the provisioning order will be errored too). It is not
recommended because the script continues its execution.

Now that the function has been defined, the main code of the script can be written.

### Write the main code of the script

**Read the options parameter from the standard input**

The options parameter isn't mandatory in the JSON file. If it isn't provided, don't perform this step.

```text
# Just to show how to read the options in the script
$options = [System.Console]::ReadLine()
$options = ConvertFrom-Json $options
$options.Message # -> Hello
```

**Rest of the main script**

In general, this part contains the code to connect to the external system and executes the `Usercube-Visit-Orders` script.

```shell
# The goal of the script is to write the users in the following CSV file
$powershellResultFilePath = Join-Path -Path "$demoPath" -ChildPath "Temp/ExportOutput/powershellcsv_users.csv"

# powershellResults has a larger scope and is used in the last line of the Fulfill-CSV function
$powershellResults = @()

# Usercube-Visit-Orders is provided by Usercube, it must not be modified
# It loops on the provisioning orders and calls Fulfill-CSV on each of them
Usercube-Visit-Orders $resultsFilePath $ordersPath Fulfill-CSV

# We write the results in $powershellResultFilePath
if ($powershellResults.Length -gt 0){
  $powershellResults | ConvertTo-Csv -Delimiter ";" -NoTypeInformation | & (Join-Path -Path "$runtimePath" -ChildPath "Usercube-Encrypt-File.exe") -o $powershellResultFilePath
}
```

Never modify `Usercube-Visit-Orders.ps1`.

## Synthesis

### Skeleton

To sum up the previous part, the script can be written as follows:

```text
# Common part

# Specific function
  # Header of the function
  # Check mandatory parameters
  # Order processing (treatment for Added, Deleted or Modified)

# Main script
  # Read standard input (Optional)
  # Rest of the main script (Connection, Usercube-Visit-Order...)
```

### Full script

The full script is as follows:

```shell
# Common part

param(
  [Parameter(Mandatory = $true)][string]$resultsFilePath,
  [Parameter(Mandatory = $true)][string]$ordersPath
)

. (Join-Path -Path $PSScriptRoot -ChildPath "Environment.ps1")
. (Join-Path -Path $runtimePath -ChildPath "Usercube-Visit-Orders.ps1")

# Specific function

function Fulfill-CSV {
  param ([parameter(Mandatory = $true)] $order)

  $changeType = $order.ChangeType
  # if the change type is not recognized, we throw an error
  if ($changeType -ne 'Added' -and $changeType -ne 'Deleted' -and $changeType -ne 'Modified') {
    $artId = $order.AssignedResourceTypeId
    throw "Order ChangeType: $changeType not recognized in AssignedResourceTypeId: '$artId'"
  }

  # if the section is Changes, we want to create/update the identifier
  $identifier = $order.Changes.identifier
  if(!$identifier){
    # if the section is Resources, we want to keep the same identifier
    $identifier = $order.Resource.identifier
    if(!$identifier){
      throw "identifier is the primary key and must not be null."
    }
  }

  # firstName and lastName are the two other properties of the ResourceType
  $firstName = $order.Changes.firstName
  $lastName = $order.Changes.lastName

  # change type defines what is written in the 'command' column
  if ($changeType -eq 'Added') {
    $command = "Insert"
  }
  elseif ($changeType -eq 'Deleted') {
    $command = "Delete"
  }
  elseif ($changeType -eq 'Modified') {
    $command = "Update"
  }

  # CSV columns are command, identifier, firstName and lastName
  $script:powershellResults += New-Object -TypeName psobject -Property @{Command = "$command"; identifier = "$identifier"; firstName = "$firstName"; lastName = "$lastName" }
}

# Main script

# Just to show how to read the options in the script
$options = [System.Console]::ReadLine()
$options = ConvertFrom-Json $options
$options.Message # -> Hello

# The goal of the script is to write the users in the following CSV file
$powershellResultFilePath = Join-Path -Path "$demoPath" -ChildPath "Temp/ExportOutput/powershellcsv_users.csv"

# powershellResults has a larger scope and is used in the last line of the Fulfill-CSV function
$powershellResults = @()

# Usercube-Visit-Orders is provided by Usercube, it must not be modified
# It loops on the provisioning orders and calls Fulfill-CSV on each of them
Usercube-Visit-Orders $resultsFilePath $ordersPath Fulfill-CSV

# We write the results in $powershellResultFilePath
if ($powershellResults.Length -gt 0){
  $powershellResults | ConvertTo-Csv -Delimiter ";" -NoTypeInformation | & (Join-Path -Path "$runtimePath" -ChildPath "Usercube-Encrypt-File.exe") -o $powershellResultFilePath
}
```

