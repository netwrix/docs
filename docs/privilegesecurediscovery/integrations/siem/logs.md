---
title: "Logs"
description: "Logs"
sidebar_position: 40
---

# Logs

Logs

# Logs

## General Log Format

Most log lines are output in JSON format. The exact structure varies by service. See
Service-Specific Log Format section below. See the
[Splunk (JSON) Source Type](/docs/privilegesecurediscovery/integrations/siem/splunkjson.md)
topic for additional information.

### Event Logs vs Debugging Logs

- Debugging logs – logs with a `"debugging": true` flag are meant for troubleshooting and are
  subject to change without notice.

Example

```
{
"asctime": "2020-09-23 16:19:19,622",
"debugging": true,
"jobId": "46b0f845-5a35-4433-b955-195a8a794985",
...
}

```

- Event logs – all other logs without the `"debugging"` flag should _not_ be changed without notice
  (via an entry in the changelog).

**NOTE:** Dynamic data (such as timing, system name, etc...) are not considered changes

### Log Levels

**NOTE:** Older log messages may not follow this format, but are being migrated over.

- Critical – Service is going down (people should be woken up)
- Error – Definitely a problem (should be reported to someone, tests should fail)
- Warning – Something concerning, but may not actually be a problem

    - Example – Most network-related issues are only a problem if they happen frequently

- Info – Normal event/ info log
- Debug – More information than is normally needed, usually only used when troubleshooting

## Service-Specific Log Formats

This sections describes log formats in Privilege Secure.

### API Log Fields

Most log messages emitted by the API will include the following fields:

- req_id — Unique identifier for an incoming request. All API events that are generated as part of
  this request will have the same value.
- access.user — Properties about the authenticated user making the request
- client

- forwardedForIPs — List of IPs that have acted as proxies for this request
- requestIP — IP for the origin of the request
- userAgent — User-agent information

- req

- headers — HTTP request headers
- method — HTTP method
- url — request URL
- params — Params, if any from the body or the URL
- query — Pagination information, if any
- remoteAddress/remotePort — Requestor IP information

- res

- statusCode — HTTP response status code
- header — HTTP response headers
- body — Response body

### Worker Logs

All log messages will include the following fields:

- asctime – The date/ time the log message was emitted
- levelname – The level name (see above)

### Scanner Logs

All log messages will include the following fields:

- asctime – The date/ time the log message was emitted
- levelname – The level name (see above)

### LDAPSync Logs

All log messages will include the following fields:

- asctime – The date/ time the log message was emitted
- levelname – The level name (see above)

### Expire Logs

Fields

- asctime – The date/ time the log message was emitted
- levelname – The level name (see above)
- message – A specific message
- name – always svc-expire
- system – always Main
- threadName – always Main

Example

```
{
"asctime": "2000-01-01 00:00:00,000",
"levelname": "INFO",
"message": "Checking for pending requests",
 "name": "svc-expire",
"system": "Main",
 "threadName": "MainThread"
 },
 {
"asctime": "2000-01-01 00:00:00,010",
"levelname": "WARNING",
 "message": "Pending requests in queue, sending notification",
 "name": "svc-expire",
 "system": "Main",
"threadName": "MainThread"
}
```

## Logging Configuration

Privilege Secure log levels can be set in the UI for each service.
