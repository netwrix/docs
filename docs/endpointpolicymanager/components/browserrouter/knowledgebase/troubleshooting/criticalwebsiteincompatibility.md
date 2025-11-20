---
title: "I'm having a \"Browser Router Emergency\" or some kind of critical website incompatibility. What can I do?"
description: "I'm having a \"Browser Router Emergency\" or some kind of critical website incompatibility. What can I do?"
sidebar_position: 20
---

# I'm having a "Browser Router Emergency" or some kind of critical website incompatibility. What can I do?

There are a few things you can do if you need to keep Netwrix Endpoint Policy Manager (formerly
PolicyPak) running on the machine (in general) but disable Browser Router's interaction with the
machine.
That being said, here's the order we recommend in getting to the bottom of the issue.

**Step 1 –** What happens if you 100% uninstall the Endpoint Policy Manager CSE…. Does the problem
go away? If NO, then this is unlikely to be a Endpoint Policy Manager problem.

**Step 2 –** Can you reproduce using the LATEST CSE available in the Portal. Does the problem go
away?

**Step 3 –** Check to see if this flag is set in ANY routes. A check here could "bleed" from one
route into another website. This setting is not supported, and as such you might have to remove it
from all routes.

![814_1_img-01](/images/endpointpolicymanager/troubleshooting/browserrouter/814_1_img-01.webp)

**Step 4 –** After steps 1, 2 and 3… if you can REPRODUCE using latest CSE... then and only then..
send us log files (user and computer) via Sharefile (do not attach.)

[What must I send to Endpoint Policy Manager support in order to get the FASTEST support?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)

**Step 5 –** AFTER you install the latest CSE, you might want to attempt to disable the in-Browser
Extensions for the affected browser, but keep Browser Router operating. Here's how to do that (see
screenshot below.)

![814_3_img-02](/images/endpointpolicymanager/troubleshooting/browserrouter/814_3_img-02.webp)

**Step 6 –** AFTER you install the latest CSE and the in-browser Extension, and are STILL able to
reproduce the issue, you could kill JUST the affected component like Browser Router. Use these
instructions:

[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)
(KB shows killing PPPreferences, but in this case you would kill Endpoint Policy Manager Browser
Router.)

**Step 7 –** Is the web app something we could have access to, and reproduce the experience on our
end? If yes, that would get you a test / repro / fix about 100x faster.


