---
title: "License Status"
description: "License Status"
sidebar_position: 10
---

# License Status

As a reminder, Endpoint Policy Manager Cloud is made up of components, such as Endpoint Policy
Manager Application Settings Manager, Endpoint Policy Manager Least Privilege Manager, etc., which
are licensed in pools. You cannot buy different numbers of licenses for each component, so you need
the exact same number of licenses for all the components. This is represented in the line item
**Base Products**. On this screen you can see how many Endpoint Policy Manager Cloud licenses you
have purchased and how many of them are consumed by connected computers. You can also see any
unlicensed products you might have that are available for purchase. Additionally, you can see two
columns listed as **Consumed** and **Waiting**. When you click on the number within the cell, a
pop-up window appears showing the computers that are consumed or waiting.

![web_interface_and_controls_1_624x138](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_1_624x138.webp)

When you click the number in the **Consumed** column, you can see the computers which are actively
taking on a Endpoint Policy Manager Cloud license. You can then determine the first and last check
in. Additionally, you can click **Show state changes** to see every time a computer lost and
re-claimed a license, or Show linked policies to get a quick report of which policies are affecting
the specific computer.

![web_interface_and_controls_2_624x190](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_2_624x190.webp)

For instance, clicking on **COMPUTERMDM64** and then **how linked policies** would return the window
shown below. Note that you can sort by the product name (component name), as well as the policy name
(or both), as signified by the 1 and 2 column sorters. Additionally, you can see the last delivery
time for each policy. Or, if the policy has never been received, you can see a blank value. We'll go
into further detail on reporting in a separate section on reports.

![web_interface_and_controls_3_624x247](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_3_624x247.webp)

Computers may transition from a licensed state of **consumed** to a state of **waiting**. The
Endpoint Policy Manager Cloud waiting list is used to describe two conditions:

- Condition #1 - A computer had a license but then went offline for more than (usually) 14 days.
  When this happens, the license transitions from consumed to waiting. If the computer comes back
  online and there are available licenses (and the computer can communicate with the cloud service),
  the license will then transition from waiting back to consumed.

:::note
If you have available licenses, but computers are unexpectedly transitioning to the
waiting list, this means that the computers are not able to communicate as expected with the
Endpoint Policy Manager Cloud service. After about 14 days, the computers will lose their licenses
and those licenses becomes available.
:::


- Condition #2: All licenses are already consumed but then you add more computers. This is called
  being oversubscribed. Computers cannot claim a license because there are no more licenses
  available. You will need to purchase more licenses. When you do, the oversubscribed computers will
  then consume an available license at the next check-in time (typically every hour).

Below you can see that nine computers have transitioned from consumed to waiting. The switch to
waiting for all of those nine computers was due to inactivity, not because of oversubscription.

![web_interface_and_controls_4_625x326](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_4_625x326.webp)


