---
title: "Upgrade Guidance"
description: "Upgrade Guidance"
sidebar_position: 60
---

# Upgrade Guidance

How to Stay Supported

Only the latest client-side extension (CSE) in the Portal or Netwrix PolicyPak Cloud, the one with the most fixes and features, is fully supported.

:::note
To better understand PolicyPak build and version numbers, see the
[What are the PolicyPak Build and Version numbers?](/docs/policypak/upgrademaintenance/bestpractices/versions.md)
topic for additional information.
:::


Just because you are unable to stay current (or nearly current) with the PolicyPak CSE
rollouts, does not mean that you lose support. You are always supported, regardless of the CSE
version you have on your machine. However, if you find a bug, problem, inconsistency, or other
issue, then PolicyPak support will direct you to update (at least) one machine with
the very latest CSE on it for investigation. We will also ask for log files from that machine after
you have reproduced the issue. In other words, as a general rule, we will typically not begin to
investigate your issue unless you can reproduce it on a machine with the latest CSE. There is no
value in investigating old CSE behavior because the problem could already be fixed in the latest
version, and logging improvements could be present in the latest CSEs. Additionally, if your request
involves us investigating the log files, similarly, we will not ask for nor investigate any log
files unless the problem is reproducible on the latest CSE.

From a practical perspective, you should attempt to have your Windows 10 machines on a CSE that was
shipped at least within the last full year. Six months is better, and three months is even better.
Upgrades should go smoothly from any CSE to any other CSE, but those are not expressly tested. We
only test the previous CSE to current CSE upgrade path. Therefore, when you stay as close to our
currently shipping CSE as possible, you're likely going to get the best experience, latest testing,
and fewest problems overall.A best practice is to stay up to date on the latest version available.

Furthermore, because corporate PCs are typically full of applications, system software, and possibly
other unusual circumstances, we strongly recommend you have at least one clean machine for ongoing
testing. A clean machine would have the following installed:

- Latest version of Windows 10
- Latest version of Microsoft Edge
- Latest version of Chrome or other browsers
- Onlysoftware that PolicyPak might be controlling, such as that required with
  PolicyPak Application Settings Manager, PolicyPak Least Privilege
  Manager, PolicyPak Start Screen & Taskbar Manager, etc.
- Not much else, and specifically, no third-party system software or A/V software other than
  PolicyPak.

This way you can install the latest PolicyPak CSE by hand and do some testing of a new
CSE before you attempt to roll it out to more client machines. Then, if you encounter a bug, you can
quickly validate your bug report and collect logs from a machine that is available whenever you need
it, not just when the user is available.

