---
description: >-
  If Netwrix Privilege Secure services are down, the web UI shows a warning.
  This article explains how to verify service status, restart services, and
  re-register services to restore functionality.
keywords:
  - Privilege Secure
  - services not running
  - sbpam
  - Start-Service
  - services.msc
  - register services
  - PowerShell
  - troubleshooting
  - Netwrix Support
products:
  - privilege-secure-access-management
sidebar_label: Services Are Not Running
tags: []
title: "Services Are Not Running"
knowledge_article_id: kA04u000000Pd8ECAS
---

# Services Are Not Running

## Summary

If Netwrix Privilege Secure services are down, you will receive a warning at the top of the user interface. This article outlines steps that you can take to bring Netwrix Privilege Secure services back online.

![Netwrix Privilege Secure's web application interface, displaying a warning that a service is not running or registered.](./../0-images/ka04u000000HdEuAAK_1.png)

## Instructions

If a warning appears at the top of the Netwrix Privilege Secure interface stating a service is offline, take the following steps to attempt to bring the affected service back online.

1. Check the services on the server
   - Open **Windows Services** and verify whether any Netwrix Privilege Secure services are not running.  
   - Example screenshot:
     
     ![Windows Services interface displaying installed Netwrix Privilege Secure services, with five out of six displayed as not running.](./../0-images/ka04u000000HdEu_0EM4u000004bjCb.png)

   - If any services are not running, start them using the **Windows Services** interface or run the following in an elevated PowerShell:

     ```powershell
     Start-Service sbpam*
     ```

   - In this instance 1 out of the 5 services are running, so you can manually start the services by opening `services.msc` on the local Netwrix Privilege Secure server.

2. Re-register services in the web UI (if services are running but the UI still shows a warning)
   - If all Netwrix Privilege Secure services are running in **Windows Services** yet there's still a services warning in the Netwrix Privilege Secure web application interface, re-register the services with Netwrix Privilege Secure.
   - Log in to Netwrix Privilege Secure's web application as an Admin.
   - In the upper-right, click the current logged-in user's name, then click **Settings**, and then click **Register Services**.

   ![The Netwrix Privilege Secure web application interface's user settings menu dropdown.](./../0-images/ka04u000000HdEu_0EM4u000004bjCq.png)

   ![The Netwrix Privilege Secure web application interface's settings page, displaying the Register Services button.](./../0-images/ka04u000000HdEu_0EM4u000004bjCv.png)

3. If issues persist
   - Gather Netwrix Privilege Secure's logs by following the steps in this article: https://kb.netwrix.com/5874
   - Contact Netwrix Support: https://www.netwrix.com/support.html

If issues continue after these steps, provide the gathered logs to Netwrix Support for further assistance.
