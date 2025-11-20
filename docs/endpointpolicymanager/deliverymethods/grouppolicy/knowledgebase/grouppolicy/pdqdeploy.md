---
title: "How to use PDQ Deploy to collect PPLOGS from remote computers then save them to a network location"
description: "How to use PDQ Deploy to collect PPLOGS from remote computers then save them to a network location"
sidebar_position: 10
---

# How to use PDQ Deploy to collect PPLOGS from remote computers then save them to a network location

:::note
You need to be running PDQ Deploy in Enterprise mode to use this functionality.
:::


**Step 1 –** Create a new PDQ Deploy package and give it a descriptive name.

**Step 2 –** Under Steps choose **Command**.

![784_1_hf-faq-914-img-01](/images/endpointpolicymanager/grouppolicy/784_1_hf-faq-914-img-01.webp)

**Step 3 –** Give the Step a descriptive name, like Collect PPLOGS as User, then, under **Details
tab** > **Command** type or paste in the command below. Replace \\server\share with a valid network
path for your environment. **Note**: Users must be able to create files under the network path you
choose.

`echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-%username%.zip`

![784_3_hf-faq-914-img-02_950x110](/images/endpointpolicymanager/grouppolicy/784_3_hf-faq-914-img-02_950x110.webp)

**Step 4 –** Under the **Options** tab set the **Run As** to **Logged on User**, then click **Save**
to save your progress so far.

![784_5_hf-faq-914-img-03_950x134](/images/endpointpolicymanager/grouppolicy/784_5_hf-faq-914-img-03_950x134.webp)

**Step 5 –** Select the **New Step** dropdown and choose **Command** from the dropdown list.

![784_7_hf-faq-914-img-04](/images/endpointpolicymanager/grouppolicy/784_7_hf-faq-914-img-04.webp)

**Step 6 –** Give the Step a descriptive name, like. Collect PPLOGS as Admin), and then under
**Details tab** > **Command** type or paste in the command below, replacing \\server\share with a
valid network path for your environment.

`echo y|pplogs /out:\\server\share\pplogs\%computername%\pplogs-%computername%-admin.zip`

**Step 7 –** Click **Save**, then test your deployment. Once the deployment has executed
successfully check your network share to see the results.

![784_9_hf-faq-914-img-05](/images/endpointpolicymanager/grouppolicy/784_9_hf-faq-914-img-05.webp)


