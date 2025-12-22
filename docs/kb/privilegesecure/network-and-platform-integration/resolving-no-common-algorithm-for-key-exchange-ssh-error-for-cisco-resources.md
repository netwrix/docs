---
description: >-
  Explains how to resolve the SSH error "no common algorithm for key exchange"
  when Netwrix Privilege Secure brokers SSH connections to Cisco resources by
  configuring key exchange algorithms in the sbpam_sshclient.json file.
keywords:
  - SSH
  - key exchange
  - diffie-hellman
  - Netwrix Privilege Secure
  - PAM-SSHClient
  - sbpam_sshclient.json
  - ActionServiceWorker
  - Cisco
  - no common algorithm
products:
  - privilege-secure-access-management
sidebar_label: Resolving "No Common Algorithm for Key Exchange" S
tags: []
title: >-
  Resolving "No Common Algorithm for Key Exchange" SSH Error for Cisco
  Resources
knowledge_article_id: kA04u000000LLlLCAW
---

# Resolving "No Common Algorithm for Key Exchange" SSH Error for Cisco Resources

## Overview

> **IMPORTANT:** This article applies only to Cisco connections.

It may occur that Netwrix Privilege Secure is not configured to use the same key exchange algorithm as a target resource when brokering an SSH connection. This will cause the following error to appear in the **PAM-SSHClient** log:

```text
Error="ssh: handshake failed: ssh: no common algorithm for key exchange; client offered: [ARRAY_OF_ALGORITHMS], server offered: [ARRAY_OF_ALGORITHMS]"
```

> **NOTE:** Here, the two arrays of algorithms would **not** contain any shared algorithms.

## Instructions

Refer to the following steps to configure the use of the same key exchange algorithm as a target resource when brokering an SSH connection:

1. Choose an acceptable algorithm from the list of **server offered** algorithms given in the error message you have received. For example, suppose your server offered **diffie-hellman-group14-sha1**.

2. On your **Netwrix Privilege Secure** server, navigate to the **ActionServiceWorker** directory.

   > **NOTE:** On a default installation, it should be `C:\Program Files\Stealthbits\PAM\ActionServiceWorker`

3. Open the `sbpam_sshclient.json` file in a text editor.

4. Navigate to the **KeyExchanges** section, which should resemble the following:

```json
"KeyExchanges": [
		"diffie-hellman-group-exchange-sha256",
		"diffie-hellman-group-exchange-sha1",
		"diffie-hellman-group1-sha1"
```

5. Modify the array to include your desired algorithm, keeping the array properly comma-separated. In our example:

```json
"KeyExchanges": [
		"diffie-hellman-group-exchange-sha256",
		"diffie-hellman-group-exchange-sha1",
		"diffie-hellman-group1-sha1",
		"diffie-hellman-group14-sha1"
```

6. You should now be able to negotiate an SSH connection with the target resource using its preferred algorithm.
