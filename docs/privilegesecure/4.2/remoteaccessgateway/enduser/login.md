---
title: "First Time Login"
description: "First Time Login"
sidebar_position: 10
---

# First Time Login

Remote Access Gateway users can access the portal via the URL provided by a Netwrix Privilege
Secure Administrator, for example:

`https://[ExampleRagPortalIpAddress]`

Follow the steps to log in to the Privilege Secure.

**Step 1 –** Open the Remote Access Gateway in a browser window. The Login screen will show the
Authentication method that is set as the default.

:::note
Privilege Secure requires a multi-factor authentication (MFA) solution (Authenticator,
DUO, Symantec VIP, etc) for all user accounts unless otherwise configured by an Administrator. If
required, first time users must register with an MFA to use with their login credentials.
:::


**Step 2 –** Either click the default **Authentication Connector** button, or click **Log In with a
Different Account** to display all of the authentication connectors that are registered
with Privilege Secure.

![loginrag](/images/privilegesecure/4.2/remoteaccessgateway/enduser/loginrag.webp)

**Step 3 –** Login to the Remote Access Gateway using federated login, or entering the AD or NPS
local user credentials. (The method will depend on how the Remote Access Gateway has been configured
by your administrator).

- When using an authentication connector, there's no 'username' or 'password' field for the user to
  enter. Instead there's just a single button to login.

    ![mfaloginrag](/images/privilegesecure/4.2/remoteaccessgateway/enduser/mfaloginrag.webp)

- Clicking the authentication connector will redirect the user to the IdP login screen, which will
  log the user in (with whatever MFA is set up in the IdP) and then revert the user back to
  the Privilege Secure dashboard once authenticated. Steps 4-7 will be skipped when using an IdP
  login.

**Step 4 –** Click Login to proceed.

**Step 5 –** A QR code will be displayed to register with an authenticator application.

**Step 6 –** Enter the code provided by the registered multi-factor authenticator (MFA).

![authcoderag](/images/privilegesecure/4.2/remoteaccessgateway/enduser/authcoderag.webp)

**Step 7 –** Click **MFA Login**. Privilege Secure opens on the Access Interface.

![accessdashboardrag](/images/privilegesecure/4.2/remoteaccessgateway/enduser/accessdashboardrag.webp)

**Step 8 –** Once the authentication is complete, the Access dashboard is displayed.

The Remote Access Gateway is ready to use.
