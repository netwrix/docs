---
title: "Log format reference"
description: "Learn the structure of Netwrix Privilege Secure for Discovery log messages, the log levels, the fields each service writes, and how to change a service's log level."
sidebar_position: 20
---

Netwrix Privilege Secure for Discovery writes each log message as one JSON object per line. The fields depend on the service: the API service (the web and API container) uses one format, and the Python-based services (Scanner, Worker, Expire, directory sync, and the internal API) use another. To parse the messages in Splunk, see [Splunk JSON source type](./splunk-json-source-type.md). For the audit events that the API writes, see [Audit log event reference](./additional-logs.md). To send the messages to a SIEM, see [Forward logs to a syslog server or SIEM](./forward-logs.md).

## Event logs and debugging logs

The product writes two kinds of messages:

- **Event logs** record what users and the product do, such as a sign-in or an access grant. They don't carry a `debugging` field.
- **Debugging logs** carry `"debugging": true`. They support troubleshooting, and their text and fields can change without notice. Don't build alerts on them.

The following example shows a debugging log from the internal API service.

```json
{
  "asctime": "2026-01-01 00:00:00,000",
  "debugging": true,
  "jobId": "<job-id>",
  "levelname": "INFO",
  "message": "job ended",
  "name": "debug-visible.thread_globals.job",
  "service": "internal_api",
  "threadName": "Thread-1"
}
```

## Log levels

The Python-based services write the level name in `levelname`. The API service writes a numeric `level` in the Bunyan format.

| Level | API `level` value | Meaning |
| --- | --- | --- |
| `CRITICAL` | 60 | The service is going down. |
| `ERROR` | 50 | A definite problem that you should investigate. |
| `WARNING` | 40 | Something concerning that might not indicate a problem. Most network issues matter only when they happen often. |
| `INFO` | 30 | A normal event or information message. |
| `DEBUG` | 20 | More detail than you normally need, for troubleshooting. |

Some older messages don't follow this convention.

## API log fields

The API service writes Bunyan-format JSON. Most messages include the following fields:

| Field | Description |
| --- | --- |
| `name` | Always `api`. |
| `hostname` | The container ID of the API service. |
| `pid` | The process ID. |
| `level` | The numeric log level. |
| `time` | The UTC timestamp of the message. |
| `req_id` | A unique identifier for the incoming request. Every message that the request generates has the same value. |
| `msg` | The text of the request-finish message. Other events leave this field empty and put their text in `message`. |
| `message` | The text of an event message, such as `Successful authentication by: <user>`. |
| `access` | The authenticated caller. It contains `type` (`token` or `other`), `tokenId`, `tokenType`, and `user` (`_id`, `domain_netbios`, `objectSid`, and `sAMAccountName`). |
| `client` | Where the request came from: `requestIP`, `forwardedForIps` (the `X-Forwarded-For` addresses, as the client sent them), and `userAgent` (`browser`, `os`, `platform`, and `version`). |
| `req` | The request: `method`, `url`, `headers`, `query`, `params`, `remoteAddress`, and `remotePort`. The product replaces the `Authorization`, `Cookie`, and token headers with `null`. |
| `res` | The response: `statusCode` and `header`. The product adds `body` only when the status code isn't 200, 204, or 301. |
| `duration` | The request time in milliseconds, on the request-finish message. |
| `targetSystem` | The computer that the request acts on: `_id`, `cn`, `distinguishedName`, `domain_netbios`, and, when known, `operatingSystem` and `policy`. |
| `authInfo` | A list of authentication steps, on sign-in and token messages. |

Every request writes a request-finish message with `"msg": "request finish"`, even when the request writes no other message. Responses in the 400 or 500 range usually also show an error message in the interface. For examples, see [Audit log event reference](./additional-logs.md).

## Python service log fields

The Scanner, Worker, Secondary Worker, Expire, directory sync, and internal API services write the following fields:

| Field | Description |
| --- | --- |
| `asctime` | The date and time that the service wrote the message, in the time zone of the service container. |
| `levelname` | The log level name. |
| `name` | The name of the logger. For most services this value is `remediant`. Expire writes `svc-expire`, and directory sync writes `svc-ldap`. |
| `message` | The message text. |
| `threadName` | The thread that wrote the message. |
| `service` | The service name, on Scanner, Worker, Secondary Worker, and the internal API. |
| `system` | A legacy field that holds the system name or `Main`. It's inconsistent across messages, so use `targetSystem` when it's present. |
| `jobId`, `targetSystem`, `targetUser`, `requestedByUser`, `queue`, `server`, `ldapName` | Context for the job that wrote the message, when the message belongs to a job. |
| `scanId` | The identifier of the scan run, on Scanner. |
| `debugging` | `true` on debugging logs. |

The Expire service writes a fixed set of fields: `asctime`, `levelname`, `message`, `name` (always `svc-expire`), `system` (always `Main`), and `threadName` (always `MainThread`). The following example shows two Expire messages.

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

When Expire finds no session to end, it writes the warning `No new requests` instead. The services print each message to standard error, and Docker passes it to Fluentd. Scanner, Worker, Secondary Worker, and Expire also write to rotating files. To find those files, see [View application logs](../../troubleshooting/application-logs.md).

## Configure log levels

Each service logs messages at or above its log level. To change the level:

1. Select **Configure** > **Services**.
2. In the **Service Settings** section, find the service.
3. Select the **Log Level** value, and then choose `DEBUG`, `INFO`, `WARN`, `ERROR`, or `CRITICAL`.
4. Restart the service. The interface reminds you that a change takes effect only after a restart.

![The Service Settings section on the Configure > Services page, with the Log Level value for the Analytics and Internal Python API services](/images/privilegesecurediscovery/integrations/service-settings-log-level.webp)

The **Web/API** group lists only the token expiration setting, so you can't change the API log level here. Use `DEBUG` only while you troubleshoot, because it increases the log volume.
