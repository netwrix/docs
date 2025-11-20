---
title: "Intel Driver and Support Assistant"
description: "Intel Driver and Support Assistant"
sidebar_position: 200
---

# Intel Driver and Support Assistant

If the Intel Driver and Support Assistant cannot install updates when Endpoint Policy Manager CSE is
installed, even if all components are unlicensed, see the resolutions below.

Symptom

Any updates that you try to install using the Intel DSA console will display as "canceled".

![Intel Driver and Support Assistant Update error](/images/endpointpolicymanager/troubleshooting/inteldsaupdates.webp)

Cause

The Least Privilege Manager Explicit Elevate option is intercepting the elevation attempt but does
not show a UAC prompt, which is needed for the update to install.

Resolution 1

See the Scenario 2 section of the
[How can I change the behavior of "Run as Admin" with Endpoint Privilege Manager and how has it changed from previous versions?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/tipspplpm/runasadmin.md)
topic for additional information on how to disable the Explicit Elevate option.

Resolution 2

Alternatively, you can import and use the Endpoint Policy Manager Admin Templates XML file below
with this setting already configured.

```
<policy xmlns="https://www.policypak.com/2014/Policies/ATM" xmlns:common="https://www.policypak.com/2014/CommonTypes" xmlns:mmc="https://www.policypak.com/2014/Policies/MMC" xmlns:policies="https://www.policypak.com/2014/Policies/PolicyData" id="{97cfdeb3-1811-402b-a8f3-5baaeca1cd8b}" productId="{E0088A46-AB54-4FBD-A733-303C58244C5E}" scope="machine" timestamp="1736976809">
<admxFiles>
<file fileName="ppcses.admx" namespace="endpointpolicymanager.CSEs"/>
</admxFiles>
<admxCategories>
<category displayName="PolicyPak ADMX Settings" id="endpointpolicymanager.endpointpolicymanagerCompany" name="PolicyPakCompany" namespace="PolicyPak"/>
<category displayName="Client-Side Extensions" id="endpointpolicymanager.CSEs.CSEs" name="CSEs" namespace="endpointpolicymanager.CSEs">
<parentCategory refId="endpointpolicymanager.endpointpolicymanagerCompany"/>
</category>
<category displayName="Least Privilege Manager" id="endpointpolicymanager.CSEs.LeastPrivilegeManager" name="LeastPrivilegeManager" namespace="endpointpolicymanager.CSEs">
<parentCategory refId="endpointpolicymanager.CSEs.CSEs"/>
</category>
</admxCategories>
<policyCollection displayName="Container for policy: Configure processing Explicit-Elevation requests for processes" id="{ad597e87-2fd5-45bd-a884-c206424e32d6}" order="0">
<entry admxPolicyClass="machine" admxPolicyName="PPLPM_ConfigureExplicitElevateForProcesses" definitionHash="d0c6a95b71ad940204fd1b1bf3565a75" displayName="Configure processing Explicit-Elevation requests for processes" id="{13ef303d-07f4-4070-93e4-7b93aaaec4e7}" isLocal="true" order="2" scope="machine" state="enabled" mmc:fullId="Machine:endpointpolicymanager.CSEs.LeastPrivilegeManager.PPLPM_ConfigureExplicitElevateForProcesses">
<comment/>
<admxFile refNamespace="endpointpolicymanager.CSEs"/>
<parentCategory refId="endpointpolicymanager.CSEs.LeastPrivilegeManager"/>
<filter disabled="true"/>
<elements>
<enum displayName="Option:" itemDisplayName="Disable intercept Explicit-Elevation" itemIndex="0" refId="ConfigureExplicitElevateForProcesses"/>
</elements>
<registry>
<policies:registryKey key="Software\Policies\PolicyPak\Client-Side Extensions\{58DE0268-6384-49E0-A333-20EC46654B82}\Explicit Elevate">
<policies:decimal name="ExplicitElevateOption">0</policies:decimal>
</policies:registryKey>
</registry>
</entry>
</policyCollection>
</policy>
```

After completing one of the resolutions, try installing the Intel updates to verify the resolution
worked.

![Intel Driver and Support Assistant Installer](/images/endpointpolicymanager/troubleshooting/inteldsainstaller.webp)

If the Intel update is still canceled, try both resolutions before reaching out to support.
