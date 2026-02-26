# Device Discovery and Registration

## Overview

This document describes how devices are discovered and registered within the system. The process consists of two main phases:

1. **Device Discovery** - Identifying device characteristics and operating system details
2. **Device Registration** - Placing devices into appropriate groups based on their characteristics

---

## Device Discovery

Device discovery is the process of identifying and collecting information about a device when it first connects to the system or when its configuration changes.

### Discovery Methods

The system uses different discovery methods depending on whether the device is local or remote:

#### Local Device Discovery

For devices running the agent locally, the system performs direct discovery by:

- **Network Information**: Collecting IPv4, IPv6, and MAC addresses from active network interfaces
- **Operating System Detection**: Identifying the OS type, version, and whether it's a server or desktop edition
- **Hardware Information**: Gathering CPU details including family, description, and processor count
- **Environment Variables**: Capturing system environment variables for use in policies and scripts

#### Remote Device Discovery

For remote devices accessed through credentials, the system:

- Executes remote commands to gather environment information
- Determines if the system is Windows or Unix/Linux based
- Collects basic platform information including device name and network details
- Handles special cases for cloud, ESX, Splunk, and database connections

### Supported Operating Systems

The system supports discovery and management of the following operating systems:

#### Windows
- Windows 10
- Windows 11
- Windows Server 2016
- Windows Server 2019
- Windows Server 2022
- Windows Server 2025

#### Linux Distributions
- **CentOS**: Versions 7, 8, 9, 10
- **Red Hat Enterprise Linux (RHEL)**: Versions 7, 8, 9, 10
- **Ubuntu**: Versions 16, 18, 20, 22, 24
- **Debian**: Versions 10, 11, 12, 13, 14
- **SUSE Linux Enterprise**: Versions 12, 15, 16
- **Oracle Linux**: Versions 7, 8, 9, 10
- **Amazon Linux**: Versions 1 (2018), 2, 2023
- **Rocky Linux**: Versions 8, 9, 10
- **Fedora**: Version 39

#### Unix Systems
- **Oracle Solaris**: Versions 10, 11
- **FreeBSD**
- **Mac OS X**
- **AIX**: Version 7

### Operating System Detection Methods

#### Windows OS Type Detection

Windows operating system detection uses **build numbers** to accurately identify the OS version, as the standard version information is not reliable for Windows Server 2012 R2 and later versions.

**Detection Process**:

1. **Registry Information**: The system reads from `HKLM\Software\Microsoft\Windows NT\CurrentVersion`:
   - `ProductName`: Identifies if it's a server or desktop edition
   - `CurrentVersion`: Major.Minor version number
   - `CurrentBuild`: Build number (critical for accurate detection)

2. **Build Number Mapping**: The system uses specific build numbers to identify OS versions:
   - **9600**: Windows Server 2012 R2 / Windows 8.1
   - **14393**: Windows Server 2016 / Windows 10
   - **17763**: Windows Server 2019 / Windows 10
   - **20348**: Windows Server 2022
   - **21996+**: Windows 11
   - **26100+**: Windows Server 2025

3. **Server vs Desktop**: The `ProductName` registry value is checked for the word "server" to distinguish between server and desktop editions

**Example**: A system with build number 20348 and "server" in the product name is identified as Windows Server 2022, while the same build without "server" would be Windows 10.

#### Linux Platform Detection

Linux platform detection uses a **three-method sequential approach** to ensure accurate identification across different distributions:

**Method 1: LSB (Linux Standard Base)**

The system first attempts to use the `lsb_release` command if available:

1. Checks if `lsb_release` command exists using `which lsb_release`
2. If found, executes `lsb_release -sd` to get distribution description
3. Parses the output to identify distribution name and version
4. Extracts version number from the description string

**Method 2: Release Files**

If LSB is not available, the system examines release files in `/etc/`:

1. Searches for files matching `/etc/*release` (including symlinks)
2. Reads and parses these files as key-value pairs
3. Looks for specific keys:
   - `PRETTY_NAME`: Preferred human-readable name
   - `NAME`: Distribution name
   - `VERSION_ID`: Version number
   - `CPE_NAME`: Common Platform Enumeration identifier
4. Identifies distribution by matching keywords (centos, ubuntu, redhat, debian, suse, oracle, amazon, rocky, fedora)

**Method 3: uname Command**

If the previous methods fail, the system falls back to the `uname -a` command:

1. Executes `uname -a` to get kernel and system information
2. Searches the output for distribution-specific keywords
3. Uses generic "Unix" or "Linux" classification if no specific match found

**Version Refinement**: Once the distribution family is identified, the system maps the major version number to specific OS types (e.g., Ubuntu 20, Ubuntu 22, Ubuntu 24).

**Example Detection Sequence**:
- System tries `lsb_release -sd` → Returns "Ubuntu 22.04.1 LTS"
- Parses to identify: Distribution = Ubuntu, Version = 22.04
- Maps to OS Type: LinuxUbuntu22

### Discovery Process Details

The discovery process collects the following information:

1. **Device Name**: The hostname or computer name
2. **Fully Qualified Domain Name (FQDN)**: Complete domain name if available
3. **IP Addresses**: Both IPv4 and IPv6 addresses from active network interfaces
4. **MAC Addresses**: Physical addresses of network adapters
5. **Operating System**: Type, version, and edition (server vs. desktop) - detected using methods described above
6. **Platform Information**: Architecture and system details
7. **CPE Name**: Common Platform Enumeration identifier (for Linux systems)
8. **Agent Version**: Version of the installed agent software

---

## Device Registration

Device registration is the process of placing newly discovered devices into appropriate groups based on their characteristics and any custom business rules.

### Registration Process Flow

When a device is first discovered or re-registered, it follows this sequence:

1. **Initial Placement**: Device is placed in both the "New Devices" and "Awaiting Registration" groups
   - The "New Devices" group serves as a safety net - if the registration process fails for any reason, the device can still be found here
   - This ensures devices are never "lost" during the registration process

2. **Registration Report Execution**: A registration report is run to collect device characteristics
   - The report gathers information such as operating system type, version, and other attributes
   - This data is used to determine appropriate group placement

3. **Group Assignment**: Based on the report results and custom scripts, the device is assigned to groups
   - Custom registration scripts can examine the collected data and apply business logic
   - If no custom script exists, default OS-based group assignment is used

4. **Final Placement**: Device is moved from "Awaiting Registration" to its target groups
   - If appropriate groups are found, the device is removed from "New Devices" and added to target groups
   - If no appropriate groups are found or registration fails, the device **remains in "New Devices"** for manual review
   - Device is always added to the "All Devices" group regardless of other group assignments

### Default Group Assignment

The registration process uses the "New Device Registration Process" report to determine group placement. By default, devices are assigned to groups based on their operating system:

#### Windows Groups
- Windows (generic)
- Windows 10
- Windows 11
- Windows 2016
- Windows 2019
- Windows 2022
- Windows 2025

#### Linux Groups
- Linux (generic)
- Linux Centos (versions 7-10)
- Linux Redhat (versions 7-10)
- Linux Debian (versions 10-14)
- Linux Fedora (version 39)
- Linux Suse (versions 12, 15, 16)
- Linux Ubuntu (versions 16, 18, 20, 22, 24)
- Linux Amazon (versions 1, 2, 2023)
- Linux Oracle (versions 7-10)
- Rocky Linux (versions 8-10)

#### Other OS Groups
- Oracle Solaris (versions 10, 11)
- Mac OSX
- AIX (version 7)

### Custom Registration Scripts

Organizations can customize the registration process by providing a custom registration script. This script can:

- Examine device characteristics collected by the registration report
- Apply custom business logic to determine group membership
- Assign devices to multiple groups based on complex criteria
- Override default OS-based group assignments

When a custom script identifies multiple groups for a device, all identified groups will be assigned (subject to the `AllRegistrationGroupsExist` configuration setting).

### Group Assignment Sequence

The system follows this sequence when assigning groups:

1. **Initial State**: Device is already in both "New Devices" and "Awaiting Registration" groups (placed there during initial discovery)

2. **Remove from Awaiting Registration**: Device is removed from the "Awaiting Registration" group

3. **Evaluate Custom Script**: If a custom registration script exists, it is executed with the device characteristics

4. **Determine Target Groups**: Groups are identified based on:
   - Custom script results (if script exists)
   - Default OS-based mapping from the registration report (if no script)

5. **Validate Groups**: If `AllRegistrationGroupsExist` is enabled, all identified groups must exist
   - If any group doesn't exist, the entire registration is aborted
   - Device remains in "New Devices" for manual intervention

6. **Remove from Previous OS Groups**: If `EnableAutoReregisterAgentAfterOsChange` is enabled, device is removed from previous OS-specific groups (during re-registration scenarios)

7. **Add to Target Groups**: Device is added to all identified groups (if validation passed)

8. **Add to All Devices**: Device is always added to the "All Devices" group

9. **Handle New Devices Group**:
   - If custom or OS-specific groups were successfully assigned, device is removed from "New Devices"
   - If no groups were found or registration failed, device **remains in "New Devices"** as a safety net
   - This ensures administrators can always find devices that need manual group assignment

### Registration Failure Handling

If the registration process encounters issues, the device remains in the "New Devices" group where it was initially placed:

- **No Response**: If a device doesn't respond to the registration report, it remains in "New Devices" group (never removed from it)

- **Missing Groups**: If `AllRegistrationGroupsExist` is enabled and any identified group doesn't exist, the device remains in "New Devices" and a warning is logged

- **Script Errors**: If the custom registration script fails, the device remains in "New Devices" by default and the error is logged

- **Validation Failures**: Any validation failure during the registration process results in the device staying in "New Devices"

This safety-net approach ensures that devices requiring manual intervention can always be found in the "New Devices" group, preventing devices from being "lost" in the system.

---

## Configuration Settings

### AllRegistrationGroupsExist

**Purpose**: Controls whether all groups identified for a device must exist before the device is moved from "New Devices".

**Default Value**: `false`

**Behaviour**:
- When `true`: If any identified group doesn't exist, the device remains in "New Devices" and a warning is logged
- When `false`: Device is added to groups that exist; missing groups are logged as errors but don't prevent registration

**Use Case**: Enable this setting in production environments to ensure devices are only registered when all required groups are properly configured.

### EnableAutoReregisterAgentAfterOsChange

**Purpose**: Controls whether devices are automatically re-registered when an operating system change is detected.

**Default Value**: `false`

**Behaviour**:
- When `true`: If a device's OS changes (e.g., after an upgrade), it is automatically moved back to "Awaiting Registration" and the registration process runs again
- When `false`: OS changes do not trigger automatic re-registration

**Use Case**: Enable this setting if you want devices to be automatically reassigned to appropriate OS-specific groups after operating system upgrades.

---

## Logging Configuration

To troubleshoot device discovery and registration issues, you can enable detailed logging for specific components.

### Device Discovery Logging

To enable detailed logging for device discovery, set the log level for `DesktopDevicePlatformDiscovery`:

**Location**: Agent log4net.config file

```xml
<logger name="DesktopDevicePlatformDiscovery">
  <level value="DEBUG" />
</logger>
```

**Information Logged**:
- Operating system detection details
- Network interface discovery
- Hardware information collection
- Remote discovery command execution
- Version parsing and OS family identification

### Device Registration Logging

To enable detailed logging for device registration, set the log level for `CollateComplianceReportDataBackgroundTaskWorker`:

**Location**: Hub log4net.config file

```xml
<logger name="CollateComplianceReportDataBackgroundTaskWorker">
  <level value="DEBUG" />
</logger>
```

**Information Logged**:
- Registration report processing
- Custom script execution results
- Group assignment decisions
- Device movement between groups
- Configuration setting evaluations
- Timing information for performance analysis

### Additional Logging

For comprehensive troubleshooting, you may also want to enable DEBUG logging for:

- `AgentTaskManager`: For agent task creation and polling
- `DirectoryManager`: For group membership operations
- `EventRepository`: For registration event processing

---

## Troubleshooting

### OS Type Not Correctly Identified

**Impact**: If the agent cannot correctly identify the operating system type, the device registration process will encounter problems because both the registration report and custom registration scripts depend on accurate OS Type information.

**Possible Causes**:
1. **Outdated Agent**: Agent version doesn't recognize newer operating systems
2. **New OS Release**: Operating system is newer than the agent's OS detection code
3. **Unsupported OS**: Operating system variant not included in detection logic
4. **Registry/System File Issues**: On Windows, registry keys may be missing or corrupted; on Linux, release files may be non-standard

**Common Scenarios**:
- **New Windows OS Release**: A completely new Windows version is released (e.g., Windows 12, Windows Server 2027) before agent code is updated to recognize it
  - Note: New builds of existing OS versions (e.g., Windows 11 updates) are handled by build number ranges and won't cause issues
- **New Linux Distribution or Major Version**: A new Linux distribution or major version is released that doesn't match existing detection patterns
- **Beta/Preview OS**: Running preview or beta versions of operating systems with non-standard version information or identifiers

**Symptoms**:
- Device shows generic OS type (e.g., "Windows" instead of "Windows 2022", or "Linux" instead of "Linux Ubuntu 22")
- Device not assigned to correct OS-specific group during registration
- Registration report may fail or return unexpected results
- Custom registration script may not execute correctly due to missing or incorrect OS information

**Resolution Steps**:

1. **Check Agent Version**:
   - Verify the agent version on the affected device
   - Compare with the latest available agent version
   - Review agent release notes for OS support information

2. **Review OS Detection Logs**:
   - Enable DEBUG logging for `DesktopDevicePlatformDiscovery`
   - Check logs for OS detection details
   - Look for warnings about unrecognized build numbers or distribution names

3. **Verify OS Information**:
   - **Windows**: Check registry values at `HKLM\Software\Microsoft\Windows NT\CurrentVersion`
     - Verify `CurrentBuild` value exists and is numeric
     - Check `ProductName` contains expected OS name
   - **Linux**: Check release files in `/etc/` directory
     - Verify `/etc/os-release` or `/etc/*release` files exist
     - Check if `lsb_release` command is available

4. **Update Agent**:
   - If a newer agent version is available that supports the OS, upgrade the agent
   - After upgrade, the device may need to be re-registered (see `EnableAutoReregisterAgentAfterOsChange`)

5. **Temporary Workaround**:
   - Manually assign device to appropriate groups
   - Document the OS type issue for future reference
   - Consider using custom registration script to handle the specific OS variant

6. **Report to Support**:
   - If the OS should be supported but isn't recognized, contact support with:
     - Agent version
     - Operating system details (name, version, build number)
     - OS detection logs with DEBUG enabled
     - Registry/release file contents

**Prevention**:
- Keep agents updated to the latest version
- Test new OS versions in non-production environments before deployment
- Monitor agent release notes for new OS support
- Plan agent upgrades before deploying new operating systems

### Device Not Appearing in Expected Group

**Possible Causes**:
1. Custom registration script returned unexpected group names
2. Target group doesn't exist and `AllRegistrationGroupsExist` is enabled
3. Registration report didn't complete successfully
4. Device didn't respond to registration report task

**Resolution Steps**:
1. Enable DEBUG logging for `CollateComplianceReportDataBackgroundTaskWorker`
2. Check logs for group assignment decisions
3. Verify all target groups exist in the system
4. Review custom registration script logic if applicable
5. Check that device responded to registration report task

### Device Stuck in "Awaiting Registration"

**Possible Causes**:
1. Registration report hasn't run yet
2. Device is offline or not responding
3. Registration report task timed out

**Resolution Steps**:
1. Check device connectivity
2. Verify agent is running and can communicate with Hub
3. Review registration report schedule
4. Check for task timeout issues in logs

### Device Not Re-registering After OS Upgrade

**Possible Causes**:
1. `EnableAutoReregisterAgentAfterOsChange` is disabled
2. OS change wasn't detected by the system
3. Agent hasn't polled since the OS change

**Resolution Steps**:
1. Enable `EnableAutoReregisterAgentAfterOsChange` configuration setting
2. Restart the agent to force a poll
3. Enable DEBUG logging for `AgentTaskManager` to see OS change detection

### Multiple Devices in Wrong Groups After Registration

**Possible Causes**:
1. Custom registration script has logic errors
2. Registration report collecting incorrect data
3. Group names in script don't match actual group names

**Resolution Steps**:
1. Review custom registration script logic
2. Test script with sample device data
3. Verify group display names match script output
4. Enable `AllRegistrationGroupsExist` to prevent partial registrations

---

## Best Practices

1. **Test Custom Scripts**: Always test custom registration scripts in a non-production environment before deployment

2. **Enable AllRegistrationGroupsExist**: In production environments, enable this setting to ensure devices are only registered when all required groups exist

3. **Monitor Registration Logs**: Regularly review registration logs to identify patterns or issues

4. **Create Groups Before Registration**: Ensure all target groups exist before running registration reports

5. **Use Descriptive Group Names**: Use clear, descriptive group names that match your organizational structure

6. **Document Custom Logic**: If using custom registration scripts, document the business rules and group assignment logic

7. **Plan for OS Upgrades**: If you perform OS upgrades, consider enabling `EnableAutoReregisterAgentAfterOsChange` to automatically reassign devices

8. **Regular Audits**: Periodically audit device group memberships to ensure they remain accurate

---

## Summary

The device discovery and registration process provides a flexible framework for automatically organizing devices based on their characteristics. By understanding the discovery methods, supported operating systems, registration flow, and configuration options, you can effectively manage device onboarding and ensure devices are placed in appropriate groups for policy application and reporting.
