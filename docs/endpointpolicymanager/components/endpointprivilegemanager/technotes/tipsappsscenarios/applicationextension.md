---
title: "How to Elevate applications with a .application extension using Least Privilege Manager"
description: "How to Elevate applications with a .application extension using Least Privilege Manager"
sidebar_position: 80
---

# How to Elevate applications with a .application extension using Least Privilege Manager

**Method 1 (Recommended): Elevating the underlying .EXE**

**Step 1 –** Look in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Event log for the
blocked event to findthe name of the EXE being blocked.

![451_1_image-20200210223130-1_950x326](/images/endpointpolicymanager/leastprivilege/elevate/451_1_image-20200210223130-1_950x326.webp)

**Step 2 –** Create an EXE elevation combo rule in Least Privilege Manager for the EXE being
blocked.

![451_3_image-20200210223130-2_950x592](/images/endpointpolicymanager/leastprivilege/elevate/451_3_image-20200210223130-2_950x592.webp)

:::note
The more conditions evaluated, the more secure the rule will be. See this video for more
details:
[Best Practices for Elevating User-Based Installs](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/elevatinguserbasedinstalls.md)
:::


**Step 3 –** Apply the policy and then verify using the Endpoint Policy Manager event log of the
application being Elevated.

![451_5_image-20200210223130-3_950x270](/images/endpointpolicymanager/leastprivilege/elevate/451_5_image-20200210223130-3_950x270.webp)

Method 2: Elevating RUNDLL32.exe and the .APPLICATION exactly

**Step 1 –** Immediately after receiving the BLOCKED message (launch the application again if
needed), look in the Least Privilege Manager Log `PPService.log`, which can be found here by
default:

`%programdata%\PolicyPak\PolicyPak Least Privilege Manager\ppService.log` (i.e.
`C:\ProgramData\PolicyPak\PolicyPak Least Privilege Manager\ppService.log`)

![451_7_image-20200210223130-4](/images/endpointpolicymanager/leastprivilege/elevate/451_7_image-20200210223130-4.webp)

:::note
The reason to look immediately in the log is so that we know which ppservice().log file to
look in, ppservice.log is the latest log, and ppservice(n).log files are the rolled over logs.
:::


**Step 2 –** Open the ppservice.log in notepad (or any text editor) and scroll all the way to the
bottom. Start searching from the bottom upwards for the text ".application".

![451_9_image-20200210223130-5](/images/endpointpolicymanager/leastprivilege/elevate/451_9_image-20200210223130-5.webp)

**Step 3 –** What we are looking for is the entire command-line used to launch the .application. See
below for example:

![451_11_image-20200210223130-6](/images/endpointpolicymanager/leastprivilege/elevate/451_11_image-20200210223130-6.webp)

Using the example above our entire command-line would be:

```
"C:\Windows\System32\rundll32.exe" "C:\Windows\System32\dfshim.dll",ShOpenVerbApplication C:\Users\EastSalesUser1\Desktop\test.application
```

**Step 4 –** Now we are going to create an EXE combo elevation rule using **Path**, and also check
the two settings for **Command-line arguments** and **Apply to child processes** before clicking
**Next**.

![451_13_image-20200210223130-7](/images/endpointpolicymanager/leastprivilege/elevate/451_13_image-20200210223130-7.webp)

**Step 5 –** Enter "\*\EXE" for the PATH, replace EXE with the name of the executable mentioned in
the command-line from the ppservice.log relevant to your environment, then click **Next**.

In this example, the EXE name is **Rundll32.exe**.

![451_15_image-20200210223130-8](/images/endpointpolicymanager/leastprivilege/elevate/451_15_image-20200210223130-8.webp)

**Step 6 –** At the next screen, copy and paste the entire command-line from the ppservice.log file
into the **Command-line Arguments** section. Ensure that **Strict Equality** and **Ignore Arguments
case** are both selected.

:::note
The command-line arguments cannot be empty.
:::


**Step 7 –** Click **Next** then **Finish** to save the rule.

![451_17_image-20200210223130-9](/images/endpointpolicymanager/leastprivilege/elevate/451_17_image-20200210223130-9.webp)

**Step 8 –** Apply the policy and then verify using the Endpoint Policy Manager event log for the
application being Elevated.

![451_19_image-20200210223130-10_950x266](/images/endpointpolicymanager/leastprivilege/elevate/451_19_image-20200210223130-10_950x266.webp)


