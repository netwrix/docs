---
description: >-
  Netwrix Password Manager uses Integrated Windows authentication by default.
  This article shows two options to force prompting for credentials by changing
  zone settings or disabling automatic authentication for the Local Intranet
  zone.
keywords:
  - Netwrix Password Manager
  - Integrated Windows authentication
  - Local Intranet
  - Internet zone
  - Helpdesk portal
  - credentials
  - automatic logon
  - Internet Options
products:
  - general
sidebar_label: 'Does the Password Manager always use your current Windows user to authenticate?'
tags:
  - authentication-and-security
title: >-
  Does the Password Manager always use your current Windows user to
  authenticate?
knowledge_article_id: kA00g000000H9dwCAC
---

# Does the Password Manager always use your current Windows user to authenticate?

Netwrix Password Manager uses Integrated Windows authentication. By default for Local Intranet zone there is a setting to logon automatically using current credentials.

There are two options to force prompting for credentials:

1. Move Helpdesk portal to the Internet zone.  
   To do it, go to **Control panel - Internet options - Security** tab. Select Local Internet zone, click **Sites** and remove the Helpdesk portal URL. Click **Ok** and then disable Automatic detection of local intrnate sites.

   [![User-added image](./../0-images/ka04u00000116d7_0EM700000004yI6.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAb4&amp;feoid=00N700000032Pj2&amp;refid=0EM700000004yI6)

2. Disable automatic authentication for Local intrantet zone  
   To do it, go to **Control panel - Internet options - Security** tab. Select Local Intranet zone, click Custom level, in subwindows scroll to the very bottom and under **User Authentication - Logon** select **Prompt for user name and password**.

   [![User-added image](./../0-images/ka04u00000116d7_0EM700000004yHw.png)](https://netwrix.secure.force.com/kb/servlet/rtaImage?eid=ka40g000000kAb4&amp;feoid=00N700000032Pj2&amp;refid=0EM700000004yHw)
