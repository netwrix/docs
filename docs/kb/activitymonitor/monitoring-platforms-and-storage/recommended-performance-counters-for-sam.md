---
description: >-
  Lists the recommended SAM Agent performance counters, shows system counters to
  collect, and provides step-by-step instructions to register, collect, and
  unregister SAM performance counters.
keywords:
  - SAM
  - performance counters
  - Performance Monitor
  - Get-Counter
  - perfcounters
  - SAM Agent
  - performance monitoring
products:
  - activitymonitor
sidebar_label: Recommended Performance Counters for SAM
tags: []
title: "Recommended Performance Counters for SAM"
knowledge_article_id: kA04u0000000JymCAE
---

# Recommended Performance Counters for SAM

SAM Agent comes with performance counters for some internal runtime data. These counters, along with several standard system-wide counters (memory and CPU usage, TCP disconnections, etc.), can help you diagnose performance issues.

The following counters are provided by SAM.

## SAM counters

| Category | Recommended | Counter | Description |
| --- | ---: | --- | --- |
| Qumulo |  | `Activity Monitor - Qumulo\Queue Size` | Number of events waiting in queue to be processed |
| NetApp | ✔ | `Activity Monitor - NetApp\Events Received` | Number of events received from NetApp |
| NetApp | ✔ | `Activity Monitor - NetApp\Events Received/sec` | Rate at which events are received from NetApp |
| NetApp | ✔ | `Activity Monitor - NetApp\Events Reported` | Number of events passed the filters and being reported to outputs |
| NetApp | ✔ | `Activity Monitor - NetApp\Events Reported/sec` | Rate at which events are reported to outputs |
| NetApp | ✔ | `Activity Monitor - NetApp\Session Negotiated` | Number of connections established with ONTAP cluster nodes |
| NetApp | ✔ | `Activity Monitor - NetApp\Active Connections` | Number of active connections with ONTAP cluster nodes |
| NetApp |  | `Activity Monitor - NetApp\Outage Files` | Number of outage (resilience) files processed |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Events Received` | Number of events received from CEE |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Events Received/sec` | Rate at which events are received from CEE |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Events Reported` | Number of events passed the filters and being reported to outputs |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Events Reported/sec` | Rate at which events are reported to outputs |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Queue Size` | Number of events received from CEE and waiting in queue to be processed |
| VNX, Isilon, Unity | ✔ | `Activity Monitor - EMC\Receive Throttling` | Delay, in milliseconds, introduced to manage the queue |
| Outputs | ✔ | `Activity Monitor - Outputs\Events Reported` | Total number of events reported |
| Outputs | ✔ | `Activity Monitor - Outputs\Events Reported/sec` | Rate at which events are reported |
| Outputs |  | `Activity Monitor - Outputs\Events Reported to Files` | Total number of events reported to log files |
| Outputs |  | `Activity Monitor - Outputs\Events Reported to Syslog` | Total number of events reported to syslog servers |
| Outputs |  | `Activity Monitor - Outputs\Events Reported to AMQP` | Total number of events reported to AMQP servers (not used currently) |
| Outputs | ✔ | `Activity Monitor - Outputs\Resolved SIDs` | Number of attempts, both successful and failed, to resolve SIDs to names |
| Outputs | ✔ | `Activity Monitor - Outputs\Resolved SIDs/sec` | Rate at which SIDs are resolved to names |
| Outputs | ✔ | `Activity Monitor - Outputs\Resolved SIDs Failures` | Number of failed attempts to resolve SIDs to names |
| Outputs | ✔ | `Activity Monitor - Outputs\Resolved SIDs Avg Time` | The moving average length of time, in microseconds, per a SID to name translation |
| Outputs | ✔ | `Activity Monitor - Outputs\Resolved SIDs Max Time` | The moving maximum length of time, in microseconds, per a SID to name translation |
| Outputs |  | `Activity Monitor - Outputs\Translated UIDs` | Number of attempts, both successful and failed, to translate UIDs to SIDs |
| Outputs |  | `Activity Monitor - Outputs\Translated UIDs/sec` | Rate at which UIDs are translated to SIDs |
| Outputs |  | `Activity Monitor - Outputs\Translated UIDs Failures` | Number of failed attempts to translate UIDs to SIDs |
| Outputs |  | `Activity Monitor - Outputs\Translated UIDs Avg Time` | The moving average length of time, in microseconds, per a UID to SID translation |
| Outputs |  | `Activity Monitor - Outputs\Translated UIDs Max Time` | The moving maximum length of time, in microseconds, per a UID to SID translation |
| Outputs | ✔ | `Activity Monitor - Outputs\DNS Queries` | Number of DNS queries, both successful and failed |
| Outputs | ✔ | `Activity Monitor - Outputs\DNS Queries/sec` | Rate at which DNS queries are executed |
| Outputs | ✔ | `Activity Monitor - Outputs\DNS Queries Failures` | Number of failed DNS queries |
| Outputs | ✔ | `Activity Monitor - Outputs\DNS Queries Avg Time` | The moving average length of time, in microseconds, per a DNS query |
| Outputs | ✔ | `Activity Monitor - Outputs\DNS Queries Max Time` | The moving maximum length of time, in microseconds, per a DNS query |

It makes sense to monitor DNS and Active Directory queries (`DNS Queries...` and `Resolved SIDs...` counters) as they typically contribute the most to the processing time.

In addition to the SAM counters, we recommend collecting the following system counters:

## System counters to collect

| Counter | Notes |
| --- | --- |
| `\Processor(_Total)\% Processor Time` |  |
| `\Memory\Available MBytes` |  |
| `\Paging File(_Total)\% Usage` |  |
| `\TCPv4\Connections Reset` |  |
| `\TCPv4\Segments Received/sec` |  |
| `\TCPv4\Segments Retransmitted/Sec` |  |
| `\TCPv6\Segments Received/sec` |  |
| `\TCPv6\Segments Retransmitted/Sec` |  |
| `\Network Interface(*)\Bytes Received/sec` |  |
| `\Network Interface(*)\Bytes Sent/sec` |  |
| `\Network Interface(*)\Output Queue Length` |  |
| `\Network Interface(*)\Packets Received Discarded` |  |
| `\Network Interface(*)\Packets Received Errors` |  |
| `\Process(FPolicyServerSvc)\% Processor Time` | For NetApp monitoring |
| `\Process(FPolicyServerSvc)\Elapsed Time` | For NetApp monitoring |
| `\Process(FPolicyServerSvc)\Handle Count` | For NetApp monitoring |
| `\Process(FPolicyServerSvc)\Thread Count` | For NetApp monitoring |
| `\Process(FPolicyServerSvc)\Private Bytes` | For NetApp monitoring |
| `\Process(FPolicyServerSvc)\Working Set` | For NetApp monitoring |
| `\Process(CelerraServerSvc)\% Processor Time` | For VNX/Isilon/Unity monitoring |
| `\Process(CelerraServerSvc)\Elapsed Time` | For VNX/Isilon/Unity monitoring |
| `\Process(CelerraServerSvc)\Handle Count` | For VNX/Isilon/Unity monitoring |
| `\Process(CelerraServerSvc)\Thread Count` | For VNX/Isilon/Unity monitoring |
| `\Process(CelerraServerSvc)\Private Bytes` | For VNX/Isilon/Unity monitoring |
| `\Process(CelerraServerSvc)\Working Set` | For VNX/Isilon/Unity monitoring |
| `\Process(FSACLoggingSvc)\% Processor Time` |  |
| `\Process(FSACLoggingSvc)\Elapsed Time` |  |
| `\Process(FSACLoggingSvc)\Handle Count` |  |
| `\Process(FSACLoggingSvc)\Thread Count` |  |
| `\Process(FSACLoggingSvc)\Private Bytes` |  |
| `\Process(FSACLoggingSvc)\Working Set` |  |
| `\Process(HitachiService)\% Processor Time` |  |
| `\Process(HitachiService)\Elapsed Time` |  |
| `\Process(HitachiService)\Handle Count` |  |
| `\Process(HitachiService)\Thread Count` |  |
| `\Process(HitachiService)\Private Bytes` |  |
| `\Process(HitachiService)\Working Set` |  |
| `\Process(SBTService)\% Processor Time` |  |
| `\Process(SBTService)\Elapsed Time` |  |
| `\Process(SBTService)\Handle Count` |  |
| `\Process(SBTService)\Thread Count` |  |
| `\Process(SBTService)\Private Bytes` |  |
| `\Process(SBTService)\Working Set` |  |
| `\Process(MonitorService.exe)\% Processor Time` |  |
| `\Process(MonitorService.exe)\Elapsed Time` |  |
| `\Process(MonitorService.exe)\Handle Count` |  |
| `\Process(MonitorService.exe)\Thread Count` |  |
| `\Process(MonitorService.exe)\Private Bytes` |  |
| `\Process(MonitorService.exe)\Working Set` |  |

## Prepare for performance monitoring

The SAM performance counters are not registered by default. You need to register them manually.

On each SAM Agent server:

1. Run `cmd.exe` as Administrator.
2. Change the current directory to the agent installation folder (the default path shown here is a file path and must be preserved exactly):

   `cd C:\Program Files\Stealthbits\StealthAUDIT\FSAC`

3. Register the performance counters manifest file:

   `lodctr /M:PerfCounters.man`

   Expected output:

   `Info: Successfully installed performance counters in C:\Program Files\Stealthbits\StealthAUDIT\FSAC\PerfCounters.man`

4. Restart the services:

   ```
   sc stop SBFileMonAgentSvc
   sc stop FPolicyServerSvc
   sc stop CelerraServerSvc
   sc stop SBTLoggingSvc

   sc start SBFileMonAgentSvc
   sc start SBTLoggingSvc
   ```

## Collect performance data

The performance data can be observed or saved using any tool capable of collecting performance counters, for example, Performance Monitor.

Below is a PowerShell script that collects the counters every second and stores them in `perfcounters_SERVERNAME_TIMESTAMP.csv` files. The expected file size per day is about 50MB.

Run the script on each agent server using the following command:

`powershell -file SAM.PerfCollect.ps1`

To stop the script press Ctrl+C.

Script (save it to `SAM.PerfCollect.ps1`):

```powershell
$sampleInterval = 1
$maxSamples = 0
$outputFile = "perfcounters_$($env:COMPUTERNAME)_$(Get-Date -Format "yyyy_MM_dd_HH_mm_ss").csv"

$counters =
    @(
     "\Processor(_Total)\% Processor Time"
    ,"\Memory\Available MBytes"
    ,"\Paging File(_Total)\% Usage"
    ,"\TCPv4\Connections Reset"
    ,"\TCPv4\Segments Received/sec"
    ,"\TCPv4\Segments Retransmitted/Sec"
    ,"\TCPv6\Connections Reset"
    ,"\TCPv6\Segments Received/sec"
    ,"\TCPv6\Segments Retransmitted/Sec"
    ,"\Network Interface(*)\Bytes Received/sec"
    ,"\Network Interface(*)\Bytes Sent/sec"
    ,"\Network Interface(*)\Output Queue Length"
    ,"\Network Interface(*)\Packets Received Discarded"
    ,"\Network Interface(*)\Packets Received Errors"
   
    ,"\Activity Monitor - Qumulo\Queue Size"     

    ,"\Activity Monitor - NetApp\Active Connections"
    ,"\Activity Monitor - NetApp\Events Received"
    ,"\Activity Monitor - NetApp\Events Received/sec"
    ,"\Activity Monitor - NetApp\Events Reported"
    ,"\Activity Monitor - NetApp\Events Reported/sec"
    ,"\Activity Monitor - NetApp\Outage Files"   
    ,"\Activity Monitor - NetApp\Overloaded"   
    ,"\Activity Monitor - NetApp\Queue Size"   
    ,"\Activity Monitor - NetApp\Session Negotiated"   

    ,"\Activity Monitor - EMC\Events Received"   
    ,"\Activity Monitor - EMC\Events Received/sec"   
    ,"\Activity Monitor - EMC\Events Reported"   
    ,"\Activity Monitor - EMC\Events Reported/sec"   
    ,"\Activity Monitor - EMC\HTTP Active Connections"   
    ,"\Activity Monitor - EMC\Queue Size"   
    ,"\Activity Monitor - EMC\Receive Throttling"       
    
    ,"\Activity Monitor - Outputs\DNS Queries"   
    ,"\Activity Monitor - Outputs\DNS Queries Avg Time"   
    ,"\Activity Monitor - Outputs\DNS Queries Failures"   
    ,"\Activity Monitor - Outputs\DNS Queries Max Time"   
    ,"\Activity Monitor - Outputs\DNS Queries/sec"   
    ,"\Activity Monitor - Outputs\Events Reported"   
    ,"\Activity Monitor - Outputs\Events Reported to AMQP"   
    ,"\Activity Monitor - Outputs\Events Reported to Files"   
    ,"\Activity Monitor - Outputs\Events Reported to Syslog"   
    ,"\Activity Monitor - Outputs\Events Reported/sec"   
    ,"\Activity Monitor - Outputs\Resolved SIDs"   
    ,"\Activity Monitor - Outputs\Resolved SIDs Avg Time"   
    ,"\Activity Monitor - Outputs\Resolved SIDs Failures"   
    ,"\Activity Monitor - Outputs\Resolved SIDs Max Time"   
    ,"\Activity Monitor - Outputs\Resolved SIDs/sec"   
    ,"\Activity Monitor - Outputs\Translated UIDs"   
    ,"\Activity Monitor - Outputs\Translated UIDs Avg Time"   
    ,"\Activity Monitor - Outputs\Translated UIDs Failures"   
    ,"\Activity Monitor - Outputs\Translated UIDs Max Time"   
    ,"\Activity Monitor - Outputs\Translated UIDs/sec"   
    
    ,"\Process(HitachiService)\% Processor Time"
    ,"\Process(HitachiService)\Elapsed Time"
    ,"\Process(HitachiService)\Handle Count"
    ,"\Process(HitachiService)\Thread Count"
    ,"\Process(HitachiService)\Private Bytes"
    ,"\Process(HitachiService)\Working Set"    
    ,"\Process(FPolicyServerSvc)\% Processor Time"
    ,"\Process(FPolicyServerSvc)\Elapsed Time"
    ,"\Process(FPolicyServerSvc)\Handle Count"
    ,"\Process(FPolicyServerSvc)\Thread Count"
    ,"\Process(FPolicyServerSvc)\Private Bytes"
    ,"\Process(FPolicyServerSvc)\Working Set"
    ,"\Process(FSACLoggingSvc)\% Processor Time"
    ,"\Process(FSACLoggingSvc)\Elapsed Time"
    ,"\Process(FSACLoggingSvc)\Handle Count"
    ,"\Process(FSACLoggingSvc)\Thread Count"
    ,"\Process(FSACLoggingSvc)\Private Bytes"
    ,"\Process(FSACLoggingSvc)\Working Set"
    ,"\Process(CelerraServerSvc)\% Processor Time"
    ,"\Process(CelerraServerSvc)\Elapsed Time"
    ,"\Process(CelerraServerSvc)\Handle Count"
    ,"\Process(CelerraServerSvc)\Thread Count"
    ,"\Process(CelerraServerSvc)\Private Bytes"
    ,"\Process(CelerraServerSvc)\Working Set"    
    ,"\Process(SBTService)\% Processor Time"
    ,"\Process(SBTService)\Elapsed Time"
    ,"\Process(SBTService)\Handle Count"
    ,"\Process(SBTService)\Thread Count"
    ,"\Process(SBTService)\Private Bytes"
    ,"\Process(SBTService)\Working Set"     
    ,"\Process(MonitorService.exe)\% Processor Time"
    ,"\Process(MonitorService.exe)\Elapsed Time"
    ,"\Process(MonitorService.exe)\Handle Count"
    ,"\Process(MonitorService.exe)\Thread Count"
    ,"\Process(MonitorService.exe)\Private Bytes"
    ,"\Process(MonitorService.exe)\Working Set"   
    
    )

$variables = @{
    SampleInterval = $sampleInterval
    Counter = $counters
}    
    
if ($maxSamples -eq 0) {
    $variables.Add("Continuous", 1)}
else {
    $variables.Add("MaxSamples", "$maxSamples")}
    
Write-Host "Collecting performance counters to $outputFile... Press Ctrl+C to stop."
    
Get-Counter @variables | Export-Counter -FileFormat csv -Path $outputFile -Force
```

## Unregister performance counters

When performance monitoring is not needed anymore, unregister the SAM performance counters.

On each SAM Agent server:

1. Run `cmd.exe` as Administrator.
2. Change the current directory to the agent installation folder:

   `cd C:\Program Files\Stealthbits\StealthAUDIT\FSAC`

3. Unregister the performance counters manifest file:

   `unlodctr /M:PerfCounters.man`

   Expected output:

   `Info: Successfully uninstalled the performance counters from the counter definition XML file PerfCounters.man.`

4. Restart the services:

   ```
   sc stop SBFileMonAgentSvc
   sc stop FPolicyServerSvc
   sc stop CelerraServerSvc
   sc stop SBTLoggingSvc

   sc start SBFileMonAgentSvc
   sc start SBTLoggingSvc
   ```

Download the sample script:

https://downloads.stealthbits.com/access/files/KB_Attachments/SAM.PerfCollect.ps1
