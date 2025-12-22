---
title: "Scenario 1: Enhanced SecureRun / Prevent Untrusted Executables and Scripts from Running Even by LOCAL SYSTEM"
description: "Scenario 1: Enhanced SecureRun / Prevent Untrusted Executables and Scripts from Running Even by LOCAL SYSTEM"
sidebar_position: 10
---

# Scenario 1: Enhanced SecureRun / Prevent Untrusted Executables and Scripts from Running Even by LOCAL SYSTEM

:::note
For an overview of this scenario, see the
[SecureRun to block User AND System executables](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/usersystemexecutables.md)
video demo.
:::


When you apply SecureRun on the user or computer side, you’re saying “Block all untrusted
executables started by users.” This doesn’t (by default) block the attack vector of the System
performing the attack. You can see the example below where the Standard User is blocked from an
executable attempt, but System is still allowed.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_1_enhanced_securerun.webp)

However, you can switch SecureRun on the computer side to now say “Block all untrusted executables
started by users or LOCAL SYSTEM.” You would do this on the Computer side, and specify User and
System Processes.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/scopefilters/scenario_1_enhanced_securerun_1.webp)

The result is that both User and System attempts to run un-trusted executables will be prevented.

When could this occur?

- If a normal (user-level) process exploits a security vulnerability to escalate his own privileges
  and run some arbitrary code with higher privileges (like LOCAL SYSTEM in this case).
- If malware launched software on a machine that runs as Local System and existed at
  c:\anything\Program.exe (like PSEXEC, other ransomware, etc.). In this case it would be owned by
  the user (who is not on the SecureRun list). However, if the malware executed the
  c:\anything\Program.exe as SYSTEM, this attack would be prevented, because the owner of the
  c:\anything\Program.exe is the User (as the attacker) but would NOT on the SecureRun list (even
  though the process is being run AS SYSTEM.)

This would strengthen security if malware ended up using an elevated process to attempt to perform
its work as LOCAL SYSTEM and tries to run an un-trusted file. Therefore, when the application (.EXE)
or script, etc. was attempted to fire off, the attack will fail because the user isn’t on the
SecureRun trusted list.



