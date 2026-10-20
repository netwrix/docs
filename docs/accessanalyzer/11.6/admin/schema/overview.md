# Database Schema

This section provides comprehensive database schema documentation for the Access Analyzer 11.6 data collectors. Each data collector stores discovered configuration, permissions, and audit data in normalized tables, with denormalized reporting views for analysis and presentation.

## [SQL Data Collector Schema](sqldc/overview.md)

The SQL Data Collector discovers, audits, and reports on SQL Server instances, databases, principals, permissions, audit events, and sensitive data across the enterprise. The schema documentation covers:

- **[Core Data Collection Tables](sqldc/coretables/overview.md)** — 44 normalized tables populated directly by data collectors with full foreign key relationships
- **[Reporting Tables](sqldc/reportingtables/overview.md)** — 59 denormalized report-ready tables with human-readable column names
- **[Views](sqldc/views/overview.md)** — 17 SQL views that join and denormalize data for querying
- **[Enumeration & Lookup Values](sqldc/enumeration/overview.md)** — Reference for coded values and lookup table contents
- **[Entity Relationship Diagrams](sqldc/erd/overview.md)** — Visual ERDs showing table relationships
- **[Index Reference](sqldc/indexreference/overview.md)** — Documentation of database indexes
- **[Functions & Stored Procedures](sqldc/functions/overview.md)** — SQL scalar functions and stored procedures

## [File System Access Data Collector Schema](fsaadc/overview.md)

The File System Access Data Collector (FSAA) audits Windows and NFS file systems for permissions, ownership, content, activity, and sensitive-data classification across Windows servers, NetApp / EMC / Dell filers, and Linux/Unix hosts. The schema documentation covers:

- **[Entity Relationship Diagrams](fsaadc/erd/overview.md)** — Visual ERDs showing table relationships across all four collector modules
- **[Core Data Collection Tables](fsaadc/coretables/overview.md)** — 40 normalized tables populated directly by data collectors (FSAA, FSAC, FSDLP, and DFS modules)
- **[Views](fsaadc/views/overview.md)** — 19 SQL views that join and denormalize data for reporting and the FSAA web UI
- **[Enumeration & Lookup Values](fsaadc/enumeration/overview.md)** — Reference for TrusteeType, ResourceType, GateType, and the rights bitmask
- **[Functions & Stored Procedures](fsaadc/functions/overview.md)** — UDFs and stored procedures for path resolution, membership expansion, and effective-access computation
- **[Index Reference](fsaadc/indexreference/overview.md)** — Complete listing of database indexes
- **[Foreign Key Reference](fsaadc/fkreference/overview.md)** — Complete listing of foreign key constraints and cascade behaviors
