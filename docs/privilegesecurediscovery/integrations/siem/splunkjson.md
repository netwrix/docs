---
title: "Splunk (JSON) Source Type"
description: "Splunk (JSON) Source Type"
sidebar_position: 10
---

# Splunk (JSON) Source Type

Splunk (JSON) Source Type

# Splunk (JSON) Source Type

This article is provided to give high level insight and base comparison of Splunk's JSON source
type, which is used to properly format Privilege Secure's events within Splunk.

**NOTE:** JSON is the format of all Privilege Secure event logs by default.

See the
[Splunk and SIEM Queries](/docs/privilegesecurediscovery/integrations/siem/splunkqueries.md)
topic for additional information.

## Examples

Below are the different displays of the same Worker service's JIT access granted action
"WINCOMP-CH.cstest.test - Adding admin privileges: CSTEST\\chadmin". This message is generated
whenever the "Access System" button on the Grant Access page of a system is clicked and a successful
JIT request is granted for that user.

![mceclip0.webp](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_mceclip0.webp)

Here's the command line "raw" event log for this JIT access granted event, directly from the
Privilege Secure application.

2022-08-02 19:08:54 +0000 docker.s1_worker.1.r4fivzgzb6tbc4jqn9o5j4kpb: \{
"container_id": "f7ca06d64ed806ab1b8ff2e2afaf4ff5ae99613fa6e33bb99fa6922224894bf8",
"container_name": "/s1_worker.1.r4fivzgzb6tbc4jqn9o5j4kpb",
"source": "stderr",
"log": "REMOVED_FOR_DISPLAY_PURPOSES",
"jobId": "a0448212-c3d0-4b0c-91df-e33d7dc9eb48",
"levelname": "INFO",
"message": "WINCOMP-CH.cstest.test - Adding admin privileges: CSTEST\\chadmin",
"name": "remediant",
"queue": \{
"_id": "62e9764602c5350045aaebd7",
"request": \{
"status": "pending",
"type": "access"
\},
"requested_by": "5e5623b8dea345d0a59e6af9",
"requested_by_info": \{
"distinguishedName": "CN=chadmin,CN=Users,DC=cstest,DC=test",
"domain_fqdn": "cstest.test",
"domain_netbios": "CSTEST",
"sAMAccountName": "chadmin"
\}
\},
"requestedByUser": \{
"_id": "5e5623b8dea345d0a59e6af9",
"domain_netbios": "CSTEST",
"objectSid": "S-1-5-21-4099641008-4128879968-2022382535-1115",
"sAMAccountName": "chadmin"
\},
"service": "svc-worker",
"system": "Main",
"targetSystem": \{
"_id": "61171f0792416d1dd3a9eac7",
"cn": "WINCOMP-CH",
"distinguishedName": "CN=WINCOMP-CH,OU=Servers,DC=cstest,DC=test",
"domain_netbios": "CSTEST",
"policy": \{
"manage_local_sids": true,
"scan": false,
"secure": true,
"strict_secure": false
\}
\},
"targetUser": \{
"_id": "5e5623b8dea345d0a59e6af9",
"domain_netbios": "CSTEST",
"objectSid": "S-1-5-21-4099641008-4128879968-2022382535-1115",
"sAMAccountName": "chadmin"
\},
"threadName": "Worker-23"
\}

Here's the same event log, from the command line in a screenshot for visual comparison.

![blobid0.webp](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_blobid0.webp)

Lastly, here's what the event log for the same JIT access granted action looks like in Splunk when
the JSON message is successfully parsed.

![blobid1.webp](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_blobid1.webp)

For Splunk parsing, the use of the "_json" Source Type selection is located under the Settings >
Data Inputs > HTTP Event collector > "SecureONE" token > Source Type drop down list.

**NOTE:** The Token name in the below image is "secureone" but this can be named anything to
reference the Privilege Secureapplication within Splunk.

![mceclip1.webp](/images/privilegesecure/4.2/discovery/integrations/siem/7742334174999_mceclip1.webp)

More information on Splunk source types can be viewed here: 
[https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/Data/Whysourcetypesmatter](https://docs.splunk.com/Documentation/SplunkCloud/8.2.2203/Data/Whysourcetypesmatter)
