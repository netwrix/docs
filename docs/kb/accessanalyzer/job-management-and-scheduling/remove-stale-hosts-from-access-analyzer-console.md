---
description: >-
  Scripts to automatically remove stale hosts from Netwrix Access Analyzer host
  lists and console to reduce reporting clutter and remove the "Licensed host
  count exceeded" banner.
keywords:
  - stale hosts
  - purge hosts
  - Netwrix Access Analyzer
  - HostListsContentTbl
  - SA_HostMasterTbl
  - LastLogonTimestamp
  - LastOnline
  - SQL script
  - licensed host count
products:
  - access-analyzer
sidebar_label: Remove Stale Hosts from Access Analyzer Console
tags:
  - job-management-and-scheduling
title: "Remove Stale Hosts from Access Analyzer Console"
knowledge_article_id: kA04u0000000IzUCAU
---

# Remove Stale Hosts from Access Analyzer Console

## Summary
Stale hosts clutter reporting and show the "Licensed host count exceeded" banner.

## Issue
This article describes how to automatically remove (purge) stale hosts from target host lists and the Netwrix Access Analyzer console based on staleness. The stale hosts are defined by their existence in the `#tmp` temp table.

Two versions are shown below. The first is more complex because it supports multiple consoles and will only purge hosts from the Access Analyzer console specified in the `@SA_Host` variable. The second will purge from all consoles.

Standard criteria that define a stale host in these scripts are either that the AD Object has a `LastLogonTimestamp` older than 90 days, or that the `LastOnline` value for the host in Host Management is older than 90 days.

NOTE: This is designed to work for short names, and will not work for FQDNs without further modifications.

## SQL: Multi-console (only purge from the specified console)
```sql
--define Access Analyzer host so we don't delete from other consoles
declare @SA_Host varchar(64)
set @SA_Host='YourSAHostName'

--find stale computer objects based on AD or LastOnline in Host Inventory
select name, hostid
into #tmp
from SA_HostMasterTbl
where Name in (
  select substring(SamAccountName, 1, len(samaccountname)-1)
  from SA_ADInventory_ComputersView
  where LastLogonTimestamp (getdate()-90)
)
or LastOnline (getdate()-90)

--make hosts no longer visible in the console
delete from HostMaster_SANodeFilter
where HostID in (select hostID from #tmp) and SA_Node=@SA_Host

--delete from all host lists in the console
delete HLC
from HostListsContentTbl HLC
inner join HostListsTbl HLT
  on HLT.listID=HLC.listID and HLT.SA_Node=@SA_Host
where HLC.hostid in (select hostID from #tmp)

--delete host from host master table if it's not referenced anywhere else
delete from SA_HostMasterTbl
where HostID in (
  select hostid
  from SA_HostMasterTbl HMT
  where hostid in (select hostid from #tmp)
  --it's been identified as stale
  and not exists (
    select null from HostMaster_SANodeFilter SANF
    where SANF.hostID=HMT.hostID and SANF.SA_Node=@SA_Host
  ) --it's not visible in any other consoles
  and not exists (
    select null from HostListsContentTbl HLC  -- it's not in any host lists on any other consoles
    inner join HostListsTbl HLT
      on HLT.listID=HLC.listID AND HLT.SA_Node=@SA_Host
    where HLC.hostID=HMT.hostID
  )
)

drop table #tmp
```

## Instructions (Single-console scenario)
Assuming you only have one console, this gets considerably easier. The script below assumes a single console and will purge stale hosts accordingly. Just edit the criteria as you wish in the population of `#tmp`.

```sql
--find stale computer objects based on AD or LastOnline in Host Inventory
select name, hostid
into #tmp
from SA_HostMasterTbl
where Name in (
  select substring(SamAccountName, 1, len(samaccountname)-1)
  from SA_ADInventory_ComputersView
  where LastLogonTimestamp (getdate()-90)
)
or LastOnline (getdate()-90)

--make hosts no longer visible in the console
delete from HostMaster_SANodeFilter
where HostID in (select hostID from #tmp) and SA_Node=@SA_Host

--delete from all host lists in the console
delete from HostListsContentTbl
where hostid in (select hostID from #tmp)

--delete host from host master table if it's not referenced anywhere else
delete from SA_HostMasterTbl
where HostID in (select hostid from #tmp) --it's been identified as stale

drop table #tmp
```

Just edit the population criteria of `#tmp` as needed.

## Product
Product: Netwrix Access Analyzer  
Module: Netwrix Access Analyzer - Core  
Versions: 6.3+  
Legacy Article ID: 2291
