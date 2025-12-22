---
description: >-
  Shows how to configure the Netwrix Password Reset Self-service portal to use a
  different default language by editing the locale.asp file and restarting IIS.
keywords:
  - language
  - self-service
  - password reset
  - locale.asp
  - iisreset
  - Netwrix Password Reset
  - localization
  - langcode
products:
  - general
sidebar_label: How to change default language of the Self-service
tags: []
title: "How to change default language of the Self-service portal"
knowledge_article_id: kA00g000000H9VVCA0
---

# How to change default language of the Self-service portal

How to configure the Netwrix Password Reset Self-service portal to use a different language other than English by default

To change the language used on the portal by default please do the following:

1. Go to the folder Web-SS folder, by default `C:\Program Files (x86)\NetWrix Password Manager\Web_SS`
2. Edit the **locale.asp** file
3. Change line 112 to `var langsDict, defLang = "%langcode%"` (substitute `en` with the desired language code)

![User-added image](./images/ka04u00000116cJ_0EM70000000ts5W.png)

4. Save the changes and execute an IIS reset in a command prompt with the following command: `iisreset`

| Langcode value | Language             |
|----------------|----------------------|
| cn             | Chinese              |
| de             | German               |
| en             | English              |
| es             | Spanish              |
| fr             | French               |
| he             | Hebrew               |
| it             | Italian              |
| jp             | Japanese             |
| ko             | Korean               |
| pt             | Portuguese           |
| ru             | Russian              |
| sk             | Slovak               |
| zh             | Traditional Chinese  |
