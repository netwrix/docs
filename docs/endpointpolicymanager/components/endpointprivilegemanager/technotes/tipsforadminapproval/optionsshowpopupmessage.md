---
title: "How does the \"Show Pop-Up\" message checkbox work along side \"Force user re-authenticate\" and \"Justification text required\" checkboxes?"
description: "How does the \"Show Pop-Up\" message checkbox work along side \"Force user re-authenticate\" and \"Justification text required\" checkboxes?"
sidebar_position: 80
---

# How does the "Show Pop-Up" message checkbox work along side "Force user re-authenticate" and "Justification text required" checkboxes?

In CSEs 23.6 and later, there are several options you may select:.

![942_1_image-20230602145013-1](/images/endpointpolicymanager/leastprivilege/policyeditor/942_1_image-20230602145013-1.webp)

The four cases below illustrate how these work.

Case 1

**Show popup message** is selected, but neither sub-option are checked.

![942_2_image-20230602145013-2](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_1.webp)

When the application launches, the pop up is presented as shown below.

Text input from the user is optional. The User must at least click **OK** to continue and launch the
application.

![942_3_image-20230602145013-3](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_2.webp)

Case 2

**Show popup message** and **Justification text required** are selected, but **Force user
re-authenticate** is not.

![942_4_image-20230602145013-4](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_3.webp)

The pop-up box appears, and the user must type in something before continuing onward by clicking
**OK**.

![942_5_image-20230602145013-5](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_4.webp)

**Case 3**

**Show popup message** and **Force user re-authenticate** is selected, but **Justification text
required** is not.

![942_6_image-20230602145013-6](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_5.webp)

The User is required to re-authenticate, but then when the pop-up occurs, no text input is required
by the user.

![942_7_image-20230602145013-7](/images/endpointpolicymanager/leastprivilege/policyeditor/942_7_image-20230602145013-7.webp)

**Case 4**

![942_8_image-20230602145013-8](/images/endpointpolicymanager/leastprivilege/understanding_re_authentication_7.webp)

The User must re-authenticate. When the pop-up is shown, the user must type in something before
**OK** is allowed and the application proceeds.

![942_9_image-20230602145013-9](/images/endpointpolicymanager/leastprivilege/policyeditor/942_9_image-20230602145013-9.webp)


