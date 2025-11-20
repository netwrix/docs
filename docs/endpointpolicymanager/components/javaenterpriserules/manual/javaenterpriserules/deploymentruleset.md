---
title: "Checking the Active Deployment Rule Set"
description: "Checking the Active Deployment Rule Set"
sidebar_position: 30
---

# Checking the Active Deployment Rule Set

Because Endpoint Policy Manager Java Rules Manager automates Java's Deployment Rule Set, you should
first check to determine if any machine includes the expected rules. Remember that Java's Deployment
Rule Set is not for a particular version of Java; it is an overriding rule set for all versions of
Java on the machine. Find the Deployment Rule Set by opening Java's applet in Control Panel (or
Configure Java from the Start Menu).

In the Security tab, click "View the Deployment Rule Set" (see Figure 33 for an example). Java will
process each rule in order and stop at the first matching rule. Make sure the DeploymentRuleSet.jar
is valid; this determines which Endpoint Policy Manager Rules Manager should automatically apply.

![troubleshooting_policypak_4](/images/endpointpolicymanager/troubleshooting/javaenterpriserules/troubleshooting_endpointpolicymanager_4.webp)

Figure 33. The active Deployment Rule Sets.


