---
description: >-
  This article explains how to integrate Netwrix Privilege Secure for Access
  Management with Netwrix Auditor, covering certificate export, connection
  profile and policy configuration, and enabling the integration in monitoring
  plans.
keywords:
  - Netwrix Privilege Secure
  - Netwrix Auditor
  - integration
  - certificate export
  - connection profile
  - access policy
  - resource-based
  - credential-based
  - monitoring plan
products:
  - auditor
  - privilege-secure-access-management
sidebar_label: Integrating Privilege Secure for Access Management
tags: []
title: "Integrating Privilege Secure for Access Management with Auditor"
knowledge_article_id: kA0Qk0000002WwfKAE
---

# Integrating Netwrix Privilege Secure for Access Management with Netwrix Auditor

## Overview

This guide describes the steps to set up Netwrix Privilege Secure for Access Management integration in Netwrix Auditor. The guide is split into sections to segment the setup process. Refer to the corresponding section to learn more about the required steps.

## Instructions

### Perform the Initial Setup in Netwrix Auditor

1. In the main Netwrix Auditor menu, go to **Settings** > **Privilege Secure**. If this is the first time you are setting up the integration, click the **Set Up Integration** button.
2. Specify the Netwrix Privilege Secure for Access Management server name or the IP address with the corresponding port, and click **Next**. For example, with the default 6500 port:
   `https://contoso-nps:6500/`
3. If the Netwrix Privilege Secure for Access Management server certificate is untrusted on the Netwrix Auditor host, select the **I want Auditor to trust this certificate when connecting to this server** checkbox and click **Next**.
4. Take note of the application name. You can keep the default name or change it. This article uses the default **NetwrixAuditor** name.

   > **NOTE:** It is not recommended to use a space in the application name, as this may lead to incorrect operation when using Microsoft Extra ID.

5. In the **Specify the client certificate** section, select **Generate new certificate** and click **Next**.
6. Export the Netwrix Auditor Privilege Secure for Access Management client certificate to the Netwrix Privilege Secure for Access Management server. Refer to the steps in the **Export the Certificate to Privilege Secure for Access Management Server** section.
7. In the **Dashboard** tab of Netwrix Privilege Secure for Access Management, click **Users** > **Add** > **New Application User**.
8. Specify the application name to match the application name stated in Netwrix Auditor. The default name is **NetwrixAuditor**.
9. Copy the certificate serial number value from your Netwrix Auditor server. Click **Save**.
10. Once you save the details, Netwrix Privilege Secure for Access Management generates an API key. Reveal the key, copy the value, and paste it in the **API key** field in the Privilege Secure Integration window of your Netwrix Auditor server.
11. In the Netwrix Auditor server, click **Next** > **Finish** to complete the initial setup.

### Export the Certificate to Privilege Secure for Access Management Server

1. On the Netwrix Auditor server, start the Microsoft Management Console—press **Windows + R**, type **mmc**, and click **OK**.
2. Go to **File** > **Add/Remove Snap-in...**
3. In the left pane, locate the **Certificates** snap-in, highlight it, and click **Add >**.
4. In the pop-up windows, select **Computer account** > **Next** > **Local computer** > **Finish**.
5. Click **OK** to save the snap-in.
6. In the left pane, go to **Certificates (Local Computer)** > **Personal** > **Certificates**.
7. Locate the Netwrix Auditor Privilege Secure for Access Management Client certificate, right-click it, and select **All Tasks** > **Export...**
8. In the Export Wizard, click **Next** > **No, do not export the private key** > **Next** > **DER encoded binary** > **Next**.
9. Specify the target location and name the certificate. Click **Next**, then click **Finish**.
10. A message to confirm the successful export should appear. Confirm the export by reviewing the target location.
11. Copy the exported certificate to the Netwrix Privilege Secure for Access Management server.
12. On the Netwrix Privilege Secure for Access Management server, right-click the certificate and select **Install**.
13. Select **Local machine** > **Next** > **Place all certificates in the following store:** > **Trusted Root Certification Authorities** > **Next** > **Finish**. A message to confirm the successful import should appear.

### Create a Connection Profile

> **NOTE:** Both credential-based and resource-based integrations require a connection profile. The steps to set up a connection profile are the same for both types of integration.

1. In Netwrix Privilege Secure for Access Management, select the **Policy** tab and go to **Access Policy** > **Connection Profiles** in the left pane.
2. Click the plus icon to add a new connection profile. For the generic workflow, refer to the following article: https://docs.netwrix.com/docs/privilegesecure/4_2
3. Name the connection profile to distinguish it from other non-integration-related connection profiles.
4. Refer to the required connection profile settings:
   - Allow Proxy Auto-connect = True
   - Record Proxy Session = True

   Session Control
   - Max Duration = 60
   - Session End Notification = 5
   - Enable Session Extension = False
   - Monitor for Logon = False
   - Leave Existing Members in Group = True
   - Validate Users for SSH Sessions = False
   - Require Notes for Sessions = False
   - Require Ticket Number for Sessions = False

   Credential Management
   - Allow User to Access Password = True
   - Enable credential auto-fill in browser extension = False
   - Enable `Show Password` option in user interface and browser extension = False
   - View Password Timeout = 20

   Website
   - Clear Website Data Before Start = True
   - Clear Website Data After Stop = True
   - Record Session Audio = True

   - Approval Workflow = Automatic
5. Click **Save** to save the profile settings.

### Setting Up the Resource-based Policy for Integration

The resource-based type of the integration requires the following items:

- Activity
- Resource

Refer to the following subsections for information on required steps.

#### Create an Activity

1. In Netwrix Privilege Secure for Access Management, select the **Policy** tab and go to **Activities** in the left pane.
2. Click the plus icon to add a new activity. For the generic workflow, refer to the following article: https://docs.netwrix.com/docs/privilegesecure/4_2
3. Specify the activity name. This article uses the **Netwrix Auditor Domain Admin** name. Refer to the required activity settings:
   - Platform = Active Directory
   - Login Account = Activity Token
   - Activity Type = Interactive
   - Login Account Template = ` %targetDomain%\%samAccountName% `
4. Click **Save** to save the changes.
5. Add an action to the pre-session—click the plus sign next to the **Pre-Session (Grant)** section.
6. Refer to the required pre-session action settings:
   - Action Type = Add User to Domain Group
   - Domain = `%target_domain%`
   - Group = Domain Admins
   - Continue on Error = False
   - Action Name = Add to Domain Admins
   - Paired Action's Name = Remove from Domain Admins
7. Click **Okay** to save changes.

#### Create a Resource

1. In Netwrix Privilege Secure for Access Management, select the **Policy** tab and go to **Resources** in the left pane.
2. Click **Add** and select **New Server**. Select **Import from AD** and select the target domain controller.

   > **NOTE:** In environments with multiple domain controllers, select the primary domain controller.

3. In the bottom right corner, select the service account, and click **Add**.

#### Create a Resource-based Access Policy

1. In Netwrix Privilege Secure for Access Management, select the **Policy** tab and go to **Access Policy** in the left pane.
2. Click the plus icon to add a new access policy. For the generic workflow, refer to the following article: https://docs.netwrix.com/docs/privilegesecure/4_2
3. Introduce a policy name.
4. Verify the **Type** value is **Resource Based**. Select the dedicated connection profile and click **Save**.
5. Select the **Users** tab and click **Add** to add a user. Select the application user (**NetwrixAuditor** by default) and click **Add**.
6. Select the **Activities** tab and click **Add** to add an activity. Select the **Netwrix Auditor Domain Admin** activity and click **Add**.
7. Select the **Resources** tab and click **Add** to add a resource to manage. Select the target resources and click **Add**.

### Setting Up Credential-based Policy for Integration

1. Specify the account for Netwrix Privilege Secure for Access Management to control—in the **Dashboard** tab, select the **Credentials** section and locate the target domain account.
2. Select the corresponding checkbox and click **Manage**. Click **Automatic**.
3. In the **Policy** tab, select the **Access Policy** menu in the left pane. Click the plus icon to add a new access policy. For the generic workflow, refer to the following article: https://docs.netwrix.com/docs/privilegesecure/4_2
4. Introduce a policy name.
5. Verify the **Type** value is **Credential Based**. Select the appropriate dedicated connection profile and click **Save**.
6. Select the **Users** tab and click **Add** to add a user. Select the application user (**NetwrixAuditor** by default) and click **Add**.
7. Select the **Credentials** tab and click **Add** to add the managed account. Select the managed account and click **Add**.

### Enable Integration in Target Monitoring Plan

1. In the **Monitoring Plans** menu, select the target monitoring plan.
2. Double-click the target item. In the **Specify the Account for Collecting Data** section, select **Privilege Secure**.
3. Depending on the policy type, select the **Credential-based** or the **Resource-based** type in the **Access Policy** field.
4. For a credential-based policy, specify the user name of the user account for collecting data.
5. For a resource-based policy, specify the activity name and the resource name in the corresponding fields.

   > **IMPORTANT:** Specify the names as stated in Netwrix Privilege Secure for Access Management.

6. Click **Save & Close**.

## Related Links

- https://docs.netwrix.com/docs/privilegesecure/4_2
- https://docs.netwrix.com/docs/privilegesecure/4_2
- https://docs.netwrix.com/docs/privilegesecure/4_2
