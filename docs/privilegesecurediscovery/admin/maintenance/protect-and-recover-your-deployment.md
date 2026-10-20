---
title: "Protect and recover your deployment"
description: "Learn what a Privilege Secure for Discovery backup must contain, why the encryption key matters, and how recovery works."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Do the mirrored mongo:4.0 and mongo:8.0 images contain mongodump and mongorestore, and which versions? What is the supported run location (docker exec into which container, and which output volume)? Evidence: none; the s1tool image (docker/s1tool/Dockerfile:11, python:3.13-alpine) has no Mongo tools.

TODO: Single node: is a live dump consistent enough, or must writers be stopped first? Which services must be stopped? Evidence: none.

TODO: Three-node cluster: should the dump come from a secondary, is --oplog required, and what are the matching restore flags? Is a full-instance dump (no database name) required for --oplog? Evidence: none.

TODO: What is the exact restore command, is --drop required, and what is the ordering with the migrator and api startup? Can a MongoDB 4.0 dump restore to 8.0? Evidence: none (the only mongorestore in the repository is docker/test-db/Dockerfile:19, a test image).

TODO: What is the supported key export method, how is the key format validated, is there a rotation story, and does the key affect JWT or token signing? Evidence: docker/shared/python/src/remediant/security/security.py:19-35, 43-60 (key use); no export path found.

TODO: Rebuild: can the secret be created before setup? Does setup deploy against an empty database before the restore, and how do you prevent it? Evidence: deployment secureone.sh:1613-1621 (create-secret skips an existing secret).

TODO: Rebuild of a three-node set: how are node labels mapped on rebuild, and how does per-node data directory identity work? Do hostnames or IP addresses appear in the replica set configuration? Evidence: deployment secureone.sh:1625-1637 (labels are assigned in docker node ls order).

TODO: Is /secureone/conf/ssl vestigial, and where are customer certificates persisted? Evidence: docker/node/packages/lib-api-onprem/utils/initServerTls.js:30-38 (TLS material stored in MongoDB).

TODO: Is retention of data/logs managed anywhere, and is it required in a backup? Evidence: none.

TODO: Are hypervisor snapshots of quiesced hosts a supported backup method? Evidence: none.

TODO: Are s1.pem and s1.pub still relevant on 26.x installs that were upgraded from version 2? Evidence: docker/s1tool/src/upgrade_v3.sh:30-31.

TODO: Is a swarm-level backup needed to rebuild a three-node cluster, or is a rebuild with setup, join, and relabeling enough? Evidence: none.

TODO: What disaster recovery posture can Netwrix publish (cold-standby restore only, or another design)? Which services must be stopped on a standby so it doesn't act on managed systems? Evidence: none.
:::

Netwrix Privilege Secure for Discovery stores its data in MongoDB and encrypts stored credentials with a key that exists only on the deployment. A usable backup must include both. This page describes what to protect and how a recovery works. It doesn't give commands, because Netwrix hasn't published a supported backup or restore procedure.

## What a backup must contain

A backup that can rebuild a deployment includes the following items:

- The MongoDB database
- The encryption key
- The `/secureone/s1.env` file
- The active stack file
- The `fluent.conf` file, if you customized log forwarding
- The TLS files for the web server

## Understand why the encryption key matters

The product encrypts stored credentials, such as directory bind passwords, service account passwords, and the secrets of managed systems, with an encryption key. The key is created when you install the product and is held as a Docker Swarm secret. The installer doesn't leave a copy on disk.

A copy of the database without the matching key can't decrypt the stored credentials. If you restore a database onto a deployment that has a newly generated key, the credentials remain unreadable. Treat the key as part of every backup.

## Protect the key

Follow these guidelines for the key:

- Keep a copy off the host.
- Restrict access to the people who administer the deployment.
- Store it apart from database archives. A database archive and the key together can reveal stored credentials.
- Use an enterprise secrets vault if you have one.

## Back up the database

Use a logical database dump of the `SecureONE` database, taken from a running or quiesced system as Netwrix Support confirms for your deployment. Don't copy the MongoDB data folder while MongoDB is running. A file copy of the data folder isn't a reliable restore method, especially for a three-node replica set.

## Single-node and three-node deployments

The two topologies differ in the following ways:

- A single-node deployment runs one standalone MongoDB instance with no replica set.
- A three-node deployment runs a three-member MongoDB replica set. Each member keeps its own copy of the data on its own node.

Back up the stack file and the node assignments of a three-node deployment along with the database so that you can rebuild it.

## Before you remove or reinstall

Removing the deployment with the teardown option deletes the stack, the data, the configuration in `/secureone`, and the encryption key. Confirm that you have a complete, verified backup before you remove or reinstall the deployment.

## Recovery overview

A recovery follows these stages:

1. Install the same product version on the new or rebuilt host.
1. Restore the encryption key.
1. Restore the database.
1. Verify the deployment.

Contact Netwrix Support for the supported procedure before you attempt a recovery.

## Verify the deployment

After a restore, confirm the following:

- All services show as running when you check the service status.
- You can sign in to the web interface.
- A task that depends on stored credentials works, such as a directory sync or a scan of a managed system.

## Scope

The product has no built-in backup scheduling and no built-in failover to a standby site. For help designing a disaster recovery approach, contact Netwrix Support.
