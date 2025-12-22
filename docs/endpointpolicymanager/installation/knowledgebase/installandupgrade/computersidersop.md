---
title: "How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?"
description: "How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?"
sidebar_position: 40
---

# How do I enable a STANDARD USER to see the COMPUTER SIDE RsOP ?

If asked by support for a GPRESULT /R GPRESULT /H or GPRESULT /X report, the default behavior of
Active Directory is to only show the USER SIDE of the RSOP, and not the COMPUTER SIDE.

If you attempt to grab BOTH, or explicitly try to grab the COMPUTER side, you will NOT see the
COMPUTER SIDE and/or get ACCESS DENIED like this.

![560_1_img-01_950x275](/images/endpointpolicymanager/troubleshooting/560_1_img-01_950x275.webp)

There is an easy temporary (or, if you wish) a permanent workaround.

Locate where the COMPUTER is within an OU. (Specific OU or any TOP LEVEL OU which contains the
computer is fine.)

In my example, the computer is in East Sales Desktops. Then in the GPMC click DELEGATION, choose
READ GROUP POLICY RESULTS DATA, then click ADD.

![560_3_img-02](/images/endpointpolicymanager/troubleshooting/560_3_img-02.webp)

Then add the USER or a GROUP the user is in. In this case I'm added EASTSALESUSER1 or you can add,
for instance, AUTHENTICATED USERS.

![560_5_img-03](/images/endpointpolicymanager/troubleshooting/560_5_img-03.webp)

The final results before testing should look like this (where the USER (or GROUP) can now see the
COMPUTER side RSOP..)

![560_7_img-04](/images/endpointpolicymanager/troubleshooting/560_7_img-04.webp)

The final result will be that THIS USER can now see the COMPUTER SIDE RSOP.

![560_9_img-05](/images/endpointpolicymanager/troubleshooting/560_9_img-05.webp)

