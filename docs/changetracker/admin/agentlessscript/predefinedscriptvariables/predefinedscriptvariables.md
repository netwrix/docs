---
title: "Predefined Script Variables"
description: "Predefined Script Variables"
sidebar_position: 10
---

# Predefined Script Variables

## Predefined Script Variables

The script execution engine creates these variables. Except for $$RESULT$$, it pre-populates them
with the values from the Credentials Key. Use these variables in the script where required.

- $$USERNAME$$ - the user name used for initial ssh / telnet connection
- $$PASSWORD$$ - the password used for initial ssh / telnet connection
- $$USERNAME2$$ - the second level (admin / privilege) user name
- $$PASSWORD2$$ - the second level (admin / privilege) password
- $$RESULTS$$ - the variable that holds the ‘result text’ of the script.

:::note
Using multiple capturing commands with the same variable appends the new data to the existing
value.
:::


### Script Commands

A script command consists of one or more parts separated by a comma. Generally the format order is
**CommandText,[VariableName],[Option],[Command]** where the portions in square brackets are optional
and depend on the command.

### Example

MorePrompt,-- More --

ExcludeMatchesWithComment,\*\*\* uptime line removed \*\*\*,uptime

Send,\x19

Send,$$PASSWORD$$\r\n

ExecuteAndCapture,$$RESULTS$$,ls -al
