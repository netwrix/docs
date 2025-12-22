---
title: "How do I understand my cloud licenses?"
description: "How do I understand my cloud licenses?"
sidebar_position: 30
---

# How do I understand my cloud licenses?

How many Cloud licenses am I using, and how can I tell which machines are on the waiting list?

When you log into your Cloud account, you land on the License Status tab. This tab tells you several
things: how many license you bought, how many you are using, and how many machines are on the
waiting list.

![547_1_license_status](/images/endpointpolicymanager/license/cloud/547_1_license_status.webp)

The number in the Total Purchased column tells you how many licenses you purchased from us here at
Netwrix Endpoint Policy Manager (formerly PolicyPak). That is the maximum number of computers you
can have synched with the cloud at any given time.

The number in the Consumed column tells you how many licenses have been consumed, that is, how many
of your machines are correctly connected and synched with your cloud instance.

The number in the Waiting column tells you how many computers are on the waiting list, that is, how
many machines tried to check in when all of the available licenses were consumed, and therefore
couldn't sync with the cloud and receive directives.

Another reason a machine might be Waiting is because the computer has been offline for more than the
required refresh period (usually 7 days). Computers which have been offline more than 7 days go into
Waiting status. If there are available licenses when they come back online, they will claim an
available license.

If a licensed computer goes offline, or does not communicate with the Endpoint Policy Manager Cloud
service for 7 days or more, then it will relinquish its license and that license will return to the
pool, where a computer on the waiting list could consume it.

To find out which of your machines have consumed a license, and which ones are on the waiting list,
go to the Reports tab, located next to the License Status tab.

![547_2_reports_tab](/images/endpointpolicymanager/license/cloud/547_2_reports_tab.webp)

The chart displays in graphic form the information from the License Status tab.

However, above that, you'll find a list of machines that either have consumed a license, or are on
the waiting list. You will see the computer name, OS, last known IP address, last check in date, and
the status of the machine. Under Status you'll see either Active, indicating that the computer has
correctly consumed a license, or Waiting List (Check in overdue)\], which indicates that the
computer attempted to consume a license, but there were none available.

