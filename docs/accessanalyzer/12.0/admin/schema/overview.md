# Database Schema

This section provides comprehensive database schema documentation for the Access Analyzer 12.0 data collectors. Each data collector stores discovered configuration, permissions, and audit data in normalized tables, with denormalized reporting views for analysis and presentation.

## [SQL Data Collector Schema](sqldc/overview.md)

The SQL Data Collector discovers, audits, and reports on SQL Server instances, databases, principals, permissions, audit events, and sensitive data across the enterprise. The schema documentation covers:

- **[Core Data Collection Tables](sqldc/coretables/overview.md)** — 44 normalized tables populated directly by data collectors with full foreign key relationships
- **[Reporting Tables](sqldc/reportingtables/overview.md)** — 59 denormalized report-ready tables with human-readable column names
- **[Views](sqldc/views/overview.md)** — 17 SQL views that join and denormalize data for querying
- **[Enumeration & Lookup Values](sqldc/enumeration/overview.md)** — Reference for coded values and lookup table contents
- **[Entity Relationship Diagrams](sqldc/erd/overview.md)** — Visual ERDs showing table relationships
- **[Index Reference](sqldc/indexreference/overview.md)** — Documentation of database indexes
- **[Functions & Stored Procedures](sqldc/functions/overview.md)** — SQL scalar functions and stored procedures

## [File System Access Analyzer DC Schema](fsaadc/overview.md)

The File System Access Analyzer data collector audits Windows, NFS, and Azure Files file systems for permissions, ownership, content, activity, and sensitive-data classification across four sub-modules (SA_FSAA_, SA_FSAC_, SA_FSDLP_, SA_FSDFS_). The schema documentation covers:

- **[Table Relationship Diagrams (ERD)](fsaadc/erd/overview.md)** — Visual ERDs showing table relationships across all four collector modules
- **[Core Data Collection Tables](fsaadc/coretables/overview.md)** — 47 normalized tables populated directly by data collectors, partitioned by host with full foreign key relationships
- **[Views](fsaadc/views/overview.md)** — 20 SQL views that join and denormalize data for reporting
- **[Enumeration & Lookup Values](fsaadc/enumeration/overview.md)** — Reference for coded values including TrusteeType, ResourceType, GateType, and the six-bit rights bitmask
- **[Functions & Stored Procedures](fsaadc/functions/overview.md)** — 29 UDFs and stored procedures covering path resolution, effective-access computation, group membership expansion, and DFS path lookup
- **[Index Reference](fsaadc/indexreference/overview.md)** — Complete listing of database indexes across all FSAA DC tables
- **[Foreign Key Reference](fsaadc/fkreference/overview.md)** — Complete listing of foreign key constraints and cascade behaviors
