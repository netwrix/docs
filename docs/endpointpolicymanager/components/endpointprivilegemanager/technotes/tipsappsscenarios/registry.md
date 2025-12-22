---
title: "How do I use Least Privilege Manager to Elevate .reg files to allow import by standard users"
description: "How do I use Least Privilege Manager to Elevate .reg files to allow import by standard users"
sidebar_position: 40
---

# How do I use Least Privilege Manager to Elevate .reg files to allow import by standard users

The registry requires elevated rights to be updated. Least Privilege Manager can be used to elevate
the rights of a standard user to allow specific .reg files be imported without an administrator.

:::note
We recommend you put the .REG file on a server so the file itself is under permissions
which cannot be tampered with. It could be a risk to put the .REG file locally on the hard drive
where anyone could edit the raw contents.
:::


## Method 1: New Executable Policy

**Step 1 –** Create new GPO where required.

**Step 2 –** Expand Netwrix Endpoint Policy Manager (formerly PolicyPak) node on either Computer, or
User Configuration side, and click ,**Least Privilege Manager**.

**Step 3 –** Add new EXE Policy (a or b).

![621_1_image-20200510100624-1](/images/endpointpolicymanager/leastprivilege/elevate/621_1_image-20200510100624-1.webp)

**Step 4 –** Select **Use Combo Rule …** and click **NEXT**.

![621_3_image-20200510100625-2](/images/endpointpolicymanager/leastprivilege/elevate/621_3_image-20200510100625-2.webp)

**Step 5 –** Under **Conditions** check **Path**, and under Settings check **Command-line
arguments** and **Apply to child processes** . Click **Next**.

![621_5_image-20200510100625-3](/images/endpointpolicymanager/leastprivilege/elevate/621_5_image-20200510100625-3.webp)

**Step 6 –** Under **Path Condition** click the **Add** drop-down and select **Add file ...**.

![621_7_image-20200510100625-4](/images/endpointpolicymanager/leastprivilege/elevate/621_7_image-20200510100625-4.webp)

**Step 7 –** Either browse for `regedit.exe`, or type in "`%SYSTEMROOT%\regedit.exe`" and click
**OK**.

![621_9_po_950x46](/images/endpointpolicymanager/leastprivilege/elevate/621_9_po_950x46.webp)

**Step 8 –** Click on **Command-line Arguments**

1. Under **Check Mode** select **Strict equality**
2. In the **Arguments** box type in text entered in Path Condition (step7) and path to `.reg` file
   to elevate
3. Check **Ignore arguments case**
4. Click **Next**.

   ![621_11_image-20200510100625-6](/images/endpointpolicymanager/leastprivilege/elevate/621_11_image-20200510100625-6.webp)

**Step 9 –** Select **Run with elevated privileges** and Click **Next**.

![621_13_image-20200510100625-7](/images/endpointpolicymanager/leastprivilege/elevate/621_13_image-20200510100625-7.webp)

**Step 10 –** Rename and set Item Level Targeting if required and click **Finish**.

## Method 2: New Script Policy

Before you create the policy, place your script on a server or secure, shared location (e.g.
`\\server\share\PSscript.ps1`). The following is a sample script that can be used with either
PowerShell or as a batch file to import a `.REG` file:

```
Regedit.exe /s \\server\share\NewRegValue.reg
```

**Step 1 –** Create new GPO where required.

**Step 2 –** Expand PolicyPak node on either Computer or User Configuration side and click on
.**Least Privilege Manager**.

**Step 3 –** Create new SCRIPT Policy (a or b).

![621_15_image-20200510100625-8](/images/endpointpolicymanager/leastprivilege/elevate/621_15_image-20200510100625-8.webp)

**Step 4 –** Select **Use Combo Rule …** and click **Next**.

:::note
Although you can use a simple rule and simply use path as the qualifying factor, for
security purposes it is recommended you have multiple qualifying factors.
:::


![621_17_image-20200510100625-9](/images/endpointpolicymanager/leastprivilege/elevate/621_3_image-20200510100625-2.webp)

**Step 5 –** Under Conditions check **Path** and **Hash** and click **Next**.

![621_19_image-20200510100625-10](/images/endpointpolicymanager/leastprivilege/elevate/621_19_image-20200510100625-10.webp)

:::note
If you make changes to the script, the Hash value will need to be updated for the policy
to remain valid. Alternatively, if you digitally sign your script, Signature can be used instead of
Hash as the second method of validation.
:::


**Step 6 –** Under Path Condition click the **Add** drop-down and select .**Add file ...**.

![621_21_image-20200510100625-11](/images/endpointpolicymanager/leastprivilege/elevate/621_21_image-20200510100625-11.webp)

**Step 7 –** Browse to the location of the` PowerShell script -> When Prompted`, allow to
automatically fill in Hash value,

![621_23_image-20200510100625-12](/images/endpointpolicymanager/leastprivilege/elevate/621_23_image-20200510100625-12.webp)

![621_25_image-20200510100625-13](/images/endpointpolicymanager/leastprivilege/elevate/621_25_image-20200510100625-13.webp)

**Step 8 –** Click on **Hash Condition** to confirm Value has been `set -> If desired`, and change
algorithm to setting of .

![621_27_image-20200510100625-14](/images/endpointpolicymanager/leastprivilege/elevate/621_27_image-20200510100625-14.webp)

**Step 9 –** Select "**Run with elevated privileges**and click **Next**.

![621_29_image-20200510100625-15](/images/endpointpolicymanager/leastprivilege/elevate/621_13_image-20200510100625-7.webp)

**Step 10 –** Rename and set Item Level Targeting if required and click **Finish**.


