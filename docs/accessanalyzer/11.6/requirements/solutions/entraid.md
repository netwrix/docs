# Entra ID Solution

**NOTE:** The Entra ID solution is for scanning Microsoft Entra ID, formerly Azure Active Directory.

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for the core requirements.

See the
[Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/11.6/config/entraid/overview.md)
topic for target environment requirements.

## Entra ID Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Entra ID Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |
