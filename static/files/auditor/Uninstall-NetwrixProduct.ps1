<#	
	.NOTES
	===========================================================================
	 Created with: 	SAPIEN Technologies, Inc., PowerShell Studio 2021 v5.8.187
	 Created on:   	24/05/2022 16:48
	 Created by:   	Joe Dibley
	 Organization: 	Netwrix
	 Filename:     	Uninstall-NetwrixProduct
	===========================================================================
	.DESCRIPTION
		Uninstaller functions to remove software from multiple machines
#>

<#
.DESCRIPTION
	A generic uninstaller function to uninstall software below certain versions across multiple windows machines.	
		
.PARAMETER ComputerNames
	Type: String Array
	ParameterSetName: ComputerNames
	A string array of computernames which you would like to uninstall software from

.PARAMETER LDAPQuery
	Type: String
	ParameterSetName: LDAP (Default)
	Default Value: "(&(ObjectClass=computer)(OperatingSystem=*Windows Server*))"
	A LDAP query to query Active Directory for the computers to uninstall. This defaults to all Windows Servers.

.PARAMETER CIDR
	A CIDR string in the format of a.b.c.d/#. EG: 10.0.0.0/24

	Type: String
	ParamterSetName: CIDR
	
.PARAMETER ProductName
	The name of the product to uninstall. This can be discovered using the Get-Package cmdlet.

	Type: String
	Mandatory: True
	

.PARAMETER VersionsBefore
	Indicates the uninstall process to only remove versions before the specified version
	If not indicated all versions will be removed.

	Type: String
	Mandatory: False

.PARAMETER Quiet
	Do not show the progress completion banner

	Type: Switch
	Mandatory: False

.PARAMETER NoDNSResolution
	Do not attempt to resolve IP Addresses to DNS Names

	Type: Switch
	Mandatory: False

.PARAMETER DetectOnly
	Do not uninstall, only detect the installation

	Type: Switch
	Mandatory: False

.PARAMETER ProviderName
	The provider to use for Get-Package. This can be helpful on systems with no internet access to stop them erroring.
	When no provider is specified Get-Package will look at all package providers.

	Type: String Array
	Mandatory: False
	Valid Options: "msi", "msu", "NuGet", "PowerShellGet", "Programs", "Bootstrap"
	
#>
Function Uninstall-GenericProduct
{
	[CmdletBinding(DefaultParameterSetName = 'LDAP', SupportsShouldProcess = $true)]
	param
	(
		[parameter(Mandatory = $True, ParameterSetName = "ComputerNames")]
		[String[]]$ComputerNames,
		[Parameter(Mandatory = $False, ParameterSetName = "LDAP")]
		[String]$LDAPQuery = "(&(ObjectClass=computer)(OperatingSystem=*Windows Server*))",
		[Parameter(Mandatory = $true, ParameterSetName = "CIDR", HelpMessage = 'Please enter a subnet in the form a.b.c.d/#')]
		[string]$CIDR,
		[Parameter(Mandatory = $true)]
		[String]$ProductName,
		[Parameter(Mandatory = $false)]
		[System.Version]$VersionsBefore = "0.0",
		[Parameter(Mandatory = $false)]
		[switch]$Quiet,
		[Parameter(Mandatory = $false)]
		[switch]$NoDNSResolution,
		[Parameter(Mandatory = $false)]
		[switch]$DetectOnly,
		[Parameter(Mandatory = $false)]
		[ValidateNotNull()]
		[ValidateSet("msi", "msu", "NuGet", "PowerShellGet", "Programs", "Bootstrap", IgnoreCase = $true)]
		[string[]]$ProviderName
	)
	
	BEGIN 
	{
		# Build Computer Lists based off parameters
		if ($PSCmdlet.ParameterSetName -eq "LDAP")
		{
			Write-Verbose -Message "Enumerating computers from Active Directory with query: $LDAPQuery"
			
			#Building Native LDAP query with AdsiSearcher
			$LDAP = [adsisearcher]$LDAPQuery
			$LDAP.PropertiesToLoad.Add("Name") | Out-Null
			$ComputerNames = $LDAP.FindAll().properties.name
			
			Write-Verbose -Message "Enumerated $($ComputerNames.Count) Computers from Active Directory"
		}
		elseif ($PSCmdlet.ParameterSetName -eq "CIDR")
		{
			if (Get-Command -Name Get-IpRange -CommandType Function -ErrorAction SilentlyContinue)
			{
				$ComputerNames = Get-IpRange -Subnets $CIDR
				Write-Verbose -Message "$($ComputerNames.count) IP Addresses returned from CIDR range"
			}
			else
			{
				throw "CIDR range used but the Get-IPRange function has not been imported."
			}
		}
		else
		{
			if ($ComputerNames.count)
			{
				Write-Verbose -Message "$($ComputerNames.Count) computers specified"
			}
			else
			{
				Write-Verbose -Message "1 computer specified"
			}
		}
		
		If (-Not $NoDNSResolution -and ($PSCmdlet.ParameterSetName -ne "LDAP"))
		{
			$ComputerNames = $ComputerNames | ForEach-Object {
				$IPAddress = $_
				if ($IPAddress -match '^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$')
				{
					Try
					{
						$DNSName = Resolve-DnsName $IPAddress -ErrorAction Stop -Verbose:$false | Select-Object -ExpandProperty NameHost
						Write-Verbose -Message "$IPAddress resolved to $DNSName"
						$DNSName
					}
					catch
					{
						Write-Verbose -Message "$IPAddress not resolved, IPAddress will be tried. Error: $($_.Exception.Message)"
						$IPAddress
					}
				}
				else
				{
					# Not an IP Address - Just keep it the same
					Write-Verbose -Message "$IPAddress is not in an IPv4 format, it will be treated as a computer name"
					$IPAddress
				}
			}
		}
	}
	PROCESS
	{
		# Loop Through Each ComputerName to find computers which have it installed and remove it
		$ComputerCounter = 0
		foreach ($ComputerName in $ComputerNames)
		{
			if (-Not $Quiet)
			{
				Write-Progress -Activity "Uninstalling $ProductName from $($ComputerNames.Count) computers" -PercentComplete ($ComputerCounter*100/$ComputerNames.count) -Status "$ComputerName`: Testing Connection"
			}
			
			Try
			{
				if (Test-Connection -Count 1 -Quiet -ComputerName $ComputerName)
				{
					if (-Not $Quiet)
					{
						Write-Progress -Activity "Uninstalling $ProductName from $($ComputerNames.Count) computers" -PercentComplete ($ComputerCounter * 100/$ComputerNames.count) -Status "$ComputerName`: Running Uninstallation Process"
					}
					
					Invoke-Command -ErrorAction Stop -ComputerName $ComputerName -ArgumentList $ProductName, $VersionsBefore, $providerName, $DetectOnly -ScriptBlock {
						[System.String] $ProductName = $args[0]
						[System.Version]$VersionsBefore = $args[1]
						[System.String]$providerName = $args[2]
						[boolean]$DetectOnly = $args[3]
						
						# Define the registry path for the install path
						$InstallPathRegKey = "HKLM:\SOFTWARE\Wow6432Node\Netwrix\User Activity Video Reporter Agent"
						$InstallPathRegValue = "InstallPath"

						# Define the ProgramData path
						$ProgramDataPath = Join-Path $ENV:ProgramData "Netwrix Auditor\User Activity Core Service"

						# Function to remove a directory and handle errors
						function Remove-DirectoryWithHandling {
							param(
								[string]$Path
							)
							try {
								if (Test-Path -Path $Path) {
									Remove-Item -Path $Path -Recurse -Force -ErrorAction Stop
									Write-Verbose "Removed directory: $Path"
									$Global:RemovedArtifacts += "$Path;"
								} else {
									Write-Verbose "Directory not found: $Path"
								}
							}
							catch {
								Write-Warning "Error removing directory $Path`: $($_.Exception.Message)"
							}
						}

						# Check that Get-Package Exists
						$PackageCommandExists = Get-Command -Name Get-Package -Module PackageManagement -ErrorAction SilentlyContinue
						if ($PackageCommandExists)
						{
							
							# Build Get-Package Parameters
							$Params = @{
								Name	    = $ProductName
								AllVersions = $True
								ErrorAction = "SilentlyContinue"
							}
							
							if ($providerName)
							{
								$Params.Add("ProviderName", $providerName)
							}
							
							$Package = Get-Package @Params
							
							if ($VersionsBefore -ne [System.Version] "0.0")
							{
								$Package = $Package | Where-Object { [System.Version]$_.Version -lt $VersionsBefore }
							}
							
							if ($Package -and -not $DetectOnly)
							{
								Write-Verbose -Message "$ENV:COMPUTERNAME`: $ProductName detected with version $($Package.Version)`tUninstalling..."
								$Uninstall = $Package | Uninstall-Package -Force -ErrorAction Stop
								Write-Verbose -Message "$ENV:COMPUTERNAME`: $ProductName detected with version $($Package.Version)`tRemoving aritacts"
								# 1. Remove the program files folder
								try {
									$InstallPath = Get-ItemPropertyValue -Path $InstallPathRegKey -Name $InstallPathRegValue
									if ($InstallPath) {
										Remove-DirectoryWithHandling -Path $InstallPath
									} else {
										Write-Warning "InstallPath registry value not found."
									}
								}
								catch {
									Write-Warning "Error reading InstallPath from registry: $($_.Exception.Message)"
								}

								# 2. Remove the ProgramData directory
								Remove-DirectoryWithHandling -Path $ProgramDataPath

								# 3. Remove the registry key and all subkeys
								try {
									if (Test-Path -Path $InstallPathRegKey) {
										Remove-Item -Path $InstallPathRegKey -Recurse -Force -ErrorAction Stop
										Write-Verbose "Removed registry key: $InstallPathRegKey"
										$Global:RemovedArtifacts += "$InstallPathRegKey;"
									} else {
										Write-Verbose "Registry key not found: $InstallPathRegKey"
									}
								}
								catch {
									Write-Warning "Error removing registry key: $($_.Exception.Message)"
								}

								# Outputing Status and Error. Error is for if Invoke Command does not run
								$Obj = New-Object -TypeName System.Management.Automation.PSObject
								$Obj | Add-Member -MemberType NoteProperty -Name Status -Value $Uninstall.Status
								$Obj | Add-Member -MemberType NoteProperty -Name Version -Value $Uninstall.Version
								$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value ($RemovedArtifacts.Trim(";"))
								$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "N/A"
								$Obj
							}
							elseif ($Package -and $DetectOnly)
							{
								$Obj = New-Object -TypeName System.Management.Automation.PSObject
								$Obj | Add-Member -MemberType NoteProperty -Name Status -Value "Product Detected"
								$Obj | Add-Member -MemberType NoteProperty -Name Version -Value $Package.Version
								$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value "N/A"
								$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "N/A"
								$Obj
							}
							else
							{
								# Product Not Detected 
								# Outputting Status and Error. Error is for if Invoke Command does not run
								$Obj = New-Object -TypeName System.Management.Automation.PSObject
								$Obj | Add-Member -MemberType NoteProperty -Name Status -Value "Product Not Installed"
								$Obj | Add-Member -MemberType NoteProperty -Name Version -Value "N/A"
								$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value "N/A"
								$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "N/A"
								$Obj
							}
						}
						else
						{
							# Get-Package not detected
							# Outputting Status and Error. Error is for if Invoke Command does not run
							$Obj = New-Object -TypeName System.Management.Automation.PSObject
							$Obj | Add-Member -MemberType NoteProperty -Name Status -Value "Command Not Found"
							$Obj | Add-Member -MemberType NoteProperty -Name Version -Value "N/A"
							$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value "N/A"
							$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "The Get-Package Command was not found. This can indicate that you are on a PowerShell version lower than 5.1."
							$Obj
						}
					}
				}
				else
				{
					$Obj = New-Object -TypeName System.Management.Automation.PSObject
					$Obj | Add-Member -MemberType NoteProperty -Name Status -Value "Computer Offline"
					$Obj | Add-Member -MemberType NoteProperty -Name Version -Value "N/A"
					$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value "N/A"
					$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "N/A"
					$Obj | Add-Member -MemberType NoteProperty -Name PSComputerName -Value "$ComputerName"
					$Obj | Add-Member -MemberType NoteProperty -Name RunspaceId -Value ""
					$Obj
				}
			}
			catch
			{
				$Obj = New-Object -TypeName System.Management.Automation.PSObject
				$Obj | Add-Member -MemberType NoteProperty -Name Status -Value "Unable to connect"
				$Obj | Add-Member -MemberType NoteProperty -Name Version -Value "N/A"
				$Obj | Add-Member -MemberType NoteProperty -Name ArtifactsRemoved -Value "N/A"
				$Obj | Add-Member -MemberType NoteProperty -Name Error -Value "$($_.Exception.Message)"
				$Obj | Add-Member -MemberType NoteProperty -Name PSComputerName -Value "$ComputerName"
				$Obj | Add-Member -MemberType NoteProperty -Name RunspaceId -Value ""
				$Obj
			}
			
			#Increment Counter for Write-Progress output
			$ComputerCounter++
		}
	}
	END
	{
		# No ending statements required.
	}
}


# This function has been taken from PoshFunctions PowerShell Module https://github.com/riedyw/PoshFunctions
function Get-IpRange
{
<#
.SYNOPSIS
    Given a subnet in CIDR format, get all of the valid IP addresses in that range.
.DESCRIPTION
    Given a subnet in CIDR format, get all of the valid IP addresses in that range.
.PARAMETER Subnets
    The subnet written in CIDR format 'a.b.c.d/#' and an example would be '192.168.1.24/27'. Can be a single value, an
    array of values, or values can be taken from the pipeline.
.EXAMPLE
    Get-IpRange -Subnets '192.168.1.24/30'
 
    192.168.1.25
    192.168.1.26
.EXAMPLE
    (Get-IpRange -Subnets '10.100.10.0/24').count
 
    254
.EXAMPLE
    '192.168.1.128/30' | Get-IpRange
 
    192.168.1.129
    192.168.1.130
.NOTES
    Inspired by https://gallery.technet.microsoft.com/PowerShell-Subnet-db45ec74
 
    * Added comment help
#>
	
	[CmdletBinding(ConfirmImpact = 'None')]
	Param (
		[Parameter(Mandatory, HelpMessage = 'Please enter a subnet in the form a.b.c.d/#', ValueFromPipeline, Position = 0)]
		[string[]]$Subnets
	)
	
	begin
	{
		Write-Verbose -Message "Starting [$($MyInvocation.Mycommand)]"
	}
	
	process
	{
		foreach ($subnet in $subnets)
		{
			if ($subnet -match '^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/\d{1,2}$')
			{
				#Split IP and subnet
				$IP = ($Subnet -split '\/')[0]
				[int]$SubnetBits = ($Subnet -split '\/')[1]
				if ($SubnetBits -lt 7 -or $SubnetBits -gt 30)
				{
					Write-Error -Message 'The number following the / must be between 7 and 30'
					break
				}
				#Convert IP into binary
				#Split IP into different octects and for each one, figure out the binary with leading zeros and add to the total
				$Octets = $IP -split '\.'
				$IPInBinary = @()
				foreach ($Octet in $Octets)
				{
					#convert to binary
					$OctetInBinary = [convert]::ToString($Octet, 2)
					#get length of binary string add leading zeros to make octet
					$OctetInBinary = ('0' * (8 - ($OctetInBinary).Length) + $OctetInBinary)
					$IPInBinary = $IPInBinary + $OctetInBinary
				}
				$IPInBinary = $IPInBinary -join ''
				#Get network ID by subtracting subnet mask
				$HostBits = 32 - $SubnetBits
				$NetworkIDInBinary = $IPInBinary.Substring(0, $SubnetBits)
				#Get host ID and get the first host ID by converting all 1s into 0s
				$HostIDInBinary = $IPInBinary.Substring($SubnetBits, $HostBits)
				$HostIDInBinary = $HostIDInBinary -replace '1', '0'
				#Work out all the host IDs in that subnet by cycling through $i from 1 up to max $HostIDInBinary (i.e. 1s stringed up to $HostBits)
				#Work out max $HostIDInBinary
				$imax = [convert]::ToInt32(('1' * $HostBits), 2) - 1
				$IPs = @()
				#Next ID is first network ID converted to decimal plus $i then converted to binary
				For ($i = 1; $i -le $imax; $i++)
				{
					#Convert to decimal and add $i
					$NextHostIDInDecimal = ([convert]::ToInt32($HostIDInBinary, 2) + $i)
					#Convert back to binary
					$NextHostIDInBinary = [convert]::ToString($NextHostIDInDecimal, 2)
					#Add leading zeros
					#Number of zeros to add
					$NoOfZerosToAdd = $HostIDInBinary.Length - $NextHostIDInBinary.Length
					$NextHostIDInBinary = ('0' * $NoOfZerosToAdd) + $NextHostIDInBinary
					#Work out next IP
					#Add networkID to hostID
					$NextIPInBinary = $NetworkIDInBinary + $NextHostIDInBinary
					#Split into octets and separate by . then join
					$IP = @()
					For ($x = 1; $x -le 4; $x++)
					{
						#Work out start character position
						$StartCharNumber = ($x - 1) * 8
						#Get octet in binary
						$IPOctetInBinary = $NextIPInBinary.Substring($StartCharNumber, 8)
						#Convert octet into decimal
						$IPOctetInDecimal = [convert]::ToInt32($IPOctetInBinary, 2)
						#Add octet to IP
						$IP += $IPOctetInDecimal
					}
					#Separate by .
					$IP = $IP -join '.'
					$IPs += $IP
				}
				Write-Output -InputObject $IPs
			}
			else
			{
				Write-Error -Message "Subnet [$subnet] is not in a valid format"
			}
		}
	}
	
	end
	{
		Write-Verbose -Message "Ending [$($MyInvocation.Mycommand)]"
	}
}


function Uninstall-ADV2022003UAVRAgents
{
	[CmdletBinding(DefaultParameterSetName = 'LDAP')]
	param
	(
		[parameter(Mandatory = $true, ParameterSetName = "ComputerNames")]
		[String[]]$ComputerNames,
		[Parameter(Mandatory = $False, ParameterSetName = "LDAP")]
		[String]$LDAPQuery = "(&(ObjectClass=computer)(OperatingSystem=*Windows Server*))",
		[Parameter(Mandatory = $true, ParameterSetName = "CIDR", HelpMessage = 'Please enter a subnet in the form a.b.c.d/#')]
		[string]$CIDR,
		[Parameter(Mandatory = $false)]
		[switch]$Quiet,
		[Parameter(Mandatory = $false)]
		[switch]$NoDNSResolution,
		[Parameter(Mandatory = $false)]
		[switch]$DetectOnly,
		[Parameter(Mandatory = $false)]
		[ValidateSet("msi", "msu", "NuGet", "PowerShellGet", "Programs", "Bootstrap", IgnoreCase = $true)]
		[string[]]$ProviderName = "msi"
	)
	
	# Hardcoded Names and Versions
	[String]$ProductName = "Netwrix Auditor User Activity Core Service"
	[System.Version]$VersionsBefore = "10.5"
	
	$Params = @{
		Quiet = $Quiet
		NoDNSResolution = $NoDNSResolution
		ProductName	    = $ProductName
		VersionsBefore  = $VersionsBefore
		DetectOnly	    = $DetectOnly
	}
	
	if ($ProviderName)
	{
		$Params.Add("ProviderName", $ProviderName)
	}
	
	switch ($PSCmdlet.ParameterSetName) {
		"LDAP" {
			$Params.Add("LDAPQuery", $LDAPQuery)
		}
		"ComputerNames" {
			$Params.Add("ComputerNames", $ComputerNames)
		}
		"CIDR" {
			$Params.Add("CIDR", $CIDR)
		}
	}
	
	Uninstall-GenericProduct @Params
}

Function Uninstall-UAVRAgents
{
	[CmdletBinding(DefaultParameterSetName = 'LDAP')]
	param
	(
		[parameter(Mandatory = $true, ParameterSetName = "ComputerNames")]
		[String[]]$ComputerNames,
		[Parameter(Mandatory = $False, ParameterSetName = "LDAP")]
		[String]$LDAPQuery = "(&(ObjectClass=computer)(OperatingSystem=*Windows Server*))",
		[Parameter(Mandatory = $true, ParameterSetName = "CIDR", HelpMessage = 'Please enter a subnet in the form a.b.c.d/#')]
		[string]$CIDR,
		[Parameter(Mandatory = $false)]
		[switch]$Quiet,
		[Parameter(Mandatory = $false)]
		[switch]$NoDNSResolution,
		[Parameter(Mandatory = $false)]
		[switch]$DetectOnly,
		[Parameter(Mandatory = $false)]
		[ValidateSet("msi", "msu", "NuGet", "PowerShellGet", "Programs", "Bootstrap", IgnoreCase = $true)]
		[string[]]$ProviderName = "msi"
	)
	
	#Hardcoded Names and Versions
	[String]$ProductName = "Netwrix Auditor User Activity Core Service"
	[System.Version]$VersionsBefore = "0.0" # All Versions
	
	$Params = @{
		Quiet				  = $Quiet
		NoDNSResolution	      = $NoDNSResolution
		ProductName		      = $ProductName
		VersionsBefore  = $VersionsBefore
		DetectOnly = $DetectOnly
	}
	
	if ($ProviderName)
	{
		$Params.Add("ProviderName", $ProviderName)
	}
	
	switch ($PSCmdlet.ParameterSetName)
	{
		"LDAP" {
			$Params.Add("LDAPQuery", $LDAPQuery)
		}
		"ComputerNames" {
			$Params.Add("ComputerNames", $ComputerNames)
		}
		"CIDR" {
			$Params.Add("CIDR", $CIDR)
		}
	}
	
	Uninstall-GenericProduct @Params
}