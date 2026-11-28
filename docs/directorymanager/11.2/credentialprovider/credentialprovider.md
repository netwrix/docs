---
title: "Directory Manager Credential Provider for Windows"
description: "Learn what the Directory Manager Credential Provider adds to the Windows sign-in screen, its components, default settings, and requirements."
keywords:
  - Credential Provider
  - Windows sign-in screen
  - self-service password reset
  - account unlock
  - PasswordCenterClientSetup64.msi
sidebar_position: 70
---

# Directory Manager Credential Provider for Windows

The Directory Manager Credential Provider (version 3.1.0.0) is a Windows Credential Provider. It adds self-service password reset and account unlock to the Windows sign-in screen.

Install it on each client workstation so that all users can reset their passwords and unlock their accounts. The provider adds links to the Windows sign-in screen. The links open the web pages where users unlock their accounts and reset their passwords.

## Product information

- **Version**: 3.1.0.0 (formerly Imanami PasswordCenter Credential Provider)
- **Build Platform**: x64
- **Target OS**: Windows 10/11 (x64)
- **Browser Engine**: Chromium Embedded Framework (CEF) with the latest security patches

## Package components

The Credential Provider package includes these components:

| Component     | Description   |
| ------------- | ------------- |
| PasswordCenterClientSetup64.msi | MSI installer package |
| Imanami.PasswordCenter.Credential64.dll | Core credential provider DLL |
| GroupIDBrowser.exe | Desktop browser component |
| WebBrowser.exe | CEF-based web rendering engine |
| CPSettings.xml | Configuration file for credential provider settings (optional) |
| Visual C++ 2022 Redistributable (x64) | Required runtime (included in installer) |
| image_yv5_icon.ico | Netwrix branding icon |
| logo.bmp | Enhanced logo bitmap |

## Default configuration

The credential provider has these default settings:

- **Window Title**: "Netwrix Directory Manager"
- **CP Title**: "Netwrix Directory Manager"
- **Forgot Password Text**: "Forgot my password?"
- **Unlock Account Text**: "Unlock my account"
- **Logging**: Disabled by default
- **CEF Log Mode**: Disabled
- **Web View Engine**: CEF (Chromium Embedded Framework)

## System requirements

- **Operating System**: Windows 10/11 (x64)
- **Platform Toolset**: Visual Studio 2022 (v143)
- **Runtime**: Visual C++ 2022 Redistributable (x64), included in the installer

## Installation notes

1. The installer requires the Windows x64 architecture.
2. The package includes the Visual C++ 2022 Redistributable (x64).
3. The installer schedules a system reboot after installation to complete credential provider registration.
4. To customize the configuration, place a custom CPSettings.xml in the installation directory.

## Configuration options

You can configure the credential provider through registry settings and XML configuration. The options include:

- Custom password reset URLs
- Custom unlock account URLs
- Proxy server configuration
- Credential provider filtering for specific scenarios
- Custom branding (titles, text, images)
- Logging and debugging options

The registry settings path is `SOFTWARE\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings`.
