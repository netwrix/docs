---
description: 'If the Netwrix Threat Manager web console reports events but shows no threats, an EDR/XDR/antivirus product may be interfering with PostgreSQL. This article explains how to create exclusions for PostgreSQL file paths to resolve the issue.'
keywords:
- postgresql
- exclusions
- EDR
- XDR
- antivirus
- backlog
- web console
- Threat Manager
- database maintenance
products:
- threat-manager
title: 'No Threats Detected Despite Web Console Reporting Events'
knowledge_article_id: kA04u000000wnnICAQ
---

# No Threats Detected Despite Web Console Reporting Events

## Symptoms

- You see no threats detected for several days, but the web console continues to report events.
- The backlog section of the Netwrix Threat Manager console is not populated. As a result, it's impossible to determine the status of the database maintenance job, as well as other components of the console.

## Cause

An EDR, XDR, or antivirus solution in your Netwrix Threat Manager environment conflicts with the PostgreSQL application.

## Resolution

Create exclusions for the PostgreSQL file paths below:

```text
\Program Files\Stealthbits\PostgreSQL14 
\ProgramData\Stealthbits\PostgreSQL14 
\Program Files\Stealthbits\StealthDEFEND 
\Program Files\STEALTHbits\PostgreSQL14\bin\postgres.exe 
\Program Files\STEALTHbits\PostgreSQL14\bin\psql.exe
\Program Files\STEALTHbits\PostgreSQL14\bin\pg_ctl.exe
```

**TIP:** Learn more about custom IOA rules in [How to Create Custom Rules ⸱ CrowdStrike](https://www.crowdstrike.com/blog/tech-center/custom-ioas/)

## Related articles

- [How to Create Custom Rules ⸱ CrowdStrike](https://www.crowdstrike.com/blog/tech-center/custom-ioas/)