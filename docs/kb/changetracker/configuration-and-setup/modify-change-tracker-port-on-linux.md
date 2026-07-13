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

> **IMPORTANT:** This change requires a reboot of the Netwrix Change Tracker server.

## Instructions

1. Stop `nnthubservice`, `nginx`, and `mongod` in order:

   - Option 1 (**`service`**):

     ```bash
     # service nnthubservice stop
     # service nginx stop
     # service mongod stop
     ```

   - Option 2 (**`systemctl`**):

     ```bash
     # systemctl stop nnthubservice
     # systemctl stop nginx
     # systemctl stop mongod
     ```

2. Edit `/etc/nginx/conf.d/nnt.conf` using a text editor with root permissions:

   - Option 1 (**`vi`**):

     ```bash
     # sudo vi /etc/nginx/conf.d/nnt.conf
     ```

   - Option 2 (**`nano`**):

     ```bash
     # sudo nano /etc/nginx/conf.d/nnt.conf
     ```

3. Find the `listen` directive and change the port to the desired value. This example changes port `443` to port `3443`:

   ```nginx
   server {
   listen 3443 ssl;
   ```

4. Update SELinux settings to allow the new port. Substitute your new port number:

   ```bash
   # semanage port -a -t http_port_t -p tcp 3443
   ```

5. Reboot the Linux server for the changes to take effect:

   ```bash
   # reboot
   ```

6. Start `nnthubservice`, `nginx`, and `mongod` in order:

   - Option 1 (**`service`**):

     ```bash
     # service nnthubservice start
     # service nginx start
     # service mongod start
     ```

   - Option 2 (**`systemctl`**):

     ```bash
     # systemctl start nnthubservice
     # systemctl start nginx
     # systemctl start mongod
     ```
