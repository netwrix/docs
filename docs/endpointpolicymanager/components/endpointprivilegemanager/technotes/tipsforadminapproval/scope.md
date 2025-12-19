---
title: "How do I use the Filter section in Endpoint Privilege Manager ?"
description: "How do I use the Filter section in Endpoint Privilege Manager ?"
sidebar_position: 30
---

# How do I use the Filter section in Endpoint Privilege Manager ?

The Scope filter section can be found in various rule types in Netwrix Endpoint Policy Manager
(formerly PolicyPak) Least Privilege Manager. For instance, it exists in every explicit rule, like
this:

![319_1_faq-img-01_950x578](/images/endpointpolicymanager/leastprivilege/policyeditor/319_1_faq-img-01_950x578.webp)

And also in SecureRun™ rules like this:

![319_2_faq-img-02_950x537](/images/endpointpolicymanager/leastprivilege/policyeditor/319_2_faq-img-02_950x537.webp)

:::note
At this time, Policy Scope rules are not yet available for:
:::


- Global Settings Policy (to perform Discovery audits.)
- Admin Approval Policy

These are coming soon.

:::note
The Policy Scope option is only available when used on the Computer side; on the User side
it is greyed out because this setting is only meant to express to the COMPUTER (system) how to work
with User, and User and System Processes. On the User side, the processes are always in the context
of the User.
:::


![319_3_faq-img-03_950x571](/images/endpointpolicymanager/leastprivilege/policyeditor/319_3_faq-img-03_950x571.webp)

In this topic, we are going over various use cases when you might use the Policy Scope option (which
again, will only be un-gray / valid on the Computer side.)

## Scenario 1: Enhanced SecureRun / Prevent untrusted executables and scripts from running even by LOCAL SYSTEM.

When you apply SecureRun on the user or computer side, you're saying "Block all untrusted
executables started by users." But this does not, by default, block the attack vector of the System
performing the attack. You can see the example below where the Standard User is blocked from an
executable attempt, but System is still allowed.

![319_4_faq-img-04_950x647](/images/endpointpolicymanager/leastprivilege/policyeditor/319_4_faq-img-04_950x647.webp)

However, you can switch SecureRun on the computer side to now say "Block all untrusted executables
started by users or LOCAL SYSTEM." You would do this on the Computer side, and specify User and
System Processes, as shown below.

![319_5_faq-img-05_950x547](/images/endpointpolicymanager/leastprivilege/policyeditor/319_5_faq-img-05_950x547.webp)

The result is that both User and System attempts to run un-trusted executables will be prevented.

When could this occur?

- If a normal (user-level) process exploits a security vulnerability to escalate his own privileges
  and run some arbitrary code with higherprivileges (like LOCAL SYSTEM in this case).
- If malware launched software on a machine that runs as Local System and existed at
  `c:\anything\Program.exe` (like PSEXEC, other ransomware, etc.). In this case, it would be owned
  by the user (who is not on the SecureRun list.) However, if the malware executed
  the` c:\anything\Program.exe` as SYSTEM, this attack would be prevented, because the owner of the
  `c:\anything\Program.exe` is the User (as the attacker) but would not on the SecureRun list (even
  though the process is being run AS SYSTEM.)

This would strengthen security if a malware ended up using an elevated process to attempt to perform
its work as LOCAL SYSTEM and tries to run an un-trusted file. Therefore, when the application
(`.EXE`) or script, etc., was attempted to fire off, because the user isn't on the SecureRun trusted
list, the attack attempt will fail.

For a video demo of this scenario,
see [SecureRun to block User AND System executables](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/usersystemexecutables.md)

## Scenario 2: Specific rule to block an app from being run, even as local System.

You might want to explicitly block attack vectors such as PSEXEC (which was used in WannaCry), or
entirely block PowerShell.  If you specify to do this only on the User side (or set Computer side
scope to User processed only), then only user processes will be affected:

![319_6_faq-img-06_950x195](/images/endpointpolicymanager/leastprivilege/policyeditor/319_6_faq-img-06_950x195.webp)

You can shore up this attack vector by making the explicit deny rule on the Computer side:

![319_7_faq-img-07_950x381](/images/endpointpolicymanager/leastprivilege/policyeditor/319_7_faq-img-07_950x381.webp)

When you do,  this happens:

![319_8_faq-img-08_950x183](/images/endpointpolicymanager/leastprivilege/policyeditor/319_8_faq-img-08_950x183.webp)

### Scenario 2B: Block Powershell.exe completely, but allow Local System to run a specific .PS1 script

In the previous example, we blocked Powershell (or PSEXEC, etc.) from all user and system processes.

However, you might need to run some Powershell scripts as SYSTEM to perform some maintenance tasks. 
Since PowerShell is now being blocked for all Computer side processes, you cannot run a specific
script with PowerShel:

![319_9_faq-img-09_950x271](/images/endpointpolicymanager/leastprivilege/policyeditor/319_9_faq-img-09_950x271.webp)

To enable this, simply add another rule to ALLOW AND LOG, for example, `C:\SCRIPTS\ITSCRIPT1.ps1`,
and set the scope to User and System processes, but use the scope Filter to SYSTEM.

![319_10_faq-img-10_950x453](/images/endpointpolicymanager/leastprivilege/policyeditor/319_10_faq-img-10_950x453.webp)

Result:

![319_11_faq-img-11_950x375](/images/endpointpolicymanager/leastprivilege/policyeditor/319_11_faq-img-11_950x375.webp)

For more information on this issue, see
 [Block PowerShell in General, Open up for specific items](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/powershellblock.md)

## Scenario 3: Running or Elevating applications or installers, but blocking other admins from running them.

In this scenario you want to do work with Endpoint Policy Manager Least Privilege Manager (Elevate,
Allow, or Block) but prevent other admins (local admins or domain admins) from overcoming your rule.

To perform this, you'll need to apply these two rules:

1. First one BLOCKS `ABC.EXE` or `ABC.CMD` or `ABC.MSI`. This must be done on the COMPUTER side with
   SCOPE = USER AND SYSTEM. Then, filter the scope by group (more on this in a second.)

2. Second rule ALLOWS or ELEVATES `ABC.EXE` or `ABC.CMD` or `ABC.MSI`. The scope doesn't matter. You
   can do this on the COMPUTER or USER side. (leaving the default filters in place.)

If you want toblock only LOCAL admins (but not domain admins) then Rule #1 needs to look like this.
(Note that this group is not available when editing a GPO from a DC, and only available when
creating the GPO from a Windows 10 computer):

![319_12_faq-img-12_950x482](/images/endpointpolicymanager/leastprivilege/policyeditor/319_12_faq-img-12_950x482.webp)

If you want toblock both local admins and domain administrators, then Rule #1 needs to look like
this.

![319_13_faq-img-13_950x534](/images/endpointpolicymanager/leastprivilege/policyeditor/319_13_faq-img-13_950x534.webp)

:::tip
Remember, rule 2, the rule that does the ELEVATE or ALLOW, is just a standard rule, and can be
done on the user or computer side, like this:
:::


![319_14_faq-img-14_950x458](/images/endpointpolicymanager/leastprivilege/policyeditor/319_14_faq-img-14_950x458.webp)

video
3: [Elevate apps as standard user, BLOCK other Admins](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/appblock.md)

## Scenario 4:  Elevating a Service account

You might have a service which requires specific privileges. Maybe your service, by default, uses
Local System, and you want to give it less rights.

With Endpoint Policy Manager Least Privilege Manager, you can remove the powerful privileges of the
service account and strip out LOCAL SYSTEM and grant a specific user the permissions required.

If you want a process to be run via special user account, follow these steps you would need to do
the following:

**Step 1 –** Make a rule for an `.exe` from which the service runs.

We recommend to make a File Info + Signature rule, but PATH rules would work as well.

e.g. `C:\Program Files\AppABC \AppService.exe`

**Step 2 –** On the Actions page select "Run with custom token" and configure the TOKEN and/or exact
PRIVILEGES the process needs like Load Driver Privilege (SeLoadDriverPrivilege), Bypass Traverse
Checking (SeChangeNotify).

**Step 3 –** On the final page select Scope = User and System Processes

AND

Scope Filter should be trimmed to the specific account you specified to run the service runs as.

:::note
It's also possible to use Scope Filter = SERVICES to make the rule apply to all services
that run from the specified `.exe `regardless of the user.
:::


![319_15_faq-img-15_950x467](/images/endpointpolicymanager/leastprivilege/policyeditor/319_15_faq-img-15_950x467.webp)

video:
[Reduce or specify Service Account Rights](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/serviceaccountrights.md)


