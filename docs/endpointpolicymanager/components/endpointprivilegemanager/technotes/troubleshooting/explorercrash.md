---
title: "How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx, xlsx, etc.?"
description: "How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx, xlsx, etc.?"
sidebar_position: 130
---

# How-to Fix EXPLORER.EXE crash when right-clicking document files, pdf, docx, xlsx, etc.?

:::note
This should be automatically fixed for MOST CUSTOMERS with CSE BUILD 3068 and later, these
steps are only required if you are still experiencing this issue.
:::


SecureCopy can run into conflicts with some third-party software shell extensions. When this
happens, instead of opening a right-click context menu EXPLORER.EXE crashes or restarts instead. The
workaround is to disable SecureCopy in the registry.

Use Group Policy Preference items to delete the following registry keys. These keys are also wrapped
into a collection and attached within this KB below.

![676_1_image-20210823230906-1_950x247](/images/endpointpolicymanager/troubleshooting/leastprivilege/676_1_image-20210823230906-1_950x247.webp)

Once the SecureCopy extension registration is removed from the registry, the EXPLORER.EXE crash
issue will no longer occur.

:::note
After disabling SecureCopy in the registry, SecureCopy policies will no longer affect the
endpoint.
:::


```
<?xml version="1.0" encoding="utf-8"?>
<Collection clsid="{53B533F5-224C-47e3-B01B-CA3B3F3FF4BF}" 
name="UnReg-SecureCopy">
    <Registry clsid="{9CD4B2F4-923D-47f5-A062-E897DD1DAD50}" 
    name="{C8DD2F11-B78C-4430-B1A3-C699497449E5}" 
    status="{C8DD2F11-B78C-4430-B1A3-C699497449E5}" 
    image="3" changed="2021-08-23 14:27:32" 
    uid="{A72ED3A9-4C09-46A1-91B0-434CA2C4645A}">
        <Properties action="D" displayDecimal="1" 
        default="0" hive="HKEY_LOCAL_MACHINE" 
        key="SOFTWARE\Classes\CLSID\{C8DD2F11-B78C-4430-B1A3-C699497449E5}"
        name="" type="REG_SZ" value=""/>
    </Registry>
    <Registry clsid="{9CD4B2F4-923D-47f5-A062-E897DD1DAD50}" 
    name="trustedcopy" status="trustedcopy" image="3" 
    changed="2021-08-23 14:26:01" 
    uid="{B4AC8C7F-458F-41B5-9D98-3E07572A59BA}">
        <Properties action="D" 
        displayDecimal="1" default="0" 
        hive="HKEY_CLASSES_ROOT" key="*\shell\trustedcopy" 
        name="" type="REG_SZ" value=""/>
    </Registry>
    <Registry clsid="{9CD4B2F4-923D-47f5-A062-E897DD1DAD50}" 
    name="trustedcopy" status="trustedcopy" image="3" 
    changed="2021-08-23 14:26:38" 
    uid="{F5590D01-4DDB-46B8-A632-DDC07035E3E6}">
        <Properties action="D" displayDecimal="1" 
        default="0" hive="HKEY_CLASSES_ROOT" 
        key="Folder\shell\trustedcopy" 
        name="" type="REG_SZ" value=""/>
    </Registry>
</Collection>
```

Windows Registry Editor Version 5.00

```
[-HKEY_CLASSES_ROOT\*\shell\trustedcopy]
```

```
[-HKEY_CLASSES_ROOT\folder\shell\trustedcopy]
```

```
[-HKEY_LOCAL_MACHINE\SOFTWARE\Classes\CLSID\{C8DD2F11-B78C-4430-B1A3-C699497449E5}]
```


