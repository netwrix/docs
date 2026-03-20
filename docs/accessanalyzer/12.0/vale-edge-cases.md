---
title: "Vale Edge Case Tests"
description: "Test page for table and backslash edge cases"
sidebar_position: 998
---

# Vale Edge Case Tests

## Test 1: Markdown Tables with Violations

Verify that fixes inside table cells do not corrupt the pipe characters.

| Feature | Description | Status |
|---------|-------------|--------|
| Setup wizard | Make sure to setup the drop-down configuration | Active |
| Export tool | The system provides the ability to export data | Active |
| Login page | Users are able to login to the portal | Active |
| Checkbox | Select the check box in order to enable the feature | Active |
| Utility | Utilize the built-in tool to configure | Active |
| Permissions | You do not need to click on the button to proceed | Active |

### Nested table after a heading

| Setting | Default | Notes |
|---------|---------|-------|
| Timeout | 30s | Make sure the timeout does not exceed the maximum |
| Retry | 3 | The system is able to retry, currently set to 3 attempts |
| Auth | Windows | Please configure the drop-down to select authentication |

## Test 2: Lines with Windows Paths and Backslashes

Make sure the file is located at C:\Users\Admin\config.ini before proceeding.

You do not need to modify the registry key at HKLM\Software\Netwrix\Settings.

In order to setup the agent, navigate to C:\Program Files\Netwrix\Agent\setup.exe.

Please utilize the configuration file at D:\Data\Exports\config.json to configure the connection.

The aforementioned path C:\Windows\System32\drivers\etc\hosts is currently used by the system.

## Test 3: Both Together (Table with Paths)

| Component | Path | Action |
|-----------|------|--------|
| Agent | C:\Program Files\Netwrix\Agent | Make sure to setup the agent |
| Config | D:\Data\config.ini | Utilize the drop-down to configure |
| Logs | C:\Users\Admin\AppData\Logs | You do not need to click on the log path |

## Code Block (Should Not Be Modified)

```powershell
# These should NOT be touched
$path = "C:\Users\Admin\setup.exe"
Make-Sure -Parameter "drop-down"
Please-Run -Command "setup" -InOrderTo "configure"
```

The text after the code block should still be fixed: please make sure to setup the drop-down.
