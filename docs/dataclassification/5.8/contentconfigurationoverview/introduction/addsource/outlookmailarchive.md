---
title: "Outlook Mail Archive"
description: "Outlook Mail Archive"
sidebar_position: 80
---

# Outlook Mail Archive

Use the Outlook Mail Archive source configuration screen to enable the crawling and
classification of content stored in PST files:

:::note
To make other configuration changes before collection of the source occurs, select the
**Pause source on creation** checkbox.
:::


![add_outlook](/images/dataclassification/5.8/admin/sources/exchangemailbox/add_outlook.webp)

You can add multiple mailboxes at one time via the "+" button. Collection processes all folders
/ emails / attachments within the mailbox - associating the attachment text with the respective
email.

Select documents' images processing mode:

- Disabled – the program doesn't process documents' images.
- Default – defaults to the source settings if configuring a path or the global setting if
  configured on a source.
- Normal – the program processes images with normal quality settings.
- Enhanced – upscale images further to allow more.

You can exclude folders and items from processing via the Exchange Exclusions management screen.
