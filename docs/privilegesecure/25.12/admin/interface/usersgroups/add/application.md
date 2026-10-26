---
title: "Add Application"
description: "Add an application user that calls the Privilege Secure REST API using a certificate serial number and API key."
keywords:
  - Application
  - REST API
  - Certificate Serial Number
  - API Key
  - Access Policy
  - Users and Groups page
sidebar_position: 20
---

# Add Application

Applications are a special type of user that allow external entities to interact with Privilege
Secure via the REST API interface. Capabilities within the product are identical to standard users
with the exception that Applications aren't able to log on through the product UI. Each Application
has a unique name that identifies the application calling the API; authentication is via a
combination of certificate serial number and API key.

![Add Application form with certificate serial number and API key fields](/images/privilegesecure/25.12/accessmanagement/admin/policy/add/addapplication.webp)

To add an Application to an Access Policy.

1. Navigate to the **Users & Groups** page.
2. Click **Add Application**.
3. Enter a new Application Name in the provided field. This displays to represent
   the application.
4. Enter a Certificate Serial Number in the provided field. This is the serial number of
   the client certificate used to authenticate the application. The certificate should be signed by a
   Certificate Authority (CA). Ensure the certificate is trusted by IIS by adding the CA trusted root
   certificate to the Trusted Root Certification Authorities on the Privilege Secure server.
5. Enter the API Key. This is the unique key used as part of Application authentication.
6. Click the **Save** button when finished.

The Users & Groups page now lists the new Application.
