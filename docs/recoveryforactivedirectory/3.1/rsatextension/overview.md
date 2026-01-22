---
title: "RSAT Extension"
description: "RSAT Extension"
sidebar_position: 50
---

# RSAT Extension

The RSAT Extension is an MMC snap-in that can be installed on domain joined machines. It extends the
Active Directory Users and Computers (ADUC) console with Identity Recovery specific
right-click options for object rollback and recovery. Included in this extension is a Recycle Bin
for restoring deleted objects. Consider the following:

- The RSAT Extension is automatically installed with the Identity Recovery installation
  package on the Recovery Application Server. The local Extension must be registered on the server
  to enable the rollback and restore options in ADUC.
- The Extension can be manually installed on a remote server where ADUC is installed. The Extension
  connects to the Recovery Application Server using the server name or IP address you provide while
  installing the Extension on the remote machine. See the
  [Install the RSAT Extension](/docs/recoveryforactivedirectory/3.1/install/installation.md) topic for additional information.

You must register the RSAT Extension on the Recovery Application Server to add the Rollback and
Restore options to the ADUC console.
