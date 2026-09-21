---
title: "VMware Monitoring Scope"
description: "VMware Monitoring Scope"
sidebar_position: 10
---

# VMware Monitoring Scope

You can fine-tune Netwrix Auditor by specifying the data types to include in or exclude from the
VMware reports.

## Exclude Data from the VMware Monitoring Scope

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\VMware Auditing_ folder.

**Step 2 –** Edit the \*.txt files based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Netwrix Auditor treats lines that start with the # sign as comments and ignores them.

| File               | Description                                                                                                                               | Syntax                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitproplist.txt   | Contains a list of object types and properties to be excluded from change reports.                                                        | `object_type.property_name` If there is no separator (.) between an object type and a property, Netwrix Auditor treats the whole entry as an object type. For example, to exclude the config.flags.monitorType property from reports, add the following line: `*.config.flags.monitorType`.                                                                                                                                                                                                                                             |
| hidepropvalues.txt | Contains a list of object types and properties to be excluded from the reports when the property is set to certain value.                 | `object_type.property_name=property_value:object_type.hidden_property` For example, to exclude the config.cpuAllocation.shares.level property when it equals to _"Low"_, add the following line: `*.config.cpuAllocation.shares.level=low:*.config.cpuAllocation.shares.shares`.                                                                                                                                                                                                                                       |
| proplist.txt       | Contains a list of human-readable names for object types and properties to be displayed in the reports.                                   | `inner_type:object_type.property=intelligiblename` `Inner_type` is optional. For example, if you want the configStatus property to be displayed in the reports as Configuration Status, add the following line: `*.configStatus=Configuration Status.`                                                                                                                                                                                                                                                                     |
| omitstorelist.txt  | Contains a list of objects to be excluded from being saved to data storage and showing up in reports. Netwrix Auditor still collects the audit data. | Monitoring plan name, who, where, object type, what, property name, property value For example, to exclude internal logons: `*,*,*,Logon,*,UserAgent,VMware vim-java*` Precede the following characters with a backslash (\) if they are a part of an entry value: `*` `,` `\` `?` You can also specify characters with a hex value using the `\xnnnn` template. Netwrix Auditor trims the spaces. If they are required, use hex notation. For example: `Word\x0020`, where `\x0020` means a blank character (space at the end). To omit changes with an unspecified _Who_ value (shown in reports as _system_), use `*, ,*,*,*,*,*` (a blank Who field) instead of `*,system,*,*,*,*,*`. This space is an exception to the trimming rule above — Netwrix Auditor preserves it as the blank Who value. |
