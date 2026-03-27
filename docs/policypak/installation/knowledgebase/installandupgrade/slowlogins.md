---
title: "How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?"
description: "How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?"
sidebar_position: 20
---

# How do I troubleshoot slow logins (or other login problems), user profile issues, explorer.exe or other Windows problems? What if I'm having problems on ONE (or very few PCs)?

The answer to this problem is a little different if you're just starting out with Netwrix PolicyPak, or if you've been a customer for years.

- If you've been a customer for years, you should start to ask yourself: "When did this happen, and
  why now?"
- If you're just starting out with PolicyPak, then these steps will help you out to
  get close to the goal to determine where the problem is.

Additionally ask yourself:

- Am I having a problem on ONE, TWO, MANY or ALL machines?

  - If the problem is simply on ONE or TWO machines, this is not likely something we can dive in,
    tear apart and make a bug-fix for.
  - This is NOT likely a PolicyPak problem (even if removing PolicyPak
    magically "fixes it.")
  - A single machine or two with a "weird problem" is likely NOT a "PolicyPak Bug."
    We'll try, but if the issue is not reproducible with the steps below, there's a low likelihood
    of us being able to address it.

- Am I having a problem with ONE, TWO, MANY or ALL \*USERS\* or User profiles?

  - For instance, sometimes we see that "When I log on as Jane to Jane's machine, there is a
    problem. When I log on to Jane on Frank's machine, the problem is absent."
  - This is NOT likely a PolicyPak problem (even if removing PolicyPak
    magically "fixes it.") In these cases, you should blow-away the affected User's profile and
    see if that corrects the issue.

Bug fixes / hotfixes for PolicyPak are made for predictable, reproducible unwanted
behavior which is different than the intended or documented result. So if you have one or two
machines which are crashing or having other problems, we recommend the items in this section anyway;
because maybe they could help.

But if the other 99% of your machines are configured in largely the same way, and working just fine…
then it's likely some problem with this "just one" machine. And it's somewhat unlikely we will be
able to determine what. We recognize that blowing away or resetting someone's computer can be
painful; but unless you can reproduce the unexpected behavior on MULTIPLE COMPUTERS, it is unlikely
we will be able to reproduce it, and hence, we cannot build you a fix for a single misbehaving
computer.

Moving on to slowdowns and weirdness: Almost all problems of slowdowns and weirdness are not usually
PolicyPak bugs or problems; but instead are System-y software like:

- Antivirus
- Antimalware
- Similar system software that would "beat up" PolicyPak, which then makes it do bad
  things.
- Other kinds of software that would be a problem would be other desktop management software in the
  same "ballpark" of PolicyPak, and/or user experience management software and/or
  other least privilege management software.

Here's a few emails we got back from customers after they had their own "A-ha moment..." around
system software "beating up" on PolicyPak:

- "We did what you said in the Antivirus article, and the problems went away immediately."
- "You can close the case now. The issue was with our Appstack. CSE was previously installed in the
  appstack and that made a mess in the registry. We reinstalled the whole appstack and woop – start
  menu and browser router works again."

In order, here are things we ask you to try before we continue:

**Step 1 –** Did you install the latest Client Side Extension? Even if you're having a problem with
an older Client Side Extension, we won't ever fix that one. We only ever fix the LATEST one. So be
sure BEFORE YOU CONTINUE that you've tested the problem out with the LATEST Client Side Extension.

**Step 2 –** Perform an exclusion to your AntiVirus/Antimalware using
[How must I configure my Anti-virus or system-level software to work with PolicyPak CSE?](/docs/policypak/upgrademaintenance/antivirussystemsoftware/antivirus.md)

**Step 3 –** Uninstall (not just disable) your AntiVirus/Antimalware. Does that clear it up?

**Step 4 –** Typically, something has changed to cause the problem. A change could be:

1. Something in Windows. (Windows 7 to 10 upgrade, Windows 10 to 10 upgrade, new fix in Windows,
   etc.)
2. Something you've installed that ISNT PolicyPak.
3. Something that's in a GPO and causing a PolicyPak problem.
4. A later Client Side Extension build of PolicyPak, which is showing a new problem,
   where a previous Client Side Extension build did not exhibit the problem.

We can take a "first look" at your log files… but there are no guarantees here. Maybe something will
jump out and just tell us what it is. Do NOT attach this to an EMAIL. You must get an SRX first by
emailing support, then, in the AUTORESPONSE, you'll get directions for how to UPLOAD your log files.
Here is how to get us log files and results reports (perform EVERY step):
L[Why does my mail anti-virus service claim that the PolicyPak download ISO or ZIP has a virus?](/docs/policypak/gettingstarted/misc/knowledgebase/troubleshooting/antivirus.md)

The items above are generally the causes of change and problems. Therefore, to get us close to the
goal, your team will have to narrow it down.

One thing to TRY (but this is not a solution, this just narrows it down for us) … is the PolicyPak DRIVER. Sometimes the DRIVER can get in the way of things. Knowing the DRIVER is a
problem can be helpful. Only test this out if installing the LATEST Client Side Extension doesn't
clear up the
problem.[What can I do if I installed a new CSE version and it's causing problems (slowdowns or other issues?)](/docs/policypak/installation/knowledgebase/installandupgrade/newversionissues.md).

## Troubleshooting Scenario 1 (best): Bring up a new machine and triangulate where the problem is

**Step 1 –** Bring up a new (latest Current Branch) Windows 10 machine.. fully patched and NO
APPLICATIONS AT ALL.. Warning /

:::note
Do not "image" a machine. Bring it up, totally fresh on new hardware / new VM.
:::


**Step 2 –** Add PolicyPak … and test.

→ Stop:

- Do you see the problem now?
- If YES, then the problem is likely something in Group Policy; some security setting which is
  preventing PolicyPak from performing it's function. Provide us with PPLOGS and
  GPRESULT reports from
  [How to import GPOs to PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/upkeepanddailyuse/import.md). Do not miss any
  steps
- If NO.. then you need to BUILD UP the machine until you find the cause.
- Remember: If this was a problem / bug affecting all customers, we would know it immediately. So
  the problem has to be something in your configuration.
- Now, hand-install or automatically deploy each application and system software, one by one.. and
  keep testing until PolicyPak has the problem. Then.. When you think you've found the
  problem.. UN-LOAD the offending software.
- When PolicyPak functions perfectly, we then know the program that is having a
  problem with PolicyPak, and we can then reproduce it here in house and make a
  workaround or a fix.

## Troubleshooting Scenario 2 (less good): Bring up a "deployed" machine and work backward to find where the problem is

In this scenario you've got your deployed machine, and you'll strip away things until the problem is
resolved.

**Step 1 –** Have a machine with the problem.. with EVERYTHING ON IT.

**Step 2 –** Add LATEST PolicyPak Client Side Extension (do not install any older
extensions).

**Step 3 –** KEEP STRIPPING IT DOWN until the problem goes away.

**Step 4 –** Re-install the last thing to make the problem OCCUR again.

→ Stop: When did the problem STOP and START? Could we do this in our test lab and get the same
result?

**Step 5 –** Here is how to get us log files and results reports (perform EVERY step):
[What must I send to PolicyPak support in order to get the FASTEST support?](/docs/policypak/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)

## Troubleshooting Scenario 3 (also less good): Bring up a "deployed" machine and install old PolicyPak CSEs to reveal the problem

If Scenarios #1 and #2 fail to work, it's possible the problem is in the latest PolicyPak Client Side Extension, but not in some EARLIER PolicyPak Client Side
Extension. You should be able to reproduce the problem 100% of the time with the NEWEST, and 0% of
the time with the OLDER Client Side Extension.

**Step 1 –** Have a machine with the problem.. with EVERYTHING ON IT.

**Step 2 –** Add PolicyPak Client Side Extension …latest Client Side Extension first!
→ Stop: See the problem happen. Then….

**Step 3 –** Uninstall PolicyPak and keep installing EARLIER PolicyPak
Client Side Extension versions until the problem doesn't happen anymore.. and when it doesn't happen
anymore we can look to see what changed on OUR side and then build a new Client Side Extension
version for you to test.

**Step 4 –** Here is how to get us log files and results reports (perform EVERY
step):[What must I send to PolicyPak support in order to get the FASTEST support?](/docs/policypak/gettingstarted/misc/knowledgebase/troubleshooting/fastsupport.md)

