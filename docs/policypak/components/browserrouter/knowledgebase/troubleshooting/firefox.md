---
title: "Why don't routes work from Firefox to other browsers (in Firefox 49+) ?"
description: "Why don't routes work from Firefox to other browsers (in Firefox 49+) ?"
sidebar_position: 60
---

# Why don't routes work from Firefox to other browsers (in Firefox 49+) ?

If you run into issues when Netwrix PolicyPak Browser Router is
configured to route site from Firefox to some other browser but its not routing at all. We've fixed
this problem with the latest CSE, but if you're using an OLDER CSE, then you could need to modify
Firefox to compensate.

New releases of Firefox comes with the setting where we can enable multi-process windows for the
browsers. See the following screenshot:

![492_1_image001](/images/policypak/troubleshooting/browserrouter/492_1_image001.webp)

The above screenshot means that its enabled and you should expect the PolicyPak
Browser Router will have problem in routing. To make it working please disable the setting using
PolicyPak's pre-configured Pak for Firefox about:config as illustrated in the
screenshot:

![492_2_image002](/images/policypak/troubleshooting/browserrouter/492_2_image002.webp)

So once you check and uncheck the above option it will set the value as false like shown in below
screenshot:

![492_3_image003](/images/policypak/troubleshooting/browserrouter/492_3_image003.webp)

You should be all set for now with PolicyPak Browser Router. Let us know if otherwise.


