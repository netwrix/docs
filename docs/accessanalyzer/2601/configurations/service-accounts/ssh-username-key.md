---
title: "SSH Username/Key"
description: "SSH username and private key credentials for source groups that require SSH-based authentication"
sidebar_position: 5
---

# SSH Username/Key

The SSH Username/Key credential type authenticates using an SSH username and private key. Use this credential type for source groups that connect to hosts over SSH.

## Create an SSH Username/Key service account

1. Navigate to **Configuration** > **Service Accounts**.
2. Click **Add Service Account**.
3. In the **Name** field, enter a descriptive name for this service account.
4. From the **Service account type** drop-down, select **SSH Username/Key**.

   ![Add service account form showing SSH Username/Key fields: name, SSH username, and SSH key](/images/accessanalyzer/2601/configurations/add-service-account-ssh.png)

5. In the **SSH Username** field, enter the username for the SSH account.
6. In the **SSH Key** field, paste the SSH private key.
7. Click **Add account**.

## Fields

| Field | Description |
| --- | --- |
| **Name** | A display name that identifies this service account in Access Analyzer. |
| **SSH Username** | The username of the SSH account on the target host. |
| **SSH Key** | The SSH private key used to authenticate. Paste the full private key including the header and footer lines. |
