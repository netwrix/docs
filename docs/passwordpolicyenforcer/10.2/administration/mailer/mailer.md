---
title: "Mailer"
description: "Mailer"
sidebar_position: 120
---

# Mailer

Netwrix Password Policy Enforcer can send email reminders to domain users before their passwords
expire. This is especially useful for users who logon infrequently, and for remote users who access
the network without logging on to the domain. You must install the Password Policy Enforcer Mailer
and configure the email delivery and email message options to send email reminders to users.

Add your email address to a service account, and the Password Policy Enforcer Mailer will remind you
to change the service account password before it expires.

## Installing the Mailer

The Password Policy Enforcer Mailer is not installed by default. Only install it on one server in
each domain. The Password Policy Enforcer Mailer can be installed on any server, including a domain
controller.

Follow the steps below to install the Password Policy Enforcer Mailer:

**Step 1 –** Start the Password Policy Enforcer Installer (PPE10.2.exe).

**Step 2 –** Read the license agreement, then click **Yes** if you accept all the license terms and
conditions.

**Step 3 –** Select the **Advanced** option, then click **Next**.

**Step 4 –** Double-click the **PPE10.2.msi** file.

**Step 5 –** If you are prompted to Modify, Repair, or Remove the installation, select **Modify**,
then click **Next**. Proceed to step 11. Do not disable the other features as described below.

:::warning
If prompted to Modify, Repair, or Remove, do not modify any settings or disable any
features as described in steps 6 - 10.
:::


**Step 6 –** Click **Next** when the Password Policy Enforcer Installation Wizard opens.

**Step 7 –** Select **I accept the license agreement**, then click **Next**.

**Step 8 –** Select the **Custom** option, then click **Next**.

**Step 9 –** Click the **icon** beside the Password Policy Server feature, then click the **Entire
feature will be unavailable** button.

**Step 10 –** Repeat the previous step for the **Management Console**, **Documentation**, and
**Dictionaries** features unless you also want to configure Password Policy Enforcer from this
server.

**Step 11 –** Click the **icon** beside the Password Policy Enforcer Mailer Service feature, then
click the **Will be installed on local hard drive** button.

**Step 12 –** Click **Next** twice.

**Step 13 –** Wait for the Password Policy Enforcer Mailer to install, then click **Finish** twice.
