# Hierarchy in Configuration Files

Every configuration's element falls under the ` urn:schemas-usercube-com:configuration` namespace.
Element `<ConfigurationFile>` is the root element of each configuration file.

```

<ConfigurationFile xmlns="urn:schemas-usercube-com:configuration"> ...
<ConfigurationFile>

```

Each configuration element matches to an entry in the database. Detailed description of the element
can be found in the
[Data model part of this documentation](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md).

For exemple, structure of the `<Connector>` element wil be found
[here](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md).

In some case, the element name will not match directly the data model type name.

For exemple, the element `<Entry>` in the following XML fragment is a
[AccessControlEntry](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md)
item in the database.

```

<AccessControlRule Profile="Administrator" EntityType="Resource" Identifier="Administrator_Resource" DisplayName_L1="Administrator_Resource"> <Entry Permission="/Connectors/SynchronizeSession" CanExecute="true" /> <Entry Permission="/Connectors/ProvisioningSession" CanExecute="true" /></AccessControlRule>

```

# Adjust Scaffolded Configuration

This guide shows how to adjust the XML configuration elements created by scaffoldings.

## Overview

A scaffolding is an XML element that will generate a complex XML fragment. It is like a
configuration shortcut that helps configure easily a set of XML elements that are usually configured
together.

[See the list of all existing scaffoldings](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md).

In most situations, scaffoldings are enough to generate the configuration required to meet the
functional needs.

However, in some cases, scaffoldings do not meet the exact needs and must be adjusted to generate
the right XML configuration.

NETWRIX recommends writing XML configuration by first using scaffoldings, adjusting it if needed,
and as a last resort, when no scaffolding meets the needs, writing the configuration manually.

## Adjust Scaffolded Configuration

Adjust XML configuration generated by a scaffolding by proceeding as follows:

1. When working via the UI, start by
   [exporting UI configuration elements](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md).
2. Write an XML element whose identifier is the same as the one generated by the scaffolding.

   Any identifier can be found on the
   [documentation page of the corresponding scaffolding](/docs/identitymanager/6.1/configuration-reference/scaffoldings/scaffolding-reference.md),
   in the section displaying the generated XML fragment.

3. Add `ConsolidationMode` to the element's properties.

   - By default, the XML item written manually completely replaces the one generated by the
     scaffolding.

     The default behavior should be used when needing to rewrite one or a few of the items
     generated by a scaffolding, not all of them.

     When needing to rewrite the scaffolding's whole output, just remove the scaffolding and
     write the item(s) manually.

     > For example, the `ViewTemplateAdaptable` scaffolding generates, for the `LDAP_Entry`
     > entity type, a default display name for all LDAP resources, a display table to view the
     > resources, and the corresponding permissions to access the table. Supposing that the
     > resulting display table does not fit the needs, we could need to write a customized
     > display table from scratch:
     >
     > ```
     >
     > <DisplayTable Identifier="LDAP_Entry" EntityType="LDAP_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
     > <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
     > <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
     > <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
     > <Column DisplayBinding="objectClass" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>
     >
     > ```
     >
     > The display table's identifier must be the same as the one generated by the scaffolding. Then the scaffolding is ignored so the display table `LDAP_Entry` is defined by the `<DisplayTable .../>` properties written manually here, as well as its `<Column .../>` child elements written manually here.
     >
     > ```
     >
     > ```

     > Still from the `ViewTemplateAdaptable` scaffolding, suppose now that the default display
     > name does not fit the needs, then we could write a customized display name from scratch:
     >
     > ```
     >
     > <EntityPropertyExpression Identifier="LDAP_Entry_InternalDisplayName" Expression="C#:resource:return Usercube.Expressions.Functions.UtilExpressions.ToFormatedDN(resource.dn);" EntityType="LDAP_Entry" Property="InternalDisplayName" />
     >
     > ```
     >
     > The entity property expression's identifier must be the same as the one generated by the scaffolding. Then the scaffolding is ignored so the display name `LDAP_Entry_InternalDisplayName` is defined by the `<EntityPropertyExpression .../>` properties written manually here.
     >
     > ```
     >
     > ```

   - Set to `Merge`, the XML item generated by the scaffolding is completed with additional parent
     properties and/or child elements written manually, while keeping the parent properties and the
     child elements defined in the scaffolding.

     > For example, the `WorkforceModule` scaffolding generates the `Directory_User` entity type
     > (among other things) with a specific set of properties. We could choose to add some
     > properties in the entity type:
     >
     > ```
     >
     > <EntityType Identifier="Directory_User" ConsolidationMode="Merge">
     > <Property Identifier="OwnedApplications" DisplayName_L1="Managed Applications" Type="ForeignKey" />
     > <Property Identifier="OwnedBots" DisplayName_L1="Managed RPA Bots" Type="ForeignKey" />
     > <Property Identifier="Guests" DisplayName_L1="Sponsored Guests" Type="ForeignKey" /></EntityType>
     >
     > ```
     >
     > The entity type's identifier must be the same as the one generated by the scaffolding. Then the entity type `Directory_User` is defined by the `<EntityType .../>` properties of the scaffolding, as well as its `<Property ... />` child elements written in the scaffolding, and we add the properties written manually here.
     >
     > ```
     >
     > ```

     > The `WorkforceModule` scaffolding also generates the
     > `Directory_UserRecord_UniqueValue_Email` aspect (among other things) that uses unicity
     > check rules to generate a unique email address for each new user. We could choose to add a
     > unicity check rule in the aspect to compare the new email address to the existing ones
     > from Microsoft Entra ID (formerly Microsoft Azure AD):
     >
     > ```
     >
     > <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" ConsolidationMode="Merge">
     > <UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records"
     > SourceExpression="C#:record:var firstName =
     > record.FirstName.Simplify()?.ToLowerInvariant(); var lastName =
     > record.LastName.Simplify()?.ToLowerInvariant(); if (string.IsNullOrEmpty(firstName) ||
     > string.IsNullOrEmpty(lastName)) { /_ Data missing _/ return null; }
     >
     > var result = firstName + &quot;.&quot; + lastName;
     > if (iteration &gt; 0)
     > {
     > result += iteration.ToString();
     > }
     >
     > return result;" TargetEntityType="MicrosoftEntraID_DirectoryObject" TargetExpression="C#:azure_ad:
     > if(string.IsNullOrEmpty(azure_ad.mail))
     > {
     > return null;
     > }
     >
     > var result = azure_ad.mail;
     > var index = result.IndexOf('@');
     > if(index &gt;=0)
     > {
     > result = result.Substring(0, index);
     > }
     >
     > return result;" /></BuildUniqueValueAspect>
     >
     > ```
     >
     > The aspect's identifier must be the same as the one generated by the scaffolding. Then the aspect `Directory_UserRecord_UniqueValue_Email` is defined by the `<BuildUniqueValueAspect .../>` properties of the scaffolding, as well as its `<UnicityCheck ... />` child elements written in the scaffolding, and we add the unicity check rule written manually here.
     >
     > ```
     >
     > ```

   - Set to `Update`, the XML item written manually replaces all parent properties, while keeping
     the child elements defined in the scaffolding.

     > For example, the `OptimizeDisplayTable` scaffolding generates the `Directory_User` display
     > entity type (among other things) with a specific set of properties. We could choose to
     > change just the parent properties of the display entity type without changing its child
     > properties:
     >
     > ```
     >
     > <DisplayEntityType Identifier="Directory_User" ConsolidationMode="Update" Color="#95c18b" D0IsActive="true" D1IsActive="true" D2IsActive="true" D3IsActive="true" IconCode="People" PluralDisplayName_L1="Users" Priority="0" />
     >
     > ```
     >
     > The display entity type's identifier must be the same as the one generated by the scaffolding. Then the display entity type `Directory_User` is defined by the `<DisplayEntityType .../>` properties written manually here, as well as the `<Property ... />` child elements written in the scaffolding.
     >
     > ```
     >
     > ```

   - Set to `Delete`, the XML item generated by the scaffolding is deleted, including its child
     elements.

     > For example, the `AssignProfileAccessControlRules` scaffolding generates the
     > `Administrator_Category_AccessControl_AssignedProfile` access control rule (among other
     > things) with possibly child elements. We could choose to remove the whole access control
     > rule:
     >
     > ```
     >
     > <AccessControlRule Identifier="Administrator_Category_AccessControl_AssignedProfile" ConsolidationMode="Delete" />
     >
     > ```
     >
     > The access control rule's identifier must be the same as the one generated by the scaffolding. Then the access control rule `Administrator_Category_AccessControl_AssignedProfile` is completely removed.
     >
     > ```
     >
     > ```

4. [Deploy the configuration](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
   again.

# How-Tos

These guides will help you build and use the XML configuration with practical step-by-step
procedures.

- #### [Deploy the Configuration](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
  Import the XML configuration to build and use the Usercube application.- ####
  [Export the Configuration](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
  Generate in a folder the XML files based on the configuration found in the database.- ####
  [Adjust Scaffolded Configuration](/docs/identitymanager/6.1/tools-utilities/toolkit/index.md)
  Adjust the XML configuration elements created by scaffoldings.

# Toolkit for XML Configuration

A Usercube configuration is **a set of XML files** edited according the **Usercube schema**. The
[recommendations](/docs/identitymanager/6.1/tools-utilities/toolkit/index.md)
part of this section explains how to set up an editing environment for the configuration.

Regardless of the editing space, the **configuration persists in the Usercube database**. It's this
stored configuration that is used at runtime.

The
[Deploy configuration tool](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
is used to **import** a new version of the configuration (from the XML files set). The
[Export configuration tool](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
can be used to **export** the current configuration (to a XML files set).

The Usercube project's integration cycle consists in developing a configuration by successive
imports in a test instance.

![Integration cycle](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/configurationcycle.webp)

# Languages

Some configuration string must be specified in multiple languages. For this, the name of the
corresponding XML attribute is suffixed by `_L1`, `_L2`,... `_L8`. For example, the property
`DisplayName` of an
[EntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
can be specified in English and French:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EntityType Identifier="Directory_User" DisplayName_L1="User" DisplayName_L2="Collaborateur"> ...
</EntityType>
```

Languages list must be specified by
[Language](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
elements.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Language Code="en-US" IndicatorNumber="1" /> <Language Code="fr-FR" IndicatorNumber="2" />
```

The code is a combination of an ISO 639 two-letter lowercase culture code associated with a language
and an ISO 3166 two-letter uppercase subculture code associated with a country or region.

# Base32 Parameter Names

## Base32 Parameter Names

Some attributes names in the applicative configuration, such a those related to dimensions
identification, are written using a
[Base32 representation of numbers](https://en.wikipedia.org/wiki/Base32).

Usercube uses flavor of base32 known as **base32hex** described in the
[RFC4648](https://tools.ietf.org/html/rfc4648#rfc4648).

It uses 10 digits from 0 to 9 and 22 letters from A to V to represent numbers.

The following table shows the decimal - base32hex equivalent for the first 127 numbers.

| base32hex | decimal |
| --------- | ------- |
| 0         | 0       |
| 1         | 1       |
| 2         | 2       |
| 3         | 3       |
| 4         | 4       |
| 5         | 5       |
| 6         | 6       |
| 7         | 7       |
| 8         | 8       |
| 9         | 9       |
| a         | 10      |
| b         | 11      |
| c         | 12      |
| d         | 13      |
| e         | 14      |
| f         | 15      |
| g         | 16      |
| h         | 17      |
| i         | 18      |
| j         | 19      |
| k         | 20      |
| l         | 21      |
| m         | 22      |
| n         | 23      |
| o         | 24      |
| p         | 25      |
| q         | 26      |
| r         | 27      |
| s         | 28      |
| t         | 29      |
| u         | 30      |
| v         | 31      |
| 10        | 32      |
| 11        | 33      |
| �         | �       |
| 1A        | 42      |
| �         | �       |
| 20        | 64      |
| �         | �       |
| 2A        | 74      |
| �         | �       |
| 3V        | 127     |

For example, dimensions are identified by a number going from 0 to 127 in decimal representation and
0 to 3V in base32hex representation.

The
[ContextRules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
support _128_ dimension parameters going from `B0` to `B3V` using the **base32hex**`0` to `3V`
numbers to identify a dimension.

# Recommendations

## Editor

[Visual Studio Code](https://code.visualstudio.com/) is the recommended editor for configuration.
Its extensions can highly benefit the configuration experience. NETWRIX recommends the following
extensions:

- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
  for file organization;
- [Xml Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml) for XML
  formatting;
- [XML](https://marketplace.visualstudio.com/items?itemName=rogalmic.vscode-xml-complete) by RedHat
  to provide auto-completion of XML configuration based on an XSD file;
- [Powershell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell) for
  Powershell formatting;
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) for CSV
  formatting;
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) for file history
  features.

### Configure auto-completion

RedHat's XML extension provides auto-completion based on an XSD file. It opens an auto-completion
popup when you start to edit an element or attribute name. You can open the popup by typing
`Ctrl-Space`.

![Auto-complete](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/recommendations/autocomplete.webp)

Configure auto-completion by proceeding as follows:

1. Retrieve from the SDK artifact the `usercube-configuration.xsd` and
   `Usercube.Demo.code-workspace` files.
2. Make sure that these files are in the working directory (for example `C:/identitymanagerDemo`).
3. In `Usercube.Demo.code-workspace`, declare the following setting, replacing the path
   `C:/identitymanagerDemo/identitymanager-configuration.xsd` by the path of your XSD file:

   ```

       "settings": {
           "xml.fileAssociations": [
               {
                   "systemId": "file:///C:/identitymanagerDemo/identitymanager-configuration.xsd",
                   "pattern": "**/*.xml"
               }
           ]
       }

   ```

## Version Control System

A version control system (like Git) is also recommended so files and configuration history could be
tracked.

## File Hierarchy

Some folders in the XML configuration contain files that are generated by Usercube and that must not
be modified manually:

- `Runtime/Workforce`
- `Runtime/Bootstrap`

For the configuration to be more readable it is recommended to classify configuration by Connector
or Application Entity. For each Connector or Application Entity create a folder in which will put:

- **_Connector.xml_** file containing the definition of the Connector, the EntityTypes,the
  EntityAssociations and their mappings.
- **_Administrator.xml_** file containing all the ACE for the administrator profile.
- **_Role Model.xml_** file containing the role model configuration.
- **_UI.xml_** file containing the User Interface configuration.
- **_Jobs.xml_** file containing the jobs configuration.
- **_Workflows.xml_** file containing the Workflows configuration for the given connector.

![Recommendation](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/recommendations/recommendation.webp)

# Reserved identifiers

Identifiers of
[EntityType](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
and
[EntityProperty](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
cannot be one of the following words:

These words can't be written in any case, example: id, Id, iD and ID are forbidden.

- Id
- if
- for
- while
- return
- break
- else
- continue
- ref
- out
- class
- interface
- struct
- foreach
- do
- char
- byte
- string
- int
- long
- null
- public
- private
- protected
- static
- const
- abstract
- try
- catch
- sealed
- void
- true
- false
- finally
- throw
- Exception
- override
- readonly
- return
- enum
- delegate
