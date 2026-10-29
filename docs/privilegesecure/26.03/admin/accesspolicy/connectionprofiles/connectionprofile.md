---
title: "Add Connection Profile"
description: "Add a connection profile that sets the proxy, session control, credential management, website, and approval workflow settings."
keywords:
  - add connection profile
  - Connection Profiles
  - proxy
  - Session Control
  - Credential Management
  - Website Settings
  - Custom Fields
  - Approval Workflow
sidebar_position: 10
---

# Add Connection Profile

To add a connection profile to the console. See the
[Connection Profiles Page](/docs/privilegesecure/26.03/admin/accesspolicy/connectionprofiles/connectionprofiles.md) topic for detailed descriptions of the
fields.

1. Navigate to the **Policy** > **Access Policies** > **Connection Profiles** page.
2. In the Connection Profiles list, click the **Plus** icon.

   ![Add Connection Profile](/images/privilegesecure/26.03/accessmanagement/admin/policy/page/connection.png)

3. Enter the information you want to configure a new connection profile.

   - **Name** — Provide a unique name for the connection profile
   - **Description** — Provide an optional description to indicate the purpose of connection profile
   - Configure the Proxy settings, which control what proxy server start the session.
     When customizing to use a specific proxy RDP (port `4489`) and SSH (port `4422`) proxy server, only
     one server can be listed.

     :::note
     To use more than one proxy server, use a load balancer in front of the servers.
     :::

   - **Session Control** — Configure the Session Control settings to set up session duration and user login
     parameters for a connection profile.

     :::note
     On this step, you must also select a default Activity Token Complexity policy
     for the connection profile
     :::

   - **Credential Management** — Configure the Credential Management settings, which control parameters for
     the password used for this connection profile
   - **Website Settings** — Configure the Website settings which control cleaning of the website data and
     allow recording the computer audio, if needed
   - **Custom Fields** — Configure the Custom Fields settings to create additional data entries for the
     connection profile
   - **Approval Workflow** — Configure the Approval Workflow settings

4. Click **Save** to create the new connection profile.
5. The new connection profile is created. To add an Approval Workflow, see the
   [Add Approval Workflow](/docs/privilegesecure/26.03/admin/accesspolicy/connectionprofiles/connectionprofileapproval.md) topic for additional information.

The new connection profile is added to the Connection Profiles list.
