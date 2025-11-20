---
title: "Java: Using the Pre-configured AppSet for Java, how do I prevent \"Java has discovered application components that could indicate a security concern.\" Pop up?"
description: "Java: Using the Pre-configured AppSet for Java, how do I prevent \"Java has discovered application components that could indicate a security concern.\" Pop up?"
sidebar_position: 390
---

# Java: Using the Pre-configured AppSet for Java, how do I prevent "Java has discovered application components that could indicate a security concern." Pop up?

If you get the following pop-up:

![158_1_uhae4](/images/endpointpolicymanager/applicationsettings/preconfigured/java/158_1_uhae4.webp)

the pre-configured Java AppSet can adjust for that. However, know that we are not magically
"increasing" your security here, simply delivering the value that forces Java to stop the pop up.

The setting located in our pre-configured AppSets for Java is:

Java 7 Pak technique:

![158_2_2014-04-13_1737](/images/endpointpolicymanager/applicationsettings/preconfigured/java/158_2_2014-04-13_1737.webp)

Java 8 AppSet technique:

![158_3_13-8](/images/endpointpolicymanager/applicationsettings/preconfigured/java/158_3_13-8.webp)

More information from Oracle on the underlying issue can be found at this web page: 
[http://java.com/en/download/help/error_mixedcode.xml](http://java.com/en/download/help/error_mixedcode.xml)


