---
description: >-
  Instructions to enable SSL for the Netwrix Password Policy Enforcer Mailer so
  it can authenticate to SMTP with stored credentials moved to Credential
  Manager.
keywords:
  - Password Policy Enforcer
  - PPE Mailer
  - SSL
  - SMTP
  - MailUseSSL
  - MailUsername
  - MailPassword
  - Credential Manager
  - registry
products:
  - password-policy-enforcer
sidebar_label: 'PPE: How to enable SSL on PPE Mailer to enable acc'
tags: []
title: "Netwrix Password Policy Enforcer: How to enable SSL on PPE Mailer to enable access with password"
knowledge_article_id: kA04u000000PdL8CAK
---

# Netwrix Password Policy Enforcer: How to enable SSL on PPE Mailer to enable access with password

By default no password can be used. Use this guide to enable the Netwrix Password Policy Enforcer Mailer to use SSL.

1. Download the PPEMail_SSL.zip from Anixis Website: https://www.anixis.com/ftp/users/tonio/PPEMail_SSL.zip or from Sharepoint: https://netwrixcorporation.sharepoint.com/:u:/r/SupportWiki2/Shared%20Documents/PPEMail_SSL.zip?csf=1&web=1&e=1Lr1iB
2. Stop the Netwrix Password Policy Enforcer Mailer service.
3. Rename `PPEMail.exe` in the `\Program Files (x86)\Password Policy Enforcer\` folder to `PPEMail.exe.original`.
4. Extract the new `PPEMail.exe` downloaded above into the `\Program Files (x86)\Password Policy Enforcer\` folder.
5. Open the Netwrix Password Policy Enforcer Management Console to the **PPS Properties** page.
6. Click the **E-mail** Tab.
7. Make sure the port number is `25` (`587` will not work).
8. Click **OK**.
9. Open the registry editor on the server that the PPE Mailer is running on.
10. Create the registry key `HKEY_LOCAL_MACHINE\SOFTWARE\ANIXIS\Password Policy Enforcer`.
11. Create a `REG_DWORD` value called `MailUseSSL` and set it to `1`.
12. Create a `REG_SZ` value called `MailUsername` and set it to the SMTP username.
13. Create a `REG_SZ` value called `MailPassword` and set it to the SMTP password.
14. Run the mailer with the `/test` parameter to send a test email. For example:
```text
ppemail.exe /test tonio@anixis.com
```
15. You should see a message that the credentials were moved to the credential manager, and the username and password you created in the registry should be gone.
16. The stored credentials are only accessible from your user account, so if the test above worked you should add the credentials to the service account. To do this, repeat steps 12 and 13 and then start the Netwrix Password Policy Enforcer Mailer service. The username and password should disappear from the registry again.
