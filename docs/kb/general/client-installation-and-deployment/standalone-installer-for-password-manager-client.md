---
description: >-
  Shows how to install the Netwrix Password Reset client (Logon Prompt
  Extension) silently using the standalone prm_client.msi for deployment via
  Group Policy.
keywords:
  - prm_client.msi
  - silent install
  - GPO
  - Logon Prompt Extension
  - Netwrix Password Reset
  - installer
  - deployment
  - Administrator Guide
products:
  - general
sidebar_label: Standalone installer for Password manager client
tags:
  - client-installation-and-deployment
title: "Standalone installer for Password manager client"
knowledge_article_id: kA00g000000H9WICA0
---

# Standalone installer for Password manager client

You may want to create an install for the Netwrix Password Reset client (Logon Prompt Extension) with no user interaction so that you can push it out through a GPO.

For installation of the client via Group Policy, you can use the separate `prm_client.msi` installer.

It can be found in the program installation directory after installing a server part (by default `C:\Program Files (x86)\NetWrix Password Manager`).

GP installation is described in the procedure 4 page 11 of the [Administrator's guide](https://www.netwrix.com/download/documents/NetWrix_Password_Manager_Administrator_Guide.pdf).
