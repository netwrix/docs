---
title: "Select Audited Computers"
description: "Select Audited Computers"
sidebar_position: 10
---

# Select Audited Computers

When a computer runs PPGPCR.Auditor.exe from a server's share, it sends Group Policy results data to
it. However, you might not want to accept data from every computer, even if it is set to run
PPGPCR.Auditor.exe. Therefore, by default all computers' Group Policy results are rejected unless
they are explicitly in a group of your choosing. The quickest way to set up a group is to click
"Choose..." and enter "Domain Computers," in the "Audited computers" section (see Figure 46), which
will accept data from any computer that is licensed and runs PPGPCR.Auditor.exe.

![gpcr_server_with_push_mode_10](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_10.webp)

Figure 46. Selecting which computers to audit.

An example of a more limiting group is shown in Figure 47 with a self-made Active Directory group.
In this case, you can add the computers you want to the group, then name the group, as shown in
Figure 47.

![gpcr_server_with_push_mode_11](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/setup/gpcr_server_with_push_mode_11.webp)

Figure 47. Choosing a self-made Active Directory group containing the computers to audit.

