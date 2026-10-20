---
title: "Perform routine maintenance"
description: "Check services, disk space, protection coverage, logs, and database health at regular intervals on a container-based deployment."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the expected output of `s1 database-status` on a three-node deployment and on a single-node deployment at 26.09.1, including the replication info section. Evidence: docker/s1tool/src/s1.py (database_status command, tag v26.09.1-rc).

TODO: Confirm the recommended disk-usage threshold and which directories under /secureone grow over time (for example data/logs). Evidence: none.
:::

After you deploy Netwrix Privilege Secure for Discovery, perform the following tasks at regular intervals. The suggested frequencies are guidelines, not requirements.

| Task | Suggested frequency |
| --- | --- |
| [Check service status](#check-service-status) | Daily |
| [Check disk space](#check-disk-space) | Weekly |
| [Review protection and persistence](#review-protection-and-persistence) | Weekly |
| [Review logs](#review-logs) | Weekly |
| [Check database health](#check-database-health) | Weekly |
| [Plan for updates](#plan-for-updates) | At least quarterly |

## Check service status

1. List the status of the services and the nodes by running the following commands on a manager node:

   ```bash
   s1 status
   s1 nodes
   ```

   `s1 status` lists the status of all containers in the Docker environment. In a production environment, all services show as scaled to 1/1, and all nodes appear in the list.

   ![The output of the s1 status command showing services scaled to 1/1](/images/privilegesecure/4.2/discovery/admin/maintenance/360053539334_image.webp)

1. Check the manager status of each node.

   A single node shows `Leader`. In a cluster, one node shows `Leader` and the others show `Reachable`. The leader is the primary manager node, and the reachable nodes are managers. If a node fails, the managers elect a new primary. A single node can fail without any indication to users.

## Check disk space

1. Check the free disk space by running the following command:

   ```bash
   df -h
   ```

1. Investigate any file system that is more than 80 percent full to find the cause.
1. If you can't reduce the usage, add disk space.

## Review protection and persistence

- Run Quickstart to confirm that all machines remain in Protect Mode. Filter the output for any machines that aren't in Protect Mode. This confirms that the onboarding process and the addition of Protect Mode work as expected.
- Review persistent access. Keep persistent access to a minimum, limited to service accounts. If a user account is persistent and must stay that way, convert it to a service account.

## Review logs

A security information and event management (SIEM) solution is the best place to report issues that the product logs capture.

- For Splunk query examples, see [Splunk and SIEM queries](../../integrations/siem/splunk-and-siem-queries.md).
- Review the "change system policy" output for any removal of Protect Mode.
- Review the "slow JITA access" and "time it takes for JITA access" results. They show whether users experience slow privilege elevation.

## Check database health

Run the following command to check the status of the database:

```bash
s1 database-status
```

The output shows the active database service and the MongoDB version. On a three-node deployment, it also shows the state of each replica set member and the replication lag between members.

On a three-node deployment, check the following:

- One member is `PRIMARY` and the other two are `SECONDARY`.
- Each member is healthy.
- The replication lag between the members is little or none. If there is a variation in time, contact Netwrix Support.

On a single-node deployment, the output reports that no replica set exists.

To run your own queries, open a database shell:

```bash
s1 db
```

## Plan for updates

Review updates to the product version and to the operating system at least quarterly. You can apply operating system patches monthly. Contact Netwrix Support before an update to confirm that no known issues affect your version.

For information about how to pull images from the private registry during deployment and upgrades, see [Docker credentials helper](../../install/docker-credentials-helper.md).

## Back up and recover

For what to back up and how to recover a deployment, see [Protect and recover your deployment](./protect-and-recover-your-deployment.md).
