---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
---

# Getting Started

Welcome to Netwrix Endpoint Protector, your solution for securing endpoint data. With features like
Device Control, Content Aware Protection, eDiscovery, and Enforced Encryption, Endpoint Protector
safeguards against data breaches from a wide range of endpoints, including portable storage devices
such as USB flash drives, external HDDs, digital cameras, MP3 players, and iPods. These devices are
seamlessly connected to Windows, Mac, or Linux computers, increasing the risk of data theft or
accidental loss. Ensure compliance and protect sensitive information with our user-friendly
platform.

## System Requirements

Before starting, ensure that your environment meets the following requirements:

- Operating Systems: Windows, macOS, Linux
- Disk Space: Sufficient for agent installation
- Network: Access to Endpoint Protector Server

See the [Requirements](/docs/endpointprotector/requirements/overview.md) topic for additional information.

## Staging the Server

- Access the Endpoint Protector Management Console:

    - Access the appliance using the IP address configured during the deployment process, which is
      also visible on the backend console.
    - Log in using your administrator credentials.

See the [Server Functionality](/docs/endpointprotector/admin/systemdashboard.md) topic for additional information.

## Managing Administrators

- Administrator Accounts:

    - Create and manage administrator accounts with appropriate permissions under System
      Configuration > System Administrators.

See the [System Configuration](/docs/endpointprotector/admin/systemconfiguration/overview.md) topic for additional
Information.

## Configuring Device Control

- Create Device Control Policies:

    - Navigate to Device Control.
    - Create Custom Policies to configure device access rules.
    - Customize policies based on device types and access requirements.

See the [Device Control](/docs/endpointprotector/admin/dc_module/dcmodule.md) topic for additional information.

## Configuring Content Aware Protection

- Create Content Aware Policies:

    - Navigate to Content Aware Protection > Content Aware Policies.
    - Create Custom Policies to define file monitoring and protection rules.
    - Specify Denylists, Predefined Content, or Custom Content to identify sensitive data.

See the [Content Aware Protection](/docs/endpointprotector/admin/cap_module/capmodule.md) topic for more
information.

## Configuring an eDiscovery Scan

- Setup eDiscovery Scans:

    - Navigate to eDiscovery > Policies and Scans.
    - Create custom scan policies to identify sensitive data at rest on endpoint systems.
    - Configure scan options and remediation actions (Encrypt, Decrypt, Delete).

See the [eDiscovery](/docs/endpointprotector/admin/ed_module/edmodule.md) topic for additional more information.

## Configuring the User Experience

- Customize Netwrix Endpoint Protector Client Settings:

    - Navigate to Device Control > Client Settings.
    - Configure Client Modes (Normal, Transparent, Stealth, etc.) and Notification Preferences.

See the [Device Control](/docs/endpointprotector/admin/dc_module/dcmodule.md) topic for more information.

### Configuring User Remediation Settings

- Setup User Remediation:

    - Navigate to System Parameters > User Remediation.
    - Configure settings such as Time Interval for user actions and User Remediation Pop-up
      notifications.

See the [System Parameters](/docs/endpointprotector/admin/systempar.md) topic for more information.

### Setting Up Offline Temporary Password

- Generate Offline Temporary Passwords:

    - Navigate to Offline Temporary Passwords.
    - Generate passwords to provide temporary access rights when User Remediation is unavailable.

See the [Offline Temporary Password](/docs/endpointprotector/admin/otpassword.md) topic for more
information.

## Deploying Agents

- Deploy Netwrix Endpoint Protector Agents:

    - Access System Configuration > Client Software.
    - Download and deploy Endpoint Protector Client packages for Windows, macOS, and Linux systems.
    - Utilize MDM software or other deployment tools for efficient agent deployment.

See the [System Configuration](/docs/endpointprotector/admin/systemconfiguration/overview.md) topic for more information.

## Blocking Content Aware Protection Policies

- Transition to Blocking Policies:

    - Duplicate "Report Only" CAP policies and modify them to enforce restrictions.
    - Activate blocking policies to prevent unauthorized data movements.

See the [Content Aware Protection](/docs/endpointprotector/admin/cap_module/capmodule.md) topic for more
information.

## Performing Remediation within eDiscovery

- Implement Remediation Actions:

    - Review eDiscovery scan results under eDiscovery > Scan Results and Actions.
    - Perform actions such as Encrypt, Decrypt, or Delete on identified sensitive data to mitigate
      risks.

See the
[eDiscovery Scan Result and Actions](/docs/endpointprotector/admin/dc_module/dcmodule.md)
topic for more information.

## Deploying Enforced Encryption

- Automatic Deployment:

    - Go to Device Control > Global Rights.
    - Enable Allow Access if Trusted Device™ Level 1+.
    - Ensures automatic deployment of Enforced Encryption 2 on USB devices recognized as Trusted
      Device™ Level 1.

- Manual Deployment:

    - Download Enforced Encryption installer for Windows/macOS.
    - Copy installer to USB root.
    - Execute installer from USB to setup Enforced Encryption.

- Configuration:

    - Set Master Password and user policies in Settings > Enforced Encryption.
    - Monitoring Devices:
    - Manage Enforced Encryption devices in Clients list section.

See the [Enforced Encryption](/docs/endpointprotector/admin/ee_module/eemodule.md) topic for more information.
