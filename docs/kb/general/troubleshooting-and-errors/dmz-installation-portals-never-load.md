---
description: >-
  Troubleshoot Password Manager portals in a DMZ that keep loading by verifying
  frontend/backend connectivity, firewall rules, and antivirus settings.
keywords:
  - DMZ
  - portals
  - Password Manager
  - firewall
  - antivirus
  - connectivity
  - ping
  - KB2145
  - frontend
  - backend
products:
  - general
sidebar_label: 'DMZ installation: Portals never load'
tags:
  - troubleshooting-and-errors
title: 'DMZ installation: Portals never load'
knowledge_article_id: kA00g000000H9afCAC
---

# DMZ installation: Portals never load

I installed Password Manager portals on a server in a DMZ and configured as per Administrator's guide, but I cannot get to any portal.  
All 3 of them keep loading and do not show anything.

![User-added](./../0-images/servlet_image_6d5dba18caac.png)

---

Such behavior occurs when the frontend server cannot communicate to the backend because of the firewall or antivirus software blocking connection.

---

## Troubleshooting steps

1. Make sure that the frontend can `ping` the backend and vice versa.
2. Make sure that all required firewall rules are in place. Refer to the KB2145: https://kb.netwrix.com/2145
3. If the above does not help, try temporarily disabling all firewalls and antivirus software to confirm whether they are blocking the connection.
