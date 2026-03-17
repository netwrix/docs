---
title: "When and why would I license PolicyPak on servers?"
description: "When and why would I license PolicyPak on servers?"
sidebar_position: 10
---

# When and why would I license PolicyPak on servers?

First, if the server is a normal, everyday server then, like a desktop, laptop, or virtual desktop,
it counts as one license. However, if the server is Citrix, RDS, or any Multi-Session Windows
serving multiple people on the same machine, then that usage counts as multiple licenses. See this
two FAQs for details:

- General Citrix & Multi-Session Windows Licensing:
  [Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.policypak.com/purchasing/citrix-licensing-scenarios.html)
- For Citrix + Cloud:
  [How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with PolicyPak Cloud ?](/docs/policypak/licensing/knowledgebase/vertualizationcitrix/multisession.md)

That being said, you might want to license your normal, everyday servers for a variety of reasons.
Here are some examples:

1. You can use Netwrix PolicyPak Admin Templates Manager to
   reduce the amount of GPOs and then target them to specific servers. There are many, many use
   cases for this, but just one is Windows Update, where you can take a bunch of GPOs and get them
   down to one. See this blog for details:
   [https://www.policypak.com/pp-blog/windows-update-business](https://www.policypak.com/pp-blog/windows-update-business).
   Then, here's the video on how to perform reduction of existing GPOs:
   [Reduce GPOs (and/or export them for use with PolicyPak Cloud or with MDM)](/docs/policypak/components/admintemplatesmanager/videolearningcenter/admintemplatesmethods/reducegpos.md)
2. You can use PolicyPak Admin Templates Manager to specify and lockdown settings for
   browsers and other applications when an admin logs on. Quick examples:
   [What is PolicyPak Application Manager (Group Policy Edition)](/docs/policypak/components/applicationsettingsmanager/videos/whatdoesitdo/grouppolicy.md)
   and
   [Manage Internet Explorer Settings With PolicyPak Application Settings Manager](/docs/policypak/components/applicationsettingsmanager/videos/internetexplorer/settings.md)
3. You can use PolicyPak Least Privilege Manager to block items that admins shouldn't
   run. Example of blocking
   applications: [PolicyPak Application Control with PP Least Privilege Manager](/docs/policypak/components/leastprivilegemanager/videolearningcenter/basicsandgettingstarted/applicationcontrol.md)
4. You can use PolicyPak Least Privilege Manager to reduce service account rights:
   [Reduce or specify Service Account Rights](/docs/policypak/components/leastprivilegemanager/videolearningcenter/bestpractices/serviceaccountrights.md)
5. You can use PolicyPak Least Privilege Manager to block PowerShell except for where
   absolutely needed:
   [Block PowerShell in General, Open up for specific items](/docs/policypak/components/leastprivilegemanager/videolearningcenter/bestpractices/powershellblock.md)
6. You can use PolicyPak Least Privilege Manager to reduce the admin rights on
   specific processes or applications, like IE and
   others:[Can I use Least Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?](/docs/policypak/components/leastprivilegemanager/technotes/tipsforadminapproval/reduceadminrights.md)
7. You can use PolicyPak Scripts Manager to perform specific logon scripts for
   specific servers using Triggers:
   [PolicyPak Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !](/docs/policypak/components/scriptstriggers/videolearningcenter/triggersexamples/scripttriggers.md)
8. You can use PolicyPak Scripts Manager to perform specific scripts like mapping a
   drive, or running another process when a parent process is launched:
   [PolicyPak Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed.](/docs/policypak/components/scriptstriggers/videolearningcenter/triggersexamples/mapdrivetriggers.md)
9. You can use PolicyPak Admin Templates Manager and remove Loopback and specify
   specific user side settings for specific machines when any user (admin or otherwise) logs on to
   the machine:
   [PolicyPak Admin Templates Manager: Switched Policies (without Loopback)](/docs/policypak/components/admintemplatesmanager/videolearningcenter/admintemplatesmanager/switchedpolicies.md)

There are other uses, but those are the ones that most customers use.
