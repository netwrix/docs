---
sidebar_position: 3932
title: I get the message "At least one security token in the message could not be
  validated" during PPCloud client installation. How do I work around this?
---

# I get the message "At least one security token in the message could not be validated" during PPCloud client installation. How do I work around this?

During Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud client installation you might get a message which looks like this.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/209_1_img-1.jpg)

What's happened here is that your company's certificate (which lives in Endpoint Policy Manager Cloud servers) has expired. This can happen after being a Endpoint Policy Manager Cloud customer for a few years.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/209_2_img-2.jpg)

There is an easy workaround though. Simply revoke (which automatically re-issues) the company certificate like this.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/209_3_img-3.jpg)

Then re-download the MSIs here, and re-attempt your Endpoint Policy Manager Cloud join.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/Error/Cloud/209_4_img-4.jpg)