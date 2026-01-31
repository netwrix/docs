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

# 1.) Targets a list of hostnames from a text file for large scale deployment

.\example-invoke-ntp-agent-custom-managed-cert.ps1 -ComputerListPath .\agents.txt -CAConfig "Domain Controller\CA Name" -TemplateName "CertificateTemplate" -Credential (Get-Credential)

# 2.) Alternative method that runs the script and target individual hostnames.

.\example-invoke-ntp-agent-custom-managed-cert.ps1 `
  -ComputerName "hostname","hostname" `
  -CAConfig "CA-SERVER\CA-NAME" `
  -TemplateName "CertificateTemplate" `
  -Credential (Get-Credential) `
  -Verbose

