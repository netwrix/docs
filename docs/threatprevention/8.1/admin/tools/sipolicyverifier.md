---
title: "Policy Verifier Tool"
description: "Use SIPolicyVerifier.exe to find file system paths and Active Directory objects that policies reference but no longer exist"
sidebar_position: 30
---

# Policy Verifier Tool

A policy references file system paths and Active Directory objects — shares, folders,
organizational units, groups, and accounts. When one of those objects is deleted, moved, or
restructured, the policy that references it doesn't report an error. It simply stops matching
anything, and the gap goes unnoticed until an audit or an incident exposes it.

`SIPolicyVerifier.exe` reads an exported policy file and checks whether every path and Active
Directory object it references still exists. The tool works offline, from the export file, and
doesn't connect to the Enterprise Manager.

Use it in the following situations:

- A policy doesn't trigger, and the policy configuration itself looks correct
- After a file server is decommissioned, an organizational unit is restructured, or groups are
  deleted
- As a periodic check of policy health, and before an upgrade

## Requirements

- A domain-joined Windows machine, preferably a domain controller in the target domain. The tool
  resolves Active Directory objects against the local domain first, so results are most complete
  when it runs on a domain controller.
- .NET Framework 4.7.2
- Read access over UNC to the servers where the Agent is deployed, for the file path checks
- LDAP access to each domain that holds the monitored Active Directory objects

## Export the Input Files

The tool takes one required file and one optional file, exported from two different places in the
Administration Console.

**Policies export (required)** – Click **Tools** > **Export** on the menu to export the policies,
collections, and filter objects to an XML file. See the
[Export Policies and Templates Window](/docs/threatprevention/8.1/admin/tools/exportpoliciestemplates.md)
topic for additional information.

**Agents export (optional)** – Click **Agents** in the left pane to launch the Agents interface, and
then click **Export Agents List** on the top bar. This export tells the tool which server each
policy path belongs to, so each path is checked against the right server. Without it, every path is
checked on the machine running the tool.

:::tip
In an environment with a single domain controller, copy the policies export to that domain
controller and run the tool there. Both the Active Directory objects and the file paths resolve
locally, and the agents export isn't needed.
:::

## Run the Tool

Run the tool from a command prompt:

```
SIPolicyVerifier.exe <policies-xml> [options]
```

| Option | Default | Description |
| --- | --- | --- |
| --agents \<path\> | (none) | Path to the agents export. Without it, all file paths are checked on the local machine. |
| --output \<path\> | report.html | Path for the report |
| --include-disabled | off | Also check disabled policies, which are skipped by default |
| --max-parallel \<number\> | 4 | Number of checks to run at the same time, from 1 to 64 |
| --verbose | off | Print each check to the screen as it completes |

The following example checks every policy, including the disabled ones, against the servers listed
in the agents export:

```
SIPolicyVerifier.exe policies.xml --agents agents.xml --output C:\Reports\policy-check.html --include-disabled --verbose
```

The following example checks the enabled policies with all paths resolved locally:

```
SIPolicyVerifier.exe policies.xml --output C:\Reports\quick-check.html
```

:::note
The default of four simultaneous checks keeps the load on the domain controllers low.
Raise `--max-parallel` only when the scan takes too long and the domain controllers have capacity to
spare.
:::

## How the Checks Work

**File paths** – A local path is converted to a UNC path using the IP address, host name, and fully
qualified domain name of the server that owns it, in that order, and the first one that answers is
used. A path already written in UNC form is checked as it is. Each attempt times out after 15
seconds. When every attempt against a server times out, the server is reported as unreachable and
its paths are reported as skipped, which is not the same as invalid.

**Active Directory objects** – A distinguished name is looked up over LDAP against the domain named
in the distinguished name itself. A value in `<domain>\<user>` form is looked up by account name in
that domain. Each search times out after 15 seconds. Results are cached across the whole run, so an
object referenced by ten policies is looked up once.

## Read the Report

The tool writes two files:

- The HTML report named by `--output`. It opens with a summary of the objects scanned, checked,
  invalid, and skipped, followed by one collapsible section per policy. Policies with problems are
  expanded.
- A log file with the same name and a `.log` extension, holding one timestamped line per check.

Attach both files to a support case, not the HTML report alone.

| Exit code | Meaning |
| --- | --- |
| 0 | Every object checked exists |
| 1 | At least one object is missing or unreachable |
| 2 | The input file or the environment is at fault, so no conclusion can be drawn about the policies |

See the [Import Window](/docs/threatprevention/8.1/admin/tools/import.md) topic for additional
information.
