---
title: "Template Description"
description: "Template Description"
sidebar_position: 30
---

# Template Description

Description of the MS Excel template for the creation of the identities repository.

[**Click here to download a template example**](/files/identitymanager/user-guide/set-up/initial-identities-loading/Directory_example_V602.xlsx).

![Template Model](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/template-description/initialload_templatemodel_v603.webp)

All tabs contain a column `Command` only used at a later stage to
[modify (massively) identity data](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/mass-update/index.md).

## User - Required

[An identity is split into two parts](/docs/identitymanager/6.1/integration-guide/identity-management/index.md),
the first one being the parent resource called `User` which represents the user's identity card. It
contains the few attributes which shall not change during the identity's lifecycle.

| Attribute                    | Type    | Description |
| ---------------------------- | ------- | ----------- |
| Identifier (required)        | String  |             |
| ConsentPhotoUsage (optional) | Boolean |             |
| IsDraft (optional)           | Boolean |             |

## UserRecord - Required

[An identity is split into two parts](/docs/identitymanager/6.1/integration-guide/identity-management/index.md),
the second one being the one or several child resources called `UserRecord` which represent the
user's positions. Records belong to users and help materialize:

- several positions at once;
- validity periods for positions/assignments unrelated to the user itself;
- position changes.

In other words, records represent the lifecycle of a user inside the company, i.e. multiple
contracts, mutation, etc.

Thus, the `UserRecord` tab usually holds users' information that might change over time, while the
`User` tab groups all records of a given user around its identifier.

| Attribute                                                                                | Type       | Description                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RecordIdentifier (recommended)                                                           | String     | Identifier of the [record](/docs/identitymanager/6.1/integration-guide/identity-management/joiners-movers-leavers/position-change/index.md). **Note:** it can be the same as `PositionIdentifier` when users can have no more than one contract simultaneously. **Note:** required when using records. |
| User (required)                                                                          | ForeignKey | `Identifier` from the `User` tab.                                                                                                                                                                                                                                                                                  |
| EmployeeId (recommended)                                                                 | String     |                                                                                                                                                                                                                                                                                                                    |
| Gender (optional)                                                                        | ForeignKey | `Identifier` from the [`Gender`](#gender) tab.                                                                                                                                                                                                                                                                     |
| PersonalTitle (optional)                                                                 | ForeignKey | `Identifier` from the [`PersonalTitle`](#personaltitle) tab.                                                                                                                                                                                                                                                       |
| FirstName (recommended)                                                                  | String     |                                                                                                                                                                                                                                                                                                                    |
| LastName (recommended)                                                                   | String     |                                                                                                                                                                                                                                                                                                                    |
| BirthName (optional)                                                                     | String     |                                                                                                                                                                                                                                                                                                                    |
| BirthDate (optional)                                                                     | DateTime   |                                                                                                                                                                                                                                                                                                                    |
| Email (recommended)                                                                      | String     |                                                                                                                                                                                                                                                                                                                    |
| EmailAliases (optional)                                                                  | String     | Outdated, or any other email address associated with the user. This is used to prevent the re-assignment of a previously used address.                                                                                                                                                                             |
| Login (optional)                                                                         | String     |                                                                                                                                                                                                                                                                                                                    |
| PhoneNumber (optional)                                                                   | String     |                                                                                                                                                                                                                                                                                                                    |
| MobileNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                                    |
| VIP (optional)                                                                           | Boolean    | `True` to specify that the user is special/important.                                                                                                                                                                                                                                                              |
| ContractIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                                    |
| ContractStartDate (required)                                                             | DateTime   | Start date of the user's contract in the company.                                                                                                                                                                                                                                                                  |
| ContractEndDate (recommended for permanent contracts, required for fixed-term contracts) | DateTime   | End date of the user's contract in the company.                                                                                                                                                                                                                                                                    |
| AccessesExpirationDate (optional)                                                        | DateTime   | Date when the user will be deprived of their access rights.                                                                                                                                                                                                                                                        |
| UserType (required)                                                                      | ForeignKey | `Identifier` from the `UserType` tab.                                                                                                                                                                                                                                                                              |
| Subsidiary (optional)                                                                    | ForeignKey | `Identifier` from the [`Subsidiary`](#subsidiary) tab.                                                                                                                                                                                                                                                             |
| ExternalCompany (optional)                                                               | ForeignKey | `Identifier` from the [`ExternalCompany`](#externalcompany) tab.                                                                                                                                                                                                                                                   |
| PositionIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                                    |
| PositionStartDate (optional)                                                             | DateTime   |                                                                                                                                                                                                                                                                                                                    |
| PositionEndDate (optional)                                                               | DateTime   |                                                                                                                                                                                                                                                                                                                    |
| Organization (recommended)                                                               | ForeignKey | `Identifier` from the [`Organization`](#organization) tab.                                                                                                                                                                                                                                                         |
| Manager (recommended)                                                                    | String     | Line manager. `Identifier` from the `User` tab.                                                                                                                                                                                                                                                                    |
| IGAManager (optional)                                                                    | String     | Validator of IGA requests. `Identifier` from the `User` tab.                                                                                                                                                                                                                                                       |
| JobTitle (optional)                                                                      | String     |                                                                                                                                                                                                                                                                                                                    |
| Title (optional)                                                                         | ForeignKey | `Identifier` from the [`Title`](#title) tab.                                                                                                                                                                                                                                                                       |
| Site (optional)                                                                          | ForeignKey | `Identifier` from the [`Site`](#site) tab.                                                                                                                                                                                                                                                                         |
| Office (optional)                                                                        | ForeignKey | `Identifier` from the [`Office`](#office) tab.                                                                                                                                                                                                                                                                     |
| OfficeNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                                    |
| IsMainPosition (optional)                                                                | Boolean    |                                                                                                                                                                                                                                                                                                                    |
| Suspended (optional)                                                                     | Boolean    |                                                                                                                                                                                                                                                                                                                    |
| StartDate (optional)                                                                     | DateTime   | Start date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                                          |
| EndDate (optional)                                                                       | DateTime   | End date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                                            |

**Recommendations**:

- There is no absolute need for a unique identifier, because Usercube can compute one in the next
  steps.
- Be aware of the difference between a hierarchical manager and an IGA manager who approves
  entitlement requests. They aren't necessarily the same person.

## UserType - Required

User types represent users' contract types, such as permanent contract, fixed term contract,
interim, contractor, trainee, etc.

| Attribute                             | Type       | Description                                                                                                                                            |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier (required)                 | String     |                                                                                                                                                        |
| DisplayName (recommended)             | String     |                                                                                                                                                        |
| Category (required)                   | ForeignKey | `Identifier` from the [`UserCategory`](#usercategory) tab.                                                                                             |
| EmailSuffix (optional)                | String     | Suffix to concatenate to the email string (immediately before the `@` character).                                                                      |
| IsExternal (required)                 | Boolean    |                                                                                                                                                        |
| LoginPrefix (optional)                | String     |                                                                                                                                                        |
| LoginSuffix (optional)                | String     |                                                                                                                                                        |
| UniqueIdentifierPrefix (optional)     | String     |                                                                                                                                                        |
| UniqueIdentifierRangeEnd (optional)   | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeEnd` set to 9999 means that no unique identifier should be greater than 9999. |
| UniqueIdentifierRangeStart (optional) | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeStart` set to 1000 means that no unique identifier should be less than 1000.  |
| UniqueIdentifierSuffix (optional)     | String     |                                                                                                                                                        |

## UserCategory

Categories constitute an additional layer to organize users who can be sorted by types and then
further by categories, and categories can be transverse or not.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Subsidiary

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| EmailDomain (optional)    | String |             |

## ExternalCompany

Including external workers into the workforce repository requires listing external companies.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Organization

A company is divided into organizations, also called departments, such as the board of directors,
corporate banking, call center, USA operations, France operations, treasury, etc.

| Attribute                 | Type       | Description                                                        |
| ------------------------- | ---------- | ------------------------------------------------------------------ |
| Identifier (required)     | String     |                                                                    |
| DisplayName (recommended) | String     |                                                                    |
| Manager (recommended)     | ForeignKey | `Identifier` from the `User` tab.                                  |
| Assistant (optional)      | ForeignKey | `Identifier` from the `User` tab.                                  |
| Parent (optional)         | ForeignKey | `Identifier` of another organization.                              |
| Type (optional)           | ForeignKey | `Identifier` from the [`OrganizationType`](#organizationtype) tab. |

## OrganizationType

Organizations can be categorized into organization types, if relevant.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Title

Each position can be represented by a title which names said position, such as architect, CEO,
purchasing manager, recruiter, etc.

| Attribute                 | Type       | Description                                              |
| ------------------------- | ---------- | -------------------------------------------------------- |
| Identifier (required)     | String     |                                                          |
| DisplayName (recommended) | String     |                                                          |
| JobCategory (optional)    | ForeignKey | `Identifier` from the [`JobCategory`](#jobcategory) tab. |

## JobCategory

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Country

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| ISOCode (optional)        | String |             |

## Region

| Attribute                 | Type       | Description                                      |
| ------------------------- | ---------- | ------------------------------------------------ |
| Identifier (required)     | String     |                                                  |
| DisplayName (recommended) | String     |                                                  |
| Country (optional)        | ForeignKey | `Identifier` from the [`Country`](#country) tab. |

## Site

All positions specify a working site.

| Attribute                    | Type       | Description                                    |
| ---------------------------- | ---------- | ---------------------------------------------- |
| Identifier (required)        | String     |                                                |
| DisplayName (recommended)    | String     |                                                |
| Name (optional)              | String     |                                                |
| StreetNumber (optional)      | Int32      |                                                |
| StreetName (optional)        | String     |                                                |
| StreetType (optional)        | String     |                                                |
| Floor (optional)             | Int32      |                                                |
| PostalCode (optional)        | Int32      |                                                |
| City (optional)              | String     |                                                |
| Region (optional)            | ForeignKey | `Identifier` from the [`Region`](#region) tab. |
| PreferredLanguage (optional) | String     |                                                |
| TimeZone (optional)          | Int32      |                                                |
| Latitude (optional)          | Int64      |                                                |
| Longitude (optional)         | Int64      |                                                |
| Url (optional)               | String     |                                                |

## Office

| Attribute                 | Type       | Description                                |
| ------------------------- | ---------- | ------------------------------------------ |
| Identifier (required)     | String     |                                            |
| DisplayName (recommended) | String     |                                            |
| Site (recommended)        | ForeignKey | `Identifier` from the [`Site`](#site) tab. |

## PersonalTitle

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Gender

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## ReservedEmail

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedIdentifier

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedLogin

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |
