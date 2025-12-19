---
title: "Which components within the Endpoint Policy Manager product family will work with what operating system?"
description: "Which components within the Endpoint Policy Manager product family will work with what operating system?"
sidebar_position: 110
---

# Which components within the Endpoint Policy Manager product family will work with what operating system?

The following matrix describes our product compatibility.

:::note
There may be some unusual circumstances where, for instance, you can install the Netwrix
Endpoint Policy Manager (formerly PolicyPak) Cloud Agent on Windows 8 and later (Core Edition), but
Endpoint Policy Manager Preferences Manager will not run with it, since Group Policy Preferences is
not available upon that operating system.
:::


:::note
Starting with builds later that 732, Windows XP is not supported in any way by Endpoint
Policy Manager. Windows 7 Starter and Windows 8 RT ( and later) are also not supported by Endpoint
Policy Manager.
:::


:::note
Some PPSec Manager features may be not available on Pro and lower tier editions. As an
example, AppLocker requires Windows Enterprise edition.
:::


|                                                              | Endpoint Policy Manager Application Settings Manager, Endpoint Policy Manager Browser Router, Java Rules Manager, Least Privilege Manager and all other Endpoint Policy Manager Components | Endpoint Policy Manager Admin Templates Manager (deploying Microsoft ADMX settings)" | Endpoint Policy Manager Security Settings Manager (deploying Microsoft Security settings) | Endpoint Policy Manager Preferences Manager (deploying Microsoft Group Policy Preferences settings) | Endpoint Policy Manager Cloud Agent | PPGPCR (Client) [Management Station] | PPGPCR (Endpoint) | PPGPCR (Server) |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------ | ----------------- | --------------- |
| Windows XP, Server 2003, Windows 2008 & Windows Vista        | No                                                                                                                                                                                         | No                                                                                   | No                                                                                        | No                                                                                                  | No                                  | No                                   | No                | No              |
| Windows 7 Pro, Enterprise & Ultimate                         | Yes                                                                                                                                                                                        | Yes                                                                                  | Yes                                                                                       | Yes                                                                                                 | Yes                                 | Yes                                  | Yes               | No              |
| Windows 7 Home or Basic, Windows 8/8.1 (Core & Home Edition) | Yes\*                                                                                                                                                                                      | Yes\*                                                                                | Yes\*                                                                                     | No                                                                                                  | Yes\*                               | Yes\*                                | Yes               | No              |
| Windows 7 Starter                                            | No                                                                                                                                                                                         | No                                                                                   | No                                                                                        | No                                                                                                  | No                                  | No                                   | No                | No              |
| Windows 8/8.1 (Pro & Enterprise edition)                     | Yes                                                                                                                                                                                        | Yes                                                                                  | Yes                                                                                       | Yes                                                                                                 | Yes                                 | Yes                                  | Yes               | No              |
| Windows 8/8.1 (RT edition)                                   | No                                                                                                                                                                                         | No                                                                                   | No                                                                                        | No                                                                                                  | No                                  | No                                   | No                | No              |
| Windows Server 2008 R2                                       | Yes                                                                                                                                                                                        | Yes                                                                                  | Yes                                                                                       | Yes                                                                                                 | Yes                                 | Yes                                  | Yes               | Yes             |
| Windows Server 2012, 2016 and Later                          | Yes                                                                                                                                                                                        | Yes                                                                                  | Yes                                                                                       | Yes                                                                                                 | Yes                                 | Yes                                  | Yes               | Yes             |
| Windows 10 (Pro, Enterprise & Education)                     | Yes                                                                                                                                                                                        | Yes                                                                                  | Yes                                                                                       | Yes                                                                                                 | Yes                                 | Yes                                  | Yes               | No              |

\* Endpoint Policy Manager utilizes the built-in GPPrefs Item Level Targeting. As such, any item
which relies upon Item Level Targeting will evaluate to TRUE or not function, since GPPrefs are not
part of this operating system.

