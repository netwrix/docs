---
title: "Java Enterprise Rules Manager"
description: "Java Enterprise Rules Manager"
sidebar_position: 30
---

# Java Enterprise Rules Manager

:::note
Before reading this section, please ensure you have read the [Installation Quick Start](/docs/endpointpolicymanager/gettingstarted/overviewinstall/overviewinstall.md), which will help you
learn to do the following:
:::


- Install the Admin MSI on your GPMC machine
- Install the CSE on a test Windows machine
- Set up a computer in Trial mode or Licensed mode
- Set up a common OU structure

Optionally, if you don't want to use Group Policy, read the section in Appendix A:
[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/endpointpolicymanager/gettingstarted/mdmmanual/uemtools/uemtools.md) to deploy your
directives.

The goals of Netwrix Endpoint Policy Manager (formerly PolicyPak) Java Rules Manager are as follows:

- Dictate specific versions of Java that should be utilized by specific Java applets (usually housed
  within specific webpages).
- Reduce or eliminate prompts to end users about Java.
- Continue to run unknown or unnamed Java applets with the most secure version of Java.

Java Rules Manager enables you to map the version of Java you want to use in individual
circumstances. It is the fastest way to implement Oracle's Java Deployment Rule Set feature (which
will be explained later). PolicyPak is not reinventing the wheel or tricking Java. Instead, it works
alongside Oracle's sanctioned method for the mapping of Java versions to Java applets.

:::note
See this video
[Use Endpoint Policy Manager Cloud to choose which version of Java for what website](/docs/endpointpolicymanager/components/javaenterpriserules/videos/methods/cloud.md) for
an overview of Endpoint Policy Manager Java Rules Manager.
:::


For instance, you might want to ensure that the following policies are running on your machine:

- Use Java 7 U 51 for when end users go to www.internal.com/app1.
- Use Java 8 U 25 for when end users go to www.internal.com/app2.
- Block specific Java applets from running in specific websites.
- Use the latest version of Java for all other sites and circumstances.

PolicyPak Java Rules Manager enables you to perform the following functions:

- Assemble settings (policies) into collections.
- Set Item-Level Targeting on policies and collections.
- Deliver policies to the Computer side (without Group Policy Loopback mode).
- Create exact criteria for when specific Java versions should open in a browser.
- Export policies or collections as XML files for use with PolicyPak Exporter and PolicyPak Cloud.
  See [Exporting Collections](/docs/endpointpolicymanager/components/javaenterpriserules/manual/usage/exportcollections.md) for additional information.
- Set custom messages when blocking a Java applet.

To use the Quickstart for PolicyPak Java Rules Manager, we recommend you have one endpoint (Windows
7 or later) configured with the following browsers and Java versions:

- Internet Explorer 11
- Firefox (latest ESR version still supports Java)
- Chrome (latest)
- Java 7 (our examples will use Java 7 U 51)
- Java 8 (our examples will use Java 8 U 25)
- The latest version of Java (Java 8 U 111 as of this manual's publication)

It is recommended that you test the endpoint (Windows 7 or later) with all these versions of Java,
as well as Internet Explorer, Firefox, and Chrome.

![about_policypak_java_rules](/images/endpointpolicymanager/javaenterpriserules/about_endpointpolicymanager_java_rules.webp)

Even though there are more advanced scenarios, this will get you going quickly.

There are a few basic ways you can use PolicyPak Java Rules Manager.

- First, create a Microsoft Group Policy Object (GPO) using PolicyPak Java Rules Manager. If you use
  Group Policy as the delivery mechanism, then that directive is deployed to client machines.
- Alternatively, export the PolicyPak Java Rules Manager rules and deliver them via the following
  applications:

  - Microsoft Endpoint Manager (SCCM and Intune)
  - Your own systems management software
  - PolicyPak Cloud service
  - The client machine with the PolicyPak client-side extension (CSE)

:::note
If you use the PolicyPak Cloud service, you can deliver Group Policy settings even to
non-domain-joined machines over the Internet.

:::


