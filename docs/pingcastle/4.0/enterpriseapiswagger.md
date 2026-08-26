---
sidebar_label: Swagger API
---
# Using the Swagger API for PingCastle Enterprise

PingCastle Enterprise exposes a Swagger UI for calling its REST API directly. Use it to explore available endpoints, authenticate, and test calls before automating them from a script.

## Prerequisites

### Enable anonymous authentication in IIS

The Swagger UI loads without requiring a logged-in user, but IIS must allow anonymous access to the site (or at least to the `/swagger` path) for the page to render.

If anonymous authentication is disabled, IIS shows a Windows credential popup before the page loads. This isn't the API's own login prompt — it's IIS requesting a Windows identity.

To enable anonymous authentication:

1. Open **IIS Manager** on the server hosting PingCastle Enterprise.
2. In the left pane, expand **Sites** and select the PingCastle Enterprise site.

   ![IIS Manager with PingCastleEnterprise site selected and Authentication icon visible](kb/0-images/iis-manager-site-selection.png)

3. Double-click **Authentication** in the center pane.

   ![Authentication settings showing Anonymous Authentication disabled and Windows Authentication enabled](kb/0-images/iis-authentication-settings.png)

4. Right-click **Anonymous Authentication** and select **Enable**.

   ![Context menu for enabling Anonymous Authentication in IIS](kb/0-images/iis-anonymous-authentication-enable.png)

:::tip
Changes to IIS authentication settings take effect immediately. You don't need to restart IIS.
:::

### Gather your base URL and API key

You need:

- The base URL of your PingCastle Enterprise server, for example `https://pingcastle.contoso.com`.
- An Agent API key. Create or copy one from **Configuration** > **Agents**.

   :::tip
   For full access to Swagger endpoints, set the agent's authorization level to **Perform Admin Actions**, **Read & Write all Enterprise data**, or **Read all Enterprise data**, depending on which calls you need to make.
   :::

   ![Configuration menu with Agents option highlighted](kb/0-images/pingcastle-configuration-agents-menu.png)

   ![Agents page showing API keys, authorization types, and owner](kb/0-images/pingcastle-api-keys-table.png)

## Open Swagger

1. In a browser, go to `https://<your-server>/swagger`.
2. If IIS anonymous authentication is disabled, a Windows credential popup appears first. Enter valid domain credentials, or fix the IIS setting so the popup doesn't appear for every visitor.
3. The Swagger UI loads and lists all API controllers (for example, `Agent`, `Domains`, `Users`) as collapsible sections.

## Authenticate in Swagger

The API uses a two-step authentication flow: log in with an Agent API key to get a JSON Web Token (JWT) bearer token, then apply that token so Swagger sends it on every subsequent call.

### Call Login

1. On the Swagger page, scroll to the **Agent** section and expand **`POST /api/Agent/Login`**.
2. Click **Try it out**.
3. In the request body editor, replace the template values:

   ```json
   {
     "apikey": "string",
     "location": "string"
   }
   ```

4. Set `apikey` to your Agent API key.
5. Set `location` to any identifying label for where the call originates, such as your hostname.
6. Click **Execute**.
7. In the **Response body**, copy the value after the word `Bearer` (without the surrounding quotes):

   ```
   Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Apply the token

1. Scroll to the top of the Swagger page and click the green **Authorize** button (padlock icon).
2. In the dialog, paste the token into the **Value** field under the `Bearer` security scheme.

   :::note
   The field expects the token without the `Bearer ` prefix. If pasting the full `Bearer <token>` string returns a 401 error, remove the leading `Bearer ` and retry with just the token.
   :::

3. Click **Authorize**, then **Close**.

All subsequent **Try it out** calls in Swagger now include this token in the `Authorization` header automatically.

### Token expiry

The token is valid for one hour. After that, calls return `401 Unauthorized`. Repeat the login and authorization steps to get a fresh token.

## Troubleshoot 401 errors and credential popups

Two different authentication failures can occur, and each points to a different cause:

- A **Windows credential popup before the page loads** means IIS anonymous authentication is disabled. See [Enable anonymous authentication in IIS](#enable-anonymous-authentication-in-iis).
- An **HTTP 401 response from an API call inside Swagger** means the bearer token is missing, expired, or the API key lacks the required authorization level. Confirm the padlock icon shows as authorized, re-run **Login** for a fresh token, and check the agent's status and authorization level on the **Agents** screen.

For a full walkthrough of the 401/IIS root cause, see [Scheduler or Agent Deployment Returns 401 Unauthorized Error](kb/scheduler-or-agent-deployment-returns-401-unauthorized-error.md).

## Use browser dev tools to inspect requests

Browser developer tools show the raw request and response when Swagger's own display doesn't provide enough detail.

1. Press **F12** (or right-click and select **Inspect**) to open developer tools.
2. Click the **Network** tab, and tick **Preserve log** if the request needs to survive a page navigation.
3. Perform the action in Swagger, such as clicking **Execute** on an endpoint.
4. Find the corresponding request in the list — it's named after the API path, for example `Login`.
5. Click the request row and check:
   - **Headers** — confirm the `Authorization` header is present and starts with `Bearer ` for authenticated calls.
   - **Payload** or **Request** — confirm the JSON body sent matches what you entered.
   - **Response** — read the raw response body, which often contains a more specific error message than the Swagger UI renders, such as `"Agent not found"` or `"Location not provided"`.
   - **Status** — note the HTTP status code: `400` (bad request or invalid input), `401` (authentication problem), `403` (not authorized), or `500` (server error).
6. Check the **Console** tab for JavaScript errors if the Swagger page itself behaves unexpectedly, such as the **Authorize** dialog not opening.

## Call the API from PowerShell

The following helper functions wrap the same login flow and let you call any API endpoint without using the browser.

### Core functions

```powershell
Function Invoke-PcApi {
    [CmdletBinding()]
    param (
        [parameter(Mandatory = $true, Position = 0)]
        [System.String]$Uri,
        [parameter(Mandatory = $false)]
        [hashtable]$Headers = @{},
        [parameter(Mandatory = $false)]
        [System.String]$Method = "Get",
        [parameter(Mandatory = $false)]
        [System.String]$ContentType,
        [parameter(Mandatory = $false)]
        [System.String]$Body,
        [parameter(Mandatory = $false)]
        [hashtable]$AdditionalParameters = @{}
    )

    $RequestParameters = @{
        "Uri"     = $Global:PingCastle_URL + "/" + $Uri.TrimStart("/");
        "Headers" = @{"Authorization" = "$($Global:PingCastle_JWT)" } + $Headers;
        "Method"  = $Method
    }

    if ($ContentType) {
        $RequestParameters["ContentType"] = $ContentType
    }

    if ($Body) {
        $RequestParameters["Body"] = $Body
    }

    if ($AdditionalParameters) {
        $RestrictedParams = @("Uri", "Headers", "Method", "ContentType", "Body")
        foreach ($Parameter in $RestrictedParams) {
            if ($AdditionalParameters.ContainsKey($Parameter)) {
                Throw "AdditionalParameters cannot contain the parameter $($Parameter), use -$($Parameter) instead."
            }
        }
    }

    Write-Verbose $RequestParameters.URI
    Try {
        return Invoke-RestMethod @RequestParameters @AdditionalParameters -ErrorAction Stop
    }
    catch {
        throw $($_.Exception.Message)
    }
}

function Connect-PCServer {
    param (
        [Parameter(Mandatory = $False)]
        [ValidateNotNull()]
        [string]$Server = "localhost",
        [Parameter(Mandatory = $True)]
        [string]$ApiKey = "",
        [switch]$UseHTTP,
        [string]$Location = "$($ENV:COMPUTERNAME)",
        [string]$Port
    )

    # Construct the URL
    if ($UseHTTP) {
        $Protocol = "http"
    }
    else {
        $Protocol = "https"
    }

    $Base_URL = "$Protocol`://$Server"

    if ($Port) {
        $Base_URL = "$BASE_URL`:$Port"
    }

    $Login_URL = "$BASE_URL/api/Agent/Login"

    # Build Login Body
    $Obj = New-Object -TypeName PSObject
    $Obj | Add-Member -MemberType NoteProperty -Name "apikey" -Value $ApiKey
    $Obj | Add-Member -MemberType NoteProperty -Name "location" -Value $Location

    $Body_Json = $Obj | ConvertTo-Json

    # Send the POST request
    $response = Invoke-WebRequest -UseBasicParsing -Uri $Login_URL `
        -Method "POST" `
        -ContentType "application/json-patch+json" `
        -Body $Body_Json

    # Output new variables for base url and JWT
    $Global:PingCastle_URL = $Base_URL
    $GLobal:PingCastle_JWT = $response.Content

    # Extract and return the JWT token
    return $response.Content
}
```

### Example: connect and list domains

```powershell
Function Get-PCDomain {
    [CmdletBinding(DefaultParameterSetName = "All")]
    param (
        [Parameter(ParameterSetName = "Single")]
        [String]
        $id,
        [switch]$Raw,
        # Domain Name
        [Parameter(Mandatory = $True, ParameterSetName = "SingleName")]
        [string]
        $Name
    )
    # Create empty params
    $Params = @{}

    If ($PSCmdlet.ParameterSetName -eq "All" -or $PSCmdlet.ParameterSetName -eq "SingleName") {
        $Params.Add("Uri", "/api/domains")
    }
    else {
        $Params.Add("Uri", "/api/domains/$id")
    }

    $Response = Invoke-PcApi @Params

    # Filter the output as no API for single name only ID.
    If ($PSCmdlet.ParameterSetName -eq "SingleName") {
        $Response = $Response | Where-Object { $_.name -eq $Name }
    }

    If ($Raw) {
        $Response
    }
    else {
        $Response | Select-Object Id, Name
    }
}
```

Usage:

```powershell
# Connect - needs your Agent API key from the Agents screen
Connect-PCServer -Server "pingcastle.contoso.com" -ApiKey "your-agent-api-key-here"

# List all domains
Get-PCDomain

# Get a single domain by name
Get-PCDomain -Name "contoso.com"

# Call any other endpoint directly
Invoke-PcApi -Uri "/api/domains" -Method Get
```

### Troubleshoot PowerShell calls

- A **401** response from `Invoke-WebRequest` or `Invoke-RestMethod` means the same things as [Troubleshoot 401 errors and credential popups](#troubleshoot-401-errors-and-credential-popups): confirm the API key is enabled and the token (`$Global:PingCastle_JWT`) hasn't expired (one-hour lifetime). Call `Connect-PCServer` again to refresh it.
- If the server uses a self-signed or otherwise untrusted certificate, `Invoke-WebRequest` and `Invoke-RestMethod` fail with a certificate trust error. Resolve this by trusting the certificate — don't disable certificate validation.
- Use `-Verbose` on `Invoke-PcApi` to print the exact URL being called.

## Related links

- [Scheduler or Agent Deployment Returns 401 Unauthorized Error](kb/scheduler-or-agent-deployment-returns-401-unauthorized-error.md)
- [Agent Deployment for PingCastle Enterprise](enterpriseagentdeployment.md)
