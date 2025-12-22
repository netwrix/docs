---
title: "How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding."
description: "How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding."
sidebar_position: 10
---

# How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding.

#### Enable the Windows Remote Management (WinRM) Service on the Endpoints.

:::note
Since we need this service running on all the endpoints from where we plan to have forward
events, it is recommended to use Group Policy to enable this setting.
:::


**Step 1 –** To enable this service using Group Policy, first create and link a GPO to the domain or
OU where the computers (endpoints) live, give this a GPO a descriptive name, (i.e. Event Log
Forwarding Setup).

**Step 2 –** Edit the GPO, expand **Computer Configuration** > **Preferences** > **Control Panel
Settings** > **Services**, then right click .**Services**. and choose .**New** > **Service**.

![381_1_image-20191023214431-1](/images/endpointpolicymanager/leastprivilege/381_1_image-20191023214431-1.webp)

**Step 3 –** Under .**New Service Properties** > **General** > **Service name:** click the ellipses
(**…**) and browse for the WinRM service, then with the WinRM service highlighted, click **Select**.

![381_3_image-20191023214431-2](/images/endpointpolicymanager/leastprivilege/381_3_image-20191023214431-2.webp)

**Step 4 –** Set the **Service action:**to **"Start service**", then click **Ok**.

![381_5_image-20191023214431-3](/images/endpointpolicymanager/leastprivilege/381_5_image-20191023214431-3.webp)

#### Allow the "Local Network Service" to access the event logs.

**Step 1 –** In the same GPO as above, expand Computer Configuration > Policies > Windows Settings >
Security Settings > Restricted Groups, then right-click "Restricted Groups" and select "Add Group",
then type in "Event Log Readers" and click "Ok".

![381_7_image-20191023214431-4](/images/endpointpolicymanager/leastprivilege/381_7_image-20191023214431-4.webp)

**Step 2 –** Right-click on the Event Log Readers group and select **Properties**, then add
**NETWORK SERVICE** under Members of this group:, and click **Ok**.

![381_8_image-20191023214431-5](/images/endpointpolicymanager/leastprivilege/381_8_image-20191023214431-5.webp)

#### Setting up the Event Forwarding Subscription

**Step 1 –** In the same GPO as above, expand **Computer Configuration** > **Policies** >
**Administrative Templates** > **Windows Components** > **Event Forwarding**, then double-click
Configure target Subscription Manager, select the radio button for **Enabled** then click
**Show...**.

![381_10_image-20191023214431-6](/images/endpointpolicymanager/leastprivilege/381_10_image-20191023214431-6.webp)

**Step 2 –** Under Show Contents configure the following:

![381_12_image-20191023214431-7](/images/endpointpolicymanager/leastprivilege/381_12_image-20191023214431-7.webp)

- **NOTE:** Replace YourServerFQDN with the Fully Qualified Domain Name (FQDN) of your central
  collection machine (the one you want to forward events to). For example, if your server name was
  dc2016.fabrikam.com you would use:

  ```
  SERVER=http://DC2016.FABRIKAM.COM:5985/wsman/SubscriptionManager/WEC
  ```

- For HTTPS protocol use:

  ```
  SERVER=https://<FQDN of the collector>:5986/wsman/SubscriptionManager/WEC,Refresh=<Refresh interval in seconds>,IssuerCA=<Thumb print of the client authentication certificate>.
  ```

- "Refresh=60" is optional and equals 60 seconds. This value should only be used for testing. Once
  everything is working remove the ",Refresh=60" or don't use it to begin with and instead wait for
  events to be forwarded ( the default interval is 15 minutes). For more information see the
  Microsoft article on
  [Best practice for configuring EventLog forwarding in Windows Server 2012 R2](https://learn.microsoft.com/en-us/troubleshoot/windows-server/admin-development/configure-eventlog-forwarding-performance).

**Step 3 –** On the central collection machine or server (the one you want to forward events to)
open Event Viewer and click on **Subscriptions**. If shown the message below, click **Yes**.

![381_14_image-20191023214431-8](/images/endpointpolicymanager/leastprivilege/381_14_image-20191023214431-8.webp)

**Step 4 –** Now right click **Subscriptions** and choose **Create Subscription…**.

![381_16_image-20191023214431-9](/images/endpointpolicymanager/leastprivilege/381_16_image-20191023214431-9.webp)

**Step 5 –** Give the Subscription a name (i.e. Endpoint Policy Manager Interesting Events), then
select the **Source computer initiated** radio button, and click **Select Computer Groups**.

![381_18_image-20191023214431-10](/images/endpointpolicymanager/leastprivilege/381_18_image-20191023214431-10.webp)

**Step 6 –** Under Select Computer Groups click "Add Domain Computers…" then add the **Domain
Computers** group, and click **Ok**.

![381_20_image-20191023214431-11](/images/endpointpolicymanager/leastprivilege/381_20_image-20191023214431-11.webp)

**Step 7 –** Click **Select Events…**.

![381_22_image-20191023214431-12](/images/endpointpolicymanager/leastprivilege/381_22_image-20191023214431-12.webp)

**Step 8 –** If you happen to have the Endpoint Policy Manager Client Side Extensions (CSE)
installed, under Select Events you can select the **By Log** button, then use the drop down under
Event Sources: to find **PolicyPak Least Privilege Manager Client – Operational** and place a check
box next to it. Click**Ok**.
 You should now see a screen similar to this one:

![381_24_image-20191023214431-13](/images/endpointpolicymanager/leastprivilege/381_24_image-20191023214431-13.webp)

:::note
If you don't have the CSE installed, select the **XML** tab, then check the **Edit query
manually** check box at the bottom before pasting in the query below, and clicking **Ok**. You will
not be able to use the Filter tab after editing the XML query manually.
:::


```
<QueryList>    <Query Id="0" Path="PolicyPak">    <Select Path="PolicyPak">*[System[Provider[@Name='PolicyPak Least Privilege Manager Client - Operational']]]</Select>    </Query>    </QueryList>
```

![381_26_image-20191023214431-14](/images/endpointpolicymanager/leastprivilege/381_26_image-20191023214431-14.webp)

:::note
Once you click **Ok** the text will be formatted correctly and aligned on the left.
:::


**Step 9 –** Run gpupdate /force on a test computer and wait until the 60 seconds or 15-minute
interval has passed before clicking refresh in the Subscriptions Window or Forwarded Events log. If
any Endpoint Policy Manager Least Privilege Operational events have occurred within that interval
and everything else is working, you should start to see computers showing up under the Source
Computers column in the subscription, and start to see events from the source computers showing up
under the Forwarded Events log.

![381_28_image-20191023214431-15](/images/endpointpolicymanager/leastprivilege/381_28_image-20191023214431-15.webp)

![381_30_image-20191023214431-16_950x303](/images/endpointpolicymanager/leastprivilege/381_30_image-20191023214431-16_950x303.webp)


