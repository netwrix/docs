---
title: "Can I get more details on how Endpoint Policy Scripts Manager processes run?"
description: "Can I get more details on how Endpoint Policy Scripts Manager processes run?"
sidebar_position: 170
---

# Can I get more details on how Endpoint Policy Scripts Manager processes run?

Q: Is there a way of knowing on the local machine if a script policy returns an error during the
script execution and will tell me why the CSE didn't complete the execution properly?

A: The short answer is yes - on the local machine you can review the logs to get detailed
information about script executions? The logs are in the following locations:

User side logs:
`%userprofile%\AppData\Local\PolicyPak\PolicyPak Scripts Manager\ppUser_operational.log`

Computer side logs: `%programdata%\PolicyPak\PolicyPak Scripts Manager\ppComputer_operational.log`

Q: What happens if a PowerShell script takes longer to execute then the run interval (let's say we
push an infinite loop), will the CSE terminate the process after a while? Is there a timeout?

A: If the script execution takes longer than 2mins, the CSE reports in the operational log: "Script
timed out. Command line: ..." and the script process will continue running until it finishes. It
will not time out. Logging of that script will stop after the 2 minutes and the next script will
start up. We will not stop a running script.

Q: Does the CSE spawn a new process at each refresh interval, or does it wait until the previous
process closes? Let's say the refresh interval is 5min and a script takes 10 min to execute, will it
spawn a new process at the refresh interval or wait for the old one to finish?

A: The CSE will span a new process for each script. It will not wait for the previous one to
complete.

Q: Does the CSE process script policies like a stack (First In - First Out) or does it execute all
policies in parallel?

A: There are two types of policies with Scripts Manager:

1. Standard/Legacy Policies: Non-trigger based policies that are executed at each refresh interval.
   The next script in order will wait until the previous script completes or two minutes has passed
   – whichever is less.
2. Trigger-Based Policies: The script will execute asynchronously by the corresponding trigger.

Q: There are occasionally some Chinese characters that appear in the logs. Is this expected
behavior? Can this cause the CSE to malfunction?

A: This is because the output from the script engine is in ANSI code but our logs are in Unicode. It
does not cause any issues with the CSE or the ability to execute the script. This is strictly in the
logging.


