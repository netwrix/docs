---
sidebar_position: 1
sidebar_label: FAQ
description: Find answers about the PingCastle.exe file size and configuration file location.
---
# Frequently Asked Questions (FAQ)

## PingCastle.exe Size Increase

The file size has grown significantly across recent versions due to enhanced capabilities and runtime dependencies:

- **Version 3.3** - Approx 2MB - Original codebase
- **Version 3.4** - Approx 20MB - Includes Microsoft Graph API DLLs for Entra ID integration
- **Version 3.5** - Approx 250MB - Includes Microsoft Graph API DLLs plus embedded ASP.NET 8 Runtime

The version 3.5 size increase is due to the migration from .NET Framework 4.7.2 to ASP.NET 8 with native packaging. This change eliminates the need for custom packaging tools (Fody Costura) and allows PingCastle to run without requiring users to install ASP.NET 8 prerequisites on their systems, providing a better deployment experience.

## pingcastle.exe.config File Location

The configuration file format changed in version 3.5 due to the ASP.NET 8 upgrade. The `appsettings.console.json` file, which uses JSON format, replaces the legacy `PingCastle.exe.config` XML file.
