---
title: "SSH into Privilege Secure Node(s)"
description: "SSH into Privilege Secure Node(s)"
sidebar_position: 60
---

# SSH into Privilege Secure Node(s)

SSH into Privilege Secure Node(s)

# SSH into Privilege Secure Node(s)

This guide will go through the steps for accessing a Privilege Secure node via an SSH client as know
as a terminal session/program.

### NOTE:

A terminal (SSH) program will need to be installed on the local machine you are accessing Privilege
Secure's nodes from, if the machine's OS is Windows. If the OS is Linux (Ubuntu, etc...) or Mac then
these OS's have native SSH terminals that can be used. There are a number of terminal programs that
can be used. For this process we will be showing access through Putty's terminal program, which can
be downloaded here

1. To start, download a terminal program like Putty
   ([https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html))
   onto your local machine.
2. After successful installation, open Putty and enter the IP address for one of the Privilege
   Secure nodes. To view the IP addresses for Privilege Secure, log into the UI and navigate to the
   Configure > Server page. The IP's will be listed at the top of that page.
3. Next, in the PuTTY Configuration window, enter the following values:
4. In the **Host Name** field, enter the Internet Protocol (IP) address of your Privilege Secure
   Server, found in step #2 above.

- Ensure that the connection type is set to **SSH**.
- (_Optional_) In the **Saved Sessions** field, assign a name for this connection. Assigning a name
  saves time the next time that you use Putty. You can assign a different name for each of your
  Cloud Servers.

- Click **Open**.

- Note: Accept the key - If this is the first time that you have used PuTTY to log in to your server
  with SSH, a warning similar to the following one displays:

- The next screen will show a prompt for username first them password. The default username will be
  _secureone_ and the password will be provided by a Netwrix member.

**ACCESS TO ANOTHER NODE IN THE CLUSTER:**

To access a different node in SecureONE repeat step #2 with the other nodes IP address.
