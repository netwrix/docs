---
title: "Forward logs to a syslog server or SIEM"
description: "Configure Fluentd to forward Netwrix Privilege Secure for Discovery application logs to a syslog server or a SIEM solution."
sidebar_position: 10
---

You can forward Netwrix Privilege Secure for Discovery application logs to a syslog server or a Security Information and Event Management (SIEM) solution, such as LogRhythm, SolarWinds, HP ArcSight, IBM QRadar, or AlienVault. For queries that you can run after the logs arrive, see [Splunk and SIEM queries](./splunk-and-siem-queries.md).

## Prerequisites

- A syslog collector: a syslog server or a SIEM.
- The host name or IP address, port, and protocol of the collector.
- SSH access to the server that runs the `fluentd` service, with sudo permissions.

## Configure Fluentd

The `fluentd` service reads its configuration from `/secureone/conf/fluentd/fluent.conf`.

1. Connect to the server over SSH.
2. Back up the current configuration file.

   ```bash
   sudo cp /secureone/conf/fluentd/fluent.conf /secureone/conf/fluentd/fluent.conf.$(date +%Y.%m.%d)
   ```

3. Open the file for editing.

   ```bash
   sudo vim /secureone/conf/fluentd/fluent.conf
   ```

4. Edit the `<match docker.**>` section. Keep the indentation, and change the host, port, and protocol for your collector. The following example forwards logs to a syslog server at `192.0.2.13`.

   ```text
   #fluent.conf for fluentd version 1
   <source>
     @type forward
   </source>
   <filter docker.**>
     @type parser
     time_key key3
     format json
     key_name log
     reserve_data true
   </filter>
   <match docker.**>
     @type copy
     <store>
       @type remote_syslog
       host 192.0.2.13
       port 514
       protocol tcp
       packet_size 4096
       #program can ingest as tag, etc.
       program secureone
       # hostname in the syslog header - defaults to the host server's hostname.
       # Override by setting S1_NODE_HOSTNAME on the host.
       hostname "#{ENV['S1_NODE_HOSTNAME'] || Socket.gethostname}"
       ## TLS options
       # tls <true or false>
       # ca_file <path to CA cert bundle>
       # verify_mode 0 # no certificate required
       # verify_mode 1 # certificate optional
       # verify_mode 2 # certificate required
       # Memory buffer with a short flush interval.
       # <buffer>
       #   flush_mode interval
       #   flush_interval 1
       # </buffer>
       <format>
         @type single_value
         message_key log
       </format>
     </store>
     <store>
       @type stdout_pp
       pp true
       time_color blue
       tag_color yellow
       record_colored true
     </store>
   </match>
   <match **>
     @type stdout_pp
     pp true
     time_color blue
     tag_color yellow
     record_colored true
   </match>
   ```

5. Restart `fluentd` to load the new configuration.

   ```bash
   s1 restart fluentd
   ```

### Verify the Fluentd version and configuration

On the node that runs `fluentd`, check the Fluentd version.

```bash
sudo docker exec -it $(sudo docker ps | grep fluentd | cut -d' ' -f1) fluent-gem list | grep fluentd
```

Check the configuration that the running service uses.

```bash
sudo docker exec -it $(sudo docker ps | grep fluentd | cut -d' ' -f1) fluentd -c /fluentd/etc/fluent.conf --dry-run
```

## Results in the SIEM

After you set up log forwarding, the product forwards the activity of each service (api, worker, scanner, ldapsync, analytics_engine, internal_api, health_reporter, and expire). The `<match docker.**>` section matches the logs of all Docker services.

The following examples show the services (the `container_name` field) that arrive in different SIEMs.

### Splunk

The following view shows the top 10 values by event count per `container_name`, so it doesn't list every service.

![A Splunk view of forwarded events grouped by container_name](/images/privilegesecure/4.2/discovery/integrations/siem/360063180233_mceclip0.webp)

### Humio

![A Humio view of forwarded events grouped by container_name](/images/privilegesecure/4.2/discovery/integrations/siem/360063180233_mceclip1.webp)

## Hostname in the syslog output {#hostname-configuration}

By default, the product uses the host server's host name in the syslog header. Docker Swarm passes the node host name to the Fluentd container at runtime, so no manual configuration is required in most environments. Logs show the actual server host name instead of a Docker container ID, which makes SIEM correlation easier.

The following example shows syslog output.

```text
<13>Apr 7 11:15:14 secureone secureone: {"asctime": "2026-04-07 11:15:13,669", "levelname": "INFO", "message": "EntraId config processing", "service": "svc-scan", ...}
```

The syslog header fields map as follows.

| Field | Value | Notes |
| --- | --- | --- |
| `hostname` | `secureone` | Host server host name, set automatically |
| `program` | `secureone` | Fixed value declared in `fluent.conf` |
| Log body | JSON object | Full structured log from the service |

### Override the host name

To use a custom host name or IP address, set the `S1_NODE_HOSTNAME` environment variable on the host before you start Docker Swarm.

```bash
export S1_NODE_HOSTNAME=<hostname-or-ip>
```

Fluentd resolves the host name in this order:

1. The `S1_NODE_HOSTNAME` environment variable, if it is set.
2. `Socket.gethostname`, the operating system host name of the node.

This is the relevant directive in `fluent.conf`.

```text
hostname "#{ENV['S1_NODE_HOSTNAME'] || Socket.gethostname}"
```

## Troubleshoot log forwarding

### Splunk

Send a test event to the Splunk HTTP Event Collector (HEC). Change the IP address, port, and token for your HEC endpoint.

```bash
curl -k "https://192.0.2.13:8088/services/collector" -H "Authorization: Splunk <token>" -d '{"event": "Privilege Secure test log"}'; echo
```

For a JSON-formatted test event with verbose output, run the following command.

```bash
curl "https://192.0.2.13:8088/services/collector" -H "Authorization: Splunk <token>" -d '{"event": {"msg":"Privilege Secure test log"}}' -v
```

### Syslog

Send a test message to a syslog server. Change the IP address and port to match your server.

```bash
echo '<14>source PrivilegeSecure: this is a syslog test' | nc -v -u -w 0 192.0.2.13 514
```

### tcpdump

Verify that logs leave the server by monitoring traffic on port 514. Replace `any` with a specific adapter if needed.

```bash
sudo tcpdump -vv -i any port 514
```

To filter by destination, use the following command. The options are: `-n` no DNS lookup, `-e` link-level header, `-q` quiet output, `-i` interface.

```bash
sudo tcpdump -n -e -q -i any dst 192.0.2.13
```
