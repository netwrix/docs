---
title: "Installation"
description: "Installation"
sidebar_position: 10
---

# Installation

Password Reset has two server components, and an optional client. See the
[Password Reset Client](/docs/passwordreset/3.23/evaluation/password_reset_client.md)
topic for additional information. Both server components can be installed on one server, or they may
be installed on separate servers if your web server is in a DMZ. As the evaluation server is not in
a DMZ, we will install both components on one server.

The Web Interface is the component that users interact with. It accepts user requests, encrypts
them, and sends them to the Password Reset Server. The Password Reset Server is the component that
performs requests on behalf of users. It receives requests from the Web Interface, checks the user's
credentials, and performs the requested task if the credentials are valid.

![installing_apr_1](/images/passwordreset/3.23/evaluation/installing_apr_1.webp)

You only need one Windows 2008 to 2019 server for the evaluation. The server can be a domain
controller or a member server.

Follow the steps below to install Password Reset on the server.

**Step 1 –** Start the Password Reset Setup wizard (APR323.exe).

**Step 2 –** Click **Next**.

**Step 3 –** Read the license agreement. Click **I accept the terms of the license agreement**.
Click **Next** if you accept all terms.

**Step 4 –** Click **Next**, then click **OK** to install IIS, if asked.

**Step 5 –** Enter **aprsvc** in the User Name field.

**Step 6 –** Enter a secure password in the Password field.

**Step 7 –** Click **Next** three times.

**Step 8 –** Wait for Password Reset to install, then click **Finish**.

:::note
The Setup wizard creates the aprsvc account and adds it to the Domain Admins group. You
can remove the account from the Domain Admins group and grant the required permissions later. See
the
[Securing Password Reset](/docs/passwordreset/3.23/administration/securing_password_reset.md)
topic of the Password Reset Administrator's Guide for additional information.

:::
