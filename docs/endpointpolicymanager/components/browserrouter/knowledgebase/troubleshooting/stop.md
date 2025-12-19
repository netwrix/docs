---
title: "How can I stop websites automatically routing to Edge when I expect them to be shown in IE (and/or I get an endless loop). Why is this?"
description: "How can I stop websites automatically routing to Edge when I expect them to be shown in IE (and/or I get an endless loop). Why is this?"
sidebar_position: 220
---

# How can I stop websites automatically routing to Edge when I expect them to be shown in IE (and/or I get an endless loop). Why is this?

This is happening because of Microsoft's own Internet Explorer to Microsoft Edge redirection for
compatibility websites.

Currently, some sites are considered incompatible and automatically redirected from IE to
Edge.  Redirection is the default behavior on Windows 10 (21H1, 20H2) with the latest updates
installed.

For example, if you
open [https://facebook.com/](https://facebook.com/) or [https://cnn.com/](https://cnn.com/) in IE
(no PPBR involved) it will be opened in Edge.

You can read more about this here.

[https://docs.microsoft.com/en-us/deployedge/edge-learnmore-neededge](https://docs.microsoft.com/en-us/deployedge/edge-learnmore-neededge)

When you use Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router, chances are you
want fine grained control instead of some websites (none of which you control) redirecting to Edge.

As such, to turn off Microsoft's own automatic redirection behavior you need to locate the

Computer | Admin Templates | Microsoft Edge  | Redirect incompatible sites from Internet Explorer to
Microsoft Edge.

Then ENABLE the policy and set the options within the pulldown to Disable as seen in the screenshot.

You can also use Intune / other MDM as explained in the URL above to stop this behavior.

Then, Endpoint Policy Manager Browser Router will be 100% in charge of your URLs and the routing /
redirection.

![456_1_image001_950x573](/images/endpointpolicymanager/troubleshooting/browserrouter/edge/456_1_image001_950x573.webp)


