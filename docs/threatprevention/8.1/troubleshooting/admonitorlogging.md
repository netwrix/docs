---
title: "AD Monitor Logging Configuration"
description: "AD Monitor log files and the Logging.ini configuration file"
sidebar_position: 90
---

# AD Monitor Logging Configuration

AD Monitor is the native Threat Prevention component that loads into the LSASS process on a domain
controller and intercepts Active Directory, LDAP, Kerberos, NTLM, and related activity. It keeps its
own log files and its own configuration file, separate from the managed components. For the
Enterprise Manager, Administration Console, and Agent logs, see the
[Log Files and Logging Configuration](/docs/threatprevention/8.1/troubleshooting/logging.md) topic.

:::warning
Verbose AD Monitor logging on a busy domain controller produces a large volume of
output. Enable only the categories you need, and return the configuration to its original state
after you finish collecting logs.
:::

## Log Files

AD Monitor writes to the `ADMonitor_logs` folder inside the Agent installation folder on the domain
controller. The default path is:

**…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\ADMonitor_logs\**

| Log file | Contents |
| --- | --- |
| DebugTrace.log | Verbose, code-level trace of the path AD Monitor takes while processing activity. Use it to diagnose why something doesn't work. |
| EventTrace.log | One structured line per captured event. Use it to confirm that a specific event was captured, and for automated parsing. |
| HookTrace.log | Trace of the API hooks themselves. |
| LoaderTrace.log | Trace of AD Monitor loading into the host process. |
| DotNetLoaderTrace.log | Trace of the managed components AD Monitor loads. |

A log file is rolled over on the schedule set by `RollingInterval`, and once it reaches
`MaxFileSizeMb`. The rolled-over file carries the date and time in its name, for example
`DebugTrace_2026-08-13_00-00-00-635.log`.

To collect these files without signing in to the domain controller, use **Get Agent Log** in the
Agents interface. It downloads the `ADMonitor_logs` folder along with the Agent host logs. See the
[Access Agent Log Files](/docs/threatprevention/8.1/admin/agents/agents-windows/loglevelconfiguration.md#access-agent-log-files)
topic for additional information.

AD Monitor loads into more than one process, and the log file names carry the context it loaded
into. Alongside the file names above, the same folder holds a `Term` set for the Terminal Services
context and an `Svchost` set for the svchost-hosted context, for example `TermDebugTrace.log`,
`TermHookTrace.log`, and `SvchostDebugTrace.log`. Read the set that matches the process you're
investigating; for Active Directory and authentication activity on a domain controller, that's the
unprefixed set.

### Changes in Version 8.1

Version 8.1 replaces `ADTrace.log` and `LDAPTrace.log` with a single `EventTrace.log`. Alongside the
Active Directory object changes and LDAP queries that the two retired files carried,
`EventTrace.log` also records Kerberos, DCSync, NTLM, password change, AD CS, AD FS, and FSMO
events, none of which had a dedicated log file before.

A log bundle contains either `ADTrace.log` and `LDAPTrace.log`, or `EventTrace.log` — never both.
This is a reliable way to tell which version produced a bundle.

The same release also removes a disk write for every logged line. Only Critical and Error entries
are written to disk immediately; everything else is buffered and written at the interval set by
`FlushIntervalMillis`. Verbose logging therefore costs less on a busy domain controller than it did
in earlier versions.

:::note
`DebugTrace.log` and `EventTrace.log` cover related activity but serve different purposes.
`DebugTrace.log` is an unstructured trace of a code path. `EventTrace.log` is a concise, structured
record of what was captured.
:::

## Logging.ini

AD Monitor reads its settings from `Logging.ini` in the Agent installation folder on the domain
controller. The default path is:

**…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\Logging.ini**

:::warning
AD Monitor reads `Logging.ini` when it loads into the LSASS process. A change to this
file takes effect only after the Agent service restarts. This differs from the managed components,
which apply configuration changes as soon as the file is saved.
:::

The file ships with the following settings. Lines that begin with `//` are comments.

```ini
DebugTrace = Warning
// DebugFilter = Rules Kerberos
// HookTrace = Warning
// EventFilter = AdmEvent LdapEvent
// FlushIntervalMillis = 500
MaxFileSizeMb = 20
RollingInterval = 24:00:00
MaxLogFiles = 5
```

### Settings

| Setting | Description |
| --- | --- |
| DebugTrace | Minimum severity written to `DebugTrace.log`. Valid values, from most to least verbose: `Debug`, `Data`, `ApiCall`, `Warning`, `Error`, and `Critical`. |
| HookTrace | Minimum severity written to `HookTrace.log`, using the same values as `DebugTrace`. |
| DebugFilter | Space-separated list of the areas to include in `DebugTrace.log` and `HookTrace.log`. Leave it unset to include everything. |
| EventFilter | Space-separated list of the event categories to write to `EventTrace.log`. Leave it unset to disable event logging. |
| FlushIntervalMillis | How often, in milliseconds, buffered entries are written to disk. The default is 500 and the maximum is 60000. Critical and Error entries in `DebugTrace.log` and `HookTrace.log` are always written immediately. |
| MaxFileSizeMb | Size in megabytes at which a log file is rolled over. The default is 20. |
| RollingInterval | Time interval at which a log file is rolled over, in `hh:mm:ss` format. |
| MaxLogFiles | Number of rolled-over files to keep. |

`EventFilter` is unset by default, so `EventTrace.log` stays empty until you list the categories you
want. Setting `AdmEvent` or `LdapEvent` also starts the underlying Active Directory and LDAP capture
when AD Monitor loads.

:::warning
`EventTrace.log` output is always buffered, including Critical and Error entries. If the
LSASS process terminates without shutting down cleanly, up to one flush interval's worth of entries
is lost. When you investigate a crash, read `DebugTrace.log`, where Critical and Error entries reach
the disk immediately.
:::

`Logging.ini` holds further settings that control Exchange monitoring and internal diagnostics. Set
those only when [Netwrix Support](https://www.netwrix.com/support.html) asks you to.

:::warning
`DebugFilter` narrows all output in `DebugTrace.log` and `HookTrace.log`, not only the
areas you leave out. Entries that carry no area tag disappear as well. To keep the untagged baseline
output, leave `DebugFilter` unset and use `EventFilter` to scope `EventTrace.log` instead.
:::

### DebugFilter Values

| Value | Activity it includes |
| --- | --- |
| AD | Directory operations — adding, modifying, renaming, and removing objects, which covers object and group changes |
| ADCS | Active Directory Certificate Services requests |
| ADFS | Active Directory Federation Services activity |
| DCSync | DCSync replication requests |
| FSMO | FSMO role transfers and seizures |
| Kerberos | Kerberos ticket requests and validation |
| LDAP | LDAP connections and queries |
| NTLM | NTLM authentication |
| PwdChg | Password changes and resets |
| Rules | Policy rule evaluation, including which rule allowed or blocked an operation |
| Timers | AD Monitor's internal timer housekeeping. This reports on AD Monitor itself, not on directory activity. |

`Rules` isn't an activity area of its own. It applies to every operation type, so combine it with
the area you are investigating. For example, `DebugFilter = Rules DCSync` shows why a specific
DCSync request was allowed or blocked.

### EventFilter Values

| Value | Events written to EventTrace.log |
| --- | --- |
| AdmEvent | Active Directory object changes |
| LdapEvent | LDAP queries |
| KerberosEvent | Kerberos ticket activity |
| DCSyncEvent | DCSync replication requests |
| NTLMEvent | NTLM authentication |
| PwdChgEvent | Password changes and resets |
| ADCSEvent | Active Directory Certificate Services requests |
| ADFSEvent | Active Directory Federation Services activity |
| FSMOEvent | FSMO role transfers and seizures |

## Configuration Examples

Restart the Agent service after each of the following changes.

**Investigate DCSync activity**

Records the hook-level trace of every DCSync request in `DebugTrace.log` and a structured record of
each one in `EventTrace.log`:

```ini
DebugTrace = Debug
DebugFilter = DCSync
EventFilter = DCSyncEvent
```

**Confirm which rule blocked a DCSync request**

Adds rule evaluation to the trace. `DebugTrace.log` reports the rule that blocked the request, or
reports that no rule allowed it. `EventTrace.log` records the request with its blocked status and
the ID of the policy that applied. Look up that policy ID in the Administration Console to identify
the policy responsible:

```ini
DebugTrace = Debug
DebugFilter = Rules DCSync
EventFilter = DCSyncEvent
```

**Investigate Active Directory object and group changes**

Records every directory operation AD Monitor intercepts, which covers group membership changes,
because a group is an Active Directory object:

```ini
DebugTrace = Debug
DebugFilter = AD
EventFilter = AdmEvent
```

## Configuration Errors

AD Monitor validates `Logging.ini` when it loads and reports problems in `DebugTrace.log`. An
invalid line is ignored; the rest of the file still applies.

| Message in DebugTrace.log | Cause | Resolution |
| --- | --- | --- |
| Unrecognized EventFilter token '\<value\>', ignoring | The value is misspelled or isn't a valid category | Correct the value against the EventFilter list in this topic |
| Incorrect FlushIntervalMillis value: \<number\>, must be > 0 and \<= 60000 | The value is out of range | Set a value between 1 and 60000. The previous value stays in effect. |
| Incorrect 'MaxFileSizeMb' specified: should be a positive number | The value isn't a positive number | Set a positive whole number |

Two more conditions are expected behavior rather than errors:

- `EventTrace.log` stays empty while Active Directory activity is happening. `EventFilter` is unset,
  which disables event logging. Set it to the categories you need.
- `HookTrace.log` grows quickly. Set `HookTrace = Warning`, or a less verbose level, to reduce the
  output.

See the [Best Practices and Troubleshooting](/docs/threatprevention/8.1/troubleshooting/overview.md)
topic for additional information.
