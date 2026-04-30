---
description: >-
  This article explains how to resolve the Netwrix Auditor MSP license
  out-of-compliance error in proxy environments by configuring Call.Home.exe
  with explicit proxy settings, populating MSP.xml, and adjusting the
  MSPStartDelayerEnabled registry value.
keywords:
  - MSP license
  - out of compliance
  - proxy
  - Call.Home.exe
  - Event ID 2222
  - Netwrix Auditor
  - MSP.xml
  - MSPStartDelayerEnabled
  - license sync
  - nwxcorp.com
products:
  - auditor
sidebar_label: MSP License Out of Compliance in Proxy Environments
tags: []
title: "MSP License Out of Compliance in Proxy Environments"
knowledge_article_id: KB_463417
---

# MSP License Out of Compliance in Proxy Environments

## Symptom

Netwrix Auditor displays the following message at startup:

```text
Your Netwrix Auditor license is currently out of compliance.
For information, see the Licenses page in Settings.
```

The System Health log shows **Event ID 2222** with an error similar to:

```text
Unable to connect to the remote server. Check your firewall settings
to allow access to https://license.nwxcorp.com
```

Trace logs show connection failures to `54.89.181.210:443` (or other Netwrix-owned IPs).

## Cause

**Call.Home.exe** — the executable responsible for syncing license usage with the Netwrix MSP portal — does not automatically inherit system proxy settings. In environments with a default proxy configured, **Call.Home.exe** cannot reach the Netwrix licensing servers unless explicitly configured.

Two additional factors can also block license sync:

- The `<CustomInstanceIdentificator>` tag in **MSP.xml** is empty (no company name specified).
- The registry value `MSPStartDelayerEnabled` is not set to `false`, which delays **Call.Home.exe** execution.

## Resolution

### Step 1 — Create a proxy configuration file for Call.Home.exe

In the Netwrix Auditor installation folder under `\Netwrix Auditor\Administrative Console\`, create a file named:

**`Netwrix.CallHome.config`**

Add the following content, replacing the proxy address with your environment's proxy:

```xml
<configuration>
  <system.net>
    <defaultProxy>
      <proxy proxyaddress="http://<your-proxy>:<port>"
             usesystemdefault="True" autoDetect="False" />
    </defaultProxy>
  </system.net>
</configuration>
```

### Step 2 — Add the company name to MSP.xml

Open `\Netwrix Auditor\Administrative Console\MSP.xml` and add your organization name between the `<CustomInstanceIdentificator>` tags:

```xml
<CustomInstanceIdentificator>YourCompanyName</CustomInstanceIdentificator>
```

### Step 3 — Set the registry value to allow immediate execution

In the registry, navigate to:

```
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Netwrix Auditor\Management Console
```

Create or update the String Value:

- **Name:** `MSPStartDelayerEnabled`
- **Value:** `false`

### Step 4 — Run Call.Home.exe manually to force a sync

From the Administrative Console folder, run **Call.Home.exe** manually. Confirm that license usage updates correctly in both the MSP portal and the Netwrix Auditor console.

## Proxy Allowlist

Ensure the following URLs and IPs are whitelisted on your proxy server (port 443):

| URL / IP | Notes |
|---|---|
| `https://license.nwxcorp.com/` | Primary licensing endpoint |
| `https://stats.netwrix.com/` | Statistics endpoint |
| `3.228.101.61` | Netwrix-controlled IP |
| `44.195.254.5` | Netwrix-controlled IP |
| `54.89.181.210` | Netwrix-controlled IP |
| `54.152.202.196` | Netwrix-controlled IP |

> **NOTE:** These IPs are all Netwrix-controlled (subdomains of `netwrix.com` / `nwxcorp.com`). The licensing service may try multiple IPs sequentially — whitelist all of them.

## Verification

After completing the steps above:

1. Browse to `https://license.nwxcorp.com` from the Auditor server — a white/blank page is **expected behavior** (the page is intentionally blank).
2. License sync does not happen in real time; it runs on a periodic schedule. Confirm the **Licenses** page in **Settings** reflects the correct count within a few days.
3. To force an immediate sync, re-run **Call.Home.exe** manually as described in Step 4.
