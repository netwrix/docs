---
title: "Enroll Tab"
description: "Enroll Tab"
sidebar_position: 20
---

# Enroll Tab

Use the **Enroll** tab to maintain the list of enrollment questions and options.

![configuring_npr_2](/images/passwordpolicyenforcer/11.0/passwordreset/administration/configuring_npr_2.webp)

### Question List

Users must answer some questions about themselves when they manually enroll. They choose their
questions from the Question List.

**Add a question**

Follow the steps below to add a question to the list.

**Step 1 –** Select a language from the drop-down list above the Question List.

**Step 2 –** Click **Add...**

**Step 3 –** Type the new question, including the question mark.

**Step 4 –** Click **OK**, and then click **Apply**.

**Remove a question**

Follow the steps below to remove a question from the list.

**Step 1 –** Select a language from the drop-down list above the Question List.

**Step 2 –** Select the question in the Question List.

**Step 3 –** Click **Remove**, and then click **Yes** when asked to confirm.

**Step 4 –** Click **Apply**.

:::note
You can rearrange questions by dragging them. You can also replace question lists with
text boxes so users can enter their own questions. See the
[Editing the HTML Templates](/docs/passwordreset/3.3/administration/editing_the_html_templates.md) document for more information
:::


### Options

Password Reset can send e-mail alerts to users when a request is submitted for their account. These
alerts can be sent to the user's Active Directory e-mail address and/or to an e-mail address in
Password Reset's database. Select the **Users must enter an e-mail address to enroll** check box if
users should enter an e-mail address during enrollment.

The number of questions that users must answer to enroll is configurable, and is set to three by
default. Select the desired number of questions from the **Users must answer...** drop-down list.

You can also set a minimum length for each answer. Only alphanumeric characters are counted because
Password Reset only checks alphanumeric characters. Select the minimum number of alphanumeric
characters in each answer from the **Answers must contain at least...** drop-down list.
