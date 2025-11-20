---
title: "Why does Endpoint Policy Manager SecureRun block \"inline commands\" and what can I do to overcome or revert the behavior ?"
description: "Why does Endpoint Policy Manager SecureRun block \"inline commands\" and what can I do to overcome or revert the behavior ?"
sidebar_position: 70
---

# Why does Endpoint Policy Manager SecureRun block "inline commands" and what can I do to overcome or revert the behavior ?

Windows operations like Command Prompt and PowerShell allow scripts to run. That is, they allow to
run various commands and NOT just executables (e.g. .exe files).

Netwrix Endpoint Policy Manager (formerly PolicyPak) SecureRun automatically blocks unknown and
un-trusted scripts. You can read about these automatically blocked script types here:

[What is the supported list of BLOCKED script types for Endpoint Policy Manager SecureRun™ ?](/docs/endpointpolicymanager/components/endpointprivilegemanager/technotes/tipssecurerun/blockedscripttypes.md)

But it's possible to pass the commands on the command line

For example, one can run something like this from the Run dialog (or in many other ways.)

```
cmd /c "mkdir C:\TEST & copy c:\Windows\notepad.exe C:\TEST"
```

![538_1_image-20201215000203-1](/images/endpointpolicymanager/leastprivilege/securerun/securerun_and_inline_commands.webp)

Normally, users don't do this. But it could be valid during an application installation or program
setup.

This technique is essentially what is used in much modern malware, as seen in this diagram.

![538_2_image-20201215000203-2](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_2_image-20201215000203-2.webp)

When commands are run in this way, Endpoint Policy Manager SecureRun cannot know precisely what to
do.

Remember that SecureRun's primary duty is to check "File Owner." And, since this inline command has
no owner, Endpoint Policy Manager SecureRun cannot make a definitive determination of "Should it run
or not?"

In older versions of Endpoint Policy Manager, Endpoint Policy Manager Least Privilege Manager
SecureRun™ did not trap for these inline commands or make any determination.

In current versions, Endpoint Policy Manager, Endpoint Policy Manager Least Privilege Manager
SecureRun™ assumes this behavior of inline commands should be interpreted as unexpected/bad
behavior.

That being said, you might have a reliance on this behavior for an application setup or valid
process. As such you have three options as workarounds.

## Option 1: Analyze the statement and create an explicit Allow and Log Rule (Most Secure)

In this example, assume you determined you had an inline command you needed to explicitly overcome a
SecureRun block:

```
cmd /c "mkdir C:\TEST & copy c:\Windows\notepad.exe C:\TEST"
```

To overcome this, you would need to make an Executable rule (not a Script rule). You would specify a
Combo rule, then specify Path and Command Line Arguments like what's seen here.

![538_3_image-20201215000203-3](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_3_image-20201215000203-3.webp)

The Path Condition part would be CMD.EXE:

![538_4_image-20201215000203-4](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_4_image-20201215000203-4.webp)

Then the most secure would be "Strict equality" and then specify the arguments which make up the
remainder of the command.

Note that other configurations may work, but only "Strict equality" would be the most secure.

![538_5_image-20201215000203-5](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_5_image-20201215000203-5.webp)

Finally, set Allow And Log.

![538_6_image-20201215000203-6](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_6_image-20201215000203-6.webp)

Now you have a rule which is explicitly enabled to overcome a SecureRun block.

## Option 2: Explicitly set Endpoint Policy Manager SecureRun to Disabled (Least Secure; not recommended)

If Endpoint Policy Manager SecureRun has no configuration or is explicitly Disabled, like what's
seen here, then the inline checking will not function.

![538_7_image-20201215000203-7](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_7_image-20201215000203-7.webp)

## Option 3: Universally revert Endpoint Privilege Manager SecureRun™ Inline Command Processing Behavior to bypass inline commands (Less Secure; possibly recommended)

In Endpoint Policy Manager CSE build 2725 we have introduced an ADMX setting entitled "Use legacy
(less secure) Endpoint Policy Manager Least Privilege Manager SecureRun Inline Processing Method."

When this value is set to Enabled, you are telling the Endpoint Policy Manager Least Privilege
Manager that you want the SecureRun behavior to be reverted back to the original behavior.

In this method, the Endpoint Policy Manager Least Privilege Manager SecureRun commandline parser
will ignore inline commands, and all processes like this will continue.

![538_8_hfkb-1008-img-op-03-01_1379x575](/images/endpointpolicymanager/troubleshooting/leastprivilege/securerun/538_8_hfkb-1008-img-op-03-01_1379x575.webp)
