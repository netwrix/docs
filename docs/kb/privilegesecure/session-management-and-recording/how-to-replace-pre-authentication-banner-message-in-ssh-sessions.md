---
description: >-
  Replace the SSH pre-authentication banner with custom text by editing
  sbpam_ssh.json on every Privilege Secure server.
keywords:
  - SSH banner
  - pre-authentication banner
  - sbpam_ssh.json
  - Netwrix Privilege Secure
  - PAM
  - ProxyService
  - 'C:\ProgramData\Stealthbits\PAM\ProxyService'
  - listenaddress
  - SSH sessions
products:
  - privilegesecure
sidebar_label: Replacing the Pre-Authentication Banner Message in SSH Sessions
tags:
  - kb
  - session-management-and-recording
title: "Replacing the Pre-Authentication Banner Message in SSH Sessions"
knowledge_article_id: kA0Qk0000000YPtKAM
---

# Replacing the Pre-Authentication Banner Message in SSH Sessions

## Overview

This article describes how to replace the pre-authentication banner message with a regular text output in Netwrix Privilege Secure for Access Management.

## Instructions

Complete the following steps:

1. On all Privilege Secure servers, go to the following path:
   `C:\ProgramData\Stealthbits\PAM\ProxyService\`
2. **Optional:** If the `sbpam_ssh.json` file is missing from the target directory, create it and follow these steps.
3. Locate the `sbpam_ssh.json` file and edit it using a text editor.
4. Add the following node to the file:

   ```json
   {
   "listenaddress": "0.0.0.0:4422",
   "banner": "New text output from server for SSH sessions"
   }
   ```

5. **Optional:** If the file contains any other data, place a comma before the opening brace. See the following example:

   ```json
   ,{
   "listenaddress": "0.0.0.0:4422",
   "banner": "New text output from server for SSH sessions"
   }
   ```

6. Save the changes.
