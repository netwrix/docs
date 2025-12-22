---
description: >-
  Shows how to replace the SSH pre-authentication banner message with a custom
  text output in Netwrix Privilege Secure by editing the sbpam_ssh.json file on
  Privilege Secure servers.
keywords:
  - SSH banner
  - pre-authentication banner
  - sbpam_ssh.json
  - Netwrix Privilege Secure
  - PAM
  - ProxyService
  - 'C:\ProgramData\Stealthbits\PAM\ProxyService'
products:
  - privilege-secure-access-management
sidebar_label: How to Replace Pre-authentication Banner Message i
tags: []
title: "How to Replace Pre-authentication Banner Message in SSH Sessions"
knowledge_article_id: kA0Qk0000000YPtKAM
---

# How to Replace Pre-authentication Banner Message in SSH Sessions

## Overview

This article covers steps to replace the pre-authentication banner message with a regular text output in Netwrix Privilege Secure.

## Instructions

Refer to the following steps:

Save the changes.

1. On all Netwrix Privilege Secure servers, navigate to the following path:  
   `C:\ProgramData\Stealthbits\PAM\ProxyService\`
2. **Optional:** If the `sbpam_ssh.json` file is missing from the target directory, create it and follow the steps below.
3. Locate the `sbpam_ssh.json` file and edit it using a text editor.
4. Add the following node to the file:

```json
{
"listenaddress": "0.0.0.0:4422",
"banner": "New text output from server for SSH sessions"
}
```

5. **Optional:** In case the file contains any other data, place a comma before the opening brace. Refer to the following example:

```json
,{
"listenaddress": "0.0.0.0:4422",
"banner": "New text output from server for SSH sessions"
}
```

Save the changes.
