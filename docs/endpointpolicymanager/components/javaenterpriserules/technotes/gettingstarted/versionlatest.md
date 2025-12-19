---
title: "Why is the latest Java version installed being used instead of the version specified by Java Rules Manager?"
description: "Why is the latest Java version installed being used instead of the version specified by Java Rules Manager?"
sidebar_position: 70
---

# Why is the latest Java version installed being used instead of the version specified by Java Rules Manager?

Problem:

There is a Java Rules Manager (JRM) policy specified for a site to use a specific version of java
but the site is ignoring the rule and using the latest version of Java installed on the endpoint
instead.

![889_1_image-20210721212259-9_950x45](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/889_1_image-20210721212259-9_950x45.webp)

![889_2_image-20210721212259-10](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/889_2_image-20210721212259-10.webp)

Cause:

The URL address specified in Internet Explorer must match exactly the location URL specified for the
RIA rule in Netwrix Endpoint Policy Manager (formerly PolicyPak) Java Rules Manager, the path is
case sensitive. This is not a Endpoint Policy Manager requirement but a Java one, please see the
following link for details.
[https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/ria_development.html](https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/ria_development.html)

:::note
If the URLs do not match (case as well) then the PPJRM rule will be ignored and the latest
version of java installed on the endpoint will be used instead.
:::


![889_3_image-20210721212259-11](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/889_3_image-20210721212259-11.webp)

Resolution:

Ensure that the URL specified in Endpoint Policy Manager JRM and the address URL in Internet
Explorer both match, then refresh the tab in Internet Explorer.

:::note
If any changes are made to the JRM policy then the policy will need to be refreshed on the
endpoint for the update to be received. If needed close and restart Internet Explorer before
revisiting the page specified in the JRM policy.
:::


Once the URLs in both IE and PPJRM match the policy will function as intended and the site will use
the required version of java.

![889_4_image-20210721212259-12](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/889_4_image-20210721212259-12.webp)
![889_5_image-20210721212259-13](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/889_5_image-20210721212259-13.webp)


