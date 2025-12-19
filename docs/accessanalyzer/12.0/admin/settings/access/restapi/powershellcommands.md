---
title: "PowerShell Commands for the REST API"
description: "PowerShell Commands for the REST API"
sidebar_position: 50
---

# PowerShell Commands for the REST API

The following examples show PowerShell commands commonly performed with the REST API.

## Retrieve an Access Token

The following example shows how to retrieve an access token.

```
$body = @{
  client_id="[Insert Client ID Here]"
  client_secret="[Insert Client Secret Here]"
  grant_type="client_credentials"
} 
$response = Invoke-WebRequest -Method POST -uri http://localhost:8082/api/v1/token -Body $body -ContentType "application/json"
$content = $response.Content | ConvertFrom-Json  
$access_token = $content.access_token;
$refresh_token = $content.refresh_token;
```

:::info
Tokens contain sensitive information and should be stored securely. See the
Microsoft
[ConvertTo-SecureString](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/convertto-securestring?view=powershell-7.4)
article for additional information.
:::


## Retrieve Data from a Table or View

The following example shows how to retrieve data from a table or view.

```
$headers = @{  
Authorization="Bearer $access_token"
}
$response = Invoke-WebRequest -Method GET -uri http://localhost:8082/api/v1/data/SA_ADInventory_ComputersView/rows -Headers $headers
$content = $response.Content | ConvertFrom-Json
```
