---
title: "Agents"
description: "Agents"
sidebar_position: 10
---

# Agents

To pull data on agent statues, configurations and group memberships, use the agentsRanked endpoint.

## /api/agentsRanked

This call returns a list of agent details, including group and tracking template memberships.

### POST Request

https://api/agentsRanked

```
{
    "DeviceFilter": 
  {
        "GroupNames": [],
        "AgentDeviceIds": [],
        "AgentDisplayNames": [],
        "OnlineStatuses": [],
        "ExcludeProxiedDevices": false
    },
    "GetAgentGroupDetails": true,
    "GetRelatedTemplates": true,
}
```

#### Parameters

DeviceFilter

- Specifies the agents to search for by id or group membership.
- Type – DeviceFilter

GetAgentGroupDetails

- Specifies a value indicating whether to get agent group details.
- Type – Boolean

GetRelatedTemplates

- Specifies a value indicating whether to get templates applied to the returned agents.
- Type – Boolean

#### DeviceFilter

GroupNames

- Filters by group IDs
- Type – Comma separated list of strings
- Example – ["A99", "A101", "W43"]

AgentDeviceIds

- Filters by device IDs
- Type – Comma separated list of strings
- Example – ["1,1", "1,9"]

AgentDisplayNames

- Filters by display names
- Type –: Comma separated list of strings
- Example – ["NWX-4GMJGX3", "Azure 365 Cloud Reporting Group"]

OnlineStatuses

- Filters by online device status.
- Type – Comma separated list of strings
- Example – [ "Offline"]

ExcludeProxiedDevices

- A value indicating whether to exclude proxied devices from the result set
- Type – Boolean

### Json Response Elements

- AgentGroups – A list of agent device group memberships
- GroupsLookup – A lookup list of group id/key to display name
- TemplatesLookup – A lookup list of template id/key to display name
- Agents – The list of agents matching the DeviceFilter
- AgentTemplates – A list of agent device templates
- Total – The number of agents matching the DeviceFilter

### Example PowerShell

The following PowerShell script will output the response to a CSV file with the following headers:

- DeviceName
- FQDN
- Groups
- Templates
- HostType
- AgentType
- Registered
- Os
- IPv4
- OnlineStatus

To be able to trust self-signed certificates, each call to Invoke-RestMethod is made with the
-SkipCertificateCheck argument. This requires PowerShell 7.

```
# Declare script parameters and their default values. Override these defaults from the command line e.g. -HostUrl http://myliveserver/api
param([string]$HostUrl = "https://localhost/api", [string]$AdminUser = "admin", [string]$AdminPwd = "password")
# This script is intended to read and display agent details, including group and tracking templates
Function GetAdminUserSession() {
    $uri = "$HostUrl/auth/credentials"
    $params = "username=$AdminUser&password=$AdminPwd&format=json"
    Write-Host "Acquiring User Session: $AdminUser ("$uri.replace("=$AdminPwd", "=******")")"
    $result = Invoke-RestMethod -Method Post -Uri $uri -Headers @{ Accept = 'application/json' } -SkipCertificateCheck -SessionVariable myWebSession -Body $params
    If ($null -ne $result.UserId -and $null -ne $result.SessionId) {
        Write-Host "Acquired User Session: $AdminUser ( User Id:"$result.UserId", Session Id:"$result.SessionId")"
        Return $myWebSession
    }
}
Function lookup($agentPropertyList, $agentDeviceId) {
    for ($i = 0; $i -lt $agentPropertyList.Length; $i++) {
        $element = $agentPropertyList[$i]
        if ($element.AgentDevice.AgentId -eq $agentDeviceId.AgentId -and $element.AgentDevice.DeviceId -eq $agentDeviceId.DeviceId) {
            return $element;
        }
    }
}
Function lookupGrpNames($grpLookup, $grpIds) {
    $grpNames = New-Object "System.Collections.Generic.List[string]"
    for ($i = 0; $i -lt $grpIds.Length; $i++) {
        $grpId = $grpIds[$i]
        for ($j = 0; $j -lt $grpLookup.Length; $j++) {
            $lookup = $grpLookup[$j]
            if ($lookup.Key -eq $grpId) {
                $grpNames.Add($lookup.Value)
            }
        }
    }
    return $grpNames;
}
Function lookupPCNames($agentPropertyList, $agentDeviceId) {
    $list = New-Object System.Collections.Generic.List[System.String]
    for ($i = 0; $i -lt $agentPropertyList.Length; $i++) {
        $element = $agentPropertyList[$i]
        if ($element.AgentDevice.AgentId -eq $agentDeviceId.AgentId -and $element.AgentDevice.DeviceId -eq $agentDeviceId.DeviceId) {
            $list.Add($element.Name)
        }
    }
    return $list
}
Try {
    # Set up a session variable for the Admin user which can be used on subsequent requests
    # Use the session in future calls
    $myWebSession = GetAdminUserSession
    # csv output file name
    $outfile = "agentsRanked-" + (Get-Date).ToString("yyyyMMdd-hhmmss") + ".csv"
    # device filter to be applied
    $deviceFilter =
    "{
`"DeviceFilter`": {
`"GroupNames`": [],
`"AgentDeviceIds`": [],
`"AgentDisplayNames`": [],
`"ExcludeProxiedDevices`": false,
`"OnlineStatuses`": [`"Offline`"]
},
`"GetAgentGroupDetails`": true,
`"GetRelatedTemplates`": true
}"
    $uri = "$HostUrl/agentsRanked"
    Write-Host("Reading Agents: ( $uri ) writing to ( $outfile )")
    $result = Invoke-RestMethod -Method Post -ContentType application/json -Uri $uri -SkipCertificateCheck -Headers $headers -Body $deviceFilter -WebSession $myWebSession
    $agents = @()
    foreach ($item in $result.Agents) {
        # find groups and templates from other parts of the response
        $groups = lookup $result.AgentGroups $item.AgentDevice
        $groupNames = lookupGrpNames $result.GroupsLookup $groups.MemberOf
        $groupsText = "";
        if ($null -ne $groups) {
            $groupsText = $groupNames -join ","
        }
        $templates = lookup $result.AgentTemplates $item.AgentDevice
        $templatesText = "";
        if ($null -ne $templates) {
            $templatesText = $templates.ConfigTemplates -join ","
        }
        # add custom object to array so CSV format works as expected
        $agents += [PSCustomObject]@{
            DeviceName   = $item.DeviceName
            FQDN         = $item.FullyQualifiedDomainName
            Groups       = $groupsText
            Templates    = $templatesText
            HostType     = $item.HostType
            AgentType    = $item.AgentType
            Registered   = $item.Registered
            Os           = $item.Os
            IPv4         = $item.IPv4
            OnlineStatus = $item.OnlineStatus
        }
    }
    # write out to a csv
    $agents | Export-Csv -Path $outfile -Delimiter "," -Encoding UTF8 -NoTypeInformation
    # to write out the raw json of the response
    # $jsonOutfile = "agentsRanked-" + (Get-Date).ToString("yyyyMMdd-hhmmss") + ".json"
    # $result | ConvertTo-Json -depth 100 | Out-File $jsonOutfile
}
Catch [Net.WebException] {
    $resp = $_.Exception.Response;
    If ( $resp.StatusCode -eq [Net.HttpStatusCode]::BadRequest ) {
        $result = (New-Object IO.StreamReader($resp.GetResponseStream().ReadToEnd() | ConvertFrom-Json;
        # Handle errors
        Write-Output $_.Exception
    }
    Else {
        # Handle errors
        Write-Output $_.Exception
    }
}
```
