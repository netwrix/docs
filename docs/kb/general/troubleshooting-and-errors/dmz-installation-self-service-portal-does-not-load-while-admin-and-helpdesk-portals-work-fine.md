---
description: >-
  The Self-Service portal can return an error or fail to load when anonymous
  authentication uses an IIS account that lacks COM permissions on the back-end
  server. This article shows which COM settings to verify to resolve the issue.
keywords:
  - Self-Service portal
  - DMZ installation
  - IIS
  - Connect as
  - COM Security
  - Remote activation
  - Netwrix Password Manager
  - Admin portal
  - Helpdesk portal
  - permissions
products:
  - general
sidebar_label: 'DMZ installation: Self-Service portal does not load while Admin and Helpdesk portals work fine'
tags:
  - troubleshooting-and-errors
title: >-
  DMZ installation: Self-Service portal does not load while Admin and Helpdesk
  portals work fine
knowledge_article_id: kA00g000000H9acCAC
---

# DMZ installation: Self-Service portal does not load while Admin and Helpdesk portals work fine

## Symptoms
The Self-service portal returns an error or does not load at all.

![User-added image](./../0-images/ka04u00000116Nr_0EM700000005OPh.png)

However Admin and Helpdesk portals work.

![User-added image](./../0-images/ka04u00000116Nr_0EM700000005ORT.png)

---

## Cause
When you log in to the **Admin** or **Helpdesk** portal, the portal prompts for credentials and then uses those credentials to communicate with the back-end once authentication is complete. The Self-Service portal uses anonymous authentication and, as a result, uses the account specified in IIS at **Connect as**:

![User-added image](./../0-images/ka04u00000116Nr_0EM700000005ORY.png)

The issue occurs when the account specified for anonymous authentication in **Connect as** does not have the required permissions on the back-end server.

---

## Resolution
Make sure that COM settings on the back-end server are correct:

1. Ensure **COM Security** properties for the **My Computer** node allow `Remote activation`.

   ![User-added image](./../0-images/ka04u00000116Nr_0EM700000005ORn.png)

2. Ensure properties of the Netwrix Password Manager COM object allow `Remote activation`.

   ![User-added image](./../0-images/ka04u00000116Nr_0EM700000005ORx.png)
