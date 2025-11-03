---
title: "Credential Provider"
description: "Credential Provider"
sidebar_position: 70
---

# Credential Provider

Netwrix Directory Manager Credential Provider (version 3.1.0.0) is a Windows Credential Provider that integrates with Windows login screens to provide self-service password reset and account unlock functionality.

You must install it on each client workstation to make the password reset and account unlock
features available to all users. It provides links on the Windows logon screen, which route users to
the web page(s) where they can unlock their accounts and reset their passwords.

## Product Information

- **Version**: 3.1.0.0 (formerly Imanami PasswordCenter Credential Provider)
- **Build Platform**: x64
- **Target OS**: Windows 10/11 (x64)
- **Browser Engine**: Chromium Embedded Framework (CEF) with latest security patches

## Key Components in the Package

The Credential Provider package consists of:

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

## Default Configuration

The credential provider includes the following default settings:
- **Window Title**: "Netwrix Directory Manager"
- **CP Title**: "Netwrix Directory Manager"
- **Forgot Password Text**: "Forgot my password?"
- **Unlock Account Text**: "Unlock my account"
- **Logging**: Disabled by default
- **CEF Log Mode**: Disabled
- **Web View Engine**: CEF (Chromium Embedded Framework)

## System Requirements

- **Operating System**: Windows 10/11 (x64)
- **Platform Toolset**: Visual Studio 2022 (v143)
- **Runtime**: Visual C++ 2022 Redistributable (x64) - included in installer

## Installation Notes

1. The installer requires Windows x64 architecture
2. Visual C++ 2022 Redistributable (x64) is included in the package
3. A system reboot is scheduled after installation to complete credential provider registration
4. Custom CPSettings.xml can be placed in the installation directory for custom configuration

## Configuration Options

The credential provider supports extensive configuration through registry settings and XML configuration:
- Custom password reset URLs
- Custom unlock account URLs
- Proxy server configuration
- Credential provider filtering for specific scenarios
- Custom branding (titles, text, images)
- Logging and debugging options

Registry settings path: `SOFTWARE\Imanami\GroupID\Version 10.0\PasswordCenterClient\Settings`
