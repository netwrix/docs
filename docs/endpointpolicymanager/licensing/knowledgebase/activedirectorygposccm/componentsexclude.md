---
title: "How do I specifically exclude or prevent a component from performing processing by modifying the license file?"
description: "How do I specifically exclude or prevent a component from performing processing by modifying the license file?"
sidebar_position: 50
---

# How do I specifically exclude or prevent a component from performing processing by modifying the license file?

Before you decide you wish to use this method, consider first using the ADMX method to disable
specific components. The ADMX method is recommended over hand-editing the license file, and has the
same effect. Therefore please consider this method first. See
[What if I want to unlicense specific components via ADMX or Endpoint Policy Manager Cloud?](/docs/endpointpolicymanager/licensing/knowledgebase/activedirectorygposccm/componentscloud.md)

However, if you wish to hard-unlicense a component via the license file, you may do that inside your
Universal License file.

A Universal License file will express all the components you are licensed for. There are two types
of Universal Licenses. First identify what kind of universal license you have:

Type 1: Licenses which express specific components you are licensed for. For example:

![748_1_image-20230820022159-1_950x514](/images/endpointpolicymanager/license/unlicense/748_1_image-20230820022159-1_950x514.webp)

Type 2: Licenses type which express that you are licensed for Enterprise Full and therefore licensed
for all components.

![748_2_image-20230820022159-2_950x364](/images/endpointpolicymanager/license/unlicense/748_2_image-20230820022159-2_950x364.webp)

## How to modify Type 1 Licenses:

When your license expresses the specific components you are licensed for, you will see lines in the
license file like this:

```
<component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences"  /> 
```

And/Or

```
<component id="32f17e56-85b0-460f-b029-8eaa332f440b" name="PolicyPak File Association Manager" />
```

To make a specific component stop performing work and processing, you can modify the license for
each component you want to affect, like this:

```
<component id="608ba33d-af06-46f9-9e6c-62495560024e" name="PolicyPak Preferences" enabled="false" />
```

And/Or

```
<component id="32f17e56-85b0-460f-b029-8eaa332f440b" name="PolicyPak File Association Manager" enabled="false" />
```

:::note
For the last component in the section you need to use:
`enabled="false" > instead of enabled="false" />`
:::


For example:

```
<component id="58de0268-6384-49e0-a333-20ec46654b82" name="PolicyPak Least Privilege Manager" enabled="false" > 
```

## How to Modify a Type 2 License:

:::warning
This procedure will only work when the endpoint is running a CSE build later than 23.8.
This is not expected to work on CSE 23.6 (which will accept Enterprise Full licenses, but will not
accept the `<disabled>` block. Additionally, only MMC snap-ins 23.8 and later will accept Enterprise
Full licenses with the `<disabled>` block.
:::


First, identify which component(s) you wish to unlicense.
[What CSEs are contained within Endpoint Policy Manager, what are their CSE GUIDs, and in what release did they appear?](/docs/endpointpolicymanager/gettingstarted/misc/knowledgebase/troubleshooting/guids.md)

For instance, if you wanted to unlicense Netwrix Endpoint Policy Manager (formerly PolicyPak)
Browser Router and also Endpoint Policy Manager Preferences 2.0 you would create an XML block like
this

```
<disabled> 
    <component id="1659C456-08FC-4359-B125-BB70EE34DD55" name="PolicyPak Browser Router"/>
    <component id="8a67684e-f09b-48dc-ad85-17c014ae5560" name="PolicyPak Preferences 2.0"/>
</disabled>
```

Then, the final and exact positioning in your Universal Enterprise Full license file would be like
what's seen in this example (after the `</capabilities>` closing block.

```
<?xml version="1.0" encoding="utf-8"?>
<universal_license>
  <licensee_name>Your Company </licensee_name>
  <licensee_uuid>f5bc0afd-0280-495b-bfea-c6812f2361d1</licensee_uuid>
  <start_date>2023-03-15</start_date>
  <expiry_date>2026-03-15</expiry_date>
  <never_expires>false</never_expires>
  <scopes>
    <scope type="AD" value="DC=fabrikam,DC=com" />
    <scope type="UPN" value="*@fabrikam1000.com" />
  </scopes>
  <capabilities>
    <capability>gp-policies</capability>
    <capability>xml-policies</capability>
    <capability>mdm-policies</capability>
    <component id="fddb98dd-4668-4742-9b8a-757274b86fc8" name="Universal Product Component">
      <capability>complete</capability>
    </component>
  </capabilities>
  <disabled>
    <component id="1659C456-08FC-4359-B125-BB70EE34DD55" name="PolicyPak Browser Router"/>
    <component id="8a67684e-f09b-48dc-ad85-17c014ae5560" name="PolicyPak Preferences 2.0"/>
  </disabled>
  <signature>Mw9Fj+XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==</signature>
</universal_license>
```

## Next steps after License XML modification / Import into MMC Console

The license is now ready to deploy via any method, like Group Policy or MSI wrap-up for use with an
MDM provider like Intune.

Note that the 23.8 and later MMC is preferred for any modified licenses that you've created. The MMC
console will express which components you have placed in the `<disabled>` blocks.

![748_3_image-20230820022159-3_950x561](/images/endpointpolicymanager/license/unlicense/748_3_image-20230820022159-3_950x561.webp)

The Group Policy Settings Report will also express this as well.

![748_4_image-20230820022159-4_950x560](/images/endpointpolicymanager/license/unlicense/748_4_image-20230820022159-4_950x560.webp)

## Result of unlicensing specific component(s):

After the computer picks up the new license (via GPO, MDM, etc.) you can verify via the
`PPUPDATE `command if the computer will stop processing that component.

The result of modified components via blocked license can be seen in this example.

![748_5_image-20230820022159-5_950x814](/images/endpointpolicymanager/license/unlicense/748_5_image-20230820022159-5_950x814.webp)

