---
description: >-
  Learn how to review and change the Netwrix Endpoint Protector (EPP) server IP
  address, communication port number, or department code on a Windows endpoint
  without reinstalling the client.
keywords:
  - endpoint protector
  - set server ip
  - EppSetServer.exe
  - SetServerIP.7z
  - server IP
  - communication port
  - department code
  - Windows endpoint
products:
  - endpointprotector
sidebar_label: Update the Endpoint Protector Server IP Address on a Windows Endpoint
tags:
  - administration-security-and-monitoring
  - kb
title: "Update the Endpoint Protector Server IP Address on a Windows Endpoint"
knowledge_article_id: kA0Qk0000002B6EKAU
---

# Update the Endpoint Protector Server IP Address on a Windows Endpoint

## Overview

This article explains how to review and change the Netwrix Endpoint Protector (EPP) server IP address, communication port number, or department code on a Windows endpoint machine without uninstalling and reinstalling the Netwrix Endpoint Protector Client. These steps allow you to redirect communication from an old EPP server to a new one or update connection details as needed.

> **IMPORTANT:** Netwrix recommends addressing the EPP server by its fully qualified domain name (FQDN) instead of an IP address. When clients use an FQDN, moving the server to a new IP address requires only a DNS record update, and you do not need to run this procedure on every endpoint.

## Instructions

### Configure Settings via EPP Console

1. Download the Endpoint Protector Set Server IP application:  
   [SetServerIP.7z ⸱ Netwrix 🡥](https://download.endpointprotector.com/Support_files/SetServerIP.7z)
2. Extract the contents from the `SetServerIP.7z` archive into a new folder.
3. Check the current EPP Client details:
   1. Open the notifier.
   2. Click the **Settings** tab.
   3. Press `ALT + CTRL + I`.  

   The notifier displays the current configuration details:

   ![Current configuration details in Netwrix Endpoint Protector Notifier](./../0-images/ka0Qk000000EcJx_0EMQk00000C91kM.png)

4. Open the folder containing the `SetServerIP` application and run `EppSetServer.exe`.
5. Enter the new EPP server IP address, communication port number, or department code.
6. Click **Update** to apply the new settings.
7. After a message confirms the update was successful, restart the Windows endpoint machine for the changes to take effect.
8. Repeat step 3 to confirm that the Netwrix Endpoint Protector Client shows the new details.

### Configure Settings via Script

1. Download the Endpoint Protector Set Server IP application:  
   [SetServerIP.7z ⸱ Netwrix 🡥](https://download.endpointprotector.com/Support_files/SetServerIP.7z)
2. Extract the contents from the `SetServerIP.7z` archive into a new folder.
3. Create a new note using Windows Notepad and save the file as `EPPSetServer.bat`. You must change the file extension from `.txt` to `.bat`.
4. Edit the batch file in Notepad and insert the following command, updating the details as needed:

   ```bat
   EppSetServer.exe -ip 192.168.43.113 -port 443 -dept "ITDEP"
   ```

5. Run the script, and then restart the Windows endpoint machine to apply the new details.
