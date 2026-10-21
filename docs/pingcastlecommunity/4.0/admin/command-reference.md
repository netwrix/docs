---
sidebar_position: 7
sidebar_label: Command reference
description: Look up PingCastle command line operations, options, workflows, and exit codes.
---
# Command Reference

## Core Operations

| Operation | Command | Description |
|-----------|---------|-------------|
| **Healthcheck** | `PingCastle.exe --healthcheck --server <domain>` | Perform security assessment of a single domain |
| **All Domains** | `PingCastle.exe --healthcheck --server *` | Scan all reachable domains in the forest |
| **Consolidation** | `PingCastle.exe --hc-conso` | Consolidate multiple XML reports into summary reports |
| **Cartography** | `PingCastle.exe --carto` | Quick trust mapping without full healthcheck scores |
| **Scanner** | `PingCastle.exe --scanner <type> --server <domain>` | Run specific scanner (see [Scanners](scanners.md) section) |
| **Graph Analysis** | `PingCastle.exe --graph --server <domain>` | Compute compromise graph for a domain |
| **Regenerate Report** | `PingCastle.exe --regen-report <xml>` | Regenerate HTML report from XML file |
| **Reload Report** | `PingCastle.exe --reload-report <xml>` | Regenerate XML report from existing XML (useful for decryption) |
| **Export Rules** | `PingCastle.exe --rules` | Generate HTML documentation of all PingCastle rules |
| **Generate Keys** | `PingCastle.exe --generate-key` | Generate new RSA key pair for report encryption |
| **Upload Reports** | `PingCastle.exe --upload-all-reports --api-endpoint <url> --api-key <key>` | Upload all reports in current directory to API |

## Common Workflows

### Single Domain Healthcheck
```powershell
PingCastle.exe --healthcheck --server domain.local
```

### Full Forest Assessment with Consolidation
```powershell
PingCastle.exe --healthcheck --server * --reachable --hc-conso
```
This scans all reachable domains and automatically generates consolidated reports.

### Encrypted Reports with Email Delivery
```powershell
PingCastle.exe --healthcheck --server domain.local --encrypt --sendAllTo security@company.com
```

### Privileged Mode with Full Details
```powershell
PingCastle.exe --healthcheck --server domain.local --privileged --level Full --datefile
```
The `--privileged` flag enables checks requiring elevated AD permissions. The `--datefile` option adds the date to the filename.

### Trust Exploration
```powershell
# Explore all trusted domains
PingCastle.exe --healthcheck --server domain.local --explore-trust

# Explore forest trusts from root domain
PingCastle.exe --healthcheck --server forest.root --explore-forest-trust

# Combine both with exceptions
PingCastle.exe --healthcheck --server domain.local --explore-trust --explore-forest-trust --explore-exception bastion.local,dmz.local
```

### Automated Enterprise Scanning
```powershell
PingCastle.exe --healthcheck --server domain.local --api-endpoint https://enterprise.local --api-key <your-key> --encrypt --level Full
```
Use this with PingCastle Enterprise to send encrypted reports to the centralized web UI.

### Consolidation with Date Filtering
```powershell
PingCastle.exe --hc-conso --filter-date 2024-01-01 --center-on primary.local --xmls C:\Reports
```

## Common Connection Options

| Option | Description |
|--------|-------------|
| `--server <server>` | Target DC/domain/forest (`dc01.domain.local`, `domain.local`, `*`, `*.domain.local`) |
| `--port <port>` | Port for ADWS or LDAP (default: 9389 or 389) |
| `--user <user>` | Username (default: integrated authentication) |
| `--password <pass>` | Password (default: secure prompt) |
| `--protocol <proto>` | Protocol selection: `ADWSThenLDAP` (default), `ADWSOnly`, `LDAPOnly`, `LDAPThenADWS` |
| `--pagesize <size>` | LDAP page size (default: 500) |
| `--quota <num>` | LDAP items per second to process (default: unlimited) |

## Report Options

| Option | Description |
|--------|-------------|
| `--level <level>` | XML detail level: `Full`, `Normal` (default), `Light` |
| `--datefile` | Add date to report filename |
| `--encrypt` | Encrypt XML report using RSA key from `appsettings.console.json` |
| `--no-enum-limit` | Remove max 100 users limitation in HTML report |
| `--privileged` | Enable checks requiring elevated AD permissions |
| `--no-csp-header` | Disable Content Security Policy header (enables styles/js on web servers) |

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success - operation completed successfully |
| 1 | InvalidLicenseDomainPattern - license contains invalid domain limitation pattern |
| 2 | DomainNotAllowed - specified domain not allowed by license restrictions |
| 3 | MissingApiEndpointArgument - `--api-endpoint` requires a URL argument |
| 4 | InvalidApiEndpointArgument - `--api-endpoint` URL isn't valid |
| 5 | MissingApiKeyArgument - `--api-key` requires a key argument |
| 6 | InvalidLicense - license validation failed or expired |
| 7 | InvalidCommandLineArguments - command line parsing failed |
| 8 | UnknownErrorSeeConsole - an error occurred, check console output or logs if logging enabled |

## Getting Help

For complete command-line documentation:
```powershell
PingCastle.exe --help
```
