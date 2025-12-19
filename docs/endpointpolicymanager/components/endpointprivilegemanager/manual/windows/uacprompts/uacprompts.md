---
title: "Overcoming Common UAC Prompts with Helper Tools"
description: "Overcoming Common UAC Prompts with Helper Tools"
sidebar_position: 60
---

# Overcoming Common UAC Prompts with Helper Tools

:::note
See the
[Overcome Network Card, Printer, and Remove Programs UAC prompts](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/helperstoolsandtips/uacprompts.md)
video for an overview of using Endpoint Policy Manager Least Privilege Manager Helper Tools in
action.
:::


Three common areas where users need to overcome admin prompts are:

- Network adapters
- Printers
- Software removal

Let’s examine how Endpoint Policy Manager Least Privilege Manager’s helper tools can help overcome
these three challenges.

If Standard Users try to manage their own Network settings, they can take a few steps, but they’re
quickly going to encounter a UAC prompt, as seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/overcoming_common_uac_prompts.webp)

:::note
We used COM / CSLID rules earlier to overcome this concern, but this section and solution
gives you another option.
:::


Similarly, if a Standard User attempts to add a printer, they will receive another UAC prompt, shown
here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/overcoming_common_uac_prompts.webp)

Finally, if Standard Users try to manage their own Apps and Features by uninstalling an application
that they no longer need, they will also be prevented by a UAC prompt, seen here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/tool/helper/overcoming_common_uac_prompts_1.webp)

After setting up Endpoint Policy Manager’s Helper Tools, you can overcome all three of these issues.



