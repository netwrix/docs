---
title: SSH username and key
description: Create an SSH username/key service account that Access Analyzer uses to deploy agents onto Linux machines.
sidebar_position: 4
---

An SSH username/key account is a Linux username and an SSH private key. Access Analyzer uses it for one purpose: deploying agents. When you deploy an agent, Access Analyzer signs in to the target machine over SSH with this account, runs the preflight checks, and installs the agent software. Scans never use SSH accounts. Agent deployment authenticates with a key only; the **Service account** list in the **Deploy agent** panel shows SSH username/key accounts and nothing else.

## Requirements on the target machine

The user must be able to sign in over SSH with the key you paste and run `sudo` without a password prompt, because the deployment installs system software. The preflight checks also expect `bash` and `curl` on the machine. For the full host requirements, see [Deploy an agent](../agents/deploy-agent.md).

## Key formats

The form accepts a PEM-framed private key: the text must start with `-----BEGIN ` and contain an `-----END ` line. If it doesn't, the form shows **SSH key must be in PEM or OpenSSH format**. Three common formats meet this rule.

| Format | First line |
|---|---|
| OpenSSH | `-----BEGIN OPENSSH PRIVATE KEY-----` |
| Public-Key Cryptography Standards (PKCS) #1 | `-----BEGIN RSA PRIVATE KEY-----` |
| PKCS #8 | `-----BEGIN PRIVATE KEY-----` |

Access Analyzer doesn't support passphrase-protected keys. There's no field for a passphrase, and deployment rejects an encrypted key with the message **passphrase-protected SSH private keys are not supported; provide an unencrypted key**. Create a key without a passphrase and dedicate it to agent deployment.

## SSH host key

The service account identifies Access Analyzer to the machine. The machine's own identity, its SSH host key, isn't part of the account. You enter it per agent, in the **SSH host key** field of the **Deploy agent** panel, next to **SSH host** and **SSH port**. One account can therefore deploy any number of agents. [Deploy an agent](../agents/deploy-agent.md#get-the-host-key) explains how to collect the host key from the machine.

![Deploy agent panel with Name, SSH host, SSH host key, SSH port, Service account, and Labels](/images/accessanalyzer/26.1/agents/deploy-agent.webp)

## Create an SSH username/key service account

1. Go to **Configuration > Service accounts**.
2. Click **Add service account**.
3. In **Name**, enter a name, for example `agent-deploy`.
4. In **Service account type**, select **SSH username/key**.
5. In **SSH username**, enter the Linux username.
6. In **SSH key**, paste the private key.
7. Click **Add account**.

![Add service account dialog with SSH username/key selected](/images/accessanalyzer/26.1/service-accounts/add-ssh-username-key.webp)

### Create the account while deploying an agent

You can also create the account from the **Deploy agent** panel.

1. Next to **Service account**, click the **Add new service account** icon. The **Add service account** panel opens with the type fixed to **SSH username/key** and the description **Add SSH credentials for agent deployment**.
2. In **Name**, enter a name.
3. In **SSH username**, enter the Linux username.
4. In **SSH key**, paste the private key.
5. Click **Add account**. The new account appears in the **Service account** list.

To change a selected account without leaving the panel, click the **Edit credentials** icon next to it. The same panel opens in edit mode, titled **Edit service account**.

## Replace the key

1. In the account's **Actions** menu, click **Edit**.
2. In **SSH key**, paste the new private key.
3. Click **Save changes**.

The **SSH key** field opens empty. To change other fields without replacing the key, leave it empty.

Replacing the key doesn't affect agents that are already deployed. Access Analyzer uses the key only while it deploys an agent.

## Fields

| Field | Required | Notes |
|---|---|---|
| **Name** | Yes | The name shown in the list and in the **Deploy agent** panel. |
| **Service account type** | Yes | Select **SSH username/key**. |
| **SSH username** | Yes | The Linux username, for example `deploy`. |
| **SSH key** | Yes | The private key, pasted in full including its `-----BEGIN` and `-----END` lines. The field is a multi-line text box. |
