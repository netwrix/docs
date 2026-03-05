# Scalar Functions & Stored Procedures

## SA_SQL_GetFriendlyName (Scalar Function)

**Description:** Constructs a human-readable SQL Server instance name from its component parts (host, instance, port). Returns the format `HOST\INSTANCE,PORT`, omitting the instance and port segments when they are NULL or empty/zero.

**Signature:** `SA_SQL_GetFriendlyName(@Host NVARCHAR(128), @Instance NVARCHAR(128), @PortNo INT) RETURNS NVARCHAR(512)`

**Examples:**
- `('SERVER1', 'SQL2019', 1433)` → `SERVER1\SQL2019,1433`
- `('SERVER1', NULL, 0)` → `SERVER1`
- `('SERVER1', 'INST1', 0)` → `SERVER1\INST1`

---

## SA_SQLServer_BinarySIDToString (Scalar Function)

**Description:** Converts a binary SID (`VARBINARY(100)`) to its string representation (`VARCHAR(100)`) in the standard `S-1-...` format.

**Signature:** `SA_SQLServer_BinarySIDToString(@BinSID VARBINARY(100)) RETURNS VARCHAR(100)`

**Example:** `0x010500000000000904000000FB01993B...` → `S-1-9-4-999883259-1304688998-...`

---

## SA_SQLServer_GetAuditFileComparisonString (Scalar Function)

**Description:** Transforms an audit file name into a LIKE-compatible comparison pattern by inserting `%` wildcards before the file extension and at the start. Used for matching audit file paths across rollover files.

**Signature:** `SA_SQLServer_GetAuditFileComparisonString(@filename VARCHAR(260)) RETURNS VARCHAR(260)`

---

## SA_SQLServer_CreateOrUpdateSDDResource (Stored Procedure)

**Description:** Upserts a Sensitive Data Discovery resource record. Looks up an existing resource by its composite key (`type`, `instance_id`, `database_id`, `object_id`, `column_id`). If no match is found, inserts a new row and returns the new `id`. If a match exists, updates the `last_scanned` reference and returns the existing `id`. Handles NULL-safe comparison for optional columns (`database_id`, `object_id`, `column_id`).

**Signature:**
```sql
SA_SQLServer_CreateOrUpdateSDDResource(
    @Resource_Type INT,
    @Instance_Id  INT,
    @Database_Id  INT,
    @Object_Id    INT,
    @Column_Id    INT,
    @ScanId       INT
)
```

**Returns:** The `SA_SQLServer_SDD_Resources.id` of the inserted or updated resource (via `SELECT` / `OUTPUT INSERTED.[id]`).
