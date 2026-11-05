---
description: >-
  Shows how to troubleshoot computers that appear as "Unlicensed" in the List of
  Computers by verifying licenses, updating policies, checking client-server
  connections, and reassigning licenses or reinstalling clients.
keywords:
  - endpoint protector
  - unlicensed
  - licenses
  - EPP client
  - release licenses
  - update policies
  - client connection
  - reinstall
products:
  - endpointprotector
sidebar_label: 'Computers Displayed as "Unlicensed" Under List of Computers'
tags:
  - administration-security-and-monitoring
  - kb
title: 'Computers Displayed as "Unlicensed" Under List of Computers'
knowledge_article_id: kA0Qk0000002B6HKAU
---

# Computers Displayed as "Unlicensed" Under List of Computers

## Symptom
The List of Computers shows computers as "Unlicensed".

## Cause
This issue may be due to insufficient licenses, incorrect client-server configurations, or issues with client deployment.

## Resolution
1. Verify Licenses
   - Navigate to the **Netwrix Endpoint Protector Server (EPP) > System Configuration > System Licensing** and check if there are sufficient licenses available.

2. Update Policies
   - On the affected computer, click **Update Policies Now** and observe if the Netwrix Endpoint Protector Client (EPP Client) icon blinks a few times.

3. Check Client Connection
   - Ensure the EPP Client is correctly configured to connect with the EPP Server:
     - Navigate to the **Settings** tab and press `CTRL + ALT + I`.
     - Verify that the server address and port are correct. Netwrix recommends a fully qualified domain name (FQDN) over an IP address.

4. Possible Solutions
   - Restart the computer if the EPP Client was recently deployed.
   - If restarting does not resolve the issue, reinstall the EPP Client on that machine.
   - If the issue persists, proceed to **Netwrix Endpoint Protector Server (EPP) > System Configuration > System Licensing > View Licenses** and use **Release Licenses** for the affected machines or all machines. This will prompt the EPP Server to reconnect with clients, reassign licenses, and generate a new set of certificates for them.
