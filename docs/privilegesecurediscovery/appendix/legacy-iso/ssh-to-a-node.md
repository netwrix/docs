---
title: "SSH to a node"
description: "Connect to a node of an ISO-based Privilege Secure for Discovery deployment through an SSH client such as PuTTY."
sidebar_position: 70
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: The former page referred to a PuTTY security alert for the first connection but contained no screenshots. Capture screenshots of the PuTTY configuration window and the security alert, with no real host names or IP addresses. Evidence: none.
:::

This page applies to ISO-based installations. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

Use a Secure Shell (SSH) client to open a terminal session on a node. A Windows computer needs an SSH client, such as PuTTY. Linux computers have a native SSH client.

## Prerequisites

- An SSH client on the computer that you connect from. This procedure uses [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).
- The user name and password of the administrative account for the node.
- The IP address of the node. To view the IP addresses of the nodes, sign in to the UI and open **Configure** > **Server**. The addresses are at the top of the page.

## Connect to a node

1. Open PuTTY.
2. In **Host Name (or IP address)**, enter the IP address of the node.
3. Set **Connection type** to **SSH**.
4. (Optional) In **Saved Sessions**, enter a name for the connection and select **Save**. A saved session saves time on later connections.
5. Select **Open**.
6. If this is the first time that you connect to the node with PuTTY, a security alert shows the host key of the node. Select **Accept**.
7. When the terminal prompts you, enter the user name and then the password.

## Connect to another node in the cluster

To connect to another node, repeat the procedure with the IP address of that node.
