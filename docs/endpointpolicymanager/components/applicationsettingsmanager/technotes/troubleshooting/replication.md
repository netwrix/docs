---
title: "Troubleshooting Group Policy Replication Problems"
description: "Troubleshooting Group Policy Replication Problems"
sidebar_position: 30
---

# Troubleshooting Group Policy Replication Problems

First, we suggest that if your DCs are 2008 R2 or 2012, that you first apply this patch and Registry
setting to ALL 2008 R2 and/or 2012 domain controllers. (Not needed for 2012 R2). There is a known
problem on DCs where they hold files open after you edit. So edits appear to work, until you close
and reopen the GPO and find out that they aren't applying at all. Or replication appears to work,
but some machines pick up the settings, and others do not. That's because the same DATA isn't
replicated to all DCs properly. Therefore, before doing anything, ensure this is applied / apply
this KB to apply to all your DCs:

[https://support.microsoft.com/en-us/kb/2791372](https://support.microsoft.com/en-us/kb/2791372)

Then retry the Netwrix Endpoint Policy Manager (formerly PolicyPak) operation.

:::note
Troubleshooting Group Policy Replication problems is beyond the normal Endpoint Policy
Manager tech support, since it's not specifically a Endpoint Policy Manager issue. If you have a
replication problem, here is our suggestion to help you overcome replication problems.
:::


:::warning
These tips are USE AT YOUR OWN RISK, since Directory Services troubleshooting is beyond
the scope of the Endpoint Policy Manager troubleshooting support team.
:::


Symptoms: Everything might be running smoothly until you get inconsistent results upon clients when
your Endpoint Policy Manager directives embedded within GPOs. Some of your workstations are
receiving the GPOs others aren't.

While we don't want to completely rule out Endpoint Policy Manager's engine, it's more likely an
Active Directory replication problem.

If you have more than one domain controller in your domain, specific clients use DC based upon site
membership. If you have multiple DCs within each site, then clients pick a DC by "weight" where
normally, all DCs are "weighted equally."

And, it's also possible that your clients may even utilize a DC located at another site!

Therefore, if your DC's aren't replicating correctly, than the SYSVOL directories hosted on them may
not have precisely mirrored data that they should have. This means that your workstations will get
different results, depending on which DC it is directed to.

Here are some great troubleshooting tips however.

- You should always begin by running gpupdate from the workstation that is experiencing inconsistent
  results. If you get a failure notice such as the one below, than there is a GPO delivery problem
  at large.

![3_1_troubleshooting-grou-policy-replication2](/images/endpointpolicymanager/troubleshooting/applicationsettings/3_1_troubleshooting-grou-policy-replication2.webp)

:::note

:::


It's very possible the first GPO to express an error one that contains Endpoint Policy Manager
directives. But it's equally likely that it's another GPO as well.

- At the most basic level, a DC should have two shared folders by default, NETLOGON and SYSVOL. If
  you do not have these two folders, you have an AD problem and GPOs will not be delivered from it
  properly.

![3_2_troubleshooting-grou-policy-replication1](/images/endpointpolicymanager/troubleshooting/applicationsettings/3_2_troubleshooting-grou-policy-replication1.webp)

- DCDIAG.exe – The DCDiag (Domain Controller Diagnostic) tool will analyse the state of the domain
  controllers and services in an Active Directory forest. DCDiag is a very good general-purpose
  testing tool for checking the health of the AD infrastructure. The available tests include
  replication errors, domain controller connectivity, permissions, proper roles, and connectivity,
  and other general AD health tests. Click HERE for more information about this command.
- You can force replication
  [with this script](https://maddog2050.wordpress.com/2014/09/15/ad-force-sysvol-and-ad-replication/).
  Note that it requires a download from the Windows AD Support Tools first.
- GPOTOOL.exe – This powerful CLI tool checks the consistency of Group Policy Objects (GPOs) between
  the Sysvol- and Active Directory based portions of GPOs checks GPO replication searches GPOs
  targets specific domain controllers (DCs) to allow testing of specific DC Group Policy status
  displays GPO information. Type GPOTOOL>FileName.txt which will save the command output to a log
  file name of your choosing. Take a recent example of how this tool was used in the case of a
  Endpoint Policy Manager client. A review of the logs showed that both Endpoint Policy Manager and
  Non Endpoint Policy Manager GPOs were having issues. This confirmed that the problem was beyond
  the scope of just Endpoint Policy Manager. Further review of the log file showed that there was a
  version mismatch (52 versus 54) of the SYSVOL folders which mean that they weren't replicating
  correctly:"Error: Version mismatch on SERVER1.FABRIKAM.COM, DS=54, sysvol=52"An even greater error
  was then found showing that the SYSVOL piece of the GPO wasn't even there:Sysvol version: not
  found
- DFSDIAG.exe – This tool checks the domain controller and name server configurations of your AD
  structure. Dfsdiag /testDCs is especially relevant.
- Using the troubleshooting tools above, if there is a replication problem, you should be able to
  determine which DC or DC's are the problem. Once this is determined you will have to rebuild the
  system volume (SYSVOL) on these designated servers. If you have more than one DC at a site, an
  easy way to do this is to simply demote the problem DC by running DCPROMO – reboot the server –
  and then run DCPROMO and reboot once more. For those who only have one DC residing at a site, or
  those who are comfortable making registry edits, you can use the Burflags registry entry to
  rebuild the SYSVOL. Know that demoting the only DC residing on a site may (and I mean may) require
  you to rejoin the clients to the domain again.

[Here is a decent walkthru](http://jackstromberg.com/2014/07/sysvol-and-group-policy-out-of-sync-on-server-2012-r2-dcs-using-dfsr/)
to help troubleshoot and repair replication issues.

## How to call Microsoft for help.

If you are still unable to solve your replication and GPO delivery problem, then you may need to
contact Microsoft Professional Support. They charge on a per incident basis and tickets must be
initiated online only as they do not accept phone calls any longer to create a ticket. They can be
reached at [http://support.microsoft.com/](http://support.microsoft.com/)

You may also refer to these other articles as well.

[http://technet.microsoft.com/en-us/library/cc978394.aspx](http://technet.microsoft.com/en-us/library/cc978394.aspx)

[http://technet.microsoft.com/en-us/library/cc816596(v=ws.10).aspx](<http://technet.microsoft.com/en-us/library/cc816596(v=ws.10).aspx>)

[http://support.microsoft.com/kb/2218556](http://support.microsoft.com/kb/2218556)


