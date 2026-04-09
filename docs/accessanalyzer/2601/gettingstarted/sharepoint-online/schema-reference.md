---
title: "SharePoint Online Schema Reference"
sidebar_position: 40
---

# SharePoint Online Schema Reference

Access Analyzer stores SharePoint Online scan data in the `access_analyzer` ClickHouse database. The tables below are created when you set up a SharePoint Online source group and run a scan. Use this reference when querying scan data directly or integrating Access Analyzer data with external tools.

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

### sharepoint_online_objects

Stores one row per scanned SharePoint item — sites, lists, document libraries, and list items (files and folders).

| Column | Type | Description |
|--------|------|-------------|
| `site_hostname` | `String` | Hostname of the SharePoint site collection (for example, `contoso.sharepoint.com`). |
| `site_id` | `String` | SharePoint identifier of the site collection. |
| `item_id` | `String` | Unique identifier of the item within the site. |
| `site_url` | `String` | Absolute URL of the site collection. |
| `drive_id` | `String` | Microsoft Graph drive identifier for the document library that contains this item. Empty for sites and lists that do not have a drive. |
| `drive_item_id` | `String` | Microsoft Graph drive item identifier. Empty for items that are not drive items. |
| `item_type` | `Enum8` | Type of SharePoint item. Values: `SITE`, `LIST`, `LIBRARY`, `LIST_ITEM`. |
| `name` | `String` | Display name of the item. |
| `file_extension` | `String` | File extension, including the leading period (for example, `.docx`). Empty for non-file items. |
| `relative_url` | `String` | Server-relative URL path of the item. |
| `file_size` | `Nullable(Int64)` | Optional. File size in bytes. Null for items that are not files. |
| `created_time` | `DateTime` | Timestamp when the item was created in SharePoint. |
| `created_by_id` | `String` | SharePoint user identifier of the user who created the item. |
| `created_by_email` | `String` | Email address of the user who created the item. |
| `modified_time` | `DateTime` | Timestamp of the most recent modification. |
| `modified_by_id` | `String` | SharePoint user identifier of the user who last modified the item. |
| `modified_by_email` | `String` | Email address of the user who last modified the item. |
| `parent_item_id` | `String` | `item_id` of the parent item. Empty for top-level sites. |
| `scan_status` | `String` | Result of scanning this item. Typical values: `SUCCESS`, `ERROR`. |
| `error_message` | `String` | Error detail when `scan_status` is `ERROR`. Empty on success. |
| `is_complete` | `Boolean` | Indicates whether the scan wrote all expected records for this item. Used internally to support scan resume. |

**Primary key:** `(site_hostname, site_id, item_id)`

**Relations**

| Related table | Join columns | Description |
|---|---|---|
| `sharepoint_online_permissions` | `site_hostname`, `site_id`, `item_id` | All permissions assigned to this item. |
| `sharepoint_online_shared_links` | `site_hostname`, `site_id`, `item_id` | All sharing links created for this item. |
| `sharepoint_online_sensitive_data` | `drive_id`, `drive_item_id` | Classification results for this item. Only populated for drive items. |

---

### sharepoint_online_permissions

Stores one row per permission assignment. Each row represents a single principal (user or group) having a specific permission on a specific item.

| Column | Type | Description |
|--------|------|-------------|
| `site_hostname` | `String` | Hostname of the site collection that contains the item. |
| `site_id` | `String` | SharePoint identifier of the site collection. |
| `item_id` | `String` | Identifier of the item this permission applies to. |
| `permission_id` | `String` | SharePoint identifier of the permission entry. |
| `share_id` | `String` | Identifier of the sharing link that granted this permission. Empty for direct permissions. |
| `principal_id` | `String` | Identifier of the user or group that holds the permission. |
| `principal_type` | `Enum8` | Type of the principal. Values: `USER`, `GROUP`, `SITE_USER`, `SITE_GROUP`. |
| `principal_name` | `String` | Display name of the principal. |
| `principal_email` | `String` | Email address of the principal. Empty for groups that do not have an email address. |
| `permission_type` | `Enum8` | How the permission was granted. Values: `DIRECT` (assigned directly to the item), `SHARED` (granted through a sharing link). |
| `permission_levels` | `Array(Enum8)` | Named permission levels assigned to the principal. Values: `OWNER`, `READ`, `WRITE`. |
| `effective_base_permissions` | `Array(Enum8)` | Full set of granular SharePoint base permissions the principal holds. Values include `VIEW_LIST_ITEMS`, `ADD_LIST_ITEMS`, `EDIT_LIST_ITEMS`, `DELETE_LIST_ITEMS`, `MANAGE_LISTS`, `MANAGE_PERMISSIONS`, `MANAGE_WEB`, and others as defined by the SharePoint permission model. |
| `normalized_permissions` | `FixedString(5)` | Compact bitmask representation of the permission levels. Used internally for permission comparison. |
| `parent_site_id` | `String` | Identifier of the site collection from which this permission is inherited. Empty for permissions that are not inherited. |
| `parent_item_id` | `String` | `item_id` of the item from which this permission is inherited. Empty for permissions assigned directly to this item. |
| `is_site_admin` | `Bool` | `true` if the principal is a site collection administrator. |
| `is_external_user` | `Bool` | `true` if the principal is a guest or external user. |
| `mip_label_id` | `Nullable(String)` | Optional. Microsoft GUID of the Microsoft Information Protection sensitivity label applied to the SharePoint item at the time of the scan. |
| `mip_label_name` | `Nullable(String)` | Optional. Display name of the sensitivity label identified by `mip_label_id`. |

**Primary key:** `(site_hostname, site_id, item_id, permission_id, principal_id)`

**Relations**

| Related table | Join columns | Description |
|---|---|---|
| `sharepoint_online_objects` | `site_hostname`, `site_id`, `item_id` | The item this permission applies to. |
| `sharepoint_online_shared_links` | `site_hostname`, `site_id`, `item_id`, `share_id` | The sharing link that granted this permission, when `permission_type` is `SHARED`. |

---

### sharepoint_online_shared_links

Stores one row per sharing link. A sharing link may grant access to one or more principals; the corresponding permission rows appear in `sharepoint_online_permissions`.

| Column | Type | Description |
|--------|------|-------------|
| `site_hostname` | `String` | Hostname of the site collection that contains the item. |
| `site_id` | `String` | SharePoint identifier of the site collection. |
| `item_id` | `String` | Identifier of the item this link points to. |
| `permission_id` | `String` | SharePoint permission identifier associated with this link. |
| `share_id` | `String` | Unique identifier of the sharing link. |
| `link_type` | `Enum8` | Access level granted by the link. Values: `VIEW`, `EDIT`, `EMBED`, `REVIEW`. |
| `link_url` | `String` | Full URL of the sharing link. |
| `link_scope` | `Enum8` | Audience the link is accessible to. Values: `ANONYMOUS` (anyone with the link), `ORGANIZATION` (anyone in the organization), `USERS` (specific users only). |
| `expires_on` | `DateTime` | Expiration timestamp of the link. A zero value indicates the link does not expire. |
| `is_password_protected` | `Bool` | `true` if the link requires a password to access. |
| `prevent_download` | `Bool` | `true` if the link prevents recipients from downloading the file. |

**Primary key:** `(site_hostname, site_id, item_id, permission_id, share_id)`

**Relations**

| Related table | Join columns | Description |
|---|---|---|
| `sharepoint_online_objects` | `site_hostname`, `site_id`, `item_id` | The item this link provides access to. |
| `sharepoint_online_permissions` | `site_hostname`, `site_id`, `item_id`, `share_id` | Permissions granted through this link. |

---

### sharepoint_online_sensitive_data

Stores classification results from the sensitive data scan option. Each row represents one taxonomy term matched in a drive item. Multiple rows may exist for the same item when the item matches terms from multiple taxonomies.

| Column | Type | Description |
|--------|------|-------------|
| `drive_id` | `String` | Microsoft Graph drive identifier of the document library that contains the item. |
| `drive_item_id` | `String` | Microsoft Graph drive item identifier of the classified file. |
| `taxonomy_name` | `String` | Name of the classification taxonomy (for example, `PII`, `Financial Records`). |
| `term_name` | `String` | Name of the specific classification term within the taxonomy (for example, `Credit Card Number`, `Social Security Number`). |
| `processing_time_seconds` | `Float32` | Time in seconds that the classification engine spent processing this item. |
| `classification_method` | `Nullable(Enum8)` | Optional. Method used to classify this item. Values: `SDK_AUTO` (automatic classification by the built-in engine), `SDK_CUSTOM` (classification using custom rules). |

**Primary key:** `(drive_id, drive_item_id, taxonomy_name, term_name)`

**Relations**

| Related table | Join columns | Description |
|---|---|---|
| `sharepoint_online_objects` | `drive_id`, `drive_item_id` | The scanned item that produced these classification results. |

---

## Views

Access Analyzer creates views that simplify common queries. Use views in preference to querying base tables directly.

| View | Base table | Description |
|------|------------|-------------|
| `sharepoint_online_objects_latest` | `sharepoint_online_objects` | Returns only the most recent version of each object record, deduplicated by `(site_hostname, site_id, item_id)`. |
| `sharepoint_online_permissions_latest` | `sharepoint_online_permissions` | Returns only the most recent version of each permission record, deduplicated by `(site_hostname, site_id, item_id, permission_id, principal_id)`. |
| `sharepoint_online_shared_links_latest` | `sharepoint_online_shared_links` | Returns only the most recent version of each sharing link record, deduplicated by `(site_hostname, site_id, item_id, permission_id, share_id)`. |
| `sharepoint_online_sensitive_data_latest` | `sharepoint_online_sensitive_data` | Returns one aggregated row per drive item, with `taxonomy_names` and `term_names` as arrays collecting all matched taxonomy and term names. Deduplicated by `(drive_id, drive_item_id)`. |
