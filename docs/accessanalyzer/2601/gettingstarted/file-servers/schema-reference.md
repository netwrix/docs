---
title: "File Servers Schema Reference"
sidebar_position: 40
---

# File Servers Schema Reference

Access Analyzer stores File Server scan data in the `access_analyzer` ClickHouse database. The tables below are created when you set up a File Server source group and run a scan. Use this reference when querying scan data directly or integrating Access Analyzer data with external tools.

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

### cifs_object

Stores the file system inventory collected during a scan — one row per file, directory, or share discovered on a file server.

| Column | Type | Description |
|--------|------|-------------|
| `host` | `String` | Hostname of the file server. |
| `share_name` | `String` | Name of the share on the file server. |
| `share_path` | `String` | UNC path of the share root. |
| `path` | `String` | Full path of the object within the share. |
| `object_type` | `Enum8('FILE', 'DIRECTORY', 'SHARE')` | Whether the object is a file, directory, or share. |
| `parent_path` | `String` | Full path of the parent directory. |
| `name` | `String` | Name of the file or directory. |
| `file_extension` | `String` | File extension, if applicable. Empty string for directories and shares. |
| `file_size` | `UInt64` | Size of the file in bytes. Zero for directories and shares. |
| `owner_sid` | `String` | SID of the file or directory owner. |
| `group_owner_sid` | `String` | SID of the primary group owner. |
| `created_time` | `Nullable(DateTime)` | Optional. Timestamp when the object was created. |
| `modified_time` | `Nullable(DateTime)` | Optional. Timestamp when the object was last modified. |
| `accessed_time` | `Nullable(DateTime)` | Optional. Timestamp when the object was last accessed. |
| `scan_status` | `Enum8('SUCCESS', 'ERROR')` | Whether the object was scanned successfully. |
| `error_message` | `String` | Error detail if `scan_status` is `ERROR`. Empty string on success. |
| `attributes` | `Array(Enum8('DIRECTORY', 'READONLY', 'HIDDEN', 'SYSTEM', 'ARCHIVE', 'COMPRESSED', 'ENCRYPTED'))` | Windows file attributes applied to the object. |
| `inheritance_flags` | `UInt16` | Bitmask representing ACL inheritance settings on the object. |
| `is_protected` | `Nullable(Bool)` | Optional. Whether the object's ACL is protected from inheritance. |
| `is_world_readable` | `Nullable(Bool)` | Optional. Whether any well-known open SID (for example, Everyone) has read access. |
| `is_world_writable` | `Nullable(Bool)` | Optional. Whether any well-known open SID has write access. |
| `is_admin_only` | `Nullable(Bool)` | Optional. Whether access is restricted to administrative accounts only. |
| `has_explicit_deny` | `Nullable(Bool)` | Optional. Whether the object has at least one explicit deny ACE. |
| `permission_count` | `UInt16` | Total number of ACEs on the object. |
| `unique_trustees_count` | `UInt16` | Number of distinct trustees with permissions on the object. |
| `permission_flags` | `UInt16` | Bitmask summarizing the permission state of the object. |
| `is_complete` | `Bool` | Whether the scan fully enumerated this object's permissions before the scan completed. |
| `hard_delete` | `Bool` | Internal flag used by `ReplacingMergeTree` to exclude deleted rows. Rows where `hard_delete = 1` are suppressed at query time when querying with `FINAL`. |

**Relations**

| Related table | Join column | Description |
|---------------|-------------|-------------|
| `cifs_permission` | `host`, `share_name`, `path` | Resolves NTFS permissions assigned to this file or directory. |
| `cifs_sensitive_data` | `host`, `share_name`, `path` | Resolves sensitive data findings for this file. |

---

### cifs_permission

Stores NTFS ACEs (access control entries) for files and directories — one row per trustee per path.

| Column | Type | Description |
|--------|------|-------------|
| `trustee_sid` | `String` | SID of the user or group that this ACE grants or denies access to. |
| `host` | `String` | Hostname of the file server. |
| `share_name` | `String` | Name of the share containing the object. |
| `path` | `String` | Full path of the object this ACE applies to. |
| `permissions` | `Array(Enum8('FILE_READ_DATA', 'FILE_WRITE_DATA', 'FILE_APPEND_DATA', 'FILE_READ_EA', 'FILE_WRITE_EA', 'FILE_EXECUTE', 'FILE_DELETE_CHILD', 'FILE_READ_ATTRIBUTES', 'FILE_WRITE_ATTRIBUTES', 'DIR_LIST', 'DIR_ADD_FILE', 'DIR_ADD_SUB_DIR', 'DIR_DELETE_CHILD', 'DELETE', 'READ_CONTROL', 'WRITE_DAC', 'WRITE_OWNER', 'GENERIC_ALL', 'GENERIC_EXECUTE', 'GENERIC_WRITE', 'GENERIC_READ'))` | Individual permission flags included in this ACE. |
| `normalized_permissions` | `FixedString(6)` | Six-character string encoding the effective permissions (for example, `RWXDMC`) for use in summary queries. |
| `access_type` | `Enum8('ALLOW', 'DENY')` | Whether this ACE allows or denies access. |
| `access_mask` | `UInt32` | Raw Windows access mask bitmask for this ACE. |
| `inheritance_flags` | `UInt16` | Bitmask describing how this ACE propagates to child objects. |
| `is_inherited` | `Bool` | Whether this ACE was inherited from a parent object rather than set explicitly. |
| `mip_label_id` | `Nullable(String)` | Optional. Microsoft GUID of the MIP sensitivity label applied to this object. |
| `mip_label_name` | `Nullable(String)` | Optional. Display name of the MIP sensitivity label applied to this object. |
| `hard_delete` | `Bool` | Internal flag used by `ReplacingMergeTree` to exclude deleted rows. |

**Relations**

| Related table | Join column | Description |
|---------------|-------------|-------------|
| `cifs_object` | `host`, `share_name`, `path` | Resolves file system object details for this ACE. |
| `cifs_share_permission` | `host`, `share_name` | Resolves the share-level permissions that apply in combination with this NTFS ACE. |

---

### cifs_share_permission

Stores share-level ACEs — one row per trustee per share. Share permissions apply in addition to NTFS permissions; the effective access a user has is the intersection of both.

| Column | Type | Description |
|--------|------|-------------|
| `trustee_sid` | `String` | SID of the user or group that this share ACE grants or denies access to. |
| `host` | `String` | Hostname of the file server. |
| `share_name` | `String` | Name of the share this ACE applies to. |
| `permissions` | `Array(Enum8('FILE_READ_DATA', 'FILE_WRITE_DATA', 'FILE_APPEND_DATA', 'FILE_READ_EA', 'FILE_WRITE_EA', 'FILE_EXECUTE', 'FILE_DELETE_CHILD', 'FILE_READ_ATTRIBUTES', 'FILE_WRITE_ATTRIBUTES', 'DIR_LIST', 'DIR_ADD_FILE', 'DIR_ADD_SUB_DIR', 'DIR_DELETE_CHILD', 'DELETE', 'READ_CONTROL', 'WRITE_DAC', 'WRITE_OWNER', 'GENERIC_ALL', 'GENERIC_EXECUTE', 'GENERIC_WRITE', 'GENERIC_READ'))` | Individual permission flags included in this share ACE. |
| `normalized_permissions` | `FixedString(6)` | Six-character string encoding the effective permissions for use in summary queries. |
| `access_type` | `Enum8('ALLOW', 'DENY')` | Whether this ACE allows or denies access at the share level. |
| `access_mask` | `UInt32` | Raw Windows access mask bitmask for this share ACE. |
| `mip_label_id` | `Nullable(String)` | Optional. Microsoft GUID of the MIP sensitivity label applied to this share. |
| `mip_label_name` | `Nullable(String)` | Optional. Display name of the MIP sensitivity label applied to this share. |
| `hard_delete` | `Bool` | Internal flag used by `ReplacingMergeTree` to exclude deleted rows. |

**Relations**

| Related table | Join column | Description |
|---------------|-------------|-------------|
| `cifs_permission` | `host`, `share_name` | Resolves NTFS ACEs that apply within this share. |

---

### cifs_sensitive_data

Stores sensitive data classification findings — one row per taxonomy term match per file path.

| Column | Type | Description |
|--------|------|-------------|
| `host` | `String` | Hostname of the file server. |
| `share_name` | `String` | Name of the share containing the file. |
| `path` | `String` | Full path of the file where sensitive data was detected. |
| `taxonomy_name` | `String` | Name of the taxonomy that contains the matched term (for example, `PII`). |
| `term_name` | `String` | Name of the classification term that matched (for example, `Social Security Number`). |
| `processing_time_seconds` | `Float32` | Time in seconds to classify the file. |
| `classification_method` | `Nullable(Enum8('SDK_AUTO', 'SDK_CUSTOM'))` | Optional. Whether detection used the built-in automatic classification engine (`SDK_AUTO`) or a custom classification configuration (`SDK_CUSTOM`). |
| `scan_status` | `Enum8('SUCCESS', 'ERROR')` | Whether the file was processed successfully. `SUCCESS` indicates the file was read and classified, regardless of whether sensitive data was found. `ERROR` indicates a processing failure such as a file conversion error, encryption, or unsupported format. |
| `error_message` | `Nullable(String)` | Optional. Error detail when `scan_status` is `ERROR`. Null on success. |
| `hard_delete` | `Bool` | Internal flag used by `ReplacingMergeTree` to exclude deleted rows. |

**Relations**

| Related table | Join column | Description |
|---------------|-------------|-------------|
| `cifs_object` | `host`, `share_name`, `path` | Resolves file system object details for this finding. |
| `cifs_sensitive_data_mip_labels` | `host`, `share_name`, `path` | Resolves MIP sensitivity label decisions applied to this file. |

---

### cifs_sensitive_data_mip_labels

Stores Microsoft Information Protection (MIP) sensitivity label decisions for files that contain sensitive data findings. Each row records the label action Access Analyzer determined for a file based on its classification results. MIP labels are sourced from an Entra ID source group configured in the same Access Analyzer instance — Access Analyzer uses that source group to resolve label definitions and apply or recommend label changes.

:::note
This table uses `ReplacingMergeTree(decision_timestamp)` rather than `scanned_at`. The most recent decision per file (identified by `source_id`, `host`, `share_name`, and `path`) is kept at merge time.
:::

| Column | Type | Description |
|--------|------|-------------|
| `source_id` | `UUID` | Identifier of the Entra ID source group used to resolve MIP label definitions. |
| `host` | `String` | Hostname of the file server. |
| `share_name` | `String` | Name of the share containing the file. |
| `path` | `String` | Full path of the file this label decision applies to. |
| `mip_is_protected` | `Bool` | Whether the file is currently protected by MIP encryption. |
| `taxonomy_id` | `Nullable(UUID)` | Optional. Identifier of the taxonomy that triggered this label decision. |
| `action` | `Enum8('upgrade', 'keep', 'downgrade', 'clear', 'none')` | The label action Access Analyzer determined: `upgrade` applies a higher-sensitivity label, `downgrade` applies a lower-sensitivity label, `keep` leaves the current label unchanged, `clear` removes the label, and `none` indicates no action was taken. |
| `label_id` | `Nullable(UUID)` | Optional. UUID of the MIP sensitivity label selected by the action. |
| `label_name` | `Nullable(String)` | Optional. Display name of the MIP sensitivity label selected by the action. |
| `reason` | `Nullable(String)` | Optional. Explanation of why this label action was chosen. |
| `decision_timestamp` | `DateTime` | Timestamp when Access Analyzer made this label decision. |
| `scanned_at` | `DateTime` | Timestamp when the record was written. |
| `applied_at` | `Nullable(DateTime)` | Optional. Timestamp when the label was successfully applied to the file. Null if not yet applied. |
| `apply_error` | `String` | Error message if the label application failed. Empty string when no error occurred. |
| `apply_attempts` | `UInt8` | Number of times Access Analyzer has attempted to apply this label decision. |
| `created_at` | `DateTime` | Timestamp when this record was first created. |
| `updated_at` | `DateTime` | Timestamp when this record was last updated. |

**Relations**

| Related table | Join column | Description |
|---------------|-------------|-------------|
| `cifs_sensitive_data` | `host`, `share_name`, `path` | Resolves the sensitive data findings that triggered this label decision. |

---

## Views

Access Analyzer creates views that simplify common queries. Use views in preference to querying base tables directly.

| View | Base table | Description |
|------|------------|-------------|
| `cifs_object_latest` | `cifs_object` | Returns the most recent version of each file system object, using `FINAL` to suppress duplicates. |
| `cifs_permission_latest` | `cifs_permission` | Returns the most recent version of each NTFS ACE, using `FINAL` to suppress duplicates. |
| `cifs_share_permission_latest` | `cifs_share_permission` | Returns the most recent version of each share-level ACE, using `FINAL` to suppress duplicates. |
| `cifs_sensitive_data_latest` | `cifs_sensitive_data` | Returns one aggregated row per file path, combining all taxonomy and term matches for that path. The `taxonomy_names` and `term_names` columns return arrays of distinct values grouped from individual rows. |
| `cifs_sensitive_data_mip_labels_latest` | `cifs_sensitive_data_mip_labels` | Returns the most recent label decision per file, using `FINAL` to suppress duplicates. |
| `cifs_sensitive_data_mip_labels_summary` | `cifs_sensitive_data_mip_labels` | Returns a summary of label decisions grouped by host, share, action, label name, and protection status. Includes decision counts and the timestamp range of first and last decisions. |
| `cifs_effective_permissions` | `cifs_permission_latest`, `cifs_share_permission_latest` | Joins NTFS and share permissions with resolved principal identities (local users, local groups, Active Directory users, Active Directory groups, and well-known SIDs) to produce one row per principal per path. Use this view to query who has access to a given path by name rather than by SID. |
| `cifs_effective_access` | `cifs_effective_permissions` | Computes the final effective access mask for each principal per path by combining NTFS allow and deny ACEs with share-level permissions. Use this view to determine the actual access a named user or group has to a file or directory. |
