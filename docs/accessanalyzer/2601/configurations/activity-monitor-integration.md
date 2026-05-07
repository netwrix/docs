---
title: "Activity Monitor Integration"
description: "Configure Netwrix Activity Monitor to stream real-time file system, SharePoint, and Copilot activity events into Access Analyzer"
sidebar_position: 85
---

# Activity Monitor Integration

## Overview

Access Analyzer integrates with **Netwrix Activity Monitor (NAM)** to ingest real-time file system, SharePoint Online, and Microsoft 365 Copilot activity events. Once you configure the integration, these events populate the activity reports in AA2601 and power anomaly detection and sensitive data activity tracking.

The integration works through a built-in TCP listener that NAM agents connect to over a secure, mutually authenticated TLS 1.3 channel. Events stream continuously from NAM agents into AA2601's analytics database (ClickHouse), where they become available in reports.

### Architecture

```
NAM Agent(s)
    │
    │  TLS 1.3 (default port 4504)
    │  mTLS — client certificate required
    ▼
AA2601 NAM Listener (core-api)
    │
    │  Validated & buffered in memory
    ▼
ClickHouse (analytics database)
    │
    ▼
AA2601 Reports (file system activity, SharePoint, Copilot)
```

### Event Types

| Event Type | Content |
| --- | --- |
| **File System Events** | SMB/CIFS file access, reads, writes, renames, permission changes |
| **SharePoint Online Events** | SharePoint file and folder activity |
| **Copilot Events** | Microsoft 365 Copilot interactions — accessed resources |

### Security Model

Authentication uses **mutual TLS with SPKI hash pinning**:

- AA2601 requires TLS 1.3 and rejects older protocol versions.
- Both products perform mutual authentication by matching hashes of each other's certificate public key (SPKI hash) against a persistent allowlist in their configuration.

SPKI hashes survive certificate renewal as long as the key pair is unchanged. Re-enroll only when an agent generates a new key pair.

---

## Prerequisites

Before connecting NAM agents to AA2601:

- **Netwrix Activity Monitor** must be installed and monitoring the hosts or services for which you want real-time activity in AA2601. Confirm monitoring is active before adding the AA2601 output.
- **TLS certificates** must be provisioned on the AA2601 server. The server certificate and private key paths are set via the environment variables `SYSLOG_TLS_CERT_PATH` and `SYSLOG_TLS_KEY_PATH`. Contact your infrastructure team if the listener isn't starting.
- **Network connectivity** must allow NAM agents to reach AA2601 on TCP port 4504 (default) through any firewalls or network policies.
- You must have **Administrator** access to AA2601 to generate enrollment tokens and view enrolled agents.

:::note
Activity data flows from NAM to AA2601 — AA2601 doesn't initiate the connection. Ensure firewalls allow outbound traffic from each NAM agent host to the AA2601 server on the configured listener port.
:::

---

## Setup

### Step 1 — Verify the Listener Is Running

The listener starts automatically when AA2601 starts, provided TLS certificates are present and the `enable_activitymonitor_ingestion` feature flag is enabled (it is by default).

To confirm it is active:

1. Go to **Configuration > Application Settings > Feature Flags**.
2. Verify `enable_activitymonitor_ingestion` is set to `true`.

If the listener isn't running, check the application logs for the reason — missing certificate, disabled feature flag, or a startup error.

### Step 2 — Generate an Enrollment Token

1. Go to **Configuration > Application Settings**.
2. Scroll to the **Activity Monitor** section.
3. Under **Enrollment Token**, click **Generate Token**.
4. Copy the token using the clipboard icon.

:::note
Tokens expire after **1 hour**. Generating a new token immediately invalidates any previously issued token. A single token can enroll multiple agents and outputs simultaneously — plan your enrollment session and generate the token immediately before you begin.
:::

### Step 3 — Add the AA2601 Output in Netwrix Activity Monitor

Add an AA2601 output to each monitored host or service in NAM you want to stream into AA2601.

:::note
The following steps describe the general configuration flow. Exact menu labels and field names in the NAM console may differ depending on your NAM version. Verify the steps against the NAM documentation for your installed version.
:::

1. Open the Netwrix Activity Monitor console.
2. Navigate to the monitored host or service.
3. Add a new output and select the **Netwrix Access Analyzer 26** output type.
4. Enter the hostname or IP address of your AA2601 instance and the listener port (default: 4504).
5. Enter the enrollment token you generated in Step 2 and select **Enroll**. Ensure the connection is successful.
6. Save the output configuration.
7. Repeat for each monitored host or service.

:::note
You can add an output in bulk by selecting multiple hosts/services and selecting **Add Output**. 
:::

The NAM agent connects to AA2601, validates AA2601's certificate by comparing it to the hash embedded in the enrollment token, 
presents its client certificate, and sends an enrollment request. AA2601 validates the token, adds the agent's SPKI hash to the trusted agents allowlist, and confirms enrollment. 
The NAM agent also adds AA2601's SPKI hash to the allowlist.
After that, the agent reconnects and begins streaming events. You no longer need the enrollment token unless the agent generates a new key pair.

### Step 4 — Verify Enrollment

After enrollment, the agent appears in AA2601's trusted agents list. You can view enrolled agents via the API:

```
GET /api/v1/nam-listener/agents
```

Each entry shows the agent's hostname, source IP, and enrollment timestamp.

To confirm AA2601 is receiving events:

1. Log in to Access Analyzer.
2. Navigate to the resource or host that NAM is monitoring.
3. Review the activity data for recent file events.

If no events appear after a few minutes, see [Troubleshooting](#troubleshooting).

---

## Application Settings Reference

All Activity Monitor settings are at **Configuration > Application Settings > Activity Monitor**. Settings take effect immediately when you save them — no restart required. Each setting shows its current value, default, and an **Overridden** badge when changed from the default. Use the reset (↺) button to restore an individual setting to its default.

### Connection Settings

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| `activitymonitor_tcp_port` | 4504 | 1 – 65535 | TCP port the listener binds to. Must match the port configured in NAM agent settings. |
| `activitymonitor_max_connections` | 100 | 10 – 1000 | Maximum simultaneous agent connections. AA2601 rejects connections beyond this limit at the TCP layer. |
| `activitymonitor_connection_timeout` | 900 | 5 – 3600 | Seconds of inactivity before AA2601 drops an idle agent connection. Set this to be comfortably longer than your NAM polling interval. |

### Performance and Throughput Settings

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| `activitymonitor_reactor_threads` | 0 (auto) | 0 – 32 | Async input/output threads for handling connections. `0` automatically uses one thread per CPU core — correct for almost all deployments. |
| `activitymonitor_buffer_threads` | 8 | 1 – 16 | Writer threads that drain the in-memory event buffer to ClickHouse. More threads help sustain high write rates. |
| `activitymonitor_buffer_max_size` | 10,000 | 1,000 – 500,000 | Maximum events held in memory at once. When full, AA2601 holds new arrivals at the TCP layer (backpressure to agents) rather than dropping them. |
| `activitymonitor_batch_size` | 100 | 10 – 1,000 | Events grouped per internal processing batch. |
| `activitymonitor_batch_interval_seconds` | 10 | 1 – 60 | Maximum seconds between batch flushes to ClickHouse. The primary control for **data freshness** — lower values mean events appear in reports sooner, at the cost of more frequent small writes. |
| `activitymonitor_clickhouse_batch_size` | 10,000 | 1,000 – 100,000 | Events per ClickHouse write operation. Larger batches are more efficient but increase memory usage during the write. |
| `activitymonitor_max_concurrent_jobs` | 3 | 1 – 10 | Maximum parallel batch processing jobs. |

### Security and Enrollment Settings

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| `activitymonitor_enrollment_first_message_timeout_seconds` | 10 | 5 – 60 | Seconds AA2601 waits for the first message after a new connection is established. AA2601 closes connections that send nothing within this window. |
| `activitymonitor_enrollment_ban_duration_seconds` | 10 | 5 – 300 | Seconds AA2601 blocks a source IP after a protocol violation (invalid enrollment code, malformed JSON, or unexpected message format). |
| `activitymonitor_max_message_size` | 16,777,216 (16 MB) | 65,536 – 67,108,864 | Maximum byte size of a single message from a NAM agent. If a message exceeds this size without a line delimiter, AA2601 drops the connection. |

### Shutdown Settings

| Setting | Default | Range | Description |
| --- | --- | --- | --- |
| `activitymonitor_shutdown_drain_timeout_seconds` | 300 | 10 – 3,600 | Maximum seconds AA2601 waits for buffered events to finish writing to ClickHouse during a graceful shutdown. After this window, AA2601 force-terminates remaining writer threads and loses any events still in the buffer. |

---

## Best Practices

### Port Configuration

Use the default port (4504) unless you have a conflict. If you must change it:

- Update NAM agent configuration to match **before** saving the new port in AA2601.
- Update firewall rules and network policies before making the change.
- Changing the port requires all connected agents to reconnect.

### TLS Certificate Management

- **Monitor certificate expiration.** AA2601 logs a warning when the server certificate is within 30 days of expiry, and again within 7 days. Treat the 30-day warning as actionable.
- **NAM agents use self-signed certificates by default** — this is expected and supported. If you replace them with CA-signed certificates, re-enroll the agent.
- **Key pair rotation requires re-enrollment.** If a NAM agent generates a new key pair, its previous SPKI hash entry will no longer match. Re-enroll the agent using a new enrollment token. Remove the stale entry via the API: `DELETE /api/v1/nam-listener/agents/:spki_hash`.

### Enrollment Token Practices

- **Generate the token immediately before enrollment.** The 1-hour window is intentionally short.
- **Don't share tokens in email or chat.** Treat enrollment tokens like temporary passwords — use a secure transfer method.
- **For bulk enrollment**, all agents can use the same token as long as they enroll within the 1-hour window.
- **Revoke stale entries** when decommissioning a NAM agent host. An enrolled agent with a stale SPKI entry poses no security risk, but maintaining a clean allowlist helps with auditing.

### Performance Tuning

Start with defaults. Only adjust if you observe specific symptoms.

**If events appear in reports with high latency (> 30 seconds):**
- Lower `activitymonitor_batch_interval_seconds` (for example, from 10 to 5).
- Check `activitymonitor_buffer_max_size` — if the buffer is routinely full, ClickHouse writes may be the bottleneck.

**If you have a high-volume environment (many agents, high event rate):**
- Increase `activitymonitor_buffer_max_size` to 50,000 – 100,000 to absorb burst traffic.
- Increase `activitymonitor_clickhouse_batch_size` to 25,000 – 50,000 to reduce write frequency.
- Increase `activitymonitor_buffer_threads` to 12 – 16 to parallelize writes.
- Leave `activitymonitor_reactor_threads` at `0` (auto).

**If you have many agents connecting simultaneously:**
- Raise `activitymonitor_max_connections` to at least the number of expected concurrent agents, with 20–30% headroom.

**Don't lower `activitymonitor_connection_timeout` below your NAM polling interval.** If NAM sends events every 5 minutes and the timeout is less than 300 seconds, AA2601 drops agents between batches and forces them to reconnect constantly. The default of 900 seconds provides safe headroom for most polling configurations.

### Kubernetes Shutdown Considerations

The `activitymonitor_shutdown_drain_timeout_seconds` setting (default: 300 seconds) controls how long AA2601 waits during graceful shutdown to flush buffered events to ClickHouse.

In Kubernetes deployments, the pod's `terminationGracePeriodSeconds` must be greater than this value plus a small buffer for the rest of the shutdown sequence. If `terminationGracePeriodSeconds` is less than the drain timeout, Kubernetes will force-kill the pod before drain completes, losing any buffered events.

### Disabling the Integration

To temporarily disable ingestion without removing agent configurations:

1. Go to **Configuration > Application Settings > Feature Flags**.
2. Set `enable_activitymonitor_ingestion` to `false` and save.

The listener stops accepting new connections. Existing agents will see their connections close and queue events locally per NAM's own buffering. When you re-enable ingestion, agents reconnect and resume streaming.

:::note
Disabling and re-enabling doesn't cause data loss for events that occurred while disabled, as long as NAM agents have sufficient local buffering.
:::

---

## Troubleshooting

### The listener isn't starting

- Verify `enable_activitymonitor_ingestion` is `true` in **Configuration > Application Settings > Feature Flags**.
- Verify the TLS certificate environment variables (`SYSLOG_TLS_CERT_PATH`, `SYSLOG_TLS_KEY_PATH`) are set and the files are readable. The application logs report a specific error if a certificate is missing, unreadable, or expired.
- Verify another process isn't already using the configured port.

The listener retries startup up to 5 times with exponential backoff (starting at 0.5s, capping at 30s). Check logs for `"Failed to start NAM Listener"` messages with retry counts.

### A NAM agent can't connect

- Verify network connectivity from the agent host to AA2601 on the configured port (default: 4504).
- Verify the agent is configured with the correct hostname and port. The port in NAM agent configuration must match `activitymonitor_tcp_port`.
- Verify the agent has a valid TLS client certificate. AA2601 rejects connections without a client certificate and temporarily bans the source IP.

### An agent connected but isn't sending data

- Verify the agent enrolled successfully. AA2601 silently rejects data connections from agents that have not completed enrollment because their SPKI hash isn't in the allowlist. Re-enroll using a new token.
- Verify `activitymonitor_connection_timeout` isn't shorter than the agent's event polling interval. If agents idle longer than the timeout, AA2601 drops them between batches and they must reconnect.

### Events aren't appearing in reports

- Verify ClickHouse is healthy and reachable from AA2601. Writer threads log errors if ClickHouse writes fail.
- Check `activitymonitor_batch_interval_seconds` — at the default of 10 seconds, there is a short delay between an event occurring and appearing in a report.
- Check application logs for buffer queue depth statistics. If the buffer is full, ClickHouse writes may be lagging — consider increasing `activitymonitor_buffer_max_size` or `activitymonitor_clickhouse_batch_size`.

### An agent keeps getting banned

Protocol violations trigger repeated IP bans (governed by `activitymonitor_enrollment_ban_duration_seconds`): invalid enrollment codes, malformed JSON, or unexpected message formats.

- Verify the agent is sending the correct enrollment payload. The agent should be a supported Netwrix Activity Monitor version.
- Verify the enrollment token has not expired (1-hour TTL). An expired token causes an invalid-code rejection and a short ban. Generate a new token and retry.

Bans are short (default: 10 seconds) and reset on pod restart. For persistent issues, check NAM agent logs for the specific error response AA2601 sends during enrollment.

### Enrolled agents list has stale entries

Decommissioned or reinstalled agents may leave stale entries in the allowlist. These are harmless — the old SPKI hash will never match a new agent's certificate. Remove them using the API:

```
DELETE /api/v1/nam-listener/agents/:spki_hash
```

List all enrolled agents at:

```
GET /api/v1/nam-listener/agents
```

---

## Settings Quick Reference

| Scenario | Setting | Recommended Change |
| --- | --- | --- |
| High event volume | `activitymonitor_buffer_max_size` | Increase to 50,000 – 100,000 |
| High event volume | `activitymonitor_clickhouse_batch_size` | Increase to 25,000 – 50,000 |
| High event volume | `activitymonitor_buffer_threads` | Increase to 12 – 16 |
| Many agents (> 100) | `activitymonitor_max_connections` | Set to agent count + 30% headroom |
| Improve report freshness | `activitymonitor_batch_interval_seconds` | Decrease to 3 – 5 |
| Long agent idle intervals | `activitymonitor_connection_timeout` | Increase to 1800 – 3600 |
| Kubernetes slow shutdown | `activitymonitor_shutdown_drain_timeout_seconds` | Decrease; align `terminationGracePeriodSeconds` |
| Maintenance window | `enable_activitymonitor_ingestion` | Set to `false`, re-enable when done |
| Port conflict | `activitymonitor_tcp_port` | Change to available port; update NAM agents and firewall rules first |

---

## Related Resources

- [Netwrix Activity Monitor Documentation](https://docs.netwrix.com/docs/activitymonitor)
- [Hardware and System Requirements](/docs/accessanalyzer/2601/install/system/requirements)
- [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network)
