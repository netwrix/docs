---
title: "Access Analyzer 26 Tab"
description: "Access Analyzer 26 Tab"
sidebar_position: 41
---

# Access Analyzer 26 Tab

Use the Access Analyzer 26 tab on an output Properties window to modify the connection between Activity Monitor and Netwrix Access Analyzer 26. These settings are initially configured when the output is added.

:::note
Only File System, SharePoint Online, and Microsoft 365 Copilot events are supported by the Access Analyzer 26 output.
:::

Select an Access Analyzer 26 output from the Monitored Hosts/Services tab and click **Edit** to open the output Properties window.

The tab contains the following settings:

- Server in SERVER:PORT format – Server name of the Netwrix Access Analyzer 26 application server and
  the communication port being used between the applications. The format must be SERVER:PORT, e.g.
  newyorksrv10:4504.

    - The server name can be a short name, fully qualified domain name (FQDN), or IP address, as long as the agent can resolve it.
    - The default port for Netwrix Access Analyzer 26 is 4504.

- Enrollment Token – A code generated in **Configuration > Application Settings** of Netwrix Access Analyzer 26.

Click **Enroll** to establish a connection to Access Analyzer. The Activity Monitor agent connects to the server, compares the server's certificate to the expected one embedded in the enrollment token, and sends the token to Access Analyzer. If Access Analyzer confirms the enrollment, both products store the peer certificate's Subject Public Key Info (SPKI) SHA-256 hash and use mTLS with SPKI hash pinning for mutual authentication. You no longer need the enrollment token after this step.

If a certificate changes so that its SPKI hash changes — for example, when the agent generates a new key pair — you must re-enroll. Generate a new token and click **Enroll** again.

## Generate an Enrollment Token

To generate a token in Netwrix Access Analyzer 26:

1. Log in to Access Analyzer.
2. Go to **Configuration > Application Settings**.
3. Scroll to the **Activity Monitor** section.
4. Under **Enrollment Token**, click **Generate Token**.
5. Copy the token using the clipboard icon.

:::note
Tokens expire after **1 hour**. Generating a new token immediately invalidates any previously issued token.
A single token can enroll multiple agents and outputs simultaneously — plan your enrollment session and generate the token immediately before you begin.
:::

See the [Netwrix Access Analyzer 26 Documentation](/docs/accessanalyzer/2601/configurations/activity-monitor-integration) for additional information.
