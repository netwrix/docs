---
title: "Tanium"
description: "Tanium"
sidebar_position: 40
---

# Tanium

## Overview & Architecture

### Integration Overview

The Tanium integration enables privileged access management and security scanning of Windows devices
through Tanium's remote execution capabilities. This agentless solution manages local Windows
accounts and gathers security compliance data without requiring direct network connectivity to target
devices.

### Architecture Diagram

```
┌─────────────────┐         API Calls           ┌──────────────────┐
│                 │ ───────────────────────────▶│                  │
│     NPS-D       │                             │  Tanium Cloud    │
│    Platform     │◀─────────────────────────── │    Platform      │
│                 │         Results             │                  │
└─────────────────┘                             └──────────────────┘
        │                                                │
        │                                                │
        ▼                                                ▼
┌─────────────────┐                             ┌──────────────────┐
│   MongoDB       │                             │  Tanium Agents   │
│   Database      │                             │  (on endpoints)  │
└─────────────────┘                             └──────────────────┘
```

### Supported Use Cases

| Use Case | Description | Mode |
|---|---|---|
| Privileged Account Discovery | Enumerate local administrator accounts on Windows systems | Scan/Protect |
| Account Lifecycle Management | Create, modify, and delete local Windows accounts | Protect |
| Password Rotation | Automated password changes with RSA encryption | Protect |
| Security Compliance Scanning | Gather system configuration and security posture data | Scan |
| Access Control | Enable/disable local accounts based on policy | Protect |
| Group Membership Management | Add/remove users from local Windows groups | Protect |
| Bulk Scanning | Scan entire computer groups in single operations | Scan |

### Integration Flow

#### Standard (single device) flow

1. Query Tanium to find target device and obtain temporary group ID
2. Create action with PowerShell script and encrypted parameters
3. Monitor action status until completion
4. Retrieve and parse action logs
5. Process results and update NPS-D database

#### Bulk scan flow

1. Query Tanium for computer group members
2. Create single action targeting entire group
3. Monitor bulk action completion
4. Parse consolidated results
5. Update all device records in batch

---

## Prerequisites & Requirements

### NPS-D platform requirements

- NPS-D 2.22.12, 26.03, or later
- Linux OS (Ubuntu 20.04/22.04 recommended)
- Python 3.9+
- MongoDB 4.4+
- Network access to Tanium Cloud API endpoints

### Tanium requirements

- Tanium Cloud platform with API v2 access
- Administrator permissions for configuration
- Content Set permissions (Base or custom)
- Ability to create sensors and packages
- Tanium agents deployed on target Windows devices

### Target device requirements

- Windows Server 2012 R2 or later
- Windows 10 or later
- PowerShell 5.1 or later
- `Microsoft.PowerShell.LocalAccounts` module
- Tanium agent installed and communicating

### Required libraries & dependencies

| Library | Version | Purpose |
|---|---|---|
| requests | 2.28+ | HTTP client for REST API calls |
| pydantic | 1.10+ | Data validation and serialization |
| Cryptodome | 3.15+ | RSA encryption for sensitive data |
| lxml | 4.9+ | XML parsing for Tanium responses |

---

## Part A: Tanium Cloud Setup

:::warning
The following configuration must be performed by a Tanium administrator. Each step must be
completed exactly as specified for the integration to function correctly.
:::

### Create the NPS Admin Members sensor

**Step 1 –** Log into the Tanium Cloud Console, go to **Administration** → **Content** →
**Sensors**, and click **Create New Sensor**.

**Step 2 –** Configure the sensor properties:

| Property | Value | Notes |
|---|---|---|
| **Name** | `NPS Admin Members` | Must match exactly (case-sensitive) |
| Description | NPS-D Administrator Discovery Sensor | Can be customized |
| Content Set | Base (or custom set) | Choose appropriate content set |
| Category | Security | Recommended for organization |
| **Result Type** | Text | Required setting |
| **Max Sensor Age** | 10 minutes | Minimum recommended by Tanium |
| Max String Age | Disabled or 86400 | Very large value |
| Max Strings | Disabled or 10000 | Very large value |
| Ignore case in results | Disabled | Required setting |
| Hide sensor | Disabled | Must be visible |
| Split into columns | Disabled | Required setting |

**Step 3 –** Configure the Windows script:

- Script Type: `PowerShell`
- Script Contents: copy the entire contents from `secureone_management.ps1` (see
  [PowerShell Scripts & Packages](#powershell-scripts-packages))

**Step 4 –** For other operating systems, set to `Disabled` or return an error message (for
example, `Not available on Linux`).

**Step 5 –** Click **Preview** on some Windows computers, verify that JSON results appear for most
computers, then click **Save Sensor**.

### Enable the sensor for background collection

**Step 1 –** Go to **Modules** → **Interact** → **Overview** → **Settings**.

**Step 2 –** Find **NPS Admin Members** in the sensor list, click **Actions** → **Add**, preview to
verify JSON results, and click **Confirm**. Optionally click **Collect Now** to force immediate
collection.

### Create the NPSD Management package

:::note
This package is only required if you plan to use Protect mode (JITA) or Deny functionality. For
scan-only operations, skip this section.
:::

**Step 1 –** Go to **Administration** → **Content** → **Packages** and click **Create New
Package**.

**Step 2 –** Configure the package properties:

| Property | Value | Notes |
|---|---|---|
| **Package Name** | `NPSD Management` | Must match exactly |
| Display Name | NPS-D Management Package | Can be customized |
| Content Set | Base (or custom) | Same as sensor |
| **Command** | `cmd.exe /d /c powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -NonInteractive -NoProfile -File expand_params.ps1 $0` | Critical configuration |
| Command Timeout | 3 minutes | Adjust as needed |
| Download Timeout | 10 minutes | Adjust as needed |
| Ignore Action Lock | Disabled | Default setting |
| Launch in process group | Enabled | Required |

**Step 3 –** Add the required files to the package:

- `expand_params.ps1` (see [PowerShell Scripts & Packages](#powershell-scripts-packages))
- `secureone_management.ps1` (see [PowerShell Scripts & Packages](#powershell-scripts-packages))

**Step 4 –** Add a single text parameter with the label `EncodedCommand` and verify the parameter
shows as `$0`. If it shows as `$1`, adjust the command and set `package_param_offset` to `1` in the
NPS-D options.

**Step 5 –** Review all settings and click **Save Package**.

### Configure computer groups

**For standard scanning** — use the existing **All Windows Computers** group, or create custom
groups based on your requirements.

**For bulk scanning** — identify or create a computer group containing all Windows devices to scan
and note the exact group name for later configuration. Recommended names: `All Windows Computers`
or a custom group such as `NPS-D Managed Devices`.

### Create API tokens

**Step 1 –** Go to **Administration** → **Permissions** → **API Tokens** and click **New API
Token**.

**Step 2 –** Configure the token:

- **Name:** `NPS-D Integration Token`
- **Permissions:** Full API access (or minimum required)
- **Expiration:** Set according to your security policy

**Step 3 –** Copy and securely save the API token immediately — it will not be shown again.

---

## Part B: NPS-D Base Integration Setup

### Enable the Tanium Cloud feature

Connect to MongoDB and run:

```bash
mongo

use npsd

db.release_toggles.updateOne(
  {"name": "tanium_cloud"},
  {$set: {"enabled": true}},
  {upsert: false}
)
```

### Configure the EDR provider

**Step 1 –** In the NPS-D UI, go to **Configure** → **Server** → **EDR Provider Configuration**
and click **Add New**.

**Step 2 –** Configure the provider settings:

| Field | Value | Notes |
|---|---|---|
| Provider | Tanium Cloud | Select from dropdown |
| Name | Production Tanium | Descriptive name |
| Enable | Enabled | Check to enable |
| Proxy | (as needed) | Configure if required |
| API Base URL | `https://your-instance.cloud.tanium.com` | From Tanium account |
| API Key | (token from Tanium) | From the API token created above |

**Step 3 –** Click **Test Connection**, verify the connection is successful, then click **Save**.

### Configure advanced options

:::warning
These options must match your Tanium configuration exactly. UI support is planned for a future
release.
:::

Run the following in MongoDB:

```javascript
db.integrations_edr_config.updateOne(
  {"provider": "tanium_cloud"},
  {$set: {
    "config.integration.options": {
      // Required — must match Tanium configuration
      "sensor_name": "NPS Admin Members",
      "sensor_max_age_seconds": 600,
      "package_name": "NPSD Management",
      "package_param_offset": 0,

      // Recommended optimizations
      "action_group_name": "Default - All Computers",
      "action_timeout_seconds": 1200,
      "action_check_interval_seconds": 1,

      // Bulk scan settings (if using)
      "bulk_scan_enabled": false,  // Set to true for bulk scan
      "bulk_scan_group": "All Windows Computers",
      "bulk_scan_batch_size": 100,
      "bulk_scan_timeout_seconds": 3600
    }
  }}
)
```

### Configure computers

In the NPS-D UI or via the API, configure each computer with the following settings:

| Setting | Value | Purpose |
|---|---|---|
| Scan | Enabled | For background scanning |
| Protect | Disabled / Enabled | Disabled uses cache; Enabled for real-time |
| Offline Access | Unmanaged | Not supported with Tanium |
| EDR Integration | Production Tanium | Select the configured provider |

---

## Part C: Bulk Scan Configuration

### Bulk scan overview

Bulk scanning allows NPS-D to scan all Windows devices in a Tanium computer group with a single API
action, dramatically improving performance for large environments.

```
Standard Scan (Sequential):
Device 1 ──▶ Scan ──▶ Result ──┐
                                │
Device 2 ──▶ Scan ──▶ Result ──┼──▶ Total Time: N × scan_time
                                │
Device N ──▶ Scan ──▶ Result ──┘

Bulk Scan (Parallel):
┌─────────────┐
│ All Devices │──▶ Single Bulk Action ──▶ All Results ──▶ Total Time: ~scan_time
└─────────────┘
```

### Key benefits

- **Performance:** 100+ devices scanned in the time it takes to scan one
- **Efficiency:** Single API call instead of hundreds
- **Consistency:** All devices scanned at the same moment
- **Scalability:** Handles thousands of devices efficiently

### Device inventory mismatch

:::warning
Device count mismatch between Tanium and NPS-D can impact bulk scan efficiency.
:::

A common scenario occurs when your Tanium environment contains more Windows devices than are loaded
in NPS-D.

**Example scenario:**

- Tanium "All Windows Computers" group: **10,000 devices**
- NPS-D loaded devices: **9,500 devices**
- Result: bulk scan will scan all 10,000 devices but only process results for 9,500

**Impact:**

- Functional impact: none — the scan works correctly
- Performance impact: unnecessary scanning of 500 devices not in NPS-D
- Resource impact: additional Tanium resources used for unneeded scans

**Recommended solutions:**

**Option 1: Create a custom Tanium group (recommended)**

1. In Tanium, create a new computer group: `NPS-D Managed Windows Devices`
2. Include only devices that are loaded in NPS-D
3. Update the bulk scan configuration to use this custom group — this ensures 100% efficiency with
   no wasted scans

**Option 2: Use the default group (acceptable when the performance impact is minimal)**

1. Continue using the `All Windows Computers` group
2. Accept that extra devices will be scanned but not processed
3. Suitable when the difference is small (less than 5% extra devices)
4. Monitor performance impact and adjust if needed

To check for a mismatch, compare device counts:

```bash
# In Tanium Console
Get Computer Name from all machines with Operating System containing "Windows"
# Note the total count
```

```javascript
// In NPS-D MongoDB
db.computers.count({"os": /windows/i, "edr_integration": "tanium_cloud"})
```

### Enable bulk scan

**Step 1 –** Run the following in MongoDB to enable bulk scanning:

```javascript
db.integrations_edr_config.updateOne(
  {"provider": "tanium_cloud"},
  {$set: {
    "config.integration.options.bulk_scan_enabled": true,
    "config.integration.options.bulk_scan_group": "NPS-D Managed Windows Devices",
    "config.integration.options.bulk_scan_batch_size": 100,
    "config.integration.options.bulk_scan_timeout_seconds": 3600,
    "config.integration.options.bulk_scan_retry_attempts": 2
  }}
)
```

**Step 2 –** Bulk scans run automatically as part of the regular `svc_scan` cycle:

- Executes before individual device scans
- Successfully scanned devices are removed from the individual scan queue
- Devices that fail fall back to individual scanning

### Monitor bulk scans

**Via the UI dashboard** — go to **Management** → **Bulk Scan Monitor** to view scan progress,
success rate, and failures.

**Via logs:**

```bash
# Monitor bulk scan activity
tail -f /var/log/npsd/svc_scan.log | grep "bulk_scan"

# Check for errors
grep "bulk_scan.*error" /var/log/npsd/svc_scan.log
```

**Key metrics to monitor:**

| Metric | Expected Value | Action if Abnormal |
|---|---|---|
| Success Rate | > 95% | Check Tanium agent health |
| Scan Duration | < 30 minutes | Adjust batch size or timeout |
| API Errors | < 1% | Check API token and network |
| Fallback Count | < 5% | Investigate device issues |

---

## PowerShell Scripts & Packages {#powershell-scripts-packages}

### secureone_management.ps1

:::note
This script is located at:
`/docker/shared/python/src/remediant/integrations/powershell/secureone_management.ps1`
:::

This is the main PowerShell script that performs all management operations on Windows endpoints. Key
functions include:

- Local user enumeration and management
- Group membership operations
- Password encryption/decryption
- Admin discovery for bulk scans

**Key script parameters:**

```powershell
# Core parameters
-Target        # Target type (LocalGroup, LocalUser, General)
-Action        # Action to perform (MemberList, SetPassword, etc.)
-SimpleResult  # Skip Base64 encoding
-NoMeta        # Exclude metadata

# Group operations
-GroupSID      # Target group SID (default: S-1-5-32-544 for Administrators)
-GroupNameB64  # Base64 encoded group name
-MemberSID     # Member SIDs for operations

# User operations
-PropertyKey          # User property to modify
-PropertyValuesB64    # Base64 encoded property values
-EncryptedPassword    # RSA encrypted password
```

### expand_params.ps1

:::note
This script is located at:
`/docker/shared/python/src/remediant/integrations/tanium/data/expand_params.ps1`
:::

This wrapper script decodes the Base64-encoded parameters passed from Tanium and executes the main
management script:

```powershell
param([string]$EncodedCommand)

$decodedBytes = [System.Convert]::FromBase64String($EncodedCommand)
$decodedCommand = [System.Text.Encoding]::UTF8.GetString($decodedBytes)

Invoke-Expression $decodedCommand
```

### Deploy scripts to Tanium

**For the sensor:**

1. Copy the entire contents of `secureone_management.ps1`
2. Paste into the sensor script field
3. Ensure PowerShell is selected as the script type

**For the package:**

1. Upload both `expand_params.ps1` and `secureone_management.ps1` as package files
2. Ensure the command line references the correct file names

---

## Validation & Testing

### Tanium configuration validation

**Sensor test:**

```
1. Go to Interact
2. Ask Question: "Get NPS Admin Members from all machines"
3. Verify JSON results appear for Windows machines
```

**Package test (if using Protect mode):**

```
1. Go to Actions → Deploy Action
2. Select "NPSD Management" package
3. Target a test machine
4. Provide test parameter: "Get-Date"
5. Verify action completes successfully
```

**API token test:**

```bash
curl -H "session: token-YOUR_API_TOKEN" \
  https://your-instance.cloud.tanium.com/api/v2/sensors \
  | python -m json.tool
```

### NPS-D integration validation

**Connection test:**

1. In NPS-D UI: **Configure** → **Server** → **EDR Provider Configuration**
2. Select your Tanium configuration
3. Click **Test Connection**
4. Verify the "Connection Successful" message

**Single device scan test:**

```bash
# Via API
curl -X POST https://npsd-server/api/v2/computers/{id}/scan \
  -H "Authorization: Bearer YOUR_TOKEN"

# Check results
curl https://npsd-server/api/v2/computers/{id} \
  -H "Authorization: Bearer YOUR_TOKEN" | jq .lastScan
```

**Bulk scan test:**

```bash
# Trigger bulk scan
curl -X POST https://npsd-server/api/v2/bulk-scan/trigger \
  -H "Authorization: Bearer YOUR_TOKEN"

# Monitor progress
curl https://npsd-server/api/v2/bulk-scan/status \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### End-to-end validation checklist

| Component | Check | Expected Result |
|---|---|---|
| Tanium Sensor | Query "NPS Admin Members" | JSON results for Windows devices |
| Tanium Package | Deploy test action | Action completes successfully |
| API Token | API call test | 200 OK response |
| NPS-D Connection | Test connection button | Connection successful |
| Single Scan | Scan one device | Admins discovered |
| Bulk Scan | Scan computer group | Multiple devices updated |
| Protect Mode | Grant access test | User added successfully |
| Password Rotation | Rotate password | Password changed |

---

## Troubleshooting

### Common issues and solutions

**"Sensor not found" error**

- **Cause:** Sensor name doesn't match exactly
- **Solution:** Verify the sensor is named exactly `NPS Admin Members` (case-sensitive)
- **Check:**

```javascript
db.integrations_edr_config.find(
  {"provider": "tanium_cloud"},
  {"config.integration.options.sensor_name": 1}
)
```

**Bulk scan completes but no devices are updated**

- **Cause:** Computer group name mismatch or empty group
- **Solution:** Verify the group name in Tanium matches the configuration and that the group
  contains Windows devices

**API timeout errors**

- **Cause:** Network issues or large result sets
- **Solution:** Increase `action_timeout_seconds` and `bulk_scan_timeout_seconds` in the advanced
  options configuration

**Package parameter error ($0 vs $1)**

- **Cause:** Tanium UI inconsistency in parameter numbering
- **Solution:** Check the actual parameter number in the package and adjust `package_param_offset`
  accordingly

### Log locations

| Component | Log Location | Key Information |
|---|---|---|
| Scan Service | `/var/log/npsd/svc_scan.log` | Scan attempts, results, errors |
| Bulk Scan | `/var/log/npsd/bulk_scan.log` | Bulk operation details |
| API Calls | `/var/log/npsd/tanium_api.log` | API requests and responses |
| MongoDB | `/var/log/mongodb/mongod.log` | Database operations |

### Debug commands

```bash
# Check feature toggle status
mongo npsd --eval 'db.release_toggles.findOne({"name": "tanium_cloud"})'

# View EDR configuration
mongo npsd --eval 'db.integrations_edr_config.findOne({"provider": "tanium_cloud"})'

# Test Tanium API directly
python3 -c "
import requests
headers = {'session': 'token-YOUR_TOKEN'}
r = requests.get('https://your-instance.cloud.tanium.com/api/v2/sensors', headers=headers)
print(r.status_code, r.text[:200])
"

# Force immediate scan
docker exec npsd-scanner python -m remediant.scanner.manual_scan --computer-id COMPUTER_ID

# Check last scan results
mongo npsd --eval 'db.computers.findOne({"_id": "COMPUTER_ID"}, {"lastScan": 1})'
```

### Performance tuning

| Parameter | Default | Recommended Range | Impact |
|---|---|---|---|
| sensor_max_age_seconds | 600 | 300–1800 | Freshness vs. API load |
| action_timeout_seconds | 1200 | 600–3600 | Reliability vs. speed |
| bulk_scan_batch_size | 100 | 50–500 | Memory vs. efficiency |
| action_check_interval_seconds | 1 | 1–5 | Responsiveness vs. API calls |

---

## API Reference & Technical Details

### REST API endpoints

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/v2/questions` | POST | Device discovery and queries |
| `/api/v2/actions` | POST | Create management actions |
| `/api/v2/actions/{id}` | GET | Monitor action status |
| `/api/v2/packages` | GET/POST | Package management |
| `/api/v2/sensors` | GET/POST | Sensor configuration |
| `/api/v2/result_data/*` | GET | Retrieve action results |
| `/api/v2/groups` | GET | Computer group information |

### Key Python files

| File Path | Purpose |
|---|---|
| `/remediant/windows/connector/strategies/tanium/strategy.py` | Main strategy implementation |
| `/remediant/windows/connector/strategies/tanium/session.py` | API session management |
| `/remediant/integrations/tanium/api/api_calls.py` | REST API client |
| `/remediant/integrations/tanium/bulk_scan.py` | Bulk scan implementation |

### Database collections

| Collection | Key Documents | Purpose |
|---|---|---|
| release_toggles | `{"name": "tanium_cloud"}` | Feature enablement |
| integrations_edr_config | `{"provider": "tanium_cloud"}` | Integration configuration |
| computers | All managed devices | Device records and scan results |
| bulk_scan_history | Bulk scan records | Historical scan data |

### Security considerations

- API tokens are encrypted at rest using AES-256
- Passwords use session-specific RSA key pairs (2048-bit)
- All API communications use TLS 1.2+
- Temporary files are automatically cleaned up
- No sensitive data is logged in plain text
- HTTP proxy with authentication is supported
