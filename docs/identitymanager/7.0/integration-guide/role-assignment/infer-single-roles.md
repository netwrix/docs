---
title: "Infer Single Roles with a Composite Role"
description: "Infer Single Roles with a Composite Role"
sidebar_position: 70
---

# Infer Single Roles with a Composite Role

This guide shows how to assign several single roles via the assignment of one composite role.

It is possible to infer SingleRoles with [Composite Role](../../integration-guide/toolkit/xml-configuration/provisioning/compositerole). The SingleRole can only be inferred by the CompositeRole if both the CompositeRole and SingleRole rules are verified.

## Create a Dimension

The restriction of resource allocations is done from a filter. To do this, it is necessary to create a [Dimension](../../integration-guide/toolkit/xml-configuration/metadata/dimension) to define which EntityTypes the filters will apply to.

For the different examples of restrictions, the filters will be based on the EntityType "Organization" and "Title".

```
  <Dimension Identifier="Organization0" DisplayName_L1="Department" DisplayName_L2="Departement" EntityType="Directory_Organization" ColumnMapping="0" IsHierarchical="true" ParentProperty="Parent" />  <Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" EntityType="Directory_Title" ColumnMapping="1" />
```

## Create a Composite Role

A CompositeRole is created in the same way as a SingleRole.

```
**<CompositeRole Identifier="FCT0711" DisplayName_L1="Developer" DisplayName_L2="Developpeur" ApprovalWorkflowType="Two" EntityType="Directory_User" Policy="Default" />**
```

## Assign the Composite Role Based on the Dimension

This step is optional for our simple purpose of inferring single roles with a composite role. The composite role can be linked to a dimension, but it does not have to.

The CompositeRoleRule can be limited with the use of dimensions.

```
**<CompositeRoleRule Role="FCT0720" D1="FCT0720" Policy="Default" />**
```

## Assign Single Roles Based on the Composite Role

The link between a SingleRole and a CompositeRole is made in the SingleRoleRule.

```
    <SingleRoleRule Role="DL-INTERNET-Restricted" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAS_0_USR-USERS_CONSOLE_DNS" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAS_0_USR-USERS_DES_SERVEURS_WINDOWS" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_0_GL_MUY10_MESI_ADM" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_0_GL_MUY10_MESI_ADM" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_0_LDAP_ADMINLDSFEDE" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_0_LDAP_READLDSFEDE" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_A_EASY_USER" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_A_LDAP_ADMINLDSCA" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_A_LYNC_W" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_A_XIOU_ OUTLOOK2010_PSTWRITE" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_F_ADMPDTEXT" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_F_ADMPDTFIXE" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAY_F_ADMPDTPORT" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_APSB_RFICBUR" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_GL_MUP10_BURI_DR" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_GMPL_ADMIN" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_GMPL_ADMINSRV" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_GMPL_GESTPOSTE" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_GMPL_GESTSERVEUR" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_0_VCSPOWERUSER" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_EXPLOITATION_U" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_DR_V" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_DW_V" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_VCS_ADM" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_VMW_ADM" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="RAZ_A_VMW_POW" CompositeRole="FCT0720" Policy="Default" />    <SingleRoleRule Role="SharePoint_IT_Reader" CompositeRole="FCT0720" Policy="Default" />
```

