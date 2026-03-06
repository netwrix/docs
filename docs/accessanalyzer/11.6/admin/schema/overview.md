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

