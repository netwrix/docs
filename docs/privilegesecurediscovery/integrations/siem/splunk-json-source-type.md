---
title: "Parse events with the Splunk JSON source type"
description: "Configure the Splunk _json source type so that Netwrix Privilege Secure for Discovery JSON events are parsed into searchable fields."
sidebar_position: 40
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 7742334174999_mceclip0.webp and 7742334174999_mceclip1.webp: show an Active Directory domain SID, user IDs, and host names. Redact or replace with example data.

TODO: 7742334174999_blobid0.webp and 7742334174999_blobid1.webp: show the same event with real identifiers. Redact or replace.
:::

Netwrix Privilege Secure for Discovery writes all event logs in JSON format by default. To search the fields of these events in Splunk, set the Splunk `_json` source type on the input that receives the events. This article compares the raw event with the parsed event in Splunk. For useful searches, see [Splunk and SIEM queries](./splunk-and-siem-queries.md).

## Compare a raw event with a parsed event

The following examples show the same event from the worker service: a successful JIT access grant with the message `WS-001.contoso.com - Adding admin privileges: CONTOSO\asmith`. The service generates this message when a user selects **Access System** on the **Grant Access** page of a system and the product grants the request.

![A JIT access granted event in Splunk](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_mceclip0.webp)

The following example shows the raw event log of the JIT access granted event, as the application writes it.

```text
2026-01-01 19:08:54 +0000 docker.s1_worker.1.<task-id>: {
  "container_id": "<container-id>",
  "container_name": "/s1_worker.1.<task-id>",
  "source": "stderr",
  "log": "REMOVED_FOR_DISPLAY_PURPOSES",
  "jobId": "<job-id>",
  "levelname": "INFO",
  "message": "WS-001.contoso.com - Adding admin privileges: CONTOSO\\asmith",
  "name": "remediant",
  "queue": {
    "_id": "<queue-id>",
    "request": {
      "status": "pending",
      "type": "access"
    },
    "requested_by": "<user-id>",
    "requested_by_info": {
      "distinguishedName": "CN=asmith,CN=Users,DC=contoso,DC=com",
      "domain_fqdn": "contoso.com",
      "domain_netbios": "CONTOSO",
      "sAMAccountName": "asmith"
    }
  },
  "requestedByUser": {
    "_id": "<user-id>",
    "domain_netbios": "CONTOSO",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
    "sAMAccountName": "asmith"
  },
  "service": "svc-worker",
  "system": "Main",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,OU=Servers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO",
    "policy": {
      "manage_local_sids": true,
      "scan": false,
      "secure": true,
      "strict_secure": false
    }
  },
  "targetUser": {
    "_id": "<user-id>",
    "domain_netbios": "CONTOSO",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
    "sAMAccountName": "asmith"
  },
  "threadName": "Worker-23"
}
```

The following screenshot shows the same event as it appears on the command line.

![The raw JIT access granted event on the command line](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_blobid0.webp)

The following screenshot shows the event in Splunk after Splunk parses the JSON message.

![The JIT access granted event in Splunk with parsed JSON fields](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_blobid1.webp)

## Set the source type

1. In Splunk, go to **Settings > Data Inputs > HTTP Event Collector**.
2. Select the token that receives the Privilege Secure for Discovery events.
3. In the **Source Type** list, select `_json`.

   ![The HTTP Event Collector token settings with the _json source type selected](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_mceclip1.webp)

The token name in the screenshot is `secureone`. You can use any name that identifies the product in Splunk.

For more information, see [Why source types matter](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/Data/Whysourcetypesmatter) in the Splunk documentation.
