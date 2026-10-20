---
title: "Open the MongoDB shell"
description: "Open a shell on the active Privilege Secure for Discovery database with s1 db, and use the correct shell and service names on MongoDB 4.0 and 8.0."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm how `rs.isMaster()`, `db.<collection>.count()`, and `DBQuery.shellBatchSize` behave in mongosh. The tool uses `rs.status()` and `db.version()`. Evidence: none (not in s1.py).

TODO: After a multi-node `retire`, the replica set keeps the name `secureone8`, but `s1 db` and `s1 database-status` fall back to a connection string with `replicaSet=secureone` when no `mongoN-8` service exists. Not tested on a live cluster. Evidence: s1.py (v26.09.1-rc) get_db_info lines 6754-6771.

TODO: Confirm the manual `docker exec` form for a cluster member after `retire`. Evidence: none.
:::

Use the `s1 db` command to open a shell on the database that Netwrix Privilege Secure for Discovery uses. The command selects the active database service and the correct shell binary for you, so it works on MongoDB 4.0, during a migration, and on MongoDB 8.0.

## Open the shell with s1 db

1. Sign in to a database host. For a cluster, use a node that hosts a MongoDB member.
2. Run the command for your topology.

   For a single-node deployment:

   ```bash
   sudo s1 db
   ```

   For a three-node cluster:

   ```bash
   sudo s1 --multi-node db
   ```

   For a custom stack name, place `--stack <stack-name>` before `db`.

The shell opens on the `SecureONE` database. To run a JavaScript file, add `--file <filename>`. Mount the file in the container under `/data/db`.

To check the database state without opening a shell, run `s1 database-status`. The output shows the active database service and the live MongoDB version. For a cluster, it also lists the replica-set members.

## Choose the shell for the MongoDB version

The shell binary depends on the MongoDB version, not on the product version.

| MongoDB version | Shell | Notes |
|-----------------|-------|-------|
| 4.0 | `mongo` | The MongoDB 4.0 image includes only the legacy shell. |
| 8.0 | `mongosh` | The MongoDB 8.0 image includes only `mongosh`. |

The `s1 db`, `s1 set-password`, and `s1 database-status` commands choose the correct binary for each container. Use them instead of typing `mongo` or `mongosh` yourself.

Some legacy shell commands differ in `mongosh`. For example, `rs.printSlaveReplicationInfo()` returns an error in `mongosh`. Use `rs.printSecondaryReplicationInfo()` on MongoDB 8.0.

## Identify the service names

The names of the MongoDB services depend on the migration state.

| State | Single-node service | Cluster services | Cluster replica set |
|-------|---------------------|------------------|---------------------|
| MongoDB 4.0, or a new MongoDB 8.0 installation | `<stack>_db` | `<stack>_mongo1`, `<stack>_mongo2`, `<stack>_mongo3` | `secureone` |
| During a migration, before cutover | `<stack>_db` is active. `<stack>_db8` is the target. | `<stack>_mongoN` is active. `<stack>_mongoN-8` is the target. | `secureone` is active. `secureone8` is the target. |
| After cutover, before retire | `<stack>_db8` is active. `<stack>_db` has zero replicas. | `<stack>_mongoN-8` is active. `<stack>_mongoN` has zero replicas. | `secureone8` |
| After retire | `<stack>_db` | `<stack>_mongo1`, `<stack>_mongo2`, `<stack>_mongo3` | `secureone8` |

The default stack name is `s1`. See [Verify and maintain the deployment after cutover](../../migration/mongodb-4-to-8/after-cutover.md) for how to recognize each state.

## Open a shell manually

Use this method only when `s1 db` isn't available. Take care with the container filter, because a plain `name=s1_db` also matches `s1_db8`, and `name=s1_mongo1` also matches `s1_mongo1-8`.

1. Run `s1 database-status` or `docker service ls | grep -i mongo` to find the active service.
2. Find the container for the active service on the local node. The trailing `\.` keeps the filter from matching the `-8` and `8` services:

   ```bash
   docker ps --filter 'name=<service>\.' --quiet
   ```

   For example, use `s1_db\.` for the MongoDB 4.0 single-node service. Use `s1_db8` for the single-node target, because that name doesn't collide with another.

3. Open the shell with the binary for the MongoDB version. For a single node on MongoDB 4.0:

   ```bash
   docker exec -it <container-id> mongo mongodb://db:27017/SecureONE
   ```

   For a single node on MongoDB 8.0 after cutover:

   ```bash
   docker exec -it <container-id> mongosh mongodb://db8:27017/SecureONE
   ```

   For a cluster, use the replica-set connection string that matches the state:

   ```text
   mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone
   mongodb://mongo1-8,mongo2-8,mongo3-8/SecureONE?replicaSet=secureone8
   mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone8
   ```

   Use the first string while the application uses MongoDB 4.0, the second string after cutover and before retire, and the third string after retire.

## Related pages

* [Retire MongoDB 4.0 after cutover](../../migration/mongodb-4-to-8/retire-mongodb-4.md)
* [Routine maintenance](./routine-maintenance.md)
