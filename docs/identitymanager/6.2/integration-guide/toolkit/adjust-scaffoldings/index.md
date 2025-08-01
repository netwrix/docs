---
title: "Adjust Scaffolded Configuration"
description: "Adjust Scaffolded Configuration"
sidebar_position: 110
---

# Adjust Scaffolded Configuration

This guide shows how to adjust the XML configuration elements created by scaffoldings.

## Overview

A scaffolding is an XML element that will generate a complex XML fragment. It is like a
configuration shortcut that helps configure easily a set of XML elements that are usually configured
together.

See the list of all existing
[Scaffoldings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/index.md).

In most situations, scaffoldings are enough to generate the configuration required to meet the
functional needs.

However, in some cases, scaffoldings do not meet the exact needs and must be adjusted to generate
the right XML configuration.

NETWRIX recommends writing XML configuration by first using scaffoldings, adjusting it if needed,
and as a last resort, when no scaffolding meets the needs, writing the configuration manually.

## Adjust Scaffolded Configuration

Adjust XML configuration generated by a scaffolding by proceeding as follows:

1.  When working via the UI, start by exporting UI configuration elements. See the
    [Usercube-Export-Configuration](/docs/identitymanager/6.2/integration-guide/executables/references/export-configuration/index.md)
    topic for additional information.
2.  Write an XML element whose identifier is the same as the one generated by the scaffolding.

    Any identifier can be found in the
    [Scaffoldings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/index.md) topic, in the
    section displaying the generated XML fragment.

3.  Add `ConsolidationMode` to the element's properties.

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
        >                                         ```
        >
        > <DisplayTable Identifier="LDAP_Entry" EntityType="LDAP_Entry" DisplayTableDesignElement="resourcetable" IsEntityTypeDefault="true">
        > <Column DefaultSortPriority="1" DisplayBinding="dn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" />
        > <Column DisplayBinding="rdn" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
        > <Column DisplayBinding="displayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" />
        > <Column DisplayBinding="objectClass" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /></DisplayTable>
        >
        > ````
        >
        >
        > The display table's identifier must be the same as the one generated by the scaffolding. Then the scaffolding is ignored so the display table ```LDAP_Entry``` is defined by the ```<DisplayTable .../>``` properties written manually here, as well as its ```<Column .../>``` child elements written manually here.
        > ````

        > Still from the `ViewTemplateAdaptable` scaffolding, suppose now that the default display
        > name does not fit the needs, then we could write a customized display name from scratch:
        >
        >                                         ```
        >
        > <EntityPropertyExpression Identifier="LDAP_Entry_InternalDisplayName" Expression="C#:resource:return Usercube.Expressions.Functions.UtilExpressions.ToFormatedDN(resource.dn);" EntityType="LDAP_Entry" Property="InternalDisplayName" />
        >
        > ````
        >
        >
        > The entity property expression's identifier must be the same as the one generated by the scaffolding. Then the scaffolding is ignored so the display name ```LDAP_Entry_InternalDisplayName``` is defined by the ```<EntityPropertyExpression .../>``` properties written manually here.
        > ````

    - Set to `Merge`, the XML item generated by the scaffolding is completed with additional parent
      properties and/or child elements written manually, while keeping the parent properties and the
      child elements defined in the scaffolding.

        > For example, the `WorkforceModule` scaffolding generates the `Directory_User` entity type
        > (among other things) with a specific set of properties. We could choose to add some
        > properties in the entity type:
        >
        >                                         ```
        >
        > <EntityType Identifier="Directory_User" ConsolidationMode="Merge">
        > <Property Identifier="OwnedApplications" DisplayName_L1="Managed Applications" Type="ForeignKey" />
        > <Property Identifier="OwnedBots" DisplayName_L1="Managed RPA Bots" Type="ForeignKey" />
        > <Property Identifier="Guests" DisplayName_L1="Sponsored Guests" Type="ForeignKey" /></EntityType>
        >
        > ````
        >
        >
        > The entity type's identifier must be the same as the one generated by the scaffolding. Then the entity type ```Directory_User``` is defined by the ```<EntityType .../>``` properties of the scaffolding, as well as its ```<Property ... />``` child elements written in the scaffolding, and we add the properties written manually here.
        > ````

        > The `WorkforceModule` scaffolding also generates the
        > `Directory_UserRecord_UniqueValue_Email` aspect (among other things) that uses unicity
        > check rules to generate a unique email address for each new user. We could choose to add a
        > unicity check rule in the aspect to compare the new email address to the existing ones
        > from Microsoft Entra ID (formerly Microsoft Azure AD):
        >
        >                                         ```
        >
        > <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" ConsolidationMode="Merge">
        > <UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records"
        > SourceExpression="C#:record:var firstName =
        > record.FirstName.Simplify()?.ToLowerInvariant(); var lastName =
        > record.LastName.Simplify()?.ToLowerInvariant(); if (string.IsNullOrEmpty(firstName) ||
        > string.IsNullOrEmpty(lastName)) { /_ Data missing _/ return null; }
        >
        >       var result = firstName + &quot;.&quot; +   lastName;
        >       if (iteration &gt; 0)
        >       {
        >           result += iteration.ToString();
        >       }
        >
        >       return result;" TargetEntityType="MicrosoftEntraID_DirectoryObject" TargetExpression="C#:azure_ad:
        >       if(string.IsNullOrEmpty(azure_ad.mail))
        >       {
        >           return null;
        >       }
        >
        >       var result = azure_ad.mail;
        >       var index = result.IndexOf('@');
        >       if(index &gt;=0)
        >       {
        >           result = result.Substring(0, index);
        >       }
        >
        >       return result;" /></BuildUniqueValueAspect>
        >
        > ````
        >
        >
        > The aspect's identifier must be the same as the one generated by the scaffolding. Then the aspect ```Directory_UserRecord_UniqueValue_Email``` is defined by the ```<BuildUniqueValueAspect .../>``` properties of the scaffolding, as well as its ```<UnicityCheck ... />``` child elements written in the scaffolding, and we add the unicity check rule written manually here.
        > ````

    - Set to `Update`, the XML item written manually replaces all parent properties, while keeping
      the child elements defined in the scaffolding.

        > For example, the `OptimizeDisplayTable` scaffolding generates the `Directory_User` display
        > entity type (among other things) with a specific set of properties. We could choose to
        > change just the parent properties of the display entity type without changing its child
        > properties:
        >
        >                                         ```
        >
        > <DisplayEntityType Identifier="Directory_User" ConsolidationMode="Update" Color="#95c18b" D0IsActive="true" D1IsActive="true" D2IsActive="true" D3IsActive="true" IconCode="People" PluralDisplayName_L1="Users" Priority="0" />
        >
        > ````
        >
        >
        > The display entity type's identifier must be the same as the one generated by the scaffolding. Then the display entity type ```Directory_User``` is defined by the ```<DisplayEntityType .../>``` properties written manually here, as well as the ```<Property ... />``` child elements written in the scaffolding.
        > ````

    - Set to `Delete`, the XML item generated by the scaffolding is deleted, including its child
      elements.

        > For example, the `AssignProfileAccessControlRules` scaffolding generates the
        > `Administrator_Category_AccessControl_AssignedProfile` access control rule (among other
        > things) with possibly child elements. We could choose to remove the whole access control
        > rule:
        >
        >                                         ```
        >
        > <AccessControlRule Identifier="Administrator_Category_AccessControl_AssignedProfile" ConsolidationMode="Delete" />
        >
        > ````
        >
        >
        > The access control rule's identifier must be the same as the one generated by the scaffolding. Then the access control rule ```Administrator_Category_AccessControl_AssignedProfile``` is completely removed.
        > ````

4.  Deploy the Configuration again. See
    the[ Usercube-Deploy Configuration](/docs/identitymanager/6.2/integration-guide/executables/references/deploy-configuration/index.md)
    for additional information.
