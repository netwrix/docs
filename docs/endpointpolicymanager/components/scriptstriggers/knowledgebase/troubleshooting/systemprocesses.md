---
title: "Why don't Batch and PowerShell scripts get blocked when SYSTEM processes are blocked"
description: "Why don't Batch and PowerShell scripts get blocked when SYSTEM processes are blocked"
sidebar_position: 70
---

# Why don't Batch and PowerShell scripts get blocked when SYSTEM processes are blocked

When implementing SecureRun to block both User and System processes (as demonstrated in
[SecureRun to block User AND System executables](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/usersystemexecutables.md)
video) we find that EXEs, MSIs and VB scripts get smacked down as expected when running as the USER,
ADMIN or SYSTEM account. However, Batch and PowerShell scripts that are started from within a
previously opened cmd.exe or powershell.exe window do not get blocked when running as a system
process. Why don't they?

This is expected behavior. When you run an EXE, MSI and VB script a new process is created.
PolicyPak Least Privilege Manager then intercepts that process and applies the appropriate rule to
it. Batch and PowerShell scripts when run from within an open cmd.exe or powershell.exe window,
however, do not open a new process; they run within that existing process. As no new process is
started, there's nothing for Least Privilege Manager to intercept and the command is thereby allowed
to run.


