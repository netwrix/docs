# NPSD Management: expand_params.ps1

# support for just a single JSON parameter to avoid having to reconfigure parameters in the package if they change
$argString = [System.Uri]::UnescapeDataString($args[0])
$commandInfo = $argString | ConvertFrom-Json
$scriptPath = $commandInfo.script_path
$paramInfo = $commandInfo.params

# convert to hashtable
$params = @{ }
foreach ($property in $paramInfo.PSObject.Properties) {
    $params[$property.Name] = $property.Value
}

Write-Output "Running: powershell.exe -NonInteractive -NoProfile -ExecutionPolicy Bypass $scriptPath ..."
$out = & powershell.exe -NonInteractive -NoProfile -ExecutionPolicy Bypass $scriptPath @params

Write-Output "NPSD_OUTPUT_START"
Write-Output $out
Write-Output "NPSD_OUTPUT_END"

exit $LASTEXITCODE
