---
title: "Understanding Ordering of Tests and the RCT"
description: "Understanding Ordering of Tests and the RCT"
sidebar_position: 50
---

# Understanding Ordering of Tests and the RCT

One of the strengths of the Endpoint Policy Manager GPCR is that you can have multiple tests
selected to build the RCT. If you add more tests, and they do not conflict, they are added together
to the RCT, as shown in Figure 33. In this way you can test for any complex combination of Group
Policy, Group Policy Preferences, Application Settings Manager, or Admin Templates Manager settings.
Items that are not conflicting and are in different tests are sorted alphabetically within a
category. This is why you see [www.GPanswers.com](http://www.GPanswers.com) appear before
[www.policypak.com](https://www.policypak.com) in the example in Figure 33.

![gpcr_concepts_and_quickstart_34](/images/endpointpolicymanager/grouppolicycompliancereporter/gpcr_concepts_and_quickstart_34.webp)

Figure 33. Items in different tests that do not conflict are sorted alphabetically within a
category.

In the case where multiple tests conflict for the same value, there is a precedence order which is
specified. This is called the test order. In Figure 34, two tests are testing the same value (and
possibly other values). Because they are testing for precisely the same value only one can win. In
the example, "Test for WinZip Password Length = 14" is set as Test Order #1. Because it has a higher
precedence order than Test Order #2, the value that will be tested is Minimum Password Length = 14.

![gpcr_concepts_and_quickstart_35](/images/endpointpolicymanager/grouppolicycompliancereporter/gpcr_concepts_and_quickstart_35.webp)

Figure 34. Test Order #1 has a higher precedence order over those below it.

You can change the precedence order by using the "Up," "Down," "Move to Top," and "Move to Bottom"
buttons, as shown in Figure 35. In the figure, "Test for Winzip Password Length = 15" has been
shifted to have higher precedence. As such, the RCT changes to test for Minimum Password Length
= 15.

![gpcr_concepts_and_quickstart_36](/images/endpointpolicymanager/grouppolicycompliancereporter/gpcr_concepts_and_quickstart_36.webp)

Figure 35. You can shift a test to a higher precedence.

