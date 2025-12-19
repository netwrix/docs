---
title: "Error message The element 'emailSettings' in namespace \"…AdminApproval\" has incomplete content encountered when editing Admin Approval policy"
description: "Error message The element 'emailSettings' in namespace \"…AdminApproval\" has incomplete content encountered when editing Admin Approval policy"
sidebar_position: 140
---

# Error message The element 'emailSettings' in namespace "…AdminApproval" has incomplete content encountered when editing Admin Approval policy

## PROBLEM:

When editing the Admin Approval policy you receive the error message below.

The element ‘emailSettings'in namespace ‘https://www.policypak.com/2017/LPM/AdminApproval' has
incomplete content. List of possible elements expected: ‘sendTo' in namespace
‘https://www.policypak.com/2017/LPM/AdminApproval'.

![994_1_image-20230926224931-1](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/994_1_image-20230926224931-1.webp)

## CAUSE:

The Admin Approval policy XML has become corrupt, and now contains an incomplete ‘emailSettings'
section. See below for an example.

![994_2_image-20230926224931-2](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/994_2_image-20230926224931-2.webp)

A correct email settings section would look like this:

```
<emailSettings useMail="enabled">    <sendTo>this@is.an.example.net</sendTo></emailSettings>
```

## RESOLUTIONS:

There are 3 possible ways to resolve this issue:

### Possible Fix # 1.

Export the AA policy to XML, then edit the XML.

Delete section:

```
<emailSettings />
```

And save XML file, then reimport the AA policy.

### Possible Fix #2.

Export the AA policy to XML, then edit the XML.

Update Section from

```
<emailSettings />
```

to

```
<emailSettings>
    <sendTo />
</emailSettings>
```

and save XML file, then reimport the AA policy.

### Possible Fix #3.

Edit the Admin Approval policy in the Netwrix Endpoint Policy Manager (formerly PolicyPak) Admin
Console (MMC) and set the Email option "Use of email:" under the Email tab to "Not Configured" then
save the policy.  Afterward, you can edit the AA policy again to add in the correct email settings
if needed.

![994_3_image-20230926224931-3](/images/endpointpolicymanager/troubleshooting/error/leastprivilege/994_3_image-20230926224931-3.webp)

After one of these actions all will be good.


