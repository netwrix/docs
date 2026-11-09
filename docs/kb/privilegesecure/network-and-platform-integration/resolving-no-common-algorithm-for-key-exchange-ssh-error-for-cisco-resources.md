---
description: >-
  Resolve the SSH error "no common algorithm for key exchange" on Cisco
  resources by adding a key exchange algorithm to sbpam_sshclient.json.
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
  - handshake failed
  - KeyExchanges
products:
  - privilegesecure
sidebar_label: 'Resolving "No Common Algorithm for Key Exchange" SSH Error for Cisco Resources'
tags:
  - kb
  - network-and-platform-integration
title: 'Resolving "No Common Algorithm for Key Exchange" SSH Error for Cisco Resources'
knowledge_article_id: kA04u000000LLlLCAW
---

# Resolving "No Common Algorithm for Key Exchange" SSH Error for Cisco Resources

## Overview

This article describes how to resolve the SSH error "no common algorithm for key exchange" when Netwrix Privilege Secure for Access Management brokers an SSH connection to a Cisco resource.

> **IMPORTANT:** This article applies only to Cisco connections.

Privilege Secure may not be configured to use the same key exchange algorithm as a target resource when brokering an SSH connection. In that case, the following error appears in the **PAM-SSHClient** log:

```text
Error="ssh: handshake failed: ssh: no common algorithm for key exchange; client offered: [ARRAY_OF_ALGORITHMS], server offered: [ARRAY_OF_ALGORITHMS]"
```

> **NOTE:** In this error, the two arrays of algorithms do **not** contain any shared algorithms.

## Instructions

Complete the following steps to configure the use of the same key exchange algorithm as a target resource when brokering an SSH connection:

1. Choose an acceptable algorithm from the list of **server offered** algorithms given in the error message you have received. For example, suppose your server offered **diffie-hellman-group14-sha1**.

2. On your **Netwrix Privilege Secure** server, go to the **ActionServiceWorker** directory.

   > **NOTE:** On a default installation, it should be `C:\Program Files\Stealthbits\PAM\ActionServiceWorker`

3. Open the `sbpam_sshclient.json` file in a text editor.

4. Go to the **KeyExchanges** section, which should resemble the following:

   ```json
   "KeyExchanges": [
   		"diffie-hellman-group-exchange-sha256",
   		"diffie-hellman-group-exchange-sha1",
   		"diffie-hellman-group1-sha1"
   ```

5. Modify the array to include your desired algorithm, keeping the array properly comma-separated. In this example:

   ```json
   "KeyExchanges": [
   		"diffie-hellman-group-exchange-sha256",
   		"diffie-hellman-group-exchange-sha1",
   		"diffie-hellman-group1-sha1",
   		"diffie-hellman-group14-sha1"
   ```

   You should now be able to negotiate an SSH connection with the target resource using its preferred algorithm.
