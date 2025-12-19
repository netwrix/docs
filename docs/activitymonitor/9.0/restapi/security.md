---
title: "Security and Access Control"
description: "Security and Access Control"
sidebar_position: 10
---

# Security and Access Control

## Security

The REST-style API is exposed via TLS v1.2, with a self-signed certificate by default. The port is
customizable, 4494 by default. The IP whitelist can be used to restrict access to the port.

You can use the Activity Monitor Console to allow applications to access the API, change
permissions, or revoke access. The console generates unique Client ID and Secret for each
application.

### Authentication

OAuth 2.0 client-credentials grant is used for authentication. A pair of Client ID and Secret are
used to obtain an access token from the access token URL: `https://localhost:4494/api/v1/token`.
Token expiration intervals are not configurable.

| Type          | Expires in |
| ------------- | ---------- |
| Client Secret | 72 hours   |
| Access Token  | 7 days     |
| Refresh Token | never      |

It is considered a best practice to use short expiration periods for OAuth 2.0 tokens, like 1 hour
for the access token. A shorter period allows you to revoke the access quicker if needed. In case of
Activity Monitor, the Agent is both the authentication server and the resource server. Therefore, it
can validate the token on each and every access to a resource. So, for Activity Monitor long
expiration periods do not make the protocol less secure.

A client is expected to pass the access token in the `Authorization` request header.

:::note
**Use a client library that is secure and fully implements the OAuth 2.0 protocol.** The
sample below shows just a piece of OAuth 2 interaction.
:::


```
curl -X POST -d "client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>&grant_type=client_credentials" https://<AGENT_SERVER>:4494/api/v1/token --insecure
{"access_token":"AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAZpRDOzeUzUikVK9ydmsV1QAAAAACAAAAAAAQZgAAAAEAACAAAAAFzYG4Tasvowq939pou5ADE883Ns2DV-X6_S20RMDcwAAAAAAOgAAAAAIAACAAAAB1IcZrZavgp2Ab63P
8kbCr7NwopOsfz0SeSaXjKVhVC-AAAACix_0klwXoiwiqTZTlaUXCqn9MkquZC84ew9E0-E_vu6FNJ6NDLj7MGCPR-mCi4MRmwr6TYtZ_XfAXRtSh66gbABv-gTnmimruLRWxN2is5twUl563kGpHqnbKydqPNgOy4gXxgR_V08kFut2qPxZ
LsN14yK8Prp1paaQy4-mhONaFIrVx7bOmVIdfVnjEYjwIRdd9QjQEY3wJtnDIEBWi2s-6uYo8tcCEztPiraBpLJC3Tib8NQYu_YxwbzeRun_h2KZOMewLzkfZGS2h9SvvnlxECQ0G5PEfslnAEwC7VEAAAAAxZTm06tyRQNMbw_bLr4FiZi0
y-QipaafBBRtm83q-l6bG9bQ-C1Hr19-0H6KgzDb3_JJWxxNmGdD-wG95wjlD","token_type":"bearer","expires_in":604799,"refresh_token":"AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAZpRDOzeUzUikVK9ydmsV1QAAAA
ACAAAAAAAQZgAAAAEAACAAAAAocNSP3GFuJ0RK_1dsX5uSR4dmiqzhV7-LYhc9sYbF2gAAAAAOgAAAAAIAACAAAABQuudDm06II62U6vM2u9CczyRa1siP-H3WfP6iDYOmh-AAAADjzqzTweG14Gngd68rC3BX4GA4kBR5FA8JVVly3KHUS2
Q-SD9q4S9C3yLZxv2k_zGr2YA_bVdfZ78vRCUYC3QgbpJTjzYPWnPNW5RsqLLtd47h6THU5Wc0RkoBG4c8gB569Jvl0WkAG3xJFHitbUQISYbSosd-cIW4JZkHzcT3zkPgAtLkNyhqQd1g1jgCzP63MCAFq1AN2NB2wLCk_jNRi8aypxR1Ty
F5HpSlZ6QzVNycMNeckayAEOCAUAXwx_tBVhqvUwn7YEF_bT2WYoW9boU_IUzWKtO8R5MXsVR6aEAAAAATVk3stUcghjkgv6abuLddE9Hf2S0o9Gpmp4UPallX6dIbAvm10f-De1aTU-jG7LJMdAv2PKVyuGiyUzI-DE0K"}

```

### Authorization

A user assigns permissions to a client application. Permissions can be combined.

Activity Monitor 9.0 permissions:

| Permission           | Description                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Access activity data | Provides minimal access rights to list and download the log files.                                                          |
| Read                 | Read-only access to all the information about all agents, domains, and hosts. Does not allow one to download the log files. |
| Policy change        | Add, modify, and delete the AD monitoring policies.                                                                         |
| Modify host          | Add, modify, enable, disable, and delete Hosts and their Outputs.                                                           |
| Modify agent         | Add, modify, and delete agents.                                                                                             |

An unauthorized request fails with `401 Unauthorized` (instead of `403 Forbidden`) when the resource is
specified explicitly, by ID. For collections, the API Server removes unauthorized resources from
results.

`Access activity data` is special. It provides limited information only about the agent which hosts
the API server, limited monitored domain information, limited monitored hosts/services information, and
outputs - just enough to get information about the log files. See "Detailed Only" column in the next
section for the list of attributes not included into the limited information.

Here is how the permissions affect the returned resources:

| Permission\Resource  | Agent                          | Host                                   | Domain                                  | Output                                   | Policy | Log File                |
| -------------------- | ------------------------------ | -------------------------------------- | --------------------------------------- | ---------------------------------------- | ------ | ----------------------- |
| Read                 | All agents, all info           | All hosts, all info                    | All domains, all info                   | All                                      | All    | None                    |
| Access activity data | Only this agent. Limited info. | This agent's hosts only. Limited info. | This agent's domain only. Limited info. | Outputs of this agent's hosts and domain | None   | All files of this agent |
