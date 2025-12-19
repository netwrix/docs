---
title: "I'm having trouble running the Licensing Tool (LT) and counting computers with Intune. What troubleshooting information can I send Endpoint Policy Manager support?"
description: "I'm having trouble running the Licensing Tool (LT) and counting computers with Intune. What troubleshooting information can I send Endpoint Policy Manager support?"
sidebar_position: 60
---

# I'm having trouble running the Licensing Tool (LT) and counting computers with Intune. What troubleshooting information can I send Endpoint Policy Manager support?

Please run the following commands in an elevated powershell and supply the resulting screenshots or
Output.txt file.

```
function Get-MgGraphAllPages {
    [CmdletBinding(
        ConfirmImpact = 'Medium',
        DefaultParameterSetName = 'SearchResult'
    )]
    param (
        [Parameter(Mandatory = $true, ParameterSetName = 'NextLink', ValueFromPipelineByPropertyName = $true)]
        [ValidateNotNullOrEmpty()]
        [Alias('@odata.nextLink')]
        [string]$NextLink
        ,
        [Parameter(Mandatory = $true, ParameterSetName = 'SearchResult', ValueFromPipeline = $true)]
        [ValidateNotNull()]
        [PSObject]$SearchResult
        ,
        [Parameter(Mandatory = $false)]
        [switch]$ToPSCustomObject
    ) 
    begin {} 
    process {
        if ($PSCmdlet.ParameterSetName -eq 'SearchResult') {
            # Set the current page to the search result provided
            $page = $SearchResult 
            # Extract the NextLink
            $currentNextLink = $page.'@odata.nextLink' 
            # We know this is a wrapper object if it has an "@odata.context" property
            #if (Get-Member -InputObject $page -Name '@odata.context' -Membertype Properties) {
            # MgGraph update - MgGraph returns hashtables, and almost always includes .context
            # instead, let's check for nextlinks specifically as a hashtable key
            if ($page.ContainsKey('@odata.count')) {
                Write-Verbose "First page value count: $($Page.'@odata.count')"    
            } 
            if ($page.ContainsKey('@odata.nextLink') -or $page.ContainsKey('value')) {
                $values = $page.value
            } else { # this will probably never fire anymore, but maybe.
                $values = $page
            } 
            # Output the values
            # Default returned objects are hashtables, so this makes for easy pscustomobject conversion on demand
            if ($values) {
                if ($ToPSCustomObject) {
                    $values | ForEach-Object {[pscustomobject]$_}  
                } else {
                    $values | Write-Output
                }
            }
        } 
        while (-Not ([string]::IsNullOrWhiteSpace($currentNextLink)
        {
            # Make the call to get the next page
            try {
                $page = Invoke-MgGraphRequest -Uri $currentNextLink -Method GET
            } catch {
                throw $_
            } 
            # Extract the NextLink
            $currentNextLink = $page.'@odata.nextLink' 
            # Output the items in the page
            $values = $page.value 
            if ($page.ContainsKey('@odata.count')) {
                Write-Verbose "Current page value count: $($Page.'@odata.count')"    
            } 
            # Default returned objects are hashtables, so this makes for easy pscustomobject conversion on demand
            if ($ToPSCustomObject) {
                $values | ForEach-Object {[pscustomobject]$_}  
            } else {
                $values | Write-Output
            }
        }
    } 
    end {}
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Install-PackageProvider -Name NuGet -Scope CurrentUser -Force
Install-Module -Name Microsoft.Graph.Authentication -Repository PSGallery -Scope CurrentUser -Force
Install-Module -Name Microsoft.Graph.Identity.DirectoryManagement -Repository PSGallery -Scope CurrentUser -Force
Install-Module -Name Microsoft.Graph.DeviceManagement -Repository PSGallery -Scope CurrentUser -Force
Connect-MgGraph -Scopes "DeviceManagementManagedDevices.Read.All", "Organization.Read.All" -NoWelcome
Get-MgOrganization | Select @{N = 'CompanyName'; E = { $_.displayName } }
[array]$devices = Get-MgDeviceManagementManagedDevice | Get-MgGraphAllPages | Where-Object -Property "operatingSystem" -EQ -Value "Windows" | ForEach { [pscustomobject] @{ DeviceName= $_.deviceName; UPN = $_.userPrincipalName; UPNDomain = $_.userPrincipalName.Split("@")[1]}}
[array]$upns = $devices | Where-Object -Property 'UPNDomain' -NE -Value $null | Select-Object -Property 'UPNDomain' -Unique
# Output to both screen and file
$outputFile = "OUTPUT.TXT"
# Function to output to both
function Out-Both {
    param (
        [Parameter(Mandatory=$true)]
        [string]$message
    )
    $message | Tee-Object -FilePath $outputFile -Append
}
# Clear the output file if it exists
if (Test-Path $outputFile) {
    Remove-Item $outputFile
}
# Write the results
$upns | Format-Table | Out-Both
$devices | Format-Table -Property 'DeviceName' | Out-Both
Out-Both ""
Out-Both "Total"
Out-Both "-----"
Out-Both @($devices).Count
Disconnect-MgGraph | Out-Null
```

See the [MDM Intune company name troubleshooting](/docs/endpointpolicymanager/licensing/videolearningcenter/troubleshooting/mdm.md) video for additional
information.

