---
title: "Endpoint Policy Manager Browser Router removes other Chrome ‘force installed' extensions. How can I work around this?"
description: "Endpoint Policy Manager Browser Router removes other Chrome ‘force installed' extensions. How can I work around this?"
sidebar_position: 50
---

# Endpoint Policy Manager Browser Router removes other Chrome ‘force installed' extensions. How can I work around this?

Here's what's happening:

- Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router installs the PPBR forced
  extension plug in on the COMPUTER side at installation time.
- When you use Endpoint Policy Manager Application Settings Manager or Chrome's ADMX to specifically
  dictate plugins PER-USER...
- There's a conflict, and Google doesn't MERGE, it just uses COMPUTER.

RESULT: You only see Endpoint Policy Manager Browser Router's extension and NOT your desired
user-side extensions for Chrome.. Workaround: Endpoint Policy Manager Provides ADMX settings to work
around various items in Endpoint Policy Manager On-Prem. See this video to implement the ADMX:

[Troubleshooting with ADMX files](/docs/endpointpolicymanager/gettingstarted/misc/videos/troubleshooting/admxfiles.md)

:::note
You shouldn't need to perform these steps (any of them) if you want to dictate Chrome
"forced installed" extensions on the COMPUTER side. On the COMPUTER side... when you force install
extensions, Endpoint Policy Manager Browser knows what to do and just adds in the correct Chrome
Extension. This KB is only required if you are opting to dictate Chrome "forced installed"
extensions on the USER side.
:::


Then, the policy setting which must be applied to the computer side which is called PREVENT COMPUTER
SIDED INSTALLATION OF CHROME EXTENSION

![171_1_image004](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/171_1_image004.webp)

Then… Using Chrome's own ADMX setting named "Configure the list of force-installed apps and
extensions" (seen below) to manually add the Endpoint Policy Manager Browser Router using Chrome's
ADMX setting on USER or COMPUTER side.

![171_2_image006](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/171_2_image006.webp)

Use this string found in this article:

[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)

For instance, an example string might look like …

```
fmbfiodledfjldlhiemaadmgppoeklbn;https://clients2.google.com/service/update2/crx
```

Which will manually install the Endpoint Policy Manager Browser Router Chrome Extension. Or using
Endpoint Policy Manager Application Settings Manager and our Chrome Pak, you can use this field
(user or computer side.)

![171_3_image009](/images/endpointpolicymanager/troubleshooting/browserrouter/chrome/171_3_image009.webp)

Use the same string:

```
fmbfiodledfjldlhiemaadmgppoeklbn;https://clients2.google.com/service/update2/crx.
```

Which will manually install the Endpoint Policy Manager Browser Router Chrome Extension alongside
the optional extensions you wish for Chrome.

Again, the example extension ID above is just an example. Please use the correct one based upon your
CSE.

[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)


