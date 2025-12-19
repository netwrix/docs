---
title: "How to Allow UiPath Assistant to run when running PowerShell is blocked for all Users"
description: "How to Allow UiPath Assistant to run when running PowerShell is blocked for all Users"
sidebar_position: 130
---

# How to Allow UiPath Assistant to run when running PowerShell is blocked for all Users

Blocking PowerShell for everyone can also cause applications that depend on PowerShell to not run
properly. For example, when using the UiPath Assistant application with PowerShell blocked, the two
UiPath Assistant commands below are also be blocked.

![1320_1_5c7b0bb711837088e14ba56fe0191b4e](/images/endpointpolicymanager/leastprivilege/allow/1320_1_5c7b0bb711837088e14ba56fe0191b4e.webp)

![1320_2_2b07a73f4f7ad9bd4005effc11de64c9](/images/endpointpolicymanager/leastprivilege/allow/1320_2_2b07a73f4f7ad9bd4005effc11de64c9.webp)

![1320_3_e63350e252dcfbfbbe47a6949ab99f53](/images/endpointpolicymanager/leastprivilege/allow/1320_3_e63350e252dcfbfbbe47a6949ab99f53.webp)

![1320_4_129d10341515bde5b5cc94db70557eba](/images/endpointpolicymanager/leastprivilege/allow/1320_4_129d10341515bde5b5cc94db70557eba.webp)

To work around this issue you need to create two LPM Path and Command line Executable Policies using
the settings below.

![1320_5_0c63e13faa75539ef18a64527e8fc5c7](/images/endpointpolicymanager/leastprivilege/allow/1320_5_0c63e13faa75539ef18a64527e8fc5c7.webp)

For Policy # 1 use these settings:

Path: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

Arguments: `*"$assemblies=(\"System\");$source=\"*`

![1320_6_53331fee44652a08986eec464b49ee4e](/images/endpointpolicymanager/leastprivilege/allow/1320_6_53331fee44652a08986eec464b49ee4e.webp)

For Policy #2 use these settings:

Path: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`

Arguments:
`"$FileContent = Get-Content -Encoding unicode %Temp%\shortcuts-params.txt; Invoke-Expression $FileContent"`

![1320_7_ee314a383e4b4e2d6f0723c6562c2fff](/images/endpointpolicymanager/leastprivilege/allow/1320_7_ee314a383e4b4e2d6f0723c6562c2fff.webp)

:::note
For both policies above be sure to set **Ignore arguments** case to **True**, and
**Comparison mode** to **Strict Equality**.
:::


[Copy](<javascript:void(0);>)

Allowed with Path Rule 1

```
<?xml version="1.0" encoding="utf-8"?>
<policy xmlns:lpm="https://www.policypak.com/2016/LPM/CommonTypes" xmlns:ext="https://www.policypak.com/2019/LPM/PolicyEntryExtension" xmlns:security="https://www.policypak.com/2016/LPM/Security" xmlns:pd="https://www.policypak.com/2014/Policies/PolicyData" xmlns:pp="https://www.policypak.com/2014/CommonTypes" id="{f15e00f9-31ab-4e3c-956a-21d4b49e280b}" productId="{58DE0268-6384-49E0-A333-20EC46654B82}" scope="machine" timestamp="1711029993" xmlns="https://www.policypak.com/2016/LPM/PolicyData">
  <collection order="0" id="{245fa453-d68a-49ea-ab81-54c96152fe5d}" displayName="Container for policy: UiPath.Assistant PowerShell command Allowed with PATH rule 1">
    <entry order="0" scope="machine" id="{e495c7c7-c377-439b-8cbb-48619daaef82}" displayName="UiPath.Assistant PowerShell command Allowed with PATH rule 1">
      <rule-v1>
        <executableRule xmlns="https://www.policypak.com/2016/LPM/Rules-V1">
          <conditions xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <pathCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <path kind="File">C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe</path>
            </pathCondition>
            <commandLineCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <value>*"$assemblies=(\"System\");$source=\"*</value>
              <useAndSpecifierForArguments>false</useAndSpecifierForArguments>
            </commandLineCondition>
          </conditions>
          <settings justificationTextRequired="false" xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <applyToChildProcesses>true</applyToChildProcesses>
          </settings>
          <action xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <doNothing xmlns="https://www.policypak.com/2016/LPM/Actions" />
          </action>
        </executableRule>
      </rule-v1>
    </entry>
  </collection>
</policy>
```

[Copy](<javascript:void(0);>)

Allowed with Path Rule 2

```
<?xml version="1.0" encoding="utf-8"?>
<policy xmlns:lpm="https://www.policypak.com/2016/LPM/CommonTypes" xmlns:ext="https://www.policypak.com/2019/LPM/PolicyEntryExtension" xmlns:security="https://www.policypak.com/2016/LPM/Security" xmlns:pd="https://www.policypak.com/2014/Policies/PolicyData" xmlns:pp="https://www.policypak.com/2014/CommonTypes" id="{7e0b0353-402e-44c9-9138-109c2701678f}" productId="{58DE0268-6384-49E0-A333-20EC46654B82}" scope="machine" timestamp="1711029984" xmlns="https://www.policypak.com/2016/LPM/PolicyData">
  <collection order="0" id="{813b29c6-dbe8-44af-a423-293a68d8955a}" displayName="Container for policy: UiPath.Assistant PowerShell Command Allowed with PATH rule 2">
    <entry order="1" scope="machine" id="{3b19b7c4-c55e-44b3-9065-503c8e6faad2}" displayName="UiPath.Assistant PowerShell Command Allowed with PATH rule 2">
      <rule-v1>
        <executableRule xmlns="https://www.policypak.com/2016/LPM/Rules-V1">
          <conditions xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <pathCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <path kind="File">C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe</path>
            </pathCondition>
            <commandLineCondition xmlns="https://www.policypak.com/2016/LPM/Rules">
              <value>"$FileContent = Get-Content -Encoding unicode %Temp%\shortcuts-params.txt; Invoke-Expression $FileContent"</value>
              <useAndSpecifierForArguments>false</useAndSpecifierForArguments>
            </commandLineCondition>
          </conditions>
          <settings justificationTextRequired="false" xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <applyToChildProcesses>true</applyToChildProcesses>
          </settings>
          <action xmlns="https://www.policypak.com/2016/LPM/ExecutableRule">
            <doNothing xmlns="https://www.policypak.com/2016/LPM/Actions" />
          </action>
        </executableRule>
      </rule-v1>
    </entry>
  </collection>
</policy>
```


