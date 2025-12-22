---
description: >-
  Learn how to enable and configure SMS notifications for Netwrix Password
  Reset, including how to set the SMS provider and the Active Directory property
  that contains recipient phone numbers.
keywords:
  - password expiration
  - SMS notifications
  - Netwrix Password Reset
  - Active Directory
  - pager
  - SMS provider
  - esendex
  - Telephones tab
  - Provider name
  - Property name
products:
  - auditor
sidebar_label: How to configure the SMS notifications feature for Netwrix Password Reset
tags: []
title: "How to configure the SMS notifications feature for Netwrix Password Reset?"
knowledge_article_id: kA00g000000Pbd9CAC
---

# How to configure the SMS notifications feature for Netwrix Password Reset?

How do I configure the SMS notifications feature?

---

**Perform the following steps to configure the Netwrix Password Reset SMS notifications:**

1. Run the program configurator tool in basic mode.
2. Check the checkbox next to the **Notify Users using text messages (SMS)** option and click the **Configure** button.
3. Specify the time when to notify users via text messages notification.
4. Specify the provider name service (the provider who provides SMS notification service; [esendex.net](http://esendex.net) for example).
5. Specify the Property name. This is the name on the **Telephones** tab of the Active Directory user account properties. This field contains the recipient phone number and its value will be used by the software (it is the `Pager` property by default).
6. Click the **OK** button.

By default, Netwrix Password Reset looks for the pager number in the `Pager` field and assumes that the pager number is specified in the following format:

`pager_number@operator_name.`

The **Provider name** and **Property name** fields need to be filled out only if the pager number specified in the non-default field (pager field) contain only the pager number without the operator name (`145625378` instead of `145625378@`[esendex.net](http://esendex.net) for example).
