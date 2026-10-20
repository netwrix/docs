---
title: "Parse end-user activity logs"
description: "Find sign-in, system search, access grant, and access denied events in the API log by filtering the Fluentd output or local log files."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the API log message strings still match at 26.09.1: "Successful authentication by", "Invalid username/password", "Admin list lookup", "Successfully added user", "User does not have access to this resource". Evidence: none; the strings came from 2020-era samples.

TODO: Confirm where the local API log file is written, how to enable it in the container deployment, and its file name pattern (the former text used `svc-api.<date>.log` in an api subdirectory of the log directory). Evidence: none.

TODO: Re-capture the three end-user message screenshots with the current UI and remove any user or domain names. Evidence: /images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip0.webp, _mceclip1.webp, _mceclip2.webp.
:::

The API service records every user action in the web UI as a series of JSON events. This page shows how to find five common end-user events: a successful sign-in, a failed sign-in, a system search, a granted access request, and a denied access request. For the fields that each API event contains, see [Logs](../integrations/siem/logs.md).

A single user action can produce 3 to 30 or more events. The examples show only the event that identifies the action. In the examples, the user is `jsmith` and the target system is `server01.example.com`.

## Choose how to view the events

You can view the API events in two ways:

- **Fluentd output.** The default method. Run `s1 logs` from any node. This method shows only recent events, so start the command before you repeat the action. For details, see [View application logs](./application-logs.md).
- **Local log file.** The API service doesn't write a local log file by default. If you enable local API logging, filter the API log file in the log directory (`/secureone/data/logs`) with `tail` and `grep`.

The Fluentd service runs on one node. To find it, open **Configure** > **Services** in the UI, or run `s1 status` on any node.

## Find a successful sign-in

The sign-in event contains the text `Successful authentication by` and the user name.

```bash
s1 logs --tail 50 | grep "Successful authentication by"
```

For a local log file, replace `<api-log-file>` with the name of the log file that covers the time of the event:

```bash
tail -f <api-log-file> | grep -i "Successful authentication by"
```

The event resembles the following:

```text
2026-09-15 15:01:56 +0000 docker.s1_api.1.<task-id>: { "source": "stdout", "log": "{\"name\":\"api\",\"hostname\":\"<container-id>\",\"req_id\":\"<request-id>\",\"level\":30,\"message\":\"Successful authentication by: jsmith\",\"time\":\"2026-09-15T15:01:56.227Z\"}" }
```

## Find a failed sign-in

A sign-in with a wrong password shows an error in the UI.

![Sign-in page with an invalid user name or password error](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip0.webp)

The event contains the text `Invalid username/password`:

```bash
s1 logs --tail 50 | grep -i "Invalid username/password"
```

For a local log file:

```bash
tail -f <api-log-file> | grep -i "Invalid username/password"
```

## Find a system search

A search for a system on the **Grant Access** page produces an `Admin list lookup` event that includes the system name:

```bash
s1 logs --tail 50 | grep -i "Admin list lookup"
```

For a local log file:

```bash
tail -f <api-log-file> | grep -i "Admin list lookup"
```

The event resembles the following:

```text
2026-09-15 15:56:40 +0000 docker.s1_api.1.<task-id>: { "source": "stdout", "log": "{\"name\":\"api\",\"req_id\":\"<request-id>\",\"level\":30,\"message\":\"Admin list lookup\",\"system\":\"server01.example.com\",\"time\":\"2026-09-15T15:56:40.000Z\"}" }
```

## Find a granted access request

When a user receives access to a system, the UI shows a confirmation message. The domain and user name in the message are specific to your environment.

![Confirmation message after a user is granted access to a system](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip1.webp)

The event contains the text `Successfully added user`:

```bash
s1 logs --tail 50 | grep -i "Successfully added user"
```

For a local log file:

```bash
tail -f <api-log-file> | grep -i "Successfully added user"
```

## Find a denied access request

When a user requests access to a system that the user has no permission to access, the UI shows a 403 Forbidden error.

![Forbidden error that states the user doesn't have access to this resource](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip2.webp)

The event contains the HTTP status 403 and the phrase `User does not have access to this resource`. You can also search for the word `Forbidden`.

```bash
s1 logs --tail 50 | grep -i "User does not have access to this resource"
```

For a local log file:

```bash
tail -f <api-log-file> | grep -i "User does not have access to this resource"
```

The `res` object of the event contains the response with `"statusCode":403`.
