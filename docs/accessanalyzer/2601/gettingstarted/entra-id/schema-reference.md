---
title: "Schema reference"
sidebar_position: 40
---

# Entra ID schema reference

Access Analyzer stores Entra ID scan data in the `access_analyzer` ClickHouse database. The tables below are populated when you set up an Entra ID source group and run a scan. Use this reference when querying scan data directly or integrating Access Analyzer data with external tools.

Entra ID data is stored in shared tables that serve multiple connector types. Each row is scoped to your tenant using the `tenancyReference` column, which corresponds to your Entra ID tenant.

:::note
All tables use the `ReplacingMergeTree` engine. Duplicate rows with the same primary key are deduplicated at merge time. Use the `FINAL` keyword or query the available `_latest` views to return only the most recent version of each record.
:::

## Metadata columns

All tables include the following columns populated by Access Analyzer during each scan:

| Column | Type | Description |
|--------|------|-------------|
| `tenancyReference` | `UUID` | Identifier of the Entra ID tenant that produced this record. |
| `connectorReference` | `UUID` | Identifier of the connector job run. |
| `fullCrawlTimestampUtc` | `DateTime64(6)` | Timestamp of the most recent full sync for this tenant. |
| `crawlTimestampUtc` | `DateTime64(6)` | Timestamp when this record was written. Used as the version column for deduplication. |

---

## Tables

### principals

Stores users, groups, and roles synced from the Entra ID tenant. Each row represents one identity object.

**Primary key:** `entityId`

#### Core identity fields

| Column | Type | Description |
|--------|------|-------------|
| `entityId` | `UUID` | Unique identifier for this identity object within Access Analyzer. |
| `sourceSystemId` | `String` | Object ID from Entra ID (the Azure AD `objectId`). |
| `name` | `String` | Internal name of the object. |
| `displayName` | `String` | Display name as it appears in Entra ID. |
| `emailAddress` | `Nullable(String)` | Optional. Primary email address. |
| `firstName` | `Nullable(String)` | Optional. Given name (users only). |
| `lastName` | `Nullable(String)` | Optional. Surname (users only). |
| `isDeleted` | `Bool` | Whether the object has been soft-deleted. |
| `deletedDate` | `Nullable(DateTime64(6))` | Optional. Timestamp when the object was deleted. |
| `lastModified` | `Nullable(DateTime64(6))` | Optional. Timestamp of the most recent change. |
| `lastActive` | `Nullable(DateTime64(6))` | Optional. Timestamp of the most recent sign-in activity. |

#### User-specific fields

| Column | Type | Description |
|--------|------|-------------|
| `azureAdUserPrincipalName` | `Nullable(String)` | Optional. User principal name (UPN) in `user@domain` format. |
| `azureAdUserType` | `Nullable(String)` | Optional. Type of user account: `Member` or `Guest`. |
| `azureAdMfaConfigured` | `Nullable(Bool)` | Optional. Whether MFA is configured for the user. |
| `disabled` | `Nullable(Bool)` | Optional. Whether the user account is disabled. |
| `department` | `Nullable(String)` | Optional. Department attribute from Entra ID. |
| `jobTitle` | `Nullable(String)` | Optional. Job title attribute from Entra ID. |
| `lastDirSyncTime` | `Nullable(DateTime64(6))` | Optional. Last directory sync timestamp for hybrid-joined accounts. |

#### Group-specific fields

| Column | Type | Description |
|--------|------|-------------|
| `azureAdGroupType` | `Nullable(String)` | Optional. Group type: `Security`, `Distribution`, or `M365`. |
| `isSecurityEnabled` | `Nullable(Bool)` | Optional. Whether the group is security-enabled. |
| `isMailEnabled` | `Nullable(Bool)` | Optional. Whether the group is mail-enabled. |
| `memberCount` | `Nullable(Int32)` | Optional. Number of direct members. |
| `dynamicMembershipEnabled` | `Nullable(Bool)` | Optional. Whether the group uses dynamic membership rules. |

#### Role-specific fields

| Column | Type | Description |
|--------|------|-------------|
| `azureRoleTemplateId` | `Nullable(String)` | Optional. Stable template ID for built-in roles (consistent across tenants). |
| `azureRoleAllowedPrincipalTypes` | `Nullable(String)` | Optional. Principal types that can be assigned to this role. |

---

### memberships

Stores group membership records — both direct and nested. Each row represents one membership relationship.

**Primary key:** `(groupId, memberId, role)`

| Column | Type | Description |
|--------|------|-------------|
| `groupId` | `UUID` | `entityId` of the group. Joins to `principals.entityId`. |
| `memberId` | `UUID` | `entityId` of the member (user, group, or service principal). Joins to `principals.entityId`. |
| `membershipSource` | `String` | How the membership was established: `Direct`, `Nested`, or `Dynamic`. |
| `role` | `String` | Role of the member within the group: `Owner`, `Member`, or `Guest`. |
| `expandedFromGroupId` | `Nullable(UUID)` | Optional. For nested memberships, the intermediate group through which this membership was resolved. |
| `isDeleted` | `Bool` | Whether this membership record has been removed. |

---

### sensitivity_labels

Stores Microsoft Information Protection (MIP) sensitivity labels retrieved from the tenant during an Entra ID scan.

**Primary key:** `sensitivitylabelId`

| Column | Type | Description |
|--------|------|-------------|
| `sensitivitylabelId` | `UUID` | Unique identifier for this label within Access Analyzer. |
| `name` | `String` | Internal name of the label. |
| `displayName` | `String` | Display name shown to users in Microsoft 365 applications. |
| `description` | `Nullable(String)` | Optional. Description of the label's purpose. |
| `isActive` | `Bool` | Whether the label is currently active in the tenant. |
| `isDeleted` | `Bool` | Whether the label has been deleted. |
| `classificationLevel` | `Nullable(String)` | Optional. Classification level assigned to the label. |
| `priority` | `Int32` | Display order priority. Lower values appear first. |
| `parentLabelId` | `Nullable(UUID)` | Optional. For sublabels, the `sensitivitylabelId` of the parent label. |
| `labelId` | `Nullable(String)` | Microsoft GUID for the label as defined in Microsoft Purview. |

:::note
Labels stored here are the source data for MIP label mapping in **Configuration** > **Sensitive Data**. After mapping labels to sensitive data types, they are available for detection during File Server and SharePoint Online scans.
:::
