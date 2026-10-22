---
title: "View application logs"
description: "Find, read, and stream the local service logs and the Fluentd output of Privilege Secure for Discovery to troubleshoot scans, access requests, and services."
sidebar_position: 40
---

Netwrix Privilege Secure for Discovery writes some service logs to local files on the host and sends the output of most services to Fluentd, which prints it. Use these logs to troubleshoot a failed scan, a failed access request, or a service that doesn't start. To send the logs to a SIEM, see [Forward logs to syslog servers and SIEM solutions](../integrations/siem/forward-logs.md).

## Choose where to look

| Source | Services | How to read it |
| --- | --- | --- |
| Local log files | Expire, Scanner, Worker, and Secondary Worker | Read the files in `/secureone/data/logs` on the node that runs the service. |
| Fluentd output | All services except the database, the message queue, and Fluentd itself | Run `s1 logs`. |
| Docker service logs | The database and message queue | Run `docker service logs <stack>_<service>`, for example `docker service logs s1_db`. |

The web and API service doesn't write a local log file. To see its events, stream the Fluentd output. The directory sync service (`ldapsync`), which synchronizes your domains and Microsoft Entra ID tenants, doesn't write a local log file either, so use the Fluentd output for it too.

## Set the log level

Each service logs events at or above its log level. The default level is `INFO`. To change it, select **Configure** > **Services**. In the **Service Settings** section, find the service and select the value of **Log Level**. Choose `DEBUG`, `INFO`, `WARN`, `ERROR`, or `CRITICAL`. The Scanner and Expire services read the setting each time they start a run, so a change applies within the run interval of the service. Use `DEBUG` only while you troubleshoot, because it increases the log volume.

## Find the local log files

The services write log files to the `data/logs` directory of the deployment. In a container-based deployment, the deployment directory is `/secureone`, so the full path is `/secureone/data/logs`. On a multi-node cluster, each node holds the log files of the services that run on that node.

Log file names start with `svc-`, followed by the service name:

| Service | Log file |
| --- | --- |
| Expire | `svc-expire.log` |
| Scanner | `svc-scan.log` |
| Worker | `svc-worker.log` |
| Secondary Worker | `svc-worker-secondary.log` |

Each log file rotates when it reaches 10 MB. The active file keeps its name, and the rotated files get the suffix `.1` through `.5`. The product keeps the active file plus five rotated files for each service. A service creates its file when it first logs an event, so a file can be missing on a quiet system.

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

Fluentd receives the events of the services that use the Docker `fluentd` logging driver and prints them as color-coded JSON. The command reads the Docker service logs of the `fluentd` service, so it works only on a swarm manager node. Run it without `sudo`, because the launcher calls `sudo` itself. To follow the events, run the following command:

```bash
s1 logs
```

By default, `s1 logs` shows the output of the last 30 seconds and keeps following new lines. Press Ctrl+C to stop. Docker keeps the Fluentd service output in up to three files of 1 GB each, so you can read back further than 30 seconds. Use the following options to change the behavior:

| Option | Description |
| --- | --- |
| `--since <time>` | Shows the output since a timestamp such as `2026-09-15T13:23:37` or a relative time such as `42m`. |
| `--tail <number>` | Shows the specified number of lines from the end of the output. The default is `all`. |
| `--no-follow` | Prints the output and exits instead of following it. |

For example, to print the last 200 lines from the past hour and exit:

```bash
s1 logs --since 1h --tail 200 --no-follow
```

Each entry starts with the Docker tag of the service task, followed by the record. The `container_name` and `source` fields identify where the event came from. The following example shows an event from the analytics engine service:

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

Fluentd tries to parse the `log` field of each record as JSON. When a service writes a line that isn't JSON, such as a library deprecation notice, Fluentd prints a `pattern not matched with data` warning. These warnings don't indicate a product failure. The original line appears in the `log` field of the warning.
