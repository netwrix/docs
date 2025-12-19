---
title: "Policy APIs"
description: "Policy APIs"
sidebar_position: 20
---

# Policy APIs

Policies are used in Threat Prevention to define the objects and events to be monitored or blocked
in your environment, where to monitor on the network, and when to monitor.

You can use APIs to perform the following functions:

- Get Policy
- Enable or Disable a Policy
- Delete a Policy
- Add or Modify Policies
- Export Policies to an XML File
- Import Policies from an XML File

## Get Policy

The `Get-SIPolicy` command is used to return a list of policy names, the GUID, and their associated
policy ID numbers.

## Enable or Disable a Policy

The `Enable-SIPolicy` command is used to enable or disable a policy using the policy ID retrieved in
the `Get-SIPolicy` command. Both the following parameters are required:

- PolicyID [uint32] – Policy ID
- Enable [Bool]
  - 1 to enable
  - 0 to disable

Example of an enable policy command:

**Enable-SIPolicy -PolicyID "255" –Enable 1**

Example of a disable policy command:

**Enable-SIPolicy -PolicyID "255" -Enable 0**

## Delete a Policy

The `Remove-SIPolicy` command is used to delete a policy using the policy ID retrieved in the
`Get-SIPolicy` command. The following parameter is required:

- PolicyID [uint32] – Policy ID

Example of a delete policy command:

**Remove-SIPolicy -PolicyID "255"**

## Add or Modify Policies

The `Export-SIPolicy` and` Import-SIPolicy` commands can be used to export and edit the XML file of
an existing policy, and then import (add or replace) the edited policy. See the
[Not a Policy XML Expert](/docs/threatprevention/7.5/api/overview.md#not-a-policy-xml-expert) topic for additional information on
policy layout and how to make changes to the XML.

### Export Policies to an XML File

The `Export-SIPolicy` command retrieves the specified policy or policies as an XML file from Threat
Prevention into PowerShell or a specified location if you use PowerShell file redirection. The data
produced by this command is identical in format to that produced by the Administration Console
export function. See the
[Export Policies and Templates Window](/docs/threatprevention/7.5/admin/tools/exportpoliciestemplates.md) topic for
additional information.

The following parameter(s) are required:

- PolicyIDs [String] – List of comma separated policy IDs

Example of multiple policy exports that are displayed in the PowerShell Console:

**Export-SIPolicy -PolicyIDs "111,222,33,555"**

Example of a single policy export to a file:

**Export-SIPolicy -PolicyIDs "255" >>c:\Import\ExampleExport1.xml**

### Import Policies from an XML File

The `Import-SIPolicy` command imports a policy into the Enterprise Manager from an external XML
file. This command is used to replace/modify an existing policy or create a new one. The data
produced by this command is identical in format to that produced by the Administration Console
import function. See the [Import Window](/docs/threatprevention/7.5/admin/tools/import.md) topic for additional information.

During the import process, the `Import-SIPolicy`command checks existing policy GUIDs against the
GUIDs in the XML file. One of the following actions occur:

- XML file GUID matches existing policy – Updates the existing policy to match the new XML settings
  and fields
- XML file GUID does not match any existing policies – New policy is created according to the XML
  parameters. It is created with a system generated GUID and Policy ID; the system discards the GUID
  and Policy ID from the source XML.

:::note
If an existing policy and a new policy in the pending XML import file share the same
policy name, an error is displayed and the existing policy remains unchanged.
:::


:::info
Provide a unique, descriptive name for any new policies.
:::


The following parameter is required:

- FileName [String] – Path to file with valid XML content

Policies exported from the [Policies Interface](/docs/threatprevention/7.5/admin/policies/overview.md) have the option to be
password protected. When importing these policies, the following parameter is required along with
the FileName:

- Pwd [String] – Password if importing a policy that was exported from the Administration Console
  with a password

Example of adding an import XML file:

**Import-SIPolicy -FileName "c:\Import\ExampleImport2.xml"**

The API returns as output the PolicyID, GUID, and Policy Name of the policy that has been updated or
created. If a new policy was created, it is up to the user to capture the Policy ID and Policy GUID
assigned by Threat Prevention in order to later access that policy.

:::tip
Remember, the Policy ID and Policy GUID is not the same as those in the source XML file. Use the
`Get-SIPolicy` API call to find the newly created policy and its associated GUID and Policy ID by
the name.
:::
