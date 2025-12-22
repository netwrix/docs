---
title: "Collection APIs"
description: "Collection APIs"
sidebar_position: 30
---

# Collection APIs

Collections are reusable lists of policy filter settings that help streamline the task of
associating filters with event types on the Event Type tab during
[Policy Configuration](/docs/threatprevention/7.5/admin/policies/configuration/configuration.md) or
[Template Configuration](/docs/threatprevention/7.5/admin/templates/configuration/configuration.md).

You can use APIs to perform the following functions:

- Get Collection
- Remove a Collection
- Add or Modify Collections
- Export Collections to an XML File
- Import Collections from an XML File

## Get Collection

The `Get-SICollection` command is used to return a Threat Prevention collection. Collections are
managed on the [Collection Manager Window](/docs/threatprevention/7.5/admin/configuration/collectionmanager/overview.md) and
are used in specific policy filters, where different filters support different types of collections.

## Remove a Collection

The `Remove-SICollection` command is used to delete a collection using the collection ID retrieved
in the `Get-SICollection` command. The following parameter is required:

- CollectionID

Example of a remove collection command:

**Remove-SICollection –CollectionID “222”**

## Add or Modify Collections

The `Export-SICollection` and `Import-SICollection` commands can be used to export and edit the XML
file of an existing collection, and then import (add or replace) the edited collection. See the
[Not a Policy XML Expert](/docs/threatprevention/7.5/api/overview.md#not-a-policy-xml-expert) topic for additional information on
and how to make changes to the XML.

### Export Collections to an XML File

The `Export-SICollection` command retrieves the specified collection or collections as an XML file
from Threat Prevention into PowerShell or a specified location if using PowerShell file redirection.
The data produced by this command is identical in format to that produced by the Administration
Console export function. See the
[Export Policies and Templates Window](/docs/threatprevention/7.5/admin/tools/exportpoliciestemplates.md) topic for
additional information.

The following parameter(s) are required:

- CollectionIDs [String] – List of comma separated Collection IDs

Example of multiple collection exports that are displayed in the PowerShell Console:

**Export-SICollection –CollectionIDs “222,131,44”**

Example of a single collection export to a file:

**Export-SICollection –CollectionIDs “222” >>c:\Import\ExampleExport1.xml**

### Import Collections from an XML File

The `Import-SICollection` command imports a collection into the Enterprise Manager from an external
XML file. This command is used to replace/modify an existing collection or create a new one. The
data produced by this command is identical to that produced by the Administration Console import
function. See the [Import Window](/docs/threatprevention/7.5/admin/tools/import.md) topic for additional information.

During the import process, the `Import-SICollection` command checks existing collection GUIDs
against the GUIDs in the XML file. One of the following actions occur:

- XML file GUID matches existing collection – Updates the existing collection to match the new XML
  settings and fields
- XML file GUID does not match any existing collections – New collection is created according to the
  XML parameters. It is created with a Threat Prevention system generated GUID and Collection ID;
  the system discards the GUID and Collection ID from the source XML.

:::note
If an existing collection and a new collection in the pending XML import file share the
same collection name, an error is displayed and the existing collection remains unchanged.
:::


:::info
Provide a unique, descriptive name for any new collections.
:::


The following parameter is required:

- FileName [String] – Path to file with valid XML content

Example of adding an import XML file:

**Import-SICollection –FileName “c:\Import\ExampleImport2.xml”**

The API returns as output the CollectionID, GUID, and Collection Name of the collection that has
been updated or created. If a new collection was created, it is up to the user to capture the
Collection ID and Collection GUID assigned by Threat Prevention in order to later access that
collection.

:::tip
Remember, the Collection ID and Collection GUID are not the same as those in the source XML file.
Use the `Get-SICollection` API call to find the newly created collection and its associated GUID and
Collection ID by name.
:::
