---
title: "SendMail Action Module"
description: "SendMail Action Module"
sidebar_position: 80
---

# SendMail Action Module

Use this action module to send dynamic and static content from selected audit data to targeted
audiences.

The SendMail Action Module has multiple uses, for example:

- Send notifications of important IT initiatives or planned service outages
- In combination with other Access Analyzer action modules such as Survey, create an end-to-end
  workflow to contact clients and solicit feedback for use in the decision-making process

:::warning
This module sends one or more electronic messages to a selected audience. Prior to
executing the action, ensure the audience consists of only the desired members.
:::


## Source Table Configuration

All data tables used in Access Analyzer action modules require the presence of certain data columns.
In addition, individual action modules including SendMail may have their own column requirements.
The SendMail Action Module requires a column containing well-formatted email addresses (for example,
`hfinn@netwrix.com`) for your recipients.

## Configuration

The SendMail Action module is configured through the SendMail Action Module Wizard, which contains
the following wizard pages:

- Welcome
- [SendMail Action: Properties](/docs/accessanalyzer/12.0/admin/action/sendmail/properties.md)
- [SendMail Action: Message](/docs/accessanalyzer/12.0/admin/action/sendmail/message.md)
- [SendMail Action: Summary](/docs/accessanalyzer/12.0/admin/action/sendmail/summary.md)

The Welcome page displays first and gives an overview of the action module. The navigation pane
contains links to the pages in the wizard.

![Send Mail Action Module Wizard Welcome page](/images/accessanalyzer/12.0/admin/action/sendmail/overview.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
