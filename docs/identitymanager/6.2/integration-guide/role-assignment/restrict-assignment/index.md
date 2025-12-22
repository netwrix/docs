---
title: "Restrict the Assignment"
description: "Restrict the Assignment"
sidebar_position: 60
---

# Restrict the Assignment

This guide shows how to use filters on dimensions and/or roles to restrict the assignment of a role
or resource type.

## Create a Dimension

The restriction of resource allocations is done from a filter. To do this, it is necessary to create
a [Dimension](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md) to define which
EntityTypes the filters will apply to.

For the different examples of restrictions, the filters will be based on the EntityType
"Organization" and "Title".

```

  <Dimension Identifier="Organization0" DisplayName_L1="Department" DisplayName_L2="Departement" EntityType="Directory_Organization" ColumnMapping="0" IsHierarchical="true" ParentProperty="Parent" />  <Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" EntityType="Directory_Title" ColumnMapping="1" />

```

## Create a Single Role

To be able to filter with the dimensions previously created, it is necessary to first create
[Single Role](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) which will
serve as a restriction to the assignment of ResourceTypes for a given source.

The example below creates a SingleRole for the EntityType Directory_User (source of the
ResourceTypes you want to restrict).

```

    <SingleRole Identifier="DL-INTERNET-Restricted" DisplayName_L1="Filtered Internet access" DisplayName_L2="Acces Internet filtre" Category="Internet" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />

```

## Assign the Role Based on the Dimension

We will define a
[Single Role Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) on the
"Title"; dimension with a given value to restrict the allocation of a resource in only one case.

```

**<SingleRoleRule Role="DL-INTERNET-Restricted" D1="FCT0402" Policy="Default" />**

```

D1 represents the dimension whose ColumnMapping="1".

```

**<Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" EntityType="Directory_Title" ColumnMapping="1" />**

```

The value in property D1 implies that the rule is checked only if the source resource has as
association to the EntityType related to dimension 1 is "FCT0402".

## Assign a Resource Type Based on the Role

The restriction on the creation of these accounts is integrated directly into the type rule of the
[Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md). This implies
that the ResourceType will only apply if the
[Single Role Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) are
checked.

This part will link a SingleRole to a ResourceType. This implies that the allocation of a target
resource to a source will only be done if the SingleRole rule(s) are verified.

```

  <ResourceType Identifier="AD_Entry_NominativeUser" DisplayName_L1="AD User (nominative)" DisplayName_L2="Compte AD (nominatif)" Policy="Default" TargetEntityType="AD_Entry" Category="AD" SourceEntityType="Directory_User" ApprovalWorkflowType="One">    <TypeRule TimeOffsetReference="Arround" TimeOffsetBeforeReference="-10080" TimeOffsetAfterReference="43200" Policy="Default"  SingleRole="DL-INTERNET-Restricted"/>    ....
  </ResourceType>

```

### Use a navigation rule instead of a type rule

A [Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) in addition
to filling a multi-valued association, also serves as an allocation context for a ResourceType.

There are 3 ways to restrict the allocation of the ResourceType with a NavigationRule:

- Fill in one or more dimensions directly in the NavigationRule.
- Fill in a SingleRole.
- Fill in one or more dimensions and a SingleRole.

For the last 2 cases this will induce the ResourceType by the SingleRole.

```

    <ResourceType Identifier="AD_Entry_NominativeUser">        ...
        <NavigationRule Property="memberOf" Resource="CN=SG_APP_DL-INTERNET-Restricted,OU=Applications,DC=acme,DC=internal" SingleRole="DL-INTERNET-Restricted" />    </ResourceType>

```

In the example above the ResourceType does not need a TypeRule because the NavigationRule already
serves as an allocation context.
