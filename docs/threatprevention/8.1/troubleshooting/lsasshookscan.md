---
title: "LSASS Hook Scan Tool"
description: "Use LsassHookScan.exe to inspect the API hooks present in the LSASS process"
sidebar_position: 100
---

# LSASS Hook Scan Tool

The Agent collects real-time activity data by hooking specific Microsoft APIs inside the Local
Security Authority Subsystem Service (LSASS) process. Other security products hook the same APIs.
When two products hook the same API, the result can be missing events, failed hooks, or an unstable
LSASS process.

`LsassHookScan.exe` reports every hook present in LSASS on a domain controller and identifies which
ones belong to Threat Prevention. Use it to confirm that the Agent hooks are in place, and to
identify a third-party product that conflicts with them.

The tool is read-only. It reads the memory of the LSASS process and never writes to it.

:::note
The tool reports what it finds without interpreting it against a specific Threat Prevention
configuration. Send the report to [Netwrix Support](https://www.netwrix.com/support.html) when the
results point to a conflict.
:::

## Requirements

- `LsassHookScan.exe`, available from [Netwrix Support](https://www.netwrix.com/support.html)
- `plsahlp.sys`, installed with the Agent. The default path is
  `…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\plsahlp.sys`.
- An account with administrative rights on the target server

Put `plsahlp.sys` in the same folder as `LsassHookScan.exe`. On a server where Protected Process
Light (PPL) is enabled for LSASS, the tool needs the driver to read the process; without it, the
scan fails.

## Run a Scan

To scan a domain controller:

**Step 1 –** Copy `LsassHookScan.exe` to the target domain controller, into a folder that also holds
a copy of `plsahlp.sys`.

**Step 2 –** Open a command prompt as an administrator and change to that folder.

**Step 3 –** Run the tool and redirect the output to a file:

```
LsassHookScan.exe > lsasshookscan_<hostname>_<date>.txt
```

**Step 4 –** Review the text file, and attach the complete file to the support case. A screenshot of
part of the output isn't enough for analysis.

### Options

| Option | Description |
| --- | --- |
| (none) | Reports everything found, including the hooks that belong to Threat Prevention |
| --whitelist-ntp | Omits the hooks and memory regions attributed to Threat Prevention from both the report and the verdict. Use this to see only what doesn't belong to Threat Prevention. |
| --help | Prints usage information and exits |

Options are accepted as `--option`, `-option`, `/option`, or with no prefix at all.

## Read the Report

The report contains five sections and a verdict.

| Section | Contents |
| --- | --- |
| Non-Microsoft modules in LSASS | Every third-party DLL loaded into the LSASS process, with its file version |
| Code-section diff results | A byte-level comparison of each function on disk against the same function in memory, which is how the tool detects a hook |
| Anonymous executable pages | Executable memory regions that belong to no module on disk. Threat Prevention regions are reported as a count; unidentified regions are listed individually. |
| Threat Prevention hook summary | The hooks attributed to Threat Prevention |
| Unknown and third-party hook summary | The hooks that belong to another product. This is the section to read first when investigating a conflict. |

The verdict rates the result as CLEAN, LOW, MEDIUM, or HIGH, based on the number of non-Microsoft
DLLs, the number of patched functions, and the number of anonymous executable pages.

| Result | Meaning | Action |
| --- | --- | --- |
| Every hook attributed to Threat Prevention, and a CLEAN verdict with `--whitelist-ntp` | No conflict on this server | No further action |
| An entry in the unknown and third-party hook summary that names a DLL | Another product hooks the same API | Send the complete report to Netwrix Support, along with the name of the product that owns the DLL |
| An entry reported as unexported with no signature match | The tool recognizes a hook but has no signature for the function | Send the complete report to Netwrix Support. Treat the entry as unidentified rather than harmless. |
| The scan fails to read the LSASS process | `plsahlp.sys` is missing from the folder, and PPL is enabled on the server | Copy `plsahlp.sys` next to `LsassHookScan.exe`. Don't disable PPL. |

:::note
The tool traces a hook to the DLL it hands control to only one step at a time. When another
product chains a hook through several memory regions before reaching its DLL, the tool omits the
destination rather than reporting a wrong one. A missing destination isn't evidence either way.
:::

See the [LSASS Process Terminated](/docs/threatprevention/8.1/troubleshooting/lsass.md) and
[Best Practices and Troubleshooting](/docs/threatprevention/8.1/troubleshooting/overview.md) topics
for additional information.
