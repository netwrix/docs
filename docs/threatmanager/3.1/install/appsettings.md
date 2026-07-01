---
title: "Modify Service Configuration Settings"
description: "Modify Service Configuration Settings"
sidebar_position: 45
---

# Modify Service Configuration Settings

Threat Manager services are configured through JSON configuration files. Each service reads its
settings at startup from `appsettings.json` in the service's installation directory.

## Configuration Files

Each service ships with an `appsettings.default.json` file that contains the default settings used
when no override is present. Every upgrade replaces this file, so don't edit it
directly. Use it as a reference to see what settings are available for a given service.

To override settings for a service, create an `appsettings.json` file in the same directory. The
installer doesn't create this file — you must create it yourself. Settings in `appsettings.json`
take precedence over those in `appsettings.default.json`.

The following services support configuration overrides via `appsettings.json`:

| Service | Configuration directory |
|---|---|
| Action Service | `C:\Program Files\STEALTHbits\StealthDEFEND\ActionService\` |
| Active Directory Service | `C:\Program Files\STEALTHbits\StealthDEFEND\ActiveDirectoryService\` |
| Azure Service | `C:\Program Files\STEALTHbits\StealthDEFEND\AzureService\` |
| Email Service | `C:\Program Files\STEALTHbits\StealthDEFEND\EmailService\` |
| Event Message Service | `C:\Program Files\STEALTHbits\StealthDEFEND\EventMessageService\` |
| Integration Service | `C:\Program Files\STEALTHbits\StealthDEFEND\IntegrationService\` |
| Job Service | `C:\Program Files\STEALTHbits\StealthDEFEND\JobService\` |
| License Service | `C:\Program Files\STEALTHbits\StealthDEFEND\LicenseService\` |
| SIEM Service | `C:\Program Files\STEALTHbits\StealthDEFEND\SiemService\` |
| Web Service | `C:\Program Files\STEALTHbits\StealthDEFEND\RestServer\` |

## Override Specific Settings

Only include the settings you want to change in `appsettings.json`. Don't copy the entire contents
of `appsettings.default.json` into `appsettings.json`. Copying all defaults prevents Threat Manager
upgrades from applying updated default values for settings you haven't intentionally changed.

For example, to override a single setting for the Azure Service, create
`C:\Program Files\STEALTHbits\StealthDEFEND\AzureService\appsettings.json` with only the section
containing that setting:

```json
{
  "Proxy": {
    "Enabled": true,
    "Address": "http://proxy.contoso.com:8080"
  }
}
```

Settings not present in `appsettings.json` continue to use the values from
`appsettings.default.json`.

## Apply Configuration Changes

Changes to `appsettings.json` don't take effect until you restart the service. To restart a
service, open the Windows Services management console (`services.msc`), locate the service by name,
and select **Restart**.

## Troubleshooting

If a service fails to start after editing `appsettings.json`, the most common cause is a JSON
formatting error. Verify the file contains valid JSON before restarting the service. Common mistakes
include missing or extra commas, mismatched braces, and unquoted property names.

You can validate the file using any JSON validator, or open it in an editor with JSON syntax
checking such as Visual Studio Code.
