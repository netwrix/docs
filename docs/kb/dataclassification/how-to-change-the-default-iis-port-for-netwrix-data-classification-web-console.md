---
description: >-
  Shows how to change the default IIS port used by the Netwrix Data
  Classification Web Console by editing site bindings in IIS Manager.
keywords:
  - Netwrix Data Classification
  - IIS
  - port
  - site bindings
  - web console
  - IIS Manager
  - binding
  - port 80
  - change port
products:
  - data-classification
sidebar_label: How to Change the Default IIS Port for Netwrix Dat
tags: []
title: >-
  How to Change the Default IIS Port for Netwrix Data Classification Web
  Console?
knowledge_article_id: kA0Qk0000000MzpKAE
---

# How to Change the Default IIS Port for Netwrix Data Classification Web Console?

## Question

How to change the port 80 that comes with a default Netwrix Data Classification installation?

## Answer

The default IIS configuration of the Netwrix Data Classification is typically performed on the **Administration Web Application** step of the installation procedure. Learn more in Deployment — Install Netwrix Data Classification — v5.7

Follow the steps below to change the default IIS port for the web console:

1. Start the **IIS Manager**: navigate to **Control Panel** **Administrative Tools** > **Internet Information Services (IIS) Manager**.
2. In the **Connections** menu on the left, expand **Sites** > **Default Website**.
3. Click the **Bindings** link under **Actions**.
4. In the **Site Binding** window, click **Edit**.
5. Modify the binding port, for example, `403`.

The new port is now set.
