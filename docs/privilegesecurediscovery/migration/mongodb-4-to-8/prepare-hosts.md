---
title: "Prepare hosts for the MongoDB migration"
description: "Upgrade to 26.09.1, install the matching s1 command-line tool on every database node, and record the starting state before you migrate."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: This page uses `secureone.sh upgrade`, `install-cli`, and `verify` (present in the 26.09.1 release branch) instead of the earlier manual procedure that edited `/secureone/s1.env` and copied `/app/s1-cli` out of the s1tool image by hand. Confirm the manual procedure is no longer needed for any supported starting release. Evidence: origin/release/26.09.1-rc secureone.sh usage text (upgrade, install-cli, verify).

The `s1 mongo-upgrade` commands come from the `s1` command-line tool on the host. Upgrading the application services doesn't by itself prove that every database node has the 26.09.1 tool. Prepare each database node before you run `check`.

## Before you begin

Complete [Plan the MongoDB migration](./plan.md) first. Download the 26.09.1 quickstart bundle as described in [Download and deploy](../../install/deploy.md), and use the `secureone.sh` and `secureone.tar.gz` files from that bundle. Don't use a copy of `secureone.sh` kept from an earlier release.

Every database node must authenticate to the Netwrix container registry. See [Configure registry access](../../requirements/registry-access.md).

## Upgrade to 26.09.1 and install the s1 tool

1. On the primary node, run the upgrade from the directory that contains the 26.09.1 `secureone.sh` and `secureone.tar.gz`:

   ```bash
   sudo -E bash secureone.sh upgrade --version 26.09.1
   ```

   The upgrade installs the 26.09.1 `s1` tool on that node, refreshes the stack templates and the active `docker-stack.yml` from the release package, and redeploys the stack. Don't use `--skip-asset-refresh`. The migration needs the refreshed templates.

2. On a three-node cluster, install the `s1` tool on each of the other database nodes. Run the following command on each one:

   ```bash
   sudo -E bash secureone.sh install-cli --version 26.09.1
   ```

3. Verify the primary node. The check confirms the `s1` tool version, the `/secureone/s1.env` settings, and that the stack file reads the migration settings:

   ```bash
   sudo -E bash secureone.sh verify --version 26.09.1
   ```

4. On each of the other cluster database nodes, run the narrower check:

   ```bash
   sudo -E bash secureone.sh verify --cli-only --version 26.09.1
   ```

If `verify` reports a failure, fix the condition it names and run it again. Stop if any node still fails. If the output says the active stack file needs a manual merge, contact Netwrix Support before you continue.

## Confirm the s1 tool

On every database node, confirm the version and the migration commands:

```bash
s1 --version
s1 mongo-upgrade --help
s1 mongo-upgrade check --help
s1 mongo-upgrade run --help
s1 mongo-upgrade status --help
s1 mongo-upgrade cutover --help
```

Confirm that `s1 --version` reports 26.09.1 and that the `mongo-upgrade` help lists `check`, `run`, `status`, `cutover`, `finish-cutover`, and `retire`. Stop if the version or the commands don't match.

Don't change `DB` or `REMEDIANT_DB` in `/secureone/s1.env` before cutover. The migration tool writes the MongoDB 8.0 connection settings after the final reconciliation and switch.

## Migration image delivery

The migration logic runs in a companion container image from the same configured registry as the other service images. You don't install it separately.

* `check` confirms that the migration image is available from the registry.
* `run` pulls MongoDB 8.0 and the migration image before it copies data.
* `cutover` refreshes the migration image before the final reconciliation.
* For a cluster, service creation forwards the current registry authentication to the Swarm nodes.

If `check` reports that the migration image isn't pullable, treat it as a registry connectivity or authentication problem. Validate DNS, firewall access, registry authentication, and the Docker configuration. Don't override the target MongoDB version or the migration image version unless Netwrix Support directs you to.

## Complete the pre-migration checklist

Confirm each item before you continue:

1. The application runs 26.09.1 and the Docker Swarm and all services are healthy.
2. Every database node reports the same `s1` version.
3. An independent backup exists and is restorable. See [Plan the MongoDB migration](./plan.md).
4. You confirmed the storage capacity.
5. Long-running jobs can finish before cutover.
6. The operator can manage Docker Swarm services on a manager node.

## Record the starting state

For a single-node deployment, run the following commands:

```bash
s1 status
s1 database-status
docker service ls | grep -i mongo
```

For a three-node cluster, run the following commands:

```bash
s1 --multi-node status
s1 --multi-node database-status
docker node ls
docker service ls | grep -i mongo
```

If the deployment uses a stack name other than `s1`, place `--stack <stack-name>` before the subcommand, for example `s1 --stack <stack-name> status`.

Save the output with the migration records. Investigate unhealthy application or MongoDB services before you continue.

## Next steps

Continue with [Migrate a single-node deployment](./single-node.md) or [Migrate a three-node cluster](./three-node-cluster.md).
