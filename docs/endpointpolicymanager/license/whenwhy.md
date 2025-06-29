# When and why would I license Endpoint Policy Manager on servers?

First, if the server is a normal, everyday server then, like a desktop, laptop, or virtual desktop,
it counts as one license. However, if the server is Citrix, RDS, or any Multi-Session Windows
serving multiple people on the same machine, then that usage counts as multiple licenses. See this
two FAQs for details:

- General Citrix & Multi-Session Windows Licensing:
  [Citrix & WVD Multi-session Windows Licensing Scenarios](https://www.endpointpolicymanager.com/purchasing/citrix-licensing-scenarios.html)
- For Citrix + Cloud:
  [How do I license my Citrix, RDS, WVD, VDI or other multi-session Windows version with Endpoint Policy Manager Cloud ?](/docs/endpointpolicymanager/license/virtualization/multisession.md)

That being said, you might want to license your normal, everyday servers for a variety of reasons.
Here are some examples:

1. You can use Netwrix Endpoint Policy Manager (formerly PolicyPak) Admin Templates Manager to
   reduce the amount of GPOs and then target them to specific servers. There are many, many use
   cases for this, but just one is Windows Update, where you can take a bunch of GPOs and get them
   down to one. See this blog for details:
   [https://www.endpointpolicymanager.com/pp-blog/windows-update-business](https://www.endpointpolicymanager.com/pp-blog/windows-update-business).
   Then, here's the video on how to perform reduction of existing GPOs:
   [Reduce GPOs (and/or export them for use with Endpoint Policy Manager Cloud or with MDM)](/docs/endpointpolicymanager/video/administrativetemplates/reducegpos.md)
2. You can use Endpoint Policy Manager Admin Templates Manager to specify and lockdown settings for
   browsers and other applications when an admin logs on. Quick examples:
   [What is Endpoint Policy Application Manager (Group Policy Edition)](/docs/endpointpolicymanager/video/applicationsettings/grouppolicy.md)
   and
   [Manage Internet Explorer Settings With Endpoint Policy Manager Application Settings Manager](/docs/endpointpolicymanager/video/applicationsettings/internetexplorer/settings.md)
3. You can use Endpoint Policy Manager Least Privilege Manager to block items that admins shouldn't
   run. Example of blocking
   applications: [Endpoint Policy Manager Application Control with PP Least Privilege Manager](/docs/endpointpolicymanager/video/leastprivilege/applicationcontrol.md)
4. You can use Endpoint Policy Manager Least Privilege Manager to reduce service account rights:
   [Reduce or specify Service Account Rights](/docs/endpointpolicymanager/video/leastprivilege/bestpractices/serviceaccountrights.md)
5. You can use Endpoint Policy Manager Least Privilege Manager to block PowerShell except for where
   absolutely needed:
   [Block PowerShell in General, Open up for specific items](/docs/endpointpolicymanager/video/leastprivilege/bestpractices/powershellblock.md)
6. You can use Endpoint Policy Manager Least Privilege Manager to reduce the admin rights on
   specific processes or applications, like IE and
   others:[Can I use Endpoint Privilege Manager to LOWER / remove admin rights from Administrators from an application or process, like Internet Explorer?](/docs/endpointpolicymanager/leastprivilege/reduceadminrights.md)
7. You can use Endpoint Policy Manager Scripts Manager to perform specific logon scripts for
   specific servers using Triggers:
   [Endpoint Policy Manager Scripts and Triggers: Get to understand login script trigger with GP and MDM systems !](/docs/endpointpolicymanager/video/scriptstriggers/scripttriggers.md)
8. You can use Endpoint Policy Manager Scripts Manager to perform specific scripts like mapping a
   drive, or running another process when a parent process is launched:
   [Endpoint Policy Manager Scripts + Triggers: Map a printer or drive when a process runs and un-map it when closed.](/docs/endpointpolicymanager/video/scriptstriggers/mapdrivetriggers.md)
9. You can use Endpoint Policy Manager Admin Templates Manager and remove Loopback and specify
   specific user side settings for specific machines when any user (admin or otherwise) logs on to
   the machine:
   [Endpoint Policy Manager Admin Templates Manager: Switched Policies (without Loopback)](/docs/endpointpolicymanager/video/administrativetemplates/switchedpolicies.md)

There are other uses, but those are the ones that most customers use.
