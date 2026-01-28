<#
.EXAMPLE DISCLAIMER

This script is provided as an EXAMPLE reference implementation only.

It is not a supported deployment or automation tool.
Netwrix Threat Prevention Support does not customize, validate, or troubleshoot
this script for customer environments.

You are responsible for reviewing, testing, and adapting this script
to meet your organization's security, certificate authority,
and change management requirements.
#>

# 1) Get credentials with local admin rights on the remote DC(s)
$cred = Get-Credential

# 2) Run the script
.\Install-NtpAgentRemote.ps1 `
    -ComputerName 'Target Host Names' `
    -LocalInstallerPath 'C:\Installers\SI Agent.exe' `
    -EnterpriseManagerHostFqdn 'Enterprise Manager FQDN' `
    -Credential $cred

# 3) Alternate Run Command to Target A Larger Environment. Create a .txt file with a list of hosts. Recommended 25-100 in batches.

	$cred = Get-Credential
    $targets = Get-Content .\targets.txt
.\Install-NtpAgentRemote.ps1 `
  -ComputerName $targets `
  -LocalInstallerPath 'C:\Installers\SI Agent.exe' `
  -EnterpriseManagerHostFqdn 'tp-em01.contoso.com' `
  -Credential $cred


