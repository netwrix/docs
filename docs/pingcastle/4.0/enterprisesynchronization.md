---
sidebar_label: Synchronization
---
# Synchronization for PingCastle Enterprise

PingCastle Enterprise supports a synchronization mode to implement a
security zone model (commonly used within Defense sectors). Only domains are
synchronized (Entra ID isn't supported).

**PingCastle Enterprise high trust**

PingCastle Enterprise high trust

**PingCastle Enterprise low trust**

PingCastle audits

This enables report consolidation while keeping report details limited to appropriate security zones.

The data synchronized between high trust and low trust instances includes:

- The status of the domain (active, removed, etc.)

- The content of the report, based on a level filter (Full = no filter;
  Normal = recomputed for Full report, as-is for normal report; Light =
  stripped from Normal and Full, etc.)

The following data isn't synchronized: exceptions, action plans,
maturity changes, etc.

## Configuration

You need to configure an API key with synchronization rights on the server side.

You must assign the Agent to an entity. You can't assign it to a domain, as the entity will be used as the root to
assign the newly forwarded domains.

![API key configuration showing Agent assignment to entity with synchronization rights](/images/pingcastle/enterpriseinstall/image81.webp)

On the client side, edit the appsettings file to specify
the credentials and other required information.

Add a "Sync" section at the root of the file (remember
to add a comma before or after this section as required for valid JSON formatting).

Specify the Uri as the FQDN of the recipient server and the API key.

```json
{
  "Sync": {
    "Uri": "https://syncrecipient.pingcastle.com/",
    "ApiKey": "aaaaaaaa",
    "ExportLevel": "Normal"
  }
}
```

The export level is the one defined in the classic PingCastle Agent configuration.
If information needs to be removed, the data will be recomputed (this can
result in information loss if the instance is processing a more
recent report). If the level doesn't need to be restricted, the
information will be forwarded as-is. If the report version is
more recent, no information will be lost.

Available export levels:
- `Full` - No filter applied, all data included
- `Normal` - Standard level with moderate filtering
- `Light` - Stripped down data from Normal and Full
- `Paranoid` - Most restrictive level

## Synchronization patterns

PingCastle Enterprise will attempt to retrieve the
license from the higher instance at startup. If it can't be retrieved, it will use the locally
configured license.

PingCastle Enterprise will sync a domain when the domain is edited or when
the sync button is pressed.

![Domain sync button interface](/images/pingcastle/enterpriseinstall/image84.webp)

The Sync button is shown if the sync link is configured AND if the user
has permission to edit the domain. When a sync is performed, the domain
properties (status, etc.) will be synchronized along with past reports.

To avoid loading older reports with each change, information about
the latest audit is shared with the lower instance. The lower instance can
choose to upload only missing reports.

If a domain is created by a user locally, it will be synchronized.
However, if it is removed locally (which is allowed when no
reports are present), the application will attempt to remove it from the
higher instance. Removal can't be completed if reports
already exist, so the remove request may be denied silently.

You can also force synchronization of all domains from the
Interoperability page.

![Interoperability page with option to force synchronization of all domains](/images/pingcastle/enterpriseinstall/image85.webp)

## Synchronization patterns at import time

To ensure license enforcement, before importing a new report in
the lower instance, the instance will contact the higher instance to
verify that the report doesn't create domains beyond the license
limit. If there is a temporary network issue, the instance skips this check.
If the check denies the import, the lower instance doesn't import the report and logs the error.

After this check completes, the lower instance performs the import and then
synchronizes the report to the higher instance. If there is any network issue
during this step, the instance ignores the error (but logs it if
logging is enabled).

## Connection tests

To verify the connection is properly configured, you can sync a domain using
the button described earlier.

If there is an error, PingCastle Enterprise displays it as an exception.

![](/images/pingcastle/enterpriseinstall/image86.webp)

Note: The error details may be contained in an inner exception
shown in the following screenshot. In this example, this is a DNS issue where the host can't be
found.

![](/images/pingcastle/enterpriseinstall/image87.webp)
