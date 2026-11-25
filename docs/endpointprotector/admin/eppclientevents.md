---
title: "EPP Client Integrity and Events"
sidebar_label: "EPP Client"
description: "Review EPP Client integrity checks, policy synchronization, and termination events reported to the Endpoint Protector Server."
sidebar_position: 200
---

# EPP Client Integrity and Events

## EPP Client Integrity Checks

This article explains key EPP Client behaviors related to integrity checking, policy synchronization, and service termination. It covers how the EPP Client validates itself at startup, how it communicates and downloads policy changes, and how it classifies and reports different types of client termination.

### Client Integrity Check Overview

The Client Integrity check runs automatically at EPP service/daemon startup. It verifies two things:

- The existence of all expected EPP component files on the endpoint.
- The validity of file signatures *(signature validation applies to Windows only)*.

If the check passes without issue, the EPP Client reports the status as **Client Integrity OK**, confirming all EPP component files are present and their signatures are valid (on Windows).

If the check fails for any reason, the EPP Client reports a **Client Integrity Failure** event in the EPP Server.

### File Existence vs. Missing Installation File

When the daemon starts, it checks that all expected files are present and reports any that are missing. Two related terms you may encounter:

| Term | Meaning |
|---|---|
| **Install files** | The full set of files that should be present on the endpoint after a successful EPP Client installation. |
| **Installation file missing** | The startup check couldn't find one or more expected files. This condition triggers a Client Integrity Failure event. |

## Policy Received Events

### How Policy Synchronization Works

Each time the EPP Client communicates with the EPP Server, it presents the hash of its current configuration XML. The server compares this hash against the current expected configuration:

- If the hashes **match**, the server takes no action.
- If the hashes **differ**, the server exposes the updated configuration with a new hash for the client to download, and raises a **Policy Received** event. The EPP Client then automatically downloads and applies the new settings.

Any change to Computer or User settings — including configuration items, rights, or policies — modifies the configuration XML and its hash, which triggers this process.

## Client Termination Event Types

### How the EPP Client Classifies Termination

If the EPP Client service didn't stop cleanly, the agent evaluates the state of relevant files, registry keys, and drivers to determine what happened. Based on the results, the agent reports one of three events:

| Event Type | Condition & Meaning |
|---|---|
| **Unplanned Client Termination** | All files, registry keys, and drivers are intact. The service stopped or terminated unexpectedly, with no signs of tampering or removal. |
| **Forced Uninstall Attempt** | The service stopped or terminated, and one or more files, registry keys, or drivers are in an unexpected state — indicating a partial or unauthorized removal attempt. |
| **Uninstall Attempt** | Someone deliberately initiated an uninstall of the EPP Client — either directly on the endpoint (e.g. via Add/Remove Programs) or remotely from the EPP Server using the **Uninstall Client** action. |

The EPP Client agent reports these three event types, which appear in the EPP Server event log for the relevant endpoint.
