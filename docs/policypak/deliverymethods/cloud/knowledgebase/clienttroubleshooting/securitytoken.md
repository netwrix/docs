---
title: "I get the message \"At least one security token in the message could not be validated\" during PPCloud client installation. How do I work around this?"
description: "I get the message \"At least one security token in the message could not be validated\" during PPCloud client installation. How do I work around this?"
sidebar_position: 80
---

# I get the message "At least one security token in the message could not be validated" during PPCloud client installation. How do I work around this?

During Netwrix PolicyPak Cloud client installation you might get
a message which looks like this.

![209_1_img-1](/images/policypak/troubleshooting/error/cloud/209_1_img-1.webp)

What's happened here is that your company's certificate (which lives in PolicyPak
Cloud servers) has expired. This can happen after being a PolicyPak Cloud customer for
a few years.

![209_2_img-2](/images/policypak/troubleshooting/error/cloud/209_2_img-2.webp)

There is an easy workaround though. Simply revoke (which automatically re-issues) the company
certificate like this.

![209_3_img-3](/images/policypak/troubleshooting/error/cloud/209_3_img-3.webp)

Then re-download the MSIs here, and re-attempt your PolicyPak Cloud join.

![209_4_img-4](/images/policypak/troubleshooting/error/cloud/209_4_img-4.webp)


