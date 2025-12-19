---
description: >-
  Users can access all Password Manager portals due to IIS authentication being
  configured with a specific user for path credentials instead of pass-through
  authentication. This article explains how to configure pass-through
  authentication in IIS so the website uses the credentials of the visiting
  user.
keywords:
  - IIS
  - Password Manager
  - pass-through authentication
  - Anonymous Authentication
  - Default Web Site
  - Connect as
  - Application user
  - Self Service Portal
products:
  - general
sidebar_label: 'All users are able to access all Password Manager '
tags:
  - authentication-and-security
title: "All users are able to access all Password Manager portals"
knowledge_article_id: kA00g000000H9ZyCAK
---

# All users are able to access all Password Manager portals

All users are able to access all Password Manager portals, regardless of the roles assigned within Password Manager.

---

A user has been specified for path credentials in IIS. You need to use pass-through authentication, so the credentials of the user using the website are passed through, instead of forcing a service account/specific user.

---

## Resolution

Perform the following steps in IIS on the Netwrix Password Manager Server:

1. Open IIS  
2. Click on **Default Web Site** or whatever site you put Netwrix Password Manager under  
3. Click **Basic Settings** on the right  
4. Click the **Connect as...** button  
5. Select **Application user (pass-through authentication)**

Note that the **Self Service Portal** uses **Anonymous Authentication** so any user should be able to access it but only users defined in the **Role** are allowed to perform actions on their accounts.

See the image below for reference

![User-added image](./../0-images/ka04u00000116Ru_0EM700000005hyC.png)
