---
title: "How to Allow a Non-Admin user to manage a specific Service using SC.EXE with Least Privilege Manager"
description: "How to Allow a Non-Admin user to manage a specific Service using SC.EXE with Least Privilege Manager"
sidebar_position: 120
---

# How to Allow a Non-Admin user to manage a specific Service using SC.EXE with Least Privilege Manager

The steps in the example below will allow a Non-Admin user to manage the Remote Registry service
using the SC.EXE command. Before you start, you can pre-test that a standard user cannot use the
command line to start the service.

Follow the steps to start the service using the command line.

**Step 1 –** Use command `sc config remoteregistry start=auto` to start your test.

**Step 2 –** Create an LPM Combo rule using Path and Command line.

![1318_1_6c12a201fa0efabb0ac290a16ff6cc0d](/images/endpointpolicymanager/leastprivilege/allow/1318_1_6c12a201fa0efabb0ac290a16ff6cc0d.webp)

**Step 3 –** For the Path, use: C:\Windows\System32\sc.exe

![1318_2_8beafda62e37494f1c8002167898f88f](/images/endpointpolicymanager/leastprivilege/allow/1318_2_8beafda62e37494f1c8002167898f88f.webp)

**Step 4 –** For the Command line use the syntax: `<ServiceName>` (\*space`<ServiceName>`\*). For
example:`RemoteRegistry`. Ensure that both **Strict equality** and **Ignore arguments** case options
are checked.

![1318_3_68d25dd7a6203dc388177e40b10e567d](/images/endpointpolicymanager/leastprivilege/allow/1318_3_68d25dd7a6203dc388177e40b10e567d.webp)

:::note
You can use services.msc and look at the properties of an individual service to get the
ServiceName, or you can use the `sc query` command from CMD to get the ServiceName.
:::


**Step 5 –** Apply the policy to the user(s) or computer(s) that need to receive the policy.

![1318_4_eb4a951261c6175e4bc5cf6755973f0e](/images/endpointpolicymanager/leastprivilege/allow/1318_4_eb4a951261c6175e4bc5cf6755973f0e.webp)

**Step 6 –** Test from a CMD prompt as a standard non-admin user to see if you can manage the Remote
Registry service using the SC.EXE command. `SC Config RemoteRegistry Start=Auto`

:::note
Since the Remote Registry service is disabled by default we need to enable the service and
choose its startup type.
:::


![1318_5_508183dde00c40d462fb07efa2b16d71](/images/endpointpolicymanager/leastprivilege/allow/1318_5_508183dde00c40d462fb07efa2b16d71.webp)

**Step 7 –** Start the service using the following command: `SC Start RemoteRegistry`.

![1318_6_5f4b0a5c9b2a2991bb671fa5353a3f8f](/images/endpointpolicymanager/leastprivilege/allow/1318_6_5f4b0a5c9b2a2991bb671fa5353a3f8f.webp)

**Step 8 –** Stop the service with the following command: `SC Stop RemoteRegistry`.

![1318_7_97c635953212043da712525588cec2d0](/images/endpointpolicymanager/leastprivilege/allow/1318_7_97c635953212043da712525588cec2d0.webp)

**Step 9 –** Disable the service with the following command:
`SC Config RemoteRegistry Start=Disabled`.

You can use the XML policy below as an example.


XML Policy

```
<?xml version="1.0" encoding="utf-8"?>
<policy xmlns:lpm="https://www.policypak.com/2016/LPM/CommonTypes" xmlns:ext="https://www.policypak.com/2019/LPM/PolicyEntryExtension" xmlns:security="https://www.policypak.com/2016/LPM/Security" xmlns:pd="https://www.policypak.com/2014/Policies/PolicyData" xmlns:pp="https://www.policypak.com/2014/CommonTypes" id="{08556a99-a6ea-4ce9-9dee-9cc490567c39}" productId="{58DE0268-6384-49E0-A333-20EC46654B82}" scope="machine" timestamp="1709820468" xmlns="https://www.policypak.com/2016/LPM/PolicyData">
  <collection order="0" id="{68b6fd6b-2d0c-4fa7-b7f8-4a74fd67d909}" displayName="Container for policy: Allow Non-Admins to manage Remote Registry Service Using SC.EXE">
    <entry order="0" scope="machine" id="{4943c522-8613-438f-b7b5-eb0c25032787}" displayName="Allow Non-Admins to manage Remote Registry Service Using SC.EXE">
      <rule-v1>
        <executableRule xmlns="https://www.policypak.com/2016/LPM/Rules-V1">
          <conditions xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <pathCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <path kind="File">%SYSTEMROOT%\System32\sc.exe</path>
            </pathCondition>
            <commandLineCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <value>* RemoteRegistry*</value>
              <useAndSpecifierForArguments>false</useAndSpecifierForArguments>
            </commandLineCondition>
          </conditions>
          <settings justificationTextRequired="false" restrictOpenSaveDialog="true" xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <applyToChildProcesses>true</applyToChildProcesses>
          </settings>
          <action xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <changeProcess xmlns="https://www.policypak.com/2016/LPM/Actions">
              <security:changeToken baseToken="Elevated">
                <security:groups />
                <security:privileges />
              </security:changeToken>
            </changeProcess>
          </action>
        </executableRule>
      </rule-v1>
    </entry>
  </collection>
</policy>
```


