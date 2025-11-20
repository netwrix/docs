---
title: "How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?"
description: "How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?"
sidebar_position: 50
---

# How-to elevate Windows Defender Firewall in Endpoint Privilege Manager?

## Option 1:

For detailed steps on how to elevate the Windows Defender Firewall snap-in, replacing Services.msc
with WF.msc, see
[How do I elevate MMC snap ins without granting administrative rights?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/tipsappsscenarios/mmcsnapin.md)

## Option 2:

**Step 1 –** Identify the Windows Defender Firewall CLSID you need to elevate based on the UAC
message.

![577_1_image-20230927113514-1_387x437](/images/endpointpolicymanager/leastprivilege/elevate/577_1_image-20230927113514-1_387x437.webp)

**Step 2 –** Create a Least Privilege Manager COM Class policy.

![577_2_image-20230927113655-2_403x344](/images/endpointpolicymanager/leastprivilege/elevate/577_2_image-20230927113655-2_403x344.webp)

**Step 3 –** Choose the well-known COM Class option from the drop-down.

![577_3_image-20230927113824-3_527x314](/images/endpointpolicymanager/leastprivilege/elevate/577_3_image-20230927113824-3_527x314.webp)

**Step 4 –** Select the COM Class needed, then click **Add selected**.

![577_4_image-20230927113909-4_724x208](/images/endpointpolicymanager/leastprivilege/elevate/577_4_image-20230927113909-4_724x208.webp)

**Step 5 –** Ensure the **Run with elevated privileges** option is selected, then click **Next**.

![577_5_image-20230927114034-5_592x320](/images/endpointpolicymanager/leastprivilege/elevate/577_5_image-20230927114034-5_592x320.webp)

**Step 6 –** Click **Finish** to save the policy.

![577_6_image-20230927114305-7_599x423](/images/endpointpolicymanager/leastprivilege/elevate/577_6_image-20230927114305-7_599x423.webp)
