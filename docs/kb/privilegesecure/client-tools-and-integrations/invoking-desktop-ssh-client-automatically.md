---
description: >-
  Shows how to register the sbpam-url protocol handler so a local SSH client
  opens automatically from the Netwrix Privilege Secure user interface.
keywords:
  - sbpam-url
  - ssh
  - URL handler
  - Netwrix Privilege Secure
  - PuTTY
  - protocol handler
  - Windows
  - registry
  - Extras folder
  - NPS-AM
products:
  - privilegesecure
visibility: public
sidebar_label: Invoking Desktop SSH Client Automatically
tags:
  - kb
  - client-tools-and-integrations
title: "Invoking Desktop SSH Client Automatically"
knowledge_article_id: kA04u0000004n11CAA
---

# Invoking Desktop SSH Client Automatically

## Overview

This article describes how to register a URL handler on your desktop using `sbpam-url` so that a local SSH client is invoked automatically for sessions.

## Instructions

> **IMPORTANT:** Do not move the command file after registering it. The registry entry points to the file's original location and breaks if the file is moved.

1. To register a URL handler on your desktop, locate `sbpam-url.exe` in the **Extras** folder of the full Netwrix Privilege Secure for Access Management download and copy it to a permanent folder on your file system.
   - For example, `C:\Tools\sbpam-url\`. Avoid temporary or user-managed locations such as `Desktop` or `Downloads`.

   ![sbpam-url.exe in the NPS-AM Extras folder](./../0-images/ka0Qk000000E5z7_extras-folder.png)

   > **NOTE:** The **Extras** folder also includes batch files with known configurations for popular SSH clients. For information about the full Privilege Secure for Access Management package and its contents, see [Privilege Secure Components](https://docs.netwrix.com/docs/privilegesecure/26_07/install/components).

2. Ensure that your preferred SSH app (for example, PuTTY) is installed and note its installation location.

3. Right-click the Windows command file corresponding to the application you want to register. Ensure that it is configured with the correct installation directory you noted in the previous step. If it is not, edit the file with the correct path and save it.

   ![Editing the Windows command file to configure the correct installation directory](./../0-images/ka0Qk000000E5z7_0EM4u000005yg27.png)

4. Double-click the command file you previously opened to execute it. The command file modifies the registry and registers the application to the URL handler. Your registered SSH client is now invoked automatically when starting SSH sessions from the Privilege Secure user interface.

   ![Executing the command file to register the application](./../0-images/ka0Qk000000E5z7_0EM4u000005yg2C.png)

5. Ensure that your SSH handler is indicated in Windows' **Choose default apps by protocol** settings as **Netwrix Privilege Secure URL Handler**.

   ![Setting Netwrix Privilege Secure URL Handler as the default app by protocol](./../0-images/ka0Qk000000E5z7_0EM4u000008M1Gl.png)

6. If none of these built-in command files are successful, see [Registering and Using the sbpam-url SSH Protocol Handler](/docs/kb/privilegesecure/client-tools-and-integrations/registering-and-using-the-sbpam-url-ssh-protocol-handler.md) for the provided options.
