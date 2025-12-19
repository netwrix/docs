---
title: "How do I install an Active X control if it is not digitally signed?"
description: "How do I install an Active X control if it is not digitally signed?"
sidebar_position: 40
---

# How do I install an Active X control if it is not digitally signed?

When an ActiveX control is digitally signed, and you use Netwrix Endpoint Policy Manager (formerly
PolicyPak) Least Privilege Manager to deliver a rule to enable the ActiveX install, Internet
Explorer (or IE mode in Edge) will permit the install. Here's an example of a rule where the item
has a rule for the URL and for the Signature.

![859_1_image001_950x422](/images/endpointpolicymanager/leastprivilege/policyeditor/859_1_image001_950x422.webp)

:::tip
Remember, When your ActiveX items are signed, you should have no problem.
:::


However, if you attempt an ActiveX rule where there the ActiveX item is not signed (see below)…

![859_2_image003_950x429](/images/endpointpolicymanager/leastprivilege/policyeditor/859_2_image003_950x429.webp)

You will get an experience like this…

![859_3_image004_950x557](/images/endpointpolicymanager/leastprivilege/policyeditor/859_3_image004_950x557.webp)

To overcome this, you need to decrease the security for Internet Explorer. You do this with Group
Policy or Endpoint Policy Manager Cloud.

Go to **User** (or Computer) **Admin templates** > **Windows Components** > **Internet Explorer** >
**Internet Control Panel**

![859_4_image005_950x656](/images/endpointpolicymanager/leastprivilege/policyeditor/859_4_image005_950x656.webp)

Then locate pick the Trusted Sites Zone.

:::warning
Note that you are explicitly telling Internet Explorer to reducethe security here in
order to enable your unsigned ActiveX control to be installed.
:::


![859_5_image007_950x362](/images/endpointpolicymanager/leastprivilege/policyeditor/859_5_image007_950x362.webp)

Lastly, you have to add the site to be trusted. You have a few options on how to perform this:

**Step 1 –** Explain to a user how to do it this one time on their PC.

- Pro: good for one-off.
- Con: Hard to explain to a user. Bad for having to do it for lots of users.

**Step 2 –** Use GPPreferences to add it as a trusted site.

- Pro: Easy to set up.
- Con: Wipes out other trusted sites.

**Step 3 –** Use Endpoint Policy Manager Application Settings Manager to add it as a trusted site.

- Pro: Will perform a merge of the existing sites if you want.
- Con: Need to be licensed for the Apps, Browser and Java Pak along with Endpoint Policy Manager
  Least Privilege ManagerPak.

The goal is to get IE to recognize the URL to get into the Trusted Zone like this. (This is the
RESULT of performing Option 1, Option 2 or Option 3 above.)

![859_6_image008_450x602](/images/endpointpolicymanager/leastprivilege/policyeditor/859_6_image008_450x602.webp)

![859_7_image009_950x363](/images/endpointpolicymanager/leastprivilege/policyeditor/859_7_image009_950x363.webp)

![859_8_image010_950x541](/images/endpointpolicymanager/leastprivilege/policyeditor/859_8_image010_950x541.webp)


