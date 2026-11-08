---
description: >-
  Duplicate the Linux platform to create a Palo Alto (PAN-OS) platform, then set
  up the service account, resource, activity, and access policy for SSH sessions.
keywords:
  - SbPAM
  - SSH
  - Palo Alto
  - PAN-OS
  - platform
  - service account
  - activity session
  - access policy
  - resource
products:
  - privilegesecure
sidebar_label: Creating a Custom Platform for SSH Activity Sessio
tags:
  - kb
  - network-and-platform-integration
title: "Creating a Custom Platform for SSH Activity Sessio"
knowledge_article_id: kA04u0000000Hk9CAE
---

# Creating a Custom Platform for SSH Activity Sessio

## Overview

This article describes how to duplicate the built-in Linux Platform to create a Platform for Palo Alto (PAN-OS) in Netwrix Privilege Secure for Access Management. Platforms can be customized to meet specific SSH Activity Session workflow needs.

## Instructions

1. As a Privilege Secure admin user, go to the **Policy > Platforms** page. Locate the Linux Platform, duplicate it, and name it as desired. In this example, name the new Platform "Palo Alto".

   ![Platforms page with the duplicated Palo Alto Platform selected in the Platforms list](./../0-images/ka04u000000HcaJ_0EM4u000004cJVQ.png)

2. Go to the **Configuration > Service Accounts** page and add a domain-level account as the Palo Alto service account.

   ![Service Accounts page showing the Palo Alto service account with the Palo Alto Platform selected](./../0-images/ka04u000000HcaJ_0EM4u000004cJVz.png)

3. Go to the **Resources** page and manually add the Palo Alto resource by IP or DNS name (using the service account added in step 2). In this step, it is expected for the Host Scan to fail. Close the Host Scan window and proceed to the next step.

   ![Add Resources page with Add Manually selected and a Palo Alto resource name entered](./../0-images/ka04u000000HcaJ_0EM4u000004cJWE.png)

4. Go to the **Activities** page and create a new Activity. For **Login Account**, you can use "Activity Token", "Managed Account", or "Requester". For the Login Account Template, remove the domain element (for example, ` %targetdomain%`) or use ` %domain%` instead of ` %targetdomain%`.

   ![New Palo Alto Activity with the Palo Alto Platform, Login Account, Activity Type, and Login Account Template fields](./../0-images/ka04u000000HcaJ_0EM4u000004cJWJ.png)

5. Go to the **Access Policy** page, create a new resource-based Access Policy that includes Privilege Secure users, the activity created in step 4, and the resource added in step 3.
6. Go to **My Activities** as a Privilege Secure user in the Access Policy, and launch an SSH Activity Session for the Palo Alto resource.
