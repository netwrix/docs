---
title: "Authentication"
description: "Authentication"
sidebar_position: 10
---

# Authentication

The following PowerShell script is an example of how to authenticate to the ChangeTracker API.
It prompts the user for the URL and credentials. It also asks wether to skip certificate validation or not and then creates a new session.
Trusted certificates are recommended for all environments, but if you are using self-signed certificates in a lab environment, you have the option to skip certificate validation.

The variable ```$NctSession``` is used to store the session information and can be used to make subsequent API calls.


```powershell
$url = Read-Host "Enter URL (https://192.168.1.1/api)"

# Do not use this in production environments where trusted certificates are required
$SkipCertificateCheck = Read-Host "Skip Certificate Check (y/n)"
if ($SkipCertificateCheck -eq "y") {
    $SkipCertificateCheck = $true
}
else {
    $SkipCertificateCheck = $false
}

# Collect credentials
$username = Read-Host "Enter Username"
$password = Read-Host "Enter Password" -AsSecureString
$ApiCredential = New-Object System.Management.Automation.PSCredential ($username, $password)
Remove-Variable -Name password

# Build request
$body = @{
    "UserName" = $ApiCredential.UserName
    "Password" = $ApiCredential.GetNetworkCredential().Password
    "RememberMe" = "false"
} | ConvertTo-Json

# Create new session
$uri = "$($url)/auth/credentials"

$NctSession = New-Object Microsoft.PowerShell.Commands.WebRequestSession

try {
    Invoke-RestMethod `
    -Method Post `
    -ContentType application/json `
    -Uri $uri `
    -Headers @{ Accept = 'application/json' } `
    -Body $body `
    -WebSession $NctSession `
    -SkipCertificateCheck:$SkipCertificateCheck
}
catch {
    Write-Error "Failed to create session: $_"
    throw
}
finally {
    Remove-Variable -Name body
}
```
