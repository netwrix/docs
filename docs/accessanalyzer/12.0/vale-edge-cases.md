---
title: "Vale Edge Case Tests"
description: "Test page for table and backslash edge cases"
sidebar_position: 998
---

# Vale Edge Case Tests

## Test 1 Markdown Tables with Violations

Verify that fixes inside table cells don't corrupt the pipe characters.

| Feature | Description | Status |
|---------|-------------|--------|
| Setup wizard | ensure to set up the dropdown configuration | Active |
| Export tool | The system lets you export data, e.g. CSV files | Active |
| Login page | Users can log in to the portal | Active |
| Checkbox | Select the checkbox to enable the feature | Active |
| Utility | use the built-in tool to configure etc. | Active |
| Permissions | You don't need to click the button to proceed | Active |

### Nested table after a heading

| Setting | Default | Notes |
|---------|---------|-------|
| Timeout | 30s | ensure the timeout doesn't exceed the maximum, i.e. 60 seconds |
| Retry | 3 | The system can retry, set to 3 attempts |
| Auth | Windows | configure the dropdown to select authentication |

## Test 2 Lines with Windows Paths and Backslashes

ensure the file is located at C:\Users\Admin\config.ini before proceeding.

You don't need to modify the registry key at HKLM\Software\Netwrix\Settings.

to set up the agent, navigate to C:\Program Files\Netwrix\Agent\setup.exe.

use the configuration file at D:\Data\Exports\config.json to configure the connection.

The path C:\Windows\System32\drivers\etc\hosts is used by the system.

## Test 3 Both Together with Table and Paths

| Component | Path | Action |
|-----------|------|--------|
| Agent | C:\Program Files\Netwrix\Agent | ensure to set up the agent |
| Config | D:\Data\config.ini | use the dropdown to configure |
| Logs | C:\Users\Admin\AppData\Logs | You don't need to click the log path |

## Code Block

```powershell
# These should NOT be touched
$path = "C:\Users\Admin\setup.exe"
Make-Sure -Parameter "drop-down"
Please-Run -Command "setup" -InOrderTo "configure"
```

The text after the code block should still be fixed: ensure to set up the dropdown.
