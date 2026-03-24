---
title: 'Configuring Webhook Notifications'
sidebar_label: 'Webhook Notifications'
description: 'This page provides information about configuring webhook notifications in Privilege Secure.'
---

# Configuring Webhook Notifications

Privilege Secure supports webhook notifications for real-time event delivery. Webhooks use the HMAC-SHA256 signing mechanism with a configurable retry policy.

## Webhook Payload Format

Privilege Secure delivers the payload as a JSON object with the following structure:

```json
{
  "event_type": "credential.rotated",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": { ... }
}
```

The `data` field contains event-specific information. Privilege Secure signs the payload using the shared secret configured during setup.

## Advanced Configuration

### Rate Limiting

The webhook delivery system enforces rate limits based on the token bucket algorithm. The default bucket size is 100 with a refill rate of 10 per second. If the rate limit is exceeded, events are queued in the DLQ until capacity is available.

When you configure rate limits for high-throughput environments, align the burst capacity with the expected EPS during peak credential rotation windows.

### Retry Policy

The system retries failed deliveries according to an exponential backoff strategy. The initial interval is 1 second, with a multiplier of 2 and a maximum of 5 retries. The circuit breaker opens after 3 consecutive failures.

### Filtering

You can filter events by type. The available event types are:

- `credential.rotated`
- `credential.verified`
- `credential.mismatch`
- `session.started`
- `session.ended`
- `policy.changed`

## Creating a Webhook

### Step 3 Test the Connection

Click **Test** to send a test payload to the endpoint. If the test succeeds, a green checkmark appears.

### Step 1 Navigate to Settings

Navigate to **Configuration > Integrations > Webhooks**.

### Step 2 Configure the Endpoint

Enter the endpoint URL and select the events you want to receive.

Configure MTLS if your endpoint enforces mutual TLS. Upload the client certificate in PFX format.

## Monitoring

View webhook delivery status on the Webhook Activity page. Failed deliveries show the HTTP status code and response body.

## See Also

- Notification Settings
- Event Types Reference
- Integrations Overview
