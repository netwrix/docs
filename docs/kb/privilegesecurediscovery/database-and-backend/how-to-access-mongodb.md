---
title: "Accessing MongoDB"
description: "Open the MongoDB shell on a Privilege Secure for Discovery host with the s1 db command or with docker exec, using mongo (4.0) or mongosh (8.0)."
sidebar_label: "Accessing MongoDB"
keywords:
- MongoDB
- mongo shell
- mongosh
- s1 db
- docker exec
- replicaSet
- mongo container
- command history
- MongoDB 8.0
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- database-and-backend
knowledge_article_id: kA04u00000110orCAA
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the s1 db command options for a single-node deployment (s1 --single-node db) and that s1 db selects the correct shell (mongo or mongosh) at 26.09.1. Evidence: none.

TODO: Screenshots ka04u00000116Xm_0EM4u000008LTeI.png and ka04u00000116Xm_0EM4u000008LTeN.png (2018 terminal captures showing MongoDB 3.2.9 and a host name) are no longer referenced. Replace with current captures or delete the files. Evidence: image.
:::

## Overview

This article describes how to open the MongoDB shell on the Netwrix Privilege Secure for Discovery server so that you can run queries directly against the product database. Connect to the server over SSH, and then use either the `s1 db` command or a `docker exec` command.

> **NOTE:** Use these methods only when the query returns a small amount of data, such as a `.count()` result or a small data set. The shell does not export data. It displays results in the terminal window.

## Instructions

### Open the Shell with the s1 Command

On the server, run the following command. The `s1 db` command opens the MongoDB shell for the active database:

```bash
s1 db
```

### Open the Shell with Docker

If you cannot use the `s1 db` command, run the shell in the MongoDB container. The command finds the container ID and then opens the `SecureONE` database. The shell binary depends on the MongoDB version:

- MongoDB 4.0 uses the `mongo` shell.
- MongoDB 8.0 uses the `mongosh` shell.

For a single-node deployment, run the command for your MongoDB version:

```bash
sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo SecureONE
```

```bash
sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongosh SecureONE
```

For a cluster deployment, run the command for your MongoDB version:

```bash
sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongo "mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone"
```

```bash
sudo docker exec -it $(sudo docker ps | grep mongo | cut -d' ' -f1) mongosh "mongodb://mongo1,mongo2,mongo3/SecureONE?replicaSet=secureone"
```

When the connection succeeds, the shell displays a prompt that waits for commands.

### Reuse a Previous Command

If you entered the command before, find it in the shell history:

```bash
history | grep mongo
```

The command returns a numbered list. Copy and paste the line that you want, or enter `!` followed by the number next to that line to run it again.

> **NOTE:** Some queries require moderate computing resources, and scanning can slow down while they run.
