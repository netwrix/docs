---
title: "Deploy a Scanner"
description: "Register a custom scanner node in Access Analyzer"
sidebar_position: 30
---

# Deploy a Scanner

Deploying a scanner registers a remote Linux host as a custom scanner node in Access Analyzer. After deployment, the scanner appears in the Scanners table and becomes available for selection in source group configuration.

## Before you begin

- Confirm the scanner host meets all [requirements](./requirements.md).
- Create an **SSH Username / SSH Key** service account in Access Analyzer with access to the scanner host. You can also create it inline during the wizard — see step 5 below.
- Have the scanner host's public SSH host key ready. You can retrieve it by running the following command from any machine that can reach the host, replacing `<host>` with the scanner's hostname or IP address:

  ```bash
  ssh-keyscan <host>
  ```

  Copy the line that begins with the host's address followed by the key type (for example, `ecdsa-sha2-nistp256`) and the key value.

## Deploy the scanner

1. Navigate to **Configuration** > **Scanners**.
2. Click **Deploy Scanner**. The Deploy Scanner drawer opens.
3. In the **Name or IP** field, enter the hostname or IP address of the scanner host (for example, `scanner01.company.com` or `192.168.1.50`).
4. In the **SSH Host Key** field, paste the public SSH host key you retrieved during preparation. Access Analyzer uses this key to verify the host identity during registration.
5. In the **Service Account** dropdown, select the SSH Username / SSH Key account that has access to the scanner host.

   - To create a new service account without leaving the wizard, click **+** next to the dropdown. The account type is pre-set to SSH Username / SSH Key. After saving, the new account is automatically selected and all other fields are preserved.
   - To edit the selected account, click the pencil icon. The SSH key field is blank in edit mode — you must re-enter the private key before saving.

6. Under **Labels**, add at least one label. Labels are required and are used to route scans from source groups to this scanner.

   - Enter a key and a value, then press **Enter**. The label appears as a chip.
   - To add additional labels, repeat the process.
   - To remove a label, click the **×** on its chip.
   - Label keys and values are automatically normalized to lowercase with spaces converted to hyphens.

   :::tip
   Previously used labels appear as chips you can click to pre-fill the key and value fields. This helps you apply consistent labels across multiple scanners.
   :::

7. Optionally, click **Test Connection** to verify that Access Analyzer can reach the scanner host over SSH before deploying. A green indicator confirms connectivity; a red indicator with a message identifies the problem.

8. Click **Deploy**. Access Analyzer connects to the scanner host over SSH and runs the registration script.

## What happens during registration

Registration runs automatically and typically completes within five minutes. During registration, Access Analyzer:

1. Runs a preflight check on the scanner host to verify all requirements are met (curl, bash, passwordless sudo, disk space, memory, and CPU).
2. Downloads and installs k3s (a lightweight Kubernetes distribution) on the scanner host.
3. Joins the scanner host to the Access Analyzer Kubernetes cluster as a worker node.
4. Applies the labels you specified.

If registration takes longer than five minutes, check network connectivity and confirm the scanner host can reach `https://get.k3s.io`. Slow networks or resource-constrained hosts may require additional time.

## After deployment

The scanner appears immediately in the Scanners table. Its health status shows **Healthy** once the node has fully joined the cluster.

To use the scanner, assign it to a source group by selecting **Custom scanner** under **Scanner Location** when setting up or editing a source group, and matching its label. See [Set Up File Server Source Group](../../../gettingstarted/file-servers/set-up-source-group.md) or the equivalent guide for your connector.

## Edit a scanner

To update a scanner's labels or service account after deployment:

1. Navigate to **Configuration** > **Scanners**.
2. Click the edit icon on the scanner row. The Deploy Scanner drawer opens with the scanner's current configuration pre-filled.
3. Update the labels or service account as needed.
4. Click **Save Changes**.

Changes appear immediately in the Scanners table and in the scanner selection dropdown in source group configuration.
