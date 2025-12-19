---
description: >-
  Install the PPE Mailer for Netwrix Password Policy Enforcer on one server per
  domain and learn how to run PPEMail.exe to send or test e-mail delivery and
  troubleshoot configuration errors.
keywords:
  - PPE Mailer
  - Password Policy Enforcer
  - PPEMail.exe
  - mailer installation
  - email delivery
  - PPE912
  - Password Policy Server
products:
  - password-policy-enforcer
sidebar_label: Installing the PPE Mailer
tags: []
title: "Installing the PPE Mailer"
knowledge_article_id: kA04u0000000K96CAE
---

# Installing the PPE Mailer

The PPE Mailer is not installed by default. Install it on only one server in each domain. The PPE Mailer can be installed on any server, including a domain controller. The PPE Mailer is part of Netwrix Password Policy Enforcer.

To install the PPE Mailer:

1. Start the PPE installer (`PPE912.exe`).
2. Read the license agreement, and then click **Yes** if you accept all the license terms and conditions.
3. Select the **Advanced** option, and then click **Next**.
4. Double-click the `PPE912.msi` file.
5. If you are prompted to Modify, Repair, or Remove the installation, then select **Modify** and then click **Next**. (Skip to step 11. Do not disable the other features as described below.)
6. Click **Next** when the PPE Installation Wizard opens.
7. Select **I accept the license agreement**, and then click **Next**.
8. Select the **Custom** option, and then click **Next**.
9. Click the icon beside the **Password Policy Server** feature, and then click **PPE Mailer Service**. Entire feature will be unavailable.
10. Repeat the previous step for the **Management Console, Documentation**, and **Dictionaries** features unless you also want to configure PPE from this server.
11. Click the icon beside the **PPE Mailer Service** feature, and then click `Will be installed on local hard drive`.
12. Click **Next** twice.
13. Wait for the PPE Mailer to install, and then click **Finish** twice.

You can run the PPE Mailer from the command line to deliver e-mail immediately, or to troubleshoot problems. `PPEMail.exe` is copied into the `\Program Files (x86)\Password Policy Enforcer\` folder when the PPE Mailer is installed.

Running `PPEMail.exe` with the `/send` parameter disables simulation mode. Any e-mails that are due to be sent today are sent immediately. `PPEMail.exe` can identify a wider range of configuration errors when run in this mode. Use the `/send` parameter judiciously to avoid sending duplicate e-mails to users.

To test e-mail delivery options without sending any e-mails to users, run `PPEMail.exe` with the `/test` parameter followed by your e-mail address. For example, `PPEMail.exe /test testaccount@netwrix.com`. This will send one test e-mail to your mail server or pickup folder.
