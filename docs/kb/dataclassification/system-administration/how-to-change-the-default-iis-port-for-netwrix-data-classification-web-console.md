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
  - dataclassification
sidebar_label: How to Change the Default IIS Port
tags:
  - kb
  - system-administration
title: "How to Change the Default IIS Port"
knowledge_article_id: kA0Qk0000000MzpKAE
---

# How to Change the Default IIS Port

## Question

How do you change the default port 80 in a Netwrix Data Classification installation?

## Answer

By default, IIS is configured during the **Administration Web Application** step of the installation procedure. See [Install Netwrix Data Classification](pathname:///docs/dataclassification/5_7/introduction/install/overview) for details.

Follow the steps below to change the default IIS port for the web console:

1. Start the **IIS Manager**: navigate to **Control Panel** > **Administrative Tools** > **Internet Information Services (IIS) Manager**.
2. In the **Connections** menu on the left, expand **Sites** > **Default Website**.
3. Click the **Bindings** link under **Actions**.
4. In the **Site Binding** window, click **Edit**.
5. Modify the binding port, for example, `403`.

The new port is now set.
