---
title: "Forward Logs to SIEM via Fluentd"
description: "Steps to validate and update the Fluentd configuration to forward logs from Privilege Secure Discovery (NPS-D) to a SIEM, including backup, update, and service restart procedures."
sidebar_label: "Forward Logs to SIEM via Fluentd"
keywords:
- Fluentd
- SIEM
- NPS-D
- Privilege Secure Discovery
- fluent.conf
- log forwarding
- syslog
- Docker
products:
- privilegesecurediscovery
tags:
- kb
- security-and-compliance
---

# Forward Logs to SIEM via Fluentd

Complete the following steps during a scheduled downtime window or support call, in case the service restart causes any issues.

Refer to [Forward Logs to Syslog Servers and SIEM Solutions](https://docs.netwrix.com/docs/privilegesecurediscovery/2_22/integrations/siem/forwardlogs) for the required configuration (stanza) details.

## Instructions

1. SSH into the server.

2. Back up the current configuration file:

```
sudo cp -v /secureone/conf/fluentd/fluent.conf /secureone/conf/fluentd/fluent.conf-$(date '+%Y-%m-%dT%H_%M_%S')
```

3. Check the current IP/hostname, port, and protocol:

```
sudo grep -C4 host /secureone/conf/fluentd/fluent.conf
```

> **NOTE:** If the above command returns no results, review the full file to confirm the required entries exist:
>
> ```
> sudo cat /secureone/conf/fluentd/fluent.conf
> ```

4. Update the IP/hostname, port(s), and protocol using a text editor (vi, vim, or nano). Example:

```
sudo vim /secureone/conf/fluentd/fluent.conf
```

5. Recheck that the file was updated and saved correctly by repeating step 3.

6. Restart the fluentd service:

```
s1 restart fluentd
```

7. Confirm logs are flowing correctly:

```
sudo docker service logs --tail 50 --follow s1_fluentd
```

8. Validate that the configuration loaded successfully:

```
sudo docker exec -it $(sudo docker ps | grep fluentd | cut -d' ' -f1) fluentd -c /fluentd/etc/fluent.conf --dry-run
```

## Validation Notes

* No red lines should appear in the output.
* Green indicates successfully loaded.
* Yellow indicates warnings.
* Red indicates failure to load.

The configuration requires the host (FQDN or IP), port number, and protocol to be confirmed before the update. Once these three values are confirmed, the update typically takes around 30 minutes in a scheduled window to complete.
