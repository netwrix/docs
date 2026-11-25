---
title: "EPP Client"
sidebar_label: "EPP Client"
description: "Learn how the Netwrix Endpoint Protector Client works on endpoints: architecture, per-user policy caching, and tamper mode."
sidebar_position: 10
---

# EPP Client

The EPP Client is the Netwrix Endpoint Protector agent application that you install on the endpoint operating system. It enforces the Rights and Settings it receives from the EPP Server on the protected endpoints (Windows, macOS, and Linux).

To download and deploy the EPP Client, see [Install the EPP Client](/docs/endpointprotector/install/eppclient/installeppclient.md). To review integrity checks, policy synchronization, and termination events, see [EPP Client Integrity and Events](/docs/endpointprotector/admin/eppclientevents.md).

:::note
Starting with Endpoint Protector Server version 5.8.0.0, an additional security feature is
available to protect the integrity of the EPP Client. This feature, accessible via Device Control on the
Global Settings page, is the Tamper Mode setting. It prevents unauthorized
termination or modification of the EPP Client.
:::

## Lightweight, Cross-Platform Architecture

The EPP Client doesn't require OS kernel-level integration. This reduces the risk of
conflicts with other security software, such as antivirus, endpoint detection and response (EDR), and
host-based intrusion prevention system (HIPS) solutions, and keeps the
EPP Client's footprint on the endpoint to a minimum.

### Kernel Independence

The EPP Client doesn't inject kernel-level drivers or extensions on Windows, macOS, or Linux. This avoids
the stability and compatibility risks associated with kernel-mode components, such as system crashes
from driver conflicts or extension issues after an OS update.

On Linux specifically, the EPP Client doesn't depend on Dynamic Kernel Module Support (DKMS) or require a
rebuild after each kernel update. This removes the operational risk of endpoint protection breaking
after a routine kernel update — a common problem with kernel-module-based agents.

### Cross-OS Feature Parity

The EPP Client maintains feature parity across Windows, macOS, and Linux for Device Control (DC),
Content Aware Protection (CAP), and eDiscovery. The Enforced Encryption Client, which provides FIPS
140-3 validated removable media encryption, offers full parity between Windows and macOS.

Netwrix designs Endpoint Protector for full feature parity across Windows, macOS, and Linux from
initial release, rather than treating Linux as a delayed follow-up to Windows and macOS support. The
only differences between operating systems are in the specific applications that content inspection
covers, since the native applications and file-handling behaviors on each OS are inherently
platform-specific.

### Processor Architecture Support

The EPP Client supports both x86-64 and ARM64 processor architectures across Windows, macOS, and Linux:

- **Windows** — x86-64 and ARM64 (Windows on ARM)
- **macOS** — x86-64 (Intel) and ARM64 (Apple Silicon)
- **Linux** — x86-64 and ARM64 (RHEL 10.x and Ubuntu 26.04)

This gives Netwrix consistent endpoint coverage as organizations adopt ARM-based hardware, such as Apple Silicon Macs, Windows on ARM devices, and ARM-based Linux servers.

## Per-User Policy Caching

On a shared computer, several users log on at different times. Each user can have different Device Control rights and Content Aware Protection policies. Since version 2611, the Netwrix Endpoint Protector Client caches the latest policies and rights for each user who has logged on to a computer. If the computer is offline when a user logs on, the Client enforces that user's cached configuration.

Per-user policy caching requires Endpoint Protector Client version 2611 or later.

### How caching works

Before version 2611, the Client always kept the policies and rights for the current computer and user context. It kept them no matter how long the computer was offline, and through restarts and new logons of the same user. The gap appeared when a different user logged on. The Client then asked the Endpoint Protector Server for the new context. If the computer was offline at that moment, the new user stayed uncovered until the computer reached the server and received the policies.

From version 2611, the Client keeps a cache for each user who has logged on to the computer:

- **While the computer is online**—the Client checks the server for changes when a user logs on and when the user context changes. If the policies or rights changed, the Client updates the cache.
- **When the computer is offline**—the Client can't reach the server when a different user switches or logs on. It loads the latest cached configuration for that user.
- **When the server is reachable again**—the Client refreshes the configuration automatically.

Each cache belongs to one user on one computer. The Client never applies the cached policies of one user to another user.

:::note
The Client can use a cache only for a user who has logged on to the computer at least once while the computer was online. If a user logs on to an offline computer and has no cached configuration, the Client applies the default settings and policies at the computer level. If the computer has none, the Client applies no policies until it first communicates with the server in that user's context.
:::

The Client stores each cache permanently. It persists across restarts and doesn't expire.

:::note
The Client refreshes a user's cache only when that user logs on while the computer is online. If a user doesn't log on to an online computer, the cache keeps the last configuration it received, however old it is. For example, if a user last logged on a year ago, and the Device Control rights or Content Aware Protection policies changed since then, the Client enforces the year-old configuration when that user logs on to an offline computer.
:::

### Supported policies and platforms

| Policy type | Windows | macOS | Linux |
|---|---|---|---|
| Device Control rights | Yes | Yes | No |
| Content Aware Protection policies | Yes | Yes | No |

:::tip
Linux support is planned.
:::

### Example

Two users, Alex and Sam, share a computer in a shared office. Alex logs on while the computer is online, and the Client caches Alex's rights and policies. Later, the computer loses its network connection. Sam logs on and has no cache yet, so Sam follows the default enforcement behavior. When the connection returns, the Client gets Sam's policies from the server and caches them. The next time the computer is offline, both Alex and Sam get their own latest cached configuration when they log on.

For the policies that the cache holds, see [Device Control](/docs/endpointprotector/configuration/dc_module/dcmodule.md) and [Content Aware Protection policies](/docs/endpointprotector/configuration/cap_module/cappolicies.md).

## Tamper mode

Tamper mode provides increased self-protection for the EPP Client. When you disable tamper mode, the EPP Client relies on standard self-protection mechanisms: watchdog, service auto-restart, and Client Integrity checks. When you enable tamper mode, the EPP Client also blocks unauthorized termination and modification.

With tamper mode enabled:

- EPP Client installation folders on Windows and macOS have restricted access.
- The EPP Client prevents unauthorized actors from unloading processes on Windows and daemons on macOS.

To enable tamper mode, see [Client Mode](../dc_module/globalsettings.md#client-mode).

:::note
Requires EPP Client version 2605 hotfix 1 or later (2605.x.2.x) for the full feature set.
:::
