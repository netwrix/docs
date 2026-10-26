---
title: "Parse events with the Splunk JSON source type"
description: "Set the Splunk _json source type on an HTTP Event Collector token so Privilege Secure for Discovery events become searchable fields."
sidebar_position: 40
---

Netwrix Privilege Secure for Discovery writes its event logs as JSON objects. To search the fields of these events in Splunk, set the Splunk `_json` source type on the input that receives them. Without it, Splunk indexes each event as one line of text, and you can only search for strings.

The `fluentd` service in the product image includes the [`splunk_hec` output plugin](https://github.com/splunk/fluent-plugin-splunk-hec), which sends events to a Splunk HTTP Event Collector (HEC) token. For the forwarding configuration of the `fluentd` service, see [Forward logs to a syslog server or SIEM](./forward-logs.md). For searches to run after Splunk parses the events, see [Splunk and SIEM queries](./splunk-and-siem-queries.md).

## Set the source type

1. In Splunk, go to **Settings** > **Data Inputs** > **HTTP Event Collector**.
2. Select the token that receives the Privilege Secure for Discovery events.
3. In the **Source Type** list, select `_json`.
4. Save the token.

The token name doesn't matter. Use any name that identifies the product in Splunk, for example `privilege-secure-for-discovery`.

:::note
A `sourcetype` value inside the event that the sender posts takes precedence over the token setting. If Splunk doesn't extract the fields after you set the token, check whether the sender sets its own `sourcetype`.
:::

For more information, see [Set up and use HTTP Event Collector in Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) and [Why source types matter](https://docs.splunk.com/Documentation/Splunk/latest/Data/Whysourcetypesmatter) in the Splunk documentation.

## Compare a raw event with a parsed event

The following example is the raw event for a successful Just-In-Time Access (JITA) grant. The worker service writes it when it adds a user to the local administrators of a system. Docker adds the `container_id`, `container_name`, and `source` fields. The `message` field starts with the host name of the system.

```json
{
  "container_id": "<container-id>",
  "container_name": "/s1_worker.1.<task-id>",
  "source": "stderr",
  "jobId": "<job-id>",
  "levelname": "INFO",
  "message": "app01.corp.example.test - Adding admin privileges: CORP\\jpatel",
  "name": "remediant",
  "queue": {
    "_id": "<queue-id>",
    "request": {
      "status": "pending",
      "type": "access"
    },
    "requested_by": "<user-id>",
    "requested_by_info": {
      "distinguishedName": "CN=Jordan Patel,OU=Users,DC=corp,DC=example,DC=test",
      "domain_fqdn": "corp.example.test",
      "domain_netbios": "CORP",
      "sAMAccountName": "jpatel"
    }
  },
  "requestedByUser": {
    "_id": "<user-id>",
    "domain_netbios": "CORP",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1101",
    "sAMAccountName": "jpatel"
  },
  "service": "svc-worker",
  "system": "Main",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "APP01",
    "distinguishedName": "CN=APP01,OU=Servers,DC=corp,DC=example,DC=test",
    "domain_netbios": "CORP",
    "policy": {
      "scan": true,
      "secure": true,
      "strict_secure": false
    }
  },
  "targetUser": {
    "_id": "<user-id>",
    "domain_netbios": "CORP",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1101",
    "sAMAccountName": "jpatel"
  },
  "threadName": "Worker-23"
}
```

With the `_json` source type, Splunk extracts each nested key as a field with a dotted name. For example, the preceding event gives you `targetSystem.cn`, `requestedByUser.sAMAccountName`, and `queue.request.type`. Search them directly:

```text
index="<index>" service=svc-worker targetSystem.cn=APP01 levelname=INFO
```

To see the raw event on the server, run `s1 logs`. The command follows the output of the `fluentd` service.
