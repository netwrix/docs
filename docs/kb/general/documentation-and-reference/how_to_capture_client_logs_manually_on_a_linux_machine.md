---
description: >-
  This article provides step-by-step instructions on how to enable and capture client logs on a Linux machine.
keywords:
  - client logs
  - Linux
  - troubleshooting
sidebar_label: Capture Client Logs on Linux
tags:
  - documentation-and-reference
title: "How to Capture Client Logs Manually on a Linux Machine"
knowledge_article_id: kA0Qk0000002B6uKAE
products:
  - general
---

# How to Capture Client Logs Manually on a Linux Machine

## Overview

This article provides step-by-step instructions on how to enable and capture client logs on a Linux machine.

## Instructions

### Capture Regular Client Logs

1. Open a terminal on the client machine and run the following commands:

   ```bash
   cd /var/log/epp-client/
   sudo touch /var/log/epp-client/epp_client_daemon.log
   sudo touch /var/log/epp-client/eppsslsplit.log
   sudo service epp-client-daemon restart
   ```

2. Replicate the issue.

3. Copy the log files to your desktop by executing the following commands:

   ```bash
   cp /var/log/epp-client/epp_client_daemon.log /home/user/Desktop/
   cp /var/log/epp-client/eppsslsplit.log /home/user/Desktop/
   ```

4. Submit the log files to the support team.

> **NOTE:** Restarting the system clears existing log entries. To retain log entries after a system restart, capture logs in append mode.

### Capture Client Logs in Append Mode

1. Open a terminal on the client machine and run the following commands:

   ```bash
   cd /var/log/epp-client/
   sudo touch /var/log/epp-client/epp_client_daemon_append.log
   sudo touch /var/log/epp-client/eppsslsplit.log
   sudo service epp-client-daemon restart
   ```

2. Replicate the issue or wait for the issue to occur.

3. Copy the log files to your desktop by executing the commands:

   ```bash
   cp /var/log/epp-client/epp_client_daemon_append.log /home/user/Desktop/
   cp /var/log/epp-client/eppsslsplit.log /home/user/Desktop/
   ```

4. Submit the log files to the support team.