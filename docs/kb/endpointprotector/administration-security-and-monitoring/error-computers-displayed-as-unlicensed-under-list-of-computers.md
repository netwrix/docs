---
description: >-
  Shows how to troubleshoot computers that appear as "Unlicensed" in the List of
  Computers by verifying licenses, updating policies, checking client-server
  connections, and reassigning licences or reinstalling clients.
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
  - endpoint-protector
sidebar_label: 'Error: Computers Displayed as "Unlicensed" Under List of Computers'
tags:
  - administration-security-and-monitoring
title: 'Error: Computers Displayed as "Unlicensed" Under List of Computers'
knowledge_article_id: kA0Qk0000002B6HKAU
---

# Error: Computers Displayed as "Unlicensed" Under List of Computers

## Symptom
Computers are displayed as "Unlicensed" under the List of Computers.

## Cause
This issue may be due to insufficient licenses, incorrect client-server configurations, or issues with client deployment.

## Resolutions
1. Verify Licenses
   - Navigate to the **Netwrix Endpoint Protector Server (EPP) > System Configuration > System Licensing** and check if there are sufficient licenses available.

2. Update Policies
   - On the affected computer, click **Update Policies Now** and observe if the Netwrix Endpoint Protector Client (EPP Client) icon blinks a few times.

3. Check Client Connection
   - Ensure the Netwrix Endpoint Protector Client is correctly configured to connect with the Netwrix Endpoint Protector Server:
     - Navigate to the **Settings** tab and press `CTRL + ALT + I`.
     - Verify that the Server IP and Port are correct.

4. Possible Solutions
   - Restart the computer if the EPP Client was recently deployed.
   - If restarting does not resolve the issue, reinstall the Netwrix Endpoint Protector Client on that machine.
   - If the issue persists, proceed to **Netwrix Endpoint Protector Server (EPP) > System Configuration > System Licensing > View Licenses** and use **Release Licenses** for the affected machines or all machines. This will prompt the EPP Server to reconnect with clients, reassign licenses, and generate a new set of certificates for them.
