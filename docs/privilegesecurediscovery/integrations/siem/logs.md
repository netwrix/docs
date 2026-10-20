---
title: "Log format reference"
description: "Learn the structure of Netwrix Privilege Secure for Discovery log messages, the log levels, and the fields that each service writes."
sidebar_position: 20
---

Most log lines that Netwrix Privilege Secure for Discovery writes are JSON objects. The exact structure varies by service. For information about parsing the logs in Splunk, see [Splunk JSON source type](./splunk-json-source-type.md). For additional events, see [Additional log events](./additional-logs.md).

## Event logs and debugging logs

- **Debugging logs:** logs with a `"debugging": true` flag support troubleshooting and can change without notice.
- **Event logs:** all other logs, without the `"debugging"` flag, don't change without notice. Netwrix lists changes to these logs in the release notes. Dynamic data, such as timing and system names, isn't a change.

The following example shows a debugging log.

```json
{
  "asctime": "2026-01-01 00:00:00,000",
  "debugging": true,
  "jobId": "<job-id>"
}
```

## Log levels

Older log messages might not follow this convention.

| Level | Meaning |
| --- | --- |
| Critical | The service is going down. |
| Error | A definite problem that you should report to someone. |
| Warning | Something concerning that might not indicate a problem. For example, most network-related issues are a problem only if they happen frequently. |
| Info | A normal event or information log. |
| Debug | More information than normally needed, usually for troubleshooting. |

## Service-specific log formats

### API log fields

Most log messages from the API include the following fields:

- `req_id`: a unique identifier for an incoming request. All API events that the request generates have the same value.
- `access.user`: properties of the authenticated user that makes the request.
- `client`:
  - `forwardedForIPs`: the IP addresses that acted as proxies for the request.
  - `requestIP`: the IP address of the origin of the request.
  - `userAgent`: the user-agent information.
- `req`:
  - `headers`: the HTTP request headers.
  - `method`: the HTTP method.
  - `url`: the request URL.
  - `params`: the parameters from the body or the URL, if any.
  - `query`: pagination information, if any.
  - `remoteAddress` and `remotePort`: the requester's IP address and port.
- `res`:
  - `statusCode`: the HTTP response status code.
  - `header`: the HTTP response headers.
  - `body`: the response body.

### Worker, scanner, and LDAPSync log fields

All log messages from the worker, scanner, and LDAPSync services include the following fields:

- `asctime`: the date and time that the service emitted the message.
- `levelname`: the log level.

### Expire log fields

Log messages from the expire service include the following fields:

- `asctime`: the date and time that the service emitted the message.
- `levelname`: the log level.
- `message`: a specific message.
- `name`: always `svc-expire`.
- `system`: always `Main`.
- `threadName`: always `MainThread`.

The following example shows two expire log messages.

```json
[
  {
    "asctime": "2026-01-01 00:00:00,000",
    "levelname": "INFO",
    "message": "Checking for pending requests",
    "name": "svc-expire",
    "system": "Main",
    "threadName": "MainThread"
  },
  {
    "asctime": "2026-01-01 00:00:00,010",
    "levelname": "WARNING",
    "message": "Pending requests in queue, sending notification",
    "name": "svc-expire",
    "system": "Main",
    "threadName": "MainThread"
  }
]
```

## Configure log levels

You can set the log level of each service in the interface.
