---
title: "E-mail Tab"
description: "E-mail Tab"
sidebar_position: 30
---

# E-mail Tab

Use the **E-mail** tab to configure how e-mail is sent to users, when it is sent, and also to edit
the e-mail templates.

![configuring_npr_3](/images/passwordreset/3.3/administration/configuring_npr_3.webp)

### E-mail Delivery

Password Reset can send e-mail alerts directly to an SMTP server, or save them to a pickup folder.
Select the **Send e-mail to an SMTP server** option if Password Reset should send e-mails directly
to an SMTP server. Type the name or IP address of an SMTP server in the **Server** text box, and the
SMTP port number in the **Port** text box.
Select the **Save e-mail to a pickup folder** option if NPR should save e-mails to a folder for
delivery by a mail server. Click **Browse...** to select a folder. The mail server must monitor this
folder for new e-mail.

:::note
Saving e-mail to a pickup folder is the fastest and most reliable delivery method. Use
this option if your mail server supports pickup folders.
:::


### Triggers

Triggers define when Password Reset sends e-mails. If the trigger for an event is enabled, then Password Reset
sends an e-mail when the event occurs. Enabled triggers are underlined.

Click the name of an enabled trigger to edit the trigger's e-mail template.

![configuring_npr_4](/images/passwordpolicyenforcer/11.0/passwordreset/administration/configuring_npr_4.webp)

Type the name and e-mail address you want to appear in the e-mail's From field in the **From** text
box. The correct format is "Display Name" `<mailbox@domain.com>`
Type the recipient's e-mail address in the **To** text box. The correct format is "Display Name"
`<mailbox@domain.com>`. Separate multiple recipients with a semicolon. You can also use these
macros.

| Macro             | Replace with                                                                                  |
| ----------------- | --------------------------------------------------------------------------------------------- |
| [AD_EMAIL]        | The e-mail address in Active Directory                                                        |
| [NPR_EMAIL]       | The e-mail address in Password Reset's database                                               |
| [AD_OR_NPR_EMAIL] | The e-mail address in AD, or the e-mail address in Password Resetif the AD address is blank   |
| [NPR_OR_AD_EMAIL] | The e-mail address in NPR, or the e-mail address in AD if the Password Reset address is blank |

:::note
Use [NPR_OR_AD_EMAIL] with caution as Password Reset doesn't check the validity of e-mail
addresses. If the e-mail address in Password Reset's database is no longer valid, then Password Reset sends the alert
only to the invalid address.
:::


Type additional recipient e-mail addresses in the **Bcc** text box if you want to send any blind
carbon copies. Separate multiple recipients with a semicolon.

Type the e-mail's subject in the **Subject** text box.

Type the e-mail's body in the large text box. Password Reset sends the e-mail as plain text unless the body
contains the `<html>` tag. Include the entire HTML document when sending e-mail as HTML. You can
also use these macros.

| Macro       | Replaced with                           |
| ----------- | --------------------------------------- |
| [AD_DOMAIN] | The user's Active Directory domain name |
| [AD_USER]   | The user's Active Directory logon name  |

Password Reset stores the user's preferred language every time they successfully complete an Enroll,
Reset, Unlock, or Change. Password Reset sends e-mail alerts in the user's preferred language, or in the current
Web Interface language if the user's preferred language isn't known. If no e-mail template exists
for the user's preferred language, Password Reset sends the alert in English.

Use the dropdown list at the bottom of the E-mail template editor to switch between template
languages. Changes are preserved as you switch between languages. The **From**, **To**, and **Bcc**
are the same for all languages.
A warning icon appears beside the language dropdown list if no e-mail template is defined for
every language. You should define an e-mail template for every language to ensure that users can
understand their e-mail alerts.

![configuring_npr_5](/images/passwordpolicyenforcer/11.0/passwordreset/administration/configuring_npr_5.webp)

:::warning
An attacker may choose a specific language to avoid detection. Password Reset sends e-mail alerts
in the Web Interface language the attacker chose if the target user has not enrolled or changed
their password with Password Reset. The target user receives the e-mail alerts, but may not
understand them. Use the Rest API to remind new users to enroll so their preferred language is known
to Password Reset. See the [Enroll Tab](/docs/passwordreset/3.3/administration/configuringpasswordreset/enroll_tab.md) topic
for additional information.

:::
