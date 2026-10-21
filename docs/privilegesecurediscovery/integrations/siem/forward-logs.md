---
title: "Forward logs to a syslog server or SIEM"
description: "Configure Fluentd to forward Netwrix Privilege Secure for Discovery application logs to a syslog server or a Security Information and Event Management (SIEM) solution."
sidebar_position: 10
---

Netwrix Privilege Secure for Discovery sends the logs of its services to Fluentd, a log collector that runs as the `fluentd` service. By default, Fluentd prints the logs and doesn't forward them. You can change its configuration to forward the logs to a syslog server or a Security Information and Event Management (SIEM) solution, such as LogRhythm, SolarWinds, HP ArcSight, IBM QRadar, or AlienVault. For searches to run after the logs arrive, see [Splunk and SIEM queries](./splunk-and-siem-queries.md).

## How log forwarding works

The API, analytics engine, health reporter, Worker, Secondary Worker, Expire, Scanner, directory sync, internal API, and Windows bridge services use the Docker `fluentd` logging driver. The driver tags each message `docker.<container-name>` and sends it to the Fluentd service on the same node at `127.0.0.1:24224`. Fluentd listens on the loopback address only, so you don't open an inbound port for it. Fluentd then sends the messages to the destination in its configuration file.

The port `24224` belongs to the local logging path and isn't the syslog port. The destination port is the port that your collector listens on, such as `514` for syslog or `8088` for a Splunk HTTP Event Collector. You set it in the `port` option of the output, and the node must be able to reach it. For the ports that the product uses, see [Ports and firewall](../../requirements/ports-and-firewall.md).

The image includes the plugins for syslog (`remote_syslog`), Splunk HTTP Event Collector (`splunk_hec`), `concat`, `rewrite_tag_filter`, and `stdout_pp`.

## Prerequisites

- A syslog collector, either a syslog server or a SIEM, that the Privilege Secure for Discovery node can reach.
- The host name or IP address, port, and protocol of the collector.
- SSH access to the node that runs the `fluentd` service, with `sudo` permissions.

## Configure Fluentd to forward to syslog

The `fluentd` service reads `/secureone/conf/fluentd/fluent.conf` on the node. The default file has a `<source>` for the forward input, a `<filter docker.**>` that parses the JSON body, and a `<match **>` that prints every message to standard output. It has no `<match docker.**>` section. To forward the logs, replace its contents with a configuration that adds a syslog output.

1. Connect to the node over SSH.
2. Back up the current configuration file.

   ```bash
   sudo cp /secureone/conf/fluentd/fluent.conf /secureone/conf/fluentd/fluent.conf.$(date +%Y.%m.%d)
   ```

3. Open the file for editing.

   ```bash
   sudo vim /secureone/conf/fluentd/fluent.conf
   ```

4. Replace the contents with the following configuration. Change `host`, `port`, and `protocol` for your collector. Keep the indentation.

   ```text
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
       program secureone
       hostname "#{ENV['S1_NODE_HOSTNAME'] || Socket.gethostname}"
       <format>
         @type single_value
         message_key log
       </format>
     </store>
     <store>
       @type stdout_pp
       pp true
     </store>
   </match>
   <match **>
     @type stdout_pp
     pp true
   </match>
   ```

5. Save the file.
6. Restart the service to load the configuration.

   ```bash
   s1 restart fluentd
   ```

The example forwards to a syslog server at `192.0.2.13` over TCP on port 514. The second `<store>` block keeps printing the logs, so `s1 logs` still shows them.

### Syslog options

| Option | Description |
| --- | --- |
| `host`, `port` | The address of the collector. |
| `protocol` | `tcp` or `udp`. UDP limits each message to about 1 KB, so use `tcp` for these JSON messages. Syslog over TLS requires `tcp`. |
| `packet_size` | The maximum size of a syslog packet, including headers. |
| `program` | The program name in the syslog header. The example uses `secureone`. |
| `hostname` | The host name in the syslog header. See [Hostname in the syslog output](#hostname-configuration). |
| `severity` | The syslog severity of every forwarded message. The plugin default is `notice`. The severity doesn't follow the log level, so filter on the `levelname` or `level` field in the JSON body. |
| `tls`, `ca_file`, `verify_mode` | Settings for syslog over TLS. Set `tls true`, give the path of the CA certificate bundle in `ca_file` (a path inside the container), and set `verify_mode` to `2` to require a valid certificate. |

For all options, see the [fluent-plugin-remote_syslog documentation](https://github.com/dlackty/fluent-plugin-remote_syslog).

## Configure Fluentd to forward to Splunk

To send the logs to a Splunk HTTP Event Collector (HEC) instead, use the `splunk_hec` output that the image includes. Follow the steps in [Configure Fluentd to forward to syslog](#configure-fluentd-to-forward-to-syslog), but use the following configuration in step 4. Replace `splunk.example.test` with the host name of your Splunk server and `<hec-token>` with the token of your HEC input.

```text
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
    @type splunk_hec
    protocol https
    hec_host splunk.example.test
    hec_port 8088
    hec_token <hec-token>
    <buffer>
      flush_interval 5s
    </buffer>
  </store>
  <store>
    @type stdout_pp
    pp true
  </store>
</match>
<match **>
  @type stdout_pp
  pp true
</match>
```

The `splunk_hec` output verifies the certificate of the Splunk server by default. Keep `protocol https`, and don't set `insecure_ssl true`, which turns verification off. The Splunk server needs a certificate that a public certificate authority signed. The `fluentd` service mounts only `fluent.conf` and the log folder, so a certificate bundle from a private authority isn't available to the `ca_file` option unless you add it to the service. If you don't set `sourcetype` in the output, the source type of the HEC token applies, so set it to `_json` on the token as described in [Parse events with the Splunk JSON source type](./splunk-json-source-type.md). For all options, see the [fluent-plugin-splunk-hec documentation](https://github.com/splunk/fluent-plugin-splunk-hec).

## Verify the configuration

Check the configuration that the service uses.

```bash
sudo docker exec -it $(sudo docker ps --filter name=fluentd --quiet) fluentd -c /fluentd/etc/fluent.conf --dry-run
```

A valid file ends with `finished dry run mode`. To watch the messages that Fluentd handles, run the following command.

```bash
s1 logs
```

To check the Fluentd version, run the following command.

```bash
sudo docker exec -it $(sudo docker ps --filter name=fluentd --quiet) fluent-gem list | grep fluentd
```

## Services in the SIEM

After you set up forwarding, the collector receives the messages of the services listed in [How log forwarding works](#how-log-forwarding-works). The `<match docker.**>` section in the examples matches every message that carries the `docker.` tag. The `single_value` format in the example sends only the JSON body of each message. To identify the service in the SIEM, use fields in that body: the Python services write `service` or `name`, and the API service writes `"name": "api"`. A store that sends the whole Fluentd record, such as a Splunk HTTP Event Collector store, also receives the `container_name` field that the Docker driver adds.

## Hostname in the syslog output {#hostname-configuration}

With the example configuration, the syslog header carries the host name of the node. Docker Swarm passes the node host name to the Fluentd container, so logs show the node name instead of a container ID. Correlation in the SIEM then uses a name you recognize. Fluentd resolves the host name in this order:

1. The `S1_NODE_HOSTNAME` environment variable, if it's set. The default service definition doesn't set it.
2. `Socket.gethostname`, the host name of the container, which Swarm sets to the node host name.

The following example shows the syslog output for one message. The fields before the colon are the syslog priority (`<13>`), the time, the host name, and the program name.

```text
<13>Oct 21 06:41:41 psd-node-01 secureone: {"asctime": "2026-01-01 00:00:00,000", "levelname": "INFO", "message": "test"}
```

The body after the program name is the JSON object that the service wrote. To use a custom host name or IP address, set `S1_NODE_HOSTNAME` in the environment of the `fluentd` service, or replace the value of the `hostname` option with a fixed string. The `hostname` directive in the example reads the variable.

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

Send a test message to a syslog server from the node. Change the IP address and port to match your server.

```bash
echo '<14>source PrivilegeSecure: this is a syslog test' | nc -v -u -w 0 192.0.2.13 514
```

### tcpdump

Verify that logs leave the node by monitoring traffic on port 514. Replace `any` with a specific adapter if needed.

```bash
sudo tcpdump -vv -i any port 514
```

To filter by destination, use the following command. The options are `-n` for no DNS lookup, `-e` for the link-level header, `-q` for quiet output, and `-i` for the interface.

```bash
sudo tcpdump -n -e -q -i any dst 192.0.2.13
```
