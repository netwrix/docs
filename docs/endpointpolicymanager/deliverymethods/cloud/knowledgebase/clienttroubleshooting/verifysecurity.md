---
title: "I'm getting an error when installing the cloud client which says \"An error occured when verifying security for the message\""
description: "I'm getting an error when installing the cloud client which says \"An error occured when verifying security for the message\""
sidebar_position: 90
---

# I'm getting an error when installing the cloud client which says "An error occured when verifying security for the message"

Please ensure that the system time on the client system is correct. You can try
[https://answers.microsoft.com/en-us/windows/forum/all/how-to-force-windows-10-time-to-synch-with-a-time/20f3b546-af38-42fb-a2d0-d4df13cc8f43](https://answers.microsoft.com/en-us/windows/forum/all/how-to-force-windows-10-time-to-synch-with-a-time/20f3b546-af38-42fb-a2d0-d4df13cc8f43)
to have the computer re-sync its time with an online source.

An example of the error can be seen here:

![113_1_dtyeryrtyy](/images/endpointpolicymanager/troubleshooting/cloud/underhood/underneath_the_hood_and_troubleshooting_5.webp)

Please follow the following steps

**Step 1 –** Change the timezone to UTC like what is shown here:

![20_1_sdgdfhfgnfjfghjfghjfghjfghj](/images/endpointpolicymanager/troubleshooting/error/20_1_sdgdfhfgnfjfghjfghjfghjfghj.webp)

**Step 2 –** Verify the time on the computer is now the same as what is seen
[http://www.worldtimeserver.com/current_time_in_UTC.aspx](http://www.worldtimeserver.com/current_time_in_UTC.aspx)

**Step 3 –** If the computer's time is "off", change it so it matches UTC time.

**Step 4 –** Then join Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud.

**Step 5 –** After join, change timezone to your correct timezone.

**Step 6 –** Verify PPcloud still works with commandline: `ppcloud /sync`


