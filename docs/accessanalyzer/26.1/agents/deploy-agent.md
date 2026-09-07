---
title: Deploy an agent
description: Prepare a Linux host and an SSH service account, deploy the agent from the Agents page, and edit or remove it later.
sidebar_position: 1
---

Access Analyzer installs agents for you. You point it at a Linux host it can reach over SSH, and the server runs a set of checks, installs the agent software, and joins the host to the installation. You don't install anything on the host by hand.

You need the Admin role for everything on this page. Viewers can see the Agents page but can't deploy, edit, or remove agents.

## Prepare the host

The host needs a Linux operating system with `bash`, `curl`, and `sudo` installed, an SSH user the server can sign in as, and enough headroom to run scans. Access Analyzer checks every requirement in this table before it installs anything, both when you click **Test connection** and again at the start of a real deployment.

| Requirement | Minimum |
|---|---|
| CPU | 2 cores |
| Memory | 512 MB available |
| Disk | 5 GB free on `/` |
| SSH user | Can run `sudo` without a password |
| Tools | `bash`, `curl`, and `sudo` on the path |
| Internet | Can reach `https://get.k3s.io` |

The host also needs these network paths; every port is Transmission Control Protocol (TCP). [Requirements](../install/requirements.md) lists the server side of the first two rows.

| Direction | Port | Purpose |
|---|---|---|
| Server to host | TCP 22, or the port you enter in **SSH port** | SSH session that installs and configures the agent |
| Host to server | TCP 6443 | The agent's connection to the Access Analyzer server |
| Host to `get.k3s.io` | TCP 443 | Agent software installer |
| Host to `raw.githubusercontent.com` | TCP 443 | Installer checksum |
| Host to `oci.pkg.keygen.sh` | TCP 443 | Licensed software distribution for scan components |

A deployed agent runs scan work and nothing else. Access Analyzer places nothing else on it.

## SSH service account

Access Analyzer signs in to the host with a service account of type **SSH username/key**. The account holds two values: **SSH username**, the Linux user to sign in as, and **SSH key**, that user's private key pasted in PEM or OpenSSH format. The key must not have a passphrase; deployment rejects a passphrase-protected key. The user must be able to run `sudo` without a password prompt.

You can create the account ahead of time under **Configuration > Service accounts**, or from inside the Deploy agent panel with the **Add new service account** button next to the **Service account** field. The inline **Add service account** form fixes the type to **SSH username/key**; click **Add account** to save it. Either way the result is the same account, and you can reuse it for every agent that uses the same user and key. The field-level detail is in [SSH username and key](../service-accounts/ssh-key.md).

The host key isn't part of the service account. Each agent has its own, entered when you deploy it.

## Get the host key

Access Analyzer checks the host's SSH identity against the key you enter and refuses to continue if the host presents a different one. Collect the public host key from a machine that can reach the host, such as the Access Analyzer server:

```bash
ssh-keyscan -t ecdsa <host>
```

If SSH listens on a port other than 22, add `-p <port>`. The output line begins with the hostname; copy the key type and the key that follow it, for example `ecdsa-sha2-nistp256 AAAA…`. That is the value the **SSH host key** field expects: a key type, a space, and the key. If you can, compare it with the key on the host itself before you trust it.

## Deploy the agent

1. Go to **Configuration > Agents**.
2. Click **Deploy agent**.

   ![Deploy agent panel with Name, SSH host, SSH host key, SSH port, Service account, and Labels](/images/accessanalyzer/26.1/agents/deploy-agent.webp)

3. In **Name**, enter a name for the agent.
4. In **SSH host**, enter the hostname or IP address of the host.
5. In **SSH host key**, paste the host key you collected.
6. In **SSH port**, enter the SSH port if it isn't 22.
7. In **Service account**, select the SSH account. To create one now, click **Add new service account**.
8. Under **Labels**, add at least one label, such as `env=production` or `region=us-east`. Labels are how scans find this agent; see [Agent labels and scan routing](agent-labels.md).
9. To check the host before installing anything, click **Test connection** and wait for **Connection successful**.
10. Click **Deploy**.

When deployment finishes, the panel closes, a notification reads `Agent "<name>" deployed`, and the agent appears in the list with its **Health Status** and **Last Heartbeat**.

### Fields

| Field | What to enter | Rules |
|---|---|---|
| **Name** | A display name, for example `Production Agent` | Required; up to 255 characters |
| **SSH host** | Hostname or IP address, for example `node01.company.com` or `192.168.1.50` | Required; up to 255 characters; must be a valid hostname or IP address |
| **SSH host key** | The host's public key as `<key-type> <key>` | Required; must match the key the host presents |
| **SSH port** | The SSH port | Optional; 1 to 65535; defaults to 22 |
| **Service account** | An account of type SSH username/key | Required; the list shows only SSH accounts; **Edit credentials** opens the selected account |
| **Labels** | One or more `key=value` pairs | At least one required; keys and values are lowercased and spaces become hyphens |

If you close the panel with unsaved changes, Access Analyzer asks you to confirm.

### Test connection

In the Deploy agent panel, **Test connection** becomes available after you fill in **SSH host**, **SSH host key**, and **Service account**. It signs in to the host and runs the checks from [Prepare the host](#prepare-the-host), installing nothing. The button reads **Testing...** while it runs.

A green **Connection successful** alert means every check passed. It can carry warnings underneath. A red alert reports what failed, for example a missing `curl`, a `sudo` that prompts for a password, or too little free disk. The result clears if you change any of the connection fields.

### Deployment sequence

1. The server signs in over SSH and runs the same checks as **Test connection**.
2. It configures the host to download scan components from the software distribution service, authenticated with your license key, and writes the key to a root-only file on the host.
3. It installs the agent software on the host at the same version the server runs.
4. The host connects to the server on port 6443 and joins the installation.
5. The server applies the name and labels you entered to the agent.

Allow about five minutes. Installation typically takes three to four minutes, and the server allows five minutes for the whole deployment, from signing in over SSH to the agent checking in. If it hasn't checked in by then, deployment still finishes. The Agents list refreshes every 60 seconds, so the agent can still appear a little later.

If deployment fails, the panel shows the reason. Causes include an SSH user without passwordless `sudo`, a host that can't reach the server on port 6443, and a pasted host key that doesn't match the host.

## Edit an agent

1. Go to **Configuration > Agents**.
2. In the agent's **Actions** menu, click **Edit**.

   ![Agent row menu with Edit](/images/accessanalyzer/26.1/agents/row-actions.webp)

3. Change the **Name** or the **Labels**. A deployed agent must keep at least one label.

   ![Edit agent panel with Name and Labels](/images/accessanalyzer/26.1/agents/edit-agent.webp)

4. Click **Save changes**.

The SSH fields don't appear when you edit. Access Analyzer uses SSH only to deploy the agent; after that, the agent talks to the server over its own connection and no longer needs the host key or service account.

**Test connection** works differently here: instead of checking the host over SSH, it sends a short test task through the agent and confirms it runs. It's a quick way to prove a deployed agent can accept work. Success shows **Connection successful**; a failure shows the server's message.

You can't rename or relabel the System agent, listed as **Default Agent**; opening **Edit** on it shows **Name** and **Labels** locked.

## Remove an agent

1. Go to **Configuration > Agents**.
2. In the agent's **Actions** menu, click **Delete**.
3. Click **Delete Agent** to confirm.

A notification reads `Agent "<name>" deleted`, and the agent leaves the list.

Removal takes the agent out of Access Analyzer. The server doesn't connect to the host again, and the agent software stays installed there until you remove it yourself.

You can't remove an agent while a scan is running on it; the attempt fails with **Failed to delete agent**. Wait for the execution to finish, or stop it from [Scan executions](../scans/scan-executions.md), then try again.

Scans whose agent label pointed at the removed agent keep that label. Their next execution waits until another agent with matching labels is available, as described in [Agent labels and scan routing](agent-labels.md#when-no-agent-matches). Edit those scans, or deploy a replacement agent with the same labels, before their next scheduled run.

The System agent has no **Delete** action.
