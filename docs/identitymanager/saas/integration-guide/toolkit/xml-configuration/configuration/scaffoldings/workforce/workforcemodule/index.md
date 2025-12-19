---
title: "Workforce Module"
description: "Workforce Module"
sidebar_position: 20
---

# Workforce Module

Generates the workforce repository based on the data filled in the Workforce Core Solution module.

## Examples

The following example generates the Workforce module in the application:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkforceModule IsEnabled="true">
    <UniqueIdentifierGeneration Strategy="Random" Min="0" Max="89999" />
    <EmailGeneration Strategy="FirstName.LastName" Domain="acme.com" NameSeparator="." />
    <LoginGeneration Strategy="EmailSubject" />
    <NewExternalWorkflow IsReviewRequired="false" />
    <NewInternalWorkflow IsReviewRequired="true" />
    <ModelUsage Binding="Directory_Office" Count="0" />
    <ModelUsage Binding="Directory_Gender" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:JobTitle" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:OfficeNumber" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:AccessesExpirationDate" Count="0" />
    <ModelUsage Binding="Directory_UserRecord:IsMainPosition" Count="0" />
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ManageAccounts" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReconciliateResources" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReconciliateRoles" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReviewProvisioning" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ReviewRoles" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Helpdesk_Directory_User_New/Request" ProfileIdentifier="Helpdesk"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/User" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/View" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/ViewResources" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/Self_ResourcesUpdate/Request" ProfileIdentifier="User"/>
    <CompositeProfile TargetProfile="Workforce/Self/Self_ResourcesUpdate/Review" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="Manager"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_ManagePositions/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewExternal/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewInternal/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdateResources/Request" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="Manager" AreaOfResponsibility="Organization"/>
    <CompositeProfile TargetProfile="Workforce/Administration/Directory_User_ViewWorkflowOverview" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ExternalCompany/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Organization/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedEmail/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedIdentifier/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_ReservedLogin/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Site/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Subsidiary/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_Title/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewAdministration" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewHR" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewPhoto" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_User/ViewResources" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserCategory/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Directory/Directory_UserType/View" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Notifications/Directory_User_New" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_ManagePositions/Request" ProfileIdentifier="HR" />
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_NewInternal/Review" ProfileIdentifier="HR" />
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" ProfileIdentifier="HR"/>
    <CompositeProfile TargetProfile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" ProfileIdentifier="HR"/>
</WorkforceModule>
```

## Properties

| Property                      | Type    | Description                                                                                                                                      |
| ----------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| IsEnabled default value: true | Boolean | True to enable the Worforce module. If set to false, Identity Manager deletes all existing items computed by the Workforce Core Solution module. |

## Child Elements

Here is a list of child elements:

- CompositeProfile (optional) – Defines the users profiles
- EmailGeneration (optional) – Defines the email generation policy
- HomonymEntityLinkOptions (optional) – Updates/Modifies the HomonymEntityLink of the
  Directory_UserRecord entity of the workforce configuration
- LoginGeneration (optional) – Defines the login generation policy
- ModelUsage (optional) – Defines the entity types/properties that must be ignored from the model
  and customize the pickers for the kept ones
- NewExternalWorkflow (optional) – Enable/disable the review step for the new external workflow
- NewInternalWorkflow (optional) – Enable/disable the review step for the new internal workflow
- UniqueIdentifierGeneration (optional) – Defines the unique identifier generation policy

### CompositeProfile

| Property                      | Type   | Description                                                |
| ----------------------------- | ------ | ---------------------------------------------------------- |
| AreaOfResponsibility required | String | Represents the argument value.                             |
| ProfileDisplayName required   | String | Generic column used to store information for internal use. |
| ProfileIdentifier required    | String | Generic column used to store information for internal use. |
| TargetProfile required        | String | Generic column used to store information for internal use. |

### EmailGeneration

| Property               | Type   | Description                                                                                                                           |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Strategy required      | String | Represents the argument value.                                                                                                        |
| Domain optional        | String | Generic column used to store information for internal use.                                                                            |
| NameSeparator optional | String | Character used to separate users' names and first names in their generated emails and logins (in the Workforce Core Solution module). |

### HomonymEntityLinkOptions

| Property                                        | Type    | Description                                                                                                                                                                                                 |
| ----------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActivatePhoneticComparison default value: false | Boolean | Adds 3 filters in the HomonymEntityLink comparing the first and last names (current workflow) to the phonetic properties corresponding to the first and last names (existing records).                      |
| DisableBirthNameComparison default value: false | Boolean | Deletes the filter in the HomonymEntityLink comparing the last name (current workflow) with the birth name (existing records).                                                                              |
| DisableInversion default value: false           | Boolean | Deletes the filters in the HomonymEntityLink comparing the first name (current workflow) with the last name (existing records) and the last name (current workflow) with the first name (existing records). |

### LoginGeneration

| Property           | Type   | Description                                                |
| ------------------ | ------ | ---------------------------------------------------------- |
| Strategy required  | String | Represents the argument value.                             |
| MaxLength optional | Int32  | Generic column used to store information for internal use. |
| Prefix optional    | String | Generic column used to store information for internal use. |

### ModelUsage

| Property             | Type   | Description                                                                                                                                                       |
| -------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required     | String | Generic column used to store information for internal use.                                                                                                        |
| Count optional       | Int32  | Generic column used to store information for internal use.                                                                                                        |
| ForcedCount optional | Int32  | Number of entries for a given entity or entity's property in the workforce data model. The `ForcedCount` value overwrites the count computed by Identity Manager. |

### NewExternalWorkflow

| Property                              | Type    | Description                                                                                               |
| ------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| IsReviewRequired default value: false | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |

### NewInternalWorkflow

| Property                             | Type    | Description                                                                                               |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------- |
| IsReviewRequired default value: true | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |

### UniqueIdentifierGeneration

| Property               | Type   | Description                                                                                                                           |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Strategy required      | String | Represents the argument value.                                                                                                        |
| Max optional           | Int32  | Upper limit of the range used for the generation of unique identifiers.                                                               |
| Min optional           | Int32  | Lower limit of the range used for the generation of unique identifiers.                                                               |
| NameSeparator optional | String | Character used to separate users' names and first names in their generated emails and logins (in the Workforce Core Solution module). |
| Prefix optional        | String | Prefix used for the generation of unique identifiers.                                                                                 |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EntityType Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="7" Type="String" />
    <Property Identifier="ISOCode" DisplayName_L1="ISO Code" DisplayName_L2="Code ISO" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Regions" DisplayName_L1="Regions" DisplayName_L2="Régions" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_ExternalCompany" DisplayName_L1="External Company" DisplayName_L2="Société externe">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="5" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Map" DisplayName_L2="Carte" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="6" Type="Int64" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_JobCategory" DisplayName_L1="Business Category" DisplayName_L2="Famille de métier">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Titles" DisplayName_L1="Titles" DisplayName_L2="Fonctions" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_Organization" DisplayName_L1="Department" DisplayName_L2="Département">
    <Property Identifier="Assistant" DisplayName_L1="Assistant" DisplayName_L2="Assistant" TargetColumnIndex="130" Type="ForeignKey" />
    <Property Identifier="Children" DisplayName_L1="Nested Departments" DisplayName_L2="Sous départments" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" DisplayName_L2="Chemin" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Manager" DisplayName_L1="Manager" DisplayName_L2="Responsable" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="Parent" DisplayName_L1="Parent Department" DisplayName_L2="Département parent" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="Type" DisplayName_L1="Type" DisplayName_L2="Type" TargetColumnIndex="131" Type="ForeignKey" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_OrganizationType" DisplayName_L1="Department Type" DisplayName_L2="Type de département">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Organizations" DisplayName_L1="Departments" DisplayName_L2="Départements" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_PersonalTitle" DisplayName_L1="Personal Title" DisplayName_L2="Civilité">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_PresenceState" DisplayName_L1="User Status" DisplayName_L2="Etat de présence">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Users" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
    <EntityType Identifier="Directory_Region" DisplayName_L1="Region" DisplayName_L2="Région">
    <Property Identifier="Country" DisplayName_L1="Country" DisplayName_L2="Pays" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Sites" DisplayName_L1="Sites" DisplayName_L2="Sites" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_ReservedEmail" DisplayName_L1="Reserved Email" DisplayName_L2="Email réservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_ReservedIdentifier" DisplayName_L1="Reserved Unique Identifier" DisplayName_L2="Identifiant unique reservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_ReservedLogin" DisplayName_L1="Reserved Login" DisplayName_L2="Login réservé">
    <Property Identifier="Description" DisplayName_L1="Description" DisplayName_L2="Description" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Value" DisplayName_L1="Value" DisplayName_L2="Valeur" IsKey="true" TargetColumnIndex="4" Type="String" />
</EntityType>
<EntityType Identifier="Directory_Site" DisplayName_L1="Site" DisplayName_L2="Site">
    <Property Identifier="DisplayName" DisplayName_L1="Display Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="19" Type="String" />
    <Property Identifier="Floor" DisplayName_L1="Floor" DisplayName_L2="Etage" TargetColumnIndex="10" Type="String" />
    <Property Identifier="FullName" DisplayName_L1="Full Name" TargetColumnIndex="0" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Latitude" DisplayName_L1="Latitude" DisplayName_L2="Latitude" TargetColumnIndex="15" Type="Double" />
    <Property Identifier="Longitude" DisplayName_L1="Longitude" DisplayName_L2="Longitude" TargetColumnIndex="14" Type="Double" />
    <Property Identifier="Name" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Map" DisplayName_L2="Carte" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="13" Type="Int64" />
    <Property Identifier="PostalCode" DisplayName_L1="Postal Code" DisplayName_L2="Code postal" TargetColumnIndex="12" Type="String" />
    <Property Identifier="PreferredLanguage" DisplayName_L1="Preferred Language" DisplayName_L2="Langue préférée" TargetColumnIndex="17" Type="String" />
    <Property Identifier="Region" DisplayName_L1="Region" DisplayName_L2="Région" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="StreetName" DisplayName_L1="Street Name" DisplayName_L2="Rue" TargetColumnIndex="8" Type="String" />
    <Property Identifier="StreetNumber" DisplayName_L1="Street Number" DisplayName_L2="Numéro" TargetColumnIndex="7" Type="String" />
    <Property Identifier="StreetType" DisplayName_L1="Street Type" DisplayName_L2="Type de voie" TargetColumnIndex="9" Type="String" />
    <Property Identifier="TimeZone" DisplayName_L1="Time Zone" DisplayName_L2="Fuseau horaire" TargetColumnIndex="18" Type="String" />
    <Property Identifier="Town" DisplayName_L1="Town" DisplayName_L2="Ville" TargetColumnIndex="11" Type="String" />
    <Property Identifier="Url" DisplayName_L1="Url" DisplayName_L2="Url" TargetColumnIndex="16" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_Subsidiary" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Nom" TargetColumnIndex="5" Type="String" />
    <Property Identifier="EmailDomain" DisplayName_L1="Email Domain" DisplayName_L2="Domaine de messagerie" TargetColumnIndex="7" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Logo" DisplayName_L2="Logo" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="6" Type="Int64" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_Title" DisplayName_L1="Title" DisplayName_L2="Fonction">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="JobCategory" DisplayName_L1="Business Category" DisplayName_L2="Famille de métier" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_User" DisplayName_L1="User" DisplayName_L2="Collaborateur">
    <Property Identifier="AssistantOf" DisplayName_L1="Assistant of" DisplayName_L2="Assistant de" Type="ForeignKey" />
    <Property Identifier="ConsentPhotoUsage" DisplayName_L1="Consent to Photo Usage" DisplayName_L2="Consentement à l'usage de la photo" TargetColumnIndex="9" Type="Bool" />
    <Property Identifier="DirectReports" DisplayName_L1="Direct Reports" Type="ForeignKey" />
    <Property Identifier="EffectiveIGADirectReports" DisplayName_L1="IGA Direct Reports (effective)" Type="ForeignKey" />
    <Property Identifier="Email" DisplayName_L1="Email" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="11" Type="String" />
    <Property Identifier="IGADirectReports" DisplayName_L1="IGA Direct Reports" Type="ForeignKey" />
    <Property Identifier="Identifier" DisplayName_L1="Unique Identifier" DisplayName_L2="Identifiant unique" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="IsDraft" DisplayName_L1="Record is draft" DisplayName_L2="Fiche en brouillon" TargetColumnIndex="6" Type="Bool" />
    <Property Identifier="LastFirstName" DisplayName_L1="Last/First Name" TargetColumnIndex="10" Type="String" />
    <Property Identifier="MainRecord" DisplayName_L1="Main Record" DisplayName_L2="Fiche principale" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="ManagedOrganizations" DisplayName_L1="Managed Departments" DisplayName_L2="Départements gérés" Type="ForeignKey" />
    <Property Identifier="PhoneticFirstLastName" DisplayName_L1="Phonetic First/Last Name" DisplayName_L2="Prénom/nom phonétiques" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="7" Type="String" />
    <Property Identifier="PhoneticLastFirstName" DisplayName_L1="Phonetic Last/First Name" DisplayName_L2="Nom/prénom phonétiques" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="8" Type="String" />
    <Property Identifier="Photo" DisplayName_L1="Photo" DisplayName_L2="Photo" Type="Binary" />
    <Property Identifier="PhotoTag" DisplayName_L1="Photo Tag" DisplayName_L2="Photo Tag" TargetColumnIndex="5" Type="Int64" />
    <Property Identifier="PresenceState" DisplayName_L1="Status" DisplayName_L2="Etat" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="Records" DisplayName_L1="Records" DisplayName_L2="Fices" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_UserCategory" DisplayName_L1="User Category" DisplayName_L2="Famille de types de collaborateurs">
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="Types" DisplayName_L1="User Types" DisplayName_L2="Type de collaborateur" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Directory_UserRecord" DisplayName_L1="User Record" DisplayName_L2="Fiche de collaborateur">
    <Property Identifier="BirthDate" DisplayName_L1="Birth Date" DisplayName_L2="Date de naissance" TargetColumnIndex="14" Type="DateTime" />
    <Property Identifier="BirthName" DisplayName_L1="Birth Name" DisplayName_L2="Nom de naissance" TargetColumnIndex="15" Type="String" />
    <Property Identifier="ContractEndDate" DisplayName_L1="Contract End Date" DisplayName_L2="Date de fin de contrat" TargetColumnIndex="21" Type="DateTime" />
    <Property Identifier="ContractIdentifier" DisplayName_L1="Contract Identifier" TargetColumnIndex="36" Type="String" />
    <Property Identifier="ContractStartDate" DisplayName_L1="Contract Start Date" DisplayName_L2="Date de début de contrat" TargetColumnIndex="20" Type="DateTime" />
    <Property Identifier="EffectiveIGAManager" DisplayName_L1="IGA Manager (effective)" DisplayName_L2="Gestionnaire IGA (effectif)" TargetColumnIndex="140" Type="ForeignKey" />
    <Property Identifier="Email" DisplayName_L1="Email" DisplayName_L2="Email" TargetColumnIndex="11" Type="String" />
    <Property Identifier="EmailAliases" DisplayName_L1="Email Aliases" DisplayName_L2="Alias d'email" TargetColumnIndex="31" Type="String" />
    <Property Identifier="EmployeeId" DisplayName_L1="Employee Id" DisplayName_L2="Matricule" TargetColumnIndex="7" Type="String" />
    <Property Identifier="EndDate" DisplayName_L1="End Date" DisplayName_L2="Date de fin de fiche" TargetColumnIndex="6" Type="DateTime" />
    <Property Identifier="ExternalCompany" DisplayName_L1="External Company" DisplayName_L2="Société externe" TargetColumnIndex="132" Type="ForeignKey" />
    <Property Identifier="FirstName" DisplayName_L1="First Name" DisplayName_L2="Prénom" TargetColumnIndex="8" Type="String" />
    <Property Identifier="IGAManager" DisplayName_L1="IGA Manager" DisplayName_L2="Gestionnaire IGA" TargetColumnIndex="139" Type="ForeignKey" />
    <Property Identifier="LastName" DisplayName_L1="Last Name" DisplayName_L2="Nom" TargetColumnIndex="9" Type="String" />
    <Property Identifier="Login" DisplayName_L1="Login" DisplayName_L2="Login" TargetColumnIndex="10" Type="String" />
    <Property Identifier="MainUser" DisplayName_L1="User (main)" DisplayName_L2="Collaborateur (principal)" Type="ForeignKey" />
    <Property Identifier="Manager" DisplayName_L1="Manager" DisplayName_L2="Responsable" TargetColumnIndex="138" Type="ForeignKey" />
    <Property Identifier="MobileNumber" DisplayName_L1="Mobile Number" DisplayName_L2="Mobile" TargetColumnIndex="13" Type="String" />
    <Property Identifier="Organization" DisplayName_L1="Department" DisplayName_L2="Département" TargetColumnIndex="130" Type="ForeignKey" />
    <Property Identifier="PersonalTitle" DisplayName_L1="Personal Title" DisplayName_L2="Civilité" TargetColumnIndex="135" Type="ForeignKey" />
    <Property Identifier="PhoneNumber" DisplayName_L1="Phone Number" DisplayName_L2="Téléphone" TargetColumnIndex="12" Type="String" />
    <Property Identifier="PhoneticFirstLastName" DisplayName_L1="Phonetic First/Last Name" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="32" Type="String" />
    <Property Identifier="PhoneticFirstName" DisplayName_L1="Phonetic First Name" DisplayName_L2="Prénom phonétique" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="34" Type="String" />
    <Property Identifier="PhoneticLastFirstName" DisplayName_L1="Phonetic Last/First Name" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="33" Type="String" />
    <Property Identifier="PhoneticLastName" DisplayName_L1="Phonetic Last Name" DisplayName_L2="Nom phonétique" FlexibleComparisonExpression="C#:value:return value.Approximate();" TargetColumnIndex="35" Type="String" />
    <Property Identifier="PositionEndDate" DisplayName_L1="Position End Date" DisplayName_L2="Date de fin de poste" TargetColumnIndex="25" Type="DateTime" />
    <Property Identifier="PositionIdentifier" DisplayName_L1="Position Identifier" DisplayName_L2="Identifiant de poste" IsKey="true" TargetColumnIndex="26" Type="String" />
    <Property Identifier="PositionStartDate" DisplayName_L1="Position Start Date" DisplayName_L2="Date de début de poste" TargetColumnIndex="24" Type="DateTime" />
    <Property Identifier="Site" DisplayName_L1="Site" DisplayName_L2="Site" TargetColumnIndex="131" Type="ForeignKey" />
    <Property Identifier="StartDate" DisplayName_L1="Start Date" DisplayName_L2="Date de début de fiche" TargetColumnIndex="5" Type="DateTime" />
    <Property Identifier="Subsidiary" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" TargetColumnIndex="134" Type="ForeignKey" />
    <Property Identifier="Suspended" DisplayName_L1="Suspended" DisplayName_L2="Suspendu" TargetColumnIndex="17" Type="Bool" />
    <Property Identifier="Title" DisplayName_L1="Title" DisplayName_L2="Fonction" TargetColumnIndex="133" Type="ForeignKey" />
    <Property Identifier="User" DisplayName_L1="User" DisplayName_L2="Collaborateur" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="UserIdentifier" DisplayName_L1="User Identifier" DisplayName_L2="Identifiant unique" TargetColumnIndex="4" Type="String" />
    <Property Identifier="UserType" DisplayName_L1="User Type" DisplayName_L2="Type de collaborateur" TargetColumnIndex="129" Type="ForeignKey" />
    <Property Identifier="VIP" DisplayName_L1="VIP" DisplayName_L2="VIP" TargetColumnIndex="16" Type="Bool" />
</EntityType>
<EntityType Identifier="Directory_UserType" DisplayName_L1="User Type" DisplayName_L2="Type de collaborateur">
    <Property Identifier="Category" DisplayName_L1="Category" DisplayName_L2="Catégorie" TargetColumnIndex="128" Type="ForeignKey" />
    <Property Identifier="DisplayName" DisplayName_L1="Name" DisplayName_L2="Libellé" Type="String" />
    <Property Identifier="DisplayName_enUS" Language="1" NeutralProperty="DisplayName" TargetColumnIndex="5" Type="String" />
    <Property Identifier="DisplayName_frFR" Language="2" NeutralProperty="DisplayName" TargetColumnIndex="14" Type="String" />
    <Property Identifier="EmailSuffix" DisplayName_L1="Email Suffix" DisplayName_L2="Suffixe d'email" TargetColumnIndex="6" Type="String" />
    <Property Identifier="Identifier" DisplayName_L1="Code" DisplayName_L2="Code" IsKey="true" TargetColumnIndex="4" Type="String" />
    <Property Identifier="IsExternal" DisplayName_L1="External" DisplayName_L2="Externe" TargetColumnIndex="13" Type="Bool" />
    <Property Identifier="LoginPrefix" DisplayName_L1="Login Prefix" DisplayName_L2="Préfix de login" TargetColumnIndex="7" Type="String" />
    <Property Identifier="LoginSuffix" DisplayName_L1="Login Suffix" TargetColumnIndex="11" Type="String" />
    <Property Identifier="UniqueIdentifierPrefix" DisplayName_L1="Unique Identifier Prefix" TargetColumnIndex="8" Type="String" />
    <Property Identifier="UniqueIdentifierRangeEnd" DisplayName_L1="Unique Identifier Range End" TargetColumnIndex="10" Type="Int32" />
    <Property Identifier="UniqueIdentifierRangeStart" DisplayName_L1="Unique Identifier Range Start" TargetColumnIndex="9" Type="Int32" />
    <Property Identifier="UniqueIdentifierSuffix" DisplayName_L1="Unique Identifier Suffix" TargetColumnIndex="12" Type="String" />
    <Property Identifier="UserRecords" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" Type="ForeignKey" />
</EntityType>
<AccessControlEntityType Identifier="Directory_Subsidiary">
    <Property Identifier="EmailDomain" VisibilityGroup="Directory_Subsidiary_Administration" />
</AccessControlEntityType>
<AccessControlEntityType Identifier="Directory_UserRecord">
    <Property Identifier="BirthDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="BirthName" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ContractEndDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ContractStartDate" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="EmployeeId" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="ExternalCompany" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="PositionIdentifier" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="Suspended" VisibilityGroup="Directory_UserRecord_Administration" />
    <Property Identifier="UserIdentifier" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="UserType" VisibilityGroup="Directory_UserRecord_HR" />
    <Property Identifier="VIP" VisibilityGroup="Directory_UserRecord_Administration" />
</AccessControlEntityType>
<AccessControlEntityType Identifier="Directory_UserType">
    <Property Identifier="EmailSuffix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="LoginPrefix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierPrefix" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierRangeEnd" VisibilityGroup="Directory_UserType_Administration" />
    <Property Identifier="UniqueIdentifierRangeStart" VisibilityGroup="Directory_UserType_Administration" />
</AccessControlEntityType>
<EntityAssociation Identifier="Directory_Organization_Assistant" IsProperty2Collection="true" Property1="Directory_Organization:Assistant" Property2="Directory_User:AssistantOf" />
<EntityAssociation Identifier="Directory_Organization_Manager" IsProperty2Collection="true" Property1="Directory_Organization:Manager" Property2="Directory_User:ManagedOrganizations" />
<EntityAssociation Identifier="Directory_Organization_Parent" IsProperty2Collection="true" Property1="Directory_Organization:Parent" Property2="Directory_Organization:Children" />
<EntityAssociation Identifier="Directory_Organization_Type" IsProperty2Collection="true" Property1="Directory_Organization:Type" Property2="Directory_OrganizationType:Organizations" />
<EntityAssociation Identifier="Directory_Region_Country" IsProperty2Collection="true" Property1="Directory_Region:Country" Property2="Directory_Country:Regions" />
<EntityAssociation Identifier="Directory_Site_Region" IsProperty2Collection="true" Property1="Directory_Site:Region" Property2="Directory_Region:Sites" />
<EntityAssociation Identifier="Directory_Title_JobCategory" IsProperty2Collection="true" Property1="Directory_Title:JobCategory" Property2="Directory_JobCategory:Titles" />
<EntityAssociation Identifier="Directory_UserRecord_EffectiveIGAManager" IsProperty2Collection="true" Property1="Directory_UserRecord:EffectiveIGAManager" Property2="Directory_User:EffectiveIGADirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_ExternalCompany" IsProperty2Collection="true" Property1="Directory_UserRecord:ExternalCompany" Property2="Directory_ExternalCompany:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_IGAManager" IsProperty2Collection="true" Property1="Directory_UserRecord:IGAManager" Property2="Directory_User:IGADirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_MainRecord" Property1="Directory_UserRecord:MainUser" Property2="Directory_User:MainRecord" />
<EntityAssociation Identifier="Directory_UserRecord_Manager" IsProperty2Collection="true" Property1="Directory_UserRecord:Manager" Property2="Directory_User:DirectReports" />
<EntityAssociation Identifier="Directory_UserRecord_Organization" IsProperty2Collection="true" Property1="Directory_UserRecord:Organization" Property2="Directory_Organization:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_PersonalTitle" IsProperty2Collection="true" Property1="Directory_UserRecord:PersonalTitle" Property2="Directory_PersonalTitle:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Site" IsProperty2Collection="true" Property1="Directory_UserRecord:Site" Property2="Directory_Site:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Subsidiary" IsProperty2Collection="true" Property1="Directory_UserRecord:Subsidiary" Property2="Directory_Subsidiary:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_Title_User_Records" IsProperty2Collection="true" Property1="Directory_UserRecord:Title" Property2="Directory_Title:UserRecords" />
<EntityAssociation Identifier="Directory_UserRecord_User" IsProperty2Collection="true" Property1="Directory_UserRecord:User" Property2="Directory_User:Records" />
<EntityAssociation Identifier="Directory_UserRecord_UserType" IsProperty2Collection="true" Property1="Directory_UserRecord:UserType" Property2="Directory_UserType:UserRecords" />
<EntityAssociation Identifier="Directory_UserType_Category" IsProperty2Collection="true" Property1="Directory_UserType:Category" Property2="Directory_UserCategory:Types" />
<EntityAssociation Identifier="Directory_User_PresenceState" IsProperty2Collection="true" Property1="Directory_User:PresenceState" Property2="Directory_PresenceState:Users" />
<EntityPropertyExpression Identifier="Directory_ExternalCompany_PhotoTag" Binding="Directory_ExternalCompany:Photo.Id" EntityType="Directory_ExternalCompany" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_Organization_FullName" EntityType="Directory_Organization" Expression="C#:organization:return (organization.Parent == null ? null : (organization.Parent.FullName + " / ")) + organization.DisplayName;" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Organization_InternalDisplayName_L1" Binding="Directory_Organization:FullName" EntityType="Directory_Organization" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Region_FullName" EntityType="Directory_Region" Expression="C#:region:return region.Country == null ? region.DisplayName : (region.Country.DisplayName + " / " + region.DisplayName);" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Region_InternalDisplayName_L1" Binding="Directory_Region:FullName" EntityType="Directory_Region" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Site_FullName" EntityType="Directory_Site" Expression="C#:site:
var path = string.Empty;
if (site.Region != null)
{
if (site.Region.Country != null)
{
path = site.Region.Country.DisplayName + " / ";
}
path += site.Region.DisplayName + " / ";
}
path += site.DisplayName;
return path;" Property="FullName" />
<EntityPropertyExpression Identifier="Directory_Site_InternalDisplayName_L1" Binding="Directory_Site:FullName" EntityType="Directory_Site" Priority="1" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_Site_PhotoTag" Binding="Directory_Site:Photo.Id" EntityType="Directory_Site" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_Subsidiary_PhotoTag" Binding="Directory_Subsidiary:Photo.Id" EntityType="Directory_Subsidiary" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_UserRecord_EffectiveIGAManager" EntityType="Directory_UserRecord" Expression="C#:record:
var managerId = record.IGAManager?.Id;
if (managerId != default)
{
/* There is an explicit IGA Manager */
return managerId;
}
managerId = record.Manager?.Id;
if (managerId != default)
{
/* There is an explicit Manager */
return managerId;
}
if (record.Organization == null)
{
/* No org => we can't get any manager */
return managerId;
}
managerId = record.Organization.Manager?.Id;
if (managerId == null)
{
/* No org manager => we can't get any manager */
return managerId;
}
if (record.User?.Id != managerId)
{
/* The current user is not his org's manager => we take the org's manager */
return managerId;
}
/* We take the N+2 org's manager */
managerId = record.Organization.Parent?.Manager?.Id;
return managerId;" Property="EffectiveIGAManager" />
<EntityPropertyExpression Identifier="Directory_UserRecord_InternalDisplayName" EntityType="Directory_UserRecord" Expression="C#:record:
var ret = "";
if (record.UserIdentifier != null)
{
ret += record.UserIdentifier + " - ";
}
ret += record.LastName + ' ' + record.FirstName;
return ret;" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticFirstLastName" EntityType="Directory_UserRecord" Expression="C#:record:return (record.FirstName + ' ' + record.LastName).Approximate();" Property="PhoneticFirstLastName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticFirstName" EntityType="Directory_UserRecord" Expression="C#:person:return person.FirstName.Approximate();" Property="PhoneticFirstName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticLastFirstName" EntityType="Directory_UserRecord" Expression="C#:record:return (record.LastName + ' ' + record.FirstName).Approximate();" Property="PhoneticLastFirstName" />
<EntityPropertyExpression Identifier="Directory_UserRecord_PhoneticLastName" EntityType="Directory_UserRecord" Expression="C#:person:return person.LastName.Approximate();" Property="PhoneticLastName" />
<EntityPropertyExpression Identifier="Directory_User_Email" Binding="Directory_User:MainRecord.Email" EntityType="Directory_User" Property="Email" />
<EntityPropertyExpression Identifier="Directory_User_InternalDisplayName" EntityType="Directory_User" Expression="C#:user:
var ret = "";
if (user.Identifier != null)
{
ret += user.Identifier;
}
if (user.MainRecord != null)
{
if (user.Identifier != null)
{
    ret += " - ";
}
ret += user.MainRecord.LastName + ' ' + user.MainRecord.FirstName;
}
return ret;" Property="InternalDisplayName" />
<EntityPropertyExpression Identifier="Directory_User_LastFirstName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : (user.MainRecord.LastName + ' ' + user.MainRecord.FirstName);" Property="LastFirstName" />
<EntityPropertyExpression Identifier="Directory_User_MainRecord" EntityType="Directory_User" Expression="C#:user:
/* trivial cases first */
if ((user.Records == null) || (user.Records.Count == 0))
{
return default(long?);
}
if (user.Records.Count == 1)
{
return user.Records[0].Id;
}
var now = DateTime.UtcNow;
var records = new System.Collections.Generic.List<(long? id, bool main, System.DateTime start, System.DateTime end)>();
foreach (var record in user.Records)
{
var id = record.Id;
records.Add((id, false, record.StartDate ?? System.DateTime.MinValue, record.EndDate ?? System.DateTime.MaxValue));
records.Add((id, false, record.ContractStartDate ?? System.DateTime.MinValue, record.ContractEndDate ?? System.DateTime.MaxValue));
records.Add((id, false, record.PositionStartDate ?? System.DateTime.MinValue, record.PositionEndDate ?? System.DateTime.MaxValue));
}
/* all the records are in the future, take the closest one */
if (records.All(r => r.start > now))
{
return records.OrderBy(r => (r.start, r.main, r.id)).First().id;
}
/* all the records are in the past, take the closest one */
if (records.All(r => r.end < now))
{
return records.OrderByDescending(r => (r.end, r.main, r.id.HasValue ? -r.id.Value : long.MinValue)).First().id;
}
/* find the closest current record */
var currentRecord = records.Where(r => (r.start < now) && (r.end > now)).OrderByDescending(r => (r.start, r.main, r.id.HasValue ? -r.id.Value : long.MinValue)).Select(r => r.id).FirstOrDefault();
if (currentRecord == null)
{
/* current record not found : take the first */
currentRecord = records.OrderBy(r => (r.main, r.id)).First().id;
}
return currentRecord;
" Priority="-2" Property="MainRecord" />
<EntityPropertyExpression Identifier="Directory_User_PhoneticFirstLastName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : user.MainRecord.PhoneticFirstLastName;" Property="PhoneticFirstLastName" />
<EntityPropertyExpression Identifier="Directory_User_PhoneticLastFirstName" EntityType="Directory_User" Expression="C#:user:return user.MainRecord == null ? null : user.MainRecord.PhoneticLastFirstName;" Property="PhoneticLastFirstName" />
<EntityPropertyExpression Identifier="Directory_User_PhotoTag" Binding="Directory_User:Photo.Id" EntityType="Directory_User" Property="PhotoTag" />
<EntityPropertyExpression Identifier="Directory_User_PresenceState" EntityType="Directory_User" Expression="C#:user:
if (user.IsDraft.GetValueOrDefault())
{
return -103L;
}
if ((user.Records == null) || (user.Records.Count == 0))
{
return -100L;
}
/* at least of current record */
if (user.Records.Any(r => (!r.ContractStartDate.HasValue || (r.ContractStartDate < DateTime.UtcNow)) && (!r.ContractEndDate.HasValue || (r.ContractEndDate > DateTime.UtcNow))
{
return -101L;
}
/* at least of record in the future */
if (user.Records.Any(r => r.ContractStartDate.HasValue && (r.ContractStartDate > DateTime.UtcNow)
{
return -102L;
}
return -100L;" Property="PresenceState" />
<Dimension Identifier="Country0" DisplayName_L1="Country" DisplayName_L2="Pays" ColumnMapping="3" EntityType="Directory_Country" />
<Dimension Identifier="ExternalCompany0" DisplayName_L1="External Company" DisplayName_L2="Société externe" ColumnMapping="7" EntityType="Directory_ExternalCompany" />
<Dimension Identifier="Organization0" DisplayName_L1="Department" DisplayName_L2="Département" EntityType="Directory_Organization" IsHierarchical="true" ParentProperty="Parent" />
<Dimension Identifier="OrganizationType0" DisplayName_L1="Department Type" DisplayName_L2="Type de département" ColumnMapping="5" EntityType="Directory_OrganizationType" />
<Dimension Identifier="Site0" DisplayName_L1="Site" DisplayName_L2="Site" ColumnMapping="2" EntityType="Directory_Site" />
<Dimension Identifier="Subsidiary0" DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" ColumnMapping="6" EntityType="Directory_Subsidiary" />
<Dimension Identifier="Title0" DisplayName_L1="Title" DisplayName_L2="Fonction" ColumnMapping="1" EntityType="Directory_Title" />
<Dimension Identifier="User0" DisplayName_L1="User" DisplayName_L2="Collaborateur" ColumnMapping="8" EntityType="Directory_User" />
<Dimension Identifier="UserCategory0" DisplayName_L1="User Category" DisplayName_L2="Type de collaborateur" ColumnMapping="4" EntityType="Directory_UserCategory" />
<Resource Id="-103" DisplayName_L1="Pending Approval" C4="D" C5="Pending Approval" Type="Directory_PresenceState" />
<RecordSection Identifier="Directory_UserRecord_Contract" DisplayName_L1="Contract Properties" EndProperty="ContractEndDate" InstanceKeyExpression="C#:record:return record.ContractIdentifier;" IsDefaultBoundariesSection="true" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="ContractStartDate">
    <Property Property="ContractIdentifier" />
    <Property Property="ExternalCompany" />
    <Property Property="Subsidiary" />
    <Property Property="UserType" />
</RecordSection>
<RecordSection Identifier="Directory_UserRecord_Default" DisplayName_L1="User Properties" EndProperty="EndDate" InstanceKeyExpression="C#:record:return record.StartDate.HasValue ? record.StartDate.Value.ToString("yyyyMMdd") : string.Empty;" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="StartDate" />
<RecordSection Identifier="Directory_UserRecord_Position" DisplayName_L1="Position Properties" EndProperty="PositionEndDate" InstanceKeyExpression="C#:record:return record.PositionIdentifier;" ResourceEntityType="Directory_UserRecord" SourceEntityType="Directory_User" StartProperty="PositionStartDate">
    <Property Property="EffectiveIGAManager" />
    <Property Property="IGAManager" />
    <Property Property="Manager" />
    <Property Property="Organization" />
    <Property Property="PositionIdentifier" />
    <Property Property="Site" />
    <Property Property="Title" />
</RecordSection>
<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" B0="Directory_UserRecord:Organization" B1="Directory_UserRecord:Title" B2="Directory_UserRecord:Site" B3="Directory_UserRecord:Site.Region.Country" B4="Directory_UserRecord:UserType.Category" B5="Directory_UserRecord:Organization.Type" B6="Directory_UserRecord:Subsidiary" B7="Directory_UserRecord:ExternalCompany" ExcludeExpression="C#:record:return record.IsDraft.GetValueOrDefault();" Policy="Default" ResourcesBinding="Directory_User:Records" ResourcesEndExpression="C#:record:return record.EndDate ?? record.PositionEndDate ?? record.ContractEndDate;" ResourcesStartExpression="C#:record:return record.StartDate ?? record.PositionStartDate ?? record.ContractStartDate;" RiskFactorType="Max" SourceEntityType="Directory_User" />
<Connector Identifier="Directory" DisplayName_L1="Directory" Agent="Default" CompleteJob="NotUsed" IncrementalJob="NotUsed" />
<EntityTypeMapping Identifier="Directory_PresenceState" Connector="Directory" />
<EntityTypeMapping Identifier="Directory_UserRecord" ConnectionTable="Directory_UserRecord" Connector="Directory">
    <Property Identifier="UserIdentifier" ConnectionColumn="User" />
</EntityTypeMapping>
<Tile Identifier="Directory_UserRecord_Tile1" DisplayName_L1="User: first/last name" EntityType="Directory_UserRecord" TileDesignElement="picture-text">
    <Item Binding="FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />
    <Item Binding="LastName" LineDisplayOrderIndicator="2" LineNumber="2" />
    <Item Binding="Title.DisplayName" LineNumber="3" />
    <Item Binding="User.Id" LineNumber="5" />
    <Item Binding="User.PhotoTag" LineNumber="6" />
</Tile>
<Tile Identifier="Directory_UserRecord_Tile2" DisplayName_L1="User: dep/loc" EntityType="Directory_UserRecord" TileDesignElement="inline data-icon">
    <Item Binding="Organization.DisplayName" LineNumber="1" />
    <Item Binding="Site.DisplayName" LineNumber="2" />
</Tile>
<Tile Identifier="Directory_UserRecord_Tile3" DisplayName_L1="User: contact" EntityType="Directory_UserRecord" TileDesignElement="inline data-icon">
    <Item Binding="PhoneNumber" LineNumber="1" />
    <Item Binding="MobileNumber" LineNumber="2" />
</Tile>
<Tile Identifier="Directory_User_Tile1" DisplayName_L1="User: first/last name" EntityType="Directory_User" TileDesignElement="picture-text">
    <Item Binding="Id" LineNumber="5" />
    <Item Binding="PhotoTag" LineNumber="6" />
</Tile>
<Tile Identifier="Directory_User_Tile2" DisplayName_L1="User: dep/loc" EntityType="Directory_User" TileDesignElement="inline data-icon" />
<Tile Identifier="Directory_User_Tile3" DisplayName_L1="User: contact" EntityType="Directory_User" TileDesignElement="inline data-icon" />
<DisplayTable Identifier="Directory_ExternalCompany" DisplayTableDesignElement="table" EntityType="Directory_ExternalCompany" IsEntityTypeDefault="true">
    <Column CanBeFiltered="true" ColumnSize="12" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Organization" DisplayTableDesignElement="table" EntityType="Directory_Organization" IsEntityTypeDefault="true" ParentProperty="Parent">
    <Column CanBeFiltered="true" ColumnSize="6" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column DisplayName_L1="Manager" DisplayName_L2="Responsable" ColumnSize="4" DisplayBinding="Manager.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
    <Column DisplayName_L1="Type" DisplayName_L2="Type" ColumnSize="2" DisplayBinding="Type.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Site" DisplayTableDesignElement="table" EntityType="Directory_Site" IsEntityTypeDefault="true">
    <Column DisplayName_L1="Country" DisplayName_L2="Pays" CanBeFiltered="true" ColumnSize="2" DefaultSortPriority="1" DisplayBinding="Region.Country.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column DisplayName_L1="State" DisplayName_L2="Région" CanBeFiltered="true" ColumnSize="2" DefaultSortPriority="2" DisplayBinding="Region.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
    <Column CanBeFiltered="true" ColumnSize="8" DefaultSortPriority="3" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_Subsidiary" DisplayTableDesignElement="table" EntityType="Directory_Subsidiary" IsEntityTypeDefault="true">
<Column CanBeFiltered="true" ColumnSize="12" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_User" DisplayTableDesignElement="list" EntityType="Directory_User" IsEntityTypeDefault="true">
<Column ColumnSize="3" Tile="Directory_User_Tile3" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord" DisplayTableDesignElement="list" EntityType="Directory_UserRecord" IsEntityTypeDefault="true">
<Column ColumnSize="6" DefaultSortPriority="1" IsDisplayInSummaryView="true" SortBinding="LastName" Tile="Directory_UserRecord_Tile1" />
<Column ColumnSize="3" IsDisplayInSummaryView="true" SortBinding="FirstName" Tile="Directory_UserRecord_Tile2" />
<Column ColumnSize="3" Tile="Directory_UserRecord_Tile3" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_Helpdesk" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayName_L1="Title" DisplayName_L2="Fonction" DisplayBinding="Title.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Department" DisplayName_L2="Département" DisplayBinding="Organization.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Site" DisplayName_L2="Site" DisplayBinding="Site.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Date de début" DisplayBinding="StartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Date de fin" DisplayBinding="EndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_Homonym" DisplayTableDesignElement="table" EntityType="Directory_UserRecord" HomonymEntityLink="Directory_UserRecord">
<Column ColumnSize="2" DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column ColumnSize="2" DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column ColumnSize="2" DisplayBinding="BirthName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayName_L1="UserType" DisplayName_L2="Type" ColumnSize="2" DisplayBinding="UserType.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
<Column DisplayName_L1="External Company" DisplayName_L2="Société externe" DisplayBinding="ExternalCompany.InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_ManageContracts" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayBinding="EmployeeId" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="User Type" DisplayName_L2="Type" DisplayBinding="UserType.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Subsidiary" DisplayName_L2="Filiale" DisplayBinding="Subsidiary.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Début" DisplayBinding="ContractStartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Fin" DisplayBinding="ContractEndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserRecord_ManagePositions" DisplayTableDesignElement="table" EntityType="Directory_UserRecord">
<Column DisplayBinding="PositionIdentifier" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Title" DisplayName_L2="Fonction" DisplayBinding="Title.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Department" DisplayName_L2="Département" DisplayBinding="Organization.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Site" DisplayName_L2="Site" DisplayBinding="Site.InternalDisplayName" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="Start Date" DisplayName_L2="Début" DisplayBinding="PositionStartDate" IsDisplayInSummaryView="true" />
<Column DisplayName_L1="End Date" DisplayName_L2="Fin" DisplayBinding="PositionEndDate" IsDisplayInSummaryView="true" />
</DisplayTable>
<DisplayTable Identifier="Directory_UserType" DisplayTableDesignElement="table" EntityType="Directory_UserType" IsEntityTypeDefault="true">
<Column CanBeFiltered="true" ColumnSize="8" DefaultSortPriority="1" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
<Column CanBeFiltered="true" ColumnSize="4" DisplayBinding="Category.DisplayName" IsDisplayInSummaryView="true" IsResizable="true" />
</DisplayTable>
<MenuItem Identifier="Dashboard_Directory" DisplayName_L1="Directory" DisplayName_L2="Référentiel" ParentMenuItem="Dashboard" />
<MenuItem Identifier="Nav_Directory" DisplayName_L1="Directory" DisplayName_L2="Référentiel" ParentMenuItem="Nav">
<MenuItem Identifier="Nav_Directory_User" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" EntityType="Directory_User" />
<MenuItem Identifier="Nav_Directory_Title" DisplayName_L1="Titles" DisplayName_L2="Fonctions" EntityType="Directory_Title" />
<MenuItem Identifier="Nav_Directory_JobCategory" DisplayName_L1="Job Categories" DisplayName_L2="Familles de métier" EntityType="Directory_JobCategory" />
<MenuItem Identifier="Nav_Directory_UserType" DisplayName_L1="User Types" DisplayName_L2="Types de collaborateur" EntityType="Directory_UserType" />
<MenuItem Identifier="Nav_Directory_UserCategory" DisplayName_L1="User Categories" DisplayName_L2="Familles de types de collaborateurs" EntityType="Directory_UserCategory" />
<MenuItem Identifier="Nav_Directory_Subsidiary" DisplayName_L1="Subsidiaries" DisplayName_L2="Filiales" EntityType="Directory_Subsidiary" />
<MenuItem Identifier="Nav_Directory_Organization" DisplayName_L1="Departments" DisplayName_L2="Départements" EntityType="Directory_Organization" />
<MenuItem Identifier="Nav_Directory_OrganizationType" DisplayName_L1="Department Types" DisplayName_L2="Types de département" EntityType="Directory_OrganizationType" />
<MenuItem Identifier="Nav_Directory_ExternalCompany" DisplayName_L1="External Companies" DisplayName_L2="Sociétés externes" EntityType="Directory_ExternalCompany" />
<MenuItem Identifier="Nav_Directory_Country" DisplayName_L1="Countries" DisplayName_L2="Pays" EntityType="Directory_Country" />
<MenuItem Identifier="Nav_Directory_Region" DisplayName_L1="Regions" DisplayName_L2="Régions" EntityType="Directory_Region" />
<MenuItem Identifier="Nav_Directory_Site" DisplayName_L1="Sites" DisplayName_L2="Sites" EntityType="Directory_Site" />
<MenuItem Identifier="Nav_Directory_PersonalTitle" DisplayName_L1="Personal Titles" DisplayName_L2="Civilités" EntityType="Directory_PersonalTitle" />
<MenuItem Identifier="Nav_Directory_UserRecord" DisplayName_L1="User Records" DisplayName_L2="Fiches de collaborateur" EntityType="Directory_UserRecord" />
<MenuItem Identifier="Nav_Directory_PresenceState" DisplayName_L1="Presence States" DisplayName_L2="Etats de présence" EntityType="Directory_PresenceState" />
<MenuItem Identifier="Nav_Directory_ReservedIdentifier" DisplayName_L1="Reserved Identifiers" DisplayName_L2="Identifiants réservés" EntityType="Directory_ReservedIdentifier" />
<MenuItem Identifier="Nav_Directory_ReservedEmail" DisplayName_L1="Reserved Emails" DisplayName_L2="Emails réservés" EntityType="Directory_ReservedEmail" />
<MenuItem Identifier="Nav_Directory_ReservedLogin" DisplayName_L1="Reserved Logins" DisplayName_L2="Logins réservés" EntityType="Directory_ReservedLogin" />
</MenuItem>
<MenuItem Identifier="Reports" DisplayName_L2="Rapports">
<MenuItem Identifier="Reports_Workforce_RoleModel_CompositeRoles" ReportQuery="Workforce_RoleModel_CompositeRoles" />
<MenuItem Identifier="Reports_Workforce_RoleModel_SingleRoles" ReportQuery="Workforce_RoleModel_SingleRoles" />
<MenuItem Identifier="Reports_Workforce_RoleModel_ResourceTypes" ReportQuery="Workforce_RoleModel_ResourceTypes" />
<MenuItem Identifier="Reports_Workforce_Directory_Users" ReportQuery="Workforce_Directory_Users" />
<MenuItem Identifier="Reports_Workforce_Directory_InternalUsers" ReportQuery="Workforce_Directory_InternalUsers" />
<MenuItem Identifier="Reports_Workforce_Directory_ExternalUsers" ReportQuery="Workforce_Directory_ExternalUsers" />
<MenuItem Identifier="Reports_Workforce_Directory_PlannedUserExists" ReportQuery="Workforce_Directory_PlannedUserExists" />
</MenuItem>
<MenuItem Identifier="Search_Directory_User" DisplayName_L1="Menu" DisplayName_L2="Menu">
<MenuItem Identifier="Search_Directory_User_NewInternal" DisplayName_L1="New Employee" DisplayName_L2="Entrée d'un interne" IconCode="AddFriend" Workflow="Directory_User_NewInternal" />
<MenuItem Identifier="Search_Directory_User_NewExternal" DisplayName_L1="New Contractor" DisplayName_L2="Entrée d'un externe" IconCode="AddFriend" Workflow="Directory_User_NewExternal" />
<MenuItem Identifier="Search_Directory_User_Helpdesk_Start" DisplayName_L1="New User (helpdesk)" DisplayName_L2="Nouveau collaborateur (helpdesk)" IconCode="AddFriend" Workflow="Helpdesk_Directory_User_New" />
</MenuItem>
<MenuItem Identifier="Top_Directory_User" DisplayName_L1="Users" DisplayName_L2="Collaborateurs" EntityType="Directory_User" ParentMenuItem="Top" />
<MenuItem Identifier="UserMenu">
<MenuItem Identifier="UserMenu_Directory_User" DisplayName_L1="View My Data" DisplayName_L2="Voir mes données" EntityType="Directory_User" IsSelfForm="true" />
<MenuItem Identifier="UserMenu_Directory_User_Self_ResourcesUpdate" DisplayName_L1="Change My Permissions" DisplayName_L2="Modifier mes permissions" IsSelfForm="true" Workflow="Self_ResourcesUpdate" />
</MenuItem>
<MenuItem Identifier="View_Directory_User" DisplayName_L1="Menu" DisplayName_L2="Menu">
<MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions" DisplayName_L2="Actions">
    <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="Menu_Directory_User_Changes_UpdatePersonalData" DisplayName_L1="Update Personal Data" DisplayName_L2="Modifier les informations personnelles" IconCode="Edit" Workflow="Directory_User_UpdatePersonalData" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ManageContracts" DisplayName_L1="Manage Contracts" DisplayName_L2="Gérer les contrats" IconCode="Edit" Workflow="Directory_User_ManageContracts" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ManagePositions" DisplayName_L1="Manage Positions" DisplayName_L2="Gérer les postes" IconCode="Edit" Workflow="Directory_User_ManagePositions" />
    <MenuItem Identifier="Menu_Directory_User_Changes_ResourcesUpdate" DisplayName_L1="Modify Permissions" DisplayName_L2="Modifier les droits" IconCode="Edit" Workflow="Directory_User_UpdateResources" />
    <MenuItem Identifier="Menu_Directory_User_Changes_Suspend" DisplayName_L1="Suspend" DisplayName_L2="Suspendre" IconCode="Edit" Workflow="Directory_User_Suspend" />
    <MenuItem Identifier="Menu_Directory_User_Changes_Reactivate" DisplayName_L1="Reactivate" DisplayName_L2="Réactiver" IconCode="Edit" Workflow="Directory_User_Reactivate" />
    </MenuItem>
</MenuItem>
<MenuItem Identifier="View_Directory_User_Helpdesk" DisplayName_L1="Helpdesk" DisplayName_L2="Helpdesk" IconCode="Phone">
    <MenuItem Identifier="View_Directory_User_Helpdesk_Update" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="View_Directory_User_Helpdesk_FixRecord" DisplayName_L1="Repair Data (helpdesk)" DisplayName_L2="Réparer les données (helpdesk)" IconCode="Edit" Workflow="Helpdesk_Directory_User_FixRecord" />
    </MenuItem>
    <MenuItem Identifier="View_Directory_User_Helpdesk_Delete" DisplayName_L1="Section" DisplayName_L2="Section">
    <MenuItem Identifier="View_Directory_User_Helpdesk_Directory_User_Delete" DisplayName_L1="Delete User (helpdesk)" DisplayName_L2="Supprimer un collaborateur (helpdesk)" IconCode="Cancel" Workflow="Helpdesk_Directory_User_Delete" />
    </MenuItem>
</MenuItem>
</MenuItem>
<DisplayEntityType Identifier="Directory_Country" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Countries" PluralDisplayName_L2="Pays">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Regions" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ExternalCompany" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Companies" PluralDisplayName_L2="Sociétés">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_JobCategory" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Business Categories" PluralDisplayName_L2="Catégories de métier">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Titles" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Organization" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Departments" PluralDisplayName_L2="Départements">
<Property Identifier="Children" OutputType="BasicCollection" />
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_OrganizationType" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Department Types" PluralDisplayName_L2="Types de départment">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Organizations" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_PersonalTitle" Color="#95c18b" PluralDisplayName_L1="Personal Titles" PluralDisplayName_L2="Civilités">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_PresenceState" PluralDisplayName_L1="User Status" PluralDisplayName_L2="Etats de présence" />
<DisplayEntityType Identifier="Directory_Region" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Regions" PluralDisplayName_L2="Régions">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Sites" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedEmail" PluralDisplayName_L1="Reserved Emails">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedIdentifier" PluralDisplayName_L1="Reserved Unique Identifiers">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_ReservedLogin" PluralDisplayName_L1="Reserved Logins">
<Property Identifier="Value" DisplayOrder="-1" IsRequired="true" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Site" AutocompleteBinding="Directory_Site:DisplayName" Color="#95c18b" IconCode="MapPin" PluralDisplayName_L1="Sites" PluralDisplayName_L2="Sites">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" InputType="Picker" IsReadOnly="true" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Subsidiary" Color="#95c18b" IconCode="Suitcase" PluralDisplayName_L1="Subsidiaries" PluralDisplayName_L2="Filiales">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_Title" AutocompleteBinding="Directory_Title:Identifier" Color="#95c18b" IconCode="Suitcase" MinSearchLength="5" PluralDisplayName_L1="Titles" PluralDisplayName_L2="Fonctions">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_User" Color="#79C3D2" D0IsActive="true" D1IsActive="true" D2IsActive="true" D3IsActive="true" D4IsActive="true" D5IsActive="true" D6IsActive="true" D7IsActive="true" IconCode="People" PluralDisplayName_L1="Users" PluralDisplayName_L2="Collaborateurs" Priority="0">
<Property Identifier="AssistantOf" OutputType="BasicCollection" />
<Property Identifier="Identifier" DisplayOrder="-1" />
<Property Identifier="ManagedOrganizations" InputType="Picker" OutputType="BasicCollection" />
<Property Identifier="PhotoTag" IsHidden="true" IsReadOnly="true" />
<Property Identifier="Records" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserCategory" Color="#95c18b" PluralDisplayName_L1="User Categories" PluralDisplayName_L2="Familles de types de collaborateurs">
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="Types" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserRecord" PluralDisplayName_L1="User Records" PluralDisplayName_L2="Fiches de collaborateurs">
<Property Identifier="ContractEndDate" AddedMinutes="1440" />
<Property Identifier="EndDate" AddedMinutes="1440" />
<Property Identifier="FirstName" IsRequired="true" />
<Property Identifier="LastName" IsRequired="true" />
<Property Identifier="PersonalTitle" InputType="Combobox" />
<Property Identifier="PositionEndDate" AddedMinutes="1440" />
<Property Identifier="UserType" InputType="Combobox" />
</DisplayEntityType>
<DisplayEntityType Identifier="Directory_UserType" Color="#95c18b" PluralDisplayName_L1="User Types" PluralDisplayName_L2="Types de collaborateurs">
<Property Identifier="Category" InputType="Combobox" />
<Property Identifier="DisplayName" IsRequired="true" />
<Property Identifier="Identifier" DisplayOrder="-1" IsRequired="true" />
<Property Identifier="UserRecords" NavigationBinding="Directory_UserRecord:User" OutputType="BasicCollection" />
</DisplayEntityType>
<DisplayEntityType Identifier="Workflow_Directory_User" Color="#79C3D2" Priority="0" />
<Form Identifier="Base_Directory_Organization" EntityType="Directory_Organization">
<Control DisplayName_L1="Organizational Data" DisplayName_L2="Données organisationnelles" Name="Organizational Data" OutputType="LayoutFieldset">
    <Control Binding="Type" />
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="FullName" IsReadOnly="true" />
    <Control Binding="Manager" />
    <Control Binding="Assistant" />
</Control>
<Control DisplayName_L1="Additional Data" DisplayName_L2="Informations complémentaires" Name="Additional Data" OutputType="LayoutFieldset">
    <Control Binding="Parent" />
    <Control Binding="Children" IsReadOnly="true" />
    <Control Binding="UserRecords" IsReadOnly="true" />
</Control>
</Form>
<Form Identifier="Base_Directory_Site" EntityType="Directory_Site">
<Control DisplayName_L1="Address" DisplayName_L2="Adresse" Name="Address" OutputType="LayoutFieldset">
    <Control Binding="Name" />
    <Control Binding="StreetNumber" />
    <Control Binding="StreetName" />
    <Control Binding="StreetType" />
    <Control Binding="Floor" />
    <Control Binding="PostalCode" />
    <Control Binding="Town" />
    <Control Binding="Region" />
    <Control Binding="Region.Country" IsReadOnly="true" />
    <Control Binding="Photo" OutputType="Image" />
</Control>
<Control DisplayName_L1="Additional Data" DisplayName_L2="Informations complémentaires" Name="Additional Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="UserRecords" />
    <Control Binding="Longitude" />
    <Control Binding="Latitude" />
    <Control Binding="Url" />
    <Control Binding="PreferredLanguage" />
    <Control Binding="TimeZone" />
</Control>
</Form>
<Form Identifier="Directory_UserRecord_View" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" />
    <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="User.Photo" OutputType="Image" />
    <Control Binding="UserIdentifier" ColumnSize="4" />
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="VIP" />
</Control>
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="Suspended" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control DisplayName_L1="Risk" DisplayName_L2="Risk" Name="Risk" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Score" DisplayName_L2="Score" Binding="User.ResourceRiskScore.Score" />
    <Control DisplayName_L1="Rating" DisplayName_L2="Rating" Binding="User.ResourceRiskScore.Rating" />
</Control>
</Form>
<Form Identifier="Directory_UserRecord_ViewPosition" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Organization" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="EffectiveIGAManager" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" />
</Control>
</Form>
<ResourceViewEntityForm Identifier="View_Directory_Organization" EntityType="Directory_Organization" IsDefaultViewForm="true" Menu="View_Directory_Organization">
<Control EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</ResourceViewEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_Site" EntityType="Directory_Site" IsDefaultViewForm="true" Menu="View_Directory_Site">
<Control EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</ResourceViewEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_Subsidiary" EntityType="Directory_Subsidiary" IsDefaultViewForm="true" Menu="View_Directory_Subsidiary">
<Control DisplayName_L1="General Data" DisplayName_L2="Informations générales" Name="General Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="Photo" OutputType="Image" />
    <Control Binding="UserRecords" />
</Control>
<Control DisplayName_L1="Technical Data" DisplayName_L2="Informations techniques" Name="Technical Data" OutputType="LayoutFieldset">
    <Control Binding="EmailDomain" />
</Control>
</ResourceViewEntityForm>
<ResourceViewRecordEntityForm Identifier="View_Directory_User" EntityType="Directory_User" IsDefaultViewForm="true" Menu="View_Directory_User" RecordEndProperty="Directory_UserRecord:EndDate" RecordFilter="All" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:StartDate">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Directory_UserRecord_View" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" OutputType="TransformImport" />
<RecordItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
</ResourceViewRecordEntityForm>
<ResourceViewEntityForm Identifier="View_Directory_UserType" EntityType="Directory_UserType" IsDefaultViewForm="true" Menu="View_Directory_UserType">
<Control DisplayName_L1="General Data" DisplayName_L2="Informations générales" Name="General Data" OutputType="LayoutFieldset">
    <Control Binding="Identifier" />
    <Control Binding="DisplayName" />
    <Control Binding="Category" />
    <Control Binding="UserRecords" />
</Control>
<Control DisplayName_L1="Technical Data" DisplayName_L2="Informations techniques" Name="Technical Data" OutputType="LayoutFieldset">
    <Control Binding="UniqueIdentifierPrefix" />
    <Control Binding="UniqueIdentifierSuffix" />
    <Control Binding="UniqueIdentifierRangeStart" />
    <Control Binding="UniqueIdentifierRangeEnd" />
    <Control Binding="EmailSuffix" />
    <Control Binding="LoginPrefix" />
    <Control Binding="LoginSuffix" />
</Control>
</ResourceViewEntityForm>
<ResourceViewRecordEntityForm Identifier="View_Self" EntityType="Directory_User" FormTitle_L1="My Data" IsDefaultSelfForm="true" RecordEndProperty="Directory_UserRecord:EndDate" RecordFilter="Current" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:StartDate">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Directory_UserRecord_View" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
<RecordItemControl EmbeddedForm="Directory_UserRecord_ViewPosition" OutputType="TransformImport" />
</ResourceViewRecordEntityForm>
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Organization_Create" Activity="Directory_Organization_Create:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="New Department" FormTitle_L2="Créer un départment" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</WorkflowCreateEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Organization_Delete" Activity="Directory_Organization_Delete:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="Delete Department" FormTitle_L2="Supprimer un départment" IsDeleteForm="true" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" IsReadOnly="true" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Organization_Update" Activity="Directory_Organization_Update:Request" EntityType="Workflow_Directory_Organization" FormTitle_L1="Update Department" FormTitle_L2="Modifier un départment" MainProperty="Workflow_Directory_Organization:Directory_Organization" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Organization" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Site_Create" Activity="Directory_Site_Create:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="New Site" FormTitle_L2="Créer un site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</WorkflowCreateEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Site_Delete" Activity="Directory_Site_Delete:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="Delete Site" FormTitle_L2="Supprimer un site" IsDeleteForm="true" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" IsReadOnly="true" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<WorkflowEditEntityForm Identifier="Workflow_Directory_Site_Update" Activity="Directory_Site_Update:Request" EntityType="Workflow_Directory_Site" FormTitle_L1="Update Site" FormTitle_L2="Modifier un site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self">
<MainControl EmbeddedForm="Base_Directory_Site" OutputType="TransformImport" />
</WorkflowEditEntityForm>
<Form Identifier="Workflow_Directory_UserRecord_Contract_Base" EntityType="Directory_UserRecord">
<Control Binding="EmployeeId" ColumnSize="4" />
<Control Binding="ContractIdentifier" ColumnSize="4" />
<Control Binding="UserType" />
<Control Binding="Subsidiary" />
<Control Binding="ExternalCompany" />
<Control Binding="Suspended" />
<Control Binding="ContractStartDate" />
<Control Binding="ContractEndDate" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Contract_Unique" EntityType="Directory_UserRecord">
<Control Binding="ContractIdentifier" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control HomonymEntityLink="Directory_UserRecord" OutputType="LayoutContainer">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
        <Control Binding="LastName" ColumnSize="6" />
        <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="VIP" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_PersonalData_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
  <Control HomonymEntityLink="Directory_UserRecord" OutputType="LayoutContainer">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
      <Control Binding="LastName" ColumnSize="6" />
      <Control Binding="FirstName" ColumnSize="6" />
    </Control>
  </Control>
  <Control Binding="BirthName" ColumnSize="4" />
  <Control Binding="BirthDate" />
  <Control Binding="PersonalTitle" ColumnSize="3" />
  <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
  </Control>
  <Control Binding="VIP" />
  <Control DisplayName_L1="Photo" OutputType="LayoutRowset" Name="Photo">
    <Control Binding="User.Photo" InputType="Image" />
  </Control>
</Control>
</Form>
<Form Identifier="Workflow_Directory_User_Photo" EntityType="Directory_User">
<Control DisplayName_L1="Photo" OutputType="LayoutRowset" Name="Photo">
  <Control Binding="Photo" InputType="Image" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Position_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Position_Unique" EntityType="Directory_UserRecord">
<Control Binding="PositionIdentifier" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_ReadOnlyData_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" IsReadOnly="true" />
    <Control Binding="FirstName" ColumnSize="6" IsReadOnly="true" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="BirthDate" IsReadOnly="true" />
    <Control Binding="Email" ColumnSize="6" IsReadOnly="true" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" IsReadOnly="true" />
    <Control Binding="MobileNumber" ColumnSize="6" IsReadOnly="true" />
    </Control>
    <Control Binding="UserIdentifier" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="Login" ColumnSize="4" IsReadOnly="true" />
    <Control Binding="VIP" IsReadOnly="true" />
</Control>
</Form>
<Form Identifier="Workflow_Directory_UserRecord_Suspend_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_ReadOnlyData_Base" OutputType="TransformImport" />
</Form>
<Form Identifier="Workflow_Directory_UserRecord_UpdateResources_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_ReadOnlyData_Base" OutputType="TransformImport" />
</Form>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManageContracts" Activity="Directory_User_ManageContracts:Request" AddRowLabel_L1="Add Contract" AddRowLabel_L2="Ajouter un contrat" EntityType="Workflow_Directory_User" FormTitle_L1="Manage Contracts" FormTitle_L2="Gérer les contrats" MainProperty="Workflow_Directory_User:Directory_User" RecordEndProperty="Directory_UserRecord:ContractEndDate" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:ContractStartDate" RecordTable="Directory_UserRecord_ManageContracts" RemoveRowLabel_L1="Remove Contract" RemoveRowLabel_L2="Supprimer le contrat" TableTitle_L1="Contracts" TableTitle_L2="Contrats" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Directory_UserRecord_Contract_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManagePositions" Activity="Directory_User_ManagePositions:Request" AddRowLabel_L1="Add Position" AddRowLabel_L2="Ajouter un poste" EntityType="Workflow_Directory_User" FormTitle_L1="Manage Positions" FormTitle_L2="Gérer les postes" MainProperty="Workflow_Directory_User:Directory_User" RecordEndProperty="Directory_UserRecord:PositionEndDate" RecordProperty="Directory_User:Records" RecordStartProperty="Directory_UserRecord:PositionStartDate" RecordTable="Directory_UserRecord_ManagePositions" RemoveRowLabel_L1="Remove Position" RemoveRowLabel_L2="Supprimer le poste" TableTitle_L1="Positions" TableTitle_L2="Postes" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewExternal" Activity="Directory_User_NewExternal:Request" EntityType="Workflow_Directory_User" FormTitle_L1="New Contractor" FormTitle_L2="Nouvel externe" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_User_NewExternal_Base" OutputType="TransformImport" />
<RecordUniqueItemControl OutputType="LayoutContainer" />
<MainSummaryControl OutputType="LayoutContainer" />
<RecordSummaryControl EmbeddedForm="Workflow_Directory_User_New_Summary" OutputType="TransformImport" />
</WorkflowCreateRecordEntityForm>
<Form Identifier="Workflow_Directory_User_NewExternal_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base" OutputType="TransformImport" />
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</Form>
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" Activity="Directory_User_NewInternal:Request" EntityType="Workflow_Directory_User" FormTitle_L1="New Employee" FormTitle_L2="Nouvel employé" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_User_NewInternal_Base" OutputType="TransformImport" />
<RecordUniqueItemControl OutputType="LayoutContainer" />
<MainSummaryControl OutputType="LayoutContainer" />
<RecordSummaryControl EmbeddedForm="Workflow_Directory_User_New_Summary" OutputType="TransformImport" />
</WorkflowCreateRecordEntityForm>
<Form Identifier="Workflow_Directory_User_NewInternal_Base" EntityType="Directory_UserRecord">
<Control EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base" OutputType="TransformImport" />
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control EmbeddedForm="Workflow_Directory_UserRecord_Position_Base" OutputType="TransformImport" />
</Form>
<Form Identifier="Workflow_Directory_User_New_Summary" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Important Information" DisplayName_L2="Important Information" Name="Important Information" OutputType="LayoutFieldset">
    <Control Binding="UserIdentifier" />
    <Control Binding="Email" />
    <Control Binding="Login" />
</Control>
</Form>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_Reactivate" Activity="Directory_User_Reactivate:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Reactivate" FormTitle_L2="Réactiver" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Suspend_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_Suspend" Activity="Directory_User_Suspend:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Suspend" FormTitle_L2="Suspendre" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_Suspend_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_UpdatePersonalData" Activity="Directory_User_UpdatePersonalData:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Update Personal Data" FormTitle_L2="Modifier les informations personnelles" HideRoles="true" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="TransformImport"  EmbeddedForm="Workflow_Directory_User_Photo"/>
<RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" />
<RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_PersonalData_Base_WithoutPhoto" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Directory_User_UpdateResources" Activity="Directory_User_UpdateResources:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Modify Permissions" FormTitle_L2="Modifier les permissions" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl EntityType="Directory_User" OutputType="LayoutContainer" />
<RecordControl EmbeddedForm="Workflow_Directory_UserRecord_UpdateResources_Base" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" Name="Personal Data" OutputType="LayoutFieldset">
    <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" Name="Full Name" OutputType="LayoutRowset">
    <Control Binding="LastName" ColumnSize="6" />
    <Control Binding="FirstName" ColumnSize="6" />
    </Control>
    <Control Binding="BirthName" ColumnSize="4" />
    <Control Binding="BirthDate" />
    <Control Binding="PersonalTitle" ColumnSize="3" />
    <Control Binding="Email" ColumnSize="6" />
    <Control Binding="EmailAliases" ColumnSize="8" />
    <Control DisplayName_L1="Phone Numbers" DisplayName_L2="Numéros de téléphone" Name="Phone Numbers" OutputType="LayoutRowset">
    <Control Binding="PhoneNumber" ColumnSize="6" />
    <Control Binding="MobileNumber" ColumnSize="6" />
    </Control>
    <Control Binding="UserIdentifier" ColumnSize="4" />
    <Control Binding="Login" ColumnSize="4" />
    <Control Binding="VIP" />
    <Control Binding="StartDate" />
    <Control Binding="EndDate" InputType="Date" />
</Control>
<Control DisplayName_L1="Contract" DisplayName_L2="Contrat" Name="Contract" OutputType="LayoutFieldset">
    <Control Binding="EmployeeId" ColumnSize="4" />
    <Control Binding="ContractIdentifier" ColumnSize="4" />
    <Control Binding="UserType" />
    <Control Binding="Subsidiary" />
    <Control Binding="ExternalCompany" />
    <Control Binding="Suspended" />
    <Control Binding="ContractStartDate" />
    <Control Binding="ContractEndDate" />
</Control>
<Control DisplayName_L1="Position" DisplayName_L2="Poste" Name="Position" OutputType="LayoutFieldset">
    <Control Binding="PositionIdentifier" ColumnSize="4" />
    <Control Binding="Title" />
    <Control Binding="Manager" />
    <Control Binding="IGAManager" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
    <Control Binding="PositionStartDate" />
    <Control Binding="PositionEndDate" InputType="Date" />
</Control>
</Form>
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">
<Control Binding="Id" />
</Form>
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">
<Control Binding="Identifier" />
<Control Binding="IsDraft" />
<Control Binding="Photo" />
<Control Binding="ConsentPhotoUsage" />
</Form>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Helpdesk_Directory_User_Delete" Activity="Helpdesk_Directory_User_Delete:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Delete User" FormTitle_L2="Supprimer le collaborateur" HideRoles="true" IsDeleteForm="true" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" IsReadOnly="true" OutputType="TransformImport" />
<RecordControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" IsReadOnly="true" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" OutputType="TransformImport" />
</WorkflowUpdateRecordEntityForm>
<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_FixRecord" Activity="Helpdesk_Directory_User_FixRecord:Request" AddRowLabel_L1="Add Record" AddRowLabel_L2="Ajouter une fiche" EntityType="Workflow_Directory_User" FormTitle_L1="Repair Data (helpdesk)" FormTitle_L2="Réparer les données (helpdesk)" MainProperty="Workflow_Directory_User:Directory_User" RecordFilter="All" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" RemoveRowLabel_L1="Remove Record" RemoveRowLabel_L2="Supprimer la fiche" TableTitle_L1="Records" TableTitle_L2="Fiches" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" OutputType="TransformImport" />
<RecordControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" OutputType="TransformImport" />
<RecordSlaveControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
</WorkflowUpdateSeveralRecordsEntityForm>
<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" Activity="Helpdesk_Directory_User_New:Request" AddRowLabel_L1="Add Record" EntityType="Workflow_Directory_User" FormTitle_L1="New User (helpdesk)" FormTitle_L2="Nouveau collaborateur (helpdesk)" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" RemoveRowLabel_L1="Remove Record" TableTitle_L1="Records" WorkflowRequestType="Helpdesk">
<MainControl EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" OutputType="TransformImport" />
<RecordControl OutputType="LayoutContainer">
    <Control OutputType="LayoutContainer" />
</RecordControl>
<RecordUniqueItemControl EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" OutputType="TransformImport" />
</WorkflowCreateSeveralRecordsEntityForm>
<WorkflowUpdateRecordEntityForm Identifier="Workflow_Self_ResourcesUpdate" Activity="Self_ResourcesUpdate:Request" EntityType="Workflow_Directory_User" FormTitle_L1="Update My Permissions" FormTitle_L2="Modifier mes permissions" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self">
<MainControl OutputType="LayoutContainer" />
<RecordControl EntityType="Directory_UserRecord" OutputType="LayoutContainer">
    <Control Binding="LastName" IsReadOnly="true" />
    <Control Binding="FirstName" IsReadOnly="true" />
</RecordControl>
</WorkflowUpdateRecordEntityForm>
<SearchBar EntityType="Directory_User" Menu="Search_Directory_User" SearchBarDesignElement="Inline" />
<AccessControlPropertyGroup Identifier="Directory_Subsidiary_Administration" DisplayName_L1="Subsidiary - Administration Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserRecord_Administration" DisplayName_L1="User Record - Administration Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserRecord_HR" DisplayName_L1="User Record - HR Properties" />
<AccessControlPropertyGroup Identifier="Directory_UserType_Administration" DisplayName_L1="User Type - Administration Properties" />
<Profile Identifier="Workforce/Administration/Directory_User_ManageAccounts" DisplayName_L1="Workforce/Administration/Manage Accounts" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReconciliateResources" DisplayName_L1="Workforce/Administration/Reconciliate Resources" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReconciliateRoles" DisplayName_L1="Workforce/Administration/Reconciliate Roles" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewAccesses" DisplayName_L1="Workforce/Administration/Review Accesses" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewProvisioning" DisplayName_L1="Workforce/Administration/Review Provisioning" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ReviewRoles" DisplayName_L1="Workforce/Administration/Review Roles" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_User_ViewWorkflowOverview" DisplayName_L1="Workforce/Administration/View Requests" IsComponent="true" />
<Profile Identifier="Workforce/Administration/Directory_ViewAllHistory" DisplayName_L1="Workforce/Administration/View All History" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Country/View" DisplayName_L1="Workforce/Directory/View Countries" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ExternalCompany/View" DisplayName_L1="Workforce/Directory/View External Companies" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Gender/View" DisplayName_L1="Workforce/Directory/View Genders" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Office/View" DisplayName_L1="Workforce/Directory/View Offices" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Organization/View" DisplayName_L1="Workforce/Directory/View Organizations" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_OrganizationType/View" DisplayName_L1="Workforce/Directory/View Organization Types" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_PersonalTitle/View" DisplayName_L1="Workforce/Directory/View Personal Titles" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Region/View" DisplayName_L1="Workforce/Directory/View Regions" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedEmail/View" DisplayName_L1="Workforce/Directory/View Reserved Emails" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedIdentifier/View" DisplayName_L1="Workforce/Directory/View Reserved Identifiers" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_ReservedLogin/View" DisplayName_L1="Workforce/Directory/View Reserved Logins" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Site/View" DisplayName_L1="Workforce/Directory/View Sites" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Subsidiary/View" DisplayName_L1="Workforce/Directory/View Subsidiaries" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_Title/View" DisplayName_L1="Workforce/Directory/View Titles" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/View" DisplayName_L1="Workforce/Directory/View User" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewAdministration" DisplayName_L1="Workforce/Directory/View User (admin)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewHR" DisplayName_L1="Workforce/Directory/View User (HR)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewHistory" DisplayName_L1="Workforce/Directory/View User (history)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewPhoto" DisplayName_L1="Workforce/Directory/View User (photos)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_User/ViewResources" DisplayName_L1="Workforce/Directory/View User (resources)" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_UserCategory/View" DisplayName_L1="Workforce/Directory/View User Categories" IsComponent="true" />
<Profile Identifier="Workforce/Directory/Directory_UserType/View" DisplayName_L1="Workforce/Directory/View User Types" IsComponent="true" />
<Profile Identifier="Workforce/Notifications/Directory_User_ManageContracts" DisplayName_L1="Workforce/Notifications/Manage Contracts" IsComponent="true" />
<Profile Identifier="Workforce/Notifications/Directory_User_New" DisplayName_L1="Workforce/Notifications/New User" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_ExternalUsers" DisplayName_L1="Workforce/Reports/Directory/External Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_InternalUsers" DisplayName_L1="Workforce/Reports/Directory/Internal Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_PlannedUserExists" DisplayName_L1="Workforce/Reports/Directory/Planned User Exits" IsComponent="true" />
<Profile Identifier="Workforce/Reports/Directory_Users" DisplayName_L1="Workforce/Reports/Directory/All Users" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_CompositeRoles" DisplayName_L1="Workforce/Reports/Role Model/Composite Roles" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_ResourceTypes" DisplayName_L1="Workforce/Reports/Role Model/Resource Types" IsComponent="true" />
<Profile Identifier="Workforce/Reports/RoleModel_SingleRoles" DisplayName_L1="Workforce/Reports/Role Model/Single Roles" IsComponent="true" />
<Profile Identifier="Workforce/Self/Self_ResourcesUpdate/Request" DisplayName_L1="Workforce/Self/Update My Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Self/Self_ResourcesUpdate/Review" DisplayName_L1="Workforce/Self/Update My Permissions (review)" IsComponent="true" />
<Profile Identifier="Workforce/Self/View" DisplayName_L1="Workforce/Self Service/View My Data" IsComponent="true" />
<Profile Identifier="Workforce/Self/ViewResources" DisplayName_L1="Workforce/Self Service/View My Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Country/Administration" DisplayName_L1="Workforce/Workflows/Administrate Countries" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ExternalCompany/Administration" DisplayName_L1="Workforce/Workflows/Administrate External Companies" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Gender/Administration" DisplayName_L1="Workforce/Workflows/Administrate Genders" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Office/Administration" DisplayName_L1="Workforce/Workflows/Administrate Offices" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Organization/Administration" DisplayName_L1="Workforce/Workflows/Administrate Organizations" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_OrganizationType/Administration" DisplayName_L1="Workforce/Workflows/Administrate Organization Types" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_PersonalTitle/Administration" DisplayName_L1="Workforce/Workflows/Administrate Personal Titles" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Region/Administration" DisplayName_L1="Workforce/Workflows/Administrate Regions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedEmail/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Emails" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedIdentifier/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Identifiers" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_ReservedLogin/Administration" DisplayName_L1="Workforce/Workflows/Administrate Reserved Logins" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Site/Administration" DisplayName_L1="Workforce/Workflows/Administrate Sites" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Subsidiary/Administration" DisplayName_L1="Workforce/Workflows/Administrate Subsidiaries" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_Title/Administration" DisplayName_L1="Workforce/Workflows/Administrate Titles" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_UserCategory/Administration" DisplayName_L1="Workforce/Workflows/Administrate User Categories" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_UserType/Administration" DisplayName_L1="Workforce/Workflows/Administrate User Types" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_ManageContracts/Request" DisplayName_L1="Workforce/Workflows/Manage Contracts" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_ManagePositions/Request" DisplayName_L1="Workforce/Workflows/Manage Positions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewExternal/Request" DisplayName_L1="Workforce/Workflows/New Contractor" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewInternal/Request" DisplayName_L1="Workforce/Workflows/New Employee" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_NewInternal/Review" DisplayName_L1="Workforce/Workflows/New Employee (review)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_SuspendReactivate/Request" DisplayName_L1="Workforce/Workflows/Suspend, Reactivate" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" DisplayName_L1="Workforce/Workflows/Update Personal Data" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Directory_User_UpdateResources/Request" DisplayName_L1="Workforce/Workflows/Update Permissions" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" DisplayName_L1="Workforce/Workflows/Delete User (helpdesk)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" DisplayName_L1="Workforce/Workflows/Fix User Data (helpdesk)" IsComponent="true" />
<Profile Identifier="Workforce/Workflows/Helpdesk_Directory_User_New/Request" DisplayName_L1="Workforce/Workflows/New User (helpdesk)" IsComponent="true" />
<AccessControlRule Identifier="Administrator_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports" DisplayName_L1="Administrator_Reports" EntityType="ReportQuery" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_CompositeRole" DisplayName_L1="Administrator_Reports" EntityType="CompositeRole" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_Directory_UserRecord" DisplayName_L1="Administrator_Reports" EntityType="Directory_UserRecord" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_ResourceType" DisplayName_L1="Administrator_Reports" EntityType="ResourceType" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Reports_SingleRole" DisplayName_L1="Administrator_Reports" EntityType="SingleRole" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Administrator_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Administrator">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Helpdesk_*" DisplayName_L1="Administrator_Workflows_Directory_User_Helpdesk_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_ManageContracts_*" DisplayName_L1="Administrator_Workflows_Directory_User_ManageContracts_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Administrator_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_New_External*" DisplayName_L1="Administrator_Workflows_Directory_User_New_External*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_New_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_New_Internal*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Reactivate_*" DisplayName_L1="Administrator_Workflows_Directory_User_Reactivate_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_Suspend_*" DisplayName_L1="Administrator_Workflows_Directory_User_Suspend_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Administrator_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Administrator_Workflows_Directory_User_UpdateResources_*" DisplayName_L1="Administrator_Workflows_Directory_User_UpdateResources_*" EntityType="Workflow_Directory_User" Profile="Administrator">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Self_ViewResources_*" EntityType="AssignedResourceType" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" EntityType="AssignedSingleRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Category_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Self_ViewResources_*" EntityType="Category" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_CompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Self_ViewResources_*" EntityType="CompositeRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*" DisplayName_L1="Composite_Directory_Directory_Country_View_*" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Country/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Country_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Country_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Country/View">
<Entry Permission="/Custom/Resources/Directory_Country/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_ViewAllHistory_*" EntityType="Directory_ExternalCompany" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_ExternalCompany/View">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_*" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_OrganizationType_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_OrganizationType_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_OrganizationType/View">
<Entry Permission="/Custom/Resources/Directory_OrganizationType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Organization_ViewAllHistory_*" EntityType="Directory_Organization" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Organization/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Organization/View">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_*" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_PersonalTitle_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_PersonalTitle_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_PersonalTitle/View">
<Entry Permission="/Custom/Resources/Directory_PersonalTitle/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*" DisplayName_L1="Composite_Directory_Directory_Region_View_*" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Region/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Region_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Region_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Region/View">
<Entry Permission="/Custom/Resources/Directory_Region/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_ReservedEmail/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_ReservedIdentifier/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_ReservedLogin/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Site_ViewAllHistory_*" EntityType="Directory_Site" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Site/View">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Site/View">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_ViewAllHistory_*" EntityType="Directory_Subsidiary" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Subsidiary/View">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_Title_ViewAllHistory_*" EntityType="Directory_Title" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_Title/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_Title/View">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_UserCategory/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_UserType_ViewAllHistory_*" EntityType="Directory_UserType" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_UserType/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_UserType/View">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewAdministration">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewAllHistory_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAllHistory_*" EntityType="Directory_User" Profile="Workforce/Administration/Directory_ViewAllHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewHR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewHistory_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHistory_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewHistory">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewPhoto">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Workforce/Directory/Directory_User/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Directory/Directory_User/View">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Directory_Self_ViewResources_*" EntityType="Directory_User" Profile="Workforce/Self/ViewResources">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*" DisplayName_L1="Composite_Directory_Self_View_*" EntityType="Directory_User" Profile="Workforce/Self/View">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Self" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Directory_Self_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/View">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Notifications_Directory_User_ManageContracts*" DisplayName_L1="Composite_Notifications_Directory_User_ManageContracts*" EntityType="Directory_User" Profile="Workforce/Notifications/Directory_User_ManageContracts">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_ManageContracts/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Workforce/Notifications/Directory_User_New">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Policy_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Self_ViewResources_*" EntityType="Policy" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_ResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Self_ViewResources_*" EntityType="ResourceType" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Workforce/Directory/Directory_User/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_SingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Self_ViewResources_*" EntityType="SingleRole" Profile="Workforce/Self/ViewResources">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Purged" />
<Filter Binding="Directory_User.Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/Self_ResourcesUpdate/Request">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Self/Self_ResourcesUpdate/Review">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManageContracts_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManageContracts_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManageContracts/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewExternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewInternal/Request">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_NewInternal/Review">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request*" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Country" EntityType="Directory_Country" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Region" EntityType="Directory_Region" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Site" EntityType="Directory_Site" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Title" EntityType="Directory_Title" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workforce_Reports_RoleModel_CompositeRoles*" DisplayName_L1="Composite_Workforce_Reports_RoleModel_CompositeRoles*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_CompositeRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Composite_Workforce_Reports_RoleModel_CompositeRoles_View*" DisplayName_L1="Composite_Workforce_Reports_RoleModel_CompositeRoles_View*" EntityType="CompositeRole" Profile="Workforce/Reports/RoleModel_CompositeRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_CompositeRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="HR">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="HR">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_NewInternal_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="HR">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="HR_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="HR">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Helpdesk">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Helpdesk">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Delete*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Delete* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_FixRecord*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_FixRecord* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request*" EntityType="Workflow_Directory_User" Profile="Helpdesk">
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Country" EntityType="Directory_Country" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Region" EntityType="Directory_Region" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Site" EntityType="Directory_Site" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_Title" EntityType="Directory_Title" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Helpdesk_Composite_Workflows_Helpdesk_Directory_User_New_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Helpdesk_Directory_User_New_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Helpdesk">
<Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedCompositeRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceScalar" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Directory_User_ViewResources_*" EntityType="AssignedResourceType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Directory_User_ViewResources_*" EntityType="AssignedSingleRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Category_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Directory_User_ViewResources_*" EntityType="Category" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_CompositeRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Directory_User_ViewResources_*" EntityType="CompositeRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_*" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ExternalCompany_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_ExternalCompany_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_ExternalCompany/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedEmail_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedEmail_View_*" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedEmail/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedIdentifier_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedIdentifier_View_*" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedIdentifier/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_ReservedLogin_View_*" DisplayName_L1="Composite_Directory_Directory_ReservedLogin_View_*" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_ReservedLogin/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_*" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Subsidiary_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Subsidiary_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Subsidiary/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*" DisplayName_L1="Composite_Directory_Directory_Title_View_*" EntityType="Directory_Title" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_Title_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Title_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_Title/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserCategory_View_*" DisplayName_L1="Composite_Directory_Directory_UserCategory_View_*" EntityType="Directory_UserCategory" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserCategory/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*" DisplayName_L1="Composite_Directory_Directory_UserType_View_*" EntityType="Directory_UserType" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_User" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_UserType_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_UserType_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_UserType/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewAdministration_*" DisplayName_L1="Composite_Directory_Directory_User_ViewAdministration_*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_Administration" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewHR_*" DisplayName_L1="Composite_Directory_Directory_User_ViewHR_*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" PropertyGroup="Directory_UserRecord_HR" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewPhoto_*" DisplayName_L1="Composite_Directory_Directory_User_ViewPhoto_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Directory_Directory_User_ViewResources_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewTargetResources" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*" EntityType="Directory_User" Profile="Manager">
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
<Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />
<Filter Binding="MainRecord.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Policy_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Directory_User_ViewResources_*" EntityType="Policy" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_ResourceType_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Directory_User_ViewResources_*" EntityType="ResourceType" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_SingleRole_Directory_Directory_User_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Directory_User_ViewResources_*" EntityType="SingleRole" Profile="Manager">
<Entry Permission="/Custom/Resources/Directory_User" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/Purged" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/ReviewPending" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_Self_ResourcesUpdate_Review*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Review* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Review" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_ManagePositions_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_ManagePositions_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_ManagePositions/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewExternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewExternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewExternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.UserType.IsExternal" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_NewInternal_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_NewInternal_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="1" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Reactivate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Reactivate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Reactivate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
<Filter Binding="Directory_User.Records.Suspended" Operator="Equals" Value="0" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_Suspend_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_Suspend_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_Suspend/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdatePersonalData_*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdatePersonalData_* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request*" EntityType="Workflow_Directory_User" Profile="Manager">
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/Purged" />
<Filter Binding="Directory_User.Records.Organization.Id" Dimension="Organization0" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Country" EntityType="Directory_Country" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Region" EntityType="Directory_Region" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Site" EntityType="Directory_Site" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_Title" EntityType="Directory_Title" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="Manager_Composite_Workflows_Directory_User_UpdateResources_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_User_UpdateResources_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="Manager">
<Entry Permission="/Custom/Workflows/Directory_User_UpdateResources/Request" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_ExternalUsers*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_ExternalUsers*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_ExternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_ExternalUsers_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_ExternalUsers_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_ExternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_ExternalUsers/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_InternalUsers*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_InternalUsers*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_InternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_InternalUsers_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_InternalUsers_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_InternalUsers">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_InternalUsers/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_PlannedUserExists*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_PlannedUserExists*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_PlannedUserExists">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_PlannedUserExists_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_PlannedUserExists_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_PlannedUserExists">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_PlannedUserExists/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_Users*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_Users*" EntityType="ReportQuery" Profile="Workforce/Reports/Directory_Users">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_Directory_Users_View*" DisplayName_L1="ResourceType_Workforce_Reports_Directory_Users_View*" EntityType="Directory_UserRecord" Profile="Workforce/Reports/Directory_Users">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_Directory_Users/View" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_RoleModel_ResourceTypes*" DisplayName_L1="ResourceType_Workforce_Reports_RoleModel_ResourceTypes*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_ResourceTypes">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="ResourceType_Workforce_Reports_RoleModel_ResourceTypes_View*" DisplayName_L1="ResourceType_Workforce_Reports_RoleModel_ResourceTypes_View*" EntityType="ResourceType" Profile="Workforce/Reports/RoleModel_ResourceTypes">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_ResourceTypes/View" />
</AccessControlRule>
<AccessControlRule Identifier="Single_Workforce_Reports_RoleModel_SingleRoles*" DisplayName_L1="Single_Workforce_Reports_RoleModel_SingleRoles*" EntityType="ReportQuery" Profile="Workforce/Reports/RoleModel_SingleRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
<Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" />
</AccessControlRule>
<AccessControlRule Identifier="Single_Workforce_Reports_RoleModel_SingleRoles_View*" DisplayName_L1="Single_Workforce_Reports_RoleModel_SingleRoles_View*" EntityType="SingleRole" Profile="Workforce/Reports/RoleModel_SingleRoles">
<Entry CanExecute="true" Permission="/Custom/Reports/Workforce_RoleModel_SingleRoles/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedCompositeRole_Directory_Self_ViewResources_*" EntityType="AssignedCompositeRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceNavigation_Directory_Self_ViewResources_*" EntityType="AssignedResourceNavigation" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceScalar_Directory_Self_ViewResources_*" EntityType="AssignedResourceScalar" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedResourceType_Directory_Self_ViewResources_*" EntityType="AssignedResourceType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_AssignedSingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_AssignedSingleRole_Directory_Self_ViewResources_*" EntityType="AssignedSingleRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Category_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Category_Directory_Self_ViewResources_*" EntityType="Category" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_CompositeRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_CompositeRole_Directory_Self_ViewResources_*" EntityType="CompositeRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*" DisplayName_L1="Composite_Directory_Directory_Organization_View_*" EntityType="Directory_Organization" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_User" EntityType="Directory_User" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Organization_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Organization_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Organization/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*" DisplayName_L1="Composite_Directory_Directory_Site_View_*" EntityType="Directory_Site" Profile="User">
<Entry CanExecute="true" Permission="/Custom/ResourceFiles/Directory_Site" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_User" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_User" EntityType="Directory_User" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_Site_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_Site_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_Site/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*" DisplayName_L1="Composite_Directory_Directory_User_View_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Directory_User_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Directory_User_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/View" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Directory_Self_ViewResources_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*" DisplayName_L1="Composite_Directory_Self_View_*" EntityType="Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Self" />
<Filter Binding="Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Country" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ExternalCompany" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_JobCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Organization" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_OrganizationType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_PersonalTitle" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_PresenceState" DisplayName_L1="Composite_Directory_Self_View_* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Region" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedEmail" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_ReservedLogin" DisplayName_L1="Composite_Directory_Self_View_* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Site" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Subsidiary" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_Title" DisplayName_L1="Composite_Directory_Self_View_* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserCategory" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserRecord" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Directory_Self_View_*_Directory_UserType" DisplayName_L1="Composite_Directory_Self_View_* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Policy_Directory_Self_ViewResources_*" DisplayName_L1="Composite_Policy_Directory_Self_ViewResources_*" EntityType="Policy" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_ResourceType_Directory_Self_ViewResources_*" DisplayName_L1="Composite_ResourceType_Directory_Self_ViewResources_*" EntityType="ResourceType" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_SingleRole_Directory_Self_ViewResources_*" DisplayName_L1="Composite_SingleRole_Directory_Self_ViewResources_*" EntityType="SingleRole" Profile="User">
<Entry Permission="/Custom/Resources/Directory_User/SelfOwnedResources" />
<Entry Permission="/Custom/Resources/Directory_User/SelfTargetResources" />
<Entry Permission="/Custom/Resources/Directory_User/Self" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request*" EntityType="Workflow_Directory_User" Profile="User">
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Aborted" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/ActionPending" />
<Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Request/Purged" />
<Filter Binding="Directory_User.Id" CurrentUser="true" Operator="Equals" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Country" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Country" EntityType="Directory_Country" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ExternalCompany" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ExternalCompany" EntityType="Directory_ExternalCompany" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_JobCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_JobCategory" EntityType="Directory_JobCategory" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Organization" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Organization" EntityType="Directory_Organization" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_OrganizationType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_OrganizationType" EntityType="Directory_OrganizationType" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PersonalTitle" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PersonalTitle" EntityType="Directory_PersonalTitle" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_PresenceState" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_PresenceState" EntityType="Directory_PresenceState" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Region" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Region" EntityType="Directory_Region" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedEmail" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedEmail" EntityType="Directory_ReservedEmail" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedIdentifier" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedIdentifier" EntityType="Directory_ReservedIdentifier" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_ReservedLogin" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_ReservedLogin" EntityType="Directory_ReservedLogin" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Site" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Site" EntityType="Directory_Site" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Subsidiary" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Subsidiary" EntityType="Directory_Subsidiary" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_Title" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_Title" EntityType="Directory_Title" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserCategory" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserCategory" EntityType="Directory_UserCategory" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserRecord" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserRecord" EntityType="Directory_UserRecord" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<AccessControlRule Identifier="User_Composite_Workflows_Directory_Self_ResourcesUpdate_Request*_Directory_UserType" DisplayName_L1="Composite_Workflows_Directory_Self_ResourcesUpdate_Request* - Directory_UserType" EntityType="Directory_UserType" Profile="User">
<Entry Permission="/Custom/Workflows/Self_ResourcesUpdate/Request" />
</AccessControlRule>
<HomonymEntityLink Identifier="Directory_UserRecord" FormEntityType="Directory_UserRecord">
<Filter ComparisonProperty1="LastName" ComparisonProperty2="FirstName" Property1="FirstName" Property2="LastName" />
<Filter ComparisonProperty2="BirthName" Property1="FirstName" Property2="LastName" />
<Filter Property1="FirstName" Property2="LastName" />
</HomonymEntityLink>
<Workflow Identifier="Directory_User_ManageContracts" DisplayName_L1="User - Manage Contracts" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_ManagePositions" DisplayName_L1="User - Manage Positions" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_NewExternal" DisplayName_L1="User - New Contractor" DisplayName_L2="Collaborateur - Créer un externe" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_NewInternal" DisplayName_L1="User - New Employee" DisplayName_L2="Collaborateur - Créer un interne" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" DisplayName_L2="Brouillon de création" Template="PersistOnlyResources" WorkflowOverviewDisable="true" />
<Activity Identifier="Review" DisplayName_L1="Review" DisplayName_L2="Validation" Template="ReviewWithFeedback" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_Reactivate" DisplayName_L1="User - Reactivate" DisplayName_L2="Collaborateur - Réactivater" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_Suspend" DisplayName_L1="User - Suspend" DisplayName_L2="Collaborateur - Suspendre" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" WorkflowOverviewDisable="true" />
</Workflow>
<Workflow Identifier="Directory_User_UpdatePersonalData" DisplayName_L1="User - Update Personal Data" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_User_UpdateResources" DisplayName_L1="User - Modify Permissions" DisplayName_L2="Collaborateur - Modifier les droits" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_Delete" DisplayName_L1="User - Delete User (helpdesk)" DisplayName_L2="Collaborateur - Supprimer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_FixRecord" DisplayName_L1="User - Repair data (helpdesk)" DisplayName_L2="Collaborateur - Réparer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Helpdesk_Directory_User_New" DisplayName_L1="User - New (helpdesk)" DisplayName_L2="Collaborateur - Créer (helpdesk)" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="ActionWithRefine" />
<Activity Identifier="Persist" DisplayName_L1="Commit" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Self_ResourcesUpdate" DisplayName_L1="Self Manager Permissions" VariablesType="Workflow_Directory_User">
<Activity Identifier="Request" DisplayName_L1="Request" Template="Action" />
<Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" />
<Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" />
</Workflow>
<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
<PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsNotDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return false;">
<PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_Reactivate_Leave" Binding="Workflow_Directory_User:Directory_User.Records.Suspended" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:person:return false;">
<PointCut Activity="Directory_User_Reactivate:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<AddChangeAspect Identifier="Directory_UserRecord_Suspend_Leave" Binding="Workflow_Directory_User:Directory_User.Records.Suspended" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:person:return true;">
<PointCut Activity="Directory_User_Suspend:Persist" ActivityState="Persist-Invoked" />
</AddChangeAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" Binding="Workflow_Directory_User:Directory_User.Records.Email" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" HistorizeBinding="Workflow_Directory_User:Directory_User.Records.EmailAliases" Priority="80" Expression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
result = result + (record.UserType?.EmailSuffix ?? string.Empty) + '@' + (record.Subsidiary?.EmailDomain ?? "acme.com");
return result;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
return result;" TargetEntityType="Directory_ReservedEmail" TargetExpression="C#:reservedEmail:
if (string.IsNullOrEmpty(reservedEmail.Value))
{
return null;
}
var result = reservedEmail.Value;
var index = result.IndexOf('@');
if(index >=0)
{
result = result.Substring(0, index);
}
return result;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
/* Data missing */
return null;
}
var result = firstName + "." +   lastName;
if (iteration > 0)
{
result += iteration.ToString();
}
return result;" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
if (string.IsNullOrEmpty(record.Email))
{
return null;
}
var result = record.Email;
/*Delete Domain*/
var index = result.IndexOf('@');
if(index >= 0)
{
result = result.Substring(0, index);
}
var resources = queryHandler.Select<Directory_UserType>("select EmailSuffix");
foreach (var resource in resources.Where(r => r != null && r.EmailSuffix != null).OrderByDescending(r => r.EmailSuffix!.Length))
{
var foundIndex = result.IndexOf(resource.EmailSuffix!);
if (foundIndex >= 0)
{
    result = result.Substring(0, foundIndex);
    break;
}
}
return result;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Login" Binding="Workflow_Directory_User:Directory_User.Records.Login" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="70" Expression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" TargetEntityType="Directory_ReservedLogin" TargetExpression="C#:reservedLogin:
if (string.IsNullOrEmpty(reservedLogin.Value))
{
return null;
}
return reservedLogin.Value;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var result = record.Email;
if (string.IsNullOrEmpty(result))
{
return null;
}
result = result.Substring(0, result.IndexOf('@'));
return result;" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
if (string.IsNullOrEmpty(record.Login))
{
return null;
}
return record.Login;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_UserIdentifier" Binding="Workflow_Directory_User:Directory_User.Records.UserIdentifier" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="90" Expression="C#:record:
var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
var prefix = record.UserType?.UniqueIdentifierPrefix ?? "";
var suffix = record.UserType?.UniqueIdentifierSuffix;
return prefix + string.Format("{0:D5}", new Random().Next(min, max)) + suffix;" IterationsCount="10">
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
return string.Format("{0:D5}", new Random().Next(min, max));" TargetEntityType="Directory_ReservedIdentifier" TargetExpression="C#:reservedIdentifier:
if (string.IsNullOrEmpty(reservedIdentifier.Value))
{
return null;
}
return reservedIdentifier.Value;" />
<UnicityCheck SourceBinding="Workflow_Directory_User:Directory_User.Records" SourceExpression="C#:record:var min = record.UserType?.UniqueIdentifierRangeStart ?? 0;
var max = record.UserType?.UniqueIdentifierRangeEnd ?? 89999;
return string.Format("{0:D5}", new Random().Next(min, max));" TargetEntityType="Directory_UserRecord" TargetExpression="C#:record:
string? result = null;
var resources = queryHandler.Select<Directory_UserType>("select UniqueIdentifierRangeStart,UniqueIdentifierRangeEnd,UniqueIdentifierPrefix,UniqueIdentifierSuffix");
foreach (var resource in resources)
{
result = record.UserIdentifier;
if (result == null)
{
    continue;
}
var prefix = resource.UniqueIdentifierPrefix ?? "";
var suffix = resource.UniqueIdentifierSuffix;
if (!string.IsNullOrEmpty(prefix))
{
    if (!result.StartsWith(prefix))
    {
        continue;
    }
    result = result.Substring(prefix.Length);
}
if (!string.IsNullOrEmpty(suffix))
{
    if (!result.EndsWith(suffix))
    {
        continue;
    }
    result = result.Substring(0, result.Length - suffix.Length);
}
break;
}
return result;" />
<PointCut Activity="Directory_User_ManageContracts:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_ManagePositions:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="After" />
<PointCut Activity="Directory_User_UpdatePersonalData:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</BuildUniqueValueAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractEndDate" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" Message_L1="The contract end date is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_FirstName" Binding="Workflow_Directory_User:Directory_User.Records.FirstName" Message_L1="The first name is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_LastName" Binding="Workflow_Directory_User:Directory_User.Records.LastName" Message_L1="The last name is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_UserType" Binding="Workflow_Directory_User:Directory_User.Records.UserType" Message_L1="The user type is required">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
<PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" />
</AssertValueRequiredAspect>
<AddChangeAspect Identifier="Directory_User_AddChange_Identifier" Binding="Workflow_Directory_User:Directory_User.Identifier" ExpressionBinding="Workflow_Directory_User:Directory_User" Priority="89" Expression="C#:record:return record.Records != null && record.Records.Count > 0 ? record.Records[0].UserIdentifier : null;">
<PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</AddChangeAspect>
<NotificationAspect Identifier="Directory_User_ManageContracts" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
<tr>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
    <!-- START CENTERED WHITE CONTAINER -->
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Usercube.</span>
    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
        <!-- START MAIN CONTENT AREA -->
        <tr>
        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hello,</p>
                <span style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">An update user request needs your attention.</span>
                <table class="workflow_summary" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 25px 0 0; width: 100%;">
                    <caption style="display: table-caption; font-weight: 600; text-transform: uppercase; text-align:left">Summary</caption>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@System.DateTime.Now.ToLocalTime().ToString("dd/MM/yyyy hh:mm", System.Globalization.CultureInfo.InvariantCulture)</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Full Name</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;"><a href="@(new System.Uri(Html.Context.ApplicationUri, $"resources/Directory_User/{@Model.Id}").AbsoluteUri)">@Model.MainRecord.FirstName @Model.MainRecord.LastName</a></span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">User Type</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.UserType.DisplayName</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract Start Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.ContractStartDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract End Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.ContractEndDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Department</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.MainRecord.Organization.DisplayName</span></td></tr>
</table>
                @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: sans-serif, 'Helvetica Neue', Helvetica, sans-serif;" })
                </td>
            </tr>
            </table>
        </td>
        </tr>
        <!-- END MAIN CONTENT AREA -->
    </table>
    <!-- START FOOTER -->
    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">This message was created by an automated workflow in Usercube. Do not reply.</span>
            </td>
        </tr>
        </table>
    </div>
    <!-- END FOOTER -->
    <!-- END CENTERED WHITE CONTAINER -->
    </div>
</td>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
</tr>
</table>
" CssFile="@media only screen and (max-width: 620px) {
table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
}
table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
}
table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
}
table[class=body] .content {
    padding: 0 !important;
}
table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
}
table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
}
table[class=body] .btn table {
    width: 100% !important;
}
table[class=body] .btn a {
    width: 100% !important;
}
table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
}
}
/* -------------------------------------
PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */
@media all {
.ExternalClass {
    width: 100%;
}
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
.apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
}
.btn-primary table td:hover {
    background-color: #34495e !important;
}
.btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
}
}
body {
background-color: #f6f6f6;
font-family: sans-serif;
-webkit-font-smoothing: antialiased;
font-size: 14px;
line-height: 1.4;
margin: 0;
padding: 0;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
">
<PointCut Activity="Directory_User_ManageContracts:Persist" ActivityState="Persist-Invoked" Mode="After" />
<Recipient Type="Profile" />
</NotificationAspect>
<NotificationAspect Identifier="Directory_User_New" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;">
<tr>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
<td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
    <!-- START CENTERED WHITE CONTAINER -->
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Usercube.</span>
    <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;">
        <!-- START MAIN CONTENT AREA -->
        <tr>
        <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
            <tr>
                <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">
                <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Hello,</p>
                <span style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">A new user request needs your attention.</span>
                <table class="workflow_summary" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; margin: 0; padding: 25px 0 0; width: 100%;">
                    <caption style="display: table-caption; font-weight: 600; text-transform: uppercase; text-align:left">Summary</caption>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@System.DateTime.Now.ToLocalTime().ToString("dd/MM/yyyy hh:mm", System.Globalization.CultureInfo.InvariantCulture)</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Full Name</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;"><a href="@(new System.Uri(Html.Context.ApplicationUri, $"resources/Directory_User/{@Model.Id}").AbsoluteUri)">@Model.Records.First().FirstName @Model.Records.First().LastName</a></span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">User Type</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().UserType.DisplayName</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract Start Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().ContractStartDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Contract End Date</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().ContractEndDate</span></td></tr>
                    <tr><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span style="box-sizing: border-box; color: #9BA2AB; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;" align="left">Department</span></td><td class="workflow_summary_item" style="border-bottom-color: #EDEFF2; border-bottom-style: solid; border-bottom-width: 1px; box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; padding-bottom: 8px;"><span class="align-right" style="box-sizing: border-box; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; line-height: 1.5em; margin: 0;">@Model.Records.First().Organization.DisplayName</span></td></tr>
</table>
                @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: sans-serif, 'Helvetica Neue', Helvetica, sans-serif;" })
                </td>
            </tr>
            </table>
        </td>
        </tr>
        <!-- END MAIN CONTENT AREA -->
    </table>
    <!-- START FOOTER -->
    <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
        <tr>
            <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;">
            <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">This message was created by an automated workflow in Usercube. Do not reply.</span>
            </td>
        </tr>
        </table>
    </div>
    <!-- END FOOTER -->
    <!-- END CENTERED WHITE CONTAINER -->
    </div>
</td>
<td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
</tr>
</table>
" CssFile="@media only screen and (max-width: 620px) {
table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
}
table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {
    font-size: 16px !important;
}
table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
}
table[class=body] .content {
    padding: 0 !important;
}
table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
}
table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
}
table[class=body] .btn table {
    width: 100% !important;
}
table[class=body] .btn a {
    width: 100% !important;
}
table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
}
}
/* -------------------------------------
PRESERVE THESE STYLES IN THE HEAD
------------------------------------- */
@media all {
.ExternalClass {
    width: 100%;
}
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
.apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
}
.btn-primary table td:hover {
    background-color: #34495e !important;
}
.btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
}
}
body {
background-color: #f6f6f6;
font-family: sans-serif;
-webkit-font-smoothing: antialiased;
font-size: 14px;
line-height: 1.4;
margin: 0;
padding: 0;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
">
<PointCut Activity="Directory_User_NewExternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
<PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
<Recipient Type="Profile" />
</NotificationAspect>
<ReportQuery Identifier="Workforce_Directory_ExternalUsers" DisplayName_L1="Workforce/Directory/External Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  uc.Identifier="External")" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_InternalUsers" DisplayName_L1="Workforce/Directory/Internal Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  uc.Identifier="Internal")" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_PlannedUserExists" DisplayName_L1="Workforce/Directory/Planned User Exits" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et join et.Category uc select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where ( s.Identifier="P" and  ( uc.Identifier="External" and  ContractEndDate>"2022-05-31T00:00:00Z"))" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_Directory_Users" DisplayName_L1="Workforce/Directory/All Users" Query="join User u join u.PresenceState s join Organization o join Subsidiary c join UserType et select EmployeeId,LastName,FirstName,o.FullName,c.InternalDisplayName,et.InternalDisplayName,ContractStartDate,ContractEndDate where s.Identifier="P"" ReturnedEntityType="Directory_UserRecord" />
<ReportQuery Identifier="Workforce_RoleModel_CompositeRoles" DisplayName_L1="Workforce/Role Model/Composite Roles" Query="join EntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="CompositeRole" />
<ReportQuery Identifier="Workforce_RoleModel_ResourceTypes" DisplayName_L1="Workforce/Role Model/Resource Types" Query="join SourceEntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="ResourceType" />
<ReportQuery Identifier="Workforce_RoleModel_SingleRoles" DisplayName_L1="Workforce/Role Model/Single Roles" Query="join EntityType et select FullName,Identifier,DisplayName,Description,ApprovalWorkflowType where et.Identifier="Directory_User"" ReturnedEntityType="SingleRole" />
<OptimizeDisplayTable Id="223" DisplayTableIdentifier="Directory_User" />
<BasketRulesControlRules Id="224" Profile="Workforce/Workflows/Helpdesk_Directory_User_Delete/Request" />
<BasketRulesControlRules Id="225" Profile="Workforce/Workflows/Directory_User_UpdatePersonalData/Request" />
<BasketRulesControlRules Id="226" Profile="Workforce/Self/Self_ResourcesUpdate/Request" />
<BasketRulesControlRules Id="227" Profile="Workforce/Self/Self_ResourcesUpdate/Review" />
<BasketRulesControlRules Id="228" Profile="Workforce/Workflows/Helpdesk_Directory_User_FixRecord/Request" />
<BasketRulesControlRules Id="229" Profile="Workforce/Workflows/Directory_User_SuspendReactivate/Request" />
<BasketRulesControlRules Id="230" Profile="Workforce/Workflows/Directory_User_NewExternal/Request" />
<BasketRulesControlRules Id="231" Profile="Workforce/Workflows/Directory_User_ManagePositions/Request" />
<BasketRulesControlRules Id="232" Profile="Workforce/Workflows/Directory_User_ManageContracts/Request" />
<BasketRulesControlRules Id="233" Profile="HR" />
<BasketRulesControlRules Id="234" Profile="Helpdesk" />
<BasketRulesControlRules Id="235" Profile="Workforce/Workflows/Directory_User_UpdateResources/Request" />
<BasketRulesControlRules Id="236" Profile="Workforce/Workflows/Helpdesk_Directory_User_New/Request" />
<BasketRulesControlRules Id="237" Profile="Manager" />
<BasketRulesControlRules Id="238" Profile="Workforce/Workflows/Directory_User_NewInternal/Request" />
<BasketRulesControlRules Id="239" Profile="User" />
<BasketRulesControlRules Id="240" Profile="Workforce/Workflows/Directory_User_NewInternal/Review" />
<ConnectorMappings Id="241" Connector="Directory" EntityType="Directory_UserRecord" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="242" Connector="Directory" EntityType="Directory_UserType" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="243" Connector="Directory" EntityType="Directory_ExternalCompany" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="244" Connector="Directory" EntityType="Directory_Title" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="245" Connector="Directory" EntityType="Directory_ReservedEmail" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="246" Connector="Directory" EntityType="Directory_Subsidiary" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="247" Connector="Directory" EntityType="Directory_Region" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="248" Connector="Directory" EntityType="Directory_OrganizationType" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="249" Connector="Directory" EntityType="Directory_ReservedIdentifier" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="250" Connector="Directory" EntityType="Directory_Site" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="251" Connector="Directory" EntityType="Directory_Organization" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="252" Connector="Directory" EntityType="Directory_ReservedLogin" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="253" Connector="Directory" EntityType="Directory_PersonalTitle" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="254" Connector="Directory" EntityType="Directory_User" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="255" Connector="Directory" EntityType="Directory_JobCategory" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="256" Connector="Directory" EntityType="Directory_UserCategory" IsIncremental="true" Package="Usercube.Excel@0000001" />
<ConnectorMappings Id="257" Connector="Directory" EntityType="Directory_Country" IsIncremental="true" Package="Usercube.Excel@0000001" />
<CreateAdministratorProfile Id="259" EntityType="Directory_User" />
<CreateUpdateDeleteAccessControlRules Id="260" EntityType="Directory_Title" Profile="Workforce/Workflows/Directory_Title/Administration" />
<CreateUpdateDeleteAccessControlRules Id="261" EntityType="Directory_Country" Profile="Workforce/Workflows/Directory_Country/Administration" />
<CreateUpdateDeleteAccessControlRules Id="264" EntityType="Directory_ReservedLogin" Profile="Workforce/Workflows/Directory_ReservedLogin/Administration" />
<CreateUpdateDeleteAccessControlRules Id="267" EntityType="Directory_OrganizationType" Profile="Workforce/Workflows/Directory_OrganizationType/Administration" />
<CreateUpdateDeleteAccessControlRules Id="268" EntityType="Directory_Organization" Profile="Workforce/Workflows/Directory_Organization/Administration" />
<CreateUpdateDeleteAccessControlRules Id="270" EntityType="Directory_ReservedIdentifier" Profile="Workforce/Workflows/Directory_ReservedIdentifier/Administration" />
<CreateUpdateDeleteAccessControlRules Id="272" EntityType="Directory_ExternalCompany" Profile="Workforce/Workflows/Directory_ExternalCompany/Administration" />
<CreateUpdateDeleteAccessControlRules Id="273" EntityType="Directory_Site" Profile="Workforce/Workflows/Directory_Site/Administration" />
<CreateUpdateDeleteAccessControlRules Id="275" EntityType="Directory_Region" Profile="Workforce/Workflows/Directory_Region/Administration" />
<CreateUpdateDeleteAccessControlRules Id="276" EntityType="Directory_PersonalTitle" Profile="Workforce/Workflows/Directory_PersonalTitle/Administration" />
<CreateUpdateDeleteAccessControlRules Id="277" EntityType="Directory_Subsidiary" Profile="Workforce/Workflows/Directory_Subsidiary/Administration" />
<CreateUpdateDeleteAccessControlRules Id="278" EntityType="Directory_ReservedEmail" Profile="Workforce/Workflows/Directory_ReservedEmail/Administration" />
<CreateUpdateDeleteAccessControlRules Id="279" EntityType="Directory_UserCategory" Profile="Workforce/Workflows/Directory_UserCategory/Administration" />
<CreateUpdateDeleteAccessControlRules Id="281" EntityType="Directory_UserType" Profile="Workforce/Workflows/Directory_UserType/Administration" />
<CreateUpdateDeleteTemplate Id="290" EntityType="Directory_UserType" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="291" EntityType="Directory_ReservedIdentifier" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="292" EntityType="Directory_ExternalCompany" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="293" EntityType="Directory_ReservedLogin" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="294" EntityType="Directory_UserCategory" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="295" EntityType="Directory_Title" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="296" EntityType="Directory_Subsidiary" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="297" EntityType="Directory_Region" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="298" EntityType="Directory_ReservedEmail" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="299" EntityType="Directory_OrganizationType" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="300" EntityType="Directory_Site" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="301" EntityType="Directory_PersonalTitle" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="302" EntityType="Directory_Organization" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="303" EntityType="Directory_JobCategory" Profile="Administrator" />
<CreateUpdateDeleteTemplate Id="304" EntityType="Directory_Country" Profile="Administrator" />
<ManageAccounts Id="371" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ManageAccounts" />
<ManageAccounts Id="149" EntityType="Directory_User" Profile="Administrator" />
<ManageAccounts Id="372" EntityType="Directory_User" Profile="Helpdesk" />
<ReconciliateResourcesAccessControlRules Id="373" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReconciliateResources" />
<ReconciliateResourcesAccessControlRules Id="374" EntityType="Directory_User" Profile="Helpdesk" />
<ReconciliateRolesAccessControlRules Id="375" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReconciliateRoles" />
<ReconciliateRolesAccessControlRules Id="376" EntityType="Directory_User" Profile="Helpdesk" />
<ReviewProvisioningAccessControlRules Id="377" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReviewProvisioning" />
<ReviewProvisioningAccessControlRules Id="378" EntityType="Directory_User" Profile="Helpdesk" />
<ReviewRolesAccessControlRules Id="379" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ReviewRoles" />
<ReviewRolesAccessControlRules Id="380" EntityType="Directory_User" Profile="Helpdesk" />
<ViewTemplate Id="423" EntityType="Directory_UserRecord" Profile="Administrator" />
<ViewTemplate Id="424" EntityType="Directory_PresenceState" Profile="Administrator" />
<ViewTemplate Id="425" EntityType="Directory_User" Profile="Administrator" />
<WorkflowAccessControlRules Id="426" EntityType="Workflow_Directory_User" Profile="Workforce/Self/Self_ResourcesUpdate/Review" />
<WorkflowAccessControlRules Id="427" EntityType="Workflow_Directory_User" Profile="HR" />
<WorkflowAccessControlRules Id="428" EntityType="Workflow_Directory_User" Profile="Workforce/Workflows/Directory_User_NewInternal/Review" />
<WorkflowAccessControlRules Id="429" EntityType="Workflow_Directory_User" Profile="Administrator" />
<WorkflowAccessControlRules Id="430" EntityType="Workflow_Directory_User" Profile="Manager" />
<WorkflowEntityTypeDisplayTable Id="431" EntityType="Directory_User" />
<WorkflowEntityTypeSearchBar Id="432" EntityType="Directory_User" />
<WorkflowEntityType Id="434" EntityType="Directory_User" />
<WorkflowOverviewControlRules Id="443" EntityType="Directory_User" Profile="HR" />
<WorkflowOverviewControlRules Id="444" EntityType="Directory_User" Profile="Manager" />
<WorkflowOverviewControlRules Id="445" EntityType="Directory_User" Profile="Workforce/Administration/Directory_User_ViewWorkflowOverview" />
<WorkflowOverviewControlRules Id="446" EntityType="Directory_User" Profile="Helpdesk" />

```
