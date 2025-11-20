---
title: "How to Resolve Could not establish trust relationship for the SSL or TLS Secure Channel error message"
description: "How to Resolve Could not establish trust relationship for the SSL or TLS Secure Channel error message"
sidebar_position: 10
---

# How to Resolve Could not establish trust relationship for the SSL or TLS Secure Channel error message

PROBLEM:

You receive the message below when trying to elevate an application via a Least Privilege Manager
SbPAM policy.

“There was an error while signing in. The underlying connection was closed: Could not establish
trust relationship for the SSL/TLS Secure Channel.”

![898_1_image-20230706164728-1](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/898_1_image-20230706164728-1.webp)

OR

“The communication with the NPS server requires trusted communication. Enable certificate bypass in
NPS Global Settings to override.”

![898_2_image-20230706164728-2_950x461](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/898_2_image-20230706164728-2_950x461.webp)

CAUSE:

There are no SSL Certificates set up for use in the SbPAM / NPS server, and Signing is currently
enabled on the endpoints.

RESOLUTION:

For CSE versions BEFORE 23.7.3583…

Enable the Endpoint Policy Manager ADMX Template setting below to BYPASS SSL Certificate
verification on the endpoints.

Admin Templates > PolicyPak ADMX Settings > Client-Side Extensions > Least Privilege Manager >
Bypass SbPAM server SSL certificate verification: ENABLED

![898_3_image-20230706164728-3_950x560](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/898_3_image-20230706164728-3_950x560.webp)

For CSE versions AFTER 23.7.3583

The PolicyPak ADMX Template setting to BYPASS SSL Certificate verification on the endpoints has been
REMOVED from the PolicyPak ADMX Troubleshooting files.

INSTEAD, you will need to use the latest MMC snap-in; either from your NPS download or via the
PolicyPak download.

Then in the Least Privilege Manager node, in the Global Netwrix Privilege Secure Settings, select
YES to Enable Certificate bypass like what’s seen here.

![898_4_image-20230706164728-4_950x525](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/898_4_image-20230706164728-4_950x525.webp)

Endpoint Policy Manager Cloud also has this setting available in the in-cloud editor. You perform
the same operation using these steps seen here.

![1216_5_47173880d07636048c2dabd919e8b2ce](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/1216_5_47173880d07636048c2dabd919e8b2ce.webp)

In all cases the endpoint is instructed to Bypass SSL Certification Verification check. You can see
the results on any particular endpoint like this.

![898_5_image-20231204145244-1](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/898_5_image-20231204145244-1.webp)


