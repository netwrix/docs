---
description: >-
  Use these steps to change the port used by Netwrix Change Tracker on a
  RHEL/CentOS Linux server after installation. This change requires a reboot of
  the Netwrix Change Tracker server.
keywords:
  - Netwrix Change Tracker
  - RHEL
  - CentOS
  - nginx
  - mongodb
  - SELinux
  - nnthubservice
  - semanage
  - port
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9gAAC
sidebar_label: Modifying Change Tracker Port on Linux
tags: [kb, configuration-and-setup]
title: Modifying Change Tracker Port on RHEL/CentOS Linux After Install
---

# Modifying Change Tracker Port on RHEL/CentOS Linux After Install

## Overview

Use this article when you have already installed Netwrix Change Tracker on a RHEL/CentOS Linux OS and need to change the port it uses.

> **NOTICE:** This change requires a reboot of the Netwrix Change Tracker server.

## Instructions

The following steps change the port.

1. Stop `nnthubservice`.

   **Command**

   ```bash
   # service nnthubservice stop
   ```

   or

   ```bash
   # systemctl stop nnthubservice
   ```

2. Stop the nginx service.

   **Command**

   ```bash
   # service nginx stop
   ```

   or

   ```bash
   # systemctl stop nginx
   ```

3. Stop the mongodb service.

   **Command**

   ```bash
   # service mongod stop
   ```

   or

   ```bash
   # systemctl stop mongod
   ```

4. Edit `/etc/nginx/conf.d/nnt.conf` using a text editor (this requires root permissions).

   **Command**

   ```bash
   # sudo vi /etc/nginx/conf.d/nnt.conf
   ```

   or

   ```bash
   # sudo nano /etc/nginx/conf.d/nnt.conf
   ```

5. Edit the following portion of the file:

   **Text to be Edited**

   ```nginx
   server { 
   listen 443 ssl;
   ```

6. Change the number to the desired port (this example changes port 443 to port 3443).

   **Edited Text**

   ```nginx
   server { 
   listen 3443 ssl; 
   ```

7. You will also likely need to update SELinux settings to allow the new port to be used. To do this, run the following command with your new port number specified.

   **Command**

   ```bash
   #semanage port -a -t http_port_t -p tcp 3443
   ```

8. Reboot your Linux server for these changes to take effect. To do so, run the following command.

   **Command**

   ```bash
   # reboot
   ```

After the server has finished rebooting, you may need to start the services stopped in the preceding steps. Use the same commands, but replace `stop` with `start`.
