---
title: "Forwarding Logs to a SIEM with Fluentd"
description: "Back up, update, restart, and validate the Fluentd configuration that forwards Privilege Secure for Discovery logs to a SIEM."
sidebar_label: "Forwarding Logs to a SIEM with Fluentd"
keywords:
- Fluentd
- SIEM
- NPS-D
- SecureONE
- Remediant SecureONE
- fluent.conf
- log forwarding
- syslog
- Docker
- s1 restart fluentd
products:
- privilegesecurediscovery
tags:
- kb
- security-and-compliance
---

## Overview

This article describes how to update the Fluentd configuration that forwards Netwrix Privilege Secure for Discovery logs to a SIEM. For the required configuration (stanza) details, see [Forward Logs to Syslog Servers and SIEM Solutions](/docs/privilegesecurediscovery/integrations/siem/forward-logs).

Complete these steps during a scheduled downtime window or a support call, in case the service restart causes issues.

> **IMPORTANT:** Before you start, confirm the host (FQDN or IP address), port number, and protocol for your SIEM. After you confirm these three values, the update typically takes about 30 minutes.

## Instructions

1. Connect to the server that runs the product over SSH, using an account with sudo access.

2. Back up the current configuration file:

   ```bash
   sudo cp -v /secureone/conf/fluentd/fluent.conf /secureone/conf/fluentd/fluent.conf-$(date '+%Y-%m-%dT%H_%M_%S')
   ```

3. Check the current IP address or hostname, port, and protocol:

   ```bash
   sudo grep -C4 host /secureone/conf/fluentd/fluent.conf
   ```

   > **NOTE:** If the command returns no results, review the full file to confirm that the required entries exist:
   >
   > ```bash
   > sudo cat /secureone/conf/fluentd/fluent.conf
   > ```

4. Update the IP address or hostname, port, and protocol in a text editor such as `vi`, `vim`, or `nano`. For example:

   ```bash
   sudo vim /secureone/conf/fluentd/fluent.conf
   ```

5. Repeat step 3 to confirm that the file was updated and saved correctly.

6. Restart the Fluentd service:

   ```bash
   s1 restart fluentd
   ```

7. Confirm that logs are flowing:

   ```bash
   sudo docker service logs --tail 50 --follow s1_fluentd
   ```

8. Validate that the configuration loaded successfully:

   ```bash
   sudo docker exec -it $(sudo docker ps | grep fluentd | cut -d' ' -f1) fluentd -c /fluentd/etc/fluent.conf --dry-run
   ```

   The output must contain no red lines. The text color in the output indicates the following:

   - Green: The configuration loaded successfully.
   - Yellow: The configuration loaded with warnings.
   - Red: The configuration failed to load.
