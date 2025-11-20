---
title: "How does caching of Item Level Targeting work when Endpoint Policy Manager ILT (ILT 2.0 Engine) is used?"
description: "How does caching of Item Level Targeting work when Endpoint Policy Manager ILT (ILT 2.0 Engine) is used?"
sidebar_position: 30
---

# How does caching of Item Level Targeting work when Endpoint Policy Manager ILT (ILT 2.0 Engine) is used?

The Endpoint Policy Manager -specific (aka New ILT engine or ILT 2.0 engine) caches evaluation
results in memory for 15 seconds. So, when the same ILT filter is evaluated during that 15 seconds
interval, the CSE uses cached results.

There is no ADMX setting to control this interval, but you can manually configure the DWORD value
under ` Software\Policies\PolicyPak\Criteria Engine\MemoryCacheLifetime` to set the memory cache
expiration period (service restart or computer reboot is required).

You can check the expiration period being used in the
`%programdata%\PolicyPak\PolicyPak Core Client\ppService.log`.

```
Initializing the Criteria Engine (2023/04/04, 15:28:32.094, PID: 5216, TID: 5220)
{
 Assessment timeout: 1000ms
 Assessment timeout behavior: use cached or default result if available, otherwise continue the assessment.
 Initializing the Memory Cache      
 {
  Lifetime: 00m 15s        
 }
} 
// End of Initializing the Criteria Engine, elapsed time: 00:00:00.002
```

Additionally, if the ILT engine cannot determine a result, it will use cached results from
persistent cache in cases when evaluation fails. Evaluation may fail due to an error or timeout.
This cache may be valid for 180 days:

```
Initializing the Criteria Engine (2023/04/04, 15:28:32.094, PID: 5216, TID: 5220
{
 Initializing the Fallback Cache
 {
   Lifetime: 180 days, 0h 00m 00s
 }
}
// End of Initializing the Criteria Engine, elapsed time: 00:00:00.002
```


