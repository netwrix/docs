---
title: "Customizing Message Templates"
description: "Customizing Message Templates"
sidebar_position: 40
---

# Customizing Message Templates

Each Password Policy Enforcer password policy has three message templates, one for each of the
Password Policy Client messages.

- Password Policy — Displays the password policy guidelines on clients that have the Netwrix
  Password Policy Enforcer Client installed
- Rejection Reason — Displays why an intended password was rejected on clients that have the Netwrix
  Password Policy Enforcer Client installed
- Generic Rejection — Displays if Password Policy Enforcer does not have a specific reason for the
  rejection, generally because the password does not comply with the Windows password policy

Follow the steps below to edit a policy's message templates.

**Step 1 –** Click the **Policies** item to display the Policies view.

![customizing_message_templates_1](/images/passwordpolicyenforcer/10.2/administration/customizing_message_templates_1.webp)

**Step 2 –** Click the **desired policy** in the right pane of the management console.

![customizing_message_templates_2](/images/passwordpolicyenforcer/10.2/administration/customizing_message_templates_2.webp)

**Step 3 –** Right-click the desired policy to display the policy Settings page. Click
**Properties**.

![customizing_message_templates_3](/images/passwordpolicyenforcer/10.2/administration/customizing_message_templates_3.webp)

**Step 4 –** Click the **Messages** tab.

![customizing_message_templates_4](/images/passwordpolicyenforcer/10.2/administration/customizing_message_templates_4.webp)

**Step 5 –** Choose a language from the Language drop-down list.

![customizing_message_templates_5](/images/passwordpolicyenforcer/10.2/administration/customizing_message_templates_5.webp)

**Step 6 –** Edit the message templates in the Password Policy, Rejection Reason, and Generic
Rejection text boxes, as needed.

## Customizing Password Policy Client Messages

The Password Policy Client displays three messages to help users choose a password:

- The Password Policy message is shown as the user changes their password. This message explains the
  password policy to the user.
- The Rejection Reason message is shown if a password does not comply with the Password Policy
  Enforcer password policy. This message tells the user why their password was rejected.
- The Generic Rejection message is shown if Password Policy Enforcer does not have a specific reason
  for the rejection, generally because the password does not comply with the Windows password
  policy.

### Password Policy Client Message Components

Password Policy Client messages are built using templates, macros, and inserts. The image below
shows a sample policy message with the template in blue, a macro in green, and policy inserts in
white.

![the_password_policy_client_2](/images/passwordpolicyenforcer/10.2/administration/the_password_policy_client_2.webp)

### Live Password Message

Password Policy Client messages can be configured to display live feedback to end users as they
enter their passwords. This feature allows users to see if their passwords meet the requirements of
the policy set by the organization. The image below illustrates an example of a live policy message.

![livepolicymessageexample](/images/passwordpolicyenforcer/10.2/administration/livepolicymessageexample.webp)

:::note
The password client needs to be at version 10.2+ to support this capability.
:::


To support password live messages the password policy message must include the [Live_Policy]
declaration in the Password Policy Message.

![policypropertieswindow](/images/passwordpolicyenforcer/10.2/administration/policypropertieswindow.webp)
