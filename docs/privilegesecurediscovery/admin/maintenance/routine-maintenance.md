---
title: "Perform routine maintenance"
description: "Check services, disk space, protection coverage, logs, and database health at regular intervals on a container-based Privilege Secure for Discovery deployment."
sidebar_position: 10
---

After you deploy Netwrix Privilege Secure for Discovery, perform the following tasks at regular intervals. The suggested frequencies are guidelines, not requirements.

| Task | Suggested frequency |
| --- | --- |
| [Check service status](#check-service-status) | Daily |
| [Check disk space](#check-disk-space) | Weekly |
| [Review protection and persistence](#review-protection-and-persistence) | Weekly |
| [Review logs](#review-logs) | Weekly |
| [Check database health](#check-database-health) | Weekly |
| [Plan for updates](#plan-for-updates) | At least quarterly |

The commands on this page use the `s1` helper tool. Run `s1` without `sudo`, because the launcher calls `sudo` itself. To install the tool, see [Install the s1 CLI helper utility](../../install/s1-cli-helper.md).

## Check service status

1. List the status of the services by running the following command on a manager node:

   ```bash
   s1 status
   ```

   The command lists every service in the Docker stack with its replica count, current and desired state, node, version, and ports. Each service shows its running replicas over its desired replicas. Most services show `1/1`. By default, the `windows-bridge` service runs six replicas and shows `6/6`.

1. List the nodes by running the following command:

   ```bash
   s1 nodes
   ```

1. Check the **MANAGER STATUS** column. A single node shows `Leader`. In a cluster, one node shows `Leader` and the others show `Reachable`. The leader is the primary manager node. If the leader fails, the remaining managers elect a new one. In a three-node cluster, one node can fail without a visible effect on users.

Investigate any service that doesn't show its full replica count, and any node that isn't `Ready`. For the steps to find the cause, see [Inspect and troubleshoot the deployment](../../troubleshooting/inspect-and-troubleshoot-the-deployment.md).

## Check disk space

The deployment stores its data under `/secureone/data` on each node. The `db` directory holds the database, and the `logs` directory holds the local service log files. Service log files rotate at 10 MB and keep five older files for each service, but the database grows with your inventory and history.

1. Check the free disk space on the node by running the following command:

   ```bash
   df -h /secureone
   ```

1. Investigate any file system that is more than 80 percent full to find the cause.
1. If you can't reduce the usage, add disk space.

## Review protection and persistence

- Confirm that the systems you intend to protect are in Protect Mode. In **Management** > **Systems**, select the **Protect Disabled** view and review the list. You can also generate a report with the Quickstart tool. See [Report and update systems](../../configuration/bulk-onboarding/report-and-update-systems.md).
- Review persistent access. Keep persistent access to a minimum, limited to service accounts. If a user account is persistent and must stay that way, convert it to a service account. See [Remove persistence on machines](../../configuration/domains-and-ad/remove-persistence.md).

## Review logs

A security information and event management (SIEM) solution is the best place to report issues that the product logs capture. To send the logs to a SIEM, see [Forward logs to syslog servers and SIEM solutions](../../integrations/siem/forward-logs.md).

- For Splunk query examples, see [Splunk and SIEM queries](../../integrations/siem/splunk-and-siem-queries.md).
- Review the policy changes with the search in [Find system policy changes](../../integrations/siem/splunk-and-siem-queries.md#find-system-policy-changes) for any removal of Protect Mode.
- Review the search in [Measure JIT access time](../../integrations/siem/splunk-and-siem-queries.md#measure-jit-access-time) to find out whether users experience slow privilege elevation.

Without a SIEM, read the local service log files and the Fluentd output. See [View application logs](../../troubleshooting/application-logs.md).

## Check database health

Run the following command to check the status of the database:

```bash
s1 database-status
```

The first two lines show the active database service and the MongoDB version. For example, on a single-node deployment, the output resembles the following:

```text
Active database service: db
MongoDB version: 8.0.<patch>
Running in single-node mode
No replicaset to query.
```

On a three-node deployment, the output continues with a **ReplicaSet Info** section. For each member, it shows the member name, its state in `stateStr`, and the last heartbeat. A **Slave Replication Info** section follows with the replication lag of each secondary member.

On a three-node deployment, check the following:

- One member is `PRIMARY` and the other two are `SECONDARY`.
- Each member reports a recent heartbeat and no heartbeat message.
- The replication lag between the members is little or none. If a member stays behind, contact Netwrix Support.

To run your own queries, open a database shell. See [Open the MongoDB shell](./open-the-mongodb-shell.md).

## Plan for updates

Review updates to the product version and to the operating system at least quarterly. You can apply operating system patches monthly. Contact Netwrix Support before an update to confirm that no known issues affect your version.

For information about how to pull images from the private registry during deployment and upgrades, see [Set up the Docker credential helper](../../install/docker-credentials-helper.md).

## Back up and recover

For what to back up and how to recover a deployment, see [Protect and recover your deployment](./protect-and-recover-your-deployment.md).
