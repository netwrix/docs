---
title: "1Secure Cloud Agent Tab"
description: "1Secure Cloud Agent Tab"
sidebar_position: 41
---

# 1Secure Cloud Agent Tab

Activity Monitor can forward activity from monitored file storage devices to Netwrix 1Secure, a SaaS solution for auditing and reporting. 
Activity Monitor agents send events to the Netwrix Cloud Agent, which uploads them to 1Secure. 

:::note
1Secure supports only File System activity events.
:::

Use the 1Secure Cloud Agent tab on an output Properties window to modify the connection between Activity Monitor and Netwrix 1Secure Cloud Agent. 
Configure these settings initially when you add the output.

Select a Netwrix 1Secure Cloud Agent output from the Monitored Hosts/Services tab and click **Edit** to open the output Properties window.

The tab contains the following settings:

- Server in SERVER:PORT format – Server name of the Netwrix 1Secure Cloud Agent and
  the communication port. The format must be `SERVER:PORT`, e.g. `NWXSRV01:4507`.

    - The server name can be a short name, fully qualified domain name (FQDN), or IP address, as long as the agent can resolve it.
    - The default port for Netwrix Cloud Agent is 4507.

- Enrollment Code – A code generated in **Netwrix Cloud Agent Configuration** tool.

Click **Enroll** to establish a connection to 1Secure Cloud Agent. The Activity Monitor agent connects to the server, 
compares the server's certificate to the expected one embedded in the enrollment code, and sends the code to 1Secure Cloud Agent. 
If Cloud Agent confirms the enrollment, both products store the peer certificate's Subject Public Key Info (SPKI) SHA-256 hash and 
use mutual TLS (mTLS) with SPKI hash pinning for mutual authentication. You no longer need the enrollment code after this step.

If a certificate changes so that its SPKI hash changes — for example, when the agent generates a new key pair — you must re-enroll. 
Generate a new code and click **Enroll** again.

## Generate an Enrollment Code

To generate a code in 1Secure Cloud Agent Configuration:

1. On the Cloud Agent server, open the **Netwrix Cloud Agent Configuration** application.
2. Under Activity Monitor connection status, click **Configure**.
3. Click **Copy Enrollment Code to Clipboard**.

:::note
The enrollment code is valid for 1 hour. You can use it more than once to connect multiple storage devices.
:::


See the [1Secure Integration](/docs/activitymonitor/10.2/requirements/activityagent/1secure-integration.md) topic for additional information.
