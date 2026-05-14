---
title: "Active Directory Schema Reference"
sidebar_position: 40
---

# Active Directory Schema Reference

Access Analyzer stores Active Directory scan data in the `access_analyzer` ClickHouse database. The tables below are created when you set up an Active Directory source group and run a scan. Use this reference when querying scan data directly or integrating Access Analyzer data with external tools.

:::note
All tables use the `ReplacingMergeTree` engine. Duplicate rows with the same primary key are deduplicated at merge time. Query the `_latest` views to return only the most recent version of each record.
:::

## Metadata columns

All tables include the following columns populated by Access Analyzer during each scan:

| Column | Type | Description |
|--------|------|-------------|
| `scan_id` | `String` | Identifier of the source group that produced this record. |
| `scan_execution_id` | `String` | Identifier of the specific scan run. |
| `scanned_at` | `DateTime` | Timestamp when the record was written. |

---

## Tables

### Active Directory User

Stores one row per user object discovered in an Active Directory scan.

**Primary key:** `object_guid`

#### Core identity fields

| Column | Type | Description |
|--------|------|-------------|
| `object_guid` | `UUID` | Globally unique identifier for the user object. |
| `object_sid` | `String` | Security identifier (SID) of the user. |
| `distinguished_name` | `String` | Full distinguished name (DN) of the user in the directory. |
| `canonical_name` | `Nullable(String)` | Optional. Canonical form of the distinguished name. |
| `sam_account_name` | `String` | Pre-Windows 2000 logon name (sAMAccountName). |
| `user_principal_name` | `Nullable(String)` | Optional. User principal name (UPN) in `user@domain` format. |
| `display_name` | `Nullable(String)` | Optional. Display name shown in directory listings. |
| `given_name` | `Nullable(String)` | Optional. First name of the user. |
| `surname` | `Nullable(String)` | Optional. Last name of the user. |
| `enabled` | `Bool` | Whether the user account is enabled. |
| `when_created` | `Nullable(DateTime)` | Optional. Timestamp when the account was created in the directory. |
| `when_changed` | `Nullable(DateTime)` | Optional. Timestamp of the most recent change to the account. |
| `description` | `Nullable(String)` | Optional. Description field set on the user object. |
| `admin_count` | `Nullable(Int32)` | Optional. Value of the `adminCount` attribute; non-zero values indicate the account is or was protected by AdminSDHolder. |
| `primary_group_id` | `Nullable(Int32)` | Optional. Relative identifier (RID) of the user's primary group. |
| `domain_name` | `Nullable(String)` | Optional. NetBIOS or DNS name of the domain. |
| `domain_canonical_name` | `Nullable(String)` | Optional. Canonical (DNS) name of the domain. |
| `cn` | `Nullable(String)` | Optional. Common name (CN) attribute of the user object. |

#### Contact information

| Column | Type | Description |
|--------|------|-------------|
| `mail` | `Nullable(String)` | Optional. Email address. |
| `telephone_number` | `Nullable(String)` | Optional. Office telephone number. |
| `mobile` | `Nullable(String)` | Optional. Mobile telephone number. |
| `office` | `Nullable(String)` | Optional. Office location. |
| `street_address` | `Nullable(String)` | Optional. Street address. |
| `city` | `Nullable(String)` | Optional. City. |
| `state` | `Nullable(String)` | Optional. State or province. |
| `postal_code` | `Nullable(String)` | Optional. Postal or ZIP code. |
| `country` | `Nullable(String)` | Optional. Country or region. |

#### Organizational information

| Column | Type | Description |
|--------|------|-------------|
| `job_title` | `Nullable(String)` | Optional. Job title. |
| `department` | `Nullable(String)` | Optional. Department. |
| `company` | `Nullable(String)` | Optional. Company or organization name. |
| `manager_dn` | `Nullable(String)` | Optional. Distinguished name of the user's manager. |
| `employee_id` | `Nullable(String)` | Optional. Employee identifier. |

#### Security information

| Column | Type | Description |
|--------|------|-------------|
| `user_account_control` | `Nullable(Int32)` | Optional. Bitmask value of the `userAccountControl` attribute controlling account behavior and flags. |
| `password_last_set` | `Nullable(DateTime)` | Optional. Timestamp when the password was last changed. |
| `password_never_expires` | `Nullable(Bool)` | Optional. Whether the password is set to never expire. |
| `account_expires` | `Nullable(String)` | Optional. Expiration date of the account, stored as a string representation of the directory value. |
| `logon_hours` | `Nullable(String)` | Optional. Bitmask string representing the hours during which the user is permitted to log on. |
| `logon_workstations` | `Array(String)` | List of workstations the user is permitted to log on to; empty array indicates no restriction. |
| `smartcard_required` | `Nullable(Bool)` | Optional. Whether the account requires a smart card to log on. |
| `mfa_enforced` | `Nullable(Bool)` | Optional. Whether multi-factor authentication is enforced for this account. |
| `is_deleted` | `Boolean` | Whether the user object has been soft-deleted. Rows where `is_deleted = 1` are excluded from the `active_directory_user_latest` view. |

#### Activity information

| Column | Type | Description |
|--------|------|-------------|
| `last_logon` | `Nullable(DateTime)` | Optional. Most recent logon timestamp from the domain controller that serviced the last logon. Not replicated across domain controllers. |
| `last_logon_timestamp` | `Nullable(DateTime)` | Optional. Replicated logon timestamp (`lastLogonTimestamp`); updated at intervals and may lag behind the actual last logon by up to 14 days. |
| `bad_pwd_count` | `Nullable(Int32)` | Optional. Number of consecutive failed logon attempts. |
| `bad_password_time` | `Nullable(DateTime)` | Optional. Timestamp of the last failed logon attempt. |
| `lockout_time` | `Nullable(DateTime)` | Optional. Timestamp when the account was locked out; `NULL` or zero indicates the account isn't locked. |
| `last_logoff` | `Nullable(DateTime)` | Optional. Timestamp of the last logoff. |

#### Delegation information

| Column | Type | Description |
|--------|------|-------------|
| `ms_ds_allowed_to_act_on_behalf_of` | `Array(String)` | List of security descriptors for accounts permitted to delegate to this account using resource-based constrained delegation. |
| `ms_ds_allowed_to_delegate_to` | `Array(String)` | List of SPNs this account is permitted to delegate to using constrained delegation. |
| `ms_ds_supported_encryption_types` | `Nullable(Int32)` | Optional. Bitmask of Kerberos encryption types supported by this account. |
| `service_principal_name` | `Array(String)` | List of service principal names (SPNs) registered to this account. |
| `legacy_exchange_dn` | `Nullable(String)` | Optional. Legacy Exchange distinguished name, used for mail routing compatibility. |
| `ms_ds_user_account_control_computer` | `Nullable(Int32)` | Optional. Computer-specific `userAccountControl` flags stored on the user object in hybrid environments. |

**Relations**

| Related table | Join column | Description |
|---|---|---|
| `active_directory_group_membership` | `object_sid` via `foreign_sid` | Resolves groups that include this user when the user was added by SID from a foreign domain. |
| `active_directory_group_membership` | `distinguished_name` via `member_dn` | Resolves groups that include this user when the user was added by DN. |
| `active_directory_user_custom_attribute` | `object_guid` | Returns custom attribute values collected for this user. |
| `active_directory_effective_group_membership` | `object_guid` via `member_object_guid` | Returns all groups this user belongs to, including nested memberships. |

---

### Active Directory Group

Stores one row per group object discovered in an Active Directory scan.

**Primary key:** `object_guid`

| Column | Type | Description |
|--------|------|-------------|
| `object_guid` | `UUID` | Globally unique identifier for the group object. |
| `object_sid` | `String` | Security identifier (SID) of the group. |
| `distinguished_name` | `String` | Full distinguished name (DN) of the group in the directory. |
| `sam_account_name` | `Nullable(String)` | Optional. Pre-Windows 2000 name of the group. |
| `name` | `Nullable(String)` | Optional. Display name of the group. |
| `group_scope` | `Nullable(String)` | Optional. Scope of the group: `DomainLocal`, `Global`, or `Universal`. |
| `group_type` | `Nullable(String)` | Optional. Type of the group: `Security` or `Distribution`. |
| `admin_count` | `Nullable(Int32)` | Optional. Value of the `adminCount` attribute; non-zero values indicate the group is or was protected by AdminSDHolder. |
| `primary_group_id` | `Nullable(Int32)` | Optional. Relative identifier (RID) associated with this group when it is used as a primary group. |
| `domain_name` | `Nullable(String)` | Optional. NetBIOS or DNS name of the domain. |
| `domain_canonical_name` | `Nullable(String)` | Optional. Canonical (DNS) name of the domain. |
| `cn` | `Nullable(String)` | Optional. Common name (CN) attribute of the group object. |
| `mail` | `Nullable(String)` | Optional. Email address associated with the group. |
| `is_deleted` | `Boolean` | Whether the group object has been soft-deleted. Rows where `is_deleted = 1` are excluded from the `active_directory_group_latest` view. |

**Relations**

| Related table | Join column | Description |
|---|---|---|
| `active_directory_group_membership` | `distinguished_name` via `group_dn` | Lists the direct members of this group. |
| `active_directory_effective_group_membership` | `object_guid` via `group_object_guid` | Lists all effective members of this group, including nested members. |

---

### Active Directory Group Membership

Stores one row per direct membership relationship between a group and a member object (user or group). Nesting isn't flattened in this table; use `active_directory_effective_group_membership` for flattened membership.

**Primary key:** `(group_dn, member_dn)`

| Column | Type | Description |
|--------|------|-------------|
| `group_dn` | `String` | Distinguished name (DN) of the group. |
| `member_dn` | `String` | Distinguished name (DN) of the member object. |
| `foreign_sid` | `Nullable(String)` | Optional. SID of the member when the member is from a foreign (trusted) domain and a DN isn't available. |

**Relations**

| Related table | Join column | Description |
|---|---|---|
| `active_directory_group` | `group_dn` = `distinguished_name` | Resolves the group record for this membership row. |
| `active_directory_user` | `member_dn` = `distinguished_name` | Resolves the user record for this membership row when the member is a user. |
| `active_directory_group` | `member_dn` = `distinguished_name` | Resolves the group record for this membership row when the member is a nested group. |
| `active_directory_user` | `foreign_sid` = `object_sid` | Resolves a foreign-domain user by SID when `foreign_sid` is set. |
| `active_directory_group` | `foreign_sid` = `object_sid` | Resolves a foreign-domain group by SID when `foreign_sid` is set. |

---

### Active Directory User Custom Attribute

Stores custom Active Directory attribute values collected for user objects during a scan. Each row represents one attribute key-value pair for one user. An attribute with no value produces a row with `attr_value = NULL`.

**Primary key:** `(object_guid, attr_name)`

| Column | Type | Description |
|--------|------|-------------|
| `object_guid` | `UUID` | Globally unique identifier of the user object. Joins to `active_directory_user.object_guid`. |
| `attr_name` | `String` | LDAP attribute name, as configured in the source group settings. |
| `attr_value` | `Nullable(String)` | Optional. String representation of the attribute value. |

**Relations**

| Related table | Join column | Description |
|---|---|---|
| `active_directory_user` | `object_guid` | Returns the full user record for this custom attribute row. |

---

### Active Directory Effective Group Membership

Stores the fully flattened, transitively resolved group membership graph. This table is populated by the `active_directory_effective_group_membership_mv` materialized view, which refreshes on a schedule after each scan. Each row represents one effective membership relationship at a given nesting depth.

**Engine:** `MergeTree` (not `ReplacingMergeTree`). The table is rebuilt on each refresh rather than deduplicated by version.

**Primary key:** `(group_object_guid, member_object_guid)`

| Column | Type | Description |
|--------|------|-------------|
| `group_object_guid` | `UUID` | Globally unique identifier of the group. Joins to `active_directory_group.object_guid`. |
| `member_object_guid` | `UUID` | Globally unique identifier of the effective member (user or group). Joins to `active_directory_user.object_guid` or `active_directory_group.object_guid`. |
| `nesting_level` | `Int32` | Depth of the membership relationship. A value of `0` indicates direct membership; higher values indicate the number of intermediate groups. |

**Relations**

| Related table | Join column | Description |
|---|---|---|
| `active_directory_group` | `group_object_guid` = `object_guid` | Resolves the group name and attributes for this membership row. |
| `active_directory_user` | `member_object_guid` = `object_guid` | Resolves the user record when the effective member is a user. |
| `active_directory_group` | `member_object_guid` = `object_guid` | Resolves the group record when the effective member is a nested group. |

---

## Views

Access Analyzer creates views that simplify common queries. Use views in preference to querying base tables directly.

### Deduplication views

These views apply `FINAL` to the underlying `ReplacingMergeTree` tables to return only the most recent version of each record. Use these as the starting point for any query against Active Directory data.

| View | Base table | Description |
|------|------------|-------------|
| `active_directory_user_latest` | `active_directory_user` | Returns the most recent version of each user record, deduplicated by `object_guid`, excluding soft-deleted users (`is_deleted = 1`). |
| `active_directory_group_latest` | `active_directory_group` | Returns the most recent version of each group record, deduplicated by `object_guid`, excluding soft-deleted groups (`is_deleted = 1`). |
| `active_directory_group_membership_latest` | `active_directory_group_membership` | Returns the most recent version of each group membership row, deduplicated by `(group_dn, member_dn)`. |
| `active_directory_user_custom_attribute_latest` | `active_directory_user_custom_attribute` | Returns the most recent version of each custom attribute row, deduplicated by `(object_guid, attr_name)`. |

### Resolution views

These views resolve raw membership data into UUID-keyed relationships.

| View | Description |
|------|-------------|
| `active_directory_group_membership_resolved` | Joins `active_directory_group_membership_latest` to the user and group tables to produce a resolved membership graph keyed by `(group_object_guid, member_object_guid)`. Handles both same-domain members (matched by DN) and foreign-domain members (matched by SID). Excludes deleted objects. Used as the source for `active_directory_effective_group_membership_mv`. |

### Risk views

These views surface specific account and group hygiene conditions. Each view returns rows in a common shape: `risk_type`, `entity_id`, `entity_name`, `domain`, `detection_timestamp`, and `additional_context`. The `active_directory_risks_summary` view aggregates all risk views into a single result set enriched with catalog metadata.

| View | Description |
|------|-------------|
| `active_directory_empty_groups` | Groups that have no effective members. |
| `active_directory_single_member_groups` | Groups that have exactly one effective member. |
| `active_directory_large_groups` | Groups that have more than 500 effective members. |
| `active_directory_duplicate_groups_mv` | Groups whose effective membership set is identical to that of at least one other group. |
| `active_directory_circular_nesting_mv` | Groups involved in circular nesting or with a nesting depth of 10 or more. |
| `active_directory_stale_users` | Enabled user accounts with no logon activity in the past 90 to 365 days. |
| `active_directory_very_stale_users` | Enabled user accounts with no logon activity for more than 365 days. |
| `active_directory_isolated_users` | Enabled user accounts that belong to no groups. |
| `active_directory_no_logon_users` | Enabled user accounts with no recorded logon timestamp. |
| `active_directory_password_never_expires` | Enabled user accounts configured with a non-expiring password. |
| `active_directory_password_not_required` | Enabled user accounts where the `PASSWD_NOTREQD` flag is set in `user_account_control`. |
| `active_directory_old_passwords` | Enabled user accounts whose password has not changed in more than 90 days. |
| `active_directory_dc_logon_rights` | Enabled users who are effective members of privileged groups that grant domain controller logon rights (for example, Domain Admins, Enterprise Admins). |
| `active_directory_risks_summary_mv` | Union of all individual risk views. Returns one row per detected risk. |
| `active_directory_risks_summary` | Enriches `active_directory_risks_summary_mv` with risk level, category, and description from the `active_directory_risk_catalog` reference table. Use this view to query all risks with their human-readable metadata. |
| `active_directory_risks_by_domain` | Aggregates risk counts by domain and risk type, sourced from `active_directory_risks_summary_mv`. |
| `active_directory_group_member_counts` | Returns the total effective member count for each group. Intermediate view used by the group risk views. |
