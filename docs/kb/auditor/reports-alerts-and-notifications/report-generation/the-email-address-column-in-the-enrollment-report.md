---
description: >-
  Explains why the Email Address column in the Enrollment report is blank and
  how to enable Additional authentication using the user email so enrolled users
  have email addresses populated for password reset.
keywords:
  - Enrollment report
  - Email Address column
  - password reset
  - Authentication Policy
  - Additional authentication
  - enrollment
  - user email
  - reset link
  - enrolled users
products:
  - auditor
sidebar_label: The Email Address column in the Enrollment report
tags: []
title: "The Email Address column in the Enrollment report"
knowledge_article_id: kA00g000000H9U3CAK
---

# The Email Address column in the Enrollment report

When you run the Enrollment report, the Email Address column fields are blank for all user accounts. What should this column show and what can you do to make this work?

![User-added image]./../0-images/ka04u000000HcNo_0EM700000004xIo.png)

---

The **Email Address** column returns the email address used for **Additional authentication using the user email** feature.

An email with a unique link to the password reset page is sent to this address after the user answers secret questions. The user then should follow the link to complete password reset. The Email Address field contains data for the enrolled users only, because this email is specified during the enrollment procedure if the Authentication policy feature is enabled.

![User-added image]./../0-images/ka04u000000HcNo_0EM700000004xIy.png)

To enable this feature:

1. On the **Administrative portal - Settings - Authentication Policy** tab, select the **Additional authentication using the user email** check box.

![User-added image]./../0-images/ka04u000000HcNo_0EM700000004xIt.png)

