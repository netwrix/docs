---
title: "Parse end-user activity logs"
description: "Find sign-in, system lookup, access grant, and access denied events by filtering the Fluentd output of the API and worker services."
sidebar_position: 50
---

The API service records every user action in the web UI as a series of JSON events. This page shows how to find five common end-user events: a successful sign-in, a failed sign-in, a system lookup, a granted access request, and a denied access request. For the fields that each event contains, see [Logs](../integrations/siem/logs.md).

A single user action can produce 3 to 30 or more events. The examples show only the event that identifies the action. In the examples, the user is `jsmith` and the target system is `server01.example.com`.

## Read the events

The API service writes no local log file, so read its events in the Fluentd output. The worker service, which grants and removes access, writes its events to the Fluentd output and to a local file. For details, see [View application logs](./application-logs.md).

Run `s1 logs` on a swarm manager node, without `sudo`. The command reads the Docker service logs of the `fluentd` service, so it doesn't work on a node that isn't a swarm manager. It shows only recent events, so start the command before you repeat the action.

Fluentd prints each event as a record of several lines, with one field on each line. A `grep` command that matches the `message` field prints only that line. Add the `-B` and `-A` options to print the lines around it, which include the tag of the service task, the timestamp, and the other fields of the event. For example, `-B 8 -A 4` prints the full record in most cases.

The tag at the start of the record names the service and the task. API events start with `docker.s1_api.1.<task-id>`, and worker events start with `docker.s1_worker.1.<task-id>`.

## Find a successful sign-in

The sign-in event contains the text `Successful authentication by` and the user name.

```bash
s1 logs --tail 500 --no-follow | grep -B 8 -A 4 "Successful authentication by"
```

The matching `message` field resembles the following:

```text
"message": "Successful authentication by: jsmith",
```

## Find a failed sign-in

A sign-in with a wrong user name or password shows an error on the sign-in page, and the API returns the HTTP status 401 with the message `Sign In Failed.` A sign-in with a wrong password for the built-in `secureone` account returns the message `Password failed for secureone`.

Search for the message in the output:

```bash
s1 logs --tail 500 --no-follow | grep -i -B 8 -A 4 "Sign In Failed"
```

When the user name doesn't exist, the API also records an event with the message `User Not Found` for the same request. The `req_id` field is the same in both events.

## Find a system lookup

When a user opens the administrator list of a system on the **Grant Access** page, the API records an `Admin list lookup` event that includes the system name:

```bash
s1 logs --tail 500 --no-follow | grep -i -B 4 -A 4 "Admin list lookup"
```

The event resembles the following:

```text
"message": "Admin list lookup",
"system": "server01.example.com",
```

## Find a granted access request

The worker service records the event when it adds a user to the administrators of a system. The event comes from the worker, not the API. The message starts with `Successfully added user`. It ends with the domain and name of the user who receives access:

```bash
s1 logs --tail 500 --no-follow | grep -i -B 8 -A 4 "Successfully added user"
```

The worker also writes the event to the local file `/secureone/data/logs/svc-worker.log` on the node that ran the request. A secondary worker writes to `svc-worker-secondary.log`.

```bash
grep -i "Successfully added user" /secureone/data/logs/svc-worker.log
```

## Find a denied access request

When a user requests something that the user has no permission to do, the API returns the HTTP status 403 and the message `User does not have access to this resource.` The web UI shows a Forbidden error.

The event contains the phrase `User does not have access to this resource`. You can also search for the word `Forbidden`.

```bash
s1 logs --tail 500 --no-follow | grep -i -B 8 -A 4 "User does not have access to this resource"
```

The `res` object of the event contains the response with `"statusCode": 403`.
