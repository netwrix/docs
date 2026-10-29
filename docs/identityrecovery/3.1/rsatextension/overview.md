---
title: "RSAT Extension"
description: "RSAT Extension"
sidebar_position: 60
---

# RSAT Extension

The RSAT Extension is a Microsoft Management Console (MMC) snap-in that you can install on domain joined machines. It extends the
Active Directory Users and Computers (ADUC) console with Identity Recovery specific
right-click options for object rollback and recovery. This extension includes a Recycle Bin
for restoring deleted objects. Consider the following:

- The Identity Recovery installation package automatically installs the RSAT Extension on the Recovery Application Server. You must register the local Extension on the server
  to enable the rollback and restore options in ADUC.
- You can manually install the Extension on a remote server where ADUC is installed. The Extension
  connects to the Recovery Application Server using the server name or IP address you provide while
  installing the Extension on the remote machine. See the
  [Install the RSAT Extension](/docs/identityrecovery/3.1/install/installation.md) topic for additional information.

You must register the RSAT Extension on the Recovery Application Server to add the Rollback and
Restore options to the ADUC console.
