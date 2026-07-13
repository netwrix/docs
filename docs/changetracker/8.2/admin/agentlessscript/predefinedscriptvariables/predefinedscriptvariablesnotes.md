---
title: "Notes"
description: "Notes"
sidebar_position: 10
---

# Notes

All Commands are automatically followed by the Newline character, except for the `Send` command
where this must be specified explicitly. This is to allow sending single characters in response to
menu options etc.

Commands may occur multiple times, for example to exclude multiple matching lines.

## Comment Line

Use of # at the start of a script line will render the following text as a comment only e.g. # For
information only - describes the behavior of the login script.

## Capture

Captures the data received in the next 5 seconds into the named variable. Example to capture the
login banner when placed at the head of a script e.g. `Capture,$$BANNER$$`

## CaptureTimed

Captures the data received in the specified number of seconds into the named variable. Example to
capture the login banner when placed at the head of a script where this takes up to 10 seconds to
appear e.g. `Capture,$$BANNER$$,10`

## ExcludeMatchesWithComment

Excludes lines matching the given regex from the output text, for example use this to exclude lines
with an uptime value which would otherwise be considered a change e.g.
`ExcludeMatchesWithComment,*** uptime line removed ***,uptime`

## Execute

Executes the given command and waits for one of the prompts in the received data e.g.
`Execute,ls –al`

## ExecuteAndCapture

Executes the given command and waits for one of the prompts in the received data. Captures the
result into the given variable e.g. `ExecuteAndCapture,$$WHOAMI_RESULT$$,whoami`

## FileHashPath

Defines the name and path for the NNT*FILEHASH binary to use for Agentless FIM. General best
practice is to locate the NNT_FILEHASH binary in the */usr/bin\_ folder with execute permissions set
for the user account assigned to Change Tracker e.g. `FileHashPath,/usr/bin/NNT_FILEHASH_LINUX_X64`

## HashMatchesWithComment

Hashes lines matching the given regex in the output text using a SHA256 hash, for example to hide
passwords. Prefixes the hash with the comment if present e.g.
`HashMatchesWithComment,*** password hashed *** ,password`

## MorePrompt

Watches for the given ‘more’ prompt text in the response and sends the given text in reply e.g.
`MorePrompt,--More--,\n`

## Replace

Replaces the given string in the received data with the specified replacement e.g. to replace all
escape characters with: `Replace,\x1B,-`

## ReplaceCtrl

Replace all ctrl characters with the specified replacement (See also: `StripCtrl` below) e.g.
`ReplaceCtrl,-`

## Send

Sends the specified characters and continues immediately. Note that control characters are
represented as their ASCII hex values in the standard notation \xNN, where NN is the hex value of
the character (see Wikipedia’s
[Control Code Chart](http://en.wikipedia.org/wiki/ASCII%23ASCII_control_code_chart) article for
additional information) e.g. to send CTRL-Y character: `Send,\x19`

## SendCapture

Sends the specified characters and captures the data received in the next 5 seconds into the named
variable e.g. to pick a menu item ‘L’ and capture the result: `SendCapture,$$RESULT$$,L`

## SendCaptureTimed

Sends the specified characters and captures the data received in the specified number of seconds
into the named variable. e.g.to pick a menu item ‘L’ where the response takes 20s to appear and
capture the result e.g. `SendCapture,$$RESULT$$,20,L`

## Sleep

Pauses script execution for the given number of seconds e.g.: `Sleep,5`

## StripCtrl

removes all ANSI control characters from the returned data. Format is `StripCtrl,ON` or
`StripCtrl,OFF`

## WaitFor

Waits for the given text in the received data e.g.: `WaitFor,Credentials`

## WaitForPrompt

Waits for any of the prompts specified from the console Prompts list or the `AddPrompt` commands
