---
title: "Where do scripts run? How are they protected from unauthorized access? How can I change the location of where scripts are stored?"
description: "Where do scripts run? How are they protected from unauthorized access? How can I change the location of where scripts are stored?"
sidebar_position: 30
---

# Where do scripts run? How are they protected from unauthorized access? How can I change the location of where scripts are stored?

Scripts from Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts Manager are pre-stored
before running in the following folder:

`\ProgramData\PolicyPak\PolicyPak Scripts Manager\Temporary Scripts`

![827_1_image002_950x293](/images/endpointpolicymanager/scriptstriggers/827_1_image002_950x293.webp)

During script processing time:

- The files can be listed and enumerated by any user.

- But they can only be read by the correct contextual person.

For instance:

- Scripts configured to be run as a USER can be read by THAT user and LOCAL SYSTEM.
- Scripts configured to be run as SYSTEM can only be read by LOCAL SYSTEM.

If you want to change the temporary script location place you can use the ADMX settings to do it;
but then you are responsible for setting the right protection on the folder and self-testing that it
works as expected.
Find the setting Computer Configuration | Admin Templates Manager | PolicyPak ADMX Settings |
Client-Side Extensions | Scripts Manager | Use custom location for temporary script files like
what's seen here.

![827_3_image004](/images/endpointpolicymanager/scriptstriggers/827_3_image004.webp)


