---
title: "What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)"
description: "What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)"
sidebar_position: 30
---

# What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)

Here's what you should try on ONE affected machine…

### Try 1:

**Step 1 –** Install the `LATEST CSE.`

**Step 2 –** Reboot and log on three times to "clear things out." Did this magically make the
problem go away? Yes? → AS ADMIN…Run `PPLOGS` and send us PPLOGS (renamed please to
`PPLOGS-RESOLVED-REBOOT.ZIP`)

### Try 2:

**Step 3 –** Add new key to HKLMSoftwarePoliciesPolicypakConfigDriver and set `REG_DWORD `Enabled =
0 (see screenshot at end of this article.)

**Step 4 –** Run` GPupdate /force` and then reboot.

**Step 5 –** Did this make the problem go away? Yes? → As ADMIN.. Run `PPLOGS` and send us PPLOGS
(renamed please to `PPLOGS-RESOLVED-DRIVER-ZERO.ZIP`)

### Try 3:

**Step 6 –** Delete the registry key you created in TRY 2.

**Step 7 –** Uninstall most recent Endpoint Policy Manager CSE (from Portal).

**Step 8 –** Install previous Endpoint Policy Manager CSE (If you need it, ask your tech support
professional.)

**Step 9 –** Reboot.

**Step 10 –** Did this make the problem go away? If Yes.. that means the problem is between last
build and this build. Yes? → As ADMIN.. Run `PPLOGS` and send us PPLOGS (renamed please to
`PPLOGS-RESOLVED-PREVIOUS-VERSION.ZIP`)

### Try 4:

**Step 11 –** Uninstall the previous Endpoint Policy Manager CSE from previous step.

**Step 12 –** Ask your SUPPORT rep if you should turn on DEBUG LOGGING Install the DEBUG BUILD … CSE
(get from your support rep).

**Step 13 –** Make the problem occur, then→ AS ADMIN, run `pplogs` and send us file renamed as
`PPLOGS-DEBUG-BUILD-AS-ADMIN.ZIP`.

### WARNING:

- You should be performing these steps ONLY as a test directed by Endpoint Policy Manager technical
  staff.
- Do NOT run with the Driver disabled in Production.
- This will stop much of Endpoint Policy Manager's inner workings such as:
  - Endpoint Policy Manager
    [https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html](https://www.policypak.com/products/endpointpolicymanager-least-privilege-manager.html) (completely).
  - Endpoint Policy Manager Application Manager (Reapply on launch.)
  - Endpoint Policy Manager Browser Router (FF extension installation in some cases).
  - Endpoint Policy Manager Applock.
  - Endpoint Policy Manager File Associations Manager. … And possibly other items.

![175_1_image002](/images/endpointpolicymanager/troubleshooting/install/175_1_image002.webp)

