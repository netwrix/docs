---
title: "PowerShell Script Examples"
description: "PowerShell script examples for Scripts and Triggers Manager"
sidebar_position: 10
---

# PowerShell Script Examples

This guide provides practical PowerShell script examples for use with Scripts and Triggers Manager.

## Mapped Drive Configuration

This PowerShell script demonstrates how to configure mapped network drives through Scripts and Triggers Manager:

```powershell
# Map network drives with error handling
try {
    # Remove existing drive mapping if present
    if (Test-Path "Z:") {
        Remove-PSDrive -Name "Z" -Force -ErrorAction SilentlyContinue
    }
    
    # Create new drive mapping
    New-PSDrive -Name "Z" -PSProvider FileSystem -Root "\\server\share" -Persist
    
    # Verify mapping was successful
    if (Test-Path "Z:") {
        Write-Output "Drive Z: successfully mapped to \\server\share"
    } else {
        Write-Error "Failed to map drive Z:"
    }
}
catch {
    Write-Error "Error mapping drive: $($_.Exception.Message)"
}
```

## User Profile Management

Script for managing user profile settings:

```powershell
# Configure user environment variables
[Environment]::SetEnvironmentVariable("CUSTOM_APP_PATH", "C:\Program Files\CustomApp", "User")

# Create user directory structure
$userDirs = @(
    "$env:USERPROFILE\Documents\Projects",
    "$env:USERPROFILE\Documents\Templates"
)

foreach ($dir in $userDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force
        Write-Output "Created directory: $dir"
    }
}
```

## Registry Configuration

PowerShell script for registry modifications:

```powershell
# Configure registry settings with error handling
$regPath = "HKCU:\Software\Company\Application"

try {
    # Create registry key if it doesn't exist
    if (-not (Test-Path $regPath)) {
        New-Item -Path $regPath -Force | Out-Null
    }
    
    # Set registry values
    Set-ItemProperty -Path $regPath -Name "EnableFeature" -Value 1
    Set-ItemProperty -Path $regPath -Name "ConfigPath" -Value "C:\Config"
    
    Write-Output "Registry configuration completed successfully"
}
catch {
    Write-Error "Registry configuration failed: $($_.Exception.Message)"
}
```

## Best Practices

1. **Error Handling**: Always include proper error handling in PowerShell scripts
2. **Logging**: Use Write-Output and Write-Error for proper logging
3. **Path Testing**: Test paths before operations to avoid errors
4. **Force Parameters**: Use -Force carefully to avoid unintended overwrites
5. **Execution Policy**: Ensure proper execution policy is set for script deployment

## Troubleshooting

Common PowerShell script issues and solutions:

- **Execution Policy Errors**: Verify PowerShell execution policy allows script execution
- **Permission Issues**: Ensure scripts run with appropriate privileges
- **Path Not Found**: Use Test-Path to verify paths before operations
- **Network Connectivity**: Test network connectivity before mapping drives
- **Registry Access**: Verify user has appropriate registry access rights