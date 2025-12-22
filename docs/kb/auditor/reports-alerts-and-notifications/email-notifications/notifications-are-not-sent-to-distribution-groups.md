---
description: >-
  Notifications are not delivered when a distribution group is set as the
  recipient because Exchange requires authenticated senders for distribution
  groups. This article explains two solutions: enable SMTP authentication in the
  Netwrix Auditor management console or disable the authentication requirement
  on the distribution group.
keywords:
  - notifications
  - distribution group
  - Exchange
  - SMTP authentication
  - Netwrix Auditor
  - Set-Mailbox
  - RequireSenderAuthenticationEnabled
products:
  - auditor
sidebar_label: Notifications are not sent to distribution groups
tags: []
title: "Notifications are not sent to distribution groups"
knowledge_article_id: kA00g000000H9ZFCA0
---

# Notifications are not sent to distribution groups

If you specify a user's e-mail address as a recipient, notifications work. If you specify a distribution group as the recipient, notifications do not come through.

---

This is related to authentication settings.

By default, even if the Exchange receive connector accepts anonymous SMTP, sending to distribution groups requires clients to be authenticated.

http://technet.microsoft.com/en-us/library/bb629676%28v=exchg.80%29.aspx

---

There are two solutions:

1. Configure SMTP authentication in the settings of the **Netwrix Auditor** management console

   ![SMTP authentication settings in Netwrix Auditor]./../0-images/ka04u000000HcSG_0EM700000005pJq.png)

2. Disable the "require authentication" option in distribution group options as follows

   1. Launch **Exchange Management Console**  
   2. Navigate to **MS Exchange - Recipient configuration - Distribution groups**  
   3. Select the required distribution group and open its **Properties**

      ![User-added image]./../0-images/ka04u000000HcSG_0EM7000000054Pc.png)

   4. Go to **Mail Flow Setting** tab  
   5. Select **Message Delivery Restrictions** from the list and open its **Properties**

      ![User-added image]./../0-images/ka04u000000HcSG_0EM7000000054Ph.png)

   6. Uncheck **Require that all senders are authenticated** and click **OK**

      ![User-added image]./../0-images/ka04u000000HcSG_0EM7000000054Pm.png)

   Alternatively, you can run the following command via Exchange Management Shell:

   ```powershell
   Set-Mailbox -RequireSenderAuthenticationEnabled $false -Identity %group%,
   ```

   where ` %group% ` is like `dynamic.group@example.com`

