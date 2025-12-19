---
title: "Agent Credential Rotation"
description: "Agent Credential Rotation"
sidebar_position: 30
---

# Agent Credential Rotation

There are two ways to change the credentials that agents use to authenticate with the Hub. If it is
suspected that agents have been compromised, it is recommended to take the out of band process
described in this document.

If authentication details are being rotated as part of a routine process, then the in band
alternative is to set all agents to use new credentials from within the Hub's web console. See the
[Agent Configuration](/docs/changetracker/8.1/admin/settingstab/agentsanddevices/agentconfiguration.md) topic for additional information.

The scripts at the bottom of this page can be used to update authentication details on devices.
These scripts can be rolled out to all devices with an IT automation system. These scripts stop the
agent, set the new authentication details in the agent's configuration file, and then restart the
agent, which on start-up will encrypt the password. An encrypted password with have E1 tags in the
configuration file.

## The Agent Account

During installation of the Hub, an account named **Agent** is created with just the Agent role. This
role enables agents to use this account to authenticate with the Hub. As the agent account has no
other roles, it can only be used by agents to authenticate.

### Rotate Agent Credentials

The existing agent account can be seen in the Users section of the Hub.

![agentaccountmanagement](/images/changetracker/8.1/admin/settings/agentaccountmanagement.webp)

:::warning
Changing the password of an account used by agents to authenticate will cause the
agents to go offline as they will be attempting to authenticate with the old password.
:::


:::info
For a smooth transition, it is recommended to create a new account with just the
**Agent** role. This account will have a different user name and password. Once created, the agent's
configuration can be updated to use the new account. When all agents have been migrated, the old
agent account can be removed.
:::


Follow the steps to create the new agent account.

**Step 1 –** Click **Create New User**, give it a user name and just the Agent role.

![newpassword](/images/changetracker/8.1/admin/settings/newpassword.webp)

**Step 2 –** Click **Update**, and the User Password dialog opens with a complex password. This is
only shown once. It is recommended that this be saved in a password management system for future
use.

## Agent Authentication Update on Windows

For Windows devices the `ChangePasswordOOB.ps1` PowerShell script can be used to update the
authentication details and restart the agent.

The two variables, `$newUsername` and `$newPassword`, near the top of the script, must be set to
match the new agent account.

Running the script will set the new authentication details and restart the agent while producing the
output below.

![newagentscript_1049x168](/images/changetracker/8.1/admin/settings/newagentscript_1049x168.webp)

ChangePasswordOOB.ps1

```
# Define the service name and default config file path
$serviceName = "Gen7AgentCore"
$configFilePath = "C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml"
# Set the new password here
$newPassword = ""
$newUsername = ""
# Check if the new password is set
if ([string]::IsNullOrEmpty($newPassword)) {
 Write-Error "Please set a new password in the `$newPassword variable" -ErrorAction Stop
 return
}
# Check if the new username is set
if ([string]::IsNullOrEmpty($newUsername)) {
 Write-Error "Please set a new username in the `$newUsername variable" -ErrorAction Stop
 return
}
# Stop the service if it's running
$service = Get-Service -Name $serviceName -ErrorAction SilentlyContinue
if ($service.Status -eq "Running") {
 Write-Host "Stopping service '$serviceName'..."
 Stop-Service -Name $serviceName -Force
 Write-Host "Service '$serviceName' stopped successfully."
} else {
 Write-Host "Service '$serviceName' is not running or does not exist."
}
# Read the contents of the config file
$configContent = Get-Content -Path $configFilePath
# Replace any <Password>...</Password> or <Password/> tag with the new password
$configContent = $configContent -replace "<Password>.*?</Password>", "<Password>$newPassword</Password>"
$configContent = $configContent -replace "<Password\s*/>", "<Password>$newPassword</Password>"
# Replace any <Username>...</Username> or <Username/> tag with the new username
$configContent = $configContent -replace "<Username>.*?</Username>", "<Username>$newUsername</Username>"
$configContent = $configContent -replace "<Username\s*/>", "<Username>$newUsername</Username>"
# Remove all occurrences of the <E1/> tag
$configContent = $configContent -replace "<E1\s*/>", ""
# Write the updated content back to the config file
$configContent | Set-Content -Path $configFilePath
Write-Host "The username and password have been replaced and <E1/> tag(s) removed successfully."
# Restart the service after the change
Start-Service -Name $serviceName
Write-Host "Service '$serviceName' started successfully."
```

## Agent Authentication Update on Linux

For Linux devices a bash script named `UpdatePasswordOOB.sh` is available to set the authentication
details and restart the agent.

The two variables `newUsername` and `newPassword` near the top of the script must be set to match
the new agent account.

Running the script will set the password and restart the agent while producing the output below.

![agentpasswordscript_1028x217](/images/changetracker/8.1/admin/settings/agentpasswordscript_1028x217.webp)

UpdatePasswordOOB.sh

```
#!/bin/bash
# Define the service name and default config file path
SERVICE_NAME="nntgen7agentcore"
CONFIG_FILE_PATH="/etc/NNT/gen7agent.app.netcore/HubDetails.xml"
# Set the new password here
newPassword=""
newUsername=""
# Check if the new password is set
if [ -z "$newPassword" ]; then
 echo "Error: Please set a new password in the 'newPassword' variable."
 exit 1
fi
# Check if the new username is set
if [ -z "$newUsername" ]; then
 echo "Error: Please set a new username in the 'newUsername' variable."
 exit 1
fi
# Stop the service if it's running
if systemctl is-active --quiet $SERVICE_NAME; then
 echo "Stopping service '$SERVICE_NAME'..."
 systemctl stop $SERVICE_NAME
 echo "Service '$SERVICE_NAME' stopped successfully."
else
 echo "Service '$SERVICE_NAME' is not running or does not exist."
fi
# Check if the config file exists
if [ ! -f "$CONFIG_FILE_PATH" ]; then
 echo "Error: Config file not found at $CONFIG_FILE_PATH"
 exit 1
fi
# Replace any <Password>...</Password> or <Password/> tag with the new password
sed -i "s|<Password>.*</Password>|<Password>$newPassword</Password>|g" "$CONFIG_FILE_PATH"
sed -i "s|<Password\s*/>|<Password>$newPassword</Password>|g" "$CONFIG_FILE_PATH"
# Replace any <Username>...</Username> or <Username/> tag with the new password
sed -i "s|<Username>.*</Username>|<Username>$newUsername</Username>|g" "$CONFIG_FILE_PATH"
sed -i "s|<Username\s*/>|<Username>$newUsername</Username>|g" "$CONFIG_FILE_PATH"
# Remove all occurrences of the <E1/> tag
sed -i "s|<E1\s*/>||g" "$CONFIG_FILE_PATH"
echo "The username and password have been replaced and <E1/> tag(s) removed successfully."
# Restart the service after the change
systemctl start $SERVICE_NAME
echo "Service '$SERVICE_NAME' started successfully."

```
