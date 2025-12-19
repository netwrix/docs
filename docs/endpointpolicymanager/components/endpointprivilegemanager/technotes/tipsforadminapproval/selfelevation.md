---
title: "Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers"
description: "Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers"
sidebar_position: 70
---

# Least Privilege Manager - How to create a Self-Elevation policy for local groups of Standalone computers

**Step 1 –** When creating the Self Elevation Policy in LPM, create the rule as you would normally
and choose whichever Executable types you wish the members of the local group to be able to execute,
and also whether or not the policy should apply to child processes.

![959_1_image-20230522075042-1](/images/endpointpolicymanager/leastprivilege/policyeditor/959_1_image-20230522075042-1.jpeg)

**Step 2 –** When you get to the **Allowed Users** section be sure to use the **Add custom
user/group by SID as member** option.

![959_2_image-20230522075042-2](/images/endpointpolicymanager/leastprivilege/policyeditor/959_2_image-20230522075042-2.webp)

**Step 3 –** At this point you will need to look up the SID for the local group you wish to have the
Self Elevation policy apply to. This can be done by running the command "whoami /groups" on the
computer where the local group exists.

![959_3_image-20230522075042-3](/images/endpointpolicymanager/leastprivilege/policyeditor/959_3_image-20230522075042-3.webp)

**Step 4 –** In this example, I will be using the SID for the BUILTIN\Users group "S-1-5-32-545"

![959_4_image-20230522075042-4](/images/endpointpolicymanager/leastprivilege/policyeditor/959_4_image-20230522075042-4.webp)

**Step 5 –** Your policy should look similar to the example below.

![959_5_image-20230522075042-5](/images/endpointpolicymanager/leastprivilege/policyeditor/959_5_image-20230522075042-5.webp)

**Step 6 –** Lastly, deploy the policy and test if Self Elevation works. If the LPM Self Elevation
policy applies successfully to the local group then when you right click on any of the Executable
types you selected in the policy, you should see the **Run Self Elevated with PolicyPak** option
available.

![959_6_image-20230522075042-6](/images/endpointpolicymanager/leastprivilege/policyeditor/959_6_image-20230522075042-6.webp)


