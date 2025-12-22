---
title: "Which Endpoint Policy Manager items will not work when the computer is non-domain joined (or the computer is NEVER connected to the Internet)?"
description: "Which Endpoint Policy Manager items will not work when the computer is non-domain joined (or the computer is NEVER connected to the Internet)?"
sidebar_position: 10
---

# Which Endpoint Policy Manager items will not work when the computer is non-domain joined (or the computer is NEVER connected to the Internet)?

There are some items which will not work if the computer is not domain joined…

### Using Client Side Extension 2339 or a previous version:

1. Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router may or may not work as
   expected with "External links", say, those from Outlook or Skype or Acrobat. This is because
   PPBRAgent needs to be expressly specified as the "Default Browser" inside Windows 10; and with a
   Non-Domain Joined machine, Endpoint Policy Manager cannot set this value ourselves. You can set
   it manually on a per-computer basis. This is RESOLVED in Client Side Extension 2362 and later.
2. Endpoint Policy Manager File Associations manager will not work unless the machine is domain
   joined. So if you want to use Endpoint Policy Manager File Associations manager with Endpoint
   Policy Manager Cloud, Group Policy or MDM editions, then the machine must be domain joined first,
   and then get its directive from the method of your choosing. This is RESOLVED in Client Side
   Extension 2362 and later.

### Using Any Client Side Extension:

1. Chrome's plug SHOULD work and activate automatically, but in might need to be activated if it
   doesn't operate as expected.
   [Browser Router now supports Chrome on Non-Domain Joined machines](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/chromenondomainjoined.md).
2. Endpoint Policy Manager Application Manager will work as expected, except managing some areas of
   CHROME when non-domain joined. Chrome simply has a self-imposed limitation for non-domain joined
   machines. The list of settings which WILL and WON'T work is documented
   [Which items in Chrome will, and will not work when non-domain joined?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/nondomainjoined/chrome.md).
3. Windows Edge (original) will report at each launch "We've turned off extensions from unknown
   sources. They might be risky so we recommend keeping them off." (See picture below.) There is NO
   workaround at this time.

   ![359_1_tyr](/images/endpointpolicymanager/troubleshooting/nondomain/359_1_tyr.webp)

4. Windows Edge + Chromium: The Browser Router Extension will not install automatically. There is NO
   workaround at this time except to manually install the Chrome Extension on Edge by hand.

