---
title: "Notes"
description: "Notes"
sidebar_position: 10
---

# Notes

The script execution engine automatically follows all commands with the Newline character, except
for the `Send` command, where you must specify it explicitly. This lets you send single characters
in response to menu options, for example.

Commands may occur multiple times, for example to exclude multiple matching lines.

## Comment Line

If a script line starts with `#`, the script execution engine treats the rest of the line as a
comment only. For example, `# For information only` describes the behavior of the login script.

## Capture

Captures the data received in the next 5 seconds into the named variable. For example, place
`Capture,$$BANNER$$` at the head of a script to capture the login banner.

## CaptureTimed

Captures the data received in the specified number of seconds into the named variable. For example,
place `Capture,$$BANNER$$,10` at the head of a script to capture a login banner that takes up to
10 seconds to appear.

## ExcludeMatchesWithComment

Excludes lines that match the given regex from the output text. For example, use this command to
exclude lines with an uptime value that would otherwise register as a change:
`ExcludeMatchesWithComment,*** uptime line removed ***,uptime`

## Execute

Executes the given command and waits for one of the prompts in the received data. For example:
`Execute,ls -al`

## ExecuteAndCapture

Executes the given command and waits for one of the prompts in the received data. Captures the
result into the given variable. For example: `ExecuteAndCapture,$$WHOAMI_RESULT$$,whoami`

## FileHashPath

Defines the name and path for the `NNT_FILEHASH` binary to use for Agentless FIM. As a best
practice, locate the `NNT_FILEHASH` binary in the `/usr/bin` folder with execute permissions set
for the user account assigned to Change Tracker. For example:
`FileHashPath,/usr/bin/NNT_FILEHASH_LINUX_X64`

## HashMatchesWithComment

Hashes lines that match the given regex in the output text using a SHA256 hash. Use this, for
example, to hide passwords. Prefixes the hash with the comment if present. For example:
`HashMatchesWithComment,*** password hashed *** ,password`

## MorePrompt

Watches for the given ‘more’ prompt text in the response and sends the given text in reply. For
example: `MorePrompt,--More--,\n`

## Replace

Replaces the given string in the received data with the specified replacement. For example, to
replace all escape characters with a hyphen: `Replace,\x1B,-`

## ReplaceCtrl

Replaces all ctrl characters with the specified replacement. See also [StripCtrl](#stripctrl). For
example: `ReplaceCtrl,-`

## Send

Sends the specified characters and continues immediately. Control characters use the standard
notation \xNN, where NN is the hex value of the character. For more information, see Wikipedia's
[Control Code Chart](http://en.wikipedia.org/wiki/ASCII%23ASCII_control_code_chart) article. For
example, to send the CTRL-Y character: `Send,\x19`

## SendCapture

Sends the specified characters and captures the data received in the next 5 seconds into the named
variable. For example, to pick menu item ‘L’ and capture the result: `SendCapture,$$RESULT$$,L`

## SendCaptureTimed

Sends the specified characters and captures the data received in the specified number of seconds
into the named variable. For example, to pick menu item ‘L’ where the response takes 20 seconds to
appear and capture the result: `SendCapture,$$RESULT$$,20,L`

## Sleep

Pauses script execution for the given number of seconds. For example: `Sleep,5`

## StripCtrl

Removes all ANSI control characters from the returned data. The format is `StripCtrl,ON` or
`StripCtrl,OFF`.

## WaitFor

Waits for the given text in the received data. For example: `WaitFor,Credentials`

## WaitForPrompt

Waits for any of the prompts in the console Prompts list or added with the `AddPrompt` commands.
