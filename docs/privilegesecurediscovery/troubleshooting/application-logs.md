---
title: "View application logs"
description: "Find, read, and stream the local service logs and the Fluentd output of Privilege Secure for Discovery to troubleshoot problems."
sidebar_position: 40
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that the API service has no local log file by default and document how to enable it in the container deployment (the former text said it required a Fluentd restart). Evidence: none; docker-stack.prod.single.yml mounts ./data/logs into the api service but no API log file path was found in the code.

TODO: Confirm the current service log file names (svc-expire.log, svc-scan.log, svc-worker.log, and whether svc-sync.log replaces svc-ldap.log). Evidence: docker/node/packages/lib-api-onprem/schemas/serviceSettings.js:29-34 lists svc-expire, svc-scan, svc-worker, svc-worker-secondary, svc-sync; file names not confirmed.

TODO: Confirm that the log level setting is available per service in the UI at 26.09.1. Evidence: none.
:::

Netwrix Privilege Secure for Discovery writes service logs to local files on the host and streams the combined output of all services through Fluentd. Use these logs to troubleshoot a failed scan, a failed access request, or a service that doesn't start. To send the logs to a SIEM, see [Forward logs to syslog servers and SIEM solutions](../integrations/siem/forward-logs.md).

## Services that log locally

By default, the following services write local log files:

- Expire
- Scanner
- Worker
- Sync

The API service, which records the web UI and API activity, doesn't write a local log file by default. To see API events, stream the Fluentd output as described in [Stream the Fluentd output](#stream-the-fluentd-output).

Fluentd is the log collector for all services. Enabling local API logging restarts the Fluentd service. Plan the change for a maintenance window.

## Log file location and rotation

The services write log files to the `data/logs` directory of the deployment. In a container-based deployment, the deployment directory is `/secureone`, so the full path is `/secureone/data/logs`. On a multi-node cluster, each node holds the log files of the services that run on that node.

Log file names start with `svc-`, followed by the service name. Each log file rotates when it reaches 10 MB. The active file keeps its name, and the rotated files get the suffix `.1` through `.5`. The product keeps the active file plus five rotated files for each service.

The following command lists the service log files:

```bash
ls /secureone/data/logs | grep svc
```

The output resembles the following:

```text
svc-expire.log
svc-expire.log.1
svc-expire.log.2
svc-scan.log
svc-scan.log.1
svc-worker.log
svc-worker.log.1
```

## Read a log file

Use `head`, `cat`, or `tail` to read a log file. Each line is one JSON event.

The following command shows the first three lines of the scanner log, numbered:

```bash
head -3 /secureone/data/logs/svc-scan.log | nl
```

The following command shows the last 10 lines of the scanner log. Add `-f` to follow new lines as the service writes them.

```bash
tail /secureone/data/logs/svc-scan.log | nl
```

A scanner event resembles the following:

```json
{"asctime": "2026-09-15 19:58:07,293", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "<scan-id>", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
```

For a description of the fields in each service log, see [Logs](../integrations/siem/logs.md).

## Stream the Fluentd output

Fluentd receives the events of all services, including the API, and writes them to its standard output. To follow the events from any node, run the following command:

```bash
s1 logs
```

Fluentd prints each event as color-coded JSON. The command shows events within about 3 to 5 minutes of when they occur, and it doesn't keep history. Use the local log files to review earlier events.

By default, `s1 logs` follows the output of the last 30 seconds. Use the following options to change this behavior:

| Option | Description |
| --- | --- |
| `--since <time>` | Shows the output since a timestamp such as `2026-09-15T13:23:37` or a relative time such as `42m`. |
| `--tail <number>` | Shows the specified number of lines from the end of the output. |
| `--no-follow` | Prints the output and exits instead of following it. |

The following example shows an event from the analytics engine service:

```text
2026-09-15 19:04:01 +0000 docker.s1_analytics_engine.1.<task-id>: {
"log": "INFO - <message>",
"container_id": "<container-id>",
"container_name": "/s1_analytics_engine.1.<task-id>",
"source": "stdout"
}
```

To find specific events, filter the output with `grep`. For examples, see [Parse end-user activity logs](./parse-end-user-activity-logs.md).

## Fluentd parser warnings

Fluentd can print `pattern not matched with data` warnings (`fluent.warn`) for lines that a service writes to standard error and that aren't JSON, such as a library deprecation notice. These warnings don't indicate a product failure. The original line appears in the `log` field of the warning.
