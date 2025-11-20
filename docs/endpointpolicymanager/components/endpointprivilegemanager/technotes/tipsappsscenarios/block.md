---
title: "How to Block running PowerShell 2.0 using Least Privilege Manager"
description: "How to Block running PowerShell 2.0 using Least Privilege Manager"
sidebar_position: 110
---

# How to Block running PowerShell 2.0 using Least Privilege Manager

Issue:

Blocking PowerShell Version 2 using a traditional command line rule in Endpoint Policy Manager Least
Privilege Manager results in multiple block events being generated every second in the Endpoint
Policy Manager event log.

![1319_1_61042bd4123a78ef7686b114b9eea335](/images/endpointpolicymanager/leastprivilege/powershell/1319_1_61042bd4123a78ef7686b114b9eea335.webp)

Cause:

When you try to run PowerShell -v 2 (or an equivalent) from the PowerShell prompt the following is
happening:

First, the parent (PowerShell) creates a child with the following command line:

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` -version 2

When it fails (due to the fact the PP LPM Client Side Extensions (CSE) blocks it), the parent (the
initial PowerShell process) creates a temporary child process with another command line:

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` -version 2.

The child process then creates another child process with the initial command line and Endpoint
Policy Manager (formerly PolicyPak) Least Privilege Managerblocks it.

Then it repeats, in an endless loop.

Workaround:

Since we cannot alter the internal PowerShell logic that attempts to restart the child process to
overcome the failure, we have to use the two scripts below to work around the issue. The two
policies below are also attached as XML for your convenience.

![1319_2_d3a2208d260469bdbfdfc7edaf6848ba](/images/endpointpolicymanager/leastprivilege/powershell/1319_2_d3a2208d260469bdbfdfc7edaf6848ba.webp)

![1319_3_5745adb2d8b01ee9555aa6db772eae6a](/images/endpointpolicymanager/leastprivilege/powershell/1319_3_5745adb2d8b01ee9555aa6db772eae6a.webp)

Lastly, test using the command directly below to ensure that PowerShell Version 2.0 is now
successfully blocked and that there are no longer multiple block events being created in the
Endpoint Policy Manager event log.

PowerShell -version 2.0

[Copy](<javascript:void(0);>)

PowerShell V2 Workaround

```
<?xml version="1.0" encoding="utf-8"?>
<policy xmlns:lpm="https://www.policypak.com/2016/LPM/CommonTypes" xmlns:ext="https://www.policypak.com/2019/LPM/PolicyEntryExtension" xmlns:security="https://www.policypak.com/2016/LPM/Security" xmlns:pd="https://www.policypak.com/2014/Policies/PolicyData" xmlns:pp="https://www.policypak.com/2014/CommonTypes" id="{16bd96da-fbdf-41ee-b5c7-928c2f4d7bb4}" productId="{58DE0268-6384-49E0-A333-20EC46654B82}" scope="machine" timestamp="1695653890" xmlns="https://www.policypak.com/2016/LPM/PolicyData">
  <collection order="0" id="{88ed31d2-b92b-455c-a430-df0ef4c628f0}" displayName="Collection for policy: Block Powershell by SIG and FILE INFO">
    <entry order="0" scope="user" id="{cf4d5203-0b5e-4f34-a604-51eebf79f29a}" displayName="Block Powershell by SIG and FILE INFO (Rule 1)">
      <rule-v1>
        <executableRule xmlns="https://www.policypak.com/2016/LPM/Rules-V1">
          <conditions xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <signatureCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <commonName>CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US</commonName>
            </signatureCondition>
            <fileInfoCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <productName>Microsoft® Windows® Operating System</productName>
              <productVersion mode="HigherOrEquals">10.0.14393.206</productVersion>
              <fileName useWildcards="true">*powersh*</fileName>
              <fileVersion mode="HigherOrEquals">10.0.14393.206</fileVersion>
            </fileInfoCondition>
            <commandLineCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <value>-v* 2*</value>
              <useAndSpecifierForArguments>false</useAndSpecifierForArguments>
            </commandLineCondition>
          </conditions>
          <settings justificationTextRequired="false" xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <applyToChildProcesses>false</applyToChildProcesses>
          </settings>
          <action xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <denyExecution xmlns="https://www.policypak.com/2016/LPM/Actions">
              <useDefaultMessage>false</useDefaultMessage>
            </denyExecution>
          </action>
        </executableRule>
      </rule-v1>
    </entry>
    <entry order="1" scope="user" id="{3ef0d0a6-4c7a-4e77-8935-c564d55e6a7c}" displayName="Block Powershell by SIG and FILE INFO (Rule 2)">
      <rule-v1>
        <executableRule xmlns="https://www.policypak.com/2016/LPM/Rules-V1">
          <conditions xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <signatureCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <commonName>CN=Microsoft Windows, O=Microsoft Corporation, L=Redmond, S=Washington, C=US</commonName>
            </signatureCondition>
            <fileInfoCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <productName>Microsoft® Windows® Operating System</productName>
              <productVersion mode="HigherOrEquals">10.0.14393.206</productVersion>
              <fileName useWildcards="true">*powersh*</fileName>
              <fileVersion mode="HigherOrEquals">10.0.14393.206</fileVersion>
            </fileInfoCondition>
            <commandLineCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <value>* -v* 2*</value>
              <useAndSpecifierForArguments>false</useAndSpecifierForArguments>
            </commandLineCondition>
          </conditions>
          <settings justificationTextRequired="false" xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <applyToChildProcesses>false</applyToChildProcesses>
          </settings>
          <action xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <denyExecution xmlns="https://www.policypak.com/2016/LPM/Actions">
              <useDefaultMessage>false</useDefaultMessage>
            </denyExecution>
          </action>
        </executableRule>
      </rule-v1>
    </entry>
  </collection>
</policy>
```


