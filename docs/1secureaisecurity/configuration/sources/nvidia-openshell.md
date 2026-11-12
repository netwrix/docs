---
title: "NVIDIA OpenShell"
description: "Connect an NVIDIA OpenShell gateway to AI Security with a client certificate so it can read sandboxes as agents, their providers, and network policies."
sidebar_position: 66
---

# NVIDIA OpenShell

Connect NVIDIA OpenShell so AI Security can read one OpenShell gateway with a client certificate that the gateway admits over mutual TLS (mTLS). You take the client certificate and key from the gateway's mTLS client bundle and enter them in AI Security. One client certificate reads one gateway, so connect each gateway as its own source.

OpenShell runs AI agents such as Claude Code in sandboxes under a declarative policy. The gateway is the one place that knows those agents exist. AI Security reads each sandbox as an agent.

## Before you start

- Know the gateway's address, for example `https://openshell.example.com:17670`. The address must use https.
- Have a client certificate and key that the gateway admits, from its mTLS client bundle, as PEM text.
- If a private authority issues the gateway's own certificate, have that authority's certificate as PEM text too.

## Connect NVIDIA OpenShell

### Take the client certificate from OpenShell

1. Take the client certificate and key from the gateway's mTLS client bundle. This is the same pair the `openshell` command line uses to reach that gateway.
2. If a public authority doesn't issue the gateway's certificate, take the certificate authority (CA) certificate from the same bundle.

### Add the source in AI Security

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "NVIDIA OpenShell".
3. In the NVIDIA OpenShell row, click **Connect**. The **Connect NVIDIA OpenShell** dialog opens.
4. In **Gateway URL**, paste the gateway's address. The address also names this source. It must be a public https address. AI Security refuses a private or reserved address, a single-label name, and a name in an internal zone such as `.local` or `.internal`.
5. In **Client certificate**, paste the client certificate.
6. In **Client key**, paste the client key.
7. Optional: in **CA certificate**, paste the CA certificate where the gateway uses a private authority.
8. Click **Connect**. The dialog saves the source, shows "Saved. Testing the connection.", and then shows the test's answer.
9. Click **Done**.

Select the NVIDIA OpenShell row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then "Succeeded". |

## What this connector reads

- Every sandbox in every workspace on the gateway: its name, labels, image, the program it runs, and its state. Each sandbox is one agent. A sandbox deleted and created again under the same name is the same agent and keeps its history.
- The providers attached to each sandbox, read as the credentials the agent runs with. AI Security keeps only the credential names, because the gateway redacts every value. A provider deleted and created again under the same name keeps its identity.
- The profile each provider was created from, and the hosts it lets the credential reach.
- The network policy each sandbox runs under: every endpoint with its host, port, protocol, access, and whether the policy enforces it or only audits it, and the programs allowed to use it.
- The policy version and hash, and whether the sandbox has loaded that version.
- The rules each sandbox proposed after its policy denied something and nobody has approved or rejected yet: the rule, the program that was denied, how often, and when. AI Security doesn't keep the gateway's rationale for a proposal, and it never approves or rejects a proposal.
- What each sandbox did, from the gateway's log of it: every connection and request its policy allowed or denied, with the destination, the policy, and the reason, and every change to its policy that the gateway logged. A scan reads from where the last one stopped, or the last 7 days on the first scan. On a busy sandbox, a scan can miss the oldest lines. The scan then says so and names the sandbox.

### What it never touches

- Credential values. AI Security keeps names only.
- The files inside a sandbox. From a sandbox's log, AI Security keeps only the network decisions and policy changes. It drops a URL's query and doesn't store the sandbox's other log lines.
- AI Security never changes anything on the gateway.

:::warning
The gateway keeps its log in memory only. A gateway restart loses what no scan has read yet.
:::

## Permissions

| Gateway access | What AI Security reads with it | Scan without it |
|--------------|--------------------------------|-----------------|
| Sandbox list | Sandboxes, as agents. | Nothing is read. |
| Sandbox configuration | The policy a sandbox has loaded. | The scan shows the policy the sandbox's operator submitted instead. |
| Draft policy | The rules a sandbox proposed that wait for a decision. | The sandbox's proposed rules are unknown. |
| Provider list | Providers and their credential names. | No credential is known. |
| Provider profiles | The hosts each provider may reach. | Credentials carry no reach. |
| Sandbox logs | What each sandbox reached, and changes to its policy, as activity. | The sandbox's activity is unknown, and the scan reads its state all the same. |
| Workspace members, with the `workspace:read` scope | The workspace's admins, named as administrators of each sandbox in it. | The sandboxes name no administrator. The scan lists "Who administers an OpenShell workspace, though its sandboxes were read." as skipped. |

The client certificate needs the `sandbox:read`, `provider:read`, and `config:read` scopes. A client certificate on a single-user gateway holds all three. Without `config:read` in a workspace, the scan shows the policy that each sandbox's operator submitted in place of the one it runs under.

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address, the certificate, or the key isn't stored. | Click **Edit**, and enter all three. |
| "The stored credential can't be used. Enter it again." | The stored credential can't be used. | Click **Edit**, and enter them again. |
| "The credential works, but access was denied. A permission is missing." | The gateway refused the sandbox list as unauthenticated or permission denied, such as for a client certificate without the `sandbox:read` scope. | Use a client certificate that holds `sandbox:read`, `provider:read`, and `config:read`. |
| "The platform returned a response the scanner doesn't support." | The address answered, but not as an OpenShell gateway. | Check that the address is the OpenShell gateway's own. |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't `https://`, its name is a local, private, or internal address or resolves to one, or the certificate, the key, or the CA certificate can't be read as PEM text. | Click **Edit**, enter the address as `https://` with the host and port, and paste each file's whole contents. |
| "The platform didn't answer, or said it is down or busy." | The gateway didn't answer at that address, or turned the client certificate away in the TLS handshake. | Check the address and port, that AI Security can reach the gateway, and that the gateway admits the client certificate. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to check the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Test again. If it repeats, contact support. |

## Security notes

- AI Security stores the certificate and key when you click **Connect** and never shows them again.
- AI Security presents the certificate only to the gateway address you entered, over TLS.
- To revoke, stop the gateway from admitting this client certificate by reissuing its mTLS client bundle. **Disconnect** on the source removes it from AI Security.
